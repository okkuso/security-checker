import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteName = "Webセキュリティ設定チェッカー";
const siteUrl = "https://security-check-site.net";
const siteDescription = "URLを入力するだけでサイトのセキュリティ設定を無料診断。登録不要で HTTPS・SSL証明書・HSTS・CSP・SPF・DMARC など10項目をチェックできるWebセキュリティチェックサイトです。";
const defaultTitle = "サイトのセキュリティチェックを無料診断, SSL・HTTPS・DMARCを10項目確認 | Webセキュリティ設定チェッカー";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: siteDescription,
    images: [{ url: `${siteUrl}/api/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
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
              <Link href="/site-map" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                サイトマップ
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
