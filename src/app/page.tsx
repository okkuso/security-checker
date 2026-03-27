"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
      {/* Hero */}
      <section className="text-center mb-20">
        <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-4">Web Security Settings Check</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900">
          あなたのサイト、<br />
          <span className="text-red-500">丸見え</span>かも。
        </h1>
        <p className="text-zinc-500 text-lg mb-10 max-w-lg mx-auto">
          URLを入力するだけで、公開情報からセキュリティ設定をスコアリング。設定漏れを見逃していませんか？
        </p>

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
