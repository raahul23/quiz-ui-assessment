import { useEffect, useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";
import Result from "./Result";

type Q = {
  id: string | number;
  text: string;
  options: string[];
  correctIndex?: number;
};

export default function Quiz() {
  const questions: Q[] = QUESTIONS as unknown as Q[];
  const total = questions.length;

  const [screen, setScreen] = useState<"start" | "quiz" | "result">("start");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<(number | null)[]>(
    Array(total).fill(null)
  );
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);

  // reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setFlag = () => setReducedMotion(mq.matches);
    setFlag();
    mq.addEventListener?.("change", setFlag);
    return () => mq.removeEventListener?.("change", setFlag);
  }, []);

  // announcer text for screen readers
  const announcerText = useMemo(() => {
    if (screen === "start") return "Ready to start the quiz.";
    if (screen === "quiz") {
      const q = questions[index];
      return `Question ${index + 1} of ${total}. ${q?.text ?? ""}`;
    }
    const pct = Math.round((score / total) * 100);
    return `Quiz finished. You scored ${pct} percent. ${score} out of ${total} correct.`;
  }, [screen, index, score, questions, total]);

  useEffect(() => {
    // reset on question count change
    setSelected(Array(total).fill(null));
    setIndex(0);
    setLocked(false);
    setScore(0);
    setScreen("start");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions.length]);

  function start() {
    setScreen("quiz");
    setIndex(0);
    setSelected(Array(total).fill(null));
    setLocked(false);
    setScore(0);
  }

  function handleAnswer(choiceIndex: number) {
    if (locked) return;
    const q = questions[index];
    const newSelected = [...selected];
    newSelected[index] = choiceIndex;
    setSelected(newSelected);
    setLocked(true);

    if (typeof q.correctIndex === "number" && choiceIndex === q.correctIndex) {
      setScore((s) => s + 1);
    }

    const delay = reducedMotion ? 0 : 650;
    if (delay === 0) {
      if (index + 1 < total) {
        setIndex(index + 1);
        setLocked(false);
      } else {
        setScreen("result");
      }
    } else {
      setTimeout(() => {
        if (index + 1 < total) {
          setIndex(index + 1);
          setLocked(false);
        } else {
          setScreen("result");
        }
      }, delay);
    }
  }

  function prev() {
    if (index === 0) return;
    setIndex((i) => i - 1);
    setLocked(false);
  }

  function next() {
    if (index + 1 < total) {
      setIndex((i) => i + 1);
      setLocked(false);
    } else {
      setScreen("result");
    }
  }

  function restart() {
    setScreen("start");
    setIndex(0);
    setSelected(Array(total).fill(null));
    setLocked(false);
    setScore(0);
  }

  function segmentWidthFor(i: number) {
    if (total <= 0) return 0;
    if (i < index) return 100;
    if (i === index) {
      const w = Math.round(((index + 1) / total) * 100);
      return w;
    }
    return 0;
  }

  // keyboard nav
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (screen !== "quiz") return;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      }
      if (/^[1-9]$/.test(e.key)) {
        const num = parseInt(e.key, 10);
        const q = questions[index];
        if (q && q.options && num >= 1 && num <= q.options.length) {
          handleAnswer(num - 1);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [screen, index, locked, questions]);

  /* ---------- START ---------- */
  if (screen === "start") {
    return (
      <section className="quiz-page" aria-labelledby="quiz-title">
        {/* screen reader announcer */}
        <div aria-live="polite" aria-atomic="true" style={{ position: "absolute", left: -9999 }}>
          {announcerText}
        </div>

        <div className="quiz-frame" role="region" aria-label="Quiz start">
          <h1 id="quiz-title" className="quiz-title">
            Test Your Knowledge
          </h1>

          <div className="quiz-sub">Answer all questions to see your results</div>

          {/* ====== NEW SEGMENT BAR JSX ====== */}
          <div className="stepbar" aria-hidden>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} className="step">
                <div className="fill" style={{ width: `${segmentWidthFor(i)}%` }} />
                <div
                  className="knob"
                  data-show={segmentWidthFor(i) > 6 ? 1 : 0}
                  style={{ left: `calc(${Math.max(2, Math.min(98, segmentWidthFor(i)))}% - 7px)` }}
                />
              </div>
            ))}
          </div>

          <div className="quiz-card" style={{ marginTop: 12 }}>
            <div className="quiz-question" style={{ textAlign: "center" }}>
              Ready? Click start when you're good to go.
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
              <button onClick={start} className="quiz-start-btn btn-pressable" aria-label="Start quiz" autoFocus>
                Start
              </button>
            </div>
          </div>

          <div className="quiz-nav" aria-hidden>
            <div className="nav-btn">←</div>
            <div className="nav-btn">→</div>
          </div>

          <div className="paw-speech">Best of Luck!</div>
          <img src="/assets/paw.png" alt="" className="paw-sticker" />
        </div>
      </section>
    );
  }

  /* ---------- QUIZ ---------- */
  if (screen === "quiz") {
    const q = questions[index];
    return (
      <section className="quiz-page" aria-labelledby="quiz-title">
        <div aria-live="polite" aria-atomic="true" style={{ position: "absolute", left: -9999 }}>
          {announcerText}
        </div>

        <div className="quiz-frame" role="region" aria-label="Quiz questions">
          <h1 className="quiz-title" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
            Test Your Knowledge
          </h1>

          <div className="quiz-sub">Answer all questions to see your results</div>

          {/* ====== NEW SEGMENT BAR JSX ====== */}
          <div className="stepbar" aria-hidden>
            {Array.from({ length: total }).map((_, i) => {
              const w = segmentWidthFor(i);
              const leftPct = Math.max(2, Math.min(98, w));
              return (
                <div key={i} className="step">
                  <div className="fill" style={{ width: `${w}%` }} />
                  <div className="knob" data-show={w > 6 ? 1 : 0} style={{ left: `calc(${leftPct}% - 7px)` }} />
                </div>
              );
            })}
          </div>

          <div className="quiz-card" style={{ marginTop: 14 }}>
            <div className="quiz-question">
              {index + 1}. {q.text}
            </div>

            <div className="options" role="list" aria-labelledby={`q-${q.id}`}>
              {q.options.map((opt, i) => {
                const isSel = selected[index] === i;
                return (
                  <button
                    key={i}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleAnswer(i)}
                    onKeyDown={(ev) => {
                      if (ev.key === "Enter" || ev.key === " ") {
                        ev.preventDefault();
                        handleAnswer(i);
                      }
                    }}
                    disabled={locked}
                    aria-pressed={isSel}
                    className={`option-btn btn-pressable ${isSel ? "selected" : ""}`}
                    aria-label={`Option ${i + 1}: ${opt}${isSel ? " selected" : ""}`}
                  >
                    <span className="option-index" aria-hidden>
                      {i + 1}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="quiz-nav" role="navigation" aria-label="Quiz navigation">
            <button
              className={`nav-btn ${index === 0 ? "is-disabled" : ""}`}
              onClick={prev}
              aria-label="Previous question"
              disabled={index === 0}
            >
              ←
            </button>

            <button className="nav-btn" onClick={next} aria-label={index + 1 < total ? "Next question" : "Finish quiz"}>
              →
            </button>
          </div>

          <div className="paw-speech">Best of Luck!</div>
          <img src="/assets/paw.png" alt="" className="paw-sticker" />
        </div>
      </section>
    );
  }

  /* ---------- RESULT ---------- */
  return <Result score={score} total={total} onRestart={restart} />;
}
