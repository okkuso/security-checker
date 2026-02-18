import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteName = "Webセキュリティ設定チェッカー";
const siteUrl = "https://security-check-site.net";
const siteDescription = "URLを入力するだけでWebサイトのセキュリティ設定をスコアリング。HTTPS・HSTS・CSP・SPF・DMARCなど10項目を無料チェック。日本企業50社のランキングも公開中。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - あなたのサイト、丸見えかも。`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: `${siteName} - あなたのサイト、丸見えかも。`,
    description: siteDescription,
    images: [{ url: `${siteUrl}/api/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - あなたのサイト、丸見えかも。`,
    description: siteDescription,
    images: [`${siteUrl}/api/og`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/result?url={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-zinc-900">
              🔒 {siteName}
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
