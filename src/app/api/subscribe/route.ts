import { NextResponse } from "next/server";
import { google } from "googleapis";

const SPREADSHEET_ID = "1PqEOZPWhe-9vc1Bk1KxfbZ0vN7UO4X7r26LOdjVMZpc";
const SHEET_NAME = "リード";

function getAuth() {
  // Vercel: use env var (JSON string)
  if (process.env.GCP_SERVICE_ACCOUNT_JSON) {
    const creds = JSON.parse(process.env.GCP_SERVICE_ACCOUNT_JSON);
    return new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  }
  // Local: use file
  return new google.auth.GoogleAuth({
    keyFile: ".gcp-service-account.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(req: Request) {
  try {
    const { email, url, score } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "メールアドレスが無効です" }, { status: 400 });
    }

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const now = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, url || "", score ?? "", now]],
      },
    });

    // Discord通知
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📩 **新規リード登録**\nメール: ${email}\n診断URL: ${url || "なし"}\nスコア: ${score ?? "不明"}\n日時: ${now}`,
        }),
      }).catch(() => {}); // 通知失敗は無視
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Subscribe error:", e);
    return NextResponse.json({ error: "登録に失敗しました" }, { status: 500 });
  }
}
