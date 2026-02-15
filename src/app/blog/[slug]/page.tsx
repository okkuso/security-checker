import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/content/articles";
import type { Metadata } from "next";

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
    title: `${article.title} - セキュリティ診断`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
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
    </main>
  );
}
