import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GAMES, CAPGEMINI_GAMES } from "../../constants/gamesData";
import { InView } from "../../utils";
import SectionHeader from "../../components/ui/SectionHeader";
import Button from "../../components/ui/Button";
import GameCard from "../../components/cards/GameCard";
import CapgeminiQuiz from "./CapgeminiQuiz";
import { useTheme } from "../../utils/ThemeContext";

const CATEGORIES = ["All", "Logical", "Memory", "Speed", "Quantitative", "Attention"];

const COMPANIES = [
  {
    id: "capgemini",
    name: "Capgemini",
    available: true,
    color: "#003882",
    accentColor: "#0070AD",
    logo: (
      <svg viewBox="0 0 120 40" width="110" height="37" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="#003882">cap</text>
        <text x="42" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="#0070AD">gemini</text>
      </svg>
    ),
    desc: "India's top IT recruiter. Practice aptitude games & MCQ assessments for Capgemini's unique hiring format.",
    tags: ["Aptitude", "Pseudocode", "Core CS"],
  },
  {
    id: "accenture", name: "Accenture", available: false, color: "#a100ff", accentColor: "#c040ff",
    logo: (<svg viewBox="0 0 140 40" width="120" height="37" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="20" fill="#a100ff">Accenture</text><polygon points="130,5 140,5 135,15" fill="#a100ff"/></svg>),
    desc: "Global consulting giant. Prepare for Accenture's cognitive & technical screening rounds.",
    tags: ["Cognitive", "Aptitude"],
  },
  {
    id: "cognizant", name: "Cognizant", available: false, color: "#1961ac", accentColor: "#2474c8",
    logo: (<svg viewBox="0 0 150 40" width="130" height="37" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="20" fill="#1961ac">Cognizant</text></svg>),
    desc: "Master Cognizant's GenC Next program aptitude & programming logic rounds.",
    tags: ["GenC", "Logic"],
  },
  {
    id: "deloitte", name: "Deloitte", available: false, color: "#86bc25", accentColor: "#9dd62b",
    logo: (<svg viewBox="0 0 140 40" width="120" height="37" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="#111">deloitte</text><circle cx="133" cy="26" r="5" fill="#86bc25"/></svg>),
    desc: "Practice Deloitte's aptitude, verbal & logical reasoning assessment sections.",
    tags: ["Verbal", "Aptitude"],
  },
  {
    id: "infosys", name: "Infosys", available: false, color: "#006EAF", accentColor: "#0086d0",
    logo: (<svg viewBox="0 0 120 40" width="110" height="37" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="#006EAF">Infosys</text></svg>),
    desc: "Crack Infosys InfyTQ & campus hiring with targeted aptitude preparation.",
    tags: ["InfyTQ", "Aptitude"],
  },
  {
    id: "tcs", name: "TCS", available: false, color: "#1a73e8", accentColor: "#2e86ff",
    logo: (<svg viewBox="0 0 80 40" width="70" height="37" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="26" fill="#1a73e8">TCS</text></svg>),
    desc: "Prepare for TCS NQT with full pattern coverage across all sections.",
    tags: ["NQT", "Coding", "Aptitude"],
  },
];

// ── Games view ─────────────────────────────────────────────────
function GamesView({ setPage, onBack }) {
  const { C } = useTheme();
  const [filter, setFilter] = useState("All");
  const filteredCapgemini = filter === "All" ? CAPGEMINI_GAMES : CAPGEMINI_GAMES.filter(g => g.category === filter);

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      {/* Dark hero header */}
      <div className="games-hero-pad" style={{
        background: `linear-gradient(135deg, ${C.navy} 0%, #1a3560 60%, #003882 100%)`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.12, backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.04)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: -40, left: "30%", width: 200, height: 200, borderRadius: "50%", background: `${C.coral}15`, zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.9)", fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, marginBottom: 32, padding: "8px 16px", borderRadius: 10 }}>
              ← Back to Capgemini
            </button>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 10, padding: "6px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <svg viewBox="0 0 120 40" width="72" height="24" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="#fff">cap</text>
                  <text x="42" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="rgba(255,255,255,0.65)">gemini</text>
                </svg>
              </div>
              <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Aptitude Games</span>
            </div>

            <div className="games-hero-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
              <div>
                <h1 className="games-hero-h1" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 14 }}>
                  Pick your <em style={{ color: C.coral }}>challenge</em>
                </h1>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                  6 game types · 135+ questions · Real Capgemini patterns
                </p>
              </div>

              {/* Filter pills on dark bg */}
              <div style={{ display: "flex", gap: 5, background: "rgba(255,255,255,0.08)", padding: 5, borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)", flexWrap: "wrap" }}>
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setFilter(c)} style={{
                    padding: "7px 16px", borderRadius: 9, fontSize: 12, fontWeight: 700, fontFamily: "Geist,sans-serif", cursor: "pointer",
                    background: filter === c ? "#fff" : "transparent",
                    color: filter === c ? C.navy : "rgba(255,255,255,0.55)",
                    border: "none",
                    boxShadow: filter === c ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
                    transition: "all 0.2s",
                  }}>{c}</button>
                ))}
              </div>
            </div>

            {/* Stats strip */}
            <div className="games-stats-strip" style={{ display: "flex", gap: 36, marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.12)", flexWrap: "wrap" }}>
              {[{ val: "6", label: "Game Types" }, { val: "135+", label: "Questions" }, { val: "5", label: "Categories" }, { val: "Self-paced", label: "Format" }].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "Instrument Serif,serif", fontSize: 30, color: "#fff", fontWeight: 400 }}>{s.val}</div>
                  <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Game cards */}
      <div className="practice-content-pad" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {filteredCapgemini.length > 0 ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00388210", color: "#003882", fontSize: 11, fontWeight: 800, fontFamily: "Geist,sans-serif", letterSpacing: "0.08em", padding: "6px 14px", borderRadius: 999, border: "1px solid #00388225" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#003882" }} />
                CAPGEMINI EXCLUSIVE GAMES
              </div>
              <div style={{ flex: 1, height: 1, background: C.border }} />
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, fontWeight: 500 }}>{filteredCapgemini.length} games</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={"cap-" + filter} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                className="games-grid" style={{ display: "grid", gap: 20 }}
              >
                {filteredCapgemini.map((game, i) => (
                  <GameCard key={game.id} game={game} index={i}
                    onStart={() =>
                      game.id === "deductive" ? setPage("deductive-game")
                        : game.id === "switch-challenge" ? setPage("switch-challenge-game")
                        : game.id === "memory-bubble" ? setPage("memory-bubble-game")
                        : game.id === "inductive-challenge" ? setPage("inductive-challenge-game")
                        : setPage("mock")
                    }
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <h3 style={{ fontFamily: "Instrument Serif,serif", fontSize: 28, color: C.navy, fontWeight: 400, marginBottom: 8 }}>No games in this category</h3>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid }}>Try selecting a different filter above.</p>
          </div>
        )}

        {/* CTA banner */}
        <InView>
          <div className="games-cta-banner" style={{ marginTop: 56, background: C.navy, borderRadius: 24, padding: "clamp(24px,4vw,40px) clamp(16px,4vw,48px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: `${C.coral}18` }} />
            <div style={{ position: "relative" }}>
              <p style={{ fontFamily: "Instrument Serif,serif", fontSize: 26, fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", marginBottom: 6 }}>Ready for the full assessment?</p>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 0 }}>Take a full mock test simulating real exam conditions.</p>
            </div>
            <Button variant="coral" size="lg" onClick={() => setPage("mock")}>Go to Mock Test →</Button>
          </div>
        </InView>
      </div>
    </div>
  );
}

// ── Premium Option Card ────────────────────────────────────────
function PremiumOptionCard({ opt, index, onClick }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? `linear-gradient(135deg, ${opt.color} 0%, ${opt.secondaryColor} 100%)` : "#fff",
        border: `2px solid ${hov ? opt.color : C.border}`,
        borderRadius: 24, padding: "36px 32px", cursor: "pointer",
        boxShadow: hov ? `0 24px 64px ${opt.color}35` : "0 2px 16px rgba(15,31,61,0.06)",
        transform: hov ? "translateY(-8px)" : "none",
        transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden", minHeight: 340, display: "flex", flexDirection: "column",
      }}
    >
      {hov && <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />}

      <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: hov ? "rgba(255,255,255,0.18)" : opt.color + "14", color: hov ? "#fff" : opt.color, fontSize: 10, fontWeight: 800, fontFamily: "Geist,sans-serif", letterSpacing: "0.1em", padding: "4px 12px", borderRadius: 999, border: `1px solid ${hov ? "rgba(255,255,255,0.3)" : opt.color + "28"}`, alignSelf: "flex-start", marginBottom: 24 }}>
        {opt.badge}
      </div>

      <div style={{ fontSize: 48, marginBottom: 18, lineHeight: 1 }}>{opt.icon}</div>
      <h2 style={{ fontFamily: "Geist,sans-serif", fontSize: 28, fontWeight: 800, color: hov ? "#fff" : C.navy, marginBottom: 12, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{opt.label}</h2>
      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: hov ? "rgba(255,255,255,0.78)" : C.textMid, lineHeight: 1.65, flex: 1, marginBottom: 24 }}>{opt.desc}</p>

      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {opt.stats.map((s, i) => (
          <span key={i} style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color: hov ? "rgba(255,255,255,0.85)" : opt.color, background: hov ? "rgba(255,255,255,0.15)" : opt.color + "12", border: `1px solid ${hov ? "rgba(255,255,255,0.25)" : opt.color + "25"}`, borderRadius: 999, padding: "3px 10px" }}>{s}</span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, color: hov ? "#fff" : opt.color, fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700 }}>
        {opt.action === "games" ? "Launch Games" : "Start Assessment"} →
      </div>
    </motion.div>
  );
}

// ── Capgemini options ──────────────────────────────────────────
function CapgeminiOptions({ setPage, onBack }) {
  const { C } = useTheme();
  const options = [
    { label: "Aptitude Games", desc: "6 interactive game types mirroring Capgemini's actual assessment — logical, memory, speed & more.", icon: "🎮", color: C.brand, secondaryColor: "#1d4ed8", action: "games", stats: ["6 Games", "135+ Questions", "5 Categories"], badge: "Interactive" },
    { label: "MCQ Assessment", desc: "Structured MCQ practice across Pseudocode, DBMS, Networking, Cloud & MS Office with instant feedback.", icon: "📋", color: "#003882", secondaryColor: "#0070AD", action: "quiz", stats: ["2 Sections", "4 Subjects", "Instant Feedback"], badge: "Most Asked" },
  ];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${C.navy} 0%, #1a3560 55%, #003882 100%)`, padding: "60px 32px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.1, backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div style={{ position: "absolute", top: -80, right: -60, width: 360, height: 360, borderRadius: "50%", background: "rgba(255,255,255,0.03)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: -40, left: "25%", width: 220, height: 220, borderRadius: "50%", background: `${C.coral}12`, zIndex: 0 }} />

        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.9)", fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, marginBottom: 36, padding: "8px 16px", borderRadius: 10 }}>
              ← All Companies
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 18, padding: "12px 20px" }}>
                <svg viewBox="0 0 120 40" width="100" height="34" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="#fff">cap</text>
                  <text x="42" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="rgba(255,255,255,0.65)">gemini</text>
                </svg>
              </div>
              <div style={{ width: 1, height: 48, background: "rgba(255,255,255,0.18)" }} />
              <div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 5 }}>Preparation Mode</div>
                <h1 style={{ fontFamily: "Instrument Serif,serif", fontSize: 50, fontWeight: 400, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  Choose your <em style={{ color: C.coral }}>mode</em>
                </h1>
              </div>
            </div>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.65 }}>
              Capgemini's assessment has two key components. Practice either independently or tackle both for full coverage.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="practice-content-pad" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))" }}>
          {options.map((opt, i) => (
            <PremiumOptionCard key={opt.action} opt={opt} index={i}
              onClick={() => opt.action === "games" ? setPage("__capgemini_games") : setPage("__capgemini_quiz")}
            />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ marginTop: 40, background: "#fff", borderRadius: 18, border: `1px solid ${C.border}`, padding: "22px 28px", display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
          <div style={{ fontSize: 28, flexShrink: 0 }}>💡</div>
          <div>
            <p style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 14, color: C.navy, margin: 0 }}>Capgemini prep tip</p>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, margin: "5px 0 0", lineHeight: 1.65 }}>
              Start with <strong>Aptitude Games</strong> to build speed and cognitive stamina, then move to <strong>MCQ Assessment</strong> for Pseudocode and Core CS. Both are essential for Capgemini's hiring process.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ── Company card ───────────────────────────────────────────────
function CompanyCard({ company, index, onClick }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      onClick={company.available ? onClick : undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        border: `1.5px solid ${hov && company.available ? company.color : C.border}`,
        borderRadius: 22, padding: "30px 26px",
        cursor: company.available ? "pointer" : "default",
        boxShadow: hov && company.available ? `0 16px 48px ${company.color}22` : "0 2px 12px rgba(15,31,61,0.05)",
        transform: hov && company.available ? "translateY(-6px)" : "none",
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden", opacity: company.available ? 1 : 0.7,
      }}
    >
      {/* Top accent line */}
      {company.available && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${company.color}, ${company.accentColor || company.color}80)`, opacity: hov ? 1 : 0.5, transition: "opacity 0.3s" }} />
      )}

      {/* Coming soon ribbon */}
      {!company.available && (
        <div style={{ position: "absolute", top: 14, right: -24, background: C.bgMuted, color: C.textMut, fontSize: 9, fontWeight: 800, fontFamily: "Geist,sans-serif", letterSpacing: "0.1em", padding: "4px 36px", transform: "rotate(35deg)", border: `1px solid ${C.border}` }}>
          SOON
        </div>
      )}

      {company.available ? (
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: `${C.success}12`, color: C.success, fontSize: 10, fontWeight: 800, fontFamily: "Geist,sans-serif", letterSpacing: "0.06em", padding: "3px 10px", borderRadius: 999, border: `1px solid ${C.success}30`, marginBottom: 18 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.success, display: "inline-block" }} />
          AVAILABLE NOW
        </div>
      ) : (
        <div style={{ marginBottom: 18, height: 22 }} />
      )}

      <div style={{ width: 60, height: 60, borderRadius: 15, background: company.color + "10", border: `1px solid ${company.color}20`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
        {company.logo}
      </div>

      <h3 style={{ fontFamily: "Geist,sans-serif", fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 8, letterSpacing: "-0.02em" }}>{company.name}</h3>

      {company.desc && <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMid, lineHeight: 1.6, marginBottom: 14 }}>{company.desc}</p>}

      {company.tags && (
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 18 }}>
          {company.tags.map(t => (
            <span key={t} style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700, color: company.color, background: company.color + "10", border: `1px solid ${company.color}25`, borderRadius: 999, padding: "2px 8px" }}>{t}</span>
          ))}
        </div>
      )}

      {company.available ? (
        <div style={{ display: "flex", alignItems: "center", gap: 4, color: company.color, fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 700 }}>Explore →</div>
      ) : (
        <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, fontWeight: 500 }}>Coming soon</div>
      )}
    </motion.div>
  );
}

// ── Company selection ──────────────────────────────────────────
function CompanySelectView({ onSelect }) {
  const { C } = useTheme();
  const available = COMPANIES.filter(c => c.available);
  const comingSoon = COMPANIES.filter(c => !c.available);

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .practice-hero-h1 { font-size: 62px !important; }
        .practice-content-pad { padding: 52px 32px !important; }
        .practice-hero-pad { padding: 60px 32px 52px !important; }
        .games-hero-h1 { font-size: 56px !important; }
        .games-hero-pad { padding: 56px 32px 52px !important; }
        .games-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important; }
        .games-filter-pills { flex-wrap: nowrap !important; }
        .games-hero-top { flex-direction: row !important; }
        .company-cards-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important; }
        .company-coming-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) !important; }
        .games-stats-strip { gap: 36px !important; }
        @media (max-width: 900px) {
          .games-hero-h1 { font-size: 40px !important; }
          .games-hero-top { flex-direction: column !important; align-items: flex-start !important; }
          .games-filter-pills { flex-wrap: wrap !important; }
          .company-cards-grid { grid-template-columns: 1fr !important; }
          .company-coming-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .practice-hero-h1 { font-size: 32px !important; }
          .practice-content-pad { padding: 20px 14px !important; }
          .practice-hero-pad { padding: 32px 14px 28px !important; }
          .games-hero-h1 { font-size: 28px !important; }
          .games-hero-pad { padding: 28px 14px 24px !important; }
          .games-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .games-filter-pills { flex-wrap: wrap !important; overflow-x: auto !important; }
          .capgemini-options-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .company-cards-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .company-coming-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .games-stats-strip { gap: 20px !important; padding-top: 20px !important; margin-top: 28px !important; }
          .games-stats-strip > div > div:first-child { font-size: 22px !important; }
          .game-card-inner { padding: 18px 16px 16px !important; }
          .game-card-icon { width: 44px !important; height: 44px !important; font-size: 20px !important; }
          .games-hero-filter-row { overflow-x: auto !important; -webkit-overflow-scrolling: touch !important; }
          .games-cta-banner { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
        }
      `}</style>
      {/* Hero */}
      <div className="practice-hero-pad" style={{ background: "#fff", borderBottom: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.4, backgroundImage: `linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div style={{ position: "absolute", top: "-15%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(${C.brand}10, transparent 65%)`, zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(${C.coral}10, transparent 65%)`, zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.coral}12`, border: `1px solid ${C.coral}30`, borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.coral, display: "inline-block" }} />
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: C.coral, letterSpacing: "0.05em" }}>Practice Arena</span>
            </div>

            <h1 className="practice-hero-h1" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: C.navy, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 18 }}>
              Choose a <em style={{ color: C.coral }}>company</em>
            </h1>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 17, color: C.textMid, lineHeight: 1.65, maxWidth: 520 }}>
              Select the company you're preparing for. Capgemini is fully live with games & MCQ assessment.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="practice-content-pad" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Available */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${C.success}12`, border: `1px solid ${C.success}25`, borderRadius: 999, padding: "4px 14px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.success }} />
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 800, color: C.success, letterSpacing: "0.08em" }}>AVAILABLE NOW</span>
            </div>
            <div style={{ flex: 1, height: 1, background: C.border }} />
          </div>
          <div className="company-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 20 }}>
            {available.map((c, i) => <CompanyCard key={c.id} company={c} index={i} onClick={() => onSelect(c.id)} />)}
          </div>
        </div>

        {/* Coming soon */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: C.bgMuted, border: `1px solid ${C.border}`, borderRadius: 999, padding: "4px 14px" }}>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 800, color: C.textMut, letterSpacing: "0.08em" }}>COMING SOON</span>
            </div>
            <div style={{ flex: 1, height: 1, background: C.border }} />
          </div>
          <div className="company-coming-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 20 }}>
            {comingSoon.map((c, i) => <CompanyCard key={c.id} company={c} index={i + available.length} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Root export ────────────────────────────────────────────────
export default function PracticeGamesPage({ setPage }) {
  const [view, setView] = useState("companies");

  const handleSetPage = (p) => {
    if (p === "__capgemini_games") setView("capgemini_games");
    else if (p === "__capgemini_quiz") setView("capgemini_quiz");
    else setPage(p);
  };

  return (
    <AnimatePresence mode="wait">
      {view === "companies" && (
        <motion.div key="companies" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <CompanySelectView onSelect={(id) => id === "capgemini" && setView("capgemini_options")} />
        </motion.div>
      )}
      {view === "capgemini_options" && (
        <motion.div key="cap_opts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <CapgeminiOptions setPage={handleSetPage} onBack={() => setView("companies")} />
        </motion.div>
      )}
      {view === "capgemini_games" && (
        <motion.div key="cap_games" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <GamesView setPage={setPage} onBack={() => setView("capgemini_options")} />
        </motion.div>
      )}
      {view === "capgemini_quiz" && (
        <motion.div key="cap_quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <CapgeminiQuiz onBack={() => setView("capgemini_options")} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
