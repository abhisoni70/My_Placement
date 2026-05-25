import { NAV } from "../../constants/companyTracks";
import { Logo } from "../ui/primitives";
import { useTheme } from "../../utils/ThemeContext";

export default function Footer({ setPage }) {
  const { C } = useTheme();
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, background: C.bgCard }}>
      <style>{`
        .footer-grid { display: flex !important; justify-content: space-between !important; align-items: flex-start !important; flex-wrap: wrap !important; gap: 40px !important; }
        .footer-cta { max-width: 220px !important; }
        .footer-bottom { flex-direction: row !important; justify-content: space-between !important; }
        @media (max-width: 600px) {
          .footer-padding { padding: 32px 16px 24px !important; }
          .footer-grid { gap: 28px !important; }
          .footer-cta { max-width: 100% !important; width: 100% !important; }
          .footer-bottom { flex-direction: column !important; gap: 8px !important; align-items: flex-start !important; }
          .footer-bottom-links { flex-wrap: wrap !important; gap: 12px !important; }
          .footer-bottom-padding { padding: 16px !important; }
        }
      `}</style>

      <div className="footer-padding" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 32px" }}>
        <div className="footer-grid" style={{ marginBottom: 40 }}>
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <Logo onClick={() => setPage("home")} />
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMut, lineHeight: 1.65, marginTop: 14 }}>
              AssessPrep mirrors the exact cognitive and aptitude tests used by top Indian IT companies. Practice smarter, get placed faster.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 800, color: C.textMut, letterSpacing: "0.1em", marginBottom: 14, textTransform: "uppercase" }}>Platform</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV.map(n => (
                <button key={n.id} onClick={() => setPage(n.id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMid, fontWeight: 500, textAlign: "left", padding: 0, transition: "color 0.2s" }}>
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 11, fontWeight: 800, color: C.textMut, letterSpacing: "0.1em", marginBottom: 14, textTransform: "uppercase" }}>Companies</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Capgemini", "TCS", "Infosys", "Accenture", "Wipro"].map(c => (
                <span key={c} style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: C.textMut, fontWeight: 500 }}>{c}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="footer-cta" style={{ background: C.navy, borderRadius: 20, padding: "28px 24px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 90, height: 90, borderRadius: "50%", background: `${C.coral}20` }} />
            <p style={{ fontFamily: "Instrument Serif,serif", fontSize: 20, fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: 14, position: "relative" }}>
              Ready to get <em style={{ color: C.coral }}>placed?</em>
            </p>
            <button onClick={() => setPage("practice")} style={{ background: C.coral, border: "none", cursor: "pointer", color: "#fff", fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 700, padding: "9px 18px", borderRadius: 10, position: "relative" }}>
              Start Free →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-padding" style={{ borderTop: `1px solid ${C.border}`, padding: "16px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-bottom" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, margin: 0 }}>
              © {new Date().getFullYear()} AssessPrep. All rights reserved.
            </p>
            <div className="footer-bottom-links" style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy", "Terms of Use", "Contact"].map(l => (
                <span key={l} style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, cursor: "pointer", fontWeight: 500 }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
