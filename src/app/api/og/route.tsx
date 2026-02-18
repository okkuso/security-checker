import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

function getRankInfo(score: number) {
  if (score >= 90) return { rank: "A", color: "#059669", bg: "#d1fae5" };
  if (score >= 70) return { rank: "B", color: "#0d9488", bg: "#ccfbf1" };
  if (score >= 50) return { rank: "C", color: "#d97706", bg: "#fef3c7" };
  if (score >= 30) return { rank: "D", color: "#ea580c", bg: "#ffedd5" };
  return { rank: "F", color: "#dc2626", bg: "#fee2e2" };
}

async function loadFont() {
  const res = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap"
  );
  const css = await res.text();
  const match = css.match(/src: url\((.+?)\) format\('woff2'\)/);
  if (!match) throw new Error("Font URL not found");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const url = searchParams.get("url") || "";
  const scoreParam = searchParams.get("score");
  const score = scoreParam !== null ? parseInt(scoreParam, 10) : null;

  let fontData: ArrayBuffer;
  try {
    fontData = await loadFont();
  } catch {
    // Fallback: try a direct weight URL
    const res = await fetch(
      "https://fonts.gstatic.com/s/notosansjp/v53/2sDfZJpc9IFnQ2yzUxc0DBRiJlqwHiGBp801.woff2"
    );
    fontData = await res.arrayBuffer();
  }

  // Default OGP (no score)
  if (score === null || isNaN(score)) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #18181b 0%, #27272a 100%)",
            fontFamily: '"Noto Sans JP"',
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "16px", display: "flex" }}>🔒</div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "20px",
              display: "flex",
            }}
          >
            Webセキュリティ設定チェッカー
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              display: "flex",
            }}
          >
            あなたのサイト、丸見えかも。
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#71717a",
              marginTop: "32px",
              display: "flex",
            }}
          >
            security-check-site.net
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [{ name: "Noto Sans JP", data: fontData, style: "normal", weight: 700 }],
      }
    );
  }

  const { rank, color, bg } = getRankInfo(score);
  const displayUrl = url.length > 40 ? url.slice(0, 40) + "..." : url;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
          fontFamily: '"Noto Sans JP"',
          padding: "60px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontSize: "28px", marginRight: "12px", display: "flex" }}>🔒</span>
          <span style={{ fontSize: "24px", fontWeight: 700, color: "#18181b", display: "flex" }}>
            Webセキュリティ設定チェッカー
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: URL and info */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: "18px", color: "#71717a", marginBottom: "8px", display: "flex" }}>
              診断結果
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#27272a",
                marginBottom: "32px",
                display: "flex",
                wordBreak: "break-all",
              }}
            >
              {displayUrl}
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "#a1a1aa",
                display: "flex",
              }}
            >
              security-check-site.net で無料診断
            </div>
          </div>

          {/* Right: Score circle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "60px",
            }}
          >
            <div
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "120px",
                background: bg,
                border: `6px solid ${color}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "80px", fontWeight: 900, color, display: "flex", lineHeight: 1 }}>
                {score}
              </div>
              <div style={{ fontSize: "20px", color: "#71717a", display: "flex" }}>/100</div>
            </div>
            <div
              style={{
                marginTop: "16px",
                padding: "8px 32px",
                borderRadius: "9999px",
                background: bg,
                fontSize: "32px",
                fontWeight: 900,
                color,
                display: "flex",
              }}
            >
              ランク {rank}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Noto Sans JP", data: fontData, style: "normal", weight: 700 }],
    }
  );
}
