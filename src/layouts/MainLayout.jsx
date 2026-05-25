import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/navigation/Navbar";
import { useTheme } from "../utils/ThemeContext";
import { DrawingTriggerButton, DrawingCanvas } from "../components/drawing/DrawingCanvas";

export default function MainLayout({ page, setPage, children }) {
  const { C } = useTheme();
  const [drawingOpen, setDrawingOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Geist,sans-serif", background: C.bg, minHeight: "100vh", color: C.text, transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        button { font-family:inherit; }
        body { background:${C.bg}; transition: background 0.3s; overflow-x: hidden; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:${C.bg}; }
        ::-webkit-scrollbar-thumb { background:${C.borderDark}; border-radius:3px; }
        input, select, textarea { color-scheme: ${C.isDark ? "dark" : "light"}; }
        img { max-width: 100%; }
        table { width: 100%; border-collapse: collapse; }

        /* Global responsive helpers */
        @media (max-width: 600px) {
          .hide-mobile { display: none !important; }
          .full-mobile { width: 100% !important; }
        }
        @media (min-width: 601px) {
          .hide-desktop { display: none !important; }
        }
      `}</style>

      <Navbar page={page} setPage={setPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflowX: "hidden" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* ── Floating Drawing Button ── */}
      <DrawingTriggerButton onClick={() => setDrawingOpen(true)} />

      {/* ── Drawing Canvas Modal ── */}
      <AnimatePresence>
        {drawingOpen && (
          <DrawingCanvas onClose={() => setDrawingOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
