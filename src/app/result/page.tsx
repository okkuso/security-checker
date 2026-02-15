"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

interface Check {
  name: string;
  passed: boolean;
  score: number;
  maxScore: number;
  detail: string;
  risk: string;
  description: string;
}

interface Result {
  url: string;
  score: number;
  checks: Check[];
}

function scoreColor(score: number) {
  if (score >= 80) return "text-emerald-600";
  if (score >= 50) return "text-amber-500";
  return "text-red-500";
}

function scoreBorder(score: number) {
  if (score >= 80) return "border-emerald-200 bg-emerald-50";
  if (score >= 50) return "border-amber-200 bg-amber-50";
  return "border-red-200 bg-red-50";
}

function scoreLabel(score: number) {
  if (score >= 80) return { text: "良好", color: "text-emerald-600 bg-emerald-100" };
  if (score >= 50) return { text: "改善余地あり", color: "text-amber-600 bg-amber-100" };
  return { text: "要対策", color: "text-red-600 bg-red-100" };
}

function ResultContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url") || "";
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) { setError("URLが指定されていません"); setLoading(false); return; }

    fetch("/api/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "診断に失敗しました");
        setResult(data);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return (
      <div className="text-center py-32">
        <div className="inline-block w-10 h-10 border-4 border-zinc-200 border-t-zinc-900 rounded-full animate-spin mb-4" />
        <p className="text-zinc-500 text-lg">診断中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-32">
        <p className="text-red-500 text-lg mb-4">⚠️ {error}</p>
        <Link href="/" className="text-zinc-500 hover:underline">← トップに戻る</Link>
      </div>
    );
  }

  if (!result) return null;

  const label = scoreLabel(result.score);
  const failedChecks = result.checks.filter(c => !c.passed);
  const passedChecks = result.checks.filter(c => c.passed);
  const shareText = `${result.url} のセキュリティスコアは ${result.score}/100 でした`;

  return (
    <>
      {/* Score Card */}
      <div className={`text-center p-10 rounded-2xl border-2 mb-8 ${scoreBorder(result.score)}`}>
        <p className="text-zinc-500 mb-1 text-sm font-mono">{result.url}</p>
        <p className={`text-7xl font-bold font-mono mt-2 ${scoreColor(result.score)}`}>{result.score}</p>
        <p className="text-zinc-400 mt-1 text-sm">/ 100</p>
        <span className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${label.color}`}>
          {label.text}
        </span>
      </div>

      {/* Failed checks first */}
      {failedChecks.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-red-500 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-xs">✗</span>
            未対応（{failedChecks.length}項目）
          </h3>
          <div className="space-y-3">
            {failedChecks.map((c) => (
              <div key={c.name} className="bg-white border border-zinc-200 rounded-xl px-5 py-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-zinc-900">{c.name}</span>
                  <span className="font-mono text-sm text-red-400">{c.score} / {c.maxScore}</span>
                </div>
                <p className="text-zinc-500 text-sm mb-2">{c.description}</p>
                <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                  <p className="text-red-700 text-sm font-medium mb-1">⚠️ 未設定のリスク</p>
                  <p className="text-red-600/80 text-sm">{c.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Passed checks */}
      {passedChecks.length > 0 && (
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-emerald-600 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-xs">✓</span>
            対応済み（{passedChecks.length}項目）
          </h3>
          <div className="space-y-3">
            {passedChecks.map((c) => (
              <div key={c.name} className="bg-white border border-zinc-200 rounded-xl px-5 py-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-zinc-900">{c.name}</span>
                  <span className="font-mono text-sm text-emerald-500">{c.score} / {c.maxScore}</span>
                </div>
                <p className="text-zinc-500 text-sm mb-1">{c.description}</p>
                <p className="text-zinc-400 text-xs font-mono">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-zinc-900 text-white rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold mb-2">スコアを改善しませんか？</h3>
        <p className="text-zinc-400 text-sm mb-6">
          診断結果の詳細レポートと改善方法をメールでお届けします。
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 px-6 py-3 rounded-xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-colors text-center">
            📧 無料レポートを受け取る
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: "セキュリティ診断結果", text: shareText, url: window.location.href });
              } else {
                navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
                alert("クリップボードにコピーしました");
              }
            }}
            className="flex-1 px-6 py-3 rounded-xl border border-zinc-700 text-white font-bold hover:bg-zinc-800 transition-colors text-center"
          >
            🔗 この結果をシェアする
          </button>
        </div>
      </div>
    </>
  );
}

export default function ResultPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link href="/" className="text-zinc-400 hover:text-zinc-900 text-sm mb-8 inline-block transition-colors">← トップに戻る</Link>

      <Suspense fallback={
        <div className="text-center py-32">
          <div className="inline-block w-10 h-10 border-4 border-zinc-200 border-t-zinc-900 rounded-full animate-spin mb-4" />
          <p className="text-zinc-500 text-lg">読み込み中...</p>
        </div>
      }>
        <ResultContent />
      </Suspense>

      <footer className="text-center text-zinc-400 text-xs mt-8 border-t border-zinc-200 pt-6">
        本診断は公開情報に基づく設定状況の確認であり、安全性を保証・否定するものではありません。
      </footer>
    </main>
  );
}
