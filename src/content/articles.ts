export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  tags: string[];
  content: string;
}

const cta = `
<div class="not-prose bg-zinc-100 rounded-xl p-6 mt-8">
  <h3 class="font-bold text-lg mb-2">あなたのサイトは大丈夫？</h3>
  <p class="text-zinc-600 mb-4">無料でセキュリティ設定をチェックできます。</p>
  <a href="/" class="inline-block px-6 py-3 bg-zinc-900 text-white rounded-lg font-bold hover:bg-zinc-800">今すぐチェックする →</a>
</div>`;

export const articles: Article[] = [
  {
    slug: "what-is-https",
    title: "HTTPSとは？仕組みと必要性をわかりやすく解説",
    description: "HTTPSの仕組み、HTTPとの違い、なぜ今すべてのサイトにHTTPSが必要なのかを初心者にもわかりやすく解説します。SSL/TLS証明書の取得方法も紹介。",
    publishedAt: "2025-02-15",
    category: "Web基礎",
    tags: ["HTTPS", "SSL", "TLS", "暗号化"],
    content: `
<h2>HTTPとHTTPSの違い</h2>
<p>Webサイトを閲覧するとき、ブラウザのアドレスバーに表示されるURLの先頭部分に注目してみてください。<code>http://</code>で始まるものと<code>https://</code>で始まるものがあります。この「s」は<strong>Secure（安全）</strong>の頭文字です。</p>
<p>HTTPは「HyperText Transfer Protocol」の略で、ブラウザとサーバー間でデータをやり取りするためのルール（通信規約）です。HTTPSはこのHTTPに<strong>暗号化の仕組み</strong>を追加したものです。</p>
<p>例えるなら、HTTPは「はがき」のようなもの。配達途中で誰でも内容を読める状態です。一方、HTTPSは「封書」のようなもの。中身が暗号化されているので、途中で誰かが覗いても内容は読めません。</p>

<h2>暗号化の仕組み（SSL/TLS）</h2>
<p>HTTPSの暗号化を支えているのが<strong>SSL/TLS</strong>という技術です。現在は主にTLS（Transport Layer Security）が使われています。</p>
<p>通信が始まるとき、以下のような流れで安全な接続が確立されます：</p>
<ul>
  <li><strong>ハンドシェイク</strong>：ブラウザとサーバーが「暗号化の方法」を決める</li>
  <li><strong>証明書の確認</strong>：サーバーがSSL証明書を提示し、ブラウザが「本物のサイトか」を確認する</li>
  <li><strong>鍵の交換</strong>：暗号化に使う「鍵」を安全に共有する</li>
  <li><strong>暗号化通信の開始</strong>：以降のやり取りはすべて暗号化される</li>
</ul>
<p>例えば、カフェのWi-Fiでネットショッピングをするとき、HTTPSなら入力したクレジットカード情報は暗号化されるので、同じWi-Fiを使っている他の人に盗み見られる心配がありません。</p>

<h2>なぜHTTPSが必要なのか</h2>
<p>HTTPSが必要な理由は大きく3つあります：</p>
<ul>
  <li><strong>盗聴の防止</strong>：パスワードや個人情報が暗号化されるため、第三者に読み取られません</li>
  <li><strong>改ざんの防止</strong>：通信途中でデータが書き換えられていないことを保証します</li>
  <li><strong>なりすましの防止</strong>：SSL証明書により、接続先が本物のサイトであることを確認できます</li>
</ul>
<p>特に問い合わせフォームやログイン機能があるサイトでは、HTTPSは<strong>必須</strong>と言えます。</p>

<h2>GoogleはHTTPSを評価する</h2>
<p>Googleは2014年から、HTTPSを<strong>検索順位の評価要素</strong>に含めると公式に発表しています。つまり、同じ内容のサイトであれば、HTTPSのサイトの方が検索結果で上位に表示されやすくなります。</p>
<p>また、Google Chromeでは、HTTPのサイトにアクセスすると「保護されていない通信」という警告が表示されます。この警告はユーザーに不安を与え、サイトの信頼性を大きく損なう原因になります。</p>

<h2>HTTPSの設定方法</h2>
<p>HTTPSを導入するには、<strong>SSL/TLS証明書</strong>を取得してサーバーに設定する必要があります。</p>
<ul>
  <li><strong>Let's Encrypt</strong>：無料で証明書を取得できるサービス。多くのレンタルサーバーが対応しています</li>
  <li><strong>レンタルサーバーの管理画面</strong>：ワンクリックでHTTPSを有効化できるサービスも多いです</li>
  <li><strong>CDNサービス</strong>：CloudflareなどのCDNを使えば、簡単にHTTPS化できます</li>
</ul>
<p>HTTPS化した後は、HTTPからHTTPSへの<strong>リダイレクト設定</strong>も忘れずに行いましょう。古いURLでアクセスしたユーザーも、自動的にHTTPSのページに転送されるようになります。</p>
${cta}
`
  },
  {
    slug: "what-is-hsts",
    title: "HSTS（HTTP Strict Transport Security）とは？設定しないリスクと対策",
    description: "HSTSの仕組み、設定しない場合のリスク（中間者攻撃）、nginx・Apacheでの設定方法、preloadリストへの登録方法を解説します。",
    publishedAt: "2025-02-15",
    category: "セキュリティヘッダー",
    tags: ["HSTS", "HTTPS", "中間者攻撃", "セキュリティヘッダー"],
    content: `
<h2>HSTSとは</h2>
<p>HSTS（HTTP Strict Transport Security）とは、Webサーバーからブラウザに対して<strong>「今後はHTTPSでのみアクセスしてください」</strong>と伝える仕組みです。</p>
<p>サーバーがHTTPレスポンスヘッダーに以下のような情報を含めることで、ブラウザに指示を出します：</p>
<pre><code>Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</code></pre>
<p>この設定を受け取ったブラウザは、指定された期間（上の例では1年間）、そのサイトへのアクセスを<strong>自動的にHTTPSに変換</strong>します。ユーザーが<code>http://</code>でアクセスしようとしても、ブラウザが勝手に<code>https://</code>に書き換えてくれるのです。</p>

<h2>HSTSがないとどうなる？中間者攻撃の例</h2>
<p>HSTSが設定されていないと、<strong>中間者攻撃（Man-in-the-Middle Attack）</strong>のリスクがあります。</p>
<p>具体的なシナリオを見てみましょう：</p>
<ul>
  <li>あなたがカフェのWi-Fiに接続します</li>
  <li>ブラウザに<code>http://your-bank.com</code>と入力します</li>
  <li>通常なら、サーバーが「HTTPSにリダイレクトしてください」と応答します</li>
  <li>しかし、悪意のある第三者がWi-Fiの通信を傍受していた場合、このリダイレクト応答を横取りできます</li>
  <li>攻撃者は偽のサイトを表示させ、あなたのログイン情報を盗みます</li>
</ul>
<p>HSTSが設定されていれば、ブラウザは最初からHTTPSで接続するため、HTTPでの通信が発生せず、この攻撃を防げます。</p>

<h2>設定方法（nginx / Apache）</h2>
<h3>nginxの場合</h3>
<pre><code>server {
    listen 443 ssl;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
}</code></pre>

<h3>Apacheの場合</h3>
<pre><code>&lt;VirtualHost *:443&gt;
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
&lt;/VirtualHost&gt;</code></pre>

<p>設定のポイント：</p>
<ul>
  <li><strong>max-age</strong>：ブラウザがHTTPS接続を強制する期間（秒）。最低でも1年（31536000秒）を推奨</li>
  <li><strong>includeSubDomains</strong>：サブドメインにも適用する。設定前にすべてのサブドメインがHTTPS対応していることを確認</li>
  <li><strong>preload</strong>：後述するpreloadリストへの登録に必要</li>
</ul>

<h2>HSTS Preloadリスト</h2>
<p>HSTSには一つ弱点があります。ユーザーが<strong>初めてそのサイトにアクセスするとき</strong>は、まだHSTSの情報がブラウザに保存されていないため、HTTPで接続される可能性があります。</p>
<p>この問題を解決するのが<strong>HSTS Preloadリスト</strong>です。これはブラウザにあらかじめ「このドメインは常にHTTPSで接続する」という情報を組み込む仕組みです。</p>
<p><a href="https://hstspreload.org/">hstspreload.org</a>から登録を申請できます。登録されると、Chrome、Firefox、Safariなどの主要ブラウザが、初回アクセスからHTTPSを強制するようになります。</p>
<p><strong>注意：</strong>preloadリストへの登録は簡単に取り消せません。すべてのサブドメインを含め、恒久的にHTTPSを使う覚悟が必要です。</p>
${cta}
`
  },
  {
    slug: "what-is-csp",
    title: "Content-Security-Policy（CSP）とは？XSS対策の要を徹底解説",
    description: "CSP（Content-Security-Policy）の仕組み、XSS攻撃を防ぐ方法、主要ディレクティブ、設定例、段階的な導入方法を初心者向けに解説します。",
    publishedAt: "2025-02-15",
    category: "セキュリティヘッダー",
    tags: ["CSP", "XSS", "セキュリティヘッダー", "Content-Security-Policy"],
    content: `
<h2>CSPとは</h2>
<p>Content-Security-Policy（CSP）とは、Webページが<strong>どこからリソースを読み込んでよいか</strong>をブラウザに指示するセキュリティの仕組みです。HTTPレスポンスヘッダーとして設定します。</p>
<p>例えるなら、「この部屋に入っていいのはリストに載っている人だけ」というルールを作るようなものです。リストにない場所からのスクリプトや画像の読み込みを、ブラウザがブロックしてくれます。</p>

<h2>XSS攻撃の仕組みとCSPの役割</h2>
<p>XSS（クロスサイトスクリプティング）は、Webセキュリティにおいて最も多い攻撃の一つです。攻撃の流れを簡単に説明します：</p>
<ul>
  <li>攻撃者が掲示板やコメント欄に<strong>悪意のあるスクリプト</strong>（JavaScriptコード）を投稿する</li>
  <li>他のユーザーがそのページを開くと、埋め込まれたスクリプトが実行される</li>
  <li>スクリプトがCookie（ログイン情報）を盗んだり、偽のログイン画面を表示したりする</li>
</ul>
<p>CSPを設定すると、たとえ攻撃者がスクリプトを埋め込むことに成功しても、<strong>ブラウザがそのスクリプトの実行をブロック</strong>します。許可されていないインラインスクリプトや外部スクリプトは動作しません。</p>

<h2>主要なディレクティブ一覧</h2>
<p>CSPではさまざまな種類のリソースに対して、読み込み元を制御できます：</p>
<ul>
  <li><code>default-src</code>：他のディレクティブで指定されていないリソースのデフォルト</li>
  <li><code>script-src</code>：JavaScriptの読み込み元</li>
  <li><code>style-src</code>：CSSの読み込み元</li>
  <li><code>img-src</code>：画像の読み込み元</li>
  <li><code>font-src</code>：フォントの読み込み元</li>
  <li><code>connect-src</code>：Ajax、WebSocketなどの接続先</li>
  <li><code>frame-src</code>：iframeの読み込み元</li>
  <li><code>object-src</code>：プラグイン（Flash等）の読み込み元</li>
</ul>
<p>各ディレクティブには以下のような値を指定できます：</p>
<ul>
  <li><code>'self'</code>：同じオリジン（自分のサイト）のみ許可</li>
  <li><code>'none'</code>：すべてブロック</li>
  <li><code>'unsafe-inline'</code>：インラインのスクリプト/スタイルを許可（非推奨）</li>
  <li><code>https:</code>：HTTPS経由のリソースのみ許可</li>
  <li>具体的なドメイン名：<code>https://cdn.example.com</code></li>
</ul>

<h2>CSPの設定例</h2>
<p>基本的な設定例を紹介します：</p>
<pre><code>Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; object-src 'none'</code></pre>
<p>この設定では：</p>
<ul>
  <li>基本的に自分のサイトからのリソースのみ許可</li>
  <li>JavaScriptは自サイトと指定CDNからのみ</li>
  <li>CSSは自サイトとインラインスタイルを許可</li>
  <li>画像は自サイト、data URI、HTTPS経由を許可</li>
  <li>プラグイン（Flash等）は完全にブロック</li>
</ul>

<h2>段階的な導入方法</h2>
<p>CSPをいきなり厳しく設定すると、サイトが正常に動作しなくなる可能性があります。段階的に導入しましょう：</p>
<ul>
  <li><strong>ステップ1</strong>：<code>Content-Security-Policy-Report-Only</code>ヘッダーを使い、違反があっても<strong>ブロックせずにレポートだけ</strong>受け取る</li>
  <li><strong>ステップ2</strong>：レポートを分析し、正当なリソースの読み込み元をCSPに追加する</li>
  <li><strong>ステップ3</strong>：違反レポートが落ち着いたら、<code>Content-Security-Policy</code>ヘッダーに切り替えて実際にブロックを開始する</li>
  <li><strong>ステップ4</strong>：定期的にレポートを確認し、ポリシーを調整する</li>
</ul>
<p>まずはReport-Onlyモードから始めることで、サイトを壊すリスクなくCSPを導入できます。</p>
${cta}
`
  },
  {
    slug: "what-is-spf",
    title: "SPFレコードとは？メールなりすましを防ぐDNS設定を解説",
    description: "SPFレコードの仕組み、なりすましメールの脅威、DNSへの書き方、確認方法、よくある設定ミスをわかりやすく解説します。",
    publishedAt: "2025-02-15",
    category: "メール認証",
    tags: ["SPF", "DNS", "メール認証", "なりすまし対策"],
    content: `
<h2>SPFとは</h2>
<p>SPF（Sender Policy Framework）とは、<strong>メールの送信元が本物かどうか</strong>を確認するためのDNS設定です。「このドメインからメールを送っていいサーバーはこれだけですよ」と宣言する仕組みです。</p>
<p>例えるなら、会社の受付に「この名刺を持っている人だけが正社員です」というリストを置くようなものです。リストに載っていない人が会社名を騙っても、受付で見破ることができます。</p>

<h2>なりすましメールの脅威</h2>
<p>実は、メールの送信元アドレスは<strong>簡単に偽装できます</strong>。技術的には、誰でも他人のアドレスを名乗ってメールを送ることが可能です。</p>
<p>なりすましメールによる被害例：</p>
<ul>
  <li><strong>フィッシング</strong>：銀行やサービスを装い、ログイン情報を盗む</li>
  <li><strong>ビジネスメール詐欺</strong>：取引先の社員になりすまし、偽の振込先を指示する</li>
  <li><strong>スパム</strong>：あなたのドメインが迷惑メールの発信元として悪用される</li>
  <li><strong>ブランド毀損</strong>：顧客が「あの会社から怪しいメールが来た」と不信感を抱く</li>
</ul>
<p>SPFを設定することで、受信側のメールサーバーが「このメールは本当にそのドメインから送られたものか」を検証できるようになります。</p>

<h2>SPFレコードの書き方</h2>
<p>SPFレコードはDNSの<strong>TXTレコード</strong>として設定します。基本的な書き方：</p>
<pre><code>v=spf1 ip4:203.0.113.1 include:_spf.google.com ~all</code></pre>
<p>各部分の意味：</p>
<ul>
  <li><code>v=spf1</code>：SPFのバージョン宣言（必須）</li>
  <li><code>ip4:203.0.113.1</code>：このIPアドレスからの送信を許可</li>
  <li><code>include:_spf.google.com</code>：Google Workspace経由の送信を許可</li>
  <li><code>~all</code>：上記以外のサーバーからの送信はソフトフェイル（疑わしいと判定）</li>
</ul>
<p><code>all</code>の前につける記号の意味：</p>
<ul>
  <li><code>+all</code>：すべて許可（意味がないので使わない）</li>
  <li><code>~all</code>：ソフトフェイル（許可リスト外は疑わしいが受信する）</li>
  <li><code>-all</code>：ハードフェイル（許可リスト外は拒否）</li>
  <li><code>?all</code>：ニュートラル（判定しない）</li>
</ul>

<h2>SPFレコードの確認方法</h2>
<p>設定したSPFレコードが正しく反映されているか、以下の方法で確認できます：</p>
<ul>
  <li><strong>コマンドライン</strong>：<code>nslookup -type=txt example.com</code> または <code>dig txt example.com</code></li>
  <li><strong>オンラインツール</strong>：MXToolbox、Google Admin Toolboxなどの無料ツール</li>
  <li><strong>テストメール送信</strong>：Gmailにメールを送り、受信メールの「メッセージのソースを表示」でSPFの判定結果を確認</li>
</ul>

<h2>よくあるミス</h2>
<ul>
  <li><strong>DNSルックアップの上限超過</strong>：SPFレコード内の<code>include</code>は再帰的に展開され、合計10回のDNSルックアップまでという制限があります。超えると検証が失敗します</li>
  <li><strong>複数のSPFレコード</strong>：1つのドメインにSPFレコードは1つだけ。複数あるとエラーになります</li>
  <li><strong>メール配信サービスの追加忘れ</strong>：MailchimpやSendGridなどのサービスを使う場合、それらのSPFも<code>include</code>に含める必要があります</li>
  <li><strong><code>+all</code>の設定</strong>：すべてのサーバーを許可してしまい、SPFの意味がなくなります</li>
</ul>
${cta}
`
  },
  {
    slug: "what-is-dmarc",
    title: "DMARCとは？SPF・DKIMと組み合わせたメール認証の決定版",
    description: "DMARCの仕組み、SPF・DKIMとの関係、ポリシー設定（none/quarantine/reject）、導入手順、レポートの読み方を解説します。",
    publishedAt: "2025-02-15",
    category: "メール認証",
    tags: ["DMARC", "SPF", "DKIM", "メール認証", "なりすまし対策"],
    content: `
<h2>DMARCとは</h2>
<p>DMARC（Domain-based Message Authentication, Reporting and Conformance）とは、<strong>SPFとDKIMの認証結果をもとに、認証に失敗したメールをどう扱うか</strong>をドメイン所有者が指定できる仕組みです。</p>
<p>SPFやDKIMだけでは、認証に失敗したメールの扱いは受信側サーバーの判断に委ねられます。DMARCを設定すると、「認証に失敗したメールは迷惑メールに入れて」「受信を拒否して」といった指示をドメイン所有者が出せるようになります。</p>
<p>さらに、認証結果のレポートを受け取ることができ、自分のドメインが不正利用されていないかを<strong>監視</strong>できます。</p>

<h2>SPF・DKIMとの関係</h2>
<p>メール認証には3つの仕組みが連携して機能します：</p>
<ul>
  <li><strong>SPF</strong>：送信元のIPアドレスが正規のものかチェック（「どのサーバーから送っていいか」）</li>
  <li><strong>DKIM</strong>：メールに電子署名を付け、内容が改ざんされていないかチェック（「メールの中身が途中で変えられていないか」）</li>
  <li><strong>DMARC</strong>：SPFとDKIMの結果を受けて、失敗時のポリシーを決定し、レポートを受け取る（「失敗したらどうするか」）</li>
</ul>
<p>DMARCは「アライメント」という概念を使い、メールのFrom:ヘッダーに表示されるドメインと、SPF/DKIMで認証されたドメインが一致するかも確認します。これにより、より厳密な認証が可能になります。</p>

<h2>DMARCポリシーの種類</h2>
<p>DMARCのポリシーは3段階あります：</p>
<ul>
  <li><strong><code>p=none</code></strong>：認証に失敗してもメールの扱いを変えない。まずはレポートを収集する段階で使用</li>
  <li><strong><code>p=quarantine</code></strong>：認証に失敗したメールを迷惑メールフォルダに隔離する</li>
  <li><strong><code>p=reject</code></strong>：認証に失敗したメールの受信を拒否する。最も厳格なポリシー</li>
</ul>
<p>いきなり<code>reject</code>にすると、正規のメールが届かなくなるリスクがあります。<strong><code>none</code> → <code>quarantine</code> → <code>reject</code></strong>と段階的に移行するのがベストプラクティスです。</p>

<h2>DMARCレコードの設定手順</h2>
<p>DMARCレコードはDNSの<strong>TXTレコード</strong>として<code>_dmarc.example.com</code>に設定します：</p>
<pre><code>v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com; ruf=mailto:dmarc-forensic@example.com; pct=100</code></pre>
<p>各部分の意味：</p>
<ul>
  <li><code>v=DMARC1</code>：DMARCのバージョン宣言（必須）</li>
  <li><code>p=none</code>：ポリシー（none / quarantine / reject）</li>
  <li><code>rua=</code>：集約レポートの送信先メールアドレス</li>
  <li><code>ruf=</code>：フォレンジックレポート（詳細レポート）の送信先</li>
  <li><code>pct=100</code>：ポリシーを適用するメールの割合（%）</li>
</ul>

<h3>推奨される導入ステップ</h3>
<ul>
  <li><strong>ステップ1</strong>：SPFとDKIMを正しく設定する</li>
  <li><strong>ステップ2</strong>：<code>p=none</code>でDMARCを設定し、レポートを受け取る</li>
  <li><strong>ステップ3</strong>：レポートを分析し、正規のメール送信元がすべてSPF/DKIMに対応しているか確認</li>
  <li><strong>ステップ4</strong>：<code>p=quarantine</code>に移行し、<code>pct=10</code>から段階的に割合を上げる</li>
  <li><strong>ステップ5</strong>：問題がなければ<code>p=reject</code>に移行する</li>
</ul>

<h2>DMARCレポートの読み方</h2>
<p>DMARCの集約レポートはXML形式で定期的にメールで届きます。主に確認するポイント：</p>
<ul>
  <li><strong>送信元IPアドレス</strong>：どのサーバーからメールが送られているか</li>
  <li><strong>認証結果</strong>：SPFとDKIMがそれぞれpass/failのどちらか</li>
  <li><strong>送信数</strong>：各送信元からのメール数</li>
  <li><strong>ポリシー適用結果</strong>：メールがどう処理されたか</li>
</ul>
<p>XMLを直接読むのは大変なので、<strong>DMARC Analyzer</strong>や<strong>Postmark DMARC</strong>などの無料ツールを使うと、レポートをグラフィカルに表示してくれます。</p>
<p>定期的にレポートを確認することで、自分のドメインが不正に使われていないかを監視し、メール配信の問題を早期に発見できます。</p>
${cta}
`
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
