import { useEffect, useRef } from "react";

type Props = {
  score: number;
  total: number;
  onRestart: () => void;
};

export default function Result({ score, total, onRestart }: Props) {
  const pct = Math.round((score / total) * 100);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // focus restart button for keyboard users
    const btn = document.querySelector<HTMLButtonElement>(".result-btn");
    btn?.focus();
    // small entrance animation
    const el = containerRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      requestAnimationFrame(() => {
        el.style.transition = "opacity .6s ease, transform .6s cubic-bezier(.2,.9,.25,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }
  }, []);

  return (
    <div className="result-wrap" aria-live="polite" ref={containerRef}>
      <div className="quiz-sub">Keep Learning!</div>

      <div className="result-title">Your Final score is</div>

      <div className="result-pct">
        {pct}
        <span style={{ fontSize: 42, marginLeft: 6 }}>%</span>
      </div>

      <p style={{ color: "#385a63", marginBottom: 18 }}>
        You answered <strong>{score}</strong> out of <strong>{total}</strong> correctly.
      </p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button onClick={onRestart} className="result-btn btn-pressable" aria-label="Restart quiz">
          Start Again
        </button>
      </div>
    </div>
  );
}
