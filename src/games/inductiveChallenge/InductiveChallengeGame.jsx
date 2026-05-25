import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import { useTheme } from "../../utils/ThemeContext";

// ── Shapes & helpers ───────────────────────────────────────────
const shapes = ["●", "▲", "■", "◆", "★"];
const randomShape = () => shapes[Math.floor(Math.random() * shapes.length)];

// ── Pattern definitions (logic unchanged) ─────────────────────
const patterns = [
  {
    name: "Corners Same",
    desc: "All four corner cells share the same shape.",
    generate: () => {
      const shape = randomShape();
      const center = randomShape();
      const grid = [
        [shape, randomShape(), shape],
        [randomShape(), center, randomShape()],
        [shape, randomShape(), shape],
      ];
      return { grid, highlight: [[0,0],[0,2],[2,0],[2,2]] };
    },
  },
  {
    name: "Diagonal Same",
    desc: "Shapes along the main diagonal are identical.",
    generate: () => {
      const shape = randomShape();
      const grid = [
        [shape, randomShape(), randomShape()],
        [randomShape(), shape, randomShape()],
        [randomShape(), randomShape(), shape],
      ];
      return { grid, highlight: [[0,0],[1,1],[2,2]] };
    },
  },
  {
    name: "Mirror Symmetry",
    desc: "Left and right columns mirror each other.",
    generate: () => {
      const left = [randomShape(), randomShape(), randomShape()];
      const grid = [
        [left[0], randomShape(), left[0]],
        [left[1], randomShape(), left[1]],
        [left[2], randomShape(), left[2]],
      ];
      return { grid, highlight: [[0,0],[0,2],[1,0],[1,2],[2,0],[2,2]] };
    },
  },
];

// ── Question generator ────────────────────────────────────────
function generateQuestion() {
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  const base1 = pattern.generate();
  const base2 = pattern.generate();
  const correct1 = pattern.generate().grid;
  const correct2 = pattern.generate().grid;
  const wrong = () =>
    Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => randomShape())
    );
  const options = [correct1, wrong(), correct2, wrong()];
  return {
    pattern: pattern.name,
    desc: pattern.desc,
    base: [base1.grid, base2.grid],
    options,
    answer: [0, 2],
    highlight: base1.highlight,
  };
}

// ── Circular Timer ────────────────────────────────────────────
function CircularTimer({ time, maxTime = 60 }) {
  const { C } = useTheme();
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - time / maxTime);
  const color =
    time > maxTime * 0.5 ? C.success : time > maxTime * 0.25 ? C.gold : "#ef4444";

  return (
    <div style={{ position: "relative", width: 72, height: 72 }}>
      <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="36" cy="36" r={radius} fill="none" stroke={C.bgMuted} strokeWidth="5" />
        <circle
          cx="36" cy="36" r={radius} fill="none"
          stroke={color} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.4s" }}
        />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 17, fontWeight: 700, color, lineHeight: 1 }}>{time}</span>
        <span style={{ fontFamily: "Geist,sans-serif", fontSize: 9, color: C.textMut, fontWeight: 700, letterSpacing: "0.05em", marginTop: 1 }}>SEC</span>
      </div>
    </div>
  );
}

// ── Shape Grid renderer ───────────────────────────────────────
function ShapeGrid({ grid, highlight = [], size = 56, revealed = false }) {
  const { C } = useTheme();
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(3, ${size}px)`, gap: 5 }}>
      {grid.map((row, i) =>
        row.map((cell, j) => {
          const isH = highlight.some((h) => h[0] === i && h[1] === j);
          return (
            <div
              key={`${i}-${j}`}
              style={{
                width: size,
                height: size,
                background: isH && revealed ? C.gold + "40" : C.bgMuted,
                border: `1.5px solid ${isH && revealed ? C.gold : C.border}`,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: size * 0.42,
                color: isH && revealed ? C.navy : C.textMid,
                transition: "all 0.3s",
                fontWeight: 700,
              }}
            >
              {cell}
            </div>
          );
        })
      )}
    </div>
  );
}

// ── ThemedButton ──────────────────────────────────────────────
function ThemedButton({ children, onClick, variant = "ghost", disabled = false, style = {} }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);

  const variants = {
    primary: {
      background: disabled ? C.bgMuted : hov ? "#1d4ed8" : C.brand,
      color: disabled ? C.textMut : "#fff",
      border: "none",
      boxShadow: hov && !disabled ? `0 6px 20px ${C.brand}40` : "none",
    },
    coral: {
      background: hov ? "#d94e22" : C.coral,
      color: "#fff",
      border: "none",
      boxShadow: hov ? `0 6px 20px ${C.coral}40` : "none",
    },
    ghost: {
      background: hov ? C.bgMuted : "transparent",
      color: hov ? C.navy : C.textMid,
      border: `1px solid ${C.border}`,
      boxShadow: "none",
    },
    success: {
      background: hov ? "#059669" : C.success,
      color: "#fff",
      border: "none",
      boxShadow: hov ? `0 6px 20px ${C.success}40` : "none",
    },
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
        padding: "9px 20px", borderRadius: 12,
        fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600,
        letterSpacing: "-0.01em", cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
        transform: hov && !disabled ? "translateY(-1px)" : "none",
        opacity: disabled ? 0.5 : 1,
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}

// ── Score badge ───────────────────────────────────────────────
function ScoreBadge({ label, value, color }) {
  const { C } = useTheme();
  const finalColor = color || C.brand;
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      background: finalColor + "10", border: `1px solid ${finalColor}25`,
      borderRadius: 14, padding: "10px 20px", minWidth: 72,
    }}>
      <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 22, fontWeight: 700, color: finalColor, lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 600, color: C.textMut, letterSpacing: "0.06em", marginTop: 3 }}>{label}</span>
    </div>
  );
}

// ── Main Game ─────────────────────────────────────────────────
export default function InductiveChallengeGame({
  setPage }) {
  const { C } = useTheme();
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState([]);
  const [time, setTime] = useState(60);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState(null); // "correct" | "wrong" | null
  const [totalCorrect, setTotalCorrect] = useState(0);

  const MAX_ROUNDS = 8;

  // Init first question
  useEffect(() => {
    setQuestion(generateQuestion());
  }, []);

  // Timer
  useEffect(() => {
    if (locked || !question) return;
    if (time === 0) { submitAnswer(); return; }
    const t = setInterval(() => setTime((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [time, locked, question]);

  const nextQuestion = () => {
    if (round >= MAX_ROUNDS) return;
    setQuestion(generateQuestion());
    setSelected([]);
    setTime(60);
    setLocked(false);
    setFeedback(null);
    setRound((r) => r + 1);
  };

  const submitAnswer = () => {
    if (locked) return;
    setLocked(true);

    const correct = question.answer;
    const isCorrect =
      selected.length === 2 &&
      correct.every((a) => selected.includes(a)) &&
      selected.every((s) => correct.includes(s));

    if (isCorrect) {
      const bonus = Math.ceil(time / 10);
      setScore((s) => s + 10 + bonus);
      setStreak((s) => s + 1);
      setTotalCorrect((c) => c + 1);
      setFeedback("correct");
    } else {
      setStreak(0);
      setFeedback("wrong");
    }

    if (round < MAX_ROUNDS) {
      setTimeout(nextQuestion, 2800);
    }
  };

  const handleSelect = (i) => {
    if (locked) return;
    if (selected.includes(i)) {
      setSelected(selected.filter((x) => x !== i));
    } else if (selected.length < 2) {
      setSelected([...selected, i]);
    }
  };

  if (!question) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "Geist,sans-serif", color: C.textMut }}>Loading…</span>
      </div>
    );
  }

  // Game over screen
  const isGameOver = locked && round >= MAX_ROUNDS;

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .ic-header-pad { padding: 0 32px !important; }
        .ic-body-pad { padding: 32px 32px 48px !important; }
        .ic-card-pad { padding: 28px 32px !important; }
        .ic-opts-grid { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)) !important; }
        @media (max-width: 600px) {
          .ic-header-pad { padding: 0 12px !important; }
          .ic-body-pad { padding: 12px 10px 48px !important; }
          .ic-card-pad { padding: 14px !important; }
          .ic-opts-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .ic-hbar-title { font-size: 12px !important; }
          .ic-round-h2 { font-size: 18px !important; }
        }
      `}</style>

      {/* ── Header bar ── */}
      <div className="ic-header-pad" style={{ background: C.navy, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => setPage("practice")}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.6)", fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, padding: 0 }}
            >
              ← Back
            </button>
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 18 }}>💡</span>
              <div>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1 }}>Inductive Challenge</p>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 2, letterSpacing: "0.05em" }}>CAPGEMINI EXCLUSIVE</p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ScoreBadge label="SCORE" value={score} color={C.gold} />
              <ScoreBadge label="ROUND" value={`${round}/${MAX_ROUNDS}`} color={C.brand} />
              {streak >= 2 && (
                <ScoreBadge label="STREAK" value={`${streak}🔥`} color={C.coral} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div style={{ height: 3, background: C.border }}>
        <motion.div
          style={{ height: "100%", background: `linear-gradient(90deg, ${C.brand}, ${C.coral})`, borderRadius: 999 }}
          animate={{ width: `${((round - 1) / MAX_ROUNDS) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="ic-body-pad" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Game Over */}
        <AnimatePresence>
          {isGameOver && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 28,
                padding: "clamp(28px,4vw,56px) clamp(16px,4vw,40px)", textAlign: "center", marginBottom: 32,
                boxShadow: "0 8px 40px rgba(15,31,61,0.10)",
              }}
            >
              <div style={{ fontSize: 56, marginBottom: 16 }}>
                {totalCorrect >= 6 ? "🏆" : totalCorrect >= 4 ? "🎯" : "💡"}
              </div>
              <h2 style={{ fontFamily: "Instrument Serif,serif", fontSize: 42, fontWeight: 400, color: C.navy, marginBottom: 8, letterSpacing: "-0.02em" }}>
                Game Complete!
              </h2>
              <p style={{ fontFamily: "Geist,sans-serif", color: C.textMid, fontSize: 16, marginBottom: 32 }}>
                You got <strong>{totalCorrect}</strong> out of <strong>{MAX_ROUNDS}</strong> correct — final score: <strong style={{ color: C.gold }}>{score}</strong>
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                <ThemedButton variant="primary" onClick={() => {
                  setRound(1); setScore(0); setStreak(0); setTotalCorrect(0);
                  setQuestion(generateQuestion()); setSelected([]); setTime(60); setLocked(false); setFeedback(null);
                }}>
                  Play Again
                </ThemedButton>
                <ThemedButton variant="ghost" onClick={() => setPage("practice")}>
                  Back to Practice
                </ThemedButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isGameOver && (
          <>
            {/* ── Question header ── */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 20 }}>
              <div>
                <SectionHeader>Round {round} of {MAX_ROUNDS}</SectionHeader>
                <h1 style={{ fontFamily: "Instrument Serif,serif", fontSize: 36, fontWeight: 400, color: C.navy, letterSpacing: "-0.02em", marginBottom: 8, lineHeight: 1.1 }}>
                  Identify the pattern
                </h1>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 15, color: C.textMid }}>
                  Study the two example grids, then select the <strong>2 options</strong> that follow the same rule.
                </p>
              </div>
              <CircularTimer time={time} maxTime={60} />
            </div>

            {/* ── Feedback banner ── */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  key={feedback}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: feedback === "correct" ? C.success + "14" : "#ef444414",
                    border: `1px solid ${feedback === "correct" ? C.success + "40" : "#ef444440"}`,
                    borderRadius: 14, padding: "14px 20px", marginBottom: 24,
                    display: "flex", alignItems: "center", gap: 12,
                  }}
                >
                  <span style={{ fontSize: 22 }}>{feedback === "correct" ? "✅" : "❌"}</span>
                  <div>
                    <p style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 14, color: feedback === "correct" ? C.success : "#ef4444" }}>
                      {feedback === "correct" ? `Correct! +${10 + Math.ceil(time / 10)} points` : "Not quite — the highlighted options follow the rule."}
                    </p>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMid, marginTop: 2 }}>
                      Pattern: <strong>{question.pattern}</strong> — {question.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Example grids ── */}
            <div className="ic-card-pad" style={{
              background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 20,
              padding: "28px 32px", marginBottom: 28,
              boxShadow: "0 2px 12px rgba(15,31,61,0.05)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: C.brand + "14", color: C.brand,
                  fontSize: 10, fontWeight: 700, fontFamily: "Geist,sans-serif",
                  letterSpacing: "0.07em", padding: "4px 12px", borderRadius: 999,
                  border: `1px solid ${C.brand}25`,
                }}>
                  EXAMPLE PATTERNS
                </div>
                <div style={{ flex: 1, height: 1, background: C.border }} />
              </div>

              <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
                {question.base.map((grid, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color: C.textMut, letterSpacing: "0.07em" }}>
                      EXAMPLE {i + 1}
                    </span>
                    <ShapeGrid grid={grid} highlight={question.highlight} size={58} revealed={locked} />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Options ── */}
            <div className="ic-card-pad" style={{
              background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 20,
              padding: "28px 32px", marginBottom: 28,
              boxShadow: "0 2px 12px rgba(15,31,61,0.05)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: C.coral + "14", color: C.coral,
                  fontSize: 10, fontWeight: 700, fontFamily: "Geist,sans-serif",
                  letterSpacing: "0.07em", padding: "4px 12px", borderRadius: 999,
                  border: `1px solid ${C.coral}25`,
                }}>
                  SELECT 2 MATCHING GRIDS
                </div>
                <div style={{ flex: 1, height: 1, background: C.border }} />
                <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut }}>
                  {selected.length}/2 selected
                </span>
              </div>

              <div className="ic-opts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(180px,100%), 1fr))", gap: 16 }}>
                {question.options.map((opt, i) => {
                  const isCorrect = question.answer.includes(i);
                  const isSelected = selected.includes(i);
                  const isWrong = locked && isSelected && !isCorrect;
                  const isRevealedCorrect = locked && isCorrect;

                  let borderColor = C.border;
                  let bgColor = C.bgCard;
                  let shadow = "none";
                  if (isRevealedCorrect) { borderColor = C.success; bgColor = C.success + "0e"; shadow = `0 4px 16px ${C.success}25`; }
                  else if (isWrong) { borderColor = "#ef4444"; bgColor = "#ef444408"; }
                  else if (isSelected) { borderColor = C.brand; bgColor = C.brand + "08"; shadow = `0 4px 16px ${C.brand}20`; }

                  return (
                    <motion.div
                      key={i}
                      whileHover={!locked ? { y: -3 } : {}}
                      onClick={() => handleSelect(i)}
                      style={{
                        border: `2px solid ${borderColor}`,
                        borderRadius: 16, padding: "18px",
                        background: bgColor,
                        cursor: locked ? "default" : "pointer",
                        boxShadow: shadow,
                        transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                        position: "relative",
                      }}
                    >
                      {/* Selection indicator */}
                      <div style={{
                        position: "absolute", top: 10, right: 10,
                        width: 22, height: 22, borderRadius: "50%",
                        background: isRevealedCorrect ? C.success : isWrong ? "#ef4444" : isSelected ? C.brand : C.bgMuted,
                        border: `2px solid ${isRevealedCorrect ? C.success : isWrong ? "#ef4444" : isSelected ? C.brand : C.border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 11, color: "#fff", fontWeight: 700,
                        transition: "all 0.2s",
                      }}>
                        {isRevealedCorrect ? "✓" : isWrong ? "✗" : isSelected ? "✓" : ""}
                      </div>

                      <ShapeGrid grid={opt} size={50} />

                      <span style={{
                        fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: isRevealedCorrect ? C.success : isWrong ? "#ef4444" : isSelected ? C.brand : C.textMut,
                      }}>
                        OPTION {String.fromCharCode(65 + i)}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── Action buttons ── */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <ThemedButton variant="ghost" onClick={nextQuestion} disabled={locked}>
                  Skip →
                </ThemedButton>
              </div>
              <ThemedButton
                variant="coral"
                onClick={submitAnswer}
                disabled={selected.length < 2 || locked}
                style={{ minWidth: 140 }}
              >
                {locked ? "Loading next…" : "Submit Answer"}
              </ThemedButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
