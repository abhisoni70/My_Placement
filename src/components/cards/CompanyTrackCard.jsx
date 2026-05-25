import { Card, Tag } from "../ui/primitives";
import { useTheme } from "../../utils/ThemeContext";

/**
 * CompanyTrackCard — displays a company's track with icon, name, full name,
 * and test count. Used on the Home page companies grid.
 * Props:
 *   company  — company data object from COMPANIES constant
 *   isActive — if true, card is fully active/clickable; otherwise shows "Coming Soon"
 *   onClick  — called when card is clicked (only when isActive)
 */
export default function CompanyTrackCard({ company, isActive = false, onClick }) {
  const { C } = useTheme();
  return (
    <Card
      hoverable={isActive}
      onClick={isActive ? onClick : undefined}
      style={{
        padding: 24,
        position: "relative",
        overflow: "hidden",
        opacity: isActive ? 1 : 0.72,
        cursor: isActive ? "pointer" : "default",
      }}
    >
      {/* Coming Soon ribbon */}
      {!isActive && (
        <div
          style={{
            position: "absolute",
            top: 16,
            right: -28,
            background: C.bgMuted,
            color: C.textMut,
            fontSize: 10,
            fontWeight: 700,
            fontFamily: "Geist,sans-serif",
            letterSpacing: "0.08em",
            padding: "4px 36px",
            transform: "rotate(35deg)",
            border: `1px solid ${C.border}`,
          }}
        >
          SOON
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: company.color + "16",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Geist,sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: company.color,
            }}
          >
            {company.icon}
          </span>
        </div>
        {isActive ? (
          <Tag color={company.color}>{company.tests} tests</Tag>
        ) : (
          <Tag color={C.textMut} bg={C.bgMuted}>Coming Soon</Tag>
        )}
      </div>

      <h3
        style={{
          fontFamily: "Geist,sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: C.navy,
          marginBottom: 4,
          letterSpacing: "-0.02em",
        }}
      >
        {company.name}
      </h3>
      <p
        style={{
          fontFamily: "Geist,sans-serif",
          fontSize: 12,
          color: C.textMut,
          marginBottom: 20,
        }}
      >
        {company.full}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isActive ? (
          <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut }}>
            Tap to explore →
          </span>
        ) : (
          <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, fontWeight: 500 }}>
            Coming soon
          </span>
        )}
      </div>
    </Card>
  );
}
