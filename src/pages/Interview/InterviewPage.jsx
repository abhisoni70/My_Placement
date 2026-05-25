import { useState, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INTERVIEW_TOPICS, SQL_QUESTIONS, DJANGO_QUESTIONS, PYTHON_QUESTIONS, PYTHON_QUESTIONS_2, JAVA_QUESTIONS, DSA_QUESTIONS } from "../../constants/interviewData";
import { useTheme } from "../../utils/ThemeContext";
import { useBookmarks } from "../../utils/BookmarkContext";

const QUESTIONS_PER_PAGE = 8;

// ── Difficulty colors ─────────────────────────────────────────────────────────
const DIFF = {
  Easy:   { bg: "#dcfce7", text: "#15803d", dot: "#22c55e" },
  Medium: { bg: "#fef3c7", text: "#b45309", dot: "#f59e0b" },
  Hard:   { bg: "#fee2e2", text: "#b91c1c", dot: "#ef4444" },
};

// ── Render markdown-ish answer ────────────────────────────────────────────────
function renderAnswer(text, C) {
  const parts = text.split(/(```[\s\S]*?```)/g);
  return parts.map((part, i) => {
    if (part.startsWith("```")) {
      const code = part.replace(/```(?:sql|js|python|bash|html)?\n?/, "").replace(/```$/, "");
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
    // Handle table
    if (part.includes("|") && part.includes("---")) {
      const rows = part.trim().split("\n").filter(r => r.trim() && !r.match(/^\|[-\s|]+\|$/));
      return (
        <div key={i} style={{ overflowX: "auto", margin: "10px 0", borderRadius: 10, border: `1px solid ${C.border}` }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13, fontFamily: "Geist,sans-serif", minWidth: 300 }}>
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1);
                const CellTag = ri === 0 ? "th" : "td";
                return (
                  <tr key={ri} style={{ background: ri === 0 ? (C.isDark ? "#1e293b" : "#f1f5f9") : ri % 2 === 0 ? C.bgCard : C.bgMuted }}>
                    {cells.map((cell, ci) => (
                      <CellTag key={ci} style={{
                        border: `1px solid ${C.border}`, padding: "8px 14px",
                        textAlign: "left", fontWeight: ri === 0 ? 700 : 400,
                        color: ri === 0 ? C.navy : C.textMid, fontSize: ri === 0 ? 12 : 13,
                        textTransform: ri === 0 ? "uppercase" : "none",
                        letterSpacing: ri === 0 ? "0.04em" : 0,
                      }}>{cell.trim()}</CellTag>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    // Bold + normal text
    const segments = part.split(/(\*\*[^*]+\*\*)/g).map((b, j) => {
      if (b.startsWith("**") && b.endsWith("**")) {
        return <strong key={j} style={{ color: C.navy, fontWeight: 700 }}>{b.slice(2, -2)}</strong>;
      }
      return b;
    });
    return (
      <p key={i} style={{
        fontSize: 14, lineHeight: 1.8, color: C.textMid,
        whiteSpace: "pre-line", margin: "4px 0",
        fontFamily: "Geist,sans-serif",
      }}>{segments}</p>
    );
  });
}

// ── Question Card ─────────────────────────────────────────────────────────────
function QuestionCard({ q, index, topic, globalIndex }) {
  const { C } = useTheme();
  const { toggle: toggleBookmark, isBookmarked } = useBookmarks();
  const [open, setOpen] = useState(false);
  const bookmarked = isBookmarked(q.id, topic);
  const diff = DIFF[q.difficulty] || DIFF.Easy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: C.bgCard,
        border: `1px solid ${open ? C.brand : C.border}`,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: open
          ? `0 4px 20px rgba(37,99,235,0.1), 0 0 0 1px ${C.brand}20`
          : `0 1px 3px rgba(0,0,0,${C.isDark ? "0.3" : "0.05"})`,
        transition: "border-color 0.2s, box-shadow 0.2s",
        marginBottom: 8,
      }}
    >
      {/* Header row */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          padding: "16px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
        }}
      >
        {/* Number */}
        <div style={{
          width: 34, height: 34, borderRadius: 9, flexShrink: 0,
          background: open
            ? `linear-gradient(135deg, ${C.brand}, #3b82f6)`
            : C.bgMuted,
          color: open ? "#fff" : C.textMut,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, fontFamily: "Geist Mono,monospace",
          transition: "all 0.2s",
        }}>
          {String(globalIndex).padStart(2, "0")}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
            {/* Diff badge */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              background: diff.bg, color: diff.text,
              borderRadius: 20, padding: "3px 10px",
              fontSize: 11, fontWeight: 700, fontFamily: "Geist,sans-serif",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: diff.dot, display: "inline-block" }} />
              {q.difficulty}
            </span>
            {/* Category */}
            <span style={{
              fontSize: 11, color: C.textMut, fontFamily: "Geist,sans-serif",
              background: C.bgMuted, padding: "3px 10px", borderRadius: 20,
              border: `1px solid ${C.border}`,
            }}>{q.category}</span>
          </div>
          <p style={{
            margin: 0, fontSize: 14.5, fontWeight: 650,
            color: C.navy, lineHeight: 1.5,
            fontFamily: "Geist,sans-serif",
          }}>{q.question}</p>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0, paddingTop: 2 }}>
          <button
            onClick={e => { e.stopPropagation(); toggleBookmark({ ...q, topic }); }}
            style={{
              background: bookmarked ? (C.isDark ? "#451a03" : "#fef3c7") : C.bgMuted,
              border: `1px solid ${bookmarked ? "#f59e0b" : C.border}`,
              cursor: "pointer", fontSize: 14, padding: "5px 8px",
              borderRadius: 8, color: bookmarked ? "#f59e0b" : C.textMut,
              transition: "all 0.2s", lineHeight: 1,
            }}
            title={bookmarked ? "Bookmarked" : "Bookmark"}
          >{bookmarked ? "★" : "☆"}</button>

          <div style={{
            width: 30, height: 30, display: "flex", alignItems: "center",
            justifyContent: "center", borderRadius: 8,
            background: open ? (C.isDark ? "#1e3a5f" : "#eff6ff") : C.bgMuted,
            transition: "all 0.2s",
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d={open ? "M2 9L6.5 4.5L11 9" : "M2 4.5L6.5 9L11 4.5"}
                stroke={open ? C.brand : C.textMid} strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              padding: "18px 20px 20px 68px",
              borderTop: `1px solid ${C.border}`,
              background: C.isDark ? `${C.bgMuted}80` : "#fafbff",
            }}>
              <div>{renderAnswer(q.answer, C)}</div>
              {q.tags?.length > 0 && (
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16, paddingTop: 14, borderTop: `1px dashed ${C.border}` }}>
                  {q.tags.map(tag => (
                    <span key={tag} style={{
                      background: C.isDark ? "#1e3a5f" : "#eff6ff",
                      color: C.brand, border: `1px solid ${C.isDark ? "#2d4f80" : "#bfdbfe"}`,
                      borderRadius: 20, padding: "3px 10px",
                      fontSize: 11, fontWeight: 500, fontFamily: "Geist,sans-serif",
                    }}>#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Pagination ────────────────────────────────────────────────────────────────
function Pagination({ currentPage, totalPages, onPageChange, totalItems, perPage }) {
  const { C } = useTheme();

  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalItems);

  // Build page numbers with ellipsis
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages.push("...");
    }
  }
  const deduped = pages.filter((p, idx) => !(p === "..." && pages[idx - 1] === "..."));

  const btnStyle = (active, disabled) => ({
    height: 36, minWidth: 36, padding: "0 10px",
    display: "flex", alignItems: "center", justifyContent: "center",
    borderRadius: 9, fontSize: 13, fontWeight: 600,
    fontFamily: "Geist,sans-serif", cursor: disabled ? "not-allowed" : "pointer",
    border: `1px solid ${active ? C.brand : C.border}`,
    background: active
      ? `linear-gradient(135deg, ${C.brand}, #3b82f6)`
      : disabled ? C.bgMuted : C.bgCard,
    color: active ? "#fff" : disabled ? C.textMut : C.navy,
    opacity: disabled ? 0.5 : 1,
    boxShadow: active ? "0 2px 10px rgba(37,99,235,0.3)" : "none",
    transition: "all 0.15s",
  });

  return (
    <div style={{
      marginTop: 28,
      padding: "20px",
      background: C.bgCard,
      border: `1px solid ${C.border}`,
      borderRadius: 14,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
    }}>
      {/* Info */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ height: 2, width: 20, background: C.border, borderRadius: 2 }} />
        <p style={{
          margin: 0, fontSize: 12.5, color: C.textMut,
          fontFamily: "Geist,sans-serif",
        }}>
          Showing <strong style={{ color: C.navy, fontWeight: 700 }}>{start}–{end}</strong>{" "}
          of <strong style={{ color: C.navy, fontWeight: 700 }}>{totalItems}</strong> questions
        </p>
        <div style={{ height: 2, width: 20, background: C.border, borderRadius: 2 }} />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        {/* First */}
        <button onClick={() => onPageChange(1)} disabled={currentPage === 1} style={btnStyle(false, currentPage === 1)} title="First">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 3L7 7L11 11M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Prev */}
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} style={{ ...btnStyle(false, currentPage === 1), gap: 4 }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Prev</span>
        </button>

        {/* Page numbers */}
        {deduped.map((p, idx) =>
          p === "..." ? (
            <div key={`d${idx}`} style={{ ...btnStyle(false, true), background: "transparent", border: "none", color: C.textMut }}>···</div>
          ) : (
            <button key={p} onClick={() => onPageChange(p)} style={btnStyle(currentPage === p, false)}>{p}</button>
          )
        )}

        {/* Next */}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} style={{ ...btnStyle(false, currentPage === totalPages), gap: 4 }}>
          <span>Next</span>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Last */}
        <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} style={btnStyle(false, currentPage === totalPages)} title="Last">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3L7 7L3 11M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div style={{ width: "100%", maxWidth: 300 }}>
        <div style={{
          height: 4, background: C.bgMuted, borderRadius: 4, overflow: "hidden",
        }}>
          <motion.div
            initial={false}
            animate={{ width: `${(currentPage / totalPages) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              height: "100%", borderRadius: 4,
              background: `linear-gradient(90deg, ${C.brand}, #3b82f6)`,
            }}
          />
        </div>
        <p style={{
          margin: "6px 0 0", fontSize: 11, color: C.textMut,
          fontFamily: "Geist,sans-serif", textAlign: "center",
        }}>Page {currentPage} of {totalPages}</p>
      </div>
    </div>
  );
}

// ── Sidebar Topic Button ──────────────────────────────────────────────────────
function TopicBtn({ topic, active, onClick, count }) {
  const { C } = useTheme();
  return (
    <button
      onClick={onClick}
      disabled={!topic.active}
      style={{
        width: "100%", display: "flex", alignItems: "center", gap: 10,
        padding: "10px 12px", borderRadius: 10, border: "none",
        background: active ? (C.isDark ? "#1e3a5f" : "#eff6ff") : "transparent",
        cursor: topic.active ? "pointer" : "default",
        transition: "all 0.15s", textAlign: "left",
        borderLeft: active ? `3px solid ${C.brand}` : "3px solid transparent",
      }}
    >
      <span style={{ fontSize: 17, flexShrink: 0 }}>{topic.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          fontSize: 13, fontWeight: active ? 700 : 500,
          color: active ? C.brand : topic.active ? C.navy : C.textMut,
          fontFamily: "Geist,sans-serif", display: "block",
        }}>{topic.label}</span>
        {!topic.active && (
          <span style={{ fontSize: 10.5, color: C.textMut, fontFamily: "Geist,sans-serif" }}>Coming soon</span>
        )}
      </div>
      {count !== undefined && topic.active && (
        <span style={{
          fontSize: 10.5, fontWeight: 700, color: active ? C.brand : C.textMut,
          background: active ? (C.isDark ? "#1e3a5f" : "#dbeafe") : C.bgMuted,
          padding: "2px 7px", borderRadius: 20, fontFamily: "Geist Mono,monospace",
          border: `1px solid ${active ? C.brand + "40" : C.border}`,
        }}>{count}</span>
      )}
    </button>
  );
}

// ── Bookmarks Panel ───────────────────────────────────────────────────────────
function BookmarksPanel({ onJump }) {
  const { C } = useTheme();
  const { bookmarks, toggle: removeBookmark } = useBookmarks();
  const [open, setOpen] = useState(false);

  if (bookmarks.length === 0) return (
    <div style={{
      padding: "12px", background: C.bgMuted,
      borderRadius: 10, border: `1px solid ${C.border}`,
      textAlign: "center",
    }}>
      <span style={{ fontSize: 18 }}>🔖</span>
      <p style={{ margin: "4px 0 0", fontSize: 11.5, color: C.textMut, fontFamily: "Geist,sans-serif" }}>
        No bookmarks yet
      </p>
    </div>
  );

  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 12px", borderRadius: 10,
          border: `1px solid ${open ? C.brand : C.border}`,
          background: open ? (C.isDark ? "#1e3a5f" : "#eff6ff") : C.bgCard,
          cursor: "pointer", fontFamily: "Geist,sans-serif",
          transition: "all 0.2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ fontSize: 14 }}>🔖</span>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: open ? C.brand : C.navy }}>
            Saved ({bookmarks.length})
          </span>
        </div>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path d={open ? "M2 8L6 4L10 8" : "M2 4L6 8L10 4"}
            stroke={open ? C.brand : C.textMid} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              border: `1px solid ${C.border}`, borderTop: "none",
              borderRadius: "0 0 10px 10px", background: C.bgCard,
              maxHeight: 260, overflowY: "auto",
            }}>
              {bookmarks.map((bm, i) => (
                <div key={`${bm.id}-${bm.topic}`} style={{
                  padding: "9px 12px",
                  borderBottom: i < bookmarks.length - 1 ? `1px solid ${C.border}` : "none",
                  display: "flex", alignItems: "flex-start", gap: 8,
                }}>
                  <div onClick={() => onJump?.(bm)} style={{ flex: 1, minWidth: 0, cursor: "pointer" }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, color: C.brand,
                      fontFamily: "Geist,sans-serif", display: "block", marginBottom: 2,
                      textTransform: "uppercase", letterSpacing: "0.05em",
                    }}>{bm.topic?.toUpperCase()} ↗</span>
                    <p style={{
                      margin: 0, fontSize: 11.5, color: C.navy,
                      lineHeight: 1.4, fontWeight: 500,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      fontFamily: "Geist,sans-serif",
                    }}>{bm.question}</p>
                  </div>
                  <button
                    onClick={() => removeBookmark(bm)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: 15, color: "#ef4444", padding: "0 2px", flexShrink: 0,
                    }}
                  >×</button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Topic → Questions map ─────────────────────────────────────────────────────
const TOPIC_QUESTIONS = {
  sql: SQL_QUESTIONS,
  django: DJANGO_QUESTIONS,
  python: [...PYTHON_QUESTIONS, ...PYTHON_QUESTIONS_2],
  java: JAVA_QUESTIONS,
  dsa: DSA_QUESTIONS,
};

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function InterviewPage() {
  const { C } = useTheme();
  const [activeTopic, setActiveTopic]  = useState("django");
  const [search, setSearch]            = useState("");
  const [diffFilter, setDiffFilter]    = useState("All");
  const [catFilter, setCatFilter]      = useState("All");
  const [currentPage, setCurrentPage]  = useState(1);
  const listTopRef = useRef(null);

  const scrollToTop = useCallback(() => {
    setTimeout(() => listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }, []);

  const handlePageChange = (page) => { setCurrentPage(page); scrollToTop(); };

  const handleTopicChange = (id) => {
    setActiveTopic(id); setSearch(""); setDiffFilter("All"); setCatFilter("All"); setCurrentPage(1);
  };

  const handleFilter = (type, val) => {
    if (type === "search") setSearch(val);
    if (type === "diff")   setDiffFilter(val);
    if (type === "cat")    setCatFilter(val);
    setCurrentPage(1);
  };

  const handleJump = (bm) => {
    setActiveTopic(bm.topic); setSearch(""); setDiffFilter("All"); setCatFilter("All");
    const allQ = TOPIC_QUESTIONS[bm.topic] || [];
    const idx = allQ.findIndex(q => q.id === bm.id);
    if (idx !== -1) setCurrentPage(Math.floor(idx / QUESTIONS_PER_PAGE) + 1);
  };

  const activeQuestions = TOPIC_QUESTIONS[activeTopic] || [];

  const categories = useMemo(() => {
    const cats = [...new Set(activeQuestions.map(q => q.category))];
    return ["All", ...cats];
  }, [activeQuestions]);

  const filtered = useMemo(() => activeQuestions.filter(q => {
    const s = search.toLowerCase();
    return (!search || q.question.toLowerCase().includes(s) || q.tags?.some(t => t.toLowerCase().includes(s)))
      && (diffFilter === "All" || q.difficulty === diffFilter)
      && (catFilter  === "All" || q.category  === catFilter);
  }), [activeQuestions, search, diffFilter, catFilter]);

  const totalPages = Math.ceil(filtered.length / QUESTIONS_PER_PAGE);
  const safePage   = Math.min(currentPage, totalPages || 1);
  const startIdx   = (safePage - 1) * QUESTIONS_PER_PAGE;
  const pageItems  = filtered.slice(startIdx, startIdx + QUESTIONS_PER_PAGE);

  const activeTopic_ = INTERVIEW_TOPICS.find(t => t.id === activeTopic);
  const easyCount    = filtered.filter(q => q.difficulty === "Easy").length;
  const medCount     = filtered.filter(q => q.difficulty === "Medium").length;
  const hardCount    = filtered.filter(q => q.difficulty === "Hard").length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "Geist,sans-serif" }}>
      <style>{`
        .interview-layout { display: grid !important; grid-template-columns: 240px 1fr !important; }
        .interview-sidebar { display: block !important; }
        .interview-mobile-topics { display: none !important; }
        .interview-header-pad { padding: 44px 32px 36px !important; }
        .interview-content-pad { padding: 28px 32px !important; }
        @media (max-width: 900px) {
          .interview-layout { grid-template-columns: 1fr !important; }
          .interview-sidebar { display: none !important; }
          .interview-mobile-topics { display: flex !important; }
          .interview-header-pad { padding: 28px 16px 24px !important; }
          .interview-content-pad { padding: 16px !important; }
        }
        @media (max-width: 600px) {
          .interview-header-pad { padding: 20px 12px 18px !important; }
          .interview-header-h1 { font-size: 20px !important; }
          .interview-filter-row { flex-direction: column !important; gap: 8px !important; }
          .interview-filter-row input { width: 100% !important; }
        }
        .interview-mobile-topics::-webkit-scrollbar { display: none; }
        .interview-mobile-topics { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── Header ── */}
      <div className="interview-header-pad" style={{
        background: C.isDark
          ? "linear-gradient(135deg, #0d1117 0%, #161b26 100%)"
          : "linear-gradient(135deg, #0f1f3d 0%, #1a3560 60%, #1e40af 100%)",
        padding: "44px 32px 36px",
        borderBottom: `1px solid ${C.isDark ? "#21262d" : "#1e3a8a"}`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{
                fontSize: 10.5, fontWeight: 700, letterSpacing: "0.15em",
                textTransform: "uppercase", color: "#93c5fd",
                fontFamily: "Geist,sans-serif",
                background: "#1d4ed820", padding: "3px 10px", borderRadius: 20,
                border: "1px solid #2563eb40",
              }}>💼 Interview Prep</span>
            </div>
            <h1 style={{
              margin: "0 0 10px", fontSize: "clamp(24px,4vw,36px)",
              fontWeight: 800, color: "#fff", lineHeight: 1.2,
              fontFamily: "Instrument Serif,serif", letterSpacing: "-0.02em",
            }}>
              Crack Your Technical Interview
            </h1>
            <p style={{ margin: 0, fontSize: 15, color: "#93c5fd", maxWidth: 500, lineHeight: 1.6 }}>
              Topic-wise curated Q&amp;A with detailed answers. Filter, search, and master every concept.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile Topic Chips (visible only on mobile / tablet) ── */}
      <div
        className="interview-mobile-topics"
        style={{
          display: "none",
          overflowX: "auto",
          gap: 8,
          padding: "10px 16px",
          background: C.bgCard,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {INTERVIEW_TOPICS.map(t => {
          const isActive = activeTopic === t.id && t.active;
          return (
            <button
              key={t.id}
              onClick={() => t.active && handleTopicChange(t.id)}
              disabled={!t.active}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                whiteSpace: "nowrap",
                flexShrink: 0,
                padding: "7px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Geist,sans-serif",
                cursor: t.active ? "pointer" : "default",
                border: `1.5px solid ${isActive ? C.brand : C.border}`,
                background: isActive
                  ? `linear-gradient(135deg, ${C.brand}, #3b82f6)`
                  : C.isDark ? C.bgMuted : "#fff",
                color: isActive ? "#fff" : t.active ? C.navy : C.textMut,
                opacity: t.active ? 1 : 0.45,
                transition: "all 0.18s",
                boxShadow: isActive ? `0 2px 8px ${C.brand}40` : "none",
              }}
            >
              <span style={{ fontSize: 15 }}>{t.icon}</span>
              {t.label}
              {t.active && TOPIC_QUESTIONS[t.id] && (
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  background: isActive ? "rgba(255,255,255,0.25)" : C.bgMuted,
                  color: isActive ? "#fff" : C.textMut,
                  borderRadius: 20, padding: "1px 6px",
                }}>
                  {TOPIC_QUESTIONS[t.id].length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Body ── */}
      <div className="interview-content-pad" style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", gap: 24, alignItems: "flex-start",
      }}>

        {/* ── Sidebar ── */}
        <motion.div
          className="interview-sidebar"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            width: 230, flexShrink: 0,
            position: "sticky", top: 80,
            display: "flex", flexDirection: "column", gap: 16,
          }}
        >
          {/* Topics */}
          <div style={{
            background: C.bgCard, border: `1px solid ${C.border}`,
            borderRadius: 14, padding: "14px 10px",
            boxShadow: `0 1px 6px rgba(0,0,0,${C.isDark ? "0.25" : "0.04"})`,
          }}>
            <p style={{
              margin: "0 0 10px 4px", fontSize: 10.5, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.12em", color: C.textMut,
            }}>Topics</p>
            {INTERVIEW_TOPICS.map(t => (
              <TopicBtn
                key={t.id} topic={t}
                active={activeTopic === t.id && t.active}
                onClick={() => t.active && handleTopicChange(t.id)}
                count={TOPIC_QUESTIONS[t.id]?.length}
              />
            ))}
          </div>

          {/* Bookmarks */}
          <div style={{
            background: C.bgCard, border: `1px solid ${C.border}`,
            borderRadius: 14, padding: "14px 10px",
            boxShadow: `0 1px 6px rgba(0,0,0,${C.isDark ? "0.25" : "0.04"})`,
          }}>
            <p style={{
              margin: "0 0 10px 4px", fontSize: 10.5, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.12em", color: C.textMut,
            }}>Bookmarks</p>
            <BookmarksPanel onJump={handleJump} />
          </div>
        </motion.div>

        {/* ── Main content ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section heading */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                  boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                }}>{activeTopic_?.icon}</div>
                <div>
                  <h2 style={{
                    margin: 0, fontSize: 20, fontWeight: 800, color: C.navy,
                    fontFamily: "Instrument Serif,serif",
                  }}>
                    {activeTopic_?.label} Interview Questions
                  </h2>
                  <p style={{ margin: 0, fontSize: 12.5, color: C.textMut }}>
                    Placement & technical round preparation
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div style={{
                display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16,
              }}>
                {[
                  { label: "Total", val: activeQuestions.length, color: C.brand, bg: C.isDark ? "#1e3a5f" : "#eff6ff" },
                  { label: "Easy",   val: easyCount,  color: "#16a34a", bg: C.isDark ? "#14532d" : "#f0fdf4" },
                  { label: "Medium", val: medCount,   color: "#d97706", bg: C.isDark ? "#451a03" : "#fffbeb" },
                  { label: "Hard",   val: hardCount,  color: "#dc2626", bg: C.isDark ? "#450a0a" : "#fef2f2" },
                  ...(filtered.length !== activeQuestions.length
                    ? [{ label: "Filtered", val: filtered.length, color: C.purple, bg: C.isDark ? "#2e1065" : "#f5f3ff" }]
                    : []),
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

              {/* Filter bar */}
              <div style={{
                background: C.bgCard, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "14px 16px",
                marginBottom: 18,
                display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center",
                boxShadow: `0 1px 4px rgba(0,0,0,${C.isDark ? "0.2" : "0.03"})`,
              }}>
                {/* Search */}
                <div style={{ position: "relative", flex: 1, minWidth: 180 }}>
                  <span style={{
                    position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)",
                    color: C.textMut, fontSize: 14, pointerEvents: "none",
                  }}>🔍</span>
                  <input
                    value={search}
                    onChange={e => handleFilter("search", e.target.value)}
                    placeholder="Search questions or tags..."
                    style={{
                      width: "100%", boxSizing: "border-box",
                      border: `1px solid ${search ? C.brand : C.border}`,
                      borderRadius: 9, padding: "9px 11px 9px 33px",
                      fontSize: 13, fontFamily: "Geist,sans-serif",
                      background: C.bg, outline: "none", color: C.text,
                      transition: "border-color 0.15s",
                    }}
                  />
                  {search && (
                    <button
                      onClick={() => handleFilter("search", "")}
                      style={{
                        position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                        background: "none", border: "none", cursor: "pointer",
                        color: C.textMut, fontSize: 16, lineHeight: 1,
                      }}
                    >×</button>
                  )}
                </div>

                {/* Difficulty pills */}
                <div style={{ display: "flex", gap: 5 }}>
                  {["All", "Easy", "Medium", "Hard"].map(d => {
                    const active = diffFilter === d;
                    const color = d === "Easy" ? "#16a34a" : d === "Medium" ? "#d97706" : d === "Hard" ? "#dc2626" : C.brand;
                    return (
                      <button key={d} onClick={() => handleFilter("diff", d)} style={{
                        padding: "7px 13px", borderRadius: 9, fontSize: 12, fontWeight: 600,
                        border: `1px solid ${active ? color : C.border}`,
                        background: active ? color + (C.isDark ? "30" : "15") : C.bgCard,
                        color: active ? color : C.textMid,
                        cursor: "pointer", fontFamily: "Geist,sans-serif",
                        transition: "all 0.15s",
                      }}>{d}</button>
                    );
                  })}
                </div>

                {/* Category */}
                <select
                  value={catFilter}
                  onChange={e => handleFilter("cat", e.target.value)}
                  style={{
                    border: `1px solid ${catFilter !== "All" ? C.brand : C.border}`,
                    borderRadius: 9, padding: "8px 12px",
                    fontSize: 12.5, fontFamily: "Geist,sans-serif",
                    color: C.navy, background: C.bgCard, cursor: "pointer", outline: "none",
                    transition: "border-color 0.15s",
                  }}
                >
                  {categories.map(c => <option key={c}>{c}</option>)}
                </select>

                {/* Reset */}
                {(search || diffFilter !== "All" || catFilter !== "All") && (
                  <button
                    onClick={() => { setSearch(""); setDiffFilter("All"); setCatFilter("All"); setCurrentPage(1); }}
                    style={{
                      padding: "7px 12px", borderRadius: 9, fontSize: 12, fontWeight: 600,
                      border: `1px solid #ef444440`, background: "#fef2f2",
                      color: "#dc2626", cursor: "pointer", fontFamily: "Geist,sans-serif",
                    }}
                  >✕ Clear</button>
                )}
              </div>

              {/* Scroll anchor */}
              <div ref={listTopRef} style={{ scrollMarginTop: 90 }} />

              {/* Empty state */}
              {filtered.length === 0 ? (
                <div style={{
                  textAlign: "center", padding: "64px 20px",
                  background: C.bgCard, borderRadius: 16,
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: 44, marginBottom: 14 }}>🔎</div>
                  <h3 style={{ margin: "0 0 8px", color: C.navy, fontFamily: "Instrument Serif,serif", fontSize: 22 }}>No questions found</h3>
                  <p style={{ color: C.textMut, fontSize: 14, margin: "0 0 20px" }}>Try adjusting your search or filters.</p>
                  <button
                    onClick={() => { setSearch(""); setDiffFilter("All"); setCatFilter("All"); setCurrentPage(1); }}
                    style={{
                      padding: "9px 22px", borderRadius: 10, border: "none",
                      background: `linear-gradient(135deg, ${C.brand}, #3b82f6)`,
                      color: "#fff", cursor: "pointer", fontSize: 13,
                      fontFamily: "Geist,sans-serif", fontWeight: 600,
                    }}
                  >Reset All Filters</button>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTopic}-p${safePage}-${search}-${diffFilter}-${catFilter}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {/* Page header strip */}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      marginBottom: 12, padding: "0 2px",
                    }}>
                      <span style={{ fontSize: 12.5, color: C.textMut, fontFamily: "Geist,sans-serif" }}>
                        {filtered.length} question{filtered.length !== 1 ? "s" : ""}
                        {totalPages > 1 && ` · Page ${safePage} of ${totalPages}`}
                      </span>
                      {totalPages > 1 && (
                        <div style={{ display: "flex", gap: 4 }}>
                          {Array.from({ length: totalPages }, (_, i) => (
                            <div
                              key={i}
                              onClick={() => handlePageChange(i + 1)}
                              title={`Page ${i + 1}`}
                              style={{
                                width: safePage === i + 1 ? 20 : 8,
                                height: 8, borderRadius: 4,
                                background: safePage === i + 1 ? C.brand : C.border,
                                cursor: "pointer",
                                transition: "all 0.25s",
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Cards */}
                    {pageItems.map((q, i) => (
                      <QuestionCard
                        key={q.id}
                        q={q}
                        index={i}
                        topic={activeTopic}
                        globalIndex={startIdx + i + 1}
                      />
                    ))}

                    {/* Pagination */}
                    <Pagination
                      currentPage={safePage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                      totalItems={filtered.length}
                      perPage={QUESTIONS_PER_PAGE}
                    />
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
