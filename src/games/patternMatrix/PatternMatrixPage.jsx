import { motion } from "framer-motion";
import { useTheme } from "../../utils/ThemeContext";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";

/**
 * PatternMatrixPage — dedicated game page for the Pattern Matrix game.
 * Currently renders a launch screen; game logic can be added here.
 * Props:
 *   setPage — page navigation setter
 */
export default function PatternMatrixPage({ setPage }) {
  const { C } = useTheme();
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        .pm-h1 { font-size: 48px !important; }
        .pm-card { padding: 40px 32px !important; }
        .pm-mobile-back { display: none !important; }
        @media (max-width: 600px) {
          .pm-h1 { font-size: 28px !important; }
          .pm-card { padding: 28px 16px !important; }
          .pm-mobile-back { display: flex !important; }
        }
      `}</style>

      {/* Mobile sticky back */}
      <div className="pm-mobile-back" style={{
        position: "sticky", top: 56, zIndex: 90,
        background: C.bgCard, borderBottom: `1px solid ${C.border}`,
        padding: "10px 16px", alignItems: "center",
      }}>
        <button
          onClick={() => setPage("practice")}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "none", border: "none", cursor: "pointer",
            color: C.brand, fontFamily: "Geist,sans-serif",
            fontSize: 14, fontWeight: 700, padding: 0,
          }}
        >
          ← Back to Practice
        </button>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: 560, width: "100%", textAlign: "center" }}
      >
        <div style={{ width: 80, height: 80, borderRadius: 24, background: "#fff3eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, color: C.coral, margin: "0 auto 28px" }}>
          ◉
        </div>

        <SectionHeader>Game: Pattern Matrix</SectionHeader>

        <h1 className="pm-h1" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: C.navy, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
          Pattern Matrix
        </h1>
        <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: C.textMid, lineHeight: 1.7, marginBottom: 40 }}>
          Identify hidden patterns across a grid of symbols, shapes, and numbers.
          20 questions · 12 minutes · Medium difficulty.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="coral" size="xl" onClick={() => setPage("results")}>
            Start Game →
          </Button>
          <Button variant="ghost" size="xl" onClick={() => setPage("practice")}>
            Back to Practice
          </Button>
        </div>
      </motion.div>
      </div>
    </div>
  );
}
