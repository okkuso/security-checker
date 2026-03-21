import type { Metadata } from "next";
import ResultClient from "./ResultClient";

const siteUrl = "https://security-check-site.net";
const siteName = "Webセキュリティ設定チェッカー";

function getRank(score: number) {
  if (score >= 90) return "A";
  if (score >= 70) return "B";
  if (score >= 50) return "C";
  if (score >= 30) return "D";
  return "F";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ url?: string; score?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const url = params.url || "";
  const score = params.score ? parseInt(params.score, 10) : null;

  if (!url || score === null || isNaN(score)) {
    return {
      title: `診断結果 | ${siteName}`,
      openGraph: {
        images: [`${siteUrl}/api/og`],
      },
    };
  }

  const rank = getRank(score);
  const ogUrl = `${siteUrl}/api/og?url=${encodeURIComponent(url)}&score=${score}&rank=${rank}`;
  const title = `${url} のセキュリティスコア: ${score}/100（ランク${rank}）`;

  return {
    title: `${title} | ${siteName}`,
    description: `${url} のWebセキュリティ設定チェック結果。スコア ${score}/100、ランク ${rank}。`,
    openGraph: {
      title,
      description: `セキュリティスコア ${score}/100（ランク${rank}）`,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogUrl],
    },
  };
}

export default function ResultPage() {
  return <ResultClient />;
}
