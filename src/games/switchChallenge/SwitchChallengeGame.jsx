import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../utils/ThemeContext";

// ── Game logic (unchanged from original) ──────────────────────
const SHAPES_4 = ["⬤", "▲", "■", "+"];
const SHAPES_6 = ["⬤", "▲", "■", "+", "✖", "%"];

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function applySwitch(code, arr) {
  return code.split("").map((c) => arr[parseInt(c) - 1]);
}

function generateCodes(n, correctCode, difficulty) {
  const codes = new Set([correctCode]);
  while (codes.size < 4) {
    let arr = correctCode.split("");
    const a = Math.floor(Math.random() * arr.length);
    let b = Math.floor(Math.random() * arr.length);
    while (a === b) {
      b = Math.floor(Math.random() * arr.length);
    }
    [arr[a], arr[b]] = [arr[b], arr[a]];
    let temp = arr.join("");
    if (difficulty === "hard") {
      const c = Math.floor(Math.random() * arr.length);
      const d = Math.floor(Math.random() * arr.length);
      [arr[c], arr[d]] = [arr[d], arr[c]];
      temp = arr.join("");
    }
    if (temp !== correctCode) {
      codes.add(temp);
    }
  }
  return shuffleArray([...codes]);
}

// ── UI Component ───────────────────────────────────────────────
export default function SwitchChallengeGame({
  setPage }) {
  const { C } = useTheme();
  const [level, setLevel] = useState(1);
  const [difficulty, setDifficulty] = useState("easy");
  const [topRow, setTopRow] = useState([]);
  const [targetRow, setTargetRow] = useState([]);
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null); // "correct" | "wrong" | "timeout"

  useEffect(() => {
    autoSetDifficulty();
    startRound();
  }, [level]);

  useEffect(() => {
    if (time <= 0) {
      setFeedback("timeout");
      setTimeout(() => {
        setFeedback(null);
        setLevel((l) => l + 1);
        setTime(20);
      }, 1200);
      return;
    }
    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  function autoSetDifficulty() {
    if (level <= 3) setDifficulty("easy");
    else if (level <= 7) setDifficulty("medium");
    else setDifficulty("hard");
  }

  function startRound() {
    const shapes = level <= 5 ? SHAPES_4 : SHAPES_6;
    const n = shapes.length;
    let top = shuffleArray(shapes);
    let correctCode = shuffleArray([...Array(n).keys()].map((i) => i + 1)).join("");
    const target = applySwitch(correctCode, top);
    const opts = generateCodes(n, correctCode, difficulty);
    setTopRow(top);
    setTargetRow(target);
    setCorrect(correctCode);
    setOptions(opts);
    setSelected(null);
    setFeedback(null);
  }

  function nextRound() {
    setTimeout(() => {
      setLevel((l) => l + 1);
      setTime(20);
    }, 1100);
  }

  function handleClick(code) {
    if (selected) return;
    setSelected(code);
    if (code === correct) {
      setFeedback("correct");
      setScore((s) => s + 10);
      navigator.vibrate?.(100);
    } else {
      setFeedback("wrong");
      navigator.vibrate?.([120, 60, 120]);
    }
    nextRound();
  }

  function handleSkip() {
    setFeedback(null);
    setSelected(null);
    startRound();
    setTime(20);
  }

  function handleReset() {
    setLevel(1);
    setScore(0);
    setTime(20);
    setFeedback(null);
    setSelected(null);
  }

  // Timer ring
  const RADIUS = 28;
  const CIRCUM = 2 * Math.PI * RADIUS;
  const progress = (time / 20) * CIRCUM;
  const timerColor = time > 10 ? C.brand : time > 5 ? C.gold : C.coral;

  const diffBadge = {
    easy:   { bg: "#d1fae5", color: "#065f46", label: "EASY" },
    medium: { bg: "#fef3c7", color: "#92400e", label: "MEDIUM" },
    hard:   { bg: "#fee2e2", color: "#991b1b", label: "HARD" },
  }[difficulty];

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        fontFamily: "Geist, sans-serif",
        padding: "0 0 48px",
      }}
    >
      <style>{`
        .sc-topbar-pad { padding: 20px 32px !important; }
        .sc-body-pad { padding: 32px 28px !important; }
        .sc-opts-grid { grid-template-columns: 1fr 1fr !important; }
        .sc-result-grid { grid-template-columns: repeat(3, 1fr) !important; }
        .sc-mobile-back { display: none !important; }
        @media (max-width: 600px) {
          .sc-topbar-pad { padding: 12px 16px !important; }
          .sc-body-pad { padding: 14px 12px !important; }
          .sc-opts-grid { grid-template-columns: 1fr !important; }
          .sc-result-grid { grid-template-columns: 1fr 1fr !important; }
          .sc-top-title { font-size: 16px !important; }
          .sc-mobile-back { display: flex !important; }
        }
      `}</style>

      {/* ── Mobile sticky back bar ── */}
      <div className="sc-mobile-back" style={{
        position: "sticky", top: 56, zIndex: 90,
        background: C.bgCard, borderBottom: `1px solid ${C.border}`,
        padding: "10px 16px", alignItems: "center",
      }}>
        <button
          onClick={() => setPage && setPage("practice")}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "none", border: "none", cursor: "pointer",
            color: C.brand, fontFamily: "Geist,sans-serif",
            fontSize: 14, fontWeight: 700, padding: 0,
          }}
        >
          ← Back to Practice
        </button>
      </div>
      {/* ── Top bar ── */}
      <div
        className="sc-topbar-pad"
        style={{
          background: C.bgCard,
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          position: "sticky",
          top: 0,
          zIndex: 40,
          boxShadow: "0 1px 0 rgba(15,31,61,0.06)",
        }}
      >
        {/* Back */}
        <button
          onClick={() => setPage && setPage("practice")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: C.brand,
            fontSize: 13,
            fontWeight: 600,
            padding: 0,
            fontFamily: "Geist, sans-serif",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Practice
        </button>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#f5f3ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              color: C.purple,
            }}
          >
            🔀
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.navy, letterSpacing: "-0.02em" }}>
              Switch Challenge
            </div>
            <div style={{ fontSize: 11, color: C.textMut, fontWeight: 500 }}>
              Capgemini · Speed · {difficulty}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <StatChip icon="🏆" label={`Lv ${level}`} bg="#eff6ff" color={C.brand} />
          <StatChip icon="⭐" label={`${score} pts`} bg="#fffbeb" color="#92400e" />
          <div
            style={{
              padding: "5px 12px",
              borderRadius: 20,
              background: diffBadge.bg,
              color: diffBadge.color,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            {diffBadge.label}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "36px 20px 0" }}>

        {/* Instruction banner */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: C.bgCard,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "14px 20px",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#eff6ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              flexShrink: 0,
            }}
          >
            💡
          </div>
          <p style={{ margin: 0, fontSize: 13, color: C.textMid, lineHeight: 1.6, fontWeight: 500 }}>
            The <strong style={{ color: C.navy }}>top row</strong> shows your switch key (positions 1→n).
            Choose the <strong style={{ color: C.navy }}>code</strong> that rearranges the top row to match the
            <strong style={{ color: C.navy }}> target pattern</strong> below.
          </p>
        </motion.div>

        {/* Game card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: C.bgCard,
            border: `1px solid ${C.border}`,
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(15,31,61,0.08)",
          }}
        >
          {/* Accent bar */}
          <div style={{ height: 5, background: `linear-gradient(90deg, ${C.purple}, ${C.brand})` }} />

          <div className="sc-body-pad" style={{ padding: "32px 28px" }}>

            {/* Timer + Round header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 28,
              }}
            >
              <div>
                <div style={{ fontSize: 11, color: C.textMut, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
                  Round
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: C.navy, letterSpacing: "-0.03em" }}>
                  #{level}
                </div>
              </div>

              {/* Circular timer */}
              <div style={{ position: "relative", width: 70, height: 70 }}>
                <svg width="70" height="70" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="35" cy="35" r={RADIUS} stroke={C.bgMuted} strokeWidth="6" fill="transparent" />
                  <circle
                    cx="35" cy="35" r={RADIUS}
                    stroke={timerColor}
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={CIRCUM}
                    strokeDashoffset={CIRCUM - progress}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1s linear, stroke 0.3s" }}
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 800,
                    color: timerColor,
                    transition: "color 0.3s",
                  }}
                >
                  {time}
                </div>
              </div>
            </div>

            {/* Section label: Switch Key */}
            <SectionLabel text="SWITCH KEY" color={C.brand} />

            {/* Top row – switch key */}
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
              {topRow.map((shape, i) => (
                <motion.div
                  key={`top-${level}-${i}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: C.bgMuted,
                    border: `1px solid ${C.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    boxShadow: "0 2px 8px rgba(15,31,61,0.05)",
                    position: "relative",
                  }}
                >
                  <span style={{ fontSize: 24, lineHeight: 1 }}>{shape}</span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 5,
                      right: 8,
                      fontSize: 9,
                      fontWeight: 700,
                      color: C.textMut,
                      fontFamily: "Geist Mono, monospace",
                    }}
                  >
                    {i + 1}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Divider with arrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ flex: 1, height: 1, background: C.border }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  color: C.textMut,
                  letterSpacing: "0.06em",
                  background: C.bgMuted,
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: `1px solid ${C.border}`,
                }}
              >
                CHOOSE CODE ↓
              </div>
              <div style={{ flex: 1, height: 1, background: C.border }} />
            </div>

            {/* Options grid */}
            <div
              className="sc-opts-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 28,
              }}
            >
              {options.map((code, i) => {
                let bg = C.bgCard;
                let border = C.border;
                let color = C.navy;
                let shadow = "0 2px 8px rgba(15,31,61,0.06)";
                let scale = 1;

                if (selected) {
                  if (code === correct) {
                    bg = "#d1fae5"; border = "#6ee7b7"; color = "#065f46"; scale = 1.03;
                  } else if (code === selected) {
                    bg = "#fee2e2"; border = "#fca5a5"; color = "#991b1b"; scale = 1.03;
                  } else {
                    bg = C.bgMuted; border = C.border; color = C.textMut;
                  }
                }

                return (
                  <motion.button
                    key={`opt-${level}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, scale }}
                    transition={{ delay: i * 0.05 + 0.15, duration: 0.3 }}
                    whileHover={!selected ? { scale: 1.03, y: -2 } : {}}
                    whileTap={!selected ? { scale: 0.97 } : {}}
                    onClick={() => handleClick(code)}
                    disabled={!!selected}
                    style={{
                      background: bg,
                      border: `2px solid ${border}`,
                      borderRadius: 16,
                      padding: "18px 12px",
                      cursor: selected ? "default" : "pointer",
                      fontFamily: "Geist Mono, monospace",
                      fontSize: 20,
                      fontWeight: 800,
                      color,
                      letterSpacing: "0.12em",
                      boxShadow: shadow,
                      transition: "background 0.25s, border-color 0.25s, color 0.25s",
                      position: "relative",
                    }}
                  >
                    {code}
                    {selected && code === correct && (
                      <span style={{ position: "absolute", top: 8, right: 10, fontSize: 14 }}>✓</span>
                    )}
                    {selected && code === selected && code !== correct && (
                      <span style={{ position: "absolute", top: 8, right: 10, fontSize: 14 }}>✗</span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Section label: Target Pattern */}
            <SectionLabel text="TARGET PATTERN" color={C.coral} />

            {/* Target row */}
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
              {targetRow.map((shape, i) => (
                <motion.div
                  key={`tgt-${level}-${i}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)`,
                    border: `2px solid ${C.navyMid}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(15,31,61,0.18)",
                    color: "#fff",
                  }}
                >
                  <span style={{ fontSize: 24 }}>{shape}</span>
                </motion.div>
              ))}
            </div>

            {/* Footer actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 20,
                borderTop: `1px solid ${C.border}`,
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <button
                onClick={handleSkip}
                style={{
                  background: C.bgMuted,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "10px 20px",
                  fontFamily: "Geist, sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.textMid,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.border)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.bgMuted)}
              >
                ⏭ Skip round
              </button>

              <span style={{ fontSize: 12, color: C.textMut, fontWeight: 500 }}>
                Match top row to target using the code
              </span>

              <button
                onClick={handleReset}
                style={{
                  background: "#fff1f0",
                  border: `1px solid #fca5a5`,
                  borderRadius: 12,
                  padding: "10px 20px",
                  fontFamily: "Geist, sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.coral,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#ffe4e1")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff1f0")}
              >
                🔄 Reset
              </button>
            </div>
          </div>
        </motion.div>

        {/* Score card below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="sc-result-grid"
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {[
            { label: "Level", value: level, icon: "🏆", color: C.brand },
            { label: "Score", value: score, icon: "⭐", color: "#92400e" },
            { label: "Difficulty", value: diffBadge.label, icon: "⚡", color: difficulty === "easy" ? "#065f46" : difficulty === "medium" ? "#92400e" : "#991b1b" },
          ].map(({ label, value, icon, color }) => (
            <div
              key={label}
              style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: "14px 16px",
                textAlign: "center",
                boxShadow: "0 1px 4px rgba(15,31,61,0.04)",
              }}
            >
              <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color, letterSpacing: "-0.02em" }}>{value}</div>
              <div style={{ fontSize: 11, color: C.textMut, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Feedback overlay ── */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 100,
            }}
          >
            <div
              style={{
                background: C.bgCard,
                border: `2px solid ${
                  feedback === "correct" ? "#6ee7b7" : feedback === "timeout" ? C.gold : "#fca5a5"
                }`,
                borderRadius: 24,
                padding: "28px 40px",
                textAlign: "center",
                boxShadow: "0 16px 56px rgba(15,31,61,0.18)",
              }}
            >
              <div style={{ fontSize: 52, marginBottom: 8 }}>
                {feedback === "correct" ? "😄" : feedback === "timeout" ? "⏰" : "😢"}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: feedback === "correct" ? "#065f46" : feedback === "timeout" ? "#92400e" : "#991b1b",
                  fontFamily: "Geist, sans-serif",
                }}
              >
                {feedback === "correct"
                  ? "+10 points!"
                  : feedback === "timeout"
                  ? "Time's up!"
                  : "Not quite!"}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Small helpers ──────────────────────────────────────────────
function StatChip({ icon, label, bg, color }) {
  return (
    <div
      style={{
        padding: "5px 12px",
        borderRadius: 20,
        background: bg,
        color,
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 5,
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function SectionLabel({ text, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 14,
      }}
    >
      <div style={{ width: 3, height: 14, borderRadius: 2, background: color }} />
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color,
          textTransform: "uppercase",
          fontFamily: "Geist, sans-serif",
        }}
      >
        {text}
      </span>
    </div>
  );
}
