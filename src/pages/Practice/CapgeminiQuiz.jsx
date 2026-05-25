import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuestions, subscribe } from "../../utils/quizStore";
import { useTheme } from "../../utils/ThemeContext";

function useQuestions() {
  const [qs, setQs] = useState(() => getQuestions());
  useEffect(() => {
    setQs(getQuestions());
    return subscribe(setQs);
  }, []);
  return qs;
}

function useTimer(active) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [active]);
  const reset = () => setSeconds(0);
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  return { seconds, fmt: fmt(seconds), reset };
}

const DIFF_COLOR = { Easy: "#10b981", Medium: "#f59e0b", Hard: "#ef4444" };

const SECTIONS = [
  {
    id: "pseudocode",
    label: "Actual Pseudocode Questions",
    shortLabel: "Pseudocode",
    icon: "⌨️",
    color: "#6366f1",
    colorLight: "#6366f115",
    colorBorder: "#6366f130",
    description: "Real Capgemini pseudocode MCQs — trace the output, follow the logic.",
    badge: "Most Asked",
    badgeColor: "#6366f1",
    topics: ["Output Tracing", "Loop Logic", "Conditionals", "Array Operations", "Function Calls"],
    difficulty: "Medium–Hard",
    questionCount: 25,
  },
  {
    id: "core",
    label: "Core Subjects",
    shortLabel: "Core Subjects",
    icon: "🎓",
    color: "#003882",
    colorLight: "#00388215",
    colorBorder: "#00388230",
    description: "Topic-wise practice across DBMS, Networking, Cloud and MS Office.",
    badge: "4 Subjects",
    badgeColor: "#003882",
    isParent: true,
    children: [
      { id: "dbms", label: "DBMS", fullLabel: "Database Management Systems", icon: "🗄️", color: "#0369a1", colorLight: "#0369a115", colorBorder: "#0369a130", description: "SQL queries, normalization, ER diagrams, transactions & more.", topics: ["SQL Queries", "Normalization", "ER Diagrams", "ACID Properties", "Joins & Keys"], difficulty: "Easy–Medium", questionCount: 20 },
      { id: "networking", label: "Networking", fullLabel: "Computer Networking", icon: "🌐", color: "#0891b2", colorLight: "#0891b215", colorBorder: "#0891b230", description: "OSI model, TCP/IP, protocols, subnetting, DNS & routing.", topics: ["OSI Model", "TCP/IP", "DNS & DHCP", "Subnetting", "Routing Protocols"], difficulty: "Easy–Medium", questionCount: 20 },
      { id: "cloud", label: "Cloud", fullLabel: "Cloud Computing", icon: "☁️", color: "#7c3aed", colorLight: "#7c3aed15", colorBorder: "#7c3aed30", description: "Cloud models, AWS/Azure/GCP basics, deployment & storage concepts.", topics: ["IaaS/PaaS/SaaS", "AWS Basics", "Azure Concepts", "Cloud Storage", "Virtualization"], difficulty: "Easy–Medium", questionCount: 15 },
      { id: "msoffice", label: "MS Office", fullLabel: "Microsoft Office Suite", icon: "📊", color: "#d97706", colorLight: "#d9770615", colorBorder: "#d9770630", description: "Excel formulas, Word features, PowerPoint & Outlook essentials.", topics: ["Excel Formulas", "Word Features", "PowerPoint", "Outlook", "Shortcuts"], difficulty: "Easy", questionCount: 15 },
    ],
  },
];

// ── Results Screen ─────────────────────────────────────────────
function ResultsScreen({ questions, answers, timeTaken, onRetry, onBack, sectionLabel }) {
  const { C } = useTheme();
  const correct = answers.filter((a, i) => a === questions[i].correct).length;
  const pct = Math.round((correct / questions.length) * 100);
  const wrong = questions.length - correct;

  const grade = pct >= 80 ? { label: "Excellent!", color: "#10b981", emoji: "🎉", bg: "linear-gradient(135deg,#10b981,#059669)" }
    : pct >= 60 ? { label: "Good Job!", color: C.brand, emoji: "👍", bg: `linear-gradient(135deg,${C.brand},#1d4ed8)` }
    : pct >= 40 ? { label: "Keep Going!", color: "#f59e0b", emoji: "💪", bg: "linear-gradient(135deg,#f59e0b,#d97706)" }
    : { label: "Keep Practicing!", color: "#ef4444", emoji: "📚", bg: "linear-gradient(135deg,#ef4444,#dc2626)" };

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .cq-hero-pad { padding: 52px 32px 48px !important; }
        .cq-body-pad { padding: 40px 24px !important; }
        .cq-score-pad { padding: 32px 28px !important; }
        .cq-stats-grid { grid-template-columns: repeat(3,1fr) !important; }
        .cq-h1 { font-size: 52px !important; }
        .cq-pct { font-size: 80px !important; }
        @media(max-width:600px){
          .cq-hero-pad { padding: 32px 16px 28px !important; }
          .cq-body-pad { padding: 20px 12px !important; }
          .cq-score-pad { padding: 20px 16px !important; gap: 16px !important; }
          .cq-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .cq-h1 { font-size: 34px !important; }
          .cq-pct { font-size: 56px !important; }
          .cq-action-btns { flex-direction: column !important; }
          .cq-action-btns > * { width: 100% !important; }
        }
      `}</style>
      {/* Results hero */}
      <div className="cq-hero-pad" style={{ background: grade.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
        <div style={{ position: "absolute", bottom: -30, left: "20%", width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 220, damping: 16 }}>
            <div style={{ fontSize: 64, marginBottom: 16, lineHeight: 1 }}>{grade.emoji}</div>
            <h1 className="cq-h1" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" }}>{grade.label}</h1>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", margin: 0 }}>{sectionLabel} · Assessment Complete</p>
          </motion.div>
        </div>
      </div>

      <div className="cq-body-pad" style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Score card */}
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}
          style={{ background: "#fff", borderRadius: 24, border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 24, boxShadow: "0 4px 24px rgba(15,31,61,0.08)" }}>
          <div className="cq-score-pad" style={{ padding: "32px 28px", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <div className="cq-pct" style={{ fontFamily: "Instrument Serif,serif", fontSize: 80, fontWeight: 400, color: grade.color, lineHeight: 1 }}>{pct}%</div>
              <div style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMut, marginTop: 4, fontWeight: 600 }}>Overall Score</div>
            </div>
            <div className="cq-stats-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {[
                { icon: "✅", label: "Correct", value: correct, color: "#10b981" },
                { icon: "❌", label: "Wrong", value: wrong, color: "#ef4444" },
                { icon: "⏱️", label: "Time", value: fmt(timeTaken), color: C.brand },
              ].map((s, i) => (
                <motion.div key={i} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.08 }}
                  style={{ background: C.bg, borderRadius: 14, padding: "16px 10px", textAlign: "center", border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontFamily: "Geist,sans-serif", fontWeight: 800, fontSize: 22, color: s.color }}>{s.value}</div>
                  <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, marginTop: 2, fontWeight: 600 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ borderTop: `1px solid ${C.border}`, padding: "16px 28px", background: C.bg }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: C.textMut }}>Accuracy</span>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: grade.color }}>{pct}%</span>
            </div>
            <div style={{ height: 8, background: C.border, borderRadius: 99, overflow: "hidden" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: "100%", background: grade.bg, borderRadius: 99 }} />
            </div>
          </div>
        </motion.div>

        {/* Question review */}
        <h3 style={{ fontFamily: "Instrument Serif,serif", fontSize: 26, color: C.navy, fontWeight: 400, marginBottom: 20 }}>Question Review</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
          {questions.map((q, idx) => {
            const userAns = answers[idx];
            const isCorrect = userAns === q.correct;
            return (
              <motion.div key={q.id || idx} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 + idx * 0.04 }}
                style={{ background: "#fff", borderRadius: 16, border: `2px solid ${isCorrect ? "#10b981" : "#ef4444"}30`, overflow: "hidden", boxShadow: "0 2px 8px rgba(15,31,61,0.04)" }}>
                <div style={{ padding: "10px 16px", background: isCorrect ? "#f0fdf4" : "#fef2f2", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 16 }}>{isCorrect ? "✅" : "❌"}</span>
                  <span style={{ fontFamily: "Geist,sans-serif", fontWeight: 800, fontSize: 12, color: isCorrect ? "#10b981" : "#ef4444" }}>Q{idx + 1}</span>
                  <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, marginLeft: "auto" }}>{q.topic} · {q.difficulty}</span>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  {q.imageUrl && <img src={q.imageUrl} alt={`Q${idx + 1}`} style={{ width: "100%", maxHeight: 160, objectFit: "contain", borderRadius: 8, marginBottom: 10, background: "#f9f9f7" }} />}
                  {q.text && <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.navy, marginBottom: 10, lineHeight: 1.5 }}>{q.text}</p>}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px" }}>
                    {q.options.map((opt, oi) => {
                      const isUser = oi === userAns;
                      const isRight = oi === q.correct;
                      const bg = isRight ? "#10b98118" : isUser && !isRight ? "#ef444418" : "transparent";
                      const color = isRight ? "#10b981" : isUser && !isRight ? "#ef4444" : C.textMid;
                      return (
                        <div key={oi} style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color, background: bg, borderRadius: 6, padding: "4px 8px", fontWeight: isRight || isUser ? 700 : 400 }}>
                          {["A","B","C","D"][oi]}. {opt}
                          {isRight && " ✓"}{isUser && !isRight && " ✗"}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="cq-action-btns" style={{ display: "flex", gap: 12 }}>
          <button onClick={onRetry}
            style={{ flex: 1, padding: "14px 24px", borderRadius: 12, border: "none", cursor: "pointer", background: C.navy, color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            🔄 Retry
          </button>
          <button onClick={onBack}
            style={{ padding: "14px 24px", borderRadius: 12, border: `1.5px solid ${C.border}`, cursor: "pointer", background: "#fff", color: C.navy, fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: 600 }}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Quiz Engine ────────────────────────────────────────────────
function QuizEngine({ questions, sectionLabel, accentColor, onBack }) {
  const { C } = useTheme();
  const [phase, setPhase] = useState("ready");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const timer = useTimer(phase === "quiz");
  const color = accentColor || "#003882";

  const startQuiz = () => {
    setCurrent(0); setSelected(null); setAnswers([]); setRevealed(false);
    setPhase("quiz");
  };

  const handleSelect = (i) => { if (!revealed) setSelected(i); };
  const handleReveal = () => { if (selected !== null) setRevealed(true); };

  const handleNext = () => {
    const newAnswers = [...answers, selected ?? -1];
    if (current + 1 < questions.length) {
      setAnswers(newAnswers);
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setAnswers(newAnswers);
      setTimeTaken(timer.seconds);
      setPhase("results");
    }
  };

  if (phase === "results") return <ResultsScreen questions={questions} answers={answers} timeTaken={timeTaken} sectionLabel={sectionLabel} onRetry={startQuiz} onBack={onBack} />;

  if (phase === "ready") {
    if (questions.length === 0) {
      return (
        <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ background: "#fff", borderRadius: 24, padding: "56px 48px", textAlign: "center", maxWidth: 440, boxShadow: "0 8px 40px rgba(15,31,61,0.1)", border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 60, marginBottom: 20 }}>🚧</div>
            <h2 style={{ fontFamily: "Instrument Serif,serif", fontSize: 32, color: C.navy, fontWeight: 400, marginBottom: 12 }}>Questions Coming Soon</h2>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid, marginBottom: 28, lineHeight: 1.65 }}>
              This section is being prepared by our admin team. Check back soon!
            </p>
            <button onClick={onBack} style={{ padding: "12px 28px", borderRadius: 12, border: "none", cursor: "pointer", background: color, color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700 }}>
              ← Go Back
            </button>
          </motion.div>
        </div>
      );
    }

    const uniqueTopics = [...new Set(questions.map(q => q.topic))].length;

    return (
      <div style={{ background: C.bg, minHeight: "100vh" }}>
        {/* Ready hero */}
        <div style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`, padding: "clamp(24px,5vw,52px) clamp(16px,4vw,32px) clamp(24px,5vw,48px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
          <div style={{ position: "absolute", bottom: -20, left: "30%", width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <button onClick={onBack} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, marginBottom: 28, padding: "7px 14px", borderRadius: 10 }}>
                ← Back
              </button>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10, fontFamily: "Geist,sans-serif" }}>
                {sectionLabel}
              </div>
              <h1 style={{ fontFamily: "Instrument Serif,serif", fontSize: 48, fontWeight: 400, color: "#fff", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 12 }}>
                Ready to <em>practice?</em>
              </h1>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
                {questions.length} questions · Self-paced · Instant feedback
              </p>
            </motion.div>
          </div>
        </div>

        <div className="ah-body-pad" style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(180px,100%),1fr))", gap: 16, marginBottom: 32 }}>
            {[
              { icon: "📝", label: "Questions", value: questions.length },
              { icon: "🏷️", label: "Topics", value: uniqueTopics },
              { icon: "⏱️", label: "Pacing", value: "Self-paced" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}
                style={{ background: "#fff", borderRadius: 18, padding: "22px 16px", textAlign: "center", border: `1px solid ${C.border}`, boxShadow: "0 2px 12px rgba(15,31,61,0.05)" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "Geist,sans-serif", fontWeight: 800, fontSize: 22, color: C.navy }}>{s.value}</div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, marginTop: 3, fontWeight: 600 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Tip */}
          <div style={{ background: color + "10", border: `1px solid ${color}25`, borderRadius: 14, padding: "16px 20px", marginBottom: 24, display: "flex", gap: 12 }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.navy, margin: 0, lineHeight: 1.6 }}>
              Choose an answer and click <strong>Reveal Answer</strong> to see the correct option. Use <strong>Skip</strong> to move past questions you want to revisit later.
            </p>
          </div>

          <button onClick={startQuiz}
            style={{ width: "100%", padding: "16px 24px", borderRadius: 14, border: "none", cursor: "pointer", background: `linear-gradient(135deg, ${color}, ${color}cc)`, color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, boxShadow: `0 8px 28px ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            🚀 Start Practice
          </button>
        </div>
      </div>
    );
  }

  // Active quiz
  const q = questions[current];
  const progress = ((current) / questions.length) * 100;
  const isCorrect = selected === q.correct;

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      {/* Quiz top bar */}
      <div style={{ background: "#fff", borderBottom: `1px solid ${C.border}`, padding: "14px 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, gap: 16 }}>
            <button onClick={onBack} style={{ background: "none", border: `1px solid ${C.border}`, cursor: "pointer", color: C.textMid, fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 8 }}>
              ✕ Exit
            </button>
            <div style={{ flex: 1, textAlign: "center" }}>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, fontWeight: 700 }}>
                {current + 1} <span style={{ color: C.textMut, fontWeight: 400 }}>/ {questions.length}</span>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: color + "12", border: `1px solid ${color}25`, borderRadius: 999, padding: "5px 12px" }}>
              <span style={{ fontSize: 14 }}>⏱</span>
              <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 13, color, fontWeight: 700 }}>{timer.fmt}</span>
            </div>
          </div>
          <div style={{ height: 5, background: C.border, borderRadius: 99, overflow: "hidden" }}>
            <motion.div animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ height: "100%", background: `linear-gradient(90deg, ${color}, ${color}aa)`, borderRadius: 99 }} />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "28px 24px" }}>
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
            {/* Tags */}
            <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color, background: color + "15", borderRadius: 20, padding: "3px 10px", border: `1px solid ${color}25` }}>{sectionLabel}</span>
              {q.topic && <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 600, color: C.textMid, background: C.bgMuted, borderRadius: 20, padding: "3px 10px", border: `1px solid ${C.border}` }}>{q.topic}</span>}
              {q.difficulty && <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color: DIFF_COLOR[q.difficulty] || C.textMid, background: (DIFF_COLOR[q.difficulty] || C.textMid) + "18", borderRadius: 20, padding: "3px 10px", border: `1px solid ${(DIFF_COLOR[q.difficulty] || C.textMid)}25` }}>{q.difficulty}</span>}
            </div>

            {/* Question card */}
            <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 22, boxShadow: "0 2px 12px rgba(15,31,61,0.06)" }}>
              {q.imageUrl && <img src={q.imageUrl} alt={`Question ${current + 1}`} style={{ width: "100%", maxHeight: 360, objectFit: "contain", display: "block", background: "#f9f9f7" }} />}
              {q.text && <div style={{ padding: "20px 22px", fontFamily: "Geist,sans-serif", fontSize: 16, color: C.navy, lineHeight: 1.65, fontWeight: 500 }}>{q.text}</div>}
            </div>

            {/* Options */}
            <div style={{ display: "grid", gap: 10, marginBottom: 20 }}>
              {q.options.map((opt, i) => {
                let bg = "#fff", border = `1.5px solid ${C.border}`, col = C.navy, shadow = "none";
                if (revealed) {
                  if (i === q.correct) { bg = "#f0fdf4"; border = `2px solid #10b981`; col = "#10b981"; }
                  else if (i === selected && i !== q.correct) { bg = "#fef2f2"; border = `2px solid #ef4444`; col = "#ef4444"; }
                } else if (selected === i) {
                  bg = color + "10"; border = `2px solid ${color}`; col = color;
                  shadow = `0 4px 16px ${color}20`;
                }
                return (
                  <motion.button key={i}
                    whileHover={!revealed ? { scale: 1.005 } : {}}
                    whileTap={!revealed ? { scale: 0.998 } : {}}
                    onClick={() => handleSelect(i)}
                    style={{
                      width: "100%", padding: "14px 18px", borderRadius: 14, border, cursor: revealed ? "default" : "pointer",
                      background: bg, color: col, fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: selected === i || (revealed && i === q.correct) ? 600 : 400,
                      display: "flex", alignItems: "center", gap: 14, textAlign: "left", transition: "all .2s",
                      boxShadow: shadow,
                    }}
                  >
                    <span style={{
                      width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      background: revealed && i === q.correct ? "#10b981" : revealed && i === selected && i !== q.correct ? "#ef4444" : selected === i ? color : C.bgMuted,
                      color: (revealed && (i === q.correct || i === selected)) || selected === i ? "#fff" : C.textMut,
                      fontWeight: 800, fontSize: 13, transition: "all .2s",
                    }}>
                      {["A","B","C","D"][i]}
                    </span>
                    <span style={{ flex: 1 }}>{opt}</span>
                    {revealed && i === q.correct && <span style={{ fontSize: 18, flexShrink: 0 }}>✅</span>}
                    {revealed && i === selected && i !== q.correct && <span style={{ fontSize: 18, flexShrink: 0 }}>❌</span>}
                  </motion.button>
                );
              })}
            </div>

            {/* Feedback */}
            {revealed && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                style={{ borderRadius: 14, padding: "14px 18px", marginBottom: 16, background: isCorrect ? "#f0fdf4" : "#fef2f2", border: `1.5px solid ${isCorrect ? "#10b981" : "#ef4444"}40` }}>
                <span style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 14, color: isCorrect ? "#10b981" : "#ef4444" }}>
                  {isCorrect ? "🎉 Correct! Well done!" : `❌ Incorrect. Correct answer: ${["A","B","C","D"][q.correct]}. ${q.options[q.correct]}`}
                </span>
              </motion.div>
            )}

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 12 }}>
              {!revealed ? (
                <>
                  <button onClick={handleReveal} disabled={selected === null}
                    style={{ flex: 1, padding: "14px 24px", borderRadius: 12, border: "none", cursor: selected === null ? "not-allowed" : "pointer", background: selected !== null ? `linear-gradient(135deg, ${color}, ${color}cc)` : C.border, color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: 700, transition: "all .2s", boxShadow: selected !== null ? `0 6px 20px ${color}35` : "none" }}>
                    Reveal Answer
                  </button>
                  <button onClick={handleNext}
                    style={{ padding: "14px 20px", borderRadius: 12, border: `1.5px solid ${C.border}`, cursor: "pointer", background: "#fff", color: C.textMid, fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 600 }}>
                    Skip →
                  </button>
                </>
              ) : (
                <button onClick={handleNext}
                  style={{ flex: 1, padding: "14px 24px", borderRadius: 12, border: "none", cursor: "pointer", background: `linear-gradient(135deg, ${color}, ${color}cc)`, color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 15, fontWeight: 700, boxShadow: `0 6px 20px ${color}35` }}>
                  {current + 1 < questions.length ? "Next Question →" : "See Results →"}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Subject card ───────────────────────────────────────────────
function SubjectCard({ subject, index, onClick }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? `linear-gradient(135deg, ${subject.color} 0%, ${subject.color}cc 100%)` : "#fff",
        border: `2px solid ${hov ? subject.color : C.border}`,
        borderRadius: 22, padding: 28, cursor: "pointer",
        boxShadow: hov ? `0 20px 56px ${subject.color}30` : "0 2px 12px rgba(15,31,61,0.05)",
        transform: hov ? "translateY(-6px)" : "none",
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden",
      }}
    >
      {hov && <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />}

      <div style={{ fontSize: 38, marginBottom: 14 }}>{subject.icon}</div>
      <h3 style={{ fontFamily: "Geist,sans-serif", fontSize: 20, fontWeight: 800, color: hov ? "#fff" : C.navy, marginBottom: 8, letterSpacing: "-0.02em" }}>{subject.fullLabel}</h3>
      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: hov ? "rgba(255,255,255,0.78)" : C.textMid, lineHeight: 1.6, marginBottom: 16 }}>{subject.description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
        {subject.topics.slice(0, 3).map(t => (
          <span key={t} style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700, color: hov ? "#fff" : subject.color, background: hov ? "rgba(255,255,255,0.18)" : subject.colorLight, border: `1px solid ${hov ? "rgba(255,255,255,0.28)" : subject.colorBorder}`, borderRadius: 999, padding: "2px 8px" }}>{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: hov ? "rgba(255,255,255,0.6)" : C.textMut }}>{subject.questionCount} questions · {subject.difficulty}</span>
        <span style={{ fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 700, color: hov ? "#fff" : subject.color }}>Start →</span>
      </div>
    </motion.div>
  );
}

// ── Core Subjects hub ──────────────────────────────────────────
function CoreSubjectsHub({ onBack, onSelectSubject }) {
  const { C } = useTheme();
  const coreSection = SECTIONS.find(s => s.id === "core");

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #003882 0%, #0369a1 100%)", padding: "clamp(24px,5vw,52px) clamp(16px,4vw,32px) clamp(24px,5vw,48px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -20, left: "30%", width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.1, backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button onClick={onBack} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, marginBottom: 28, padding: "7px 14px", borderRadius: 10 }}>
              ← Back to Assessment
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
              <div style={{ width: 60, height: 60, borderRadius: 18, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>🎓</div>
              <div>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Capgemini Assessment</p>
                <h1 style={{ fontFamily: "Instrument Serif,serif", fontSize: 48, fontWeight: 400, color: "#fff", lineHeight: 1.08, margin: "4px 0 0" }}>Core Subjects</h1>
              </div>
            </div>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 15, color: "rgba(255,255,255,0.68)", maxWidth: 540, lineHeight: 1.65 }}>
              Choose a subject below and practice topic-specific MCQs with instant feedback.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(20px,4vw,48px) clamp(16px,4vw,32px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px,100%),1fr))", gap: 22 }}>
          {coreSection.children.map((subject, i) => (
            <SubjectCard key={subject.id} subject={subject} index={i} onClick={() => onSelectSubject(subject)} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section card ───────────────────────────────────────────────
function SectionCard({ section, index, onClick }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? `linear-gradient(135deg, ${section.color} 0%, ${section.color}cc 100%)` : "#fff",
        border: `2px solid ${hov ? section.color : C.border}`,
        borderRadius: 24, padding: 36, cursor: "pointer",
        boxShadow: hov ? `0 24px 64px ${section.color}30` : "0 2px 12px rgba(15,31,61,0.05)",
        transform: hov ? "translateY(-6px)" : "none",
        transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden", minHeight: 300, display: "flex", flexDirection: "column",
      }}
    >
      {hov && <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />}

      {/* Badge */}
      <div style={{ display: "inline-flex", alignItems: "center", alignSelf: "flex-start", background: hov ? "rgba(255,255,255,0.2)" : section.colorLight, color: hov ? "#fff" : section.badgeColor, fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", padding: "4px 12px", borderRadius: 999, border: `1px solid ${hov ? "rgba(255,255,255,0.3)" : section.colorBorder}`, marginBottom: 22 }}>
        {section.badge}
      </div>

      <div style={{ fontSize: 48, marginBottom: 18 }}>{section.icon}</div>
      <h2 style={{ fontFamily: "Geist,sans-serif", fontSize: 24, fontWeight: 800, color: hov ? "#fff" : C.navy, marginBottom: 10, letterSpacing: "-0.03em", lineHeight: 1.15 }}>{section.label}</h2>
      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: hov ? "rgba(255,255,255,0.78)" : C.textMid, lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{section.description}</p>

      {section.topics && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {section.topics.slice(0, 4).map(t => (
            <span key={t} style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700, color: hov ? "#fff" : section.color, background: hov ? "rgba(255,255,255,0.18)" : section.colorLight, border: `1px solid ${hov ? "rgba(255,255,255,0.28)" : section.colorBorder}`, borderRadius: 999, padding: "3px 9px" }}>{t}</span>
          ))}
        </div>
      )}

      {section.isParent && (
        <div style={{ display: "flex", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
          {section.children.map(c => (
            <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 600, color: hov ? "rgba(255,255,255,0.85)" : C.textMid }}>
              <span>{c.icon}</span><span>{c.label}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 6, color: hov ? "#fff" : section.color, fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 700 }}>
        {section.isParent ? "Browse Subjects →" : "Start Practice →"}
      </div>
    </motion.div>
  );
}

// ── Assessment Hub ─────────────────────────────────────────────
function AssessmentHub({ onBack, onSelect }) {
  const { C } = useTheme();
  const totalQ = SECTIONS.reduce((acc, s) => {
    if (s.isParent) return acc + s.children.reduce((a, c) => a + c.questionCount, 0);
    return acc + (s.questionCount || 0);
  }, 0);

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .ah-hero-pad { padding: 56px 32px 52px !important; }
        .ah-body-pad { padding: 40px 24px !important; }
        .ah-h1 { font-size: 56px !important; }
        .ah-sections-grid { grid-template-columns: repeat(auto-fill,minmax(min(300px,100%),1fr)) !important; }
        @media(max-width:600px){
          .ah-hero-pad { padding: 32px 16px 28px !important; }
          .ah-body-pad { padding: 20px 12px !important; }
          .ah-h1 { font-size: 34px !important; }
          .ah-sections-grid { grid-template-columns: 1fr !important; }
          .ah-stats-flex { flex-wrap: wrap !important; gap: 12px !important; }
        }
      `}</style>
      {/* Dark hero */}
      <div className="ah-hero-pad" style={{ background: "linear-gradient(135deg, #003882 0%, #1a3560 55%, #2563eb 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.12, backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.04)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: -30, left: "22%", width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.03)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "35%", right: "18%", width: 100, height: 100, borderRadius: "50%", background: `${C.coral}18`, zIndex: 0 }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.9)", fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, marginBottom: 32, padding: "8px 16px", borderRadius: 10 }}>
              ← Back to Capgemini
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: "10px 14px" }}>
                <svg viewBox="0 0 120 40" width="80" height="27" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="#fff">cap</text>
                  <text x="42" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="rgba(255,255,255,0.65)">gemini</text>
                </svg>
              </div>
              <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.2)" }} />
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Assessment Practice</p>
            </div>

            <h1 className="ah-h1" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16, maxWidth: 680 }}>
              Choose your <em style={{ color: C.coral }}>practice section</em>
            </h1>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 520, lineHeight: 1.65 }}>
              Targeted MCQ practice covering every topic of the Capgemini assessment — pseudocode logic to core computer science.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            style={{ display: "flex", gap: 40, marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.14)", flexWrap: "wrap" }}>
            {[{ value: "2", label: "Practice Sections" }, { value: "4", label: "Core Subjects" }, { value: `${totalQ}+`, label: "Total Questions" }, { value: "Instant", label: "Feedback" }].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "Instrument Serif,serif", fontSize: 32, color: "#fff", fontWeight: 400 }}>{s.value}</div>
                <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section cards */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(20px,4vw,52px) clamp(16px,4vw,32px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(380px,100%),1fr))", gap: 24 }}>
          {SECTIONS.map((section, i) => (
            <SectionCard key={section.id} section={section} index={i} onClick={() => onSelect(section.id)} />
          ))}
        </div>

        {/* Tip card */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          style={{ marginTop: 40, background: "#fff", borderRadius: 20, border: `1px solid ${C.border}`, padding: "24px 28px", display: "flex", alignItems: "flex-start", gap: 18, flexWrap: "wrap", boxShadow: "0 2px 12px rgba(15,31,61,0.05)" }}>
          <div style={{ fontSize: 32, flexShrink: 0 }}>💡</div>
          <div>
            <p style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 14, color: C.navy, margin: 0 }}>Pro tip for Capgemini prep</p>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, margin: "6px 0 0", lineHeight: 1.65 }}>
              Start with <strong>Pseudocode Questions</strong> — they carry the most weight in Capgemini's Programming Logic round. Then tackle Core Subjects one by one. Each section provides instant feedback so you learn from every mistake in real time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ── Root Export ────────────────────────────────────────────────
export default function CapgeminiQuiz({
  onBack }) {
  const { C } = useTheme();
  const allQuestions = useQuestions();
  const [view, setView] = useState("hub");
  const [activeSubject, setActiveSubject] = useState(null);

  const handleSelect = (sectionId) => {
    if (sectionId === "pseudocode") setView("pseudocode");
    else if (sectionId === "core") setView("core");
  };

  const handleSelectSubject = (subject) => {
    setActiveSubject(subject);
    setView("subject");
  };

  const getSubjectQuestions = (subject) => {
    const filtered = allQuestions.filter(q =>
      q.topic?.toLowerCase().includes(subject.id) ||
      subject.topics.some(t => q.topic?.toLowerCase().includes(t.toLowerCase().split(" ")[0]))
    );
    return filtered.length > 0 ? filtered : allQuestions;
  };

  return (
    <AnimatePresence mode="wait">
      {view === "hub" && (
        <motion.div key="hub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <AssessmentHub onBack={onBack} onSelect={handleSelect} />
        </motion.div>
      )}
      {view === "pseudocode" && (
        <motion.div key="pseudo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <QuizEngine questions={allQuestions} sectionLabel="Pseudocode Questions" accentColor="#6366f1" onBack={() => setView("hub")} />
        </motion.div>
      )}
      {view === "core" && (
        <motion.div key="core" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <CoreSubjectsHub onBack={() => setView("hub")} onSelectSubject={handleSelectSubject} />
        </motion.div>
      )}
      {view === "subject" && activeSubject && (
        <motion.div key={`subject-${activeSubject.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <QuizEngine questions={getSubjectQuestions(activeSubject)} sectionLabel={activeSubject.fullLabel} accentColor={activeSubject.color} onBack={() => setView("core")} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
