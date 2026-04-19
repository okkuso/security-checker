"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import rankingsData from "@/data/rankings.json";
import { articles } from "@/content/articles";

function scoreColor(score: number) {
  if (score >= 80) return "text-emerald-600";
  if (score >= 50) return "text-amber-500";
  return "text-red-500";
}

function scoreBg(score: number) {
  if (score >= 80) return "bg-emerald-50";
  if (score >= 50) return "bg-amber-50";
  return "bg-red-50";
}

function rankBadge(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `${rank}`;
}

const faqItems = [
  {
    question: "サイトのセキュリティチェックでは何がわかりますか？",
    answer: "HTTPS、HSTS、CSP、X-Frame-Options、SPF、DMARCなど公開情報から確認できる主要設定の有無をまとめて確認できます。",
  },
  {
    question: "無料で何回でも診断できますか？",
    answer: "はい。URLを入力するだけで無料で診断できます。営業不要の簡易チェック用途でも使えます。",
  },
  {
    question: "脆弱性診断とは違いますか？",
    answer: "違います。このサイトは公開設定の見える範囲を確認する簡易診断です。アプリ内部の脆弱性診断やペネトレーションテストの代替ではありません。",
  },
];

const checkItems = [
  "HTTPS対応",
  "SSL証明書の有効性",
  "HSTS",
  "CSP",
  "X-Content-Type-Options",
  "X-Frame-Options",
  "Referrer-Policy",
  "Permissions-Policy",
  "SPFレコード",
  "DMARCレコード",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "サイトのセキュリティチェックを無料で行う方法",
  description: "URLを入力するだけで、HTTPS・HSTS・CSP・SPF・DMARCなどの公開設定を無料診断する手順です。",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      name: "URLを入力する",
      text: "チェックしたいWebサイトのURLを入力します。",
    },
    {
      "@type": "HowToStep",
      name: "診断結果を確認する",
      text: "HTTPS、HSTS、CSP、SPF、DMARCなど主要設定の有無を確認します。",
    },
    {
      "@type": "HowToStep",
      name: "関連記事で改善方法を学ぶ",
      text: "設定漏れがあれば、HTTPS・DMARC・SPF・CSP・HSTSの解説記事から対応方法を確認します。",
    },
  ],
};

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Webセキュリティ設定チェッカー",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  description: "URLを入力するだけで、サイトのセキュリティ設定を無料診断できるWebツールです。HTTPS・HSTS・CSP・SPF・DMARCなど10項目を確認できます。",
  featureList: [
    "HTTPSチェック",
    "HSTSチェック",
    "CSPチェック",
    "SPFチェック",
    "DMARCチェック",
    "ランキング比較",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  url: "https://security-check-site.net",
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "サイトのセキュリティチェック10項目",
  itemListElement: checkItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item,
  })),
};

export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    router.push(`/result?url=${encodeURIComponent(url.trim())}`);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Script
        id="home-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="home-howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <Script
        id="home-webapp-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <Script
        id="home-check-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <section className="text-center mb-20">
        <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-4">Web Security Settings Check</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900">
          サイトのセキュリティ設定を<br />
          <span className="text-red-500">無料診断</span>
        </h1>
        <p className="text-zinc-500 text-lg mb-6 max-w-2xl mx-auto">
          URLを入力するだけで、公開情報からサイトのセキュリティ設定を無料チェック。HTTPS、HSTS、CSP、SPF、DMARCなど10項目の設定漏れを2分で確認できます。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-sm text-zinc-500">
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">無料</span>
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">登録不要</span>
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">URL入力だけ</span>
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">主要10項目を確認</span>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-xl mx-auto">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 px-5 py-4 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-lg placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 shadow-sm"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg transition-colors whitespace-nowrap shadow-sm"
          >
            診断する
          </button>
        </form>
      </section>

      <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="text-lg font-semibold text-zinc-900 mb-3">サイトのセキュリティチェックは3ステップ</h2>
        <ol className="grid gap-3 sm:grid-cols-3 text-sm text-zinc-600 mb-6">
          <li className="rounded-xl border border-zinc-200 bg-white p-4"><strong className="block text-zinc-900 mb-1">1. URLを入力</strong>調べたいサイトをそのまま貼り付けます。</li>
          <li className="rounded-xl border border-zinc-200 bg-white p-4"><strong className="block text-zinc-900 mb-1">2. 設定状況を確認</strong>HTTPSやセキュリティヘッダー、メール認証をまとめて見ます。</li>
          <li className="rounded-xl border border-zinc-200 bg-white p-4"><strong className="block text-zinc-900 mb-1">3. 改善方法を読む</strong>不足があれば関連記事から設定手順を追えます。</li>
        </ol>
        <h2 className="text-lg font-semibold text-zinc-900 mb-3">このサイトでできるセキュリティチェック</h2>
        <p className="text-zinc-600 mb-4">
          このWebセキュリティチェックサイトでは、URLを入れるだけで <strong>HTTPS・HSTS・CSP・SPF・DMARC</strong> などの設定漏れをすばやく確認できます。
          「まず公開情報ベースで現状を把握したい」という用途に向いた無料診断ツールです。
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 text-sm text-zinc-600">
          <li className="rounded-xl border border-zinc-200 bg-white p-4">HTTPSと証明書の有無を確認</li>
          <li className="rounded-xl border border-zinc-200 bg-white p-4">HSTSやCSPなど主要ヘッダーを確認</li>
          <li className="rounded-xl border border-zinc-200 bg-white p-4">SPF・DMARCなどメール認証設定を確認</li>
          <li className="rounded-xl border border-zinc-200 bg-white p-4">主要企業ランキングと比較記事も読める</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">✅ このツールで確認できる10項目</h2>
            <p className="text-sm text-zinc-500 mt-1">ホームだけで確認できる内容を、検索ユーザーにもそのまま伝わるよう一覧化しました。</p>
          </div>
          <span className="text-xs text-zinc-400 whitespace-nowrap">無料・登録不要</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 text-sm text-zinc-600">
          {checkItems.map((item) => (
            <div key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Ranking */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-zinc-900">🏆 セキュリティ設定ランキング</h2>
          <span className="text-xs text-zinc-400">{rankingsData.length}社 • 2025年2月調査</span>
        </div>
        <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
          {rankingsData.map((item, i) => (
            <div
              key={item.name}
              onClick={() => router.push(`/result?url=${encodeURIComponent(item.name)}`)}
              className={`flex items-center justify-between px-5 py-3.5 border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50 transition-colors cursor-pointer ${i < 3 ? scoreBg(item.score) : ""}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-base w-8 text-center">{rankBadge(i + 1)}</span>
                <span className="text-zinc-700 font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 h-2 bg-zinc-100 rounded-full overflow-hidden hidden sm:block">
                  <div
                    className={`h-full rounded-full ${item.score >= 80 ? "bg-emerald-400" : item.score >= 50 ? "bg-amber-400" : "bg-red-400"}`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <span className={`font-bold font-mono text-lg w-8 text-right ${scoreColor(item.score)}`}>{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured comparisons */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-zinc-900">🔥 よく読まれている比較記事</h2>
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors">
            すべての記事を見る →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            "compare-saas",
            "compare-telecom",
            "compare-automobile",
          ].map((slug) => {
            const article = articles.find((a) => a.slug === slug);
            if (!article) return null;
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-bold text-zinc-900 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-zinc-500 line-clamp-3">{article.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="flex items-center justify-between mb-4 gap-3">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">🧭 まず読む基礎解説</h2>
            <p className="text-sm text-zinc-500 mt-1">
              HTTPS・DMARC・SPF・CSP・HSTS の基礎記事へ、トップページから直接たどれる導線を追加しています。
            </p>
          </div>
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors whitespace-nowrap">
            ブログ一覧 →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {["what-is-https", "what-is-dmarc", "what-is-spf", "what-is-csp", "what-is-hsts"].map((slug) => {
            const article = articles.find((a) => a.slug === slug);
            if (!article) return null;
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-sm text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 transition-colors"
              >
                {article.title}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Blog */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-zinc-900">📚 セキュリティ知識ベース</h2>
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors">
            すべての記事を見る →
          </Link>
        </div>
        <div className="space-y-3">
          {articles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                  {article.category}
                </span>
                <span className="text-xs text-zinc-400">{article.publishedAt}</span>
              </div>
              <h3 className="font-bold text-zinc-900 mb-1">{article.title}</h3>
              <p className="text-sm text-zinc-500 line-clamp-1">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">🗺️ 記事をまとめてたどる</h2>
            <p className="text-sm text-zinc-500 mt-1">
              比較記事・基礎解説・企業分析を一覧できるHTMLサイトマップを追加しました。
            </p>
          </div>
          <Link
            href="/site-map"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
          >
            サイトマップを見る →
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">よくある質問</h2>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="font-bold text-zinc-900 mb-2">{item.question}</h3>
              <p className="text-sm text-zinc-600 leading-6">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-zinc-400 text-xs mt-16 pt-6 border-t border-zinc-200">
        <div className="flex items-center justify-center gap-4 mb-3 text-sm">
          <Link href="/blog" className="hover:text-zinc-600 transition-colors">ブログ</Link>
          <Link href="/site-map" className="hover:text-zinc-600 transition-colors">サイトマップ</Link>
        </div>
        本チェックは公開情報に基づくセキュリティ設定の確認であり、Webサイトの安全性を保証・否定するものではありません。
      </footer>
    </main>
  );
}
