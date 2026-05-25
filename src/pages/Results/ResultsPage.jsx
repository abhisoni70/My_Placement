import { motion } from "framer-motion";
import { Card } from "../../components/ui/primitives";
import SectionHeader from "../../components/ui/SectionHeader";
import Button from "../../components/ui/Button";
import { useTheme } from "../../utils/ThemeContext";

/**
 * ResultsPage — post-assessment results with score circle, section
 * breakdown, and strength/focus-area insights.
 * Props:
 *   setPage — page navigation setter
 */
export default function ResultsPage({ setPage }) {
  const { C } = useTheme();
  const scores = [
    { label: "Pattern Matrix",        pct: 88, correct: 18, total: 20, color: C.coral  },
    { label: "Quantitative Aptitude", pct: 72, correct: 18, total: 25, color: C.brand  },
    { label: "Verbal Ability",        pct: 65, correct: 16, total: 24, color: C.purple },
    { label: "Logical Reasoning",     pct: 80, correct: 24, total: 30, color: C.success},
  ];

  const overall      = Math.round(scores.reduce((a, s) => a + s.pct, 0) / scores.length);
  const grade        = overall >= 85 ? "A" : overall >= 70 ? "B" : overall >= 55 ? "C" : "D";
  const gradeColor   = overall >= 85 ? C.success : overall >= 70 ? C.brand : overall >= 55 ? C.gold : C.coral;
  const verdict      = overall >= 75 ? "Strong Performance" : "Needs Improvement";
  const totalCorrect = scores.reduce((a, s) => a + s.correct, 0);
  const totalQ       = scores.reduce((a, s) => a + s.total, 0);

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .results-pad { padding: 40px 32px !important; }
        .results-top-grid { grid-template-columns: 320px 1fr !important; }
        .results-bottom-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) {
          .results-top-grid { grid-template-columns: 1fr !important; }
          .results-bottom-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .results-pad { padding: 20px 16px !important; }
          .results-score-circle { width: 140px !important; height: 140px !important; }
          .results-grade { font-size: 48px !important; }
        }
      `}</style>
      <div className="results-pad" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <SectionHeader>Session Complete</SectionHeader>
          <h1 style={{ fontFamily: "Instrument Serif,serif", fontSize: 52, fontWeight: 400, color: C.navy, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 12 }}>
            Your results are in
          </h1>
          <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: C.textMid }}>
            TCS Mock Assessment · {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </motion.div>

        {/* Score hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card
            style={{
              padding: "clamp(24px,4vw,48px) clamp(16px,4vw,36px)",
              marginBottom: 20,
              textAlign: "center",
              background: `linear-gradient(160deg,${C.navy} 0%,${C.navyMid} 100%)`,
              border: "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap" }}>

              {/* Score circle */}
              <div style={{ position: "relative", width: 160, height: 160 }}>
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                  <motion.circle
                    cx="80" cy="80" r="68" fill="none" stroke="url(#resultGrad)" strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 68}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 68 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 68 * (1 - overall / 100) }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "80px 80px", transform: "rotate(-90deg)" }}
                  />
                  <defs>
                    <linearGradient id="resultGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={C.coral} />
                      <stop offset="100%" stopColor={C.brand} />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ fontFamily: "Instrument Serif,serif", fontSize: 48, color: "#fff", lineHeight: 1 }}
                  >
                    {overall}
                  </motion.p>
                  <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>out of 100</p>
                </div>
              </div>

              {/* Right summary */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, textAlign: "left" }}>
                <div>
                  <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Overall Grade</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <p style={{ fontFamily: "Instrument Serif,serif", fontSize: 64, color: gradeColor, lineHeight: 1 }}>{grade}</p>
                    <div style={{ padding: "4px 12px", borderRadius: 8, background: gradeColor + "20", border: `1px solid ${gradeColor}40` }}>
                      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: gradeColor, fontWeight: 700 }}>{verdict}</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 28 }}>
                  {[
                    { label: "Correct",    val: `${totalCorrect}/${totalQ}`, color: C.success },
                    { label: "Incorrect",  val: `${totalQ - totalCorrect}/${totalQ}`, color: C.coral },
                    { label: "Time Taken", val: "68 min", color: "rgba(255,255,255,0.7)" },
                  ].map((m, i) => (
                    <div key={i}>
                      <p style={{ fontFamily: "Geist Mono,monospace", fontSize: 20, fontWeight: 500, color: m.color }}>{m.val}</p>
                      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2, fontWeight: 500 }}>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Card>
        </motion.div>

        {/* Section breakdown */}
        <Card style={{ padding: 28, marginBottom: 20 }}>
          <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 24, letterSpacing: "-0.02em" }}>Section Breakdown</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {scores.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: s.color }} />
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 600, color: C.navy }}>{s.label}</p>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 12, color: C.textMut }}>{s.correct}/{s.total}</span>
                    <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 14, fontWeight: 600, color: s.color }}>{s.pct}%</span>
                  </div>
                </div>
                <div style={{ height: 8, background: C.bgMuted, borderRadius: 4, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.pct}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%", background: s.color, borderRadius: 4 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Performance insights */}
        <div className="results-bottom-grid" style={{ display: "grid", gap: 16, marginBottom: 28 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}>💪</span>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700, color: C.navy }}>Strengths</p>
            </div>
            {["Pattern recognition", "Logical deduction", "Reading speed"].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.success, flexShrink: 0 }} />
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid }}>{s}</p>
              </div>
            ))}
          </Card>

          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}>🎯</span>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700, color: C.navy }}>Focus Areas</p>
            </div>
            {["Data interpretation", "Speed arithmetic", "Grammar rules"].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.coral, flexShrink: 0 }} />
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid }}>{s}</p>
              </div>
            ))}
          </Card>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <Button variant="coral" size="xl" onClick={() => setPage("mock")}>
            Retry Assessment
          </Button>
          <Button variant="outline" size="xl" onClick={() => setPage("practice")}>
            Practice Weak Areas
          </Button>
          <Button variant="ghost" size="xl" onClick={() => setPage("dashboard")}>
            Back to Dashboard
          </Button>
        </motion.div>

      </div>
      </div>
    </div>
  );
}
