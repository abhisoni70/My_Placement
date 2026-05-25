// ============================================================
//  DESIGN SYSTEM
//  Light + Dark mode EdTech — crisp whites, deep navy, coral accent
//  Font: Instrument Serif (display) + Geist (body)
// ============================================================

export const LIGHT = {
  navy:      "#0f1f3d",
  navyMid:   "#1a3560",
  brand:     "#2563eb",
  brandLt:   "#3b82f6",
  coral:     "#f15a2b",
  coralLt:   "#ff7a52",
  gold:      "#f59e0b",
  bg:        "#fafaf8",
  bgCard:    "#ffffff",
  bgMuted:   "#f4f4f0",
  border:    "#e8e6df",
  borderDark:"#d1cfc6",
  text:      "#0f1f3d",
  textMid:   "#4a5568",
  textMut:   "#8b9aad",
  success:   "#10b981",
  purple:    "#7c3aed",
  isDark:    false,
};

export const DARK = {
  navy:      "#e2e8f0",
  navyMid:   "#cbd5e1",
  brand:     "#60a5fa",
  brandLt:   "#93c5fd",
  coral:     "#fb7c52",
  coralLt:   "#ff9a78",
  gold:      "#fbbf24",
  bg:        "#0f1117",
  bgCard:    "#1a1d27",
  bgMuted:   "#242736",
  border:    "#2e3244",
  borderDark:"#3d4259",
  text:      "#e2e8f0",
  textMid:   "#94a3b8",
  textMut:   "#64748b",
  success:   "#34d399",
  purple:    "#a78bfa",
  isDark:    true,
};

// Default export — components import { C } and get current theme via context
export const C = LIGHT;

export const injectFonts = () => {
  if (document.getElementById("ap-fonts")) return;
  const l = document.createElement("link");
  l.id = "ap-fonts";
  l.rel = "stylesheet";
  l.href =
    "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap";
  document.head.appendChild(l);
};
