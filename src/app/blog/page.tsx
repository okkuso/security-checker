import Link from "next/link";
import Script from "next/script";
import { articles } from "@/content/articles";
import type { Metadata } from "next";

const BASE_URL = "https://www.security-check-site.net";

export const metadata: Metadata = {
  title: "セキュリティ比較・設定ガイド｜HTTPS・DMARC・企業比較記事一覧",
  description: "HTTPS、HSTS、CSP、SPF、DMARCの解説に加え、SaaS・通信・自動車など主要業界のセキュリティ比較記事を一覧で読めます。",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "セキュリティ比較・設定ガイド｜HTTPS・DMARC・企業比較記事一覧",
    description: "Webセキュリティの基礎解説と、主要業界のセキュリティ比較記事をまとめた一覧ページです。",
  },
};

const featuredSlugs = ["compare-saas", "compare-telecom", "compare-automobile"];

function getBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "ブログ", item: `${BASE_URL}/blog` },
    ],
  };
}

function getItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.slice(0, 20).map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_URL}/blog/${article.slug}`,
      name: article.title,
    })),
  };
}

export default function BlogPage() {
  const featuredArticles = featuredSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Script
        id="blog-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd()) }}
      />
      <Script
        id="blog-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListJsonLd()) }}
      />

      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
        <Link href="/" className="hover:text-zinc-600">トップ</Link>
        <span>/</span>
        <span className="text-zinc-600">ブログ</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-4">Knowledge Base</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">📚 セキュリティ比較・設定ガイド</h1>
        <p className="text-zinc-500 text-lg">HTTPSやDMARCの基礎知識から、主要業界のセキュリティ比較まで一覧で読めます。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">注目の比較記事</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block bg-zinc-50 border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white text-zinc-600 border border-zinc-200">
                  {article.category}
                </span>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-zinc-500 line-clamp-3">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block bg-white border border-zinc-200 rounded-xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                {article.category}
              </span>
              <span className="text-xs text-zinc-400">{article.publishedAt}</span>
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">{article.title}</h2>
            <p className="text-sm text-zinc-500 line-clamp-2">{article.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
