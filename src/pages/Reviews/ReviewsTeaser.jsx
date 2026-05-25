import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InView } from "../../utils";
import { useTheme } from "../../utils/ThemeContext";

const SEED_PREVIEW = [
  { id: "rs1", name: "Priya Nair", college: "Manipal Institute", rating: 5, category: "Overall", title: "Went from zero to placed in 6 weeks", body: "AssessPrep's structured approach — starting easy, then ramping up difficulty — was exactly what I needed. Got placed in Capgemini.", postedAt: new Date(Date.now() - 22 * 86400000).toISOString() },
  { id: "rs2", name: "Divya Krishnan", college: "VIT Chennai", rating: 5, category: "Mock Tests", title: "Mock tests are incredibly realistic", body: "The timed mock assessments are on another level. My scores jumped 40% after consistent practice. Got placed in Infosys and Cognizant!", postedAt: new Date(Date.now() - 6 * 86400000).toISOString() },
  { id: "rs3", name: "Arjun Mehta", college: "NIT Warangal", rating: 5, category: "Practice Questions", title: "Best placement prep platform I've used", body: "The company-specific tracks were spot on — same pattern as actual exams. Cleared TCS NQT in first attempt after just 2 weeks here.", postedAt: new Date(Date.now() - 3 * 86400000).toISOString() },
];

function StarRow({ rating, size = 14 }) {
  return (
    <div style={{ display: "flex", gap: 1 }}>
      {[1,2,3,4,5].map(n => (
        <span key={n} style={{ fontSize: size, color: n <= rating ? "#f59e0b" : "#d1d5db", lineHeight: 1 }}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsTeaser({ setPage, C: propC }) {
  const { C: themeC } = useTheme();
  const C = propC || themeC;
  const [items, setItems] = useState([]);
  const [avg, setAvg] = useState("5.0");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("ap-reviews") || "[]");
      const SEED_REVIEWS_FULL = [
        { rating: 5 }, { rating: 5 }, { rating: 4 }, { rating: 5 }, { rating: 4 }, { rating: 5 },
      ];
      const all = stored.length > 0 ? stored : SEED_REVIEWS_FULL;
      const a = (all.reduce((s, r) => s + r.rating, 0) / all.length).toFixed(1);
      setAvg(a);
      setTotal(all.length);
      const preview = stored.length > 0
        ? [...stored].sort((a, b) => (b.helpful || 0) - (a.helpful || 0)).slice(0, 3)
        : SEED_PREVIEW;
      setItems(preview);
    } catch {
      setItems(SEED_PREVIEW);
      setAvg("5.0");
      setTotal(6);
    }
  }, []);

  return (
    <div>
      {/* Avg rating badge */}
      <InView>
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          marginBottom: 28, padding: "16px 24px",
          background: C.bgCard, border: `1.5px solid ${C.border}`,
          borderRadius: 16, width: "fit-content",
        }}>
          <span style={{ fontFamily: "Instrument Serif,serif", fontSize: 40, fontWeight: 400, color: C.text, lineHeight: 1, letterSpacing: "-0.03em" }}>
            {avg}
          </span>
          <div>
            <StarRow rating={Math.round(Number(avg))} size={18} />
            <div style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, marginTop: 4 }}>
              Based on {total} student reviews
            </div>
          </div>
        </div>
      </InView>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%),1fr))", gap: 16 }}>
        {items.map((r, i) => (
          <InView key={r.id} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setPage("reviews")}
              style={{
                background: C.bgCard, border: `1.5px solid ${C.border}`,
                borderRadius: 20, padding: "22px", cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "border-color 0.2s, box-shadow 0.2s",
                display: "flex", flexDirection: "column", gap: 10,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f59e0b"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,158,11,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <StarRow rating={r.rating} size={14} />
                <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 600, color: "#2563eb", background: "#2563eb12", borderRadius: 20, padding: "2px 9px" }}>
                  {r.category}
                </span>
              </div>

              <h3 style={{ fontFamily: "Instrument Serif,serif", fontSize: 17, fontWeight: 400, color: C.text, margin: 0, lineHeight: 1.3 }}>
                "{r.title}"
              </h3>

              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65, margin: 0 }}>
                {r.body.slice(0, 120)}{r.body.length > 120 ? "…" : ""}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 8, borderTop: `1px solid ${C.border}` }}>
                <div>
                  <div style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 600, color: C.text }}>{r.name}</div>
                  {r.college && <div style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut }}>{r.college}</div>}
                </div>
              </div>
            </motion.div>
          </InView>
        ))}
      </div>
    </div>
  );
}
