import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../utils/ThemeContext";
import { useBookmarks } from "../../utils/BookmarkContext";
import { INTERVIEW_TOPICS } from "../../constants/interviewData";

// ── Code + bold renderer (same as InterviewPage) ──────────────────────────────
function renderAnswer(text, C) {
  const parts = text.split(/(```[\s\S]*?```)/g);
  return parts.map((part, i) => {
    if (part.startsWith("```")) {
      const code = part.replace(/```(?:sql|js|python|bash)?\n?/, "").replace(/```$/, "");
      return (
        <pre key={i} style={{
          background: C.isDark ? "#0d1117" : "#0f172a",
          color: "#e2e8f0", borderRadius: 10,
          padding: "14px 16px", fontSize: 12.5, lineHeight: 1.7,
          overflowX: "auto", margin: "10px 0",
          fontFamily: "Geist Mono,monospace",
          border: `1px solid ${C.border}`,
        }}>{code}</pre>
      );
    }
    const bold = part.split(/(\*\*[^*]+\*\*)/g).map((b, j) => {
      if (b.startsWith("**") && b.endsWith("**"))
        return <strong key={j} style={{ color: C.navy }}>{b.slice(2, -2)}</strong>;
      if (b.includes("|") && b.includes("---")) {
        const rows = b.trim().split("\n").filter(r => r.trim() && !r.match(/^\|[-\s|]+\|$/));
        return (
          <div key={j} style={{ overflowX: "auto", margin: "10px 0" }}>
            <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12.5, fontFamily: "Geist Mono,monospace" }}>
              <tbody>
                {rows.map((row, ri) => {
                  const cells = row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1);
                  const Tag = ri === 0 ? "th" : "td";
                  return (
                    <tr key={ri} style={{ background: ri === 0 ? C.bgMuted : ri % 2 === 0 ? C.bgCard : C.bg }}>
                      {cells.map((cell, ci) => (
                        <Tag key={ci} style={{ border: `1px solid ${C.border}`, padding: "6px 12px", textAlign: "left", fontWeight: ri === 0 ? 700 : 400, color: C.text }}>
                          {cell.trim()}
                        </Tag>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      return b;
    });
    return (
      <p key={i} style={{ fontSize: 14, lineHeight: 1.75, color: C.textMid, whiteSpace: "pre-line", margin: "6px 0", fontFamily: "Geist,sans-serif" }}>
        {bold}
      </p>
    );
  });
}

const DIFF_COLORS = {
  Easy:   { bg: "#dcfce7", text: "#166534", border: "#bbf7d0" },
  Medium: { bg: "#fef9c3", text: "#854d0e", border: "#fef08a" },
  Hard:   { bg: "#fee2e2", text: "#991b1b", border: "#fecaca" },
};

function BookmarkCard({ q, index, onRemove }) {
  const { C } = useTheme();
  const [open, setOpen] = useState(false);
  const d = DIFF_COLORS[q.difficulty] || DIFF_COLORS.Easy;
  const topicInfo = INTERVIEW_TOPICS.find(t => t.id === q.topic);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -40, scale: 0.95 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: C.bgCard,
        border: `1px solid ${open ? C.brand : C.border}`,
        borderRadius: 14, overflow: "hidden",
        boxShadow: open ? `0 4px 24px ${C.isDark ? "rgba(96,165,250,0.1)" : "rgba(37,99,235,0.08)"}` : `0 1px 4px rgba(0,0,0,${C.isDark ? "0.2" : "0.04"})`,
        transition: "border-color 0.2s, box-shadow 0.2s",
        marginBottom: 12,
      }}
    >
      <div
        onClick={() => setOpen(o => !o)}
        style={{ padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 14 }}
      >
        {/* Number */}
        <div style={{
          minWidth: 32, height: 32, borderRadius: 8,
          background: open ? C.brand : C.bgMuted,
          color: open ? "#fff" : C.textMid,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 700, fontFamily: "Geist Mono,sans-serif",
          transition: "all 0.2s", flexShrink: 0,
        }}>{String(q.id).padStart(2, "0")}</div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
            {/* Difficulty */}
            <span style={{
              background: d.bg, color: d.text, border: `1px solid ${d.border}`,
              borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700,
              fontFamily: "Geist,sans-serif",
            }}>{q.difficulty}</span>
            {/* Category */}
            <span style={{ fontSize: 11, fontFamily: "Geist,sans-serif", background: C.bgMuted, padding: "2px 8px", borderRadius: 20, color: C.textMid }}>
              {q.category}
            </span>
            {/* Topic badge */}
            {topicInfo && (
              <span style={{ fontSize: 11, color: C.brand, fontFamily: "Geist,sans-serif", background: C.isDark ? "#1e3a5f" : "#eff6ff", padding: "2px 8px", borderRadius: 20, border: `1px solid ${C.isDark ? "#2a4d7a" : "#bfdbfe"}` }}>
                {topicInfo.icon} {topicInfo.label}
              </span>
            )}
          </div>
          <p style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: C.navy, lineHeight: 1.5, fontFamily: "Geist,sans-serif" }}>
            {q.question}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          {/* Remove bookmark */}
          <button
            onClick={e => { e.stopPropagation(); onRemove(q); }}
            title="Remove bookmark"
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 16, padding: "2px 4px", borderRadius: 6,
              color: C.coral, transition: "color 0.2s",
            }}
          >★</button>
          {/* Chevron */}
          <div style={{
            width: 24, height: 24, display: "flex", alignItems: "center",
            justifyContent: "center", borderRadius: 6,
            background: open ? (C.isDark ? "#1e3a5f" : "#eff6ff") : C.bgMuted,
            transition: "all 0.2s",
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d={open ? "M2 8L6 4L10 8" : "M2 4L6 8L10 4"}
                stroke={open ? C.brand : C.textMid} strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 20px 20px 66px", borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
              {renderAnswer(q.answer, C)}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
                {q.tags?.map(tag => (
                  <span key={tag} style={{
                    background: C.isDark ? "#1e3a5f" : "#eff6ff",
                    color: C.brand,
                    border: `1px solid ${C.isDark ? "#2a4d7a" : "#bfdbfe"}`,
                    borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 500,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function BookmarksPage({ setPage }) {
  const { C } = useTheme();
  const { bookmarks, toggle, clear } = useBookmarks();
  const [topicFilter, setTopicFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const topics = useMemo(() => {
    const ids = [...new Set(bookmarks.map(b => b.topic))];
    return ids;
  }, [bookmarks]);

  const filtered = useMemo(() => {
    return bookmarks.filter(b => {
      const matchTopic = topicFilter === "All" || b.topic === topicFilter;
      const matchSearch = !search ||
        b.question.toLowerCase().includes(search.toLowerCase()) ||
        b.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchTopic && matchSearch;
    });
  }, [bookmarks, topicFilter, search]);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "Geist,sans-serif" }}>
      <style>{`
        .bm-header-pad { padding: 48px 32px 40px !important; }
        .bm-body-pad { padding: 32px 24px !important; }
        @media (max-width: 600px) {
          .bm-header-pad { padding: 28px 16px 24px !important; }
          .bm-body-pad { padding: 16px !important; }
          .bm-filter-row { flex-direction: column !important; gap: 8px !important; }
          .bm-filter-row input, .bm-filter-row select { width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
      {/* Header */}
      <div className="bm-header-pad" style={{
        background: C.isDark
          ? `linear-gradient(135deg, #1a1d27 0%, #242736 60%, #1e2a40 100%)`
          : `linear-gradient(135deg, #0f1f3d 0%, #1a3560 60%, #1e40af 100%)`,
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 28 }}>🔖</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93c5fd" }}>
                Saved Questions
              </span>
            </div>
            <h1 style={{ margin: "0 0 10px", fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, fontFamily: "Instrument Serif,serif", letterSpacing: "-0.02em" }}>
              Your Bookmarks
            </h1>
            <p style={{ margin: 0, fontSize: 15, color: "#93c5fd", maxWidth: 500, lineHeight: 1.6 }}>
              Saare saved questions ek jagah — revision ke liye perfect.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="bm-body-pad" style={{ maxWidth: 1000, margin: "0 auto" }}>

        {bookmarks.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: "center", padding: "80px 20px",
              background: C.bgCard, borderRadius: 20,
              border: `1px solid ${C.border}`,
            }}
          >
            <div style={{ fontSize: 56, marginBottom: 16 }}>🔖</div>
            <h2 style={{ color: C.navy, fontFamily: "Instrument Serif,serif", fontSize: 24, marginBottom: 10 }}>
              Abhi tak koi bookmark nahi
            </h2>
            <p style={{ color: C.textMut, fontSize: 14, marginBottom: 24, maxWidth: 360, margin: "0 auto 24px" }}>
              Interview section mein questions ke saath ★ icon click karo unhe yahan save karne ke liye.
            </p>
            <button
              onClick={() => setPage("interview")}
              style={{
                padding: "10px 24px", borderRadius: 10, border: "none",
                background: C.brand, color: "#fff", cursor: "pointer",
                fontSize: 14, fontWeight: 600, fontFamily: "Geist,sans-serif",
              }}
            >
              Interview Questions Dekho →
            </button>
          </motion.div>
        ) : (
          <>
            {/* Stats + Clear */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: C.brand, fontFamily: "Geist Mono,monospace" }}>{bookmarks.length}</div>
                  <div style={{ fontSize: 11, color: C.textMut, fontFamily: "Geist,sans-serif" }}>Total Saved</div>
                </div>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: C.coral, fontFamily: "Geist Mono,monospace" }}>{topics.length}</div>
                  <div style={{ fontSize: 11, color: C.textMut, fontFamily: "Geist,sans-serif" }}>Topics</div>
                </div>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: C.gold, fontFamily: "Geist Mono,monospace" }}>{filtered.length}</div>
                  <div style={{ fontSize: 11, color: C.textMut, fontFamily: "Geist,sans-serif" }}>Showing</div>
                </div>
              </div>

              <button
                onClick={() => setShowConfirm(true)}
                style={{
                  padding: "8px 16px", borderRadius: 10, fontSize: 12, fontWeight: 600,
                  border: `1px solid ${C.isDark ? "#7f1d1d" : "#fecaca"}`,
                  background: C.isDark ? "#2d1515" : "#fff1f1",
                  color: "#ef4444", cursor: "pointer", fontFamily: "Geist,sans-serif",
                }}
              >
                🗑 Saare Clear Karo
              </button>
            </div>

            {/* Confirm clear dialog */}
            <AnimatePresence>
              {showConfirm && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  style={{
                    background: C.bgCard, border: `1px solid ${C.isDark ? "#7f1d1d" : "#fecaca"}`,
                    borderRadius: 12, padding: "16px 20px", marginBottom: 20,
                    display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
                  }}
                >
                  <p style={{ color: C.text, fontSize: 14, fontFamily: "Geist,sans-serif" }}>
                    Kya aap saare <strong>{bookmarks.length} bookmarks</strong> delete karna chahte ho?
                  </p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => setShowConfirm(false)} style={{ padding: "7px 16px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.bgMuted, color: C.textMid, cursor: "pointer", fontSize: 13, fontFamily: "Geist,sans-serif" }}>
                      Cancel
                    </button>
                    <button onClick={() => { clear(); setShowConfirm(false); setTopicFilter("All"); setSearch(""); }} style={{ padding: "7px 16px", borderRadius: 8, border: "none", background: "#ef4444", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "Geist,sans-serif" }}>
                      Haan, Delete Karo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Filters */}
            <div style={{
              display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24,
              background: C.bgCard, border: `1px solid ${C.border}`,
              borderRadius: 12, padding: 14,
            }}>
              {/* Search */}
              <div style={{ position: "relative", flex: 1, minWidth: 180 }}>
                <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: C.textMut, fontSize: 14 }}>🔍</span>
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search bookmarks..."
                  style={{
                    width: "100%", boxSizing: "border-box",
                    border: `1px solid ${C.border}`, borderRadius: 8,
                    padding: "8px 10px 8px 32px", fontSize: 13,
                    fontFamily: "Geist,sans-serif", color: C.text,
                    background: C.bg, outline: "none",
                  }}
                />
              </div>

              {/* Topic filter */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["All", ...topics].map(t => {
                  const info = INTERVIEW_TOPICS.find(x => x.id === t);
                  return (
                    <button
                      key={t}
                      onClick={() => setTopicFilter(t)}
                      style={{
                        padding: "7px 13px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                        border: `1px solid ${topicFilter === t ? C.brand : C.border}`,
                        background: topicFilter === t ? (C.isDark ? "#1e3a5f" : "#eff6ff") : C.bgCard,
                        color: topicFilter === t ? C.brand : C.textMid,
                        cursor: "pointer", fontFamily: "Geist,sans-serif", transition: "all 0.15s",
                      }}
                    >
                      {info ? `${info.icon} ${info.label}` : "All"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Questions list */}
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", background: C.bgCard, borderRadius: 14, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🔎</div>
                <p style={{ color: C.textMut, fontSize: 15 }}>Koi bookmark nahi mila. Filter change karo.</p>
                <button onClick={() => { setSearch(""); setTopicFilter("All"); }}
                  style={{ marginTop: 12, padding: "8px 18px", borderRadius: 8, border: "none", background: C.brand, color: "#fff", cursor: "pointer", fontSize: 13, fontFamily: "Geist,sans-serif" }}>
                  Reset
                </button>
              </div>
            ) : (
              <AnimatePresence>
                {filtered.map((q, i) => (
                  <BookmarkCard key={`${q.topic}-${q.id}`} q={q} index={i} onRemove={toggle} />
                ))}
              </AnimatePresence>
            )}
          </>
        )}
      </div>
    </div>
  );
}
