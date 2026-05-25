import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../utils/ThemeContext";

// ── Tag pill ────────────────────────────────────────────────────
export function Tag({ children, color, bg }) {
  const { C } = useTheme();
  const clr = color || C.brand;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "3px 10px", borderRadius: 999,
      fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
      fontFamily: "Geist,sans-serif",
      background: bg || clr + "18", color: clr, border: `1px solid ${clr}30`,
    }}>
      {children}
    </span>
  );
}

// ── Card wrapper ────────────────────────────────────────────────
export function Card({ children, style = {}, hoverable, onClick }) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      onMouseEnter={() => hoverable && setHov(true)}
      onMouseLeave={() => hoverable && setHov(false)}
      style={{
        background: C.bgCard,
        border: `1px solid ${hov ? C.borderDark : C.border}`,
        borderRadius: 20,
        boxShadow: hov ? "0 12px 40px rgba(15,31,61,0.10)" : "0 2px 12px rgba(15,31,61,0.05)",
        transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
        transform: hov ? "translateY(-4px)" : "none",
        cursor: onClick ? "pointer" : "default",
        overflow: "hidden", ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Difficulty pill ─────────────────────────────────────────────
export function DifficultyPill({ level, color }) {
  return (
    <span style={{
      padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600,
      background: color + "18", color,
      border: `1px solid ${color}30`, fontFamily: "Geist,sans-serif",
    }}>
      {level}
    </span>
  );
}

// ── Logo button ─────────────────────────────────────────────────
export function Logo({ onClick }) {
  const { C } = useTheme();
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
      <div style={{
        width: 34, height: 34, borderRadius: 10,
        background: `linear-gradient(135deg, ${C.brand}, ${C.coral})`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <span style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 17, color: C.navy, letterSpacing: "-0.03em" }}>
        Assess<span style={{ color: C.coral }}>Prep</span>
      </span>
    </button>
  );
}
