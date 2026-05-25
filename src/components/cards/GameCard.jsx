import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, DifficultyPill } from "../ui/primitives";
import Button from "../ui/Button";
import { useTheme } from "../../utils/ThemeContext";

/**
 * GameCard — premium game card for the Practice Games page grid.
 */
export default function GameCard({ game, index, onStart }) {
  const { C } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.09, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="game-card-wrap"
        style={{
          background: C.bgCard,
          border: `1.5px solid ${hovered ? game.iconColor + "50" : C.border}`,
          borderRadius: 22,
          overflow: "hidden",
          boxShadow: hovered
            ? `0 20px 56px ${game.iconColor}18, 0 4px 16px rgba(15,31,61,0.08)`
            : "0 2px 12px rgba(15,31,61,0.05)",
          transform: hovered ? "translateY(-6px)" : "none",
          transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top gradient band */}
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg, ${game.iconColor}, ${game.iconColor}55)`,
            opacity: hovered ? 1 : 0.7,
            transition: "opacity 0.3s",
          }}
        />

        <div style={{ padding: "26px 26px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Icon + category */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div
              className="game-card-icon"
              style={{
                width: 54,
                height: 54,
                borderRadius: 16,
                background: game.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                color: game.iconColor,
                border: `1px solid ${game.iconColor}20`,
                transition: "transform 0.3s",
                transform: hovered ? "scale(1.06)" : "scale(1)",
              }}
            >
              {game.icon}
            </div>
            <Tag color={C.textMut} bg={C.bgMuted}>
              {game.category}
            </Tag>
          </div>

          {/* Title + description */}
          <h2
            style={{
              fontFamily: "Geist,sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: C.navy,
              marginBottom: 8,
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            {game.title}
          </h2>
          <p
            style={{
              fontFamily: "Geist,sans-serif",
              fontSize: 13,
              color: C.textMid,
              lineHeight: 1.65,
              marginBottom: 20,
              flex: 1,
            }}
          >
            {game.desc}
          </p>

          {/* Meta row */}
          <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.textMut} strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, fontWeight: 500 }}>
                {game.duration}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.textMut} strokeWidth="2" strokeLinecap="round">
                <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, fontWeight: 500 }}>
                {game.questions} questions
              </span>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 22 }}>
            {game.tags.map(t => (
              <span key={t} style={{
                fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700,
                color: game.iconColor, background: game.iconColor + "12",
                border: `1px solid ${game.iconColor}25`, borderRadius: 999, padding: "2px 8px",
              }}>{t}</span>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 18,
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <DifficultyPill level={game.difficulty} color={game.diffColor} />
            <Button variant="primary" size="md" onClick={onStart}
              style={{
                background: hovered ? game.iconColor : C.navy,
                boxShadow: hovered ? `0 6px 20px ${game.iconColor}40` : `0 4px 14px ${C.navy}25`,
              }}
            >
              Start Game →
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
