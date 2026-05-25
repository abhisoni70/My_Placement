import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InView } from "../../utils";
import { useTheme } from "../../utils/ThemeContext";

// Minimal seed to show if nothing in localStorage
const SEED_PREVIEW = [
  { id: "s1", company: "Accenture", role: "Associate Software Engineer", outcome: "Selected", difficulty: "Medium", rounds: 3, name: "Aditya K.", college: "BITS Pilani", experience: "Accenture interviews are more comprehensive than TCS/Infosys. They want people who can think, not just memorize. The technical round was genuinely interesting.", postedAt: new Date(Date.now() - 8 * 86400000).toISOString() },
  { id: "s2", company: "TCS",       role: "Software Engineer",           outcome: "Selected", difficulty: "Easy",   rounds: 3, name: "Rahul S.",   college: "NIT Trichy",  experience: "Overall a very smooth process. TCS is known for a structured recruitment and they keep to it. The coding round is the real filter.", postedAt: new Date(Date.now() - 2 * 86400000).toISOString() },
  { id: "s3", company: "Capgemini", role: "Analyst",                     outcome: "Selected", difficulty: "Hard",   rounds: 3, name: "Vikram N.",  college: "Manipal",     experience: "Capgemini was the toughest interview I appeared for. Their technical bar is genuinely high compared to other service companies.", postedAt: new Date(Date.now() - 15 * 86400000).toISOString() },
];

const COMPANY_COLORS = { TCS: "#1a73e8", Infosys: "#006EAF", Wipro: "#7a1ea1", Accenture: "#a100ff", Capgemini: "#003882", Cognizant: "#1961ac", HCL: "#e2231a" };
const OUTCOME_COLORS = { Selected: { bg: "#d1fae5", text: "#065f46" }, Rejected: { bg: "#fee2e2", text: "#991b1b" }, Waitlisted: { bg: "#fef3c7", text: "#92400e" } };
const DIFF_COLORS    = { Easy: { bg: "#d1fae5", text: "#065f46" }, Medium: { bg: "#fef3c7", text: "#92400e" }, Hard: { bg: "#fee2e2", text: "#991b1b" } };

function timeAgo(iso) {
  const d = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (d < 1) return "Today";
  if (d < 30) return `${d}d ago`;
  return `${Math.floor(d / 30)}mo ago`;
}

export default function InterviewExperienceTeaser({ setPage, C }) {
  const { C: themeC } = useTheme();
  const colors = C || themeC;
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("ap-interview-exp") || "[]");
      const all = stored.length > 0 ? stored : SEED_PREVIEW;
      setItems(all.slice(0, 3));
    } catch {
      setItems(SEED_PREVIEW);
    }
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%),1fr))", gap: 16 }}>
      {items.map((exp, i) => {
        const cc = COMPANY_COLORS[exp.company] || "#64748b";
        const oc = OUTCOME_COLORS[exp.outcome] || OUTCOME_COLORS.Selected;
        const dc = DIFF_COLORS[exp.difficulty] || DIFF_COLORS.Medium;
        return (
          <InView key={exp.id} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setPage("interview-exp")}
              style={{
                background: colors.bgCard,
                border: `1.5px solid ${colors.border}`,
                borderRadius: 20,
                padding: "22px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "border-color 0.2s, box-shadow 0.2s",
                display: "flex", flexDirection: "column", gap: 10,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = cc; e.currentTarget.style.boxShadow = `0 8px 28px ${cc}20`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: cc + "18", border: `1.5px solid ${cc}30`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Instrument Serif,serif", fontWeight: 700, fontSize: 14, color: cc }}>
                    {exp.company[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 13, color: colors.text }}>{exp.company}</div>
                    <div style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: colors.textMut }}>{exp.role}</div>
                  </div>
                </div>
                <span style={{ display: "inline-block", padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: "Geist,sans-serif", background: oc.bg, color: oc.text }}>{exp.outcome}</span>
              </div>

              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ display: "inline-block", padding: "2px 9px", borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: "Geist,sans-serif", background: dc.bg, color: dc.text }}>{exp.difficulty}</span>
                <span style={{ display: "inline-block", padding: "2px 9px", borderRadius: 20, fontSize: 11, fontWeight: 600, fontFamily: "Geist,sans-serif", background: colors.bgMuted, color: colors.textMid }}>{exp.rounds} Rounds</span>
              </div>

              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: colors.textMid, lineHeight: 1.6, margin: 0 }}>
                {exp.experience.slice(0, 110)}…
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 6, borderTop: `1px solid ${colors.border}` }}>
                <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: colors.textMut }}>{exp.name}{exp.college ? ` · ${exp.college}` : ""}</span>
                <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 11, color: colors.textMut }}>{timeAgo(exp.postedAt)}</span>
              </div>
            </motion.div>
          </InView>
        );
      })}
    </div>
  );
}
