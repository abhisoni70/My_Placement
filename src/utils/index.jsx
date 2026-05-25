import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── cn helper ──────────────────────────────────────────────────
export const cn = (...c) => c.filter(Boolean).join(" ");

// ── useScrollY hook ────────────────────────────────────────────
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

// ── InView animation wrapper ───────────────────────────────────
export function InView({ children, delay = 0, y = 28 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
