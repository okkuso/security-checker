import { NextRequest, NextResponse } from "next/server";
import * as tls from "tls";
import * as dns from "dns";
import { URL } from "url";

interface CheckResult {
  name: string;
  passed: boolean;
  score: number;
  maxScore: number;
  detail: string;
  risk: string;
  description: string;
}

function parseDomain(input: string): string {
  let u = input.trim();
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  try {
    return new URL(u).hostname;
  } catch {
    throw new Error("無効なURLです");
  }
}

function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { signal: controller.signal, redirect: "follow" }).finally(() => clearTimeout(timer));
}

function checkSSL(hostname: string): Promise<{ valid: boolean; detail: string }> {
  return new Promise((resolve) => {
    const socket = tls.connect(443, hostname, { servername: hostname, timeout: 10000 }, () => {
      const cert = socket.getPeerCertificate();
      socket.destroy();
      if (!cert || !cert.valid_to) {
        resolve({ valid: false, detail: "証明書情報を取得できませんでした" });
        return;
      }
      const expiry = new Date(cert.valid_to);
      const now = new Date();
      if (expiry > now) {
        resolve({ valid: true, detail: `有効期限: ${cert.valid_to}` });
      } else {
        resolve({ valid: false, detail: `証明書期限切れ: ${cert.valid_to}` });
      }
    });
    socket.on("error", (err) => {
      socket.destroy();
      resolve({ valid: false, detail: `SSL接続エラー: ${err.message}` });
    });
    socket.on("timeout", () => {
      socket.destroy();
      resolve({ valid: false, detail: "SSL接続タイムアウト" });
    });
  });
}

function dnsLookupTxt(domain: string): Promise<string[][]> {
  return new Promise((resolve) => {
    dns.resolveTxt(domain, (err, records) => {
      if (err) resolve([]);
      else resolve(records);
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const inputUrl: string = body.url;
    if (!inputUrl) {
      return NextResponse.json({ error: "URLを入力してください" }, { status: 400 });
    }

    const hostname = parseDomain(inputUrl);
    const checks: CheckResult[] = [];
    let headers: Headers | null = null;

    // 1. HTTPS fetch
    let httpsOk = false;
    try {
      const res = await fetchWithTimeout(`https://${hostname}`, 10000);
      headers = res.headers;
      httpsOk = true;
    } catch {
      // HTTPS failed
    }

    checks.push({
      name: "HTTPS対応",
      passed: httpsOk,
      score: httpsOk ? 20 : 0,
      maxScore: 20,
      detail: httpsOk ? "HTTPSで正常に接続できました" : "HTTPSで接続できませんでした",
      description: "通信を暗号化し、第三者による盗聴や改ざんを防止します。",
      risk: "ユーザーが入力したパスワードやクレジットカード情報が、同じWi-Fiを使っている第三者に丸見えになります。カフェや空港などの公共Wi-Fiでは特に危険です。",
    });

    // 2. SSL Certificate
    const ssl = await checkSSL(hostname);
    checks.push({
      name: "SSL証明書の有効性",
      passed: ssl.valid,
      score: ssl.valid ? 10 : 0,
      maxScore: 10,
      detail: ssl.detail,
      description: "SSL証明書が有効であることを確認します。期限切れや不正な証明書はブラウザに警告が表示されます。",
      risk: "ブラウザに「この接続ではプライバシーが保護されません」という警告が表示され、ほとんどのユーザーがサイトを離脱します。SEO評価も大幅に低下します。",
    });

    // Header checks helper
    const checkHeader = (
      name: string, headerKey: string, maxScore: number,
      description: string, risk: string
    ): CheckResult => {
      const value = headers?.get(headerKey);
      const passed = !!value;
      return {
        name,
        passed,
        score: passed ? maxScore : 0,
        maxScore,
        detail: passed ? `${headerKey}: ${value}` : `${headerKey} ヘッダーが設定されていません`,
        description,
        risk,
      };
    };

    // 3. HSTS
    checks.push(checkHeader(
      "HSTS (Strict-Transport-Security)", "strict-transport-security", 15,
      "ブラウザに「このサイトには必ずHTTPSで接続せよ」と記憶させるヘッダーです。",
      "ユーザーが http:// でアクセスした場合、暗号化されていない通信が発生します。攻撃者がその一瞬の隙を突いて、偽サイトへ誘導する「中間者攻撃」が可能になります。"
    ));

    // 4. CSP
    checks.push(checkHeader(
      "CSP (Content-Security-Policy)", "content-security-policy", 15,
      "ページが読み込めるスクリプトや画像の取得元を制限するヘッダーです。",
      "攻撃者がサイトに悪意のあるスクリプトを注入する「XSS（クロスサイトスクリプティング）」攻撃が容易になります。ユーザーのCookie窃取、フィッシング画面の表示、マルウェアのダウンロードなどが起こり得ます。"
    ));

    // 5. X-Content-Type-Options
    checks.push(checkHeader(
      "X-Content-Type-Options", "x-content-type-options", 5,
      "ブラウザがファイルの種類を勝手に推測（スニッフィング）することを防ぎます。",
      "攻撃者がテキストファイルに見せかけたスクリプトをアップロードし、ブラウザが「これはJavaScriptだ」と誤判断して実行してしまう可能性があります。"
    ));

    // 6. X-Frame-Options
    checks.push(checkHeader(
      "X-Frame-Options", "x-frame-options", 5,
      "他のサイトがこのサイトをiframe内に埋め込むことを制限します。",
      "攻撃者が透明なiframeでサイトを重ね、ユーザーに意図しないボタンをクリックさせる「クリックジャッキング」攻撃が可能になります。例：知らないうちに送金ボタンを押させられる。"
    ));

    // 7. Referrer-Policy
    checks.push(checkHeader(
      "Referrer-Policy", "referrer-policy", 5,
      "ユーザーがリンクをクリックした時に、遷移先のサイトにどこから来たか（URL情報）をどこまで送るか制御します。",
      "URLに含まれるセッションID、検索キーワード、ユーザーIDなどの機密情報が、外部サイトに漏洩する可能性があります。"
    ));

    // 8. Permissions-Policy
    checks.push(checkHeader(
      "Permissions-Policy", "permissions-policy", 5,
      "カメラ、マイク、位置情報などのブラウザAPIへのアクセスを制御します。",
      "悪意のある広告やiframeが、ユーザーの許可なくカメラやマイクにアクセスしたり、位置情報を取得したりする可能性があります。"
    ));

    // 9. SPF
    const txtRecords = await dnsLookupTxt(hostname);
    const allTxt = txtRecords.map((r) => r.join(""));
    const spfRecord = allTxt.find((t) => t.startsWith("v=spf1"));
    checks.push({
      name: "SPF レコード",
      passed: !!spfRecord,
      score: spfRecord ? 10 : 0,
      maxScore: 10,
      detail: spfRecord ? `SPF: ${spfRecord}` : "SPFレコードが見つかりません",
      description: "「このドメインからメールを送信していいサーバーはこれだけ」と宣言するDNSレコードです。",
      risk: "誰でもこのドメインになりすましてメールを送信できます。「@あなたの会社.co.jp」からフィッシングメールが送られ、取引先や顧客が被害を受ける恐れがあります。",
    });

    // 10. DMARC
    const dmarcRecords = await dnsLookupTxt(`_dmarc.${hostname}`);
    const dmarcTxt = dmarcRecords.map((r) => r.join(""));
    const dmarcRecord = dmarcTxt.find((t) => t.startsWith("v=DMARC1"));
    checks.push({
      name: "DMARC レコード",
      passed: !!dmarcRecord,
      score: dmarcRecord ? 10 : 0,
      maxScore: 10,
      detail: dmarcRecord ? `DMARC: ${dmarcRecord}` : "DMARCレコードが見つかりません",
      description: "SPF/DKIM認証に失敗したメールをどう扱うか（拒否・隔離・放置）を指定するDNSレコードです。",
      risk: "SPFを設定していても、認証失敗時のポリシーが未定義のため、なりすましメールが受信者の受信箱にそのまま届きます。Gmailなどの大手メールサービスでは迷惑メール判定もされやすくなります。",
    });

    const score = checks.reduce((sum, c) => sum + c.score, 0);

    return NextResponse.json({ url: hostname, score, checks });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "不明なエラーが発生しました";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
