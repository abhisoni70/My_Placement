import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import { useTheme } from "../../utils/ThemeContext";

// ── Symbols used in the grid ───────────────────────────────────
const symbols = ["●", "▲", "■", "+", "★"];

// ── Game logic (unchanged) ─────────────────────────────────────
function generateSolution(size) {
  let grid = Array.from({ length: size }, () => Array(size).fill(null));

  function isSafe(r, c, val) {
    for (let i = 0; i < size; i++) {
      if (grid[r][i] === val || grid[i][c] === val) return false;
    }
    return true;
  }

  function fill(r = 0, c = 0) {
    if (r === size) return true;
    let nextR = c === size - 1 ? r + 1 : r;
    let nextC = c === size - 1 ? 0 : c + 1;
    let shuffled = [...symbols.slice(0, size)].sort(() => Math.random() - 0.5);
    for (let val of shuffled) {
      if (isSafe(r, c, val)) {
        grid[r][c] = val;
        if (fill(nextR, nextC)) return true;
        grid[r][c] = null;
      }
    }
    return false;
  }

  fill();
  return grid;
}

function createPuzzle(solution, difficulty) {
  let size = solution.length;
  let puzzle = solution.map((row) => [...row]);

  const removeCountMap = {
    3: { easy: 2, medium: 3, hard: 4 },
    4: { easy: 4, medium: 6, hard: 7 },
    5: { easy: 6, medium: 8, hard: 10 },
  };

  let removeCount = removeCountMap[size]?.[difficulty] ?? 3;

  let removed = 0;
  while (removed < removeCount) {
    let r = Math.floor(Math.random() * size);
    let c = Math.floor(Math.random() * size);
    if (puzzle[r][c] !== null) {
      puzzle[r][c] = null;
      removed++;
    }
  }

  let qr = Math.floor(Math.random() * size);
  let qc = Math.floor(Math.random() * size);
  puzzle[qr][qc] = "?";

  return { puzzle, answer: solution[qr][qc] };
}

// ── Circular Timer ─────────────────────────────────────────────
function CircularTimer({ time, maxTime = 60 }) {
  const { C } = useTheme();
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = time / maxTime;
  const strokeDashoffset = circumference * (1 - progress);

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
        <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 17, fontWeight: 700, color, lineHeight: 1, transition: "color 0.4s" }}>
          {time}
        </span>
        <span style={{ fontFamily: "Geist,sans-serif", fontSize: 9, color: C.textMut, fontWeight: 700, letterSpacing: "0.05em", marginTop: 1 }}>
          SEC
        </span>
      </div>
    </div>
  );
}

// ── Stat Pill ──────────────────────────────────────────────────
function StatPill({ label, value, color, icon }) {
  const { C } = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "12px 22px", background: C.bgCard, borderRadius: 16, border: `1.5px solid ${C.border}`, minWidth: 80, boxShadow: "0 2px 8px rgba(15,31,61,0.05)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
        <span style={{ fontFamily: "Geist,sans-serif", fontSize: 22, fontWeight: 700, color: color || C.navy, letterSpacing: "-0.04em" }}>
          {value}
        </span>
      </div>
      <span style={{ fontFamily: "Geist,sans-serif", fontSize: 10, color: C.textMut, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

// ── Symbol Option Button ───────────────────────────────────────
function SymbolButton({ sym, selected, disabled, result, answer, onClick }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);
  const isSelected = selected === sym;
  const isAnswer = sym === answer && result;
  const isWrong = selected === sym && result === "wrong";

  let bg = C.bgMuted;
  let borderColor = C.border;
  let color = C.navy;
  let shadow = "none";
  let scale = 1;

  if (isAnswer) {
    bg = `${C.success}18`; borderColor = C.success; color = C.success;
    shadow = `0 0 0 3px ${C.success}25`; scale = 1.08;
  } else if (isWrong) {
    bg = "#ef444415"; borderColor = "#ef4444"; color = "#ef4444";
    shadow = `0 0 0 3px #ef444425`; scale = 1.02;
  } else if (isSelected) {
    bg = `${C.brand}12`; borderColor = C.brand; color = C.brand;
    shadow = `0 0 0 3px ${C.brand}20`; scale = 1.06;
  } else if (hov && !disabled) {
    bg = C.bgCard; borderColor = C.borderDark;
    shadow = "0 4px 12px rgba(15,31,61,0.10)"; scale = 1.04;
  }

  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.9 } : {}}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 58, height: 58, borderRadius: 16, fontSize: 24, fontWeight: 700,
        cursor: disabled ? "default" : "pointer",
        border: `2px solid ${borderColor}`, background: bg, color, boxShadow: shadow,
        transform: `scale(${scale})`,
        transition: "all 0.2s cubic-bezier(0.22,1,0.36,1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        outline: "none", position: "relative",
      }}
    >
      {sym}
      {isAnswer && (
        <span style={{ position: "absolute", top: -6, right: -6, fontSize: 11, background: C.success, color: "#fff", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
          ✓
        </span>
      )}
    </motion.button>
  );
}

// ── Main game component ────────────────────────────────────────
export default function DeductiveGridGame({
  setPage }) {
  const { C } = useTheme();
  const [size, setSize] = useState(() => [3, 4, 5][Math.floor(Math.random() * 3)]);
  const [difficulty, setDifficulty] = useState("medium");
  const [grid, setGrid] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [shake, setShake] = useState(false);
  const [submitHov, setSubmitHov] = useState(false);
  const [skipHov, setSkipHov] = useState(false);

  function generateGame(customSize = size, customDiff = difficulty) {
    if (typeof customSize !== "number") customSize = size;
    if (typeof customDiff !== "string") customDiff = difficulty;
    let sol = generateSolution(customSize);
    let { puzzle, answer: ans } = createPuzzle(sol, customDiff);
    setGrid(puzzle);
    setAnswer(ans);
    setSelected(null);
    setResult(null);
    setTime(60);
    setShake(false);
  }

  useEffect(() => { generateGame(size, difficulty); }, [size, difficulty]);

  useEffect(() => {
    if (result || time <= 0) return;
    const timer = setTimeout(() => setTime((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, result]);

  useEffect(() => {
    if (time === 0 && !result) {
      setResult("wrong");
      setStreak(0);
    }
  }, [time]);

  function handleSubmit() {
    if (!selected || result) return;
    const isCorrect = selected === answer;
    setResult(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }

  const diffOptions = ["easy", "medium", "hard"];
  const diffColors = { easy: C.success, medium: C.gold, hard: "#ef4444" };
  const diffBg = { easy: `${C.success}15`, medium: `${C.gold}15`, hard: "#ef444415" };
  const sizeOptions = [3, 4, 5];

  const canSubmit = !!selected && !result;

  return (
    <div style={{ background: C.bg, minHeight: "100vh", padding: "0 0 80px" }}>
      <style>{`
        .dg-header-pad { padding: 32px 32px 28px !important; }
        .dg-body-pad { padding: 40px 32px !important; }
        .dg-grid-max { max-width: 860px !important; }
        .dg-inner-pad { padding: 32px 36px 40px !important; }
        .dg-mobile-back { display: none !important; }
        @media (max-width: 600px) {
          .dg-header-pad { padding: 20px 16px 16px !important; }
          .dg-body-pad { padding: 16px 12px !important; }
          .dg-inner-pad { padding: 16px 14px 20px !important; }
          .dg-h1 { font-size: 22px !important; }
          .dg-stats-row { flex-wrap: wrap !important; gap: 8px !important; }
          .dg-ctrl-row { flex-direction: column !important; align-items: flex-start !important; }
          .dg-mobile-back { display: flex !important; }
        }
      `}</style>

      {/* ── Mobile sticky back bar ── */}
      <div className="dg-mobile-back" style={{
        position: "sticky", top: 56, zIndex: 90,
        background: C.bgCard, borderBottom: `1px solid ${C.border}`,
        padding: "10px 16px", alignItems: "center", gap: 8,
      }}>
        <button
          onClick={() => setPage("practice")}
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

      {/* ── Page header ── */}
      <div className="dg-header-pad" style={{ background: C.bgCard, borderBottom: `1px solid ${C.border}` }}>
        <div className="dg-grid-max" style={{ margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <button
              onClick={() => setPage("practice")}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: C.brand, fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, marginBottom: 16, padding: 0 }}
            >
              ← Back to Practice
            </button>
            <SectionHeader>Capgemini · Deductive</SectionHeader>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div>
                <h1 style={{ fontFamily: "Instrument Serif,serif", fontSize: 42, fontWeight: 400, color: C.navy, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 6 }}>
                  Deductive Grid
                </h1>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid }}>
                  Each symbol appears exactly once per row &amp; column. Find the missing{" "}
                  <span style={{ color: C.gold, fontWeight: 700 }}>?</span>
                </p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <StatPill label="Score" value={score} color={C.brand} icon="🎯" />
                <StatPill label="Streak" value={streak} color={streak >= 3 ? C.coral : C.navy} icon={streak >= 3 ? "🔥" : "⚡"} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Game area ── */}
      <div className="dg-body-pad" style={{ maxWidth: 860, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>

          {/* Controls row */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28, alignItems: "center" }}>
            {/* Difficulty */}
            <div style={{ display: "flex", background: C.bgMuted, borderRadius: 14, padding: 4, gap: 4, border: `1.5px solid ${C.border}` }}>
              {diffOptions.map((d) => (
                <button key={d} onClick={() => setDifficulty(d)}
                  style={{ padding: "7px 16px", borderRadius: 10, fontSize: 12, fontWeight: 700, fontFamily: "Geist,sans-serif", cursor: "pointer", border: "none", background: difficulty === d ? diffBg[d] : "transparent", color: difficulty === d ? diffColors[d] : C.textMut, boxShadow: difficulty === d ? "0 1px 4px rgba(15,31,61,0.08)" : "none", transition: "all 0.18s", textTransform: "capitalize", letterSpacing: "0.01em" }}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Grid size */}
            <div style={{ display: "flex", background: C.bgMuted, borderRadius: 14, padding: 4, gap: 4, border: `1.5px solid ${C.border}` }}>
              {sizeOptions.map((s) => (
                <button key={s} onClick={() => setSize(s)}
                  style={{ padding: "7px 16px", borderRadius: 10, fontSize: 12, fontWeight: 700, fontFamily: "Geist Mono,monospace", cursor: "pointer", border: "none", background: size === s ? `${C.brand}12` : "transparent", color: size === s ? C.brand : C.textMut, boxShadow: size === s ? "0 1px 4px rgba(15,31,61,0.08)" : "none", transition: "all 0.18s" }}
                >
                  {s}×{s}
                </button>
              ))}
            </div>
          </div>

          {/* Card */}
          <motion.div
            animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
            transition={{ duration: 0.45 }}
            style={{ background: C.bgCard, border: `1.5px solid ${C.border}`, borderRadius: 28, overflow: "hidden", boxShadow: "0 8px 32px rgba(15,31,61,0.08), 0 2px 8px rgba(15,31,61,0.04)" }}
          >
            {/* Top gradient band */}
            <div style={{ height: 5, background: `linear-gradient(90deg, ${C.brand}, ${C.purple}, ${C.coral})` }} />

            <div className="dg-inner-pad" style={{ padding: "32px 36px 40px" }}>

              {/* Timer + info row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <CircularTimer time={time} maxTime={60} />
                  <div>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color: C.textMut, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 3 }}>
                      Time Remaining
                    </p>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid }}>
                      {time > 30 ? "Keep going!" : time > 15 ? "Almost there!" : "Hurry up! ⚡"}
                    </p>
                  </div>
                </div>

                <div style={{ padding: "8px 16px", borderRadius: 12, background: C.bgMuted, border: `1.5px solid ${C.border}`, display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 13, fontWeight: 700, color: C.brand }}>
                    {size}×{size}
                  </span>
                  <div style={{ width: 1, height: 16, background: C.border }} />
                  <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: diffColors[difficulty], textTransform: "capitalize", letterSpacing: "0.02em" }}>
                    {difficulty}
                  </span>
                </div>
              </div>

              {/* Grid */}
              <div style={{ display: "grid", gap: size === 5 ? 8 : 10, gridTemplateColumns: `repeat(${size}, 1fr)`, maxWidth: size * 80 + (size - 1) * 10, margin: "0 auto 36px" }}>
                {grid.map((row, i) =>
                  row.map((cell, j) => {
                    const isQuestion = cell === "?";
                    const isEmpty = cell === null;
                    return (
                      <motion.div
                        key={`${i}-${j}`}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: (i * size + j) * 0.025, duration: 0.28, type: "spring", stiffness: 280, damping: 22 }}
                        style={{
                          width: "100%", aspectRatio: "1",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          borderRadius: size === 5 ? 12 : 16,
                          fontSize: size === 5 ? 20 : size === 4 ? 26 : 30,
                          fontWeight: 700,
                          border: isQuestion ? `2.5px solid ${C.gold}` : isEmpty ? `1.5px dashed ${C.borderDark}` : `1.5px solid ${C.border}`,
                          background: isQuestion ? `${C.gold}18` : isEmpty ? C.bgMuted : C.bgCard,
                          color: isQuestion ? C.gold : isEmpty ? C.borderDark : C.navy,
                          boxShadow: isQuestion ? `0 0 0 4px ${C.gold}20, 0 4px 16px ${C.gold}15` : isEmpty ? "none" : "0 2px 8px rgba(15,31,61,0.06)",
                          animation: isQuestion ? "questionPulse 2s ease-in-out infinite" : "none",
                          transition: "all 0.2s", userSelect: "none",
                        }}
                      >
                        {cell || ""}
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Instruction */}
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMut, textAlign: "center", marginBottom: 22, lineHeight: 1.5 }}>
                Each symbol appears <strong style={{ color: C.navy }}>exactly once</strong> per row and column. What replaces the <strong style={{ color: C.gold }}>?</strong>
              </p>

              {/* Symbol options */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 32 }}>
                {symbols.slice(0, size).map((sym) => (
                  <SymbolButton
                    key={sym} sym={sym} selected={selected}
                    disabled={!!result} result={result} answer={answer}
                    onClick={() => !result && setSelected(sym)}
                  />
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  onMouseEnter={() => setSubmitHov(true)}
                  onMouseLeave={() => setSubmitHov(false)}
                  style={{
                    padding: "14px 36px", borderRadius: 14,
                    fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: 700,
                    cursor: !canSubmit ? "not-allowed" : "pointer",
                    border: "none",
                    background: !canSubmit
                      ? C.bgMuted
                      : submitHov
                      ? `linear-gradient(135deg, ${C.coral} 0%, ${C.coralLt} 100%)`
                      : `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)`,
                    color: !canSubmit ? C.textMut : "#fff",
                    boxShadow: !canSubmit ? "none" : submitHov ? `0 6px 20px ${C.coral}40` : `0 6px 20px ${C.navy}35`,
                    transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
                    transform: submitHov && canSubmit ? "translateY(-2px)" : "none",
                    letterSpacing: "-0.01em", minWidth: 160,
                  }}
                >
                  Submit Answer
                </button>

                {/* Skip */}
                <button
                  onClick={() => generateGame(size, difficulty)}
                  onMouseEnter={() => setSkipHov(true)}
                  onMouseLeave={() => setSkipHov(false)}
                  style={{
                    padding: "14px 28px", borderRadius: 14,
                    fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: 600,
                    cursor: "pointer",
                    border: `1.5px solid ${skipHov ? C.borderDark : C.border}`,
                    background: skipHov ? C.bgMuted : "transparent",
                    color: C.textMid,
                    transition: "all 0.2s",
                    transform: skipHov ? "translateY(-1px)" : "none",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Skip →
                </button>
              </div>

              {/* Result feedback */}
              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.32, type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                      marginTop: 28, padding: "20px 28px", borderRadius: 18,
                      background: result === "correct" ? `${C.success}10` : "#ef444410",
                      border: `1.5px solid ${result === "correct" ? `${C.success}40` : "#ef444440"}`,
                      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: result === "correct" ? `${C.success}18` : "#ef444418", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                        {result === "correct" ? "✅" : time === 0 ? "⏱" : "❌"}
                      </div>
                      <div>
                        <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, color: result === "correct" ? C.success : "#ef4444", marginBottom: 3, letterSpacing: "-0.01em" }}>
                          {result === "correct" ? "Correct! 🎉" : time === 0 ? "Time's up!" : "Incorrect"}
                        </p>
                        <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid }}>
                          {result === "correct" ? `The answer was ${answer}. Great deduction!` : `The correct answer was ${answer}.`}
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03, translateY: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => generateGame(size, difficulty)}
                      style={{
                        padding: "12px 24px", borderRadius: 12,
                        fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700,
                        cursor: "pointer", border: "none",
                        background: result === "correct"
                          ? `linear-gradient(135deg, ${C.success}, #059669)`
                          : `linear-gradient(135deg, ${C.coral}, ${C.coralLt})`,
                        color: "#fff",
                        boxShadow: result === "correct" ? `0 4px 14px ${C.success}40` : `0 4px 14px ${C.coral}40`,
                        letterSpacing: "-0.01em", whiteSpace: "nowrap",
                      }}
                    >
                      Next Puzzle →
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* How to play */}
          <div style={{ marginTop: 28, padding: "24px 28px", background: C.bgCard, border: `1.5px solid ${C.border}`, borderRadius: 20, boxShadow: "0 2px 8px rgba(15,31,61,0.04)" }}>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color: C.textMut, letterSpacing: "0.07em", marginBottom: 16, textTransform: "uppercase" }}>
              How to Play
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 12 }}>
              {[
                { icon: "🔍", text: "Each symbol appears exactly once in every row" },
                { icon: "⬇️", text: "Each symbol also appears exactly once in every column" },
                { icon: "❓", text: 'Deduce what symbol belongs in the highlighted "?" cell' },
                { icon: "⏱", text: "Answer before the 60-second timer runs out" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 14px", borderRadius: 12, background: C.bgMuted, border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMid, lineHeight: 1.55 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      <style>{`
        @keyframes questionPulse {
          0%, 100% { box-shadow: 0 0 0 4px ${C.gold}20, 0 4px 16px ${C.gold}15; }
          50% { box-shadow: 0 0 0 10px ${C.gold}08, 0 4px 20px ${C.gold}25; }
        }
      `}</style>
    </div>
  );
}
