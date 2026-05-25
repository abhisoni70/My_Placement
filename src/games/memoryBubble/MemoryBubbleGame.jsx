import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTheme } from "../../utils/ThemeContext";

// ─── helpers ────────────────────────────────────────────────────
function getGridSize(level, manual) {
  if (manual) return manual;
  if (level < 4) return 3;
  if (level < 8) return 4;
  if (level < 12) return 5;
  return 6;
}

function getSequenceLength(level) {
  if (level < 3) return 3;
  if (level < 6) return 4;
  if (level < 9) return 5;
  if (level < 12) return 6;
  return 7;
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// ─── Themed Button (project style) ──────────────────────────────
function ThemedButton({ children, onClick, variant = "ghost", active = false, style = {} }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 10,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.22,1,0.36,1)",
    fontFamily: "Geist,sans-serif",
    fontSize: 12,
    letterSpacing: "-0.01em",
    padding: "7px 16px",
    border: "none",
    transform: hov ? "translateY(-1px)" : "none",
  };

  const variants = {
    grid: {
      background: active ? C.brand : hov ? C.bgMuted : "rgba(255,255,255,0.08)",
      color: active ? "#fff" : hov ? C.navy : "rgba(255,255,255,0.75)",
      border: active ? "none" : `1px solid rgba(255,255,255,0.12)`,
      boxShadow: active ? `0 4px 14px ${C.brand}50` : "none",
    },
    skip: {
      background: hov ? "#d97706" : "rgba(245,158,11,0.15)",
      color: hov ? "#fff" : "#f59e0b",
      border: "1px solid rgba(245,158,11,0.3)",
      boxShadow: hov ? "0 4px 14px rgba(245,158,11,0.35)" : "none",
    },
    next: {
      background: hov ? C.success : "rgba(16,185,129,0.15)",
      color: hov ? "#fff" : C.success,
      border: `1px solid rgba(16,185,129,0.3)`,
      boxShadow: hov ? `0 4px 14px ${C.success}50` : "none",
    },
    reset: {
      background: hov ? "#dc2626" : "rgba(239,68,68,0.12)",
      color: hov ? "#fff" : "#ef4444",
      border: "1px solid rgba(239,68,68,0.25)",
      boxShadow: hov ? "0 4px 14px rgba(239,68,68,0.35)" : "none",
    },
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}

// ─── Stat Chip ───────────────────────────────────────────────────
function StatChip({ icon, label, value, color }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 10, padding: "6px 14px",
    }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <div>
        <div style={{ fontFamily: "Geist,sans-serif", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
        <div style={{ fontFamily: "Geist Mono,monospace", fontSize: 15, fontWeight: 700, color: color || "#fff", lineHeight: 1 }}>{value}</div>
      </div>
    </div>
  );
}

// ─── Main Game ───────────────────────────────────────────────────
export default function MemoryBubbleGame({
  setPage }) {
  const { C } = useTheme();
  const [level, setLevel] = useState(1);
  const [manualGrid, setManualGrid] = useState(0);
  const [gridSize, setGridSize] = useState(3);
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [wrongIndex, setWrongIndex] = useState(null);
  const [phase, setPhase] = useState("show");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [time, setTime] = useState(10);
  const timerRef = useRef(null);
  const skipRef = useRef(false);

  const positions = useMemo(() => {
    const count = gridSize * gridSize + Math.floor(gridSize * 2);
    return Array.from({ length: count }).map(() => ({
      x: Math.random() * 90,
      y: Math.random() * 90,
    }));
  }, [gridSize, level]);

  useEffect(() => { startLevel(); }, [level]);

  useEffect(() => {
    if (phase === "input") {
      timerRef.current = setInterval(() => {
        setTime((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            handleWrong();
            return 10;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [phase]);

  async function startLevel() {
    skipRef.current = false;
    const size = getGridSize(level, manualGrid);
    const seqLen = getSequenceLength(level);
    const seq = [];
    for (let i = 0; i < seqLen; i++) {
      seq.push(Math.floor(Math.random() * positions.length));
    }
    setGridSize(size);
    setSequence(seq);
    setUserInput([]);
    setTime(10);
    setPhase("show");
    for (let i = 0; i < seq.length; i++) {
      if (skipRef.current) break;
      setActiveIndex(seq[i]);
      await sleep(2000);
      setActiveIndex(null);
      await sleep(500);
    }
    setPhase("input");
  }

  function handleWrong(index) {
    setWrongIndex(index);
    setTimeout(() => setWrongIndex(null), 300);
    setLives((l) => {
      if (l <= 1) { setLevel(1); setScore(0); return 3; }
      return l - 1;
    });
    setPhase("show");
    setTimeout(startLevel, 600);
  }

  function handleClick(index) {
    if (phase !== "input") return;
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 150);
    const newInput = [...userInput, index];
    setUserInput(newInput);
    if (sequence[newInput.length - 1] !== index) { handleWrong(index); return; }
    if (newInput.length === sequence.length) {
      setScore((s) => s + level * 10);
      setPhase("show");
      setTimeout(() => setLevel((l) => l + 1), 500);
    }
  }

  function handleSkip() {
    skipRef.current = true;
    setActiveIndex(null);
    setPhase("input");
  }

  const cells = Array.from({ length: positions.length });

  // ─── Timer ring progress ────────────────────────────────────
  const timerPct = time / 10;
  const radius = 16;
  const circ = 2 * Math.PI * radius;
  const timerColor = time > 6 ? C.success : time > 3 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .mb-header-pad { padding: 36px 32px 28px !important; }
        .mb-body-pad { padding: 32px 24px !important; }
        .mb-bubble-area { height: 420px !important; }
        .mb-mobile-back { display: none !important; }
        @media (max-width: 600px) {
          .mb-header-pad { padding: 20px 16px 16px !important; }
          .mb-body-pad { padding: 16px 12px !important; }
          .mb-bubble-area { height: 260px !important; }
          .mb-h1 { font-size: 22px !important; }
          .mb-mobile-back { display: flex !important; }
        }
      `}</style>

      {/* ── Mobile sticky back bar ── */}
      <div className="mb-mobile-back" style={{
        position: "sticky", top: 56, zIndex: 90,
        background: C.bgCard, borderBottom: `1px solid ${C.border}`,
        padding: "10px 16px", alignItems: "center",
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

      {/* ── Page Header (project-styled) ── */}
      <div className="mb-header-pad" style={{
        background: C.bgCard,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Back button */}
          <button
            onClick={() => setPage("practice")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
              color: C.brand, fontFamily: "Geist,sans-serif",
              fontSize: 13, fontWeight: 600, marginBottom: 16, padding: 0,
            }}
          >
            ← Back to Games
          </button>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              {/* Label chip */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: `${C.brand}14`, color: C.brand,
                fontSize: 10, fontWeight: 700, fontFamily: "Geist,sans-serif",
                letterSpacing: "0.08em", padding: "3px 10px", borderRadius: 999,
                border: `1px solid ${C.brand}25`, marginBottom: 10,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.brand, display: "inline-block" }} />
                CAPGEMINI · GRID CHALLENGE
              </div>
              <h1 style={{
                fontFamily: "Instrument Serif,serif",
                fontSize: 38, fontWeight: 400, color: C.navy,
                letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 6,
              }}>
                Memory Bubble
              </h1>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.5 }}>
                Watch the sequence, then repeat it in the exact order.
              </p>
            </div>

            {/* Difficulty badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#fef3c7", border: "1px solid #fde68a",
              borderRadius: 12, padding: "8px 16px",
            }}>
              <span style={{ fontSize: 18 }}>🧠</span>
              <div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700, color: "#92400e", letterSpacing: "0.06em" }}>DIFFICULTY</div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 700, color: "#b45309" }}>Medium → Hard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Game Area ── */}
      <div className="mb-body-pad" style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          background: "#0a0f1e",
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
        }}>

          {/* ── Game Header Bar ── */}
          <div style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 12,
          }}>
            {/* Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${C.brand}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18,
              }}>🧠</div>
              <div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Memory Pro</div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                  {phase === "show" ? "Memorise the sequence…" : `Tap ${sequence.length - userInput.length} more bubble${sequence.length - userInput.length !== 1 ? "s" : ""}`}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <StatChip icon="🏆" label="Level" value={level} color="#a78bfa" />
              <StatChip icon="⭐" label="Score" value={score} color="#fbbf24" />
              <StatChip icon="❤️" label="Lives" value={"♥".repeat(lives)} color="#f87171" />

              {/* Timer with SVG ring */}
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: "6px 14px",
              }}>
                <svg width="36" height="36" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="18" cy="18" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r={radius} fill="none"
                    stroke={phase === "input" ? timerColor : "rgba(255,255,255,0.15)"}
                    strokeWidth="3"
                    strokeDasharray={circ}
                    strokeDashoffset={circ * (1 - timerPct)}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s linear, stroke 0.3s" }}
                  />
                  <text
                    x="18" y="18"
                    textAnchor="middle" dominantBaseline="central"
                    style={{ transform: "rotate(90deg)", transformOrigin: "18px 18px" }}
                    fill={phase === "input" ? timerColor : "rgba(255,255,255,0.3)"}
                    fontSize="10" fontWeight="700" fontFamily="Geist Mono,monospace"
                  >{time}</text>
                </svg>
                <div>
                  <div style={{ fontFamily: "Geist,sans-serif", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>TIMER</div>
                  <div style={{ fontFamily: "Geist Mono,monospace", fontSize: 15, fontWeight: 700, color: phase === "input" ? timerColor : "rgba(255,255,255,0.3)", lineHeight: 1 }}>{time}s</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Controls Row ── */}
          <div style={{
            padding: "14px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
          }}>
            <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", marginRight: 4 }}>GRID</span>
            {[3, 4, 5, 6].map((g) => (
              <ThemedButton
                key={g}
                variant="grid"
                active={manualGrid === g}
                onClick={() => setManualGrid(g === manualGrid ? 0 : g)}
              >
                {g}×{g}
              </ThemedButton>
            ))}

            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 4px" }} />

            <ThemedButton variant="skip" onClick={handleSkip}>
              ⚡ Skip
            </ThemedButton>
            <ThemedButton variant="next" onClick={() => setLevel((l) => l + 1)}>
              ↗ Next Level
            </ThemedButton>
            <ThemedButton variant="reset" onClick={() => { setLevel(1); setScore(0); setLives(3); }}>
              ↺ Reset
            </ThemedButton>
          </div>

          {/* ── Bubble Field (UNCHANGED) ── */}
          <div className="mb-bubble-area" style={{
            position: "relative",
            width: "100%",
            height: "420px",
            background: "rgba(0,0,0,0.4)",
            overflow: "hidden",
          }}>
            {/* Ambient glow */}
            <div style={{
              position: "absolute", top: "30%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 300, height: 300,
              background: `radial-gradient(circle, ${C.brand}08 0%, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {cells.map((_, i) => {
              const isActive = i === activeIndex;
              const isClicked = i === clickedIndex;
              const isWrong = i === wrongIndex;
              const pos = positions[i] || { x: 0, y: 0 };
              const order = userInput.indexOf(i);

              const bubbleStyle = {
                position: "absolute",
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                transition: "all 0.2s",
                width: 40,
                height: 40,
                cursor: phase === "input" ? "pointer" : "default",
                background: isActive
                  ? "#22d3ee"
                  : isWrong
                  ? "#ef4444"
                  : isClicked
                  ? "#4ade80"
                  : "rgba(75,85,99,0.8)",
                border: isActive
                  ? "2px solid rgba(34,211,238,0.5)"
                  : isWrong
                  ? "2px solid rgba(239,68,68,0.5)"
                  : isClicked
                  ? "2px solid rgba(74,222,128,0.5)"
                  : "1px solid rgba(255,255,255,0.1)",
                boxShadow: isActive
                  ? "0 0 20px #22d3ee"
                  : isWrong
                  ? "0 0 12px rgba(239,68,68,0.6)"
                  : isClicked
                  ? "0 0 12px rgba(74,222,128,0.6)"
                  : "none",
                scale: isActive ? "1.25" : isWrong || isClicked ? "1.1" : "1",
              };

              return (
                <div key={i} onClick={() => handleClick(i)} style={bubbleStyle}>
                  {order !== -1 && (
                    <span style={{ color: "#000", fontFamily: "Geist Mono,monospace", fontSize: 11 }}>{order + 1}</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Footer Status ── */}
          <div style={{
            padding: "14px 24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 8,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: phase === "show" ? "#fbbf24" : C.success,
                boxShadow: `0 0 8px ${phase === "show" ? "#fbbf24" : C.success}`,
              }} />
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                {phase === "show"
                  ? `Memorise — sequence ${sequence.length} bubbles long`
                  : `Repeat the sequence in order · ${userInput.length}/${sequence.length} done`}
              </span>
            </div>

            {/* Progress bar */}
            {phase === "input" && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Progress</span>
                <div style={{ width: 100, height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 99 }}>
                  <div style={{
                    height: "100%", borderRadius: 99,
                    background: C.brand,
                    width: `${(userInput.length / sequence.length) * 100}%`,
                    transition: "width 0.3s",
                  }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── How to play ── */}
        <div style={{
          marginTop: 24,
          padding: "20px 24px",
          background: C.bgCard,
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          display: "flex", gap: 24, flexWrap: "wrap",
        }}>
          {[
            { icon: "👁", title: "Watch", desc: "Bubbles light up one by one — memorise the order." },
            { icon: "👆", title: "Repeat", desc: "Tap them back in the exact same sequence." },
            { icon: "🏆", title: "Advance", desc: "Each correct round levels you up with more bubbles." },
          ].map((tip) => (
            <div key={tip.title} style={{ display: "flex", gap: 12, flex: "1 1 200px" }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: C.bgMuted,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, flexShrink: 0,
              }}>{tip.icon}</div>
              <div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 2 }}>{tip.title}</div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMid, lineHeight: 1.5 }}>{tip.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
