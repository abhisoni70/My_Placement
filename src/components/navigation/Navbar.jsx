import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "../../constants/companyTracks";
import { useScrollY } from "../../utils";
import { Logo } from "../ui/primitives";
import Button from "../ui/Button";
import { useTheme } from "../../utils/ThemeContext";

export default function Navbar({ page, setPage }) {
  const scrollY = useScrollY();
  const solid = scrollY > 20;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { C, isDark, toggle } = useTheme();

  const closeMobile = (id) => {
    setPage(id);
    setMobileOpen(false);
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-desktop-actions { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>

      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 200,
          height: 64,
          background: solid ? (isDark ? "rgba(15,17,23,0.96)" : "rgba(250,250,248,0.96)") : "transparent",
          backdropFilter: solid ? "blur(20px)" : "none",
          WebkitBackdropFilter: solid ? "blur(20px)" : "none",
          borderBottom: solid ? `1px solid ${C.border}` : "1px solid transparent",
          transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo onClick={() => { setPage("home"); setMobileOpen(false); }} />

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: "flex", gap: 2 }}>
            {NAV.map(n => (
              <button
                key={n.id}
                onClick={() => setPage(n.id)}
                style={{
                  background: page === n.id ? C.bgMuted : "transparent",
                  border: page === n.id ? `1px solid ${C.border}` : "1px solid transparent",
                  cursor: "pointer",
                  padding: "6px 14px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: page === n.id ? 700 : 500,
                  fontFamily: "Geist,sans-serif",
                  color: page === n.id ? C.navy : C.textMid,
                  transition: "all 0.2s",
                  letterSpacing: "-0.01em",
                  position: "relative",
                }}
              >
                {n.label}
                {page === n.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{ position: "absolute", bottom: -1, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: C.coral }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="nav-desktop-actions" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              onClick={toggle}
              title={isDark ? "Light mode" : "Dark mode"}
              style={{
                background: C.bgMuted,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                cursor: "pointer",
                padding: "6px 10px",
                fontSize: 15,
                transition: "all 0.2s",
                color: C.textMid,
              }}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <Button variant="ghost" size="sm" onClick={() => setPage("mock")}>Mock Test</Button>
            <Button variant="ghost" size="sm" onClick={() => setPage("admin")}>⚙ Admin</Button>
            <Button variant="coral" size="sm" onClick={() => setPage("practice")}>Start Practice →</Button>
          </div>

          {/* Mobile right actions */}
          <div className="nav-hamburger" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={toggle}
              style={{
                background: C.bgMuted,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                cursor: "pointer",
                padding: "6px 9px",
                fontSize: 14,
                color: C.textMid,
              }}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: C.bgMuted,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                cursor: "pointer",
                padding: "8px 10px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
              }}
            >
              <span style={{ display: "block", width: 18, height: 2, background: C.navy, borderRadius: 2, transition: "all 0.2s", transform: mobileOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
              <span style={{ display: "block", width: 18, height: 2, background: C.navy, borderRadius: 2, transition: "all 0.2s", opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: 18, height: 2, background: C.navy, borderRadius: 2, transition: "all 0.2s", transform: mobileOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 199,
              background: isDark ? "rgba(15,17,23,0.98)" : "rgba(250,250,248,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: `1px solid ${C.border}`,
              padding: "16px 16px 24px",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 16 }}>
              {NAV.map(n => (
                <button
                  key={n.id}
                  onClick={() => closeMobile(n.id)}
                  style={{
                    background: page === n.id ? C.bgMuted : "transparent",
                    border: page === n.id ? `1px solid ${C.border}` : "1px solid transparent",
                    cursor: "pointer",
                    padding: "12px 16px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: page === n.id ? 700 : 500,
                    fontFamily: "Geist,sans-serif",
                    color: page === n.id ? C.navy : C.textMid,
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                >
                  {n.label}
                </button>
              ))}
            </nav>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Button variant="ghost" size="md" onClick={() => closeMobile("mock")} style={{ width: "100%", justifyContent: "center" }}>Mock Test</Button>
              <Button variant="ghost" size="md" onClick={() => closeMobile("admin")} style={{ width: "100%", justifyContent: "center" }}>⚙ Admin</Button>
              <Button variant="coral" size="md" onClick={() => closeMobile("practice")} style={{ width: "100%", justifyContent: "center" }}>Start Practice →</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: 64 }} />
    </>
  );
}
