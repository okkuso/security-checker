import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "セキュリティ診断 - あなたのサイト、丸見えかも。",
  description: "URLを入力するだけでWebサイトのセキュリティ設定をスコアリング",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">
        <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-zinc-900">
              🔒 セキュリティ診断
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                診断する
              </Link>
              <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                ブログ
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
