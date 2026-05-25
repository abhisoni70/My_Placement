import { useState } from "react";
import { motion } from "framer-motion";
import { COMPANIES, PROGRESS_DATA } from "../../constants/companyTracks";
import { GAMES } from "../../constants/gamesData";
import { Card, Tag, DifficultyPill } from "../../components/ui/primitives";
import Button from "../../components/ui/Button";
import { useTheme } from "../../utils/ThemeContext";

export default function DashboardPage({ setPage }) {
  const { C } = useTheme();
  const [selectedCompany, setSelectedCompany] = useState("tcs");

  const miniBar = (val) => (
    <div style={{ height: 6, background: C.bgMuted, borderRadius: 3, overflow: "hidden" }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${val}%` }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "100%", background: `linear-gradient(90deg,${C.brand},${C.coral})`, borderRadius: 3 }}
      />
    </div>
  );

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .dash-padding { padding: 32px; }
        .dash-stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .dash-main-grid { grid-template-columns: 2fr 1fr !important; }
        .dash-bottom-grid { grid-template-columns: 1fr 1fr !important; }
        .dash-welcome-flex { flex-direction: row !important; align-items: flex-start !important; }
        .dash-welcome-btns { flex-direction: row !important; }

        @media (max-width: 1024px) {
          .dash-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dash-main-grid { grid-template-columns: 1fr !important; }
          .dash-bottom-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 600px) {
          .dash-padding { padding: 16px !important; }
          .dash-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dash-main-grid { grid-template-columns: 1fr !important; }
          .dash-bottom-grid { grid-template-columns: 1fr !important; }
          .dash-welcome-flex { flex-direction: column !important; gap: 16px !important; }
          .dash-welcome-btns { flex-direction: column !important; width: 100% !important; }
          .dash-welcome-btns > * { width: 100% !important; justify-content: center !important; }
          .dash-h1 { font-size: 28px !important; }
          .dash-company-scroll { overflow-x: auto !important; flex-wrap: nowrap !important; }
        }
      `}</style>

      <div className="dash-padding" style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Welcome ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 36 }}
        >
          <div className="dash-welcome-flex" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMut, marginBottom: 6, fontWeight: 500 }}>
                {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              </p>
              <h1 className="dash-h1" style={{ fontFamily: "Instrument Serif,serif", fontSize: 42, fontWeight: 400, color: C.navy, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Ready to practice,<br />
                <span style={{ fontStyle: "italic" }}>let's get placed.</span>
              </h1>
            </div>
            <div className="dash-welcome-btns" style={{ display: "flex", gap: 10 }}>
              <Button variant="ghost" size="md" onClick={() => setPage("results")}>View Results</Button>
              <Button variant="coral" size="md" onClick={() => setPage("practice")}>Continue Practice →</Button>
            </div>
          </div>
        </motion.div>

        {/* ── Quick stats ── */}
        <div className="dash-stats-grid" style={{ display: "grid", gap: 14, marginBottom: 28 }}>
          {[
            { label: "Sessions Today",  val: "3",       delta: "+1 vs yesterday", icon: "◉", color: C.brand },
            { label: "Accuracy Rate",   val: "78%",     delta: "+5% this week",   icon: "◎", color: C.success },
            { label: "Questions Done",  val: "142",     delta: "38 today",        icon: "◆", color: C.coral },
            { label: "Practice Streak", val: "6 days",  delta: "Personal best!",  icon: "◈", color: C.gold },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.4 }}>
              <Card style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontSize: 20, color: s.color }}>{s.icon}</span>
                  <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.success, fontWeight: 600, background: C.success + "15", padding: "2px 8px", borderRadius: 6 }}>{s.delta}</span>
                </div>
                <p style={{ fontFamily: "Instrument Serif,serif", fontSize: 34, fontWeight: 400, color: C.navy, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.val}</p>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, marginTop: 4, fontWeight: 500 }}>{s.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="dash-main-grid" style={{ display: "grid", gap: 20, marginBottom: 20 }}>
          {/* ── Progress chart ── */}
          <Card style={{ padding: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
              <div>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, color: C.navy, letterSpacing: "-0.02em" }}>Weekly Performance</p>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMut, marginTop: 2 }}>Accuracy % per session</p>
              </div>
              <Tag color={C.success}>↑ 12% this week</Tag>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 120 }}>
              {PROGRESS_DATA.map((d, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${d.val}%` }}
                    transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: "100%",
                      maxWidth: 36,
                      background: d.today
                        ? `linear-gradient(180deg, ${C.coral}, ${C.coralLt || C.coral})`
                        : `linear-gradient(180deg, ${C.brand}60, ${C.brand}30)`,
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                  <span style={{ fontFamily: "Geist,sans-serif", fontSize: 10, color: d.today ? C.coral : C.textMut, fontWeight: d.today ? 700 : 400 }}>{d.day}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* ── Company Progress ── */}
          <Card style={{ padding: 24 }}>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, color: C.navy, letterSpacing: "-0.02em", marginBottom: 20 }}>Company Progress</p>
            <div className="dash-company-scroll" style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {COMPANIES.slice(0, 4).map(co => (
                <button
                  key={co.id}
                  onClick={() => setSelectedCompany(co.id)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 8,
                    border: `1px solid ${selectedCompany === co.id ? co.color : C.border}`,
                    background: selectedCompany === co.id ? co.color + "12" : "transparent",
                    cursor: "pointer",
                    fontFamily: "Geist,sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: selectedCompany === co.id ? co.color : C.textMut,
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {co.name}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["Aptitude", "Logical", "Verbal", "Technical"].map((cat, i) => {
                const val = [72, 58, 84, 45][i];
                return (
                  <div key={cat}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, fontWeight: 500 }}>{cat}</span>
                      <span style={{ fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 700, color: C.navy }}>{val}%</span>
                    </div>
                    {miniBar(val)}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* ── Games + Activity ── */}
        <div className="dash-bottom-grid" style={{ display: "grid", gap: 20, marginBottom: 20 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, color: C.navy }}>Featured Games</p>
              <button onClick={() => setPage("practice")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Geist,sans-serif", fontSize: 12, color: C.coral, fontWeight: 600 }}>View all →</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {(GAMES || []).slice(0, 3).map((g, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", background: C.bgMuted, borderRadius: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: g.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{g.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{g.title}</p>
                    <DifficultyPill level={g.difficulty} color={g.color} />
                  </div>
                  <button onClick={() => setPage("practice")} style={{ background: g.color, border: "none", cursor: "pointer", color: "#fff", fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 8, flexShrink: 0, fontFamily: "Geist,sans-serif" }}>Play</button>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{ padding: 24 }}>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 20 }}>Recent Activity</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Capgemini Mock Test", time: "2h ago", score: "82%", color: C.success },
                { title: "Memory Bubble Game", time: "4h ago", score: "Level 7", color: C.brand },
                { title: "Logical Reasoning", time: "Yesterday", score: "74%", color: C.coral },
                { title: "Verbal Ability Quiz", time: "Yesterday", score: "91%", color: C.gold },
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.color, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, color: C.navy, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.title}</p>
                    <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, marginTop: 1 }}>{a.time}</p>
                  </div>
                  <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: a.color, flexShrink: 0 }}>{a.score}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
