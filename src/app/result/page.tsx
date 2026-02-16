"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, Suspense } from "react";
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

const CHECK_LABELS = [
  "HTTPS接続を確認中...",
  "SSL証明書を検証中...",
  "HSTSヘッダーを確認中...",
  "CSPヘッダーを確認中...",
  "X-Content-Type-Optionsを確認中...",
  "X-Frame-Optionsを確認中...",
  "Referrer-Policyを確認中...",
  "Permissions-Policyを確認中...",
  "SPFレコードを照会中...",
  "DMARCレコードを照会中...",
];

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

function ScanAnimation({ onComplete, result }: { onComplete: () => void; result: Result | null }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const STEP_INTERVAL = 350; // ms per step
    const TOTAL_STEPS = CHECK_LABELS.length;

    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        const next = prev + 1;
        if (next >= TOTAL_STEPS) {
          clearInterval(stepTimer);
        }
        return Math.min(next, TOTAL_STEPS);
      });
    }, STEP_INTERVAL);

    // Smooth progress bar
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, (STEP_INTERVAL * TOTAL_STEPS) / 100);

    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
    };
  }, []);

  useEffect(() => {
    // Complete when both animation is done AND result is ready
    if (currentStep >= CHECK_LABELS.length && result && !completedRef.current) {
      completedRef.current = true;
      setTimeout(onComplete, 400);
    }
  }, [currentStep, result, onComplete]);

  return (
    <div className="py-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-4">
          <div className="w-8 h-8 border-3 border-zinc-300 border-t-zinc-900 rounded-full animate-spin" />
        </div>
        <h2 className="text-xl font-bold text-zinc-900 mb-1">セキュリティ診断中</h2>
        <p className="text-zinc-400 text-sm">10項目をチェックしています...</p>
      </div>

      {/* Progress bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex justify-between text-xs text-zinc-400 mb-2">
          <span>進捗</span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
        <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-zinc-900 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Check items */}
      <div className="max-w-md mx-auto space-y-2">
        {CHECK_LABELS.map((label, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <div
              key={label}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                done ? "opacity-100" : active ? "opacity-100 bg-zinc-50" : "opacity-30"
              }`}
            >
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                {done ? (
                  <span className="text-emerald-500 text-sm">✓</span>
                ) : active ? (
                  <div className="w-3.5 h-3.5 border-2 border-zinc-300 border-t-zinc-700 rounded-full animate-spin" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-zinc-200" />
                )}
              </span>
              <span className={`text-sm ${done ? "text-zinc-600" : active ? "text-zinc-900 font-medium" : "text-zinc-400"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CTASection({ url, score, shareText }: { url: string; score: number; shareText: string }) {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), url, score }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "送信に失敗しました");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-zinc-900 text-white rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold mb-2">スコアを改善しませんか？</h3>
        <p className="text-zinc-400 text-sm mb-6">
          診断結果の詳細レポートと改善方法をメールでお届けします。
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 px-6 py-3 rounded-xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-colors text-center"
          >
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

      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => !submitting && setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {submitted ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">登録ありがとうございます！</h3>
                <p className="text-zinc-500 text-sm mb-6">レポートの準備ができ次第、メールでお届けします。</p>
                <button onClick={() => setShowModal(false)} className="px-6 py-3 rounded-xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-colors">
                  閉じる
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">📧 無料レポートを受け取る</h3>
                <p className="text-zinc-500 text-sm mb-6">
                  診断結果の詳細と具体的な改善手順をまとめたレポートをお送りします。
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 mb-4"
                  />
                  {submitError && <p className="text-red-500 text-sm mb-3">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-3 rounded-xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-colors disabled:opacity-50"
                  >
                    {submitting ? "送信中..." : "レポートを受け取る"}
                  </button>
                </form>
                <p className="text-zinc-400 text-xs mt-4 text-center">
                  メールアドレスは診断レポートの送付のみに使用します。
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function ResultContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url") || "";
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    if (!url) { setError("URLが指定されていません"); setLoading(false); setScanning(false); return; }

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
      .catch((e) => { setError(e.message); setScanning(false); })
      .finally(() => setLoading(false));
  }, [url]);

  if (error) {
    return (
      <div className="text-center py-32">
        <p className="text-red-500 text-lg mb-4">⚠️ {error}</p>
        <Link href="/" className="text-zinc-500 hover:underline">← トップに戻る</Link>
      </div>
    );
  }

  if (scanning) {
    return <ScanAnimation result={result} onComplete={() => setScanning(false)} />;
  }

  if (loading || !result) return null;

  const label = scoreLabel(result.score);
  const failedChecks = result.checks.filter(c => !c.passed);
  const passedChecks = result.checks.filter(c => c.passed);
  const shareText = `${result.url} のセキュリティスコアは ${result.score}/100 でした`;

  return (
    <>
      {/* Score Card */}
      <div className={`text-center p-10 rounded-2xl border-2 mb-8 animate-fade-in ${scoreBorder(result.score)}`}>
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
      <CTASection url={result.url} score={result.score} shareText={shareText} />
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
