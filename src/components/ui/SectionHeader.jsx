
import { useTheme } from "../../utils/ThemeContext";
/**
 * SectionHeader — the small labelled accent bar used above section titles.
 * Usage: <SectionHeader>Platform Features</SectionHeader>
 */
export default function SectionHeader({ children }) {
  const { C } = useTheme();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div
        style={{
          width: 4,
          height: 18,
          borderRadius: 2,
          background: `linear-gradient(${C.coral},${C.brand})`,
        }}
      />
      <span
        style={{
          fontFamily: "Geist,sans-serif",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: C.textMut,
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}
