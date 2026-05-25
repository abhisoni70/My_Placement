import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../utils/ThemeContext";

// ── Tech icons & colors ───────────────────────────────────────────────────────
const TECH_META = {
  java:       { icon: "☕", color: "#f89820", bg: "#fff8e7" },
  python:     { icon: "🐍", color: "#3776ab", bg: "#e8f4ff" },
  javascript: { icon: "⚡", color: "#f7df1e", bg: "#fffde7", textColor: "#7a6800" },
  typescript: { icon: "🔷", color: "#3178c6", bg: "#e8f0ff" },
  react:      { icon: "⚛️", color: "#61dafb", bg: "#e5faff", textColor: "#006080" },
  nodejs:     { icon: "🟩", color: "#339933", bg: "#e8f8e8" },
  django:     { icon: "🎸", color: "#092e20", bg: "#e8f5e9", textColor: "#092e20" },
  flask:      { icon: "🌶️", color: "#000000", bg: "#f5f5f5", textColor: "#333" },
  spring:     { icon: "🍃", color: "#6db33f", bg: "#edfae5" },
  sql:        { icon: "🗄️", color: "#e44d26", bg: "#fff0ec" },
  mysql:      { icon: "🐬", color: "#00758f", bg: "#e0f7ff" },
  postgresql: { icon: "🐘", color: "#336791", bg: "#e8f0ff" },
  mongodb:    { icon: "🍃", color: "#4db33d", bg: "#edfae5" },
  docker:     { icon: "🐳", color: "#2496ed", bg: "#e5f4ff" },
  kubernetes: { icon: "☸️", color: "#326ce5", bg: "#e8eeff" },
  aws:        { icon: "☁️", color: "#ff9900", bg: "#fff6e0" },
  git:        { icon: "🔀", color: "#f05032", bg: "#fff0ee" },
  html:       { icon: "🌐", color: "#e44d26", bg: "#fff0ec" },
  css:        { icon: "🎨", color: "#1572b6", bg: "#e5f0ff" },
  c:          { icon: "⚙️", color: "#5c6bc0", bg: "#eceeff" },
  cpp:        { icon: "🔧", color: "#00599c", bg: "#e5eeff" },
  rust:       { icon: "🦀", color: "#ce412b", bg: "#ffecea" },
  go:         { icon: "🐹", color: "#00add8", bg: "#e0faff" },
  kotlin:     { icon: "🎯", color: "#7f52ff", bg: "#f0ebff" },
  swift:      { icon: "🦅", color: "#fa7343", bg: "#fff3ee" },
  php:        { icon: "🐘", color: "#777bb4", bg: "#f0eeff" },
  redis:      { icon: "💾", color: "#dc382d", bg: "#ffecea" },
  graphql:    { icon: "◈", color: "#e10098", bg: "#ffe5f6" },
  linux:      { icon: "🐧", color: "#333", bg: "#f5f5f5", textColor: "#333" },
  machine_learning: { icon: "🤖", color: "#ff6f00", bg: "#fff3e0" },
  deep_learning:    { icon: "🧠", color: "#9c27b0", bg: "#f3e5f5" },
};

function getTechMeta(tech) {
  const key = tech.toLowerCase().replace(/[.\s-]/g, "_").replace("c++", "cpp").replace("node.js", "nodejs").replace("node js", "nodejs");
  // Fuzzy match
  for (const [k, v] of Object.entries(TECH_META)) {
    if (key.includes(k) || k.includes(key)) return { ...v, key: k };
  }
  return { icon: "💡", color: "#6366f1", bg: "#eef2ff", key };
}

// ── Render markdown-ish answer ────────────────────────────────────────────────
function renderAnswer(text, C) {
  if (!text) return null;
  const parts = text.split(/(```[\s\S]*?```)/g);
  return parts.map((part, i) => {
    if (part.startsWith("```")) {
      const code = part.replace(/```(?:java|python|js|sql|bash|html|cpp|go|rust)?\n?/, "").replace(/```$/, "");
      return (
        <pre key={i} style={{
          background: C.isDark ? "#0d1117" : "#0f172a",
          color: "#e2e8f0", borderRadius: 10,
          padding: "14px 16px", fontSize: 12.5, lineHeight: 1.75,
          overflowX: "auto", margin: "10px 0",
          fontFamily: "Geist Mono,monospace",
          border: `1px solid ${C.isDark ? "#30363d" : "#1e293b"}`,
        }}>{code}</pre>
      );
    }
    const segments = part.split(/(\*\*[^*]+\*\*)/g).map((b, j) => {
      if (b.startsWith("**") && b.endsWith("**")) {
        return <strong key={j} style={{ color: C.navy, fontWeight: 700 }}>{b.slice(2, -2)}</strong>;
      }
      return b;
    });
    return (
      <p key={i} style={{
        fontSize: 13.5, lineHeight: 1.8, color: C.textMid,
        whiteSpace: "pre-line", margin: "4px 0",
        fontFamily: "Geist,sans-serif",
      }}>{segments}</p>
    );
  });
}

// ── Single Question Card ──────────────────────────────────────────────────────
function QCard({ q, idx, techMeta }) {
  const { C } = useTheme();
  const [open, setOpen] = useState(false);
  const diffColors = {
    Easy:   { bg: "#dcfce7", text: "#15803d", dot: "#22c55e" },
    Medium: { bg: "#fef3c7", text: "#b45309", dot: "#f59e0b" },
    Hard:   { bg: "#fee2e2", text: "#b91c1c", dot: "#ef4444" },
  };
  const diff = diffColors[q.difficulty] || diffColors.Medium;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.04, duration: 0.3 }}
      style={{
        background: C.bgCard,
        border: `1px solid ${open ? techMeta.color : C.border}`,
        borderRadius: 14, overflow: "hidden", marginBottom: 8,
        boxShadow: open
          ? `0 4px 20px ${techMeta.color}22, 0 0 0 1px ${techMeta.color}20`
          : `0 1px 3px rgba(0,0,0,${C.isDark ? "0.3" : "0.05"})`,
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
    >
      <div onClick={() => setOpen(o => !o)} style={{ padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 9, flexShrink: 0,
          background: open ? techMeta.color : C.bgMuted,
          color: open ? "#fff" : C.textMut,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, fontFamily: "Geist Mono,monospace",
          transition: "all 0.2s",
        }}>
          {String(idx + 1).padStart(2, "0")}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              background: diff.bg, color: diff.text,
              borderRadius: 20, padding: "3px 10px",
              fontSize: 11, fontWeight: 700, fontFamily: "Geist,sans-serif",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: diff.dot, display: "inline-block" }} />
              {q.difficulty}
            </span>
            {q.category && (
              <span style={{
                fontSize: 11, color: C.textMut, fontFamily: "Geist,sans-serif",
                background: C.bgMuted, padding: "3px 10px", borderRadius: 20,
                border: `1px solid ${C.border}`,
              }}>{q.category}</span>
            )}
          </div>
          <p style={{ margin: 0, fontSize: 14.5, fontWeight: 650, color: C.navy, lineHeight: 1.5, fontFamily: "Geist,sans-serif" }}>
            {q.question}
          </p>
        </div>

        <div style={{
          width: 30, height: 30, display: "flex", alignItems: "center",
          justifyContent: "center", borderRadius: 8, flexShrink: 0,
          background: open ? techMeta.bg : C.bgMuted,
          transition: "all 0.2s",
        }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d={open ? "M2 9L6.5 4.5L11 9" : "M2 4.5L6.5 9L11 4.5"}
              stroke={open ? techMeta.color : C.textMid} strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              padding: "18px 20px 20px 68px",
              borderTop: `1px solid ${C.border}`,
              background: C.isDark ? `${C.bgMuted}80` : "#fafbff",
            }}>
              {renderAnswer(q.answer, C)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Upload Zone ───────────────────────────────────────────────────────────────
function UploadZone({ onFileSelect, isDragging, setIsDragging }) {
  const { C } = useTheme();
  const fileRef = useRef();

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.type === "application/pdf") onFileSelect(file);
  }, [onFileSelect, setIsDragging]);

  return (
    <motion.div
      className="resume-upload-box"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => fileRef.current?.click()}
      style={{
        border: `2px dashed ${isDragging ? "#f15a2b" : C.border}`,
        borderRadius: 20,
        padding: "60px 40px",
        textAlign: "center",
        cursor: "pointer",
        background: isDragging
          ? (C.isDark ? "#2a1810" : "#fff7f4")
          : C.bgCard,
        transition: "all 0.25s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      {isDragging && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: 20,
          background: "radial-gradient(circle at center, #f15a2b10 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      )}

      <input
        ref={fileRef}
        type="file"
        accept=".pdf"
        style={{ display: "none" }}
        onChange={(e) => e.target.files[0] && onFileSelect(e.target.files[0])}
      />

      <motion.div
        animate={{ y: isDragging ? -8 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div style={{
          width: 80, height: 80, borderRadius: 20, margin: "0 auto 20px",
          background: isDragging
            ? "linear-gradient(135deg, #f15a2b, #ff7a52)"
            : C.bgMuted,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36, transition: "all 0.3s",
          boxShadow: isDragging ? "0 8px 30px #f15a2b40" : "none",
        }}>
          {isDragging ? "📄" : "📋"}
        </div>

        <h3 style={{
          margin: "0 0 8px", fontSize: 20, fontWeight: 800,
          color: isDragging ? "#f15a2b" : C.navy,
          fontFamily: "Instrument Serif,serif",
        }}>
          {isDragging ? "Drop your Resume here!" : "Upload your Resume"}
        </h3>
        <p style={{ margin: "0 0 20px", fontSize: 14, color: C.textMid, fontFamily: "Geist,sans-serif" }}>
          PDF format only · AI will detect your tech skills automatically
        </p>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "linear-gradient(135deg, #f15a2b, #ff7a52)",
          color: "#fff", borderRadius: 12, padding: "10px 24px",
          fontSize: 13.5, fontWeight: 700, fontFamily: "Geist,sans-serif",
          boxShadow: "0 4px 14px #f15a2b40",
        }}>
          <span>📁</span> Browse PDF File
        </div>
      </motion.div>

      <p style={{ margin: "20px 0 0", fontSize: 12, color: C.textMut, fontFamily: "Geist,sans-serif" }}>
        Or drag & drop your resume here
      </p>
    </motion.div>
  );
}

// ── Tech Chip ─────────────────────────────────────────────────────────────────
function TechChip({ tech, selected, onClick }) {
  const meta = getTechMeta(tech);
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "10px 18px", borderRadius: 40,
        border: `2px solid ${selected ? meta.color : "#e0e0e0"}`,
        background: selected ? meta.bg : "#fff",
        color: selected ? (meta.textColor || meta.color) : "#555",
        cursor: "pointer", fontFamily: "Geist,sans-serif",
        fontSize: 13.5, fontWeight: selected ? 700 : 500,
        boxShadow: selected ? `0 4px 14px ${meta.color}30` : "0 1px 3px rgba(0,0,0,0.06)",
        transition: "all 0.2s",
      }}
    >
      <span style={{ fontSize: 17 }}>{meta.icon}</span>
      {tech}
      {selected && <span style={{ fontSize: 12, fontWeight: 800 }}>✓</span>}
    </motion.button>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ResumeAnalyzerPage() {
  const { C } = useTheme();

  const [step, setStep]               = useState("upload");   // upload | analyzing | select | loading | questions
  const [isDragging, setIsDragging]   = useState(false);
  const [resumeFile, setResumeFile]   = useState(null);
  const [detectedTechs, setDetectedTechs] = useState([]);
  const [selectedTech, setSelectedTech]   = useState(null);
  const [questions, setQuestions]         = useState([]);
  const [analyzeError, setAnalyzeError]   = useState("");
  const [analyzingMsg, setAnalyzingMsg]   = useState("Reading your resume...");
  const [progress, setProgress]           = useState(0);

  // Step 1: User picks a file → call Claude API to extract text + detect tech
  const handleFileSelect = async (file) => {
    setResumeFile(file);
    setStep("analyzing");
    setAnalyzeError("");
    setProgress(0);

    // Animate progress messages
    const msgs = [
      "Reading your resume...",
      "Extracting content with AI...",
      "Identifying technologies...",
      "Almost done...",
    ];
    let mi = 0;
    const msgInterval = setInterval(() => {
      mi = (mi + 1) % msgs.length;
      setAnalyzingMsg(msgs[mi]);
      setProgress(p => Math.min(p + 22, 90));
    }, 1200);

    try {
      // Read PDF as base64
      const base64Data = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result.split(",")[1]);
        r.onerror = () => rej(new Error("File read failed"));
        r.readAsDataURL(file);
      });

      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "document",
                  source: { type: "base64", media_type: "application/pdf", data: base64Data },
                },
                {
                  type: "text",
                  text: `Analyze this resume and extract ALL technologies, programming languages, frameworks, databases, tools, and platforms mentioned.

Return ONLY a JSON object in this exact format (no markdown, no explanation):
{
  "technologies": ["Java", "Python", "Spring Boot", "MySQL", "Docker", "React"],
  "summary": "2-3 sentence professional summary of the candidate's profile"
}

Rules:
- Include every technology explicitly mentioned
- Use proper casing (e.g. "JavaScript" not "javascript", "Node.js" not "nodejs")
- Include languages, frameworks, databases, cloud platforms, tools
- Return at least 3 technologies if any are found
- If no technologies found, return {"technologies": [], "summary": "No technologies detected"}`,
                },
              ],
            },
          ],
        }),
      });

      clearInterval(msgInterval);
      setProgress(100);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || "API error");
      }

      const data = await response.json();
      const raw = data.content.map(i => i.text || "").join("");
      const clean = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);

      setDetectedTechs(parsed.technologies || []);
      setTimeout(() => setStep("select"), 400);
    } catch (err) {
      clearInterval(msgInterval);
      setAnalyzeError(err.message || "Analysis failed. Please try again.");
      setStep("upload");
    }
  };

  // Step 2: User selects a tech → fetch interview questions from Claude
  const handleTechSelect = async (tech) => {
    setSelectedTech(tech);
    setStep("loading");
    setQuestions([]);

    try {
      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `Generate 8 technical interview questions for ${tech} with detailed answers.

Return ONLY a JSON array in this exact format (no markdown, no explanation):
[
  {
    "question": "What is...",
    "answer": "Detailed answer with examples. Use **bold** for key terms. Use code blocks with triple backticks for code examples.",
    "difficulty": "Easy",
    "category": "Core Concepts"
  }
]

Rules:
- Mix of Easy (2), Medium (4), Hard (2) questions
- Vary categories: Core Concepts, OOP/Design, Performance, Best Practices, Advanced, etc.
- Answers should be thorough (4-8 sentences minimum)
- Include code examples in backtick blocks where relevant
- Questions should be actual interview questions asked at top tech companies`,
            },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch questions");

      const data = await response.json();
      const raw = data.content.map(i => i.text || "").join("");
      const clean = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);

      setQuestions(Array.isArray(parsed) ? parsed : []);
      setStep("questions");
    } catch (err) {
      setStep("select");
    }
  };

  const techMeta = selectedTech ? getTechMeta(selectedTech) : null;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "Geist,sans-serif" }}>
      <style>{`
        .resume-header-pad { padding: 44px 32px 36px !important; }
        .resume-body-pad { padding: 48px 32px !important; }
        .resume-upload-box { padding: 60px 40px !important; }
        .resume-tech-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important; gap: 12px !important; }
        .resume-steps { display: flex; align-items: center; gap: 0; flex-wrap: nowrap; overflow-x: auto; }
        .resume-step-label { display: inline; }
        @media (max-width: 900px) {
          .resume-tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .resume-header-pad { padding: 20px 14px 16px !important; }
          .resume-body-pad { padding: 20px 14px !important; }
          .resume-upload-box { padding: 28px 16px !important; }
          .resume-tech-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .resume-questions-grid { grid-template-columns: 1fr !important; }
          .resume-steps { gap: 0 !important; }
          .resume-step-label { display: none !important; }
          .resume-step-connector { width: 12px !important; }
          .resume-title { font-size: clamp(18px, 4vw, 28px) !important; }
          .resume-upload-icon { font-size: 36px !important; }
          .resume-upload-title { font-size: 16px !important; }
          .resume-question-card { padding: 12px 14px !important; }
          .resume-question-answer { padding: 14px 14px 16px 14px !important; }
          .resume-tech-select-header { padding: 20px 14px 16px !important; }
          .resume-analyzing-box { padding: 32px 16px !important; }
          .resume-back-btn { display: flex !important; }
        }
        @media (max-width: 400px) {
          .resume-tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="resume-header-pad" style={{
        background: C.isDark
          ? "linear-gradient(135deg, #0d1117 0%, #161b26 100%)"
          : "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        borderBottom: `1px solid ${C.isDark ? "#21262d" : "#1e3a8a"}`,
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "#f15a2b08", border: "1px solid #f15a2b15" }} />
        <div style={{ position: "absolute", bottom: -60, left: "30%", width: 300, height: 300, borderRadius: "50%", background: "#2563eb06", border: "1px solid #2563eb10" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{
                fontSize: 10.5, fontWeight: 700, letterSpacing: "0.15em",
                textTransform: "uppercase", color: "#fb923c",
                background: "#f15a2b20", padding: "3px 10px", borderRadius: 20,
                border: "1px solid #f15a2b40", fontFamily: "Geist,sans-serif",
              }}>🎯 AI Resume Analyzer</span>
            </div>
            <h1 className="resume-title" style={{
              margin: "0 0 10px", fontSize: "clamp(20px,4vw,38px)",
              fontWeight: 800, color: "#fff", lineHeight: 1.2,
              fontFamily: "Instrument Serif,serif", letterSpacing: "-0.02em",
            }}>
              Upload Resume → Get Interview Prep
            </h1>
            <p style={{ margin: 0, fontSize: 15, color: "#94a3b8", maxWidth: 520, lineHeight: 1.6 }}>
              AI reads your resume, finds your tech stack, and generates real interview questions — personalized for you.
            </p>

            {/* Steps indicator */}
            <div className="resume-steps" style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 24 }}>
              {["Upload Resume", "Detect Skills", "Choose Tech", "Interview Prep"].map((s, i) => {
                const stepIds = ["upload", "analyzing", "select", "questions"];
                const currentIdx = stepIds.indexOf(step === "loading" ? "questions" : step);
                const isActive = i === currentIdx;
                const isDone = i < currentIdx;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 6,
                      padding: "5px 12px", borderRadius: 20,
                      background: isActive ? "#f15a2b" : isDone ? "#10b981" : "#ffffff15",
                      transition: "all 0.3s",
                    }}>
                      <span style={{ fontSize: 11, color: "#fff", fontWeight: 700, fontFamily: "Geist,sans-serif" }}>
                        {isDone ? "✓" : i + 1}
                      </span>
                      <span className="resume-step-label" style={{ fontSize: 11, color: isActive || isDone ? "#fff" : "#94a3b8", fontFamily: "Geist,sans-serif", fontWeight: isActive ? 700 : 500 }}>
                        {s}
                      </span>
                    </div>
                    {i < 3 && <div className="resume-step-connector" style={{ width: 20, height: 2, background: isDone ? "#10b981" : "#ffffff20", transition: "all 0.3s" }} />}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="resume-body-pad" style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* STEP: Upload */}
        <AnimatePresence mode="wait">
          {step === "upload" && (
            <motion.div key="upload" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {analyzeError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: "#fef2f2", border: "1px solid #fca5a5",
                    borderRadius: 12, padding: "14px 18px", marginBottom: 20,
                    display: "flex", alignItems: "center", gap: 10,
                  }}
                >
                  <span style={{ fontSize: 18 }}>⚠️</span>
                  <p style={{ margin: 0, color: "#dc2626", fontSize: 14, fontFamily: "Geist,sans-serif" }}>{analyzeError}</p>
                </motion.div>
              )}
              <UploadZone onFileSelect={handleFileSelect} isDragging={isDragging} setIsDragging={setIsDragging} />

              {/* Feature chips */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 28 }}>
                {[
                  { icon: "🤖", label: "AI-Powered Analysis" },
                  { icon: "⚡", label: "Instant Results" },
                  { icon: "🎯", label: "Personalized Questions" },
                  { icon: "🔒", label: "Private & Secure" },
                ].map(f => (
                  <div key={f.label} style={{
                    display: "flex", alignItems: "center", gap: 7,
                    padding: "8px 16px", borderRadius: 40,
                    background: C.bgCard, border: `1px solid ${C.border}`,
                    fontSize: 12.5, color: C.textMid, fontFamily: "Geist,sans-serif",
                    fontWeight: 500,
                  }}>
                    <span>{f.icon}</span> {f.label}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP: Analyzing */}
          {step === "analyzing" && (
            <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: "center", padding: "80px 20px" }}>
              <div style={{ position: "relative", width: 100, height: 100, margin: "0 auto 28px" }}>
                <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="50" cy="50" r="42" fill="none" stroke={C.border} strokeWidth="6" />
                  <motion.circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#f15a2b" strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={264}
                    animate={{ strokeDashoffset: 264 - (264 * progress) / 100 }}
                    transition={{ duration: 0.5 }}
                    strokeDashoffset={264 - (264 * progress) / 100}
                  />
                </svg>
                <div style={{
                  position: "absolute", inset: 0, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: 32,
                }}>📄</div>
              </div>

              <h3 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 800, color: C.navy, fontFamily: "Instrument Serif,serif" }}>
                Analyzing Resume
              </h3>
              <motion.p
                key={analyzingMsg}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ margin: "0 0 8px", fontSize: 15, color: C.textMid, fontFamily: "Geist,sans-serif" }}
              >
                {analyzingMsg}
              </motion.p>
              <p style={{ margin: 0, fontSize: 12.5, color: C.textMut, fontFamily: "Geist,sans-serif" }}>
                {resumeFile?.name}
              </p>
            </motion.div>
          )}

          {/* STEP: Select Technology */}
          {step === "select" && (
            <motion.div key="select" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>

              {/* File info bar */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                background: C.bgCard, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "14px 18px", marginBottom: 28,
                boxShadow: `0 1px 4px rgba(0,0,0,${C.isDark ? "0.2" : "0.04"})`,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: "linear-gradient(135deg, #f15a2b, #ff7a52)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                }}>📄</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: "0 0 2px", fontSize: 13.5, fontWeight: 700, color: C.navy, fontFamily: "Geist,sans-serif" }}>
                    {resumeFile?.name}
                  </p>
                  <p style={{ margin: 0, fontSize: 12, color: C.textMut, fontFamily: "Geist,sans-serif" }}>
                    {detectedTechs.length} technologies detected · {(resumeFile?.size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <button
                  onClick={() => { setStep("upload"); setResumeFile(null); setDetectedTechs([]); }}
                  style={{
                    background: C.bgMuted, border: `1px solid ${C.border}`,
                    borderRadius: 8, padding: "7px 14px", cursor: "pointer",
                    fontSize: 12.5, color: C.textMid, fontFamily: "Geist,sans-serif",
                    fontWeight: 600,
                  }}
                >
                  ↩ Upload New
                </button>
              </div>

              {detectedTechs.length === 0 ? (
                <div style={{
                  textAlign: "center", padding: "60px 20px",
                  background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 20,
                }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                  <h3 style={{ margin: "0 0 10px", color: C.navy, fontFamily: "Instrument Serif,serif", fontSize: 22 }}>
                    No technologies detected
                  </h3>
                  <p style={{ margin: "0 0 20px", color: C.textMid, fontSize: 14, fontFamily: "Geist,sans-serif" }}>
                    Make sure your resume clearly lists technologies, programming languages, and tools.
                  </p>
                  <button
                    onClick={() => setStep("upload")}
                    style={{
                      padding: "10px 24px", borderRadius: 10, border: "none",
                      background: "linear-gradient(135deg, #f15a2b, #ff7a52)",
                      color: "#fff", cursor: "pointer", fontSize: 14,
                      fontFamily: "Geist,sans-serif", fontWeight: 700,
                    }}
                  >Try Another Resume</button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <h2 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 800, color: C.navy, fontFamily: "Instrument Serif,serif" }}>
                      Your Tech Stack Detected 🎉
                    </h2>
                    <p style={{ margin: 0, fontSize: 14, color: C.textMid, fontFamily: "Geist,sans-serif" }}>
                      Select a technology to get personalized interview questions
                    </p>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                    {detectedTechs.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <TechChip
                          tech={tech}
                          selected={selectedTech === tech}
                          onClick={() => setSelectedTech(tech)}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {selectedTech && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={() => handleTechSelect(selectedTech)}
                          style={{
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "14px 36px", borderRadius: 14, border: "none",
                            background: "linear-gradient(135deg, #f15a2b, #ff7a52)",
                            color: "#fff", cursor: "pointer", fontSize: 15,
                            fontFamily: "Geist,sans-serif", fontWeight: 800,
                            boxShadow: "0 6px 20px #f15a2b40",
                          }}
                        >
                          <span style={{ fontSize: 20 }}>{getTechMeta(selectedTech).icon}</span>
                          Get {selectedTech} Interview Questions →
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.div>
          )}

          {/* STEP: Loading questions */}
          {step === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: "center", padding: "80px 20px" }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                style={{
                  width: 70, height: 70, borderRadius: "50%", margin: "0 auto 24px",
                  border: "4px solid #f15a2b20",
                  borderTop: "4px solid #f15a2b",
                }}
              />
              <h3 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 800, color: C.navy, fontFamily: "Instrument Serif,serif" }}>
                Generating Questions
              </h3>
              <p style={{ margin: 0, fontSize: 15, color: C.textMid, fontFamily: "Geist,sans-serif" }}>
                Preparing real interview questions for <strong>{selectedTech}</strong>...
              </p>
            </motion.div>
          )}

          {/* STEP: Questions */}
          {step === "questions" && (
            <motion.div key="questions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>

              {/* Top bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                    background: techMeta?.bg || "#f0f0f0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 26, border: `2px solid ${techMeta?.color}30`,
                    boxShadow: `0 4px 14px ${techMeta?.color}20`,
                  }}>{techMeta?.icon}</div>
                  <div>
                    <h2 style={{ margin: "0 0 2px", fontSize: 20, fontWeight: 800, color: C.navy, fontFamily: "Instrument Serif,serif" }}>
                      {selectedTech} Interview Questions
                    </h2>
                    <p style={{ margin: 0, fontSize: 12.5, color: C.textMut, fontFamily: "Geist,sans-serif" }}>
                      {questions.length} questions · Based on your resume
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => { setStep("select"); setSelectedTech(null); setQuestions([]); }}
                    style={{
                      padding: "9px 16px", borderRadius: 10,
                      border: `1px solid ${C.border}`, background: C.bgCard,
                      color: C.textMid, cursor: "pointer",
                      fontSize: 13, fontFamily: "Geist,sans-serif", fontWeight: 600,
                    }}
                  >← Back</button>
                  <button
                    onClick={() => handleTechSelect(selectedTech)}
                    style={{
                      padding: "9px 16px", borderRadius: 10, border: "none",
                      background: "linear-gradient(135deg, #f15a2b, #ff7a52)",
                      color: "#fff", cursor: "pointer",
                      fontSize: 13, fontFamily: "Geist,sans-serif", fontWeight: 700,
                    }}
                  >🔄 Regenerate</button>
                </div>
              </div>

              {/* Difficulty stats */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                {[
                  { label: "Total", val: questions.length, color: techMeta?.color || "#6366f1", bg: techMeta?.bg || "#eef2ff" },
                  { label: "Easy", val: questions.filter(q => q.difficulty === "Easy").length, color: "#16a34a", bg: "#f0fdf4" },
                  { label: "Medium", val: questions.filter(q => q.difficulty === "Medium").length, color: "#d97706", bg: "#fffbeb" },
                  { label: "Hard", val: questions.filter(q => q.difficulty === "Hard").length, color: "#dc2626", bg: "#fef2f2" },
                ].map(s => (
                  <div key={s.label} style={{
                    background: s.bg, border: `1px solid ${s.color}30`,
                    borderRadius: 10, padding: "8px 14px",
                    display: "flex", alignItems: "center", gap: 7,
                  }}>
                    <span style={{ fontSize: 20, fontWeight: 800, color: s.color, fontFamily: "Geist Mono,monospace", lineHeight: 1 }}>{s.val}</span>
                    <span style={{ fontSize: 11, color: s.color, fontFamily: "Geist,sans-serif", fontWeight: 600, opacity: 0.8 }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Question cards */}
              {questions.map((q, i) => (
                <QCard key={i} q={q} idx={i} techMeta={techMeta || { color: "#6366f1", bg: "#eef2ff", icon: "💡" }} />
              ))}

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  marginTop: 28, padding: "24px", borderRadius: 16,
                  background: C.isDark
                    ? "linear-gradient(135deg, #1a1f2e, #1e2533)"
                    : "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                  border: `1px solid ${C.border}`, textAlign: "center",
                }}
              >
                <p style={{ margin: "0 0 14px", fontSize: 14, color: C.textMid, fontFamily: "Geist,sans-serif" }}>
                  Want questions for another technology from your resume?
                </p>
                <button
                  onClick={() => { setStep("select"); setSelectedTech(null); setQuestions([]); }}
                  style={{
                    padding: "10px 24px", borderRadius: 10, border: "none",
                    background: "linear-gradient(135deg, #f15a2b, #ff7a52)",
                    color: "#fff", cursor: "pointer", fontSize: 13.5,
                    fontFamily: "Geist,sans-serif", fontWeight: 700,
                    boxShadow: "0 4px 14px #f15a2b30",
                  }}
                >← Choose Another Technology</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
