import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../utils/ThemeContext";

/* ─── Constants ─── */
const BRUSHES = [
  { id: "pen",     label: "✏️ Pen",     size: 3,  opacity: 1.0  },
  { id: "marker",  label: "🖊️ Marker",  size: 10, opacity: 0.7  },
  { id: "chalk",   label: "🎨 Chalk",   size: 14, opacity: 0.45 },
  { id: "eraser",  label: "🧹 Eraser",  size: 22, opacity: 1.0  },
];

const PALETTE = [
  "#0f1f3d","#2563eb","#f15a2b","#10b981",
  "#7c3aed","#f59e0b","#e11d48","#06b6d4",
  "#84cc16","#ec4899","#f97316","#ffffff",
];

const STICKERS = ["😎","🔥","⭐","💡","🎯","✅","❌","🧠","💪","🎉","📚","🚀"];

/* ─── Tooltip messages cycle ─── */
const TIPS = [
  "Bore ho gaye? Draw karo! 🎨",
  "Break time — thoda relax karo 😌",
  "Dimaag fresh karo, draw karo ✨",
  "5 min ka creative break? 🖌️",
];

/* ════════════════════════════════════════
   FLOATING TRIGGER BUTTON
   ════════════════════════════════════════ */
export function DrawingTriggerButton({ onClick }) {
  const { C, isDark } = useTheme();

  /* ── Smart visibility logic ──
     1. Button enters from bottom-right after 2s
     2. Tooltip appears at 3s, auto-hides at 7s
     3. After user scrolls 400px → tooltip re-appears once as nudge
     4. Button pulses every 8s if user hasn't clicked
  */
  const [entered,     setEntered]     = useState(false);
  const [showTip,     setShowTip]     = useState(false);
  const [tipIdx,      setTipIdx]      = useState(0);
  const [hovered,     setHovered]     = useState(false);
  const [pulseRing,   setPulseRing]   = useState(false);
  const [wiggle,      setWiggle]      = useState(false);
  const nudgeSent = useRef(false);

  /* entry delay */
  useEffect(() => {
    const t1 = setTimeout(() => setEntered(true), 1800);
    return () => clearTimeout(t1);
  }, []);

  /* first tooltip */
  useEffect(() => {
    if (!entered) return;
    const t2 = setTimeout(() => setShowTip(true), 1200);   // 3s total
    const t3 = setTimeout(() => setShowTip(false), 6000);  // hide at 7s
    return () => { clearTimeout(t2); clearTimeout(t3); };
  }, [entered]);

  /* scroll nudge — re-show tip once after 400px scroll */
  useEffect(() => {
    const onScroll = () => {
      if (nudgeSent.current) return;
      if (window.scrollY > 400) {
        nudgeSent.current = true;
        setTipIdx(i => (i + 1) % TIPS.length);
        setShowTip(true);
        setTimeout(() => setShowTip(false), 5000);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* periodic pulse ring every 10s */
  useEffect(() => {
    if (!entered) return;
    const interval = setInterval(() => {
      setPulseRing(true);
      setTimeout(() => setPulseRing(false), 1200);
    }, 10000);
    return () => clearInterval(interval);
  }, [entered]);

  /* periodic wiggle every 15s */
  useEffect(() => {
    if (!entered) return;
    const interval = setInterval(() => {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 600);
    }, 15000);
    return () => clearInterval(interval);
  }, [entered]);

  const handleClick = () => {
    setShowTip(false);
    onClick();
  };

  const coral   = "#f15a2b";
  const brand   = "#2563eb";
  const bgCard  = isDark ? "#1a1d27" : "#ffffff";
  const border  = isDark ? "#2e3244" : "#e8e6df";
  const textMid = isDark ? "#94a3b8" : "#4a5568";

  return (
    <>
      {/* ── CSS keyframes injected once ── */}
      <style>{`
        @keyframes ap-pulse-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0;   }
        }
        @keyframes ap-float {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-6px); }
        }
        @keyframes ap-wiggle {
          0%,100% { transform: rotate(0deg);   }
          20%     { transform: rotate(-12deg);  }
          40%     { transform: rotate(12deg);   }
          60%     { transform: rotate(-8deg);   }
          80%     { transform: rotate(8deg);    }
        }
        @keyframes ap-tip-in {
          from { opacity:0; transform: translateX(12px) scale(0.94); }
          to   { opacity:1; transform: translateX(0)    scale(1);    }
        }
        @keyframes ap-tip-out {
          from { opacity:1; transform: translateX(0)    scale(1);    }
          to   { opacity:0; transform: translateX(12px) scale(0.94); }
        }
      `}</style>

      <style>{`
        @media (max-width: 480px) {
          .ap-drawing-fab { bottom: 16px !important; right: 16px !important; }
          .ap-drawing-fab button { width: 50px !important; height: 50px !important; font-size: 22px !important; }
          .ap-drawing-tip { display: none !important; }
        }
      `}</style>
      <div
        className="ap-drawing-fab"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 9999,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          /* slide-in from bottom on enter */
          transform: entered ? "translateY(0)" : "translateY(110px)",
          opacity: entered ? 1 : 0,
          transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
          pointerEvents: entered ? "auto" : "none",
        }}
      >
        {/* ── Tooltip bubble ── */}
        <div
          className="ap-drawing-tip"
          style={{
            background: bgCard,
            border: `1.5px solid ${border}`,
            borderRadius: 14,
            padding: "10px 16px",
            fontFamily: "Geist,sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: textMid,
            boxShadow: `0 8px 28px rgba(0,0,0,0.12)`,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            position: "relative",
            /* animate */
            opacity: showTip || hovered ? 1 : 0,
            transform: showTip || hovered ? "translateX(0) scale(1)" : "translateX(10px) scale(0.95)",
            transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {TIPS[tipIdx]}

          {/* Arrow pointing right */}
          <div style={{
            position: "absolute",
            right: -7,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "7px solid transparent",
            borderBottom: "7px solid transparent",
            borderLeft: `7px solid ${border}`,
          }} />
          <div style={{
            position: "absolute",
            right: -5,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: `6px solid ${bgCard}`,
          }} />
        </div>

        {/* ── FAB button wrapper (float animation) ── */}
        <div
          style={{
            position: "relative",
            animation: "ap-float 3.5s ease-in-out infinite",
          }}
        >
          {/* Pulse ring — shows on enter & periodic */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: coral,
              animation: pulseRing ? "ap-pulse-ring 1.1s ease-out forwards" : "none",
              pointerEvents: "none",
            }}
          />
          {/* Hover glow ring */}
          <div
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: "50%",
              background: `${coral}30`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              pointerEvents: "none",
            }}
          />

          {/* The actual button */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${coral} 0%, ${brand} 100%)`,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              boxShadow: hovered
                ? `0 16px 40px ${coral}70, 0 4px 12px rgba(0,0,0,0.2)`
                : `0 8px 24px ${coral}55, 0 2px 8px rgba(0,0,0,0.15)`,
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease",
              animation: wiggle ? "ap-wiggle 0.6s ease" : "none",
              position: "relative",
              zIndex: 2,
            }}
          >
            🎨
          </button>
        </div>
      </div>
    </>
  );
}

/* ════════════════════════════════════════
   DRAWING CANVAS MODAL
   ════════════════════════════════════════ */
export function DrawingCanvas({ onClose }) {
  const { C, isDark } = useTheme();
  const canvasRef  = useRef(null);
  const ctxRef     = useRef(null);
  const drawing    = useRef(false);
  const lastPos    = useRef(null);
  const historyRef = useRef([]);
  const historyIdx = useRef(-1);

  const [brush,       setBrush]       = useState(BRUSHES[0]);
  const [color,       setColor]       = useState("#2563eb");
  const [customColor, setCustomColor] = useState("#2563eb");
  const [size,        setSize]        = useState(3);
  const [showStickers,setShowStickers]= useState(false);
  const [saved,       setSaved]       = useState(false);
  const [canUndo,     setCanUndo]     = useState(false);
  const [canRedo,     setCanRedo]     = useState(false);

  /* canvas init */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    ctx.fillStyle = isDark ? "#1a1d27" : "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveSnapshot();
    // eslint-disable-next-line
  }, []);

  const saveSnapshot = useCallback(() => {
    const canvas = canvasRef.current;
    const snap = canvas.toDataURL();
    historyRef.current = historyRef.current.slice(0, historyIdx.current + 1);
    historyRef.current.push(snap);
    historyIdx.current = historyRef.current.length - 1;
    setCanUndo(historyIdx.current > 0);
    setCanRedo(false);
  }, []);

  const undo = () => {
    if (historyIdx.current <= 0) return;
    historyIdx.current--;
    restoreSnapshot(historyRef.current[historyIdx.current]);
    setCanUndo(historyIdx.current > 0);
    setCanRedo(true);
  };

  const redo = () => {
    if (historyIdx.current >= historyRef.current.length - 1) return;
    historyIdx.current++;
    restoreSnapshot(historyRef.current[historyIdx.current]);
    setCanUndo(true);
    setCanRedo(historyIdx.current < historyRef.current.length - 1);
  };

  const restoreSnapshot = (src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => ctxRef.current.drawImage(img, 0, 0);
  };

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: (cx - rect.left) * sx, y: (cy - rect.top) * sy };
  };

  const startDraw = (e) => {
    e.preventDefault();
    drawing.current = true;
    const pos = getPos(e, canvasRef.current);
    lastPos.current = pos;
    const ctx = ctxRef.current;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = brush.id === "eraser" ? (isDark ? "#1a1d27" : "#ffffff") : color;
    ctx.globalAlpha = brush.opacity;
    ctx.fill();
  };

  const draw = (e) => {
    if (!drawing.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const pos = getPos(e, canvas);

    ctx.lineCap  = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth   = size;
    ctx.strokeStyle = brush.id === "eraser" ? (isDark ? "#1a1d27" : "#ffffff") : color;

    if (brush.id === "chalk") {
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(
          (lastPos.current.x + pos.x) / 2 + (Math.random() - 0.5) * size * 0.6,
          (lastPos.current.y + pos.y) / 2 + (Math.random() - 0.5) * size * 0.6,
        );
        ctx.lineTo(
          pos.x + (Math.random() - 0.5) * size * 0.4,
          pos.y + (Math.random() - 0.5) * size * 0.4,
        );
        ctx.lineWidth   = Math.random() * (size / 4) + 1;
        ctx.globalAlpha = brush.opacity * (0.3 + Math.random() * 0.5);
        ctx.stroke();
      }
    } else {
      ctx.globalAlpha = brush.opacity;
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
    lastPos.current = pos;
  };

  const endDraw = () => {
    if (drawing.current) { drawing.current = false; saveSnapshot(); }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.fillStyle = isDark ? "#1a1d27" : "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveSnapshot();
  };

  const downloadCanvas = () => {
    const link = document.createElement("a");
    link.download = `assessprep-art-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL();
    link.click();
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const addSticker = (emoji) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.globalAlpha = 1;
    ctx.font = "48px serif";
    ctx.fillText(emoji, Math.random() * (canvas.width - 80) + 20, Math.random() * (canvas.height - 80) + 60);
    setShowStickers(false);
    saveSnapshot();
  };

  const selectBrush = (b) => { setBrush(b); setSize(b.size); };

  const panelBg = isDark ? "#0f1117" : "#fafaf8";
  const cardBg  = isDark ? "#1a1d27" : "#ffffff";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "fixed", inset: 0, zIndex: 10000,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ scale: 0.86, opacity: 0, y: 40 }}
        animate={{ scale: 1,    opacity: 1, y: 0  }}
        exit={{    scale: 0.86, opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="ap-drawing-modal"
        style={{
          background: panelBg,
          borderRadius: 24,
          border: `1px solid ${C.border}`,
          boxShadow: `0 40px 100px rgba(0,0,0,0.4)`,
          width: "min(96vw, 960px)",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* ── Header ── */}
        <div style={{
          padding: "14px 20px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: cardBg,
          flexWrap: "wrap",
          gap: 8,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 22 }}>🎨</span>
            <div>
              <p style={{ fontFamily: "Instrument Serif,serif", fontSize: 20, fontWeight: 400, color: C.navy, letterSpacing: "-0.02em" }}>
                Creative Break
              </p>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, fontWeight: 500 }}>
                Thoda drawing karo, mind fresh ho jaayega ✨
              </p>
            </div>
          </div>

          <div className="ap-header-actions" style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
            {/* Undo / Redo */}
            {[
              { icon: "↩️", label: "Undo", action: undo, disabled: !canUndo },
              { icon: "↪️", label: "Redo", action: redo, disabled: !canRedo },
            ].map(btn => (
              <button key={btn.label} onClick={btn.action} disabled={btn.disabled} title={btn.label}
                style={{
                  background: cardBg, border: `1px solid ${C.border}`, borderRadius: 10,
                  padding: "6px 12px", fontSize: 14,
                  cursor: btn.disabled ? "not-allowed" : "pointer",
                  opacity: btn.disabled ? 0.3 : 1,
                  color: C.textMid, transition: "all 0.18s",
                }}
              >{btn.icon}</button>
            ))}

            {/* Stickers */}
            <div style={{ position: "relative" }}>
              <button onClick={() => setShowStickers(p => !p)}
                style={{
                  background: showStickers ? C.brand : cardBg,
                  border: `1px solid ${showStickers ? C.brand : C.border}`,
                  borderRadius: 10, padding: "6px 12px", fontSize: 13,
                  cursor: "pointer", color: showStickers ? "#fff" : C.textMid,
                  fontFamily: "Geist,sans-serif", fontWeight: 600, transition: "all 0.2s",
                }}
              >😎 Stickers</button>
              <AnimatePresence>
                {showStickers && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1,   y: 0 }}
                    exit={{   opacity: 0, scale: 0.9, y: 8 }}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", right: 0,
                      background: cardBg, border: `1px solid ${C.border}`,
                      borderRadius: 14, padding: 10,
                      display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 4,
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)", zIndex: 20,
                    }}
                  >
                    {STICKERS.map(s => (
                      <button key={s} onClick={() => addSticker(s)}
                        style={{
                          fontSize: 22, background: "transparent", border: "none",
                          cursor: "pointer", padding: 4, borderRadius: 6, transition: "transform 0.15s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.3)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      >{s}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clear */}
            <button onClick={clearCanvas}
              style={{
                background: cardBg, border: `1px solid ${C.border}`,
                borderRadius: 10, padding: "6px 12px", fontSize: 13,
                cursor: "pointer", color: C.textMid,
                fontFamily: "Geist,sans-serif", fontWeight: 600, transition: "all 0.2s",
              }}
            >🗑️ Clear</button>

            {/* Download */}
            <button onClick={downloadCanvas}
              style={{
                background: saved ? C.success : C.coral, border: "none",
                borderRadius: 10, padding: "6px 14px", fontSize: 13,
                cursor: "pointer", color: "#fff",
                fontFamily: "Geist,sans-serif", fontWeight: 600,
                transition: "all 0.25s", boxShadow: `0 4px 14px ${C.coral}40`,
              }}
            >{saved ? "✅ Saved!" : "💾 Save PNG"}</button>

            {/* Close */}
            <button onClick={onClose}
              style={{
                background: "transparent", border: `1px solid ${C.border}`,
                borderRadius: 10, width: 34, height: 34,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, cursor: "pointer", color: C.textMut,
                transition: "all 0.18s", flexShrink: 0,
              }}
            >✕</button>
          </div>
        </div>

        {/* ── Body: Toolbar + Canvas ── */}
        <style>{`
          .ap-drawing-modal { }
          .ap-drawing-body { display: flex; flex: 1; overflow: hidden; }
          .ap-drawing-toolbar {
            width: 178px; padding: 14px;
            border-right: 1px solid ${C.border};
            display: flex; flex-direction: column; gap: 18px;
            overflow-y: auto; flex-shrink: 0;
          }
          .ap-brush-label { display: block; }
          @media (max-width: 600px) {
            .ap-drawing-body { flex-direction: column !important; }
            .ap-drawing-toolbar {
              width: 100% !important; border-right: none !important;
              border-bottom: 1px solid var(--border);
              flex-direction: row !important;
              flex-wrap: wrap !important;
              padding: 10px 12px !important;
              gap: 12px !important;
              max-height: 160px !important;
              overflow-x: auto !important;
              overflow-y: hidden !important;
              align-items: flex-start !important;
            }
            .ap-drawing-toolbar > div { flex: 0 0 auto; min-width: 80px; }
            .ap-brush-label { font-size: 9px !important; }
            .ap-header-actions { flex-wrap: wrap !important; gap: 4px !important; }
            .ap-header-actions button { padding: 5px 8px !important; font-size: 11px !important; }
          }
        `}</style>
        <div className="ap-drawing-body" style={{ display: "flex", flex: 1, overflow: "hidden" }}>

          {/* Left toolbar */}
          <div className="ap-drawing-toolbar" style={{
            width: 178, padding: 14,
            borderRight: `1px solid ${C.border}`,
            display: "flex", flexDirection: "column", gap: 18,
            overflowY: "auto", background: cardBg, flexShrink: 0,
          }}>
            {/* Brushes */}
            <div>
              <p className="ap-brush-label" style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700, color: C.textMut, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                Brush
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {BRUSHES.map(b => (
                  <button key={b.id} onClick={() => selectBrush(b)}
                    style={{
                      background: brush.id === b.id ? `${C.brand}18` : "transparent",
                      border: brush.id === b.id ? `1.5px solid ${C.brand}50` : `1px solid ${C.border}`,
                      borderRadius: 10, padding: "7px 12px", fontSize: 12,
                      fontWeight: brush.id === b.id ? 700 : 500,
                      color: brush.id === b.id ? C.brand : C.textMid,
                      cursor: "pointer", textAlign: "left",
                      fontFamily: "Geist,sans-serif", transition: "all 0.18s",
                    }}
                  >{b.label}</button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700, color: C.textMut, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                Size — {size}px
              </p>
              <input type="range" min={1} max={60} value={size}
                onChange={e => setSize(Number(e.target.value))}
                style={{ width: "100%", accentColor: C.brand, cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                <div style={{
                  width: Math.min(size, 42), height: Math.min(size, 42),
                  borderRadius: "50%",
                  background: brush.id === "eraser" ? C.border : color,
                  opacity: brush.opacity, transition: "all 0.15s",
                  border: `1.5px solid ${C.border}`,
                }} />
              </div>
            </div>

            {/* Colors */}
            <div>
              <p style={{ fontFamily: "Geist,sans-serif", fontSize: 10, fontWeight: 700, color: C.textMut, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                Color
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginBottom: 10 }}>
                {PALETTE.map(c => (
                  <button key={c} onClick={() => { setColor(c); setCustomColor(c); }}
                    style={{
                      width: "100%", aspectRatio: "1", borderRadius: 8, background: c,
                      border: color === c ? `2.5px solid ${C.brand}` : `1.5px solid ${C.border}`,
                      cursor: "pointer",
                      transform: color === c ? "scale(1.15)" : "scale(1)",
                      transition: "transform 0.15s, border 0.15s",
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="color" value={customColor}
                  onChange={e => { setCustomColor(e.target.value); setColor(e.target.value); }}
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    border: `1px solid ${C.border}`, cursor: "pointer",
                    padding: 2, background: "transparent",
                  }}
                />
                <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 10, color: C.textMut }}>{customColor}</span>
              </div>
            </div>
          </div>

          {/* Canvas area */}
          <div style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
            background: isDark ? "#13151f" : "#f0eee8",
            padding: "clamp(8px, 2vw, 20px)", overflow: "hidden", position: "relative",
          }}>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.35,
              backgroundImage: `radial-gradient(${C.border} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }} />
            <canvas
              ref={canvasRef}
              width={800}
              height={520}
              onMouseDown={startDraw}
              onMouseMove={draw}
              onMouseUp={endDraw}
              onMouseLeave={endDraw}
              onTouchStart={startDraw}
              onTouchMove={draw}
              onTouchEnd={endDraw}
              style={{
                borderRadius: 16, position: "relative", zIndex: 1,
                boxShadow: `0 8px 40px rgba(0,0,0,0.2), 0 0 0 1px ${C.border}`,
                cursor: brush.id === "eraser" ? "cell" : "crosshair",
                touchAction: "none",
                maxWidth: "100%", maxHeight: "clamp(200px, 40vh, calc(92vh - 160px))",
                display: "block",
                background: isDark ? "#1a1d27" : "#ffffff",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: "9px 20px", borderTop: `1px solid ${C.border}`,
          background: cardBg, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap",
        }}>
          {["🖱️ Click & drag to draw","👆 Touch supported","💡 Chalk brush for texture"].map(t => (
            <span key={t} style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMut, fontWeight: 500 }}>{t}</span>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 13, height: 13, borderRadius: 4, background: color, border: `1px solid ${C.border}` }} />
            <span style={{ fontFamily: "Geist,sans-serif", fontSize: 11, color: C.textMid, fontWeight: 600 }}>
              {BRUSHES.find(b => b.id === brush.id)?.label} · {size}px
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
