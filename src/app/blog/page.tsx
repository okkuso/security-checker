import Link from "next/link";
import { articles } from "@/content/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "セキュリティ設定の知識ベース｜HTTPS・HSTS・CSP・SPF・DMARC解説",
  description: "HTTPS、HSTS、CSP、SPF、DMARCなどWebセキュリティ設定の基礎知識を非エンジニアにもわかりやすく解説。セキュリティ対策の第一歩に。",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "セキュリティ知識ベース｜HTTPS・HSTS・CSP・SPF・DMARC解説",
    description: "Webセキュリティの基礎知識を非エンジニアにもわかりやすく解説します。",
  },
};

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
        <Link href="/" className="hover:text-zinc-600">トップ</Link>
        <span>/</span>
        <span className="text-zinc-600">ブログ</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-4">Knowledge Base</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">📚 セキュリティ知識ベース</h1>
        <p className="text-zinc-500 text-lg">Webセキュリティの基礎をわかりやすく解説します。</p>
      </div>

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
