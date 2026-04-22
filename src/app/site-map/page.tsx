import Link from "next/link";
import Script from "next/script";
import { articles } from "@/content/articles";
import type { Metadata } from "next";

const BASE_URL = "https://security-check-site.net";

export const metadata: Metadata = {
  title: "HTMLサイトマップ｜比較記事・基礎解説・企業分析の一覧",
  description:
    "security-check-site.net の主要ページをカテゴリ別にまとめたHTMLサイトマップ。比較記事、HTTPS/DMARC解説、企業分析ページを一覧できます。",
  alternates: {
    canonical: "/site-map",
  },
  openGraph: {
    title: "HTMLサイトマップ｜比較記事・基礎解説・企業分析の一覧",
    description:
      "比較記事・基礎解説・企業分析ページをカテゴリ別にまとめたHTMLサイトマップです。",
  },
};

const featuredSlugs = ["site-security-check-guide", "ssl-check-guide", "compare-saas", "what-is-https"];
const foundationalSlugs = ["site-security-check-guide", "ssl-check-guide", "what-is-https", "what-is-hsts", "what-is-csp", "what-is-spf", "what-is-dmarc"];

const featuredArticles = featuredSlugs
  .map((slug) => articles.find((article) => article.slug === slug))
  .filter((article): article is NonNullable<typeof article> => Boolean(article));

const foundationalArticles = foundationalSlugs
  .map((slug) => articles.find((article) => article.slug === slug))
  .filter((article): article is NonNullable<typeof article> => Boolean(article));

const companyArticles = articles.filter((article) => article.category === "企業分析");
const comparisonArticles = articles.filter(
  (article) => article.slug.startsWith("compare-") && !featuredSlugs.includes(article.slug)
);

function getBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "サイトマップ", item: `${BASE_URL}/site-map` },
    ],
  };
}

function getItemListJsonLd() {
  const allLinks = [
    { name: "トップページ", url: BASE_URL },
    { name: "ブログ一覧", url: `${BASE_URL}/blog` },
    ...articles.map((article) => ({
      name: article.title,
      url: `${BASE_URL}/blog/${article.slug}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allLinks.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      name: item.name,
    })),
  };
}

function LinkList({ title, description, items }: { title: string; description: string; items: typeof articles }) {
  if (items.length === 0) return null;

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
      <p className="text-sm text-zinc-500 mt-2 mb-5">{description}</p>
      <div className="space-y-3">
        {items.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block rounded-xl border border-zinc-200 px-4 py-3 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
          >
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                {article.category}
              </span>
              <span className="text-xs text-zinc-400">{article.updatedAt ?? article.publishedAt}</span>
            </div>
            <div className="font-semibold text-zinc-900">{article.title}</div>
            <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function SiteMapPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Script
        id="sitemap-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd()) }}
      />
      <Script
        id="sitemap-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListJsonLd()) }}
      />

      <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
        <Link href="/" className="hover:text-zinc-600">トップ</Link>
        <span>/</span>
        <span className="text-zinc-600">サイトマップ</span>
      </nav>

      <div className="mb-10">
        <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-4">HTML Sitemap</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">🗺️ HTMLサイトマップ</h1>
        <p className="text-zinc-500 text-lg">
          比較記事、基礎解説、企業分析ページをカテゴリ別にまとめています。Googleにもユーザーにもたどりやすい導線として使える一覧ページです。
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-zinc-900 mb-4">主要ページ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/" className="rounded-xl border border-zinc-200 bg-white px-4 py-4 hover:border-zinc-300 hover:bg-zinc-50 transition-all">
            <div className="font-semibold text-zinc-900">トップページ</div>
            <p className="text-sm text-zinc-500 mt-1">URL診断フォームとランキング一覧</p>
          </Link>
          <Link href="/blog" className="rounded-xl border border-zinc-200 bg-white px-4 py-4 hover:border-zinc-300 hover:bg-zinc-50 transition-all">
            <div className="font-semibold text-zinc-900">ブログ一覧</div>
            <p className="text-sm text-zinc-500 mt-1">比較記事・解説記事の一覧ハブ</p>
          </Link>
        </div>
      </section>

      <div className="grid gap-6">
        <LinkList
          title="まず読みたい主要記事"
          description="直近のSearch Console実績と内部リンク強化の優先度を踏まえて、再クロールされたい重要記事をまとめました。"
          items={featuredArticles}
        />

        <LinkList
          title="基礎解説ガイド"
          description="SSLチェック・HTTPS・HSTS・CSP・SPF・DMARCなど、検索意図が明確な基礎解説記事です。"
          items={foundationalArticles}
        />

        <LinkList
          title="比較記事"
          description="業界ごとのセキュリティ比較記事を一覧でたどれます。"
          items={comparisonArticles}
        />

        <LinkList
          title="企業分析記事"
          description="企業ごとの診断記事をまとめた一覧です。"
          items={companyArticles}
        />
      </div>
    </main>
  );
}
