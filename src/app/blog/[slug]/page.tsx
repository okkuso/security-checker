import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/content/articles";
import type { Metadata } from "next";

const BASE_URL = "https://security-check-site.net"; // TODO: 本番ドメイン決定後に変更

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      tags: article.tags,
    },
  };
}

function getBreadcrumbJsonLd(article: { title: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "ブログ", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${BASE_URL}/blog/${article.slug}` },
    ],
  };
}

function getArticleJsonLd(article: { title: string; description: string; slug: string; publishedAt: string; tags: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    keywords: article.tags.join(", "),
    url: `${BASE_URL}/blog/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "セキュリティ診断チェッカー",
      url: BASE_URL,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  // 関連記事（同カテゴリ、自分以外、最大2件）
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  // 同カテゴリがない場合は他カテゴリから
  if (relatedArticles.length === 0) {
    relatedArticles.push(...articles.filter((a) => a.slug !== article.slug).slice(0, 2));
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd(article)) }}
      />
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(article)) }}
      />

      {/* パンくず */}
      <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
        <Link href="/" className="hover:text-zinc-600">トップ</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-zinc-600">ブログ</Link>
        <span>/</span>
        <span className="text-zinc-600 truncate">{article.title}</span>
      </nav>

      {/* メタ情報 */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
          {article.category}
        </span>
        <span className="text-xs text-zinc-400">{article.publishedAt}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-2">{article.title}</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {article.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded bg-zinc-50 text-zinc-500 border border-zinc-200">
            {tag}
          </span>
        ))}
      </div>

      {/* 本文 */}
      <article
        className="prose prose-zinc max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* 関連記事 */}
      {relatedArticles.length > 0 && (
        <section className="mt-12 pt-8 border-t border-zinc-200">
          <h2 className="text-lg font-bold text-zinc-900 mb-4">📖 関連記事</h2>
          <div className="space-y-3">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="block bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                    {a.category}
                  </span>
                </div>
                <h3 className="font-bold text-zinc-900">{a.title}</h3>
                <p className="text-sm text-zinc-500 line-clamp-1 mt-1">{a.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
