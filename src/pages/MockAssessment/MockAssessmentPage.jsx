import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANIES, MOCK_ROUNDS } from "../../constants/companyTracks";
import { Card, Tag } from "../../components/ui/primitives";
import SectionHeader from "../../components/ui/SectionHeader";
import Button from "../../components/ui/Button";
import { useTheme } from "../../utils/ThemeContext";

/**
 * MockAssessmentPage — company selector + assessment structure preview.
 * Props:
 *   setPage — page navigation setter
 */
export default function MockAssessmentPage({ setPage }) {
  const { C } = useTheme();
  const [selected, setSelected] = useState("tcs");

  const company = COMPANIES.find((c) => c.id === selected);
  const totalQ = MOCK_ROUNDS.reduce((a, r) => a + r.questions, 0);
  const totalMin = MOCK_ROUNDS.reduce((a, r) => a + parseInt(r.time), 0);

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .mock-pad { padding: 40px 32px !important; }
        .mock-company-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .mock-detail-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) {
          .mock-company-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .mock-detail-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .mock-pad { padding: 20px 16px !important; }
          .mock-company-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .mock-detail-grid { grid-template-columns: 1fr !important; }
          .mock-h1 { font-size: 32px !important; }
        }
      `}</style>
      <div className="mock-pad" style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <SectionHeader>Mock Assessment</SectionHeader>
          <h1 className="mock-h1" style={{ fontFamily: "Instrument Serif,serif", fontSize: 52, fontWeight: 400, color: C.navy, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 12 }}>
            Simulate the real thing
          </h1>
          <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: C.textMid }}>
            Choose your target company and take a full-length placement assessment under real exam conditions.
          </p>
        </motion.div>

        {/* Company picker */}
        <Card style={{ padding: 28, marginBottom: 24 }}>
          <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 16, letterSpacing: "-0.01em" }}>
            Select Company Track
          </p>
          <div className="mock-company-grid" style={{ display: "grid", gap: 10 }}>
            {COMPANIES.map((co, i) => (
              <motion.button
                key={co.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setSelected(co.id)}
                style={{
                  padding: "16px 12px",
                  borderRadius: 14,
                  cursor: "pointer",
                  fontFamily: "Geist,sans-serif",
                  transition: "all 0.22s",
                  background: selected === co.id ? C.navy : C.bgMuted,
                  border: selected === co.id ? `1px solid ${C.navy}` : `1px solid ${C.border}`,
                  textAlign: "left",
                  boxShadow: selected === co.id ? `0 4px 16px ${C.navy}30` : "none",
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: selected === co.id ? co.color + "40" : co.color + "18", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: selected === co.id ? "#fff" : co.color, fontFamily: "Geist,sans-serif" }}>{co.icon}</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: selected === co.id ? "#fff" : C.navy, marginBottom: 2 }}>{co.name}</p>
                <p style={{ fontSize: 11, color: selected === co.id ? "rgba(255,255,255,0.55)" : C.textMut }}>{co.tests} tests</p>
              </motion.button>
            ))}
          </div>
        </Card>

        {/* Assessment info — animated by selected company */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Overview bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 20 }}>
              {[
                { icon: "◉", label: "Total Questions", val: totalQ },
                { icon: "◎", label: "Total Duration", val: `${totalMin} min` },
                { icon: "◆", label: "Test Rounds", val: MOCK_ROUNDS.length },
                { icon: "◈", label: "Difficulty", val: "Adaptive" },
              ].map((m, i) => (
                <Card key={i} style={{ padding: 20, textAlign: "center" }}>
                  <span style={{ fontSize: 22, color: C.brand, marginBottom: 8, display: "block" }}>{m.icon}</span>
                  <p style={{ fontFamily: "Instrument Serif,serif", fontSize: 28, color: C.navy, lineHeight: 1 }}>{m.val}</p>
                  <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, marginTop: 4, fontWeight: 500 }}>{m.label}</p>
                </Card>
              ))}
            </div>

            {/* Rounds table */}
            <Card style={{ marginBottom: 20, overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: 700, color: C.navy, letterSpacing: "-0.01em" }}>
                  Assessment Structure — {company?.name}
                </p>
                <Tag color={C.brand}>{MOCK_ROUNDS.length} Rounds</Tag>
              </div>

              {MOCK_ROUNDS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.09, duration: 0.4 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto auto",
                    gap: 20,
                    padding: "20px 24px",
                    alignItems: "center",
                    borderBottom: i < MOCK_ROUNDS.length - 1 ? `1px solid ${C.border}` : "none",
                    background: i % 2 ? C.bgMuted + "50" : "transparent",
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg,${C.brand}20,${C.coral}20)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 11, fontWeight: 700, color: C.navy }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 2 }}>{r.name}</p>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut }}>{r.desc}</p>
                  </div>
                  <Tag color={C.textMut} bg={C.bgMuted}>{r.questions} Qs</Tag>
                  <Tag color={C.brand}>{r.time}</Tag>
                </motion.div>
              ))}
            </Card>

            {/* Instructions + start */}
            <Card style={{ padding: 28, marginBottom: 24, background: `linear-gradient(135deg,${C.navy}fc,${C.navyMid})`, border: "none" }}>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 280 }}>
                  <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: 12, letterSpacing: "-0.01em" }}>Before you begin</p>
                  {[
                    "You cannot pause once the test starts — ensure you have uninterrupted time.",
                    "Each section is individually timed. Unanswered questions are marked incorrect.",
                    "There is no negative marking in this simulation.",
                    "Your results and analysis will be available immediately after completion.",
                  ].map((tip, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: C.coral, fontSize: 14, flexShrink: 0, marginTop: 1 }}>·</span>
                      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>{tip}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
                  <Button variant="coral" size="xl" onClick={() => setPage("results")}>
                    Start Assessment →
                  </Button>
                  <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", textAlign: "right" }}>
                    {totalMin} min · {totalQ} questions
                  </p>
                </div>
              </div>
            </Card>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>

  );
}
