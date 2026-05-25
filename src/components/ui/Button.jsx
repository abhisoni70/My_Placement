import { useState } from "react";
import { useTheme } from "../../utils/ThemeContext";

/**
 * Button — multi-variant reusable button
 * variants: primary | coral | outline | ghost | brand
 * sizes:    sm | md | lg | xl
 */
export default function Button({ children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
  style = {},
}) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);

  const V = {
    primary: {
      background: hov ? C.coral : C.navy,
      color: "#fff",
      border: "none",
      boxShadow: hov ? `0 8px 24px ${C.coral}50` : `0 4px 14px ${C.navy}30`,
    },
    coral: {
      background: hov ? C.coralLt : C.coral,
      color: "#fff",
      border: "none",
      boxShadow: hov ? `0 8px 24px ${C.coral}55` : `0 4px 14px ${C.coral}35`,
    },
    outline: {
      background: hov ? C.navy : "transparent",
      color: hov ? "#fff" : C.navy,
      border: `1.5px solid ${C.navy}`,
      boxShadow: "none",
    },
    ghost: {
      background: hov ? C.bgMuted : "transparent",
      color: C.textMid,
      border: `1.5px solid ${C.border}`,
      boxShadow: "none",
    },
    brand: {
      background: hov ? "#1d4ed8" : C.brand,
      color: "#fff",
      border: "none",
      boxShadow: hov ? `0 8px 24px ${C.brand}50` : `0 4px 14px ${C.brand}35`,
    },
  };

  const S = {
    sm: { padding: "7px 16px",  fontSize: 12 },
    md: { padding: "10px 22px", fontSize: 13 },
    lg: { padding: "14px 32px", fontSize: 15 },
    xl: { padding: "16px 40px", fontSize: 16 },
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderRadius: 12,
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
        fontFamily: "Geist,sans-serif",
        letterSpacing: "-0.01em",
        transform: hov && !disabled ? "translateY(-1px)" : "none",
        opacity: disabled ? 0.5 : 1,
        ...V[variant],
        ...S[size],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
