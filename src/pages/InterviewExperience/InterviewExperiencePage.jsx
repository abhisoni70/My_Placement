import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../utils/ThemeContext";
import { InView } from "../../utils";
import SectionHeader from "../../components/ui/SectionHeader";
import Button from "../../components/ui/Button";

// ── Constants ─────────────────────────────────────────────────
const COMPANY_LIST = [
  { name: "TCS",        color: "#1a73e8" },
  { name: "Infosys",    color: "#006EAF" },
  { name: "Wipro",      color: "#7a1ea1" },
  { name: "Accenture",  color: "#a100ff" },
  { name: "Capgemini",  color: "#003882" },
  { name: "Cognizant",  color: "#1961ac" },
  { name: "HCL",        color: "#e2231a" },
  { name: "Other",      color: "#64748b" },
];

const ROUND_LABELS = ["HR", "Technical", "Coding", "Managerial", "Group Discussion", "Case Study"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const YEARS  = Array.from({ length: 6 }, (_, i) => String(2020 + i));

const OUTCOME_COLORS = {
  Selected:   { bg: "#d1fae5", text: "#065f46", border: "#6ee7b7" },
  Rejected:   { bg: "#fee2e2", text: "#991b1b", border: "#fca5a5" },
  Waitlisted: { bg: "#fef3c7", text: "#92400e", border: "#fcd34d" },
};

const DIFF_COLORS = {
  Easy:   { bg: "#d1fae5", text: "#065f46" },
  Medium: { bg: "#fef3c7", text: "#92400e" },
  Hard:   { bg: "#fee2e2", text: "#991b1b" },
};

// ── Seed Data ─────────────────────────────────────────────────
const SEED_DATA = [
  {
    id: "seed-1",
    company: "TCS",
    role: "Software Engineer",
    ctc: "3.36 LPA",
    month: "Aug", year: "2024",
    rounds: 3,
    difficulty: "Easy",
    outcome: "Selected",
    roundBreakdown: [
      { label: "Coding", content: "Two DSA questions — array rotation and string palindrome. Time limit was 60 min, both were easy-medium level. Hackerrank platform." },
      { label: "Technical", content: "Asked about OOPs concepts, DBMS normalization, and basic OS questions like deadlock. Also quizzed on my final year project." },
      { label: "HR", content: "Standard questions — introduce yourself, why TCS, strengths/weaknesses, relocation comfort. Very chill and friendly interviewer." },
    ],
    experience: "Overall a very smooth process. TCS is known for a structured recruitment and they keep to it. The coding round is the real filter — if you clear that, the rest is mostly a formality. Campus drive was well-organized with clear communication at each step.",
    tips: "Focus on basic DSA and OOPs. Don't overthink it. TCS values attitude as much as technical skills. Keep your project explanation crisp and be ready to connect it to real-world applications.",
    name: "Rahul Sharma",
    college: "NIT Trichy",
    postedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 14,
  },
  {
    id: "seed-2",
    company: "Infosys",
    role: "Systems Engineer",
    ctc: "3.6 LPA",
    month: "Oct", year: "2024",
    rounds: 2,
    difficulty: "Easy",
    outcome: "Selected",
    roundBreakdown: [
      { label: "Technical", content: "Basic Java and Python questions, SQL queries, write a simple program to find factorial. No tricky puzzles — just fundamentals." },
      { label: "HR", content: "Why Infosys, 5-year plan, teamwork examples. They check for communication skills heavily." },
    ],
    experience: "Infosys InfyTQ platform preparation helped a lot. The actual interview was easier than I expected. They focus heavily on communication and attitude. Technical bar is moderate — know your basics well. Good onboarding process, got joining date within 3 weeks of selection.",
    tips: "Complete InfyTQ certification before the interview — it directly helps. Practice SQL, basic Java/Python, and be fluent in at least one language. HR round is important, don't underestimate it.",
    name: "Priya Menon",
    college: "VIT Vellore",
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 21,
  },
  {
    id: "seed-3",
    company: "Accenture",
    role: "Associate Software Engineer",
    ctc: "4.5 LPA",
    month: "Sep", year: "2024",
    rounds: 3,
    difficulty: "Medium",
    outcome: "Selected",
    roundBreakdown: [
      { label: "Coding", content: "One DSA problem (linked list reversal) and one SQL query (find 2nd highest salary). 45-minute window. Had to explain my approach before coding." },
      { label: "Technical", content: "Deep dive into my projects, system design basics for a URL shortener, SDLC models, Agile methodology. Also asked about REST APIs." },
      { label: "HR", content: "Situation-based questions using STAR format. Role-play scenario of handling a difficult client. Behavioral assessment was key here." },
    ],
    experience: "Accenture interviews are more comprehensive than TCS/Infosys. They want people who can think, not just memorize. The technical round was genuinely interesting — felt more like a conversation than an interrogation. Panel was experienced and asked thoughtful follow-ups.",
    tips: "Know your projects inside-out. Be ready to discuss trade-offs in design decisions. STAR format is crucial for HR. They value consulting mindset — think about business impact, not just code.",
    name: "Aditya Kulkarni",
    college: "BITS Pilani",
    postedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 38,
  },
  {
    id: "seed-4",
    company: "Wipro",
    role: "Project Engineer",
    ctc: "3.5 LPA",
    month: "Jul", year: "2024",
    rounds: 4,
    difficulty: "Medium",
    outcome: "Rejected",
    roundBreakdown: [
      { label: "Coding", content: "Two problems — string manipulation and basic graph traversal. Completed both but one had a wrong edge case I missed." },
      { label: "Technical", content: "OOPs, DBMS, networking basics. Also asked to write a binary search implementation on whiteboard." },
      { label: "Managerial", content: "Questions about handling conflict, leadership experience, and a case study about project delays. I fumbled the case study part." },
      { label: "HR", content: "Cleared this round but was informed the overall assessment didn't meet the bar for this batch." },
    ],
    experience: "Got rejected in the final stage which was disappointing after 4 rounds. The process was fair but long. The managerial round caught me off guard — I hadn't prepared for case studies at all. Wipro's process is thorough but the feedback loop is slow, waited 2 weeks to hear back.",
    tips: "Don't neglect the managerial round. Practice case studies and situational questions. The coding bar is moderate but edge cases matter — test your code thoroughly before submitting.",
    name: "Sneha Iyer",
    college: "SRM Institute",
    postedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 29,
  },
  {
    id: "seed-5",
    company: "Capgemini",
    role: "Analyst",
    ctc: "4.0 LPA",
    month: "Nov", year: "2024",
    rounds: 3,
    difficulty: "Hard",
    outcome: "Selected",
    roundBreakdown: [
      { label: "Technical", content: "Heavy on algorithms — sliding window, dynamic programming basics, and a system design question for a chat application. 2-hour slot." },
      { label: "Group Discussion", content: "Topic: AI replacing jobs. 8 candidates in the group. Need to balance speaking time and listening. They evaluate leadership without dominance." },
      { label: "HR", content: "Vision, adaptability, how you handle stress. Detailed questions about past internship and what I learned from failures." },
    ],
    experience: "Capgemini was the toughest interview I appeared for. Their technical bar is genuinely high compared to other service companies. The GD round was intense with very sharp co-candidates. But the interviewers were fair and the overall vibe was professional. Joining timeline was well-communicated.",
    tips: "For Capgemini, don't just prepare basics — go deeper into algorithms and system design. GD is a real differentiator; practice speaking concisely and backing points with facts. Research Capgemini's service lines before the HR round.",
    name: "Vikram Nair",
    college: "Manipal Institute",
    postedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    helpful: 45,
  },
];

// ── Helpers ───────────────────────────────────────────────────
function timeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 60)  return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30)  return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function companyColor(name) {
  return COMPANY_LIST.find(c => c.name === name)?.color || "#64748b";
}

function loadExperiences() {
  try {
    const stored = JSON.parse(localStorage.getItem("ap-interview-exp") || "[]");
    // Merge seed + user, seed at bottom
    const ids = new Set(stored.map(e => e.id));
    return [...stored, ...SEED_DATA.filter(s => !ids.has(s.id))];
  } catch {
    return SEED_DATA;
  }
}

function saveExperience(exp) {
  try {
    const stored = JSON.parse(localStorage.getItem("ap-interview-exp") || "[]");
    localStorage.setItem("ap-interview-exp", JSON.stringify([exp, ...stored]));
  } catch {}
}

// ── Sub-components ─────────────────────────────────────────────

function Pill({ children, bg, text, border }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 700,
      fontFamily: "Geist,sans-serif",
      letterSpacing: "0.03em",
      background: bg,
      color: text,
      border: border ? `1px solid ${border}` : "none",
    }}>
      {children}
    </span>
  );
}

function ExperienceCard({ exp, onClick, compact }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);
  const oc = OUTCOME_COLORS[exp.outcome] || OUTCOME_COLORS.Selected;
  const dc = DIFF_COLORS[exp.difficulty] || DIFF_COLORS.Medium;
  const cc = companyColor(exp.company);

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: C.bgCard,
        border: `1.5px solid ${hov ? cc : C.border}`,
        borderRadius: 20,
        padding: compact ? "18px 20px" : "24px",
        cursor: "pointer",
        transition: "border-color 0.22s, box-shadow 0.22s",
        boxShadow: hov ? `0 8px 32px ${cc}20` : `0 2px 8px rgba(0,0,0,0.04)`,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            borderRadius: 10,
            background: cc + "18",
            border: `1.5px solid ${cc}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Instrument Serif,serif",
            fontWeight: 700, fontSize: 15,
            color: cc,
            flexShrink: 0,
          }}>
            {exp.company[0]}
          </div>
          <div>
            <div style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 14, color: C.text, letterSpacing: "-0.01em" }}>
              {exp.company}
            </div>
            <div style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut }}>
              {exp.role}
            </div>
          </div>
        </div>
        <Pill bg={oc.bg} text={oc.text} border={oc.border}>{exp.outcome}</Pill>
      </div>

      {/* Pills row */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        <Pill bg={dc.bg} text={dc.text}>{exp.difficulty}</Pill>
        <Pill bg={C.bgMuted} text={C.textMid}>{exp.rounds} Round{exp.rounds > 1 ? "s" : ""}</Pill>
        <Pill bg={C.bgMuted} text={C.textMut}>{exp.month} {exp.year}</Pill>
      </div>

      {/* Snippet */}
      {!compact && (
        <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, margin: 0 }}>
          {exp.experience.length > 120 ? exp.experience.slice(0, 120) + "…" : exp.experience}
          {exp.experience.length > 120 && (
            <span style={{ color: cc, fontWeight: 600 }}> Read more</span>
          )}
        </p>
      )}

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 4, borderTop: `1px solid ${C.border}` }}>
        <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut }}>
          {exp.name}{exp.college ? ` · ${exp.college}` : ""}
        </span>
        <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 11, color: C.textMut }}>
          {timeAgo(exp.postedAt)}
        </span>
      </div>
    </motion.div>
  );
}

function DetailModal({ exp, onClose }) {
  const { C } = useTheme();
  const [helpful, setHelpful] = useState(exp.helpful || 0);
  const [voted, setVoted] = useState(false);
  const oc = OUTCOME_COLORS[exp.outcome] || OUTCOME_COLORS.Selected;
  const dc = DIFF_COLORS[exp.difficulty] || DIFF_COLORS.Medium;
  const cc = companyColor(exp.company);

  const handleVote = () => {
    if (voted) return;
    setHelpful(h => h + 1);
    setVoted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          style={{
            background: C.bgCard,
            borderRadius: 24,
            width: "100%",
            maxWidth: 680,
            maxHeight: "90vh",
            overflowY: "auto",
            border: `1.5px solid ${C.border}`,
            boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
            padding: "32px",
            position: "relative",
          }}
        >
          {/* Close btn */}
          <button onClick={onClose} style={{
            position: "absolute", top: 20, right: 20,
            background: C.bgMuted, border: `1px solid ${C.border}`,
            borderRadius: 10, width: 32, height: 32,
            cursor: "pointer", fontSize: 16, color: C.textMid,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <div style={{
              width: 50, height: 50, borderRadius: 14,
              background: cc + "18", border: `2px solid ${cc}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Instrument Serif,serif", fontSize: 22, fontWeight: 700, color: cc,
            }}>{exp.company[0]}</div>
            <div>
              <h2 style={{ fontFamily: "Instrument Serif,serif", fontSize: 26, fontWeight: 400, color: C.text, margin: 0, letterSpacing: "-0.02em" }}>
                {exp.company}
              </h2>
              <div style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMut }}>
                {exp.role} · {exp.month} {exp.year}
              </div>
            </div>
          </div>

          {/* Badges */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            <Pill bg={oc.bg} text={oc.text} border={oc.border}>{exp.outcome}</Pill>
            <Pill bg={dc.bg} text={dc.text}>{exp.difficulty}</Pill>
            <Pill bg={C.bgMuted} text={C.textMid}>{exp.rounds} Rounds</Pill>
            {exp.ctc && <Pill bg={C.bgMuted} text={C.success}>💰 {exp.ctc}</Pill>}
            <Pill bg={C.bgMuted} text={C.textMut}>by {exp.name}{exp.college ? `, ${exp.college}` : ""}</Pill>
          </div>

          {/* Round breakdown */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "Instrument Serif,serif", fontSize: 19, fontWeight: 400, color: C.text, marginBottom: 12 }}>
              Round-by-Round Breakdown
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {exp.roundBreakdown.map((r, i) => (
                <div key={i} style={{
                  background: C.bgMuted,
                  borderRadius: 12,
                  padding: "14px 16px",
                  borderLeft: `3px solid ${cc}`,
                }}>
                  <div style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: cc, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                    Round {i + 1} — {r.label}
                  </div>
                  <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65, margin: 0 }}>
                    {r.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Experience */}
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontFamily: "Instrument Serif,serif", fontSize: 19, fontWeight: 400, color: C.text, marginBottom: 10 }}>
              Overall Experience
            </h3>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
              {exp.experience}
            </p>
          </div>

          {/* Tips */}
          {exp.tips && (
            <div style={{ marginBottom: 24, background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 14, padding: "14px 16px" }}>
              <div style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, color: "#92400e", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                💡 Tips for Future Candidates
              </div>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: "#78350f", lineHeight: 1.65, margin: 0 }}>
                {exp.tips}
              </p>
            </div>
          )}

          {/* Helpful */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
            <button
              onClick={handleVote}
              style={{
                background: voted ? "#d1fae5" : C.bgMuted,
                border: `1.5px solid ${voted ? "#6ee7b7" : C.border}`,
                borderRadius: 12, padding: "8px 16px",
                cursor: voted ? "default" : "pointer",
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 14, fontFamily: "Geist,sans-serif",
                color: voted ? "#065f46" : C.textMid,
                transition: "all 0.2s",
                fontWeight: 600,
              }}
            >
              👍 {voted ? "Helpful!" : "Was this helpful?"}
            </button>
            <span style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMut }}>
              {helpful} people found this helpful
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Share Form ────────────────────────────────────────────────
function ShareForm({ onSubmit }) {
  const { C } = useTheme();
  const [form, setForm] = useState({
    company: "", companyOther: "", role: "", ctc: "",
    month: "Jan", year: "2024", rounds: 2,
    difficulty: "Medium", outcome: "Selected",
    roundBreakdown: [{ label: "Technical", content: "" }, { label: "HR", content: "" }],
    experience: "", tips: "", name: "", college: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const setRound = (i, k, v) => setForm(f => {
    const rb = [...f.roundBreakdown];
    rb[i] = { ...rb[i], [k]: v };
    return { ...f, roundBreakdown: rb };
  });

  const handleRoundsChange = (n) => {
    const current = form.roundBreakdown;
    if (n > current.length) {
      const added = Array.from({ length: n - current.length }, () => ({ label: "Technical", content: "" }));
      setForm(f => ({ ...f, rounds: n, roundBreakdown: [...current, ...added] }));
    } else {
      setForm(f => ({ ...f, rounds: n, roundBreakdown: current.slice(0, n) }));
    }
  };

  const validate = () => {
    const e = {};
    if (!form.company) e.company = "Select a company";
    if (form.company === "Other" && !form.companyOther.trim()) e.companyOther = "Enter company name";
    if (!form.role.trim()) e.role = "Job role is required";
    if (!form.name.trim()) e.name = "Your name is required";
    if (form.experience.trim().length < 30) e.experience = "Write at least 30 characters";
    form.roundBreakdown.forEach((r, i) => {
      if (!r.content.trim()) e[`round_${i}`] = "Describe what happened in this round";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const exp = {
      id: `user-${Date.now()}`,
      company: form.company === "Other" ? form.companyOther : form.company,
      role: form.role,
      ctc: form.ctc,
      month: form.month, year: form.year,
      rounds: form.rounds,
      difficulty: form.difficulty,
      outcome: form.outcome,
      roundBreakdown: form.roundBreakdown,
      experience: form.experience,
      tips: form.tips,
      name: form.name,
      college: form.college,
      postedAt: new Date().toISOString(),
      helpful: 0,
    };
    saveExperience(exp);
    onSubmit(exp);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3500);
    setForm({
      company: "", companyOther: "", role: "", ctc: "",
      month: "Jan", year: "2024", rounds: 2,
      difficulty: "Medium", outcome: "Selected",
      roundBreakdown: [{ label: "Technical", content: "" }, { label: "HR", content: "" }],
      experience: "", tips: "", name: "", college: "",
    });
    setErrors({});
  };

  const inputStyle = (err) => ({
    width: "100%",
    padding: "10px 14px",
    borderRadius: 12,
    border: `1.5px solid ${err ? "#fca5a5" : C.border}`,
    background: C.bgCard,
    fontFamily: "Geist,sans-serif",
    fontSize: 14,
    color: C.text,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    display: "block",
    fontFamily: "Geist,sans-serif",
    fontSize: 12,
    fontWeight: 700,
    color: C.textMut,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: 6,
  };

  const errStyle = {
    fontFamily: "Geist,sans-serif",
    fontSize: 11,
    color: "#ef4444",
    marginTop: 4,
  };

  return (
    <div style={{
      background: C.bgCard,
      border: `1.5px solid ${C.border}`,
      borderRadius: 24,
      padding: "36px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, #f15a2b, #2563eb)`, borderRadius: "24px 24px 0 0" }} />

      <h2 style={{ fontFamily: "Instrument Serif,serif", fontSize: 32, fontWeight: 400, color: C.text, marginBottom: 6, marginTop: 12, letterSpacing: "-0.02em" }}>
        Share Your Experience
      </h2>
      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMut, marginBottom: 32, lineHeight: 1.6 }}>
        Help the next batch of students prepare better. Your insight matters.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Company */}
        <div>
          <label style={labelStyle}>Company *</label>
          <select value={form.company} onChange={e => set("company", e.target.value)} style={{ ...inputStyle(errors.company), cursor: "pointer" }}>
            <option value="">Select company</option>
            {COMPANY_LIST.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
          {errors.company && <div style={errStyle}>{errors.company}</div>}
        </div>

        {/* Other company */}
        {form.company === "Other" && (
          <div>
            <label style={labelStyle}>Company Name *</label>
            <input value={form.companyOther} onChange={e => set("companyOther", e.target.value)} placeholder="e.g. IBM, Oracle..." style={inputStyle(errors.companyOther)} />
            {errors.companyOther && <div style={errStyle}>{errors.companyOther}</div>}
          </div>
        )}

        {/* Role */}
        <div>
          <label style={labelStyle}>Job Role *</label>
          <input value={form.role} onChange={e => set("role", e.target.value)} placeholder="e.g. Software Engineer" style={inputStyle(errors.role)} />
          {errors.role && <div style={errStyle}>{errors.role}</div>}
        </div>

        {/* CTC */}
        <div>
          <label style={labelStyle}>CTC Offered (optional)</label>
          <input value={form.ctc} onChange={e => set("ctc", e.target.value)} placeholder="e.g. 3.5 LPA" style={inputStyle()} />
        </div>

        {/* Date */}
        <div>
          <label style={labelStyle}>Interview Date</label>
          <div style={{ display: "flex", gap: 8 }}>
            <select value={form.month} onChange={e => set("month", e.target.value)} style={{ ...inputStyle(), width: "50%", cursor: "pointer" }}>
              {MONTHS.map(m => <option key={m}>{m}</option>)}
            </select>
            <select value={form.year} onChange={e => set("year", e.target.value)} style={{ ...inputStyle(), width: "50%", cursor: "pointer" }}>
              {YEARS.map(y => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>

        {/* Rounds */}
        <div>
          <label style={labelStyle}>Number of Rounds</label>
          <div style={{ display: "flex", gap: 8 }}>
            {[1,2,3,4,5,6].map(n => (
              <button key={n} onClick={() => handleRoundsChange(n)} style={{
                flex: 1, padding: "9px 0", borderRadius: 10,
                border: `1.5px solid ${form.rounds === n ? C.navy : C.border}`,
                background: form.rounds === n ? C.navy : C.bgCard,
                color: form.rounds === n ? "#fff" : C.textMid,
                fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600,
                cursor: "pointer", transition: "all 0.18s",
              }}>{n}</button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <label style={labelStyle}>Difficulty</label>
          <div style={{ display: "flex", gap: 8 }}>
            {["Easy","Medium","Hard"].map(d => {
              const dc = DIFF_COLORS[d];
              const active = form.difficulty === d;
              return (
                <button key={d} onClick={() => set("difficulty", d)} style={{
                  flex: 1, padding: "9px 0", borderRadius: 10,
                  border: `1.5px solid ${active ? dc.text : C.border}`,
                  background: active ? dc.bg : C.bgCard,
                  color: active ? dc.text : C.textMid,
                  fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600,
                  cursor: "pointer", transition: "all 0.18s",
                }}>{d}</button>
              );
            })}
          </div>
        </div>

        {/* Outcome */}
        <div>
          <label style={labelStyle}>Outcome</label>
          <div style={{ display: "flex", gap: 8 }}>
            {["Selected","Rejected","Waitlisted"].map(o => {
              const oc = OUTCOME_COLORS[o];
              const active = form.outcome === o;
              return (
                <button key={o} onClick={() => set("outcome", o)} style={{
                  flex: 1, padding: "9px 4px", borderRadius: 10,
                  border: `1.5px solid ${active ? oc.text : C.border}`,
                  background: active ? oc.bg : C.bgCard,
                  color: active ? oc.text : C.textMid,
                  fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 600,
                  cursor: "pointer", transition: "all 0.18s",
                }}>{o}</button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Round breakdown */}
      <div style={{ marginTop: 28 }}>
        <label style={labelStyle}>Round-by-Round Breakdown</label>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {form.roundBreakdown.map((r, i) => (
            <div key={i} style={{
              background: C.bgMuted, borderRadius: 14, padding: "16px",
              border: `1px solid ${errors[`round_${i}`] ? "#fca5a5" : C.border}`,
            }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
                <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 11, color: C.textMut, fontWeight: 500 }}>
                  Round {i + 1}
                </span>
                <select value={r.label} onChange={e => setRound(i, "label", e.target.value)} style={{
                  padding: "5px 10px", borderRadius: 8, border: `1px solid ${C.border}`,
                  background: C.bgCard, fontFamily: "Geist,sans-serif", fontSize: 13, color: C.text,
                  cursor: "pointer",
                }}>
                  {ROUND_LABELS.map(l => <option key={l}>{l}</option>)}
                </select>
              </div>
              <textarea
                value={r.content}
                onChange={e => setRound(i, "content", e.target.value)}
                placeholder="What was asked? How did it go?"
                rows={3}
                style={{
                  width: "100%", borderRadius: 10, border: `1px solid ${C.border}`,
                  background: C.bgCard, fontFamily: "Geist,sans-serif", fontSize: 13,
                  color: C.text, padding: "10px 12px", resize: "vertical",
                  boxSizing: "border-box", lineHeight: 1.6, outline: "none",
                }}
              />
              {errors[`round_${i}`] && <div style={errStyle}>{errors[`round_${i}`]}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div style={{ marginTop: 20 }}>
        <label style={labelStyle}>Overall Experience * (min 30 chars)</label>
        <textarea
          value={form.experience}
          onChange={e => set("experience", e.target.value)}
          placeholder="Describe your overall interview experience, how it went, the atmosphere, communication from the company..."
          rows={5}
          style={{
            ...inputStyle(errors.experience),
            resize: "vertical", lineHeight: 1.7, padding: "12px 14px",
          }}
        />
        {errors.experience && <div style={errStyle}>{errors.experience}</div>}
      </div>

      {/* Tips */}
      <div style={{ marginTop: 16 }}>
        <label style={labelStyle}>Tips for Future Candidates (optional)</label>
        <textarea
          value={form.tips}
          onChange={e => set("tips", e.target.value)}
          placeholder="What should others know before applying? Any resources that helped?"
          rows={3}
          style={{ ...inputStyle(), resize: "vertical", lineHeight: 1.7, padding: "12px 14px" }}
        />
      </div>

      {/* Name + College */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <div>
          <label style={labelStyle}>Your Name *</label>
          <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="e.g. Anjali Singh" style={inputStyle(errors.name)} />
          {errors.name && <div style={errStyle}>{errors.name}</div>}
        </div>
        <div>
          <label style={labelStyle}>College (optional)</label>
          <input value={form.college} onChange={e => set("college", e.target.value)} placeholder="e.g. IIT Bombay" style={inputStyle()} />
        </div>
      </div>

      {/* Submit */}
      <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 16 }}>
        <Button variant="coral" size="lg" onClick={handleSubmit}>
          Share Experience →
        </Button>
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              style={{
                fontFamily: "Geist,sans-serif", fontSize: 14, color: "#065f46",
                background: "#d1fae5", border: "1px solid #6ee7b7",
                borderRadius: 10, padding: "8px 16px", fontWeight: 500,
              }}
            >
              ✓ Experience shared successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function InterviewExperiencePage({ setPage }) {
  const { C } = useTheme();
  const [experiences, setExperiences] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filterCompany, setFilterCompany] = useState("All");
  const [filterOutcome, setFilterOutcome] = useState("All");
  const [filterDiff, setFilterDiff] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setExperiences(loadExperiences());
  }, []);

  const handleSubmit = (exp) => {
    setExperiences(prev => [exp, ...prev]);
  };

  const filtered = experiences.filter(e => {
    if (filterCompany !== "All" && e.company !== filterCompany) return false;
    if (filterOutcome !== "All" && e.outcome !== filterOutcome) return false;
    if (filterDiff !== "All" && e.difficulty !== filterDiff) return false;
    if (search && !e.role.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const companies = ["All", ...Array.from(new Set(experiences.map(e => e.company)))];

  const selectStyle = {
    padding: "8px 14px", borderRadius: 10,
    border: `1.5px solid ${C.border}`, background: C.bgCard,
    fontFamily: "Geist,sans-serif", fontSize: 13, color: C.text,
    cursor: "pointer", outline: "none",
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        .ie-hero-pad { padding: 80px 32px 60px !important; }
        .ie-section-pad { padding: 0 32px 80px !important; }
        .ie-browse-pad { padding: 0 32px 100px !important; }
        .ie-card-grid { grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)) !important; gap: 20px !important; }
        .ie-share-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ie-share-rounds-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        @media (max-width: 900px) {
          .ie-card-grid { grid-template-columns: 1fr !important; }
          .ie-share-form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .ie-hero-pad { padding: 32px 14px 24px !important; }
          .ie-section-pad { padding: 0 14px 40px !important; }
          .ie-browse-pad { padding: 0 14px 48px !important; }
          .ie-filter-bar { flex-direction: column !important; padding: 12px !important; }
          .ie-filter-bar input { width: 100% !important; box-sizing: border-box !important; }
          .ie-filter-bar select { width: 100% !important; }
          .ie-card-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .ie-share-form-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .ie-share-rounds-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 6px !important; }
          .ie-exp-card { border-radius: 16px !important; }
          .ie-exp-card-header { padding: 16px !important; }
          .ie-exp-card-body { padding: 14px 16px !important; }
          .ie-round-pill { font-size: 10px !important; padding: 3px 8px !important; }
          .ie-hero-h1 { font-size: clamp(28px, 6vw, 40px) !important; }
          .ie-browse-h2 { font-size: 26px !important; }
          .ie-share-title { font-size: 22px !important; }
        }
      `}</style>
      {/* Hero */}
      <section className="ie-hero-pad" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <InView>
          <SectionHeader>Community</SectionHeader>
          <h1 className="ie-hero-h1" style={{
            fontFamily: "Instrument Serif,serif", fontSize: "clamp(28px,6vw,64px)",
            fontWeight: 400, color: C.text, letterSpacing: "-0.03em",
            lineHeight: 1.1, marginBottom: 16, marginTop: 8,
          }}>
            Real Interview Experiences
          </h1>
          <p style={{ fontFamily: "Geist,sans-serif", fontSize: 17, color: C.textMid, maxWidth: 560, lineHeight: 1.7 }}>
            Learn from students who've been through it. Share yours and help the next batch prepare smarter.
          </p>
        </InView>
      </section>

      {/* Share Form */}
      <section className="ie-section-pad" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <InView>
          <ShareForm onSubmit={handleSubmit} />
        </InView>
      </section>

      {/* Browse */}
      <section className="ie-browse-pad" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <InView>
          <div style={{ marginBottom: 32 }}>
            <SectionHeader>Browse Experiences</SectionHeader>
            <h2 className="ie-browse-h2" style={{ fontFamily: "Instrument Serif,serif", fontSize: 38, fontWeight: 400, color: C.text, letterSpacing: "-0.02em", marginBottom: 24 }}>
              {filtered.length} experience{filtered.length !== 1 ? "s" : ""} shared
            </h2>

            {/* Filter bar */}
            <div className="ie-filter-bar" style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "16px 20px", background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 16 }}>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by role..."
                style={{ ...selectStyle, flex: "1 1 180px", minWidth: 180 }}
              />
              <select value={filterCompany} onChange={e => setFilterCompany(e.target.value)} style={selectStyle}>
                {companies.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={filterOutcome} onChange={e => setFilterOutcome(e.target.value)} style={selectStyle}>
                {["All","Selected","Rejected","Waitlisted"].map(o => <option key={o}>{o}</option>)}
              </select>
              <select value={filterDiff} onChange={e => setFilterDiff(e.target.value)} style={selectStyle}>
                {["All","Easy","Medium","Hard"].map(d => <option key={d}>{d}</option>)}
              </select>
              {(filterCompany !== "All" || filterOutcome !== "All" || filterDiff !== "All" || search) && (
                <button
                  onClick={() => { setFilterCompany("All"); setFilterOutcome("All"); setFilterDiff("All"); setSearch(""); }}
                  style={{
                    padding: "8px 14px", borderRadius: 10,
                    border: `1.5px solid #fca5a5`, background: "#fee2e2",
                    color: "#991b1b", fontFamily: "Geist,sans-serif",
                    fontSize: 13, fontWeight: 600, cursor: "pointer",
                  }}
                >
                  Clear filters ✕
                </button>
              )}
            </div>
          </div>
        </InView>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: C.textMut, fontFamily: "Geist,sans-serif", fontSize: 15 }}>
            No experiences match your filters.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: 16 }}>
            {filtered.map((exp, i) => (
              <InView key={exp.id} delay={i * 0.05}>
                <ExperienceCard exp={exp} onClick={() => setSelected(exp)} />
              </InView>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && <DetailModal exp={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
