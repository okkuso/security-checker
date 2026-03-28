import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, type FaqItem } from "@/content/articles";
import type { Metadata } from "next";

const BASE_URL = "https://security-check-site.net";

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
      modifiedTime: article.updatedAt ?? article.publishedAt,
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

function getArticleJsonLd(article: { title: string; description: string; slug: string; publishedAt: string; updatedAt?: string; tags: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    inLanguage: "ja-JP",
    mainEntityOfPage: `${BASE_URL}/blog/${article.slug}`,
    keywords: article.tags.join(", "),
    url: `${BASE_URL}/blog/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "セキュリティ診断チェッカー",
      url: BASE_URL,
    },
  };
}

function getFaqJsonLd(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const prioritySlugs = ["compare-saas", "compare-telecom", "compare-automobile", "what-is-https"];
  const priorityArticles = prioritySlugs
    .filter((slug) => slug !== article.slug)
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const foundationalSlugs = ["what-is-https", "what-is-dmarc", "what-is-spf", "what-is-csp", "what-is-hsts"];
  const foundationalArticles = foundationalSlugs
    .filter((slug) => slug !== article.slug)
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .slice(0, 4);

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

      {article.faq && article.faq.length > 0 && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd(article.faq)) }}
        />
      )}

      {/* パンくず */}
      <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
        <Link href="/" className="hover:text-zinc-600">トップ</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-zinc-600">ブログ</Link>
        <span>/</span>
        <span className="text-zinc-600 truncate">{article.title}</span>
      </nav>

      {/* メタ情報 */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
          {article.category}
        </span>
        <span className="text-xs text-zinc-400">公開: {article.publishedAt}</span>
        {article.updatedAt && article.updatedAt !== article.publishedAt && (
          <span className="text-xs text-zinc-400">更新: {article.updatedAt}</span>
        )}
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

      <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold text-zinc-900">🗺️ 次に読むページ</h2>
            <p className="text-sm text-zinc-500 mt-1">
              比較記事ハブとHTMLサイトマップから、主要ページへたどりやすくしています。
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 transition-colors">
              ブログ一覧
            </Link>
            <Link href="/site-map" className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-bold text-white hover:bg-zinc-800 transition-colors">
              HTMLサイトマップ
            </Link>
          </div>
        </div>

        {priorityArticles.length > 0 && (
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">再発見を優先した主要記事</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {priorityArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="block rounded-xl border border-zinc-200 bg-white p-4 hover:border-zinc-300 hover:shadow-sm transition-all"
                >
                  <div className="text-xs text-zinc-400 mb-1">{a.category}</div>
                  <div className="font-semibold text-zinc-900 line-clamp-2">{a.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {foundationalArticles.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">基礎から読み直す</h3>
            <div className="flex flex-wrap gap-2">
              {foundationalArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-sm text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 transition-colors"
                >
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

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
