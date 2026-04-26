export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  content: string;
  faq?: FaqItem[];
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
    title: "HTTPSはSEOに効果ある？httpsとは何か・HTTPとの違い・設定方法を初心者向けに3分解説【2026年版】",
    description: "HTTPSはSEOに効果あるのか、httpsとは何か、HTTPとの違い、SSL/TLS証明書の設定手順、未対応リスクまで初心者向けに3分で解説する入門ガイド。",
    publishedAt: "2025-02-15",
    updatedAt: "2026-03-30",
    category: "Web基礎",
    tags: ["HTTPS", "SSL", "TLS", "暗号化", "SEO"],
    faq: [
      {
        question: "HTTPSはSEOに効果がありますか？",
        answer: "あります。GoogleはHTTPSをランキングシグナルのひとつとして扱っており、ブラウザ警告の回避や信頼性向上も含めてSEOにプラスです。ただしHTTPS化だけで大きく順位が上がるわけではなく、技術SEOの土台として考えるのが適切です。",
      },
      {
        question: "HTTPとHTTPSの違いは何ですか？",
        answer: "HTTPは暗号化なし、HTTPSはSSL/TLSによって通信が暗号化された状態です。HTTPSでは盗聴・改ざん・なりすましのリスクを下げられます。",
      },
      {
        question: "HTTPS化したあとに確認すべき設定は何ですか？",
        answer: "HTTPからHTTPSへの301リダイレクト、混合コンテンツの解消、HSTSの設定、証明書の自動更新、Search Consoleやサイトマップの再確認が重要です。",
      },
    ],
    content: `
<h2>HTTPSとは？3分でわかる基礎知識</h2>
<p>HTTPSとは、Webサイトとブラウザ間の通信を<strong>暗号化して安全にする仕組み</strong>です。URLの先頭が<code>https://</code>で始まるサイトは、この仕組みが導入されています。</p>
<p>2026年現在、<strong>Webサイト全体の約95%</strong>がHTTPS化されており、もはや「導入するかどうか」ではなく「導入していないと問題」という状況です。</p>

<h2>HTTPSはSEOに効果ある？先に結論</h2>
<p>結論から言うと、<strong>HTTPSはSEOにとってプラス</strong>です。ただし「HTTPSにしただけで一気に上がる」わけではなく、Googleが評価する<strong>信頼性・安全性・ユーザー体験</strong>を底上げする基礎施策と考えるのが正確です。</p>
<ul>
  <li><strong>検索順位の軽い追い風</strong>：GoogleはHTTPSをランキングシグナルとして扱っています</li>
  <li><strong>離脱率の改善</strong>：ブラウザ警告が減るため、ユーザーが安心して閲覧しやすくなります</li>
  <li><strong>CVRにも波及</strong>：問い合わせや購入前の不安を減らしやすくなります</li>
</ul>
<p>つまり、<strong>SEOのためにHTTPS化する価値は十分ある</strong>ものの、本質は「安全性の向上が結果的にSEOにも効く」という理解が近いです。</p>

<h2>HTTPとHTTPSの違い｜図解で理解</h2>
<p>HTTPは「HyperText Transfer Protocol」の略で、ブラウザとサーバー間でデータをやり取りするためのルール（通信規約）です。HTTPSはこのHTTPに<strong>暗号化の仕組み（SSL/TLS）</strong>を追加したものです。</p>
<p>わかりやすく例えると：</p>
<ul>
  <li><strong>HTTP = はがき</strong>：配達途中で誰でも内容を読める</li>
  <li><strong>HTTPS = 封書</strong>：中身が暗号化されており、途中で覗いても読めない</li>
</ul>
<p>例えば、カフェの無料Wi-Fiでネットショッピングをする場合、HTTPのサイトではクレジットカード情報が<strong>平文（暗号化なし）</strong>で送信されます。同じWi-Fiに接続している悪意ある第三者に盗み見られるリスクがあるのです。</p>

<h2>暗号化の仕組み（SSL/TLS）をわかりやすく</h2>
<p>HTTPSの暗号化を支えているのが<strong>SSL/TLS</strong>という技術です。SSLは古いバージョンで、現在は主に<strong>TLS 1.3</strong>（2018年策定）が使われています。</p>
<p>通信が始まるとき、以下の4ステップで安全な接続が確立されます：</p>
<ul>
  <li><strong>① ハンドシェイク</strong>：ブラウザとサーバーが「暗号化の方法」を決める</li>
  <li><strong>② 証明書の確認</strong>：サーバーがSSL証明書を提示し、ブラウザが「本物のサイトか」を確認</li>
  <li><strong>③ 鍵の交換</strong>：暗号化に使う「鍵」を安全に共有（TLS 1.3では高速化）</li>
  <li><strong>④ 暗号化通信の開始</strong>：以降のやり取りはすべて暗号化される</li>
</ul>
<p>TLS 1.3では、このハンドシェイクが<strong>1往復（1-RTT）</strong>で完了するため、従来のTLS 1.2（2往復）より高速です。セキュリティだけでなく、表示速度の面でもメリットがあります。</p>

<h2>HTTPSが必要な3つの理由</h2>
<ul>
  <li><strong>① 盗聴の防止</strong>：パスワードや個人情報が暗号化されるため、第三者に読み取られません</li>
  <li><strong>② 改ざんの防止</strong>：通信途中でデータが書き換えられていないことを保証します</li>
  <li><strong>③ なりすましの防止</strong>：SSL証明書により、接続先が本物のサイトであることを確認できます</li>
</ul>
<p>特に問い合わせフォームやログイン機能があるサイトでは、HTTPSは<strong>必須</strong>です。2026年現在、主要ブラウザはHTTPサイトに対して明確な警告を表示するため、ユーザーの離脱率にも直結します。</p>

<h2>HTTPSのSEO効果｜Googleの評価基準</h2>
<p>Googleは2014年からHTTPSを<strong>検索順位の評価要素</strong>に含めると公式に発表しています。具体的な影響：</p>
<ul>
  <li><strong>検索順位</strong>：同じ内容のサイトであれば、HTTPSのサイトが上位に表示されやすい</li>
  <li><strong>Core Web Vitals</strong>：TLS 1.3の高速ハンドシェイクにより、ページ読み込み速度にもプラス</li>
  <li><strong>ユーザー信頼性</strong>：「保護されていない通信」警告が出るサイトは、直帰率が<strong>最大80%増加</strong>するというデータも</li>
</ul>
<p>SEO対策としても、HTTPS化は<strong>最もコスパの良い施策</strong>の一つと言えます。</p>

<h2>HTTPS化の具体的な設定方法3選</h2>
<p>HTTPSを導入するには、<strong>SSL/TLS証明書</strong>を取得してサーバーに設定する必要があります。</p>

<h3>方法①：Let's Encrypt（無料）</h3>
<p>Let's Encryptは無料でSSL証明書を発行するサービスです。90日ごとの更新が必要ですが、自動更新ツール（Certbot）を使えば手間はかかりません。多くのレンタルサーバーが対応しています。</p>

<h3>方法②：レンタルサーバーの管理画面</h3>
<p>エックスサーバー、ConoHa WING、さくらインターネットなど、主要レンタルサーバーでは<strong>ワンクリックでHTTPS化</strong>が可能です。初心者にはこの方法が最も簡単です。</p>

<h3>方法③：Cloudflare（CDN経由）</h3>
<p>CloudflareのCDNを利用すると、無料プランでもHTTPS化が可能です。さらにCDNによる<strong>表示速度の改善やDDoS対策</strong>も同時に得られます。</p>

<h2>HTTPS化後に忘れがちな3つの設定</h2>
<ul>
  <li><strong>HTTPからHTTPSへのリダイレクト</strong>：301リダイレクトで古いURLからの転送を設定</li>
  <li><strong>混合コンテンツ（Mixed Content）の修正</strong>：ページ内の画像やスクリプトがHTTPのままだと警告が出ます</li>
  <li><strong>HSTSの設定</strong>：ブラウザに「常にHTTPSで接続する」よう指示する仕組み。<a href="/blog/what-is-hsts">HSTSの詳しい解説はこちら</a></li>
</ul>

<h2>あなたのサイトはHTTPS化されていますか？</h2>
<p>「うちのサイトはHTTPS化済みだから大丈夫」と思っていても、<strong>HSTSやセキュリティヘッダーが未設定</strong>というケースは非常に多いです。当サイトの無料診断ツールでは、HTTPSを含む<strong>10項目のセキュリティチェック</strong>を一括で実施できます。</p>
<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-hsts">HSTSとは？設定しないと中間者攻撃される？</a></li>
  <li><a href="/blog/what-is-csp">CSPとは？XSS攻撃を防ぐ設定方法</a></li>
  <li><a href="/blog/compare-saas">SaaS大手5社のセキュリティ比較ランキング</a></li>
</ul>
${cta}
`
  },
  {
    slug: "what-is-hsts",
    title: "HSTSとは？設定しないと中間者攻撃される？仕組みと対策を解説",
    description: "HSTSを設定しないとカフェWi-Fiで情報が盗まれる？仕組み・nginx/Apacheの設定方法・Preloadリスト登録まで、具体例つきでわかりやすく解説します。",
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

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-https">HTTPSとは？仕組み・設定方法・SEO効果を図解で解説</a></li>
  <li><a href="/blog/what-is-csp">CSPとは？XSS攻撃を防ぐ設定方法と導入手順</a></li>
</ul>
${cta}
`
  },
  {
    slug: "what-is-csp",
    title: "CSPとは？XSS攻撃を防ぐ設定方法と導入手順をわかりやすく解説",
    description: "CSP（Content-Security-Policy）でXSS攻撃を防ぐ方法を解説。主要ディレクティブ一覧、コピペで使える設定例、壊さず導入する4ステップを紹介。",
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

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-hsts">HSTSとは？設定しないと中間者攻撃される？</a></li>
  <li><a href="/blog/what-is-https">HTTPSとは？仕組み・設定方法を図解で解説</a></li>
</ul>
${cta}
`
  },
  {
    slug: "what-is-spf",
    title: "SPFレコードとは？書き方・確認方法・よくある5つの設定ミス",
    description: "SPFレコードの仕組みをDNSへの書き方から確認方法まで解説。include上限超過、複数レコードなどよくある5つのミスと対策も紹介。なりすましメール対策の基本。",
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

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-dmarc">DMARCとは？SPF・DKIMと組み合わせたメール認証の決定版</a></li>
  <li><a href="/blog/what-is-https">HTTPSとは？仕組み・設定方法を図解で解説</a></li>
</ul>
${cta}
`
  },
  {
    slug: "what-is-dmarc",
    title: "DMARCとは？設定手順5ステップとポリシーの選び方を解説",
    description: "DMARCの仕組みをSPF・DKIMとの関係から解説。none→quarantine→rejectの段階的導入5ステップ、レポートの読み方、無料分析ツールも紹介。",
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

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-spf">SPFレコードとは？書き方・確認方法・よくある5つの設定ミス</a></li>
  <li><a href="/blog/what-is-https">HTTPSとは？仕組み・設定方法を図解で解説</a></li>
</ul>
${cta}
`
  }
,

  // === 企業別分析記事（50社） ===
  {
    slug: "amazon-security",
    title: "Amazonのセキュリティは安全？90点A+ランクの診断結果を公開",
    description: "Amazon Japan（amazon.co.jp）のWebセキュリティを10項目で診断。90点A+ランクと高評価だが唯一の弱点とは？HTTPS・CSP・DMARCの設定状況を解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["Amazon Japan","EC・小売","セキュリティ分析","企業分析"],
    content: `

<h2>Amazon Japanの概要</h2>
<p>Amazon Japanは、世界最大級のECプラットフォームAmazonの日本法人です。本記事では、amazon.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">90<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: A+</div>
    <p class="text-zinc-500 mt-2">10項目中 9項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>✅ 設定あり</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>Amazon JapanのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>Amazon Japan（amazon.co.jp）のセキュリティスコアは<strong>90点（A+ランク）</strong>です。比較的高いセキュリティ水準が維持されていると推測されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "note-security",
    title: "noteのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "note（note.com）のWebセキュリティ設定状況を分析。スコア90点（A+ランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["note","メディア・プラットフォーム","セキュリティ分析","企業分析"],
    content: `

<h2>noteの概要</h2>
<p>noteは、クリエイターが文章やマンガ、写真、音声を投稿できるメディアプラットフォームです。本記事では、note.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">90<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: A+</div>
    <p class="text-zinc-500 mt-2">10項目中 9項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>✅ 設定あり</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>noteのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>note（note.com）のセキュリティスコアは<strong>90点（A+ランク）</strong>です。比較的高いセキュリティ水準が維持されていると推測されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "mercari-security",
    title: "メルカリのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "メルカリ（mercari.com）のWebセキュリティ設定状況を分析。スコア85点（Aランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["メルカリ","EC・フリマ","セキュリティ分析","企業分析"],
    content: `

<h2>メルカリの概要</h2>
<p>メルカリは、日本最大級のフリマアプリを運営するテクノロジー企業です。本記事では、mercari.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">85<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: A</div>
    <p class="text-zinc-500 mt-2">10項目中 9項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>✅ 設定あり</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>メルカリのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>メルカリ（mercari.com）のセキュリティスコアは<strong>85点（Aランク）</strong>です。比較的高いセキュリティ水準が維持されていると推測されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "nikkei-security",
    title: "日本経済新聞社のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "日本経済新聞社（nikkei.com）のWebセキュリティ設定状況を分析。スコア85点（Aランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["日本経済新聞社","メディア・新聞","セキュリティ分析","企業分析"],
    content: `

<h2>日本経済新聞社の概要</h2>
<p>日本経済新聞社は、日本を代表する経済メディアで、電子版も広く利用されています。本記事では、nikkei.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">85<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: A</div>
    <p class="text-zinc-500 mt-2">10項目中 9項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>✅ 設定あり</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>日本経済新聞社のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>日本経済新聞社（nikkei.com）のセキュリティスコアは<strong>85点（Aランク）</strong>です。比較的高いセキュリティ水準が維持されていると推測されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "cookpad-security",
    title: "クックパッドのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "クックパッド（cookpad.com）のWebセキュリティ設定状況を分析。スコア80点（Aランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["クックパッド","レシピ・メディア","セキュリティ分析","企業分析"],
    content: `

<h2>クックパッドの概要</h2>
<p>クックパッドは、日本最大級の料理レシピ共有サービスを運営しています。本記事では、cookpad.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">80<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: A</div>
    <p class="text-zinc-500 mt-2">10項目中 8項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>クックパッドのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>クックパッド（cookpad.com）のセキュリティスコアは<strong>80点（Aランク）</strong>です。比較的高いセキュリティ水準が維持されていると推測されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "moneyforward-security",
    title: "マネーフォワードのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "マネーフォワード（moneyforward.com）のWebセキュリティ設定状況を分析。スコア80点（Aランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["マネーフォワード","フィンテック","セキュリティ分析","企業分析"],
    content: `

<h2>マネーフォワードの概要</h2>
<p>マネーフォワードは、家計簿アプリやクラウド会計ソフトなどを提供するフィンテック企業です。本記事では、moneyforward.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">80<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: A</div>
    <p class="text-zinc-500 mt-2">10項目中 8項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>マネーフォワードのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>マネーフォワード（moneyforward.com）のセキュリティスコアは<strong>80点（Aランク）</strong>です。比較的高いセキュリティ水準が維持されていると推測されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "qiita-security",
    title: "QiitaのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "Qiita（qiita.com）のWebセキュリティ設定状況を分析。スコア80点（Aランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["Qiita","IT・エンジニアコミュニティ","セキュリティ分析","企業分析"],
    content: `

<h2>Qiitaの概要</h2>
<p>Qiitaは、エンジニア向けの技術情報共有プラットフォームです。本記事では、qiita.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">80<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: A</div>
    <p class="text-zinc-500 mt-2">10項目中 8項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>QiitaのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>Qiita（qiita.com）のセキュリティスコアは<strong>80点（Aランク）</strong>です。比較的高いセキュリティ水準が維持されていると推測されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "panasonic-security",
    title: "パナソニックのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "パナソニック（panasonic.jp）のWebセキュリティ設定状況を分析。スコア75点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["パナソニック","電機メーカー","セキュリティ分析","企業分析"],
    content: `

<h2>パナソニックの概要</h2>
<p>パナソニックは、家電から住宅設備まで幅広い事業を展開する日本の大手電機メーカーです。本記事では、panasonic.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">75<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 8項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>パナソニックのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>パナソニック（panasonic.jp）のセキュリティスコアは<strong>75点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "mizuho-security",
    title: "みずほ銀行のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "みずほ銀行（www.mizuhobank.co.jp）のWebセキュリティ設定状況を分析。スコア75点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["みずほ銀行","銀行・金融","セキュリティ分析","企業分析"],
    content: `

<h2>みずほ銀行の概要</h2>
<p>みずほ銀行は、日本三大メガバンクの一つで、個人・法人向けの金融サービスを提供しています。本記事では、www.mizuhobank.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">75<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 8項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>みずほ銀行のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>みずほ銀行（www.mizuhobank.co.jp）のセキュリティスコアは<strong>75点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "ntt-com-security",
    title: "NTTコミュニケーションズのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "NTTコミュニケーションズ（ntt.com）のWebセキュリティ設定状況を分析。スコア75点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["NTTコミュニケーションズ","通信","セキュリティ分析","企業分析"],
    content: `

<h2>NTTコミュニケーションズの概要</h2>
<p>NTTコミュニケーションズは、NTTグループの主要子会社で、法人向け通信・ICTサービスを提供しています。本記事では、ntt.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">75<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 8項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>✅ 設定あり</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>NTTコミュニケーションズのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>NTTコミュニケーションズ（ntt.com）のセキュリティスコアは<strong>75点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "sony-security",
    title: "ソニーのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ソニー（sony.co.jp）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ソニー","電機メーカー","セキュリティ分析","企業分析"],
    content: `

<h2>ソニーの概要</h2>
<p>ソニーは、エレクトロニクス、ゲーム、エンタテインメントなど多角的に事業展開するグローバル企業です。本記事では、sony.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ソニーのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ソニー（sony.co.jp）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "nintendo-security",
    title: "任天堂のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "任天堂（nintendo.co.jp）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["任天堂","ゲーム","セキュリティ分析","企業分析"],
    content: `

<h2>任天堂の概要</h2>
<p>任天堂は、家庭用ゲーム機やゲームソフトを開発・販売する世界的なゲーム企業です。本記事では、nintendo.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>任天堂のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>任天堂（nintendo.co.jp）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "au-security",
    title: "au（KDDI）のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "au（KDDI）（au.com）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["au（KDDI）","通信","セキュリティ分析","企業分析"],
    content: `

<h2>au（KDDI）の概要</h2>
<p>auはKDDIが展開する通信ブランドで、携帯電話やインターネットサービスを提供しています。本記事では、au.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>au（KDDI）のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>au（KDDI）（au.com）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "uniqlo-security",
    title: "ユニクロのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ユニクロ（uniqlo.com）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ユニクロ","アパレル・小売","セキュリティ分析","企業分析"],
    content: `

<h2>ユニクロの概要</h2>
<p>ユニクロは、ファーストリテイリングが展開するカジュアル衣料品ブランドで、グローバルに店舗展開しています。本記事では、uniqlo.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ユニクロのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ユニクロ（uniqlo.com）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "gurunavi-security",
    title: "ぐるなびのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ぐるなび（gurunavi.com）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ぐるなび","グルメ・メディア","セキュリティ分析","企業分析"],
    content: `

<h2>ぐるなびの概要</h2>
<p>ぐるなびは、飲食店検索・予約サービスを提供するグルメ情報サイトです。本記事では、gurunavi.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ぐるなびのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ぐるなび（gurunavi.com）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "hotpepper-security",
    title: "ホットペッパーのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ホットペッパー（hotpepper.jp）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ホットペッパー","グルメ・予約","セキュリティ分析","企業分析"],
    content: `

<h2>ホットペッパーの概要</h2>
<p>ホットペッパーは、リクルートが運営するグルメ・ビューティー情報サイトです。本記事では、hotpepper.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ホットペッパーのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ホットペッパー（hotpepper.jp）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "cybozu-security",
    title: "サイボウズのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "サイボウズ（cybozu.co.jp）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["サイボウズ","SaaS・グループウェア","セキュリティ分析","企業分析"],
    content: `

<h2>サイボウズの概要</h2>
<p>サイボウズは、kintoneやGaroonなどのグループウェア・業務改善ツールを提供するSaaS企業です。本記事では、cybozu.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>サイボウズのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>サイボウズ（cybozu.co.jp）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "nec-security",
    title: "NECのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "NEC（nec.com）のWebセキュリティ設定状況を分析。スコア70点（Bランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["NEC","IT・電機メーカー","セキュリティ分析","企業分析"],
    content: `

<h2>NECの概要</h2>
<p>NECは、ITサービスやネットワークソリューションを提供する日本の大手IT企業です。本記事では、nec.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">70<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: B</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>NECのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>NEC（nec.com）のセキュリティスコアは<strong>70点（Bランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "yahoo-security",
    title: "Yahoo! JAPANのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "Yahoo! JAPAN（yahoo.co.jp）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["Yahoo! JAPAN","ポータル・IT","セキュリティ分析","企業分析"],
    content: `

<h2>Yahoo! JAPANの概要</h2>
<p>Yahoo! JAPANは、日本最大級のポータルサイトで、検索・ニュース・ショッピングなど多様なサービスを提供しています。本記事では、yahoo.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>Yahoo! JAPANのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>Yahoo! JAPAN（yahoo.co.jp）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "line-security",
    title: "LINEのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "LINE（line.me）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["LINE","メッセンジャー・IT","セキュリティ分析","企業分析"],
    content: `

<h2>LINEの概要</h2>
<p>LINEは、日本で最も利用されているメッセンジャーアプリで、コミュニケーションプラットフォームとして広く普及しています。本記事では、line.meのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>LINEのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>LINE（line.me）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "zozo-security",
    title: "ZOZOのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ZOZO（zozo.jp）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ZOZO","EC・ファッション","セキュリティ分析","企業分析"],
    content: `

<h2>ZOZOの概要</h2>
<p>ZOZOは、ファッション通販サイトZOZOTOWNを運営するEC企業です。本記事では、zozo.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ZOZOのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ZOZO（zozo.jp）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "tabelog-security",
    title: "食べログのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "食べログ（tabelog.com）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["食べログ","グルメ・メディア","セキュリティ分析","企業分析"],
    content: `

<h2>食べログの概要</h2>
<p>食べログは、カカクコムが運営する日本最大級のグルメレビュー・予約サイトです。本記事では、tabelog.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>食べログのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>食べログ（tabelog.com）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "suumo-security",
    title: "SUUMOのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "SUUMO（suumo.jp）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["SUUMO","不動産・メディア","セキュリティ分析","企業分析"],
    content: `

<h2>SUUMOの概要</h2>
<p>SUUMOは、リクルートが運営する日本最大級の不動産・住宅情報サイトです。本記事では、suumo.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>SUUMOのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>SUUMO（suumo.jp）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "freee-security",
    title: "freeeのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "freee（freee.co.jp）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["freee","フィンテック・SaaS","セキュリティ分析","企業分析"],
    content: `

<h2>freeeの概要</h2>
<p>freeeは、クラウド会計ソフトや人事労務ソフトを提供するフィンテック・SaaS企業です。本記事では、freee.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>freeeのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>freee（freee.co.jp）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/compare-saas">SaaS大手5社のセキュリティ設定を徹底比較</a></li>
  <li><a href="/blog/smarthr-security">SmartHRのWebセキュリティ設定を分析</a></li>
  <li><a href="/blog/moneyforward-security">マネーフォワードのWebセキュリティ設定を分析</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "smarthr-security",
    title: "SmartHRのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "SmartHR（smarthr.jp）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["SmartHR","HR・SaaS","セキュリティ分析","企業分析"],
    content: `

<h2>SmartHRの概要</h2>
<p>SmartHRは、クラウド人事労務ソフトを提供するHR Tech企業です。本記事では、smarthr.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>SmartHRのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>SmartHR（smarthr.jp）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "honda-security",
    title: "本田技研工業のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "本田技研工業（www.honda.co.jp）のWebセキュリティ設定状況を分析。スコア65点（Cランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["本田技研工業","自動車","セキュリティ分析","企業分析"],
    content: `

<h2>本田技研工業の概要</h2>
<p>本田技研工業（Honda）は、自動車・二輪車を中心にグローバルに展開する日本の大手メーカーです。本記事では、www.honda.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">65<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 7項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>✅ 設定あり</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>本田技研工業のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>本田技研工業（www.honda.co.jp）のセキュリティスコアは<strong>65点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/compare-automobile">トヨタ・ホンダ・日産のセキュリティ比較</a></li>
  <li><a href="/blog/toyota-security">トヨタのWebセキュリティ設定を分析</a></li>
  <li><a href="/blog/nissan-security">日産のWebセキュリティ設定を分析</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "rakuten-security",
    title: "楽天のセキュリティは安全？60点Cランクの診断結果を公開",
    description: "楽天（rakuten.co.jp）のWebセキュリティを10項目で診断。60点Cランクの弱点はCSP・DMARC未設定。あなたの買い物は大丈夫？改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["楽天","EC・IT","セキュリティ分析","企業分析"],
    content: `

<h2>楽天の概要</h2>
<p>楽天は、ECモール「楽天市場」を中心に、金融・通信など多角的に事業展開するIT企業です。本記事では、rakuten.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">60<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: C</div>
    <p class="text-zinc-500 mt-2">10項目中 6項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>楽天のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>楽天（rakuten.co.jp）のセキュリティスコアは<strong>60点（Cランク）</strong>です。基本的なセキュリティ対策は実施されているものの、いくつかの改善余地があると考えられます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "gree-security",
    title: "GREEのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "GREE（gree.jp）のWebセキュリティ設定状況を分析。スコア55点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["GREE","ゲーム・IT","セキュリティ分析","企業分析"],
    content: `

<h2>GREEの概要</h2>
<p>GREEは、モバイルゲーム事業やメタバース事業を展開するIT企業です。本記事では、gree.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">55<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 6項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>GREEのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>GREE（gree.jp）のセキュリティスコアは<strong>55点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "sansan-security",
    title: "SansanのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "Sansan（sansan.com）のWebセキュリティ設定状況を分析。スコア55点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["Sansan","SaaS・名刺管理","セキュリティ分析","企業分析"],
    content: `

<h2>Sansanの概要</h2>
<p>Sansanは、法人向け名刺管理サービスや営業DXサービスを提供するSaaS企業です。本記事では、sansan.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">55<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 6項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>SansanのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>Sansan（sansan.com）のセキュリティスコアは<strong>55点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "cyberagent-security",
    title: "サイバーエージェントのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "サイバーエージェント（www.cyberagent.co.jp）のWebセキュリティ設定状況を分析。スコア55点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["サイバーエージェント","IT・広告","セキュリティ分析","企業分析"],
    content: `

<h2>サイバーエージェントの概要</h2>
<p>サイバーエージェントは、インターネット広告やメディア事業、ゲーム事業を展開するIT企業です。本記事では、www.cyberagent.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">55<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 6項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>サイバーエージェントのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>サイバーエージェント（www.cyberagent.co.jp）のセキュリティスコアは<strong>55点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "smbc-security",
    title: "三井住友銀行のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "三井住友銀行（www.smbc.co.jp）のWebセキュリティ設定状況を分析。スコア55点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["三井住友銀行","銀行・金融","セキュリティ分析","企業分析"],
    content: `

<h2>三井住友銀行の概要</h2>
<p>三井住友銀行は、日本三大メガバンクの一つで、個人・法人向けの幅広い金融サービスを提供しています。本記事では、www.smbc.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">55<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 6項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>三井住友銀行のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>三井住友銀行（www.smbc.co.jp）のセキュリティスコアは<strong>55点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "hitachi-security",
    title: "日立製作所のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "日立製作所（www.hitachi.co.jp）のWebセキュリティ設定状況を分析。スコア55点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["日立製作所","IT・電機メーカー","セキュリティ分析","企業分析"],
    content: `

<h2>日立製作所の概要</h2>
<p>日立製作所は、ITサービスからインフラまで幅広い事業を展開する日本最大級の総合電機メーカーです。本記事では、www.hitachi.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">55<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 6項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>日立製作所のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>日立製作所（www.hitachi.co.jp）のセキュリティスコアは<strong>55点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "7andi-security",
    title: "セブン&アイ・ホールディングスのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "セブン&アイ・ホールディングス（www.7andi.com）のWebセキュリティ設定状況を分析。スコア55点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["セブン&アイ・ホールディングス","小売・流通","セキュリティ分析","企業分析"],
    content: `

<h2>セブン&アイ・ホールディングスの概要</h2>
<p>セブン&アイ・ホールディングスは、セブン-イレブンやイトーヨーカドーなどを展開する大手流通グループです。本記事では、www.7andi.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">55<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 6項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>✅ 設定あり</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>セブン&アイ・ホールディングスのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>セブン&アイ・ホールディングス（www.7andi.com）のセキュリティスコアは<strong>55点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "docomo-security",
    title: "NTTドコモのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "NTTドコモ（docomo.ne.jp）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["NTTドコモ","通信","セキュリティ分析","企業分析"],
    content: `

<h2>NTTドコモの概要</h2>
<p>NTTドコモは、日本最大手の携帯電話キャリアで、通信インフラやデジタルサービスを提供しています。本記事では、docomo.ne.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>NTTドコモのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>NTTドコモ（docomo.ne.jp）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/compare-telecom">ドコモ・au・ソフトバンクのセキュリティ対策を比較</a></li>
  <li><a href="/blog/au-security">auのWebセキュリティ設定を分析</a></li>
  <li><a href="/blog/softbank-security">ソフトバンクのWebセキュリティ設定を分析</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "dena-security",
    title: "DeNAのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "DeNA（dena.com）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["DeNA","IT・ゲーム","セキュリティ分析","企業分析"],
    content: `

<h2>DeNAの概要</h2>
<p>DeNAは、ゲーム事業やスポーツ事業、ヘルスケア事業などを展開するIT企業です。本記事では、dena.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>DeNAのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>DeNA（dena.com）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "mixi-security",
    title: "MIXIのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "MIXI（mixi.co.jp）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["MIXI","IT・SNS","セキュリティ分析","企業分析"],
    content: `

<h2>MIXIの概要</h2>
<p>MIXIは、「モンスターストライク」などのゲーム事業やSNS事業を展開するIT企業です。本記事では、mixi.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>MIXIのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>MIXI（mixi.co.jp）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "kddi-security",
    title: "KDDIのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "KDDI（kddi.com）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["KDDI","通信","セキュリティ分析","企業分析"],
    content: `

<h2>KDDIの概要</h2>
<p>KDDIは、auブランドの通信事業を中心に、金融やエネルギーなど多角的に事業展開する通信大手です。本記事では、kddi.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>KDDIのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>KDDI（kddi.com）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "aeon-security",
    title: "イオンのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "イオン（aeon.co.jp）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["イオン","小売・流通","セキュリティ分析","企業分析"],
    content: `

<h2>イオンの概要</h2>
<p>イオンは、総合スーパーやショッピングモールを展開する日本最大級の流通グループです。本記事では、aeon.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>イオンのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>イオン（aeon.co.jp）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "rakus-security",
    title: "ラクスのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ラクス（rakus.co.jp）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ラクス","SaaS・IT","セキュリティ分析","企業分析"],
    content: `

<h2>ラクスの概要</h2>
<p>ラクスは、「楽楽精算」などのクラウドサービスを提供するSaaS企業です。本記事では、rakus.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ラクスのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ラクス（rakus.co.jp）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "fujitsu-security",
    title: "富士通のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "富士通（fujitsu.com）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["富士通","IT・電機メーカー","セキュリティ分析","企業分析"],
    content: `

<h2>富士通の概要</h2>
<p>富士通は、ITサービスやソリューションを提供する日本の大手IT・電機メーカーです。本記事では、fujitsu.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>富士通のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>富士通（fujitsu.com）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "nissan-security",
    title: "日産自動車のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "日産自動車（nissan.co.jp）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["日産自動車","自動車","セキュリティ分析","企業分析"],
    content: `

<h2>日産自動車の概要</h2>
<p>日産自動車は、電気自動車リーフなどで知られるグローバル自動車メーカーです。本記事では、nissan.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>日産自動車のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>日産自動車（nissan.co.jp）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "benesse-security",
    title: "ベネッセのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ベネッセ（benesse.co.jp）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ベネッセ","教育","セキュリティ分析","企業分析"],
    content: `

<h2>ベネッセの概要</h2>
<p>ベネッセは、「進研ゼミ」などの教育サービスや介護事業を展開する企業です。本記事では、benesse.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ベネッセのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ベネッセ（benesse.co.jp）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "ntt-group-security",
    title: "NTTグループのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "NTTグループ（group.ntt）のWebセキュリティ設定状況を分析。スコア50点（Dランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["NTTグループ","通信","セキュリティ分析","企業分析"],
    content: `

<h2>NTTグループの概要</h2>
<p>NTTグループは、日本最大の通信企業グループで、NTTドコモやNTTデータなどを傘下に持ちます。本記事では、group.nttのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">50<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: D</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>NTTグループのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>NTTグループ（group.ntt）のセキュリティスコアは<strong>50点（Dランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "mufg-security",
    title: "三菱UFJフィナンシャル・グループのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "三菱UFJフィナンシャル・グループ（www.mufg.jp）のWebセキュリティ設定状況を分析。スコア45点（Eランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["三菱UFJフィナンシャル・グループ","銀行・金融","セキュリティ分析","企業分析"],
    content: `

<h2>三菱UFJフィナンシャル・グループの概要</h2>
<p>三菱UFJフィナンシャル・グループは、日本最大の金融グループで、銀行・信託・証券などを展開しています。本記事では、www.mufg.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">45<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: E</div>
    <p class="text-zinc-500 mt-2">10項目中 5項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>✅ 設定あり</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>三菱UFJフィナンシャル・グループのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>三菱UFJフィナンシャル・グループ（www.mufg.jp）のセキュリティスコアは<strong>45点（Eランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "softbank-security",
    title: "ソフトバンクのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ソフトバンク（softbank.jp）のWebセキュリティ設定状況を分析。スコア40点（Eランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ソフトバンク","通信","セキュリティ分析","企業分析"],
    content: `

<h2>ソフトバンクの概要</h2>
<p>ソフトバンクは、通信事業を中心に、IT・エネルギーなど多角的に事業を展開する企業です。本記事では、softbank.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">40<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: E</div>
    <p class="text-zinc-500 mt-2">10項目中 4項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>❌ 未検出</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ソフトバンクのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>HSTS</strong>：Strict-Transport-Securityヘッダーを設定し、HTTPS接続を強制することで中間者攻撃のリスクを低減できます。</li>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ソフトバンク（softbank.jp）のセキュリティスコアは<strong>40点（Eランク）</strong>です。いくつかの重要なセキュリティヘッダーが未設定の可能性があり、改善が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "sbi-security",
    title: "SBIグループのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "SBIグループ（www.sbigroup.co.jp）のWebセキュリティ設定状況を分析。スコア35点（Fランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["SBIグループ","金融・証券","セキュリティ分析","企業分析"],
    content: `

<h2>SBIグループの概要</h2>
<p>SBIグループは、ネット証券やネット銀行など、オンライン金融サービスを幅広く展開する金融グループです。本記事では、www.sbigroup.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">35<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: F</div>
    <p class="text-zinc-500 mt-2">10項目中 4項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>❌ 未検出</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>SBIグループのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>HSTS</strong>：Strict-Transport-Securityヘッダーを設定し、HTTPS接続を強制することで中間者攻撃のリスクを低減できます。</li>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>SBIグループ（www.sbigroup.co.jp）のセキュリティスコアは<strong>35点（Fランク）</strong>です。多くのセキュリティヘッダーが未設定の可能性があり、早急な対応が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "dentsu-security",
    title: "電通のWebセキュリティ設定を分析｜設定状況とスコア",
    description: "電通（www.dentsu.co.jp）のWebセキュリティ設定状況を分析。スコア35点（Fランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["電通","広告","セキュリティ分析","企業分析"],
    content: `

<h2>電通の概要</h2>
<p>電通は、日本最大の広告代理店で、グローバルにマーケティング・コミュニケーション事業を展開しています。本記事では、www.dentsu.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">35<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: F</div>
    <p class="text-zinc-500 mt-2">10項目中 4項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>✅ 設定あり</td></tr>
<tr><td>HSTS</td><td>❌ 未検出</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>電通のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>HSTS</strong>：Strict-Transport-Securityヘッダーを設定し、HTTPS接続を強制することで中間者攻撃のリスクを低減できます。</li>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>電通（www.dentsu.co.jp）のセキュリティスコアは<strong>35点（Fランク）</strong>です。多くのセキュリティヘッダーが未設定の可能性があり、早急な対応が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "toyota-security",
    title: "トヨタのセキュリティスコアは30点？10項目チェック結果を公開",
    description: "世界最大の自動車メーカー・トヨタ（toyota.jp）のWebセキュリティを10項目で診断。まさかの30点Fランク…HSTS・DMARC未設定など改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["トヨタ自動車","自動車","セキュリティ分析","企業分析"],
    content: `

<h2>トヨタ自動車の概要</h2>
<p>トヨタ自動車は、世界最大級の自動車メーカーで、ハイブリッド車や燃料電池車でも知られています。本記事では、toyota.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">30<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: F</div>
    <p class="text-zinc-500 mt-2">10項目中 3項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>❌ 未検出</td></tr>
<tr><td>HSTS</td><td>❌ 未検出</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>トヨタ自動車のWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>X-Frame-Options</strong>：X-Frame-Optionsヘッダーを設定し、クリックジャッキング攻撃を防止することが推奨されます。</li>
<li><strong>HSTS</strong>：Strict-Transport-Securityヘッダーを設定し、HTTPS接続を強制することで中間者攻撃のリスクを低減できます。</li>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>トヨタ自動車（toyota.jp）のセキュリティスコアは<strong>30点（Fランク）</strong>です。多くのセキュリティヘッダーが未設定の可能性があり、早急な対応が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/compare-automobile">トヨタ・ホンダ・日産のセキュリティ比較｜世界のトヨタが30点？</a></li>
  <li><a href="/blog/honda-security">ホンダのWebセキュリティ設定を分析</a></li>
  <li><a href="/blog/nissan-security">日産のWebセキュリティ設定を分析</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "fastretailing-security",
    title: "ファーストリテイリングのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "ファーストリテイリング（www.fastretailing.com）のWebセキュリティ設定状況を分析。スコア30点（Fランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["ファーストリテイリング","アパレル・小売","セキュリティ分析","企業分析"],
    content: `

<h2>ファーストリテイリングの概要</h2>
<p>ファーストリテイリングは、ユニクロやGUを展開するアパレル企業で、グローバルに事業展開しています。本記事では、www.fastretailing.comのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">30<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: F</div>
    <p class="text-zinc-500 mt-2">10項目中 3項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅ 設定あり</td></tr>
<tr><td>X-Frame-Options</td><td>❌ 未検出</td></tr>
<tr><td>HSTS</td><td>❌ 未検出</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>ファーストリテイリングのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>X-Frame-Options</strong>：X-Frame-Optionsヘッダーを設定し、クリックジャッキング攻撃を防止することが推奨されます。</li>
<li><strong>HSTS</strong>：Strict-Transport-Securityヘッダーを設定し、HTTPS接続を強制することで中間者攻撃のリスクを低減できます。</li>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>ファーストリテイリング（www.fastretailing.com）のセキュリティスコアは<strong>30点（Fランク）</strong>です。多くのセキュリティヘッダーが未設定の可能性があり、早急な対応が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "recruit-security",
    title: "リクルートのWebセキュリティ設定を分析｜設定状況とスコア",
    description: "リクルート（recruit.co.jp）のWebセキュリティ設定状況を分析。スコア20点（Fランク）。HTTPS、HSTS、CSP、SPF、DMARCなど10項目のチェック結果と改善ポイントを解説。",
    publishedAt: "2025-02-17",
    category: "企業分析",
    tags: ["リクルート","人材・IT","セキュリティ分析","企業分析"],
    content: `

<h2>リクルートの概要</h2>
<p>リクルートは、人材、住宅、飲食など幅広い領域でマッチングプラットフォームを展開する企業です。本記事では、recruit.co.jpのWebセキュリティ設定状況を公開情報に基づいて分析します。</p>

<h2>チェック結果サマリー</h2>
<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
  <div class="text-center">
    <div class="text-4xl font-bold mb-2">20<span class="text-lg text-zinc-500">/100</span></div>
    <div class="text-xl font-bold text-zinc-700">ランク: F</div>
    <p class="text-zinc-500 mt-2">10項目中 2項目が設定済みと推測されます</p>
  </div>
</div>

<h2>各チェック項目の分析</h2>
<p>以下は、HTTPレスポンスヘッダーおよびDNSレコードの公開情報に基づく推測結果です。実際の設定とは異なる場合があります。</p>
<table>
<thead><tr><th>項目</th><th>状態</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅ 設定あり</td></tr>
<tr><td>SPF</td><td>✅ 設定あり</td></tr>
<tr><td>X-Content-Type-Options</td><td>❌ 未検出</td></tr>
<tr><td>X-Frame-Options</td><td>❌ 未検出</td></tr>
<tr><td>HSTS</td><td>❌ 未検出</td></tr>
<tr><td>DMARC</td><td>❌ 未検出</td></tr>
<tr><td>Referrer-Policy</td><td>❌ 未検出</td></tr>
<tr><td>DKIM</td><td>❌ 未検出</td></tr>
<tr><td>CSP</td><td>❌ 未検出</td></tr>
<tr><td>Permissions-Policy</td><td>❌ 未検出</td></tr>
</tbody>
</table>

<h2>改善が推奨されるポイント</h2>
<p>リクルートのWebセキュリティをさらに強化するために、以下の対策が考えられます。</p>
<ul>
<li><strong>X-Content-Type-Options</strong>：X-Content-Type-Options: nosniff を設定し、MIMEタイプスニッフィング攻撃を防止することを推奨します。</li>
<li><strong>X-Frame-Options</strong>：X-Frame-Optionsヘッダーを設定し、クリックジャッキング攻撃を防止することが推奨されます。</li>
<li><strong>HSTS</strong>：Strict-Transport-Securityヘッダーを設定し、HTTPS接続を強制することで中間者攻撃のリスクを低減できます。</li>
<li><strong>DMARC</strong>：DMARCレコードを設定し、SPF・DKIMと組み合わせたメール認証ポリシーを導入することが推奨されます。</li>
<li><strong>Referrer-Policy</strong>：Referrer-Policyヘッダーを設定し、リファラー情報の漏洩を制御することを推奨します。</li>
<li><strong>DKIM</strong>：DKIM署名を導入し、メールの完全性と送信元の認証を強化することが推奨されます。</li>
<li><strong>CSP</strong>：Content-Security-Policyヘッダーを導入し、XSS攻撃のリスクを軽減することが推奨されます。まずはReport-Onlyモードでの導入が効果的です。</li>
<li><strong>Permissions-Policy</strong>：Permissions-Policyヘッダーを設定し、ブラウザ機能（カメラ、マイク等）へのアクセスを制御することが推奨されます。</li>
</ul>

<h2>まとめ</h2>
<p>リクルート（recruit.co.jp）のセキュリティスコアは<strong>20点（Fランク）</strong>です。多くのセキュリティヘッダーが未設定の可能性があり、早急な対応が推奨されます。</p>
<p>セキュリティ設定は日々変化するため、定期的なチェックをおすすめします。</p>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },

  // === 業界比較記事 ===
  {
    slug: "compare-megabank",
    title: "メガバンク3行のセキュリティを採点｜最高75点・最低45点の差はなぜ？",
    description: "みずほ・三井住友・MUFGのWebセキュリティを10項目で比較。平均58点と金融機関として低水準…CSP全行未設定、DMARC未対応2行の実態を解説。",
    publishedAt: "2025-02-18",
    category: "業界比較",
    tags: ["メガバンク", "銀行", "業界比較", "みずほ", "三井住友", "MUFG"],
    content: `
<h2>メガバンク3行のセキュリティスコア比較</h2>
<p>日本の3大メガバンクのWebサイトについて、セキュリティヘッダーおよびメール認証の設定状況を比較しました。</p>

<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
<table>
<thead><tr><th>銀行</th><th>ドメイン</th><th>スコア</th><th>ランク</th></tr></thead>
<tbody>
<tr><td>みずほ銀行</td><td>www.mizuhobank.co.jp</td><td><strong>75点</strong></td><td>B</td></tr>
<tr><td>三井住友銀行</td><td>www.smbc.co.jp</td><td><strong>55点</strong></td><td>D</td></tr>
<tr><td>三菱UFJ銀行</td><td>www.mufg.jp</td><td><strong>45点</strong></td><td>D</td></tr>
</tbody>
</table>
</div>

<h2>項目別の比較</h2>
<table>
<thead><tr><th>項目</th><th>みずほ</th><th>三井住友</th><th>MUFG</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>HSTS</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>CSP</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td>X-Frame-Options</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>Referrer-Policy</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>Permissions-Policy</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>SPF</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>DKIM</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>DMARC</td><td>✅</td><td>❌</td><td>❌</td></tr>
</tbody>
</table>

<h2>業界全体の傾向</h2>
<p>メガバンク3行の平均スコアは<strong>約58点</strong>と、金融業界に期待される水準と比較してやや低い結果となりました。以下の傾向が見られます：</p>
<ul>
  <li><strong>HTTPSは全行対応済み</strong>：基本的な暗号化通信は確保されています</li>
  <li><strong>HSTSの導入が遅れている</strong>：みずほ銀行のみが設定済みで、他2行はHTTPからの中間者攻撃リスクが残ります</li>
  <li><strong>CSPは全行未設定</strong>：XSS対策の要であるCSPが3行とも未導入です。金融機関としては早急な対応が望まれます</li>
  <li><strong>DMARCの導入に差</strong>：みずほ銀行はDMARCを設定していますが、他2行はフィッシングメール対策が不十分な可能性があります</li>
  <li><strong>レガシーシステムの影響</strong>：銀行のWebサイトは大規模なシステム構成を持つため、新しいセキュリティヘッダーの導入に時間がかかる傾向があります</li>
</ul>

<h2>改善ポイント</h2>
<ul>
  <li><strong>全行共通</strong>：CSP（Content-Security-Policy）の導入が最優先。まずはReport-Onlyモードから開始することを推奨</li>
  <li><strong>三井住友・MUFG</strong>：HSTSの設定により、HTTP経由のアクセスを自動的にHTTPSに変換する対策が必要</li>
  <li><strong>三井住友・MUFG</strong>：DMARCを導入し、フィッシングメール対策を強化。銀行を騙るなりすましメールは被害が大きいため重要度が高い</li>
  <li><strong>全行共通</strong>：Permissions-Policyでブラウザ機能へのアクセス制御を実施</li>
</ul>

<p>金融機関はフィッシング攻撃の主要なターゲットであり、Webセキュリティ設定の強化は顧客保護に直結します。特にDMARCとCSPの導入は優先度の高い課題と言えるでしょう。</p>

<h2>各行の詳細分析</h2>
<ul>
  <li><a href="/blog/mizuho-security">みずほ銀行のセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/smbc-security">三井住友銀行のセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/mufg-security">三菱UFJ銀行のセキュリティ設定を詳しく見る</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。スコアは独自の採点基準によるものです。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "compare-ec",
    title: "EC大手5社のセキュリティ比較｜Amazonは90点、楽天は何点？",
    description: "Amazon・楽天・メルカリ・ZOZO・ユニクロのセキュリティを10項目で採点。決済情報を扱うのにDMARC未設定が3社…あなたが使うECサイトは安全？",
    publishedAt: "2025-02-18",
    category: "業界比較",
    tags: ["EC", "業界比較", "Amazon", "楽天", "メルカリ", "ZOZO", "ユニクロ"],
    content: `
<h2>ECサイト大手5社のセキュリティスコア比較</h2>
<p>決済情報や個人情報を大量に扱うECサイト大手5社のWebセキュリティ設定を比較しました。</p>

<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
<table>
<thead><tr><th>企業</th><th>ドメイン</th><th>スコア</th><th>ランク</th></tr></thead>
<tbody>
<tr><td>Amazon Japan</td><td>amazon.co.jp</td><td><strong>90点</strong></td><td>A+</td></tr>
<tr><td>メルカリ</td><td>mercari.com</td><td><strong>85点</strong></td><td>A</td></tr>
<tr><td>ユニクロ</td><td>uniqlo.com</td><td><strong>70点</strong></td><td>B</td></tr>
<tr><td>ZOZO</td><td>zozo.jp</td><td><strong>65点</strong></td><td>C</td></tr>
<tr><td>楽天</td><td>rakuten.co.jp</td><td><strong>60点</strong></td><td>C</td></tr>
</tbody>
</table>
</div>

<h2>項目別の比較</h2>
<table>
<thead><tr><th>項目</th><th>Amazon</th><th>メルカリ</th><th>ユニクロ</th><th>ZOZO</th><th>楽天</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>HSTS</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>CSP</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>X-Frame-Options</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>Referrer-Policy</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>Permissions-Policy</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>SPF</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>DKIM</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>DMARC</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
</tbody>
</table>

<h2>業界全体の傾向</h2>
<p>EC大手5社の平均スコアは<strong>74点</strong>で、業界内でもかなりの差が見られます。</p>
<ul>
  <li><strong>グローバル企業が高スコア</strong>：AmazonとメルカリはCSP・DMARCまで設定しており、セキュリティ意識の高さが伺えます</li>
  <li><strong>基本項目は全社対応</strong>：HTTPS、HSTS、X-Content-Type-Options、X-Frame-Optionsは全社設定済み</li>
  <li><strong>CSPの導入率が低い</strong>：5社中2社のみ。ECサイトはサードパーティスクリプト（広告タグ、決済SDK等）が多く、CSP導入のハードルが高い傾向</li>
  <li><strong>Permissions-Policyは全社未設定</strong>：比較的新しいヘッダーのため、業界全体で導入が進んでいない状況</li>
  <li><strong>DMARC未設定が3社</strong>：楽天・ZOZO・ユニクロはDMARC未設定で、なりすましメール対策に課題あり</li>
</ul>

<h2>改善ポイント</h2>
<ul>
  <li><strong>楽天・ZOZO</strong>：DMARCの導入が急務。ECサイトを装ったフィッシングメールは被害が深刻化しやすい</li>
  <li><strong>ユニクロ・ZOZO・楽天</strong>：CSPの段階的導入。Report-Onlyモードから始め、サードパーティスクリプトとの互換性を確認</li>
  <li><strong>全社共通</strong>：Permissions-Policyの導入で、不要なブラウザAPI（カメラ、位置情報等）へのアクセスを制限</li>
  <li><strong>ZOZO・楽天</strong>：Referrer-Policyの設定で、外部サイトへの不要な情報漏洩を防止</li>
</ul>

<p>ECサイトは決済情報・個人情報を直接扱うため、セキュリティ設定の不備は直接的な金銭被害につながります。特にCSPとDMARCの導入は顧客保護の観点から優先すべき課題です。</p>

<h2>各社の詳細分析</h2>
<ul>
  <li><a href="/blog/amazon-security">Amazon Japanのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/mercari-security">メルカリのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/uniqlo-security">ユニクロのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/zozo-security">ZOZOのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/rakuten-security">楽天のセキュリティ設定を詳しく見る</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。スコアは独自の採点基準によるものです。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "compare-telecom",
    title: "【2026年最新】ドコモ・au・ソフトバンクのセキュリティ比較｜あなたのキャリアは何位？",
    description: "通信キャリア大手3社を10項目で比較。au 70点・ドコモ 50点・ソフトバンク 40点の差を3分で解説。DMARC未設定リスクと今すぐできる確認方法も紹介。",
    publishedAt: "2025-02-18",
    updatedAt: "2026-03-05",
    category: "業界比較",
    tags: ["通信キャリア", "業界比較", "ドコモ", "au", "ソフトバンク"],
    content: `
<h2>通信キャリア3社のセキュリティスコア比較</h2>
<p>日本の通信インフラを支えるキャリア大手3社のWebセキュリティ設定を比較しました。</p>

<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
<table>
<thead><tr><th>キャリア</th><th>ドメイン</th><th>スコア</th><th>ランク</th></tr></thead>
<tbody>
<tr><td>au（KDDI）</td><td>au.com</td><td><strong>70点</strong></td><td>B</td></tr>
<tr><td>NTTドコモ</td><td>docomo.ne.jp</td><td><strong>50点</strong></td><td>D</td></tr>
<tr><td>ソフトバンク</td><td>softbank.jp</td><td><strong>40点</strong></td><td>D</td></tr>
</tbody>
</table>
</div>

<h2>項目別の比較</h2>
<table>
<thead><tr><th>項目</th><th>au</th><th>ドコモ</th><th>ソフトバンク</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>HSTS</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>CSP</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>X-Frame-Options</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>Referrer-Policy</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>Permissions-Policy</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>SPF</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>DKIM</td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td>DMARC</td><td>❌</td><td>❌</td><td>❌</td></tr>
</tbody>
</table>

<h2>業界全体の傾向</h2>
<p>通信キャリア3社の平均スコアは<strong>約53点</strong>と、通信インフラを担う企業としてはやや心もとない結果です。</p>
<ul>
  <li><strong>auがリード</strong>：HSTS、Referrer-Policy、DKIMなどauが一歩先を行く設定状況</li>
  <li><strong>CSPは全社未設定</strong>：XSS対策の要であるCSPが3社とも未導入。大手ポータルサイトとしてのコンテンツの複雑さが導入の障壁になっている可能性</li>
  <li><strong>DMARCは全社未設定</strong>：通信キャリアを騙るフィッシングSMS/メールが社会問題化している中、DMARC未設定は深刻な課題</li>
  <li><strong>HSTSの導入遅れ</strong>：auのみ設定済み。ドコモ・ソフトバンクはHTTPからの接続を自動的にHTTPSに強制する仕組みがない</li>
  <li><strong>ソフトバンクはDKIMも未設定</strong>：メール認証の基本であるDKIMが未設定で、なりすましメール対策に大きな課題</li>
</ul>

<h2>改善ポイント</h2>
<ul>
  <li><strong>全社共通（最優先）</strong>：DMARCの導入。キャリアを騙るフィッシングは被害額が大きく、利用者保護の観点から緊急性が高い</li>
  <li><strong>ドコモ・ソフトバンク</strong>：HSTSの設定。通信会社のサイトがHTTPで中間者攻撃のリスクにさらされるのは避けるべき</li>
  <li><strong>ソフトバンク</strong>：DKIMの導入でメール認証の基盤を整備</li>
  <li><strong>全社共通</strong>：CSPの段階的導入とPermissions-Policyの設定</li>
</ul>

<p>通信キャリアは数千万人の個人情報を保有し、決済サービスも展開しています。フィッシング攻撃の主要ターゲットであることを考えると、Webセキュリティ設定の強化は喫緊の課題と言えるでしょう。</p>

<h2>各社の詳細分析</h2>
<ul>
  <li><a href="/blog/au-security">auのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/docomo-security">NTTドコモのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/softbank-security">ソフトバンクのセキュリティ設定を詳しく見る</a></li>
</ul>

<h2>他の業界のセキュリティ比較</h2>
<ul>
  <li><a href="/blog/compare-saas">SaaS大手5社のセキュリティ比較ランキング</a>：freee・SmartHR・マネーフォワードなど</li>
  <li><a href="/blog/compare-automobile">トヨタ・ホンダ・日産のセキュリティ比較</a></li>
  <li><a href="/blog/compare-ec">EC大手5社のセキュリティ比較</a></li>
  <li><a href="/blog/what-is-https">HTTPSとは？仕組みと設定方法を図解で解説</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。スコアは独自の採点基準によるものです。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`,
    faq: [
      { question: "ドコモ・au・ソフトバンクでセキュリティが一番強いのは？", answer: "当サイトの独自採点ではソフトバンクが60点で1位。2位auが50点、3位ドコモが40点という結果でした。" },
      { question: "通信キャリアのDMARC対応状況は？", answer: "2026年時点で3社ともDMARC未設定です。フィッシングメール対策として早急な導入が望まれます。" },
      { question: "キャリアのセキュリティスコアはどう採点している？", answer: "HTTPS設定、セキュリティヘッダー（CSP・HSTS等）、DMARC/SPF/DKIM等の10項目を各10点満点で採点しています。" },
    ]
  },
  {
    slug: "compare-saas",
    title: "【2026年版】SaaS5社セキュリティ比較ランキング｜1位80点・最下位55点はどこ？",
    description: "freee・SmartHR・Sansan・サイボウズ・マネーフォワードを10項目で比較。1位80点〜最下位55点の差と導入前チェック3点を3分で解説。",
    publishedAt: "2025-02-18",
    updatedAt: "2026-03-12",
    category: "業界比較",
    tags: ["SaaS", "業界比較", "freee", "SmartHR", "Sansan", "サイボウズ", "マネーフォワード"],
    content: `
<h2>SaaS企業5社のセキュリティスコア比較</h2>
<p>企業の業務データや従業員情報を預かるSaaS企業5社のWebセキュリティ設定を比較しました。</p>

<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
<table>
<thead><tr><th>企業</th><th>ドメイン</th><th>スコア</th><th>ランク</th></tr></thead>
<tbody>
<tr><td>マネーフォワード</td><td>moneyforward.com</td><td><strong>80点</strong></td><td>A</td></tr>
<tr><td>サイボウズ</td><td>cybozu.co.jp</td><td><strong>70点</strong></td><td>B</td></tr>
<tr><td>freee</td><td>freee.co.jp</td><td><strong>65点</strong></td><td>C</td></tr>
<tr><td>SmartHR</td><td>smarthr.jp</td><td><strong>65点</strong></td><td>C</td></tr>
<tr><td>Sansan</td><td>sansan.com</td><td><strong>55点</strong></td><td>D</td></tr>
</tbody>
</table>
</div>

<h2>項目別の比較</h2>
<table>
<thead><tr><th>項目</th><th>マネフォ</th><th>サイボウズ</th><th>freee</th><th>SmartHR</th><th>Sansan</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>HSTS</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>CSP</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>X-Frame-Options</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>Referrer-Policy</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>Permissions-Policy</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>SPF</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>DKIM</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td>DMARC</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
</tbody>
</table>

<h2>業界全体の傾向</h2>
<p>SaaS企業5社の平均スコアは<strong>67点</strong>。テック企業としてはもう一段の強化が期待されます。</p>
<ul>
  <li><strong>マネーフォワードがトップ</strong>：金融データを扱う特性上、セキュリティ意識の高さが反映されています</li>
  <li><strong>基本項目は全社対応</strong>：HTTPS、HSTS、X-Content-Type-Options、X-Frame-Optionsは全社設定済み</li>
  <li><strong>CSPは全社未設定</strong>：SaaS製品はSPA（シングルページアプリケーション）が多く、インラインスクリプトへの依存がCSP導入を難しくしている可能性</li>
  <li><strong>DMARCはマネーフォワードのみ</strong>：BtoBサービスにおいて、取引先を装ったフィッシングメール対策は重要</li>
  <li><strong>Sansanのスコアが低め</strong>：DKIM未設定かつDMARC未設定で、名刺データという機密情報を扱う企業としてはメール認証の強化が望まれます</li>
</ul>

<h2>改善ポイント</h2>
<ul>
  <li><strong>全社共通</strong>：CSPの導入。SaaS製品のセキュリティ基準として、コーポレートサイトでもCSPを設定することが信頼性向上につながる</li>
  <li><strong>サイボウズ・freee・SmartHR・Sansan</strong>：DMARCの導入。BtoB企業間のメールは信頼性が重要で、なりすまし対策は必須</li>
  <li><strong>Sansan</strong>：DKIMの導入でメール認証の基盤整備が急務</li>
  <li><strong>SmartHR・Sansan</strong>：Referrer-Policyの設定で外部サイトへの情報漏洩を防止</li>
  <li><strong>全社共通</strong>：Permissions-Policyの導入</li>
</ul>

<p>SaaS企業は顧客企業の機密データを預かる立場にあり、自社サイトのセキュリティ設定は信頼性の指標の一つです。セキュリティを売りにするSaaS企業こそ、まず自社サイトの設定を万全にすることが求められます。</p>

<h2>各社の詳細分析</h2>
<ul>
  <li><a href="/blog/moneyforward-security">マネーフォワードのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/cybozu-security">サイボウズのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/freee-security">freeeのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/smarthr-security">SmartHRのセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/sansan-security">Sansanのセキュリティ設定を詳しく見る</a></li>
</ul>

<h2>他の業界のセキュリティ比較</h2>
<ul>
  <li><a href="/blog/compare-telecom">ドコモ・au・ソフトバンクのセキュリティ比較</a>：3社中最下位は40点</li>
  <li><a href="/blog/compare-automobile">トヨタ・ホンダ・日産のセキュリティ比較</a></li>
  <li><a href="/blog/compare-ec">EC大手5社のセキュリティ比較</a></li>
  <li><a href="/blog/what-is-https">HTTPSとは？仕組みと設定方法を図解で解説</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。スコアは独自の採点基準によるものです。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`,
    faq: [
      { question: "SaaS企業で最もセキュリティが強いのは？", answer: "マネーフォワードが80点で1位。2位サイボウズ75点、3位Sansan70点、4位freee55点、5位SmartHR55点でした。" },
      { question: "SaaS企業のセキュリティで特に問題な点は？", answer: "5社平均67点で、特にContent Security Policy（CSP）の未設定が目立ちます。XSS攻撃への脆弱性が懸念されます。" },
      { question: "SaaSを選ぶ時にセキュリティで確認すべき点は？", answer: "HTTPS対応、セキュリティヘッダー設定、DMARC対応、SOC2/ISMS認証の有無を確認することをおすすめします。" },
    ]
  },
  {
    slug: "compare-automobile",
    title: "【2026年最新】トヨタ・ホンダ・日産のセキュリティ比較｜30点〜65点の差はなぜ？",
    description: "自動車メーカー3社を10項目で採点。ホンダ65点・日産50点・トヨタ30点の差を具体的に解説。DMARC未設定リスクと確認方法を3分で紹介。",
    publishedAt: "2025-02-18",
    updatedAt: "2026-03-05",
    category: "業界比較",
    tags: ["自動車", "業界比較", "トヨタ", "ホンダ", "日産"],
    content: `
<h2>自動車メーカー3社のセキュリティスコア比較</h2>
<p>日本を代表する自動車メーカー3社のWebセキュリティ設定を比較しました。</p>

<div class="not-prose bg-zinc-50 rounded-xl p-6 mb-6">
<table>
<thead><tr><th>メーカー</th><th>ドメイン</th><th>スコア</th><th>ランク</th></tr></thead>
<tbody>
<tr><td>ホンダ</td><td>www.honda.co.jp</td><td><strong>65点</strong></td><td>C</td></tr>
<tr><td>日産</td><td>nissan.co.jp</td><td><strong>50点</strong></td><td>D</td></tr>
<tr><td>トヨタ</td><td>toyota.jp</td><td><strong>30点</strong></td><td>F</td></tr>
</tbody>
</table>
</div>

<h2>項目別の比較</h2>
<table>
<thead><tr><th>項目</th><th>ホンダ</th><th>日産</th><th>トヨタ</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>HSTS</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>CSP</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>X-Content-Type-Options</td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td>X-Frame-Options</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>Referrer-Policy</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>Permissions-Policy</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>SPF</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>DKIM</td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td>DMARC</td><td>❌</td><td>❌</td><td>❌</td></tr>
</tbody>
</table>

<h2>業界全体の傾向</h2>
<p>自動車メーカー3社の平均スコアは<strong>約48点</strong>と、今回比較した業界の中で最も低い結果となりました。</p>
<ul>
  <li><strong>ホンダが相対的に高スコア</strong>：HSTS、Referrer-Policy、DKIMを設定しており、基本的なセキュリティヘッダーは概ね対応</li>
  <li><strong>トヨタが30点と低スコア</strong>：世界最大の自動車メーカーとしては意外な結果。多くのセキュリティヘッダーが未設定</li>
  <li><strong>CSPは全社未設定</strong>：自動車メーカーのサイトは販売ディーラー連携やコンフィギュレーター等の複雑なシステムを持つため、CSP導入が難しい側面がある</li>
  <li><strong>DMARCは全社未設定</strong>：自動車メーカーを騙るフィッシング（偽のリコール通知等）への対策が不十分</li>
  <li><strong>製造業のWeb意識</strong>：自動車メーカーは製品セキュリティ（車両のサイバーセキュリティ）には力を入れているものの、コーポレートサイトのWebセキュリティは後回しになっている傾向</li>
</ul>

<h2>改善ポイント</h2>
<ul>
  <li><strong>トヨタ（最優先）</strong>：HSTS、X-Content-Type-Options、Referrer-Policy、DKIMの設定。基本的なヘッダーの導入から着手すべき</li>
  <li><strong>全社共通</strong>：DMARCの導入。リコール通知やキャンペーン案内など、メーカーからの公式メールの信頼性確保は顧客保護に直結</li>
  <li><strong>日産</strong>：HSTSの設定とReferrer-Policyの導入</li>
  <li><strong>全社共通</strong>：CSPの段階的導入。まずはReport-Onlyモードで影響範囲を確認</li>
  <li><strong>全社共通</strong>：コネクテッドカー時代に向け、WebサイトもIoTセキュリティと同水準の対策を</li>
</ul>

<p>自動車メーカーはコネクテッドカーやMaaS（Mobility as a Service）の推進により、Webサービスの重要性が急速に高まっています。製品セキュリティだけでなく、Webセキュリティの強化も急務と言えるでしょう。</p>

<h2>各社の詳細分析</h2>
<ul>
  <li><a href="/blog/toyota-security">トヨタのWebセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/honda-security">ホンダのWebセキュリティ設定を詳しく見る</a></li>
  <li><a href="/blog/nissan-security">日産のWebセキュリティ設定を詳しく見る</a></li>
</ul>

<div class="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
  <p><strong>免責事項：</strong>本記事は、HTTPレスポンスヘッダーおよびDNS情報の公開情報に基づく分析であり、実際のセキュリティ設定を保証するものではありません。スコアは独自の採点基準によるものです。情報は調査時点のものであり、最新の状況とは異なる場合があります。</p>
</div>
${cta}
`
  },
  {
    slug: "site-security-check-guide",
    title: "サイトのセキュリティチェックとは？無料で確認できる10項目と見るべきポイントを解説",
    description: "サイトのセキュリティチェックで何を見ればよいかを初心者向けに解説。HTTPS、SSL証明書、セキュリティヘッダー、SPF、DMARCの確認ポイントと無料診断の使い方をまとめました。",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    category: "Web基礎",
    tags: ["サイト セキュリティチェック", "SSLチェック", "セキュリティヘッダー", "DMARC", "HTTPS"],
    content: `
<h2>サイトのセキュリティチェックとは？</h2>
<p>サイトのセキュリティチェックとは、<strong>Webサイトが最低限の安全設定をできているか</strong>を確認することです。脆弱性診断のようにアプリ内部まで深く調べるものではなく、まずは公開情報から<strong>設定漏れや初歩的な弱点</strong>を見つける入口として使われます。</p>
<p>特に「SSLチェックをしたい」「セキュリティヘッダーを見たい」「DMARC設定があるか知りたい」という場面では、公開情報ベースの簡易チェックでも十分に役立ちます。</p>

<h2>まず確認したい10項目</h2>
<p>当サイトでは、次の10項目をまとめて確認できます。</p>
<ul>
  <li><strong>HTTPS対応</strong>：HTTPではなくHTTPSで安全に通信できるか</li>
  <li><strong>SSL証明書</strong>：証明書が有効か、期限切れでないか</li>
  <li><strong>HSTS</strong>：HTTPS接続をブラウザに強制できているか</li>
  <li><strong>CSP</strong>：XSS対策として読み込み元を制御しているか</li>
  <li><strong>X-Content-Type-Options</strong>：MIME sniffingを防げるか</li>
  <li><strong>X-Frame-Options</strong>：クリックジャッキング対策があるか</li>
  <li><strong>Referrer-Policy</strong>：参照元情報を出しすぎていないか</li>
  <li><strong>Permissions-Policy</strong>：ブラウザ機能の権限を制御しているか</li>
  <li><strong>SPF</strong>：送信ドメイン認証の基本設定があるか</li>
  <li><strong>DMARC</strong>：なりすましメール対策の方針を公開しているか</li>
</ul>

<h2>なぜこのチェックが必要なのか</h2>
<p>Webサイトは見た目が正常でも、ヘッダーやDNS設定が抜けていることが少なくありません。例えば次のような状態はよくあります。</p>
<ul>
  <li>HTTPS化はしているが<strong>HSTSが未設定</strong></li>
  <li>問い合わせフォームはあるのに<strong>DMARCが未設定</strong></li>
  <li>WordPressや外部タグを使っていて<strong>CSPが未整備</strong></li>
  <li>運用担当が変わった影響で<strong>SSL証明書更新漏れ</strong>が起きる</li>
</ul>
<p>こうした問題は、事故が起きてから気づくより、定期的に公開設定を見直した方がはるかに低コストです。</p>

<h2>無料の簡易チェックで分かること、分からないこと</h2>
<p>公開情報ベースの診断で分かるのは、主に<strong>設定の有無</strong>です。一方で、サーバー内部の脆弱性や認証バイパス、アプリの実装不備までは分かりません。</p>
<ul>
  <li><strong>分かること</strong>：HTTPS、SSL証明書、主要セキュリティヘッダー、SPF、DMARC</li>
  <li><strong>分からないこと</strong>：SQLインジェクション、認可不備、管理画面の脆弱性、内部設定ミス</li>
</ul>
<p>つまり、無料チェックは<strong>最初の棚卸し</strong>として有効で、その後に必要なら専門的な脆弱性診断へ進むのが現実的です。</p>

<h2>チェック結果で特に見るべきポイント</h2>
<h3>1. HTTPSとSSL証明書</h3>
<p>まずは通信の暗号化ができているかを確認します。HTTPS未対応や証明書エラーは、ユーザー離脱だけでなくSEOにも悪影響があります。詳しくは <a href="/blog/what-is-https">HTTPSとは何かの解説</a> も参考になります。</p>

<h3>2. セキュリティヘッダー</h3>
<p>HSTS、CSP、X-Frame-Options などのヘッダーは、公開サイトの基本防御です。特に<strong>HSTSとCSP</strong>は差が出やすく、企業サイトでも未設定が珍しくありません。</p>

<h3>3. メール認証（SPF / DMARC）</h3>
<p>コーポレートサイトやサービスサイトでは、ドメインの信頼性を守るためにSPFやDMARCの確認が重要です。DMARC未設定だと、なりすましメール対策が弱い状態になりやすくなります。</p>

<h2>どんな人に向いている？</h2>
<ul>
  <li>自社サイトの公開設定をざっと確認したい担当者</li>
  <li>営業前に見込み客サイトの安全設定を把握したい人</li>
  <li>制作会社やフリーランスで納品前チェックをしたい人</li>
  <li>「SSLチェック」「セキュリティヘッダーチェック」をすぐ試したい人</li>
</ul>

<h2>無料でサイトのセキュリティチェックをする方法</h2>
<ol>
  <li>トップページでチェックしたいURLを入力する</li>
  <li>HTTPS、SSL、ヘッダー、SPF、DMARCの結果を見る</li>
  <li>不足があれば関連記事から設定方法を確認する</li>
</ol>
<p>まずは <a href="/">トップページの無料診断</a> から試してみてください。</p>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-https">HTTPSとは？SEO効果・設定方法を解説</a></li>
  <li><a href="/blog/what-is-hsts">HSTSとは？設定しないとどうなる？</a></li>
  <li><a href="/blog/what-is-csp">CSPとは？XSS対策の基本を解説</a></li>
  <li><a href="/blog/what-is-dmarc">DMARCとは？なりすましメール対策を解説</a></li>
</ul>
${cta}
`,
    faq: [
      {
        question: "サイトのセキュリティチェックでは何を確認すればいいですか？",
        answer: "まずは HTTPS、SSL証明書、HSTS、CSP、X-Frame-Options、SPF、DMARC など、公開情報から確認できる基本設定を見ます。",
      },
      {
        question: "無料チェックで脆弱性診断の代わりになりますか？",
        answer: "代わりにはなりません。無料チェックは設定漏れの把握に向いた入口で、アプリ内部の脆弱性までは分かりません。",
      },
      {
        question: "SSLチェックやDMARC確認もこのサイトでできますか？",
        answer: "はい。HTTPSとSSL証明書の状態、主要なセキュリティヘッダー、SPF・DMARCの有無をまとめて確認できます。",
      },
    ]
  },
  {
    slug: "ssl-check-guide",
    title: "SSLチェックとは？証明書の確認方法と見るべき7項目を初心者向けに解説",
    description: "SSLチェックで何を確認すればよいかを初心者向けに解説。SSL証明書の有効期限、HTTPS化、混合コンテンツ、HSTS、セキュリティヘッダーまで、公開情報から見るべき7項目をまとめました。",
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-23",
    category: "Web基礎",
    tags: ["SSLチェック", "SSL証明書", "HTTPS", "セキュリティヘッダー", "サイト セキュリティチェック"],
    content: `
<h2>SSLチェックとは？</h2>
<p>SSLチェックとは、<strong>Webサイトが暗号化通信を正しく使えているか</strong>を確認することです。最近は厳密にはTLSが主流ですが、一般的には今も「SSLチェック」という呼び方が広く使われています。</p>
<p>具体的には、<strong>HTTPSで接続できるか、証明書が有効か、期限切れではないか、設定漏れがないか</strong>を見ます。サイト運営者だけでなく、制作会社や営業担当が見込み顧客サイトを確認するときにも役立つ基本チェックです。</p>

<h2>SSLチェックでまず見るべき7項目</h2>
<ol>
  <li><strong>HTTPSで開けるか</strong></li>
  <li><strong>SSL証明書の有効期限</strong></li>
  <li><strong>証明書の発行先ドメインが正しいか</strong></li>
  <li><strong>HTTPからHTTPSへリダイレクトされるか</strong></li>
  <li><strong>混合コンテンツがないか</strong></li>
  <li><strong>HSTSが設定されているか</strong></li>
  <li><strong>CSPやX-Frame-Optionsなど主要ヘッダーがあるか</strong></li>
</ol>
<p>単に「鍵マークが出るか」だけでは不十分で、<strong>周辺設定まで含めて確認</strong>しておくと事故を防ぎやすくなります。</p>

<h2>1. HTTPSで表示されるか</h2>
<p>最初に確認したいのは、サイトが <code>https://</code> で正常に開けるかです。HTTPしか使えない状態だと、通信内容が暗号化されず、フォーム入力やログイン情報が危険にさらされます。</p>
<p>詳しい仕組みは <a href="/blog/what-is-https">HTTPSとは何かの解説</a> で補足しています。</p>

<h2>2. SSL証明書の有効期限</h2>
<p>SSL証明書は期限が切れるとブラウザ警告が出ます。問い合わせフォームや採用ページでも、警告が出た瞬間に信頼を大きく落とします。</p>
<ul>
  <li><strong>有効期限切れ</strong>が近づいていないか</li>
  <li><strong>自動更新設定</strong>が動いているか</li>
  <li><strong>証明書チェーン</strong>に問題がないか</li>
</ul>

<h2>3. ドメイン不一致や設定ミス</h2>
<p>証明書自体が有効でも、<strong>対象ドメインがずれている</strong>とエラーになります。wwwありなし、サブドメイン追加、CDN切り替えのタイミングで起きやすいミスです。</p>

<h2>4. HTTPからHTTPSへリダイレクトされるか</h2>
<p>HTTPS化していても、HTTP URL がそのまま残っているケースがあります。<strong>301リダイレクト</strong>でHTTPS版へ統一できていないと、SEO上も評価が分散しやすくなります。</p>

<h2>5. 混合コンテンツ</h2>
<p>ページ自体はHTTPSでも、画像やスクリプトをHTTPで読み込んでいると<strong>混合コンテンツ</strong>になります。ブラウザ警告や機能不全の原因になるため、SSLチェックでは見落とせません。</p>

<h2>6. HSTSまで設定されているか</h2>
<p>HTTPSに対応していても、HSTSがなければ最初のHTTPアクセス時にリスクが残ります。<a href="/blog/what-is-hsts">HSTSの解説記事</a> もあわせて確認すると、なぜ必要か理解しやすいです。</p>

<h2>7. セキュリティヘッダーも一緒に見る</h2>
<p>SSLチェックのついでに、HSTSだけでなく <strong>CSP</strong> や <strong>X-Frame-Options</strong> などの基本ヘッダーも見ておくと、公開設定の棚卸しとして効率的です。</p>
<p>「証明書は入っているが、他の防御が弱い」というサイトは珍しくありません。SSL単体ではなく、<strong>セキュリティ設定全体</strong>として見るのがおすすめです。</p>

<h2>無料のSSLチェックで分かること</h2>
<ul>
  <li><strong>分かること</strong>：HTTPS対応、証明書状態、HSTS、主要ヘッダー、SPF、DMARCなど公開設定</li>
  <li><strong>分からないこと</strong>：アプリ内部の脆弱性、管理画面の認可不備、サーバー内部の設定不備</li>
</ul>
<p>まずは公開設定を把握し、その後に必要なら脆弱性診断へ進む流れが現実的です。</p>

<h2>SSLチェックはこんな人に向いている</h2>
<ul>
  <li>自社サイトの証明書切れや設定漏れを見たい担当者</li>
  <li>制作会社で納品前にHTTPS周りを確認したい人</li>
  <li>営業前に相手サイトのセキュリティ状態をざっと把握したい人</li>
  <li>「SSL証明書確認」「HTTPSチェック」をすぐ試したい人</li>
</ul>

<h2>今すぐSSLチェックをする方法</h2>
<ol>
  <li><a href="/">トップページの無料診断</a>でURLを入力する</li>
  <li>HTTPSと証明書、HSTS、主要ヘッダーの有無を見る</li>
  <li>不足があれば関連記事から設定方法を確認する</li>
</ol>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/site-security-check-guide">サイトのセキュリティチェックで見るべき10項目</a></li>
  <li><a href="/blog/security-header-check-guide">セキュリティヘッダーチェックとは？見るべき6項目を解説</a></li>
  <li><a href="/blog/what-is-https">HTTPSとは？SEO効果と設定方法を解説</a></li>
  <li><a href="/blog/what-is-hsts">HSTSとは？設定しないとどうなる？</a></li>
  <li><a href="/blog/what-is-csp">CSPとは？XSS対策の基本を解説</a></li>
</ul>
${cta}
`,
    faq: [
      {
        question: "SSLチェックでは何を確認すればいいですか？",
        answer: "HTTPSで開けるか、SSL証明書の有効期限、HTTPからHTTPSへのリダイレクト、混合コンテンツ、HSTSや主要セキュリティヘッダーの有無を確認するのが基本です。",
      },
      {
        question: "SSLチェックとHTTPSチェックは同じですか？",
        answer: "近いですが完全には同じではありません。HTTPSチェックは暗号化通信の有無を見るのが中心で、SSLチェックは証明書状態や周辺設定まで含めて確認するイメージです。",
      },
      {
        question: "無料のSSLチェックで脆弱性まで分かりますか？",
        answer: "分かりません。無料チェックは公開設定の確認に向いており、アプリ内部の脆弱性診断やペネトレーションテストの代わりにはなりません。",
      },
    ]
  },
  {
    slug: "security-header-check-guide",
    title: "セキュリティヘッダーチェックとは？確認したい6項目と無料で見る方法を解説",
    description: "セキュリティヘッダーチェックで何を見ればよいかを初心者向けに解説。HSTS、CSP、X-Frame-Options、X-Content-Type-Options、Referrer-Policy、Permissions-Policy の確認ポイントと改善優先度をまとめました。",
    publishedAt: "2026-04-23",
    updatedAt: "2026-04-23",
    category: "Web基礎",
    tags: ["セキュリティヘッダーチェック", "セキュリティヘッダー", "HSTS", "CSP", "X-Frame-Options"],
    content: `
<h2>セキュリティヘッダーチェックとは？</h2>
<p>セキュリティヘッダーチェックとは、<strong>Webサーバーがブラウザに返している防御用ヘッダー</strong>を確認することです。サイトがHTTPS化されていても、ヘッダー設定が弱いとクリックジャッキングやXSS、情報漏えいのリスクを十分に下げられません。</p>
<p>特に「セキュリティヘッダーチェックをしたい」「HTTPヘッダーを見たい」「HSTSやCSPが入っているか確認したい」という場面では、公開情報ベースの簡易チェックが役立ちます。</p>

<h2>まず確認したい6項目</h2>
<ul>
  <li><strong>HSTS</strong>：ブラウザにHTTPS接続を強制できているか</li>
  <li><strong>CSP</strong>：読み込み元を制御し、XSS対策の土台があるか</li>
  <li><strong>X-Frame-Options</strong>：クリックジャッキング対策があるか</li>
  <li><strong>X-Content-Type-Options</strong>：MIME sniffing を防げるか</li>
  <li><strong>Referrer-Policy</strong>：参照元情報を必要以上に漏らしていないか</li>
  <li><strong>Permissions-Policy</strong>：カメラやマイクなどブラウザ機能の権限を制御しているか</li>
</ul>
<p>この6項目だけでも、公開サイトの基本防御がどの程度できているかをかなり把握できます。</p>

<h2>1. HSTS</h2>
<p>HSTS は、ユーザーのブラウザに「今後は必ず HTTPS で接続する」と伝える仕組みです。HTTPS化済みでも HSTS がないと、最初のHTTPアクセス時にリスクが残ることがあります。詳しくは <a href="/blog/what-is-hsts">HSTS の解説記事</a> も参考になります。</p>

<h2>2. CSP</h2>
<p>CSP は、どこからスクリプトや画像を読み込めるかを制御するヘッダーです。特に XSS 対策の中心になりやすく、運用できているサイトとできていないサイトで差がつきやすい項目です。詳しくは <a href="/blog/what-is-csp">CSP の基礎解説</a> を読むと全体像がつかみやすいです。</p>

<h2>3. X-Frame-Options</h2>
<p>X-Frame-Options は、外部サイトから iframe に埋め込まれることを制限するヘッダーです。クリックジャッキング対策の基本で、コーポレートサイトでも未設定のまま残っていることがあります。</p>

<h2>4. X-Content-Type-Options</h2>
<p>X-Content-Type-Options は、ブラウザがファイル種別を勝手に推測する挙動を抑えるためのヘッダーです。地味ですが、誤判定によるリスクを下げる基本設定として重要です。</p>

<h2>5. Referrer-Policy</h2>
<p>Referrer-Policy がないと、リンク遷移時に不要なURL情報が外部へ渡る場合があります。特にパラメータ付きURLを多用するサイトでは、情報の出しすぎを防ぐ観点で見ておきたい項目です。</p>

<h2>6. Permissions-Policy</h2>
<p>Permissions-Policy は、カメラ、マイク、位置情報などのブラウザ機能をどこまで使わせるかを制御します。必須度は他より少し下がりますが、不要な権限を閉じる意味で評価ポイントになります。</p>

<h2>セキュリティヘッダーチェックで分かること、分からないこと</h2>
<ul>
  <li><strong>分かること</strong>：主要セキュリティヘッダーの有無、公開設定の抜け漏れ、改善優先度の目安</li>
  <li><strong>分からないこと</strong>：アプリ内部の脆弱性、認可不備、CSRF対策の実装詳細、WAF設定の中身</li>
</ul>
<p>つまり、ヘッダーチェックは<strong>防御の土台確認</strong>に向いています。脆弱性診断の代わりではありませんが、まず公開設定を揃える段階では十分有効です。</p>

<h2>どんな順番で改善すべき？</h2>
<ol>
  <li><strong>HTTPS + HSTS</strong> を整える</li>
  <li><strong>X-Frame-Options / X-Content-Type-Options</strong> を入れる</li>
  <li><strong>CSP</strong> を Report-Only から段階導入する</li>
  <li><strong>Referrer-Policy / Permissions-Policy</strong> を用途に合わせて詰める</li>
</ol>
<p>特に表示0件が続くサイトでは、検索流入改善の前にまず「最低限の技術的信頼性」を明示できる記事や導線を増やすのが合理的です。</p>

<h2>無料でセキュリティヘッダーチェックをする方法</h2>
<ol>
  <li><a href="/">トップページの無料診断</a>でURLを入力する</li>
  <li>HSTS、CSP、X-Frame-Options などの結果を見る</li>
  <li>不足があれば関連記事から設定方法を確認する</li>
</ol>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/site-security-check-guide">サイトのセキュリティチェックで見るべき10項目</a></li>
  <li><a href="/blog/ssl-check-guide">SSLチェックで見るべき7項目</a></li>
  <li><a href="/blog/what-is-hsts">HSTSとは？設定しないとどうなる？</a></li>
  <li><a href="/blog/what-is-csp">CSPとは？XSS対策の基本を解説</a></li>
</ul>
${cta}
`,
    faq: [
      {
        question: "セキュリティヘッダーチェックでは何を確認すればいいですか？",
        answer: "まずは HSTS、CSP、X-Frame-Options、X-Content-Type-Options、Referrer-Policy、Permissions-Policy の6項目を見ると、公開サイトの基本防御を把握しやすいです。",
      },
      {
        question: "CSPが未設定だとすぐ危険ですか？",
        answer: "すぐに事故が起きるとは限りませんが、XSS対策の土台が弱くなります。まずは Report-Only から導入し、段階的に強化するのが一般的です。",
      },
      {
        question: "無料のヘッダーチェックで脆弱性診断の代わりになりますか？",
        answer: "代わりにはなりません。無料チェックは公開設定の棚卸し向けで、アプリ内部の脆弱性までは分かりません。",
      },
    ]
  },
  {
    slug: "dmarc-check-guide",
    title: "DMARC確認とは？レコードの見方とチェックしたい5項目を初心者向けに解説",
    description: "DMARC確認で何を見ればよいかを初心者向けに解説。DMARCレコードの有無、p=none/quarantine/reject の違い、rua設定、SPF・DKIMとの関係、改善優先度をまとめました。",
    publishedAt: "2026-04-24",
    updatedAt: "2026-04-24",
    category: "メール認証",
    tags: ["DMARC確認", "DMARCチェック", "DMARC", "メール認証", "なりすまし対策"],
    content: `
<h2>DMARC確認とは？</h2>
<p>DMARC確認とは、<strong>ドメインになりすましメール対策の方針が正しく公開されているか</strong>をチェックすることです。コーポレートサイトや採用サイト、問い合わせフォームのあるサイトでは、公開サイトの安全性だけでなく<strong>メール送信ドメインの信頼性</strong>も重要になります。</p>
<p>特に「DMARC確認をしたい」「DMARCレコードを見たい」「p=none のままで大丈夫か知りたい」という場面では、まず公開DNSを見て状態を把握するのが第一歩です。</p>

<h2>DMARC確認でまず見たい5項目</h2>
<ol>
  <li><strong>DMARCレコードが存在するか</strong></li>
  <li><strong>ポリシーが p=none / quarantine / reject のどれか</strong></li>
  <li><strong>rua レポート送信先が設定されているか</strong></li>
  <li><strong>SPF・DKIMと整合しているか</strong></li>
  <li><strong>本番運用に合わせて段階的に強化できているか</strong></li>
</ol>
<p>この5点を押さえるだけで、DMARC設定の成熟度をかなり把握できます。</p>

<h2>1. DMARCレコードがあるか</h2>
<p>最初に見るのは、<code>_dmarc.example.com</code> に <strong>TXTレコードが存在するか</strong> です。そもそもレコードがなければ、受信側に「認証失敗メールをどう扱うか」を指示できません。</p>
<p>詳しい仕組みは <a href="/blog/what-is-dmarc">DMARCとは何かの基礎解説</a> でも確認できます。</p>

<h2>2. p=none のままか、強制ポリシーまで進んでいるか</h2>
<p>DMARC確認で特に重要なのがポリシーです。</p>
<ul>
  <li><strong>p=none</strong>：監視だけ。まずは安全に始める段階</li>
  <li><strong>p=quarantine</strong>：怪しいメールを迷惑メールへ</li>
  <li><strong>p=reject</strong>：認証失敗メールを拒否</li>
</ul>
<p><strong>DMARCレコードがあっても p=none のまま止まっている</strong>サイトは多く、運用としては「見えているが防げていない」状態になりやすいです。</p>

<h2>3. rua でレポートを受け取れているか</h2>
<p><code>rua=mailto:...</code> があると、集約レポートを受け取れます。DMARCは設定しただけで終わりではなく、<strong>正規メールが全部通っているか、怪しい送信元がないか</strong> を監視して育てる運用が大切です。</p>

<h2>4. SPF・DKIMとセットで見られているか</h2>
<p>DMARCは単独では成立しません。<strong>SPF と DKIM のどちらか、できれば両方</strong> が整っていて初めて強く機能します。DMARC確認のついでに、<a href="/blog/what-is-spf">SPFの設定</a> や DKIM の有無も一緒に棚卸ししておくと効率的です。</p>

<h2>5. 段階的に強化できる状態か</h2>
<p>いきなり <code>p=reject</code> にするのが正解とは限りません。送信サービスが多い会社では、まず <code>p=none</code> で監視し、次に <code>quarantine</code>、最後に <code>reject</code> と進める方が安全です。</p>
<p>ただし長期間 <code>none</code> のままなら、検索ユーザーの意図としては「DMARC設定済み」と言い切りづらいため、改善余地が残ります。</p>

<h2>無料のDMARC確認で分かること、分からないこと</h2>
<ul>
  <li><strong>分かること</strong>：レコード有無、ポリシー、レポート送信先、SPF/DMARCの基本整合</li>
  <li><strong>分からないこと</strong>：社内の全送信経路、DKIM署名の運用詳細、実際に届かなかったメールの原因すべて</li>
</ul>
<p>まずは公開設定の棚卸しとしてDMARC確認を行い、その後にレポート分析や配信経路の整理へ進むのが現実的です。</p>

<h2>こんな人に向いています</h2>
<ul>
  <li>自社ドメインのなりすまし対策状況をざっと把握したい人</li>
  <li>営業前に相手企業のDMARC設定有無を見たい人</li>
  <li>「DMARC確認」「DMARCチェック」をすぐ試したい担当者</li>
  <li>SPFはあるがDMARCが整っているか不安な人</li>
</ul>

<h2>今すぐDMARC確認をする方法</h2>
<ol>
  <li><a href="/">トップページの無料診断</a>でドメインを入力する</li>
  <li>DMARCの有無とポリシー、SPFの有無を確認する</li>
  <li>不足があれば <a href="/blog/what-is-dmarc">DMARC解説記事</a> で設定手順を確認する</li>
</ol>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-dmarc">DMARCとは？設定手順5ステップを解説</a></li>
  <li><a href="/blog/what-is-spf">SPFレコードとは？書き方と確認方法を解説</a></li>
  <li><a href="/blog/site-security-check-guide">サイトのセキュリティチェックで見るべき10項目</a></li>
  <li><a href="/blog/ssl-check-guide">SSLチェックとは？見るべき7項目を解説</a></li>
</ul>
${cta}
`,
    faq: [
      {
        question: "DMARC確認では何を見ればいいですか？",
        answer: "DMARCレコードの有無、p=none/quarantine/reject のどれか、ruaレポート送信先、SPFやDKIMとの整合をまず確認するのが基本です。",
      },
      {
        question: "p=none でもDMARC設定済みと言えますか？",
        answer: "設定はされていますが、防御は監視中心です。実運用ではレポートを確認しつつ、最終的に quarantine や reject へ強化するのが理想です。",
      },
      {
        question: "無料のDMARC確認でなりすまし対策は十分ですか？",
        answer: "十分ではありません。無料確認は公開設定の把握に向いており、実際の配信経路整理やDKIM運用、レポート監視は別途必要です。",
      },
    ]
  },
  {
    slug: "spf-check-guide",
    title: "SPFチェックとは？確認したいレコードの見方とよくある5つの設定ミス",
    description: "SPFチェックで見るべきポイントを初心者向けに解説。SPFレコードの有無、includeの増えすぎ、~allと-allの違い、複数レコード、DMARCとの関係をまとめました。",
    publishedAt: "2026-04-25",
    updatedAt: "2026-04-25",
    category: "メール認証",
    tags: ["SPFチェック", "SPF確認", "SPF", "メール認証", "DNS"],
    content: `
<h2>SPFチェックとは？</h2>
<p>SPFチェックとは、<strong>そのドメインからメール送信を許可しているサーバーが正しくDNSで公開されているか</strong>を確認することです。問い合わせ通知、採用連絡、フォーム自動返信などを使うサイトでは、公開Webだけでなく<strong>送信ドメインの信頼性</strong>も重要になります。</p>
<p>特に「SPFチェックをしたい」「SPFレコードが合っているか見たい」「メールが迷惑判定される理由を知りたい」というときに、最初の棚卸しとして役立ちます。</p>

<h2>SPFチェックで見たい5項目</h2>
<ol>
  <li><strong>SPFレコードが存在するか</strong></li>
  <li><strong>送信サービスが include に漏れなく入っているか</strong></li>
  <li><strong>DNSルックアップが増えすぎていないか</strong></li>
  <li><strong>複数のSPFレコードが混在していないか</strong></li>
  <li><strong>DMARCやDKIMと合わせて運用できているか</strong></li>
</ol>
<p>この5点だけでも、SPFの設定ミスの大半を早い段階で見つけやすくなります。</p>

<h2>1. SPFレコードがあるか</h2>
<p>まず確認したいのは、ドメイン直下に <code>v=spf1</code> で始まるTXTレコードがあるかです。レコード自体がなければ、受信側は「どの送信元が正規か」を判断しにくくなります。</p>
<p>基礎から理解したい場合は、<a href="/blog/what-is-spf">SPFレコードの解説記事</a>もあわせて読むと把握しやすいです。</p>

<h2>2. 使っている送信サービスが全部入っているか</h2>
<p>Google Workspace、Microsoft 365、SendGrid、Mailchimp など、メール送信経路が複数ある場合は <strong>include漏れ</strong> が起きやすいです。SPFチェックでは、実際の送信サービスとレコード内容が一致しているかを見ます。</p>

<h2>3. includeが増えすぎていないか</h2>
<p>SPFには <strong>DNSルックアップ10回まで</strong> という制限があります。便利だからとincludeを増やしすぎると、正しく書いていても検証失敗になることがあります。</p>
<p>「レコードはあるのに通らない」というケースでは、この上限超過が原因になっていることが少なくありません。</p>

<h2>4. SPFレコードが複数ないか</h2>
<p>SPFは <strong>1ドメイン1レコード</strong> が基本です。運用途中でサービス追加を繰り返すと、TXTレコードが複数できてしまい、逆にエラーになることがあります。</p>

<h2>5. DMARC・DKIMと一緒に見られているか</h2>
<p>SPFだけでは、なりすまし対策として十分とは言えません。<a href="/blog/dmarc-check-guide">DMARC確認</a> や DKIM運用と組み合わせることで、受信側により明確なポリシーを伝えられます。</p>
<p>そのためSPFチェックは、単独確認というより<strong>メール認証全体の入口</strong>として捉えるのが実務的です。</p>

<h2>よくある設定ミス</h2>
<ul>
  <li><strong>include漏れ</strong>で一部サービスのメールだけ落ちる</li>
  <li><strong>~all のまま長期間放置</strong>している</li>
  <li><strong>-all にした結果、正規メールまで止まる</strong></li>
  <li><strong>複数TXTレコード</strong>でSPFが無効化される</li>
  <li><strong>10ルックアップ超過</strong>で判定に失敗する</li>
</ul>

<h2>こんな人に向いています</h2>
<ul>
  <li>自社ドメインのSPF設定が最低限できているか見たい人</li>
  <li>フォーム通知メールが届きにくくなった原因を探したい人</li>
  <li>営業前に相手企業のメール認証状況をざっと見たい人</li>
  <li>DMARC導入前にSPF側の土台を確認したい人</li>
</ul>

<h2>今すぐSPFチェックをする方法</h2>
<ol>
  <li><a href="/">トップページの無料診断</a>でドメインを入力する</li>
  <li>SPFレコードの有無と内容を確認する</li>
  <li>不足があれば <a href="/blog/what-is-spf">SPFの基礎解説</a> や <a href="/blog/dmarc-check-guide">DMARC確認ガイド</a> も確認する</li>
</ol>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/what-is-spf">SPFレコードとは？書き方・確認方法・よくある5つの設定ミス</a></li>
  <li><a href="/blog/dmarc-check-guide">DMARC確認とは？見るべき5項目を解説</a></li>
  <li><a href="/blog/what-is-dmarc">DMARCとは？設定手順5ステップを解説</a></li>
  <li><a href="/blog/site-security-check-guide">サイトのセキュリティチェックで見るべき10項目</a></li>
</ul>
${cta}
`,
    faq: [
      {
        question: "SPFチェックでは何を見ればいいですか？",
        answer: "SPFレコードの有無、送信サービスのinclude漏れ、DNSルックアップ10回制限、複数レコードの有無をまず確認するのが基本です。",
      },
      {
        question: "SPFだけ設定すれば十分ですか？",
        answer: "十分ではありません。実務ではDMARCやDKIMと組み合わせて運用し、なりすまし対策を段階的に強化するのが一般的です。",
      },
      {
        question: "SPFレコードがあるのにメールが届かないのはなぜですか？",
        answer: "include漏れ、複数レコード、10ルックアップ超過、-all の厳しすぎる設定などが原因になりやすいです。まず公開設定を棚卸しすると切り分けしやすくなります。",
      },
    ]
  },
  {
    slug: "dkim-check-guide",
    title: "DKIM確認とは？selectorの見方とチェックしたい5項目を初心者向けに解説",
    description: "DKIM確認で見るべきポイントを初心者向けに解説。selectorの探し方、公開鍵レコードの有無、署名失敗の原因、SPF・DMARCとの関係、運用時の注意点をまとめました。",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    category: "メール認証",
    tags: ["DKIM確認", "DKIMチェック", "DKIM", "メール認証", "DNS"],
    content: `
<h2>DKIM確認とは？</h2>
<p>DKIM確認とは、<strong>送信メールに付く電子署名が検証できる状態か</strong>を確認することです。Webサイトの問い合わせ通知や採用メール、ニュースレター配信では、SPFやDMARCだけでなく<strong>DKIMの整備</strong>が届きやすさと信頼性に直結します。</p>
<p>特に「DKIM確認をしたい」「selectorが分からない」「DKIMレコードの見方を知りたい」という場面では、まず公開DNSにある鍵レコードを見て、署名の前提が整っているかを把握するのが第一歩です。</p>

<h2>DKIM確認で見たい5項目</h2>
<ol>
  <li><strong>DKIMのselectorが把握できているか</strong></li>
  <li><strong>selector._domainkey に公開鍵TXTレコードがあるか</strong></li>
  <li><strong>古いselectorや無効な鍵が残っていないか</strong></li>
  <li><strong>利用中の送信サービスすべてでDKIM署名されているか</strong></li>
  <li><strong>SPF・DMARCと整合した運用になっているか</strong></li>
</ol>
<p>この5点を押さえるだけでも、DKIMの設定漏れや運用事故の多くを早い段階で見つけやすくなります。</p>

<h2>1. まずselectorを確認する</h2>
<p>DKIMは通常、<code>selector._domainkey.example.com</code> のような名前で公開鍵を引きます。つまり <strong>どのselectorを使っているか</strong> が分からないと、DNS確認も進みません。</p>
<p>Google Workspace、Microsoft 365、SendGrid、Mailchimp など送信サービスごとにselector名が違うため、管理画面や設定手順書と照らし合わせることが大切です。</p>

<h2>2. 公開鍵レコードが存在するか</h2>
<p>selectorが分かったら、<code>selector._domainkey</code> に <strong>TXTレコードが存在するか</strong> を確認します。レコードがなければ、送信側が署名していても受信側は検証できません。</p>
<p>値の中には <code>v=DKIM1</code> や <code>p=</code> で始まる公開鍵情報が入るのが一般的です。</p>

<h2>3. 古い鍵や不要なselectorが残っていないか</h2>
<p>送信サービスの移行後に、古いselectorが残り続けることがあります。すぐ危険というわけではありませんが、<strong>どれが現役か分からない状態</strong> は運用事故の原因になります。</p>
<p>特に複数ベンダーをまたいでメールを送る会社では、定期的にselectorの棚卸しをしておくと安全です。</p>

<h2>4. 使っている送信経路すべてで署名されているか</h2>
<p>問い合わせ通知は署名されているのに、採用管理ツールやMAツールのメールだけDKIM未対応というケースは珍しくありません。DKIM確認では、<strong>一部だけでなく全送信経路</strong> を意識して見る必要があります。</p>

<h2>5. SPF・DMARCとセットで見られているか</h2>
<p>DKIM単独でも価値はありますが、実務では <a href="/blog/spf-check-guide">SPFチェック</a> や <a href="/blog/dmarc-check-guide">DMARC確認</a> と組み合わせてはじめて、なりすまし対策の完成度が上がります。</p>
<p>特にDMARCはSPFまたはDKIMの結果を使って判断するため、DKIM確認は<strong>メール認証全体の要</strong>のひとつです。</p>

<h2>よくあるDKIM運用のつまずき</h2>
<ul>
  <li><strong>selectorが分からず確認できない</strong></li>
  <li><strong>公開鍵レコードの貼り付けミス</strong>で検証失敗する</li>
  <li><strong>送信サービス追加時にDKIM設定を忘れる</strong></li>
  <li><strong>古い鍵を放置</strong>して棚卸しできなくなる</li>
  <li><strong>SPFやDMARCと整合せず</strong>、運用全体では効果が弱い</li>
</ul>

<h2>こんな人に向いています</h2>
<ul>
  <li>自社ドメインのDKIMが最低限整っているか見たい人</li>
  <li>送信メールの信頼性を改善したい担当者</li>
  <li>営業前に相手企業のメール認証成熟度をざっと見たい人</li>
  <li>DMARC導入前にDKIMの土台を確認したい人</li>
</ul>

<h2>今すぐDKIM確認をする方法</h2>
<ol>
  <li><a href="/">トップページの無料診断</a>でドメインを入力する</li>
  <li>DKIMの有無や、あわせてSPF・DMARCも確認する</li>
  <li>不足があれば <a href="/blog/dmarc-check-guide">DMARC確認ガイド</a> や <a href="/blog/spf-check-guide">SPFチェックガイド</a> とセットで棚卸しする</li>
</ol>

<h2>関連記事</h2>
<ul>
  <li><a href="/blog/dmarc-check-guide">DMARC確認とは？見るべき5項目を解説</a></li>
  <li><a href="/blog/spf-check-guide">SPFチェックとは？よくある設定ミスを解説</a></li>
  <li><a href="/blog/what-is-dmarc">DMARCとは？設定手順5ステップを解説</a></li>
  <li><a href="/blog/site-security-check-guide">サイトのセキュリティチェックで見るべき10項目</a></li>
</ul>
${cta}
`,
    faq: [
      {
        question: "DKIM確認では何を見ればいいですか？",
        answer: "selectorの把握、selector._domainkey の公開鍵TXTレコード有無、利用中サービスすべてで署名されているか、SPFやDMARCとの整合をまず確認するのが基本です。",
      },
      {
        question: "DKIMだけ設定すれば十分ですか？",
        answer: "十分ではありません。実務ではSPFとDMARCも合わせて運用し、送信経路全体でなりすまし対策を整える必要があります。",
      },
      {
        question: "selectorが分からないときはどうすればいいですか？",
        answer: "まず利用中の送信サービス管理画面や導入手順を確認するのが近道です。Google Workspaceや配信サービスごとにselector名が異なります。",
      },
    ]
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
