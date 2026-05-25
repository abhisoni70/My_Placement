import { motion } from "framer-motion";
import {
  COMPANIES,
  FEATURES,
  WHY_POINTS,
  NAV,
} from "../../constants/companyTracks";
import { InView } from "../../utils";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { Tag, Card, Logo } from "../../components/ui/primitives";
import CompanyTrackCard from "../../components/cards/CompanyTrackCard";
import Footer from "../../components/common/Footer";
import { useTheme } from "../../utils/ThemeContext";
import InterviewExperienceTeaser from "../InterviewExperience/InterviewExperienceTeaser";
import ReviewsTeaser from "../Reviews/ReviewsTeaser";

export default function HomePage({ setPage }) {
  const { C } = useTheme();
  const stats = [
    { val: "7+",   label: "Companies" },
    { val: "500+", label: "Questions" },
    { val: "50K+", label: "Students" },
    { val: "94%",  label: "Placement Rate" },
  ];

  return (
    <div style={{ background: C.bg }}>
      <style>{`
        .hero-section { padding: 80px 32px 100px !important; }
        .hero-h1 { font-size: 74px !important; }
        .hero-p { font-size: 18px !important; }
        .hero-btns { flex-direction: row !important; }
        .stats-row { gap: 48px !important; }
        .features-grid { grid-template-columns: repeat(auto-fill, minmax(320px,1fr)) !important; }
        .why-grid { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
        .why-h2 { font-size: 52px !important; }
        .cta-box { padding: 72px 64px !important; }
        .cta-h2 { font-size: 52px !important; }
        .companies-grid { grid-template-columns: repeat(auto-fill, minmax(280px,1fr)) !important; }
        .section-flex { flex-direction: row !important; }
        .section-h2 { font-size: 48px !important; }
        .community-h2 { font-size: 44px !important; }

        @media (max-width: 900px) {
          .hero-section { padding: 48px 20px 64px !important; }
          .hero-h1 { font-size: 48px !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-h2 { font-size: 38px !important; }
          .cta-box { padding: 44px 28px !important; }
          .cta-h2 { font-size: 36px !important; }
          .section-h2 { font-size: 36px !important; }
          .community-h2 { font-size: 34px !important; }
        }

        @media (max-width: 600px) {
          .hero-section { padding: 32px 16px 48px !important; }
          .hero-h1 { font-size: 36px !important; max-width: 100% !important; }
          .hero-p { font-size: 15px !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns > * { width: 100% !important; text-align: center !important; justify-content: center !important; }
          .stats-row { gap: 24px !important; flex-wrap: wrap !important; }
          .stats-row > div { min-width: 80px; }
          .features-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .why-section { padding: 64px 16px !important; }
          .why-h2 { font-size: 32px !important; }
          .cta-section { padding: 40px 16px !important; }
          .cta-box { padding: 32px 20px !important; border-radius: 18px !important; }
          .cta-h2 { font-size: 30px !important; }
          .companies-grid { grid-template-columns: 1fr !important; }
          .section-flex { flex-direction: column !important; align-items: flex-start !important; }
          .section-h2 { font-size: 30px !important; }
          .community-h2 { font-size: 28px !important; }
          .main-section { padding: 64px 16px !important; }
          .hero-badge { padding: 4px 12px !important; font-size: 11px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.35,
            backgroundImage: `linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 480, height: 480, borderRadius: "50%", background: `radial-gradient(${C.brand}18, transparent 70%)`, zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-5%", left: "-5%", width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(${C.coral}15, transparent 70%)`, zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div
              className="hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: `${C.coral}12`,
                border: `1px solid ${C.coral}30`,
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 28,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.coral, display: "inline-block" }} />
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 600, color: C.coral, letterSpacing: "0.05em" }}>
                Placement Season 2025 — Get Ready
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "Instrument Serif,serif",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: C.navy,
              maxWidth: 780,
              marginBottom: 28,
            }}
          >
            The smartest way to crack{" "}
            <span style={{ fontStyle: "italic", color: C.coral }}>placement</span>{" "}
            assessments.
          </motion.h1>

          <motion.p
            className="hero-p"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "Geist,sans-serif",
              color: C.textMid,
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: 44,
            }}
          >
            AssessPrep mirrors the exact cognitive and aptitude tests used by TCS,
            Infosys, Accenture, Wipro, and more. Practice smarter, not harder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-btns"
            style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 64 }}
          >
            <Button variant="coral" size="xl" onClick={() => setPage("practice")}>
              Start Practicing Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="ghost" size="xl" onClick={() => setPage("mock")}>
              Take a Mock Test
            </Button>
            <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, marginLeft: 4 }}>
              No signup required
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="stats-row"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: "Instrument Serif,serif", fontSize: 40, fontWeight: 400, color: C.navy, lineHeight: 1 }}>{s.val}</p>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, marginTop: 4, fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY TICKER ── */}
      <section
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          background: C.bgCard,
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", gap: 0, overflowX: "auto", scrollbarWidth: "none" }}>
          {[...COMPANIES, ...COMPANIES].map((co, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "0 24px",
                borderRight: `1px solid ${C.border}`,
                flexShrink: 0,
              }}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: co.color + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: co.color, fontFamily: "Geist,sans-serif" }}>{co.icon}</span>
              </div>
              <span style={{ fontFamily: "Geist,sans-serif", fontSize: 14, fontWeight: 600, color: C.navy, whiteSpace: "nowrap" }}>{co.name}</span>
              <Tag color={C.textMut} bg={C.bgMuted}>{co.tests} tests</Tag>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="main-section" style={{ padding: "100px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <InView>
          <SectionHeader>Platform Features</SectionHeader>
          <h2 style={{ fontFamily: "Instrument Serif,serif", fontSize: 52, fontWeight: 400, color: C.navy, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>
            Everything you need to get placed
          </h2>
          <p style={{ fontFamily: "Geist,sans-serif", color: C.textMid, fontSize: 17, maxWidth: 520, marginBottom: 64, lineHeight: 1.65 }}>
            Built with college students in mind. No bloat, no filler — just the tools that move the needle.
          </p>
        </InView>

        <div className="features-grid" style={{ display: "grid", gap: 20 }}>
          {FEATURES.map((f, i) => (
            <InView key={i} delay={i * 0.08}>
              <Card hoverable style={{ padding: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: f.color + "16", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: 20, color: f.color }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8, letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.65 }}>{f.desc}</p>
              </Card>
            </InView>
          ))}
        </div>
      </section>

      {/* ── WHY ASSESSPREP ── */}
      <section className="why-section" style={{ background: C.navy, padding: "100px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="why-grid" style={{ display: "grid", alignItems: "start" }}>
            <InView>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 4, height: 18, borderRadius: 2, background: `linear-gradient(${C.coral},${C.gold})` }} />
                  <span style={{ fontFamily: "Geist,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: C.coral, textTransform: "uppercase" }}>Why AssessPrep</span>
                </div>
                <h2 className="why-h2" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
                  Built different.<br />
                  <span style={{ fontStyle: "italic", color: C.coral }}>For a reason.</span>
                </h2>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36 }}>
                  We've studied what separates students who get placed from those who don't. The gap isn't intelligence — it's preparation quality.
                </p>
                <Button variant="coral" size="lg" onClick={() => setPage("practice")}>
                  Start Preparing Now →
                </Button>
              </div>
            </InView>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {WHY_POINTS.map((p, i) => (
                <InView key={i} delay={i * 0.1}>
                  <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Geist Mono,monospace", fontSize: 11, fontWeight: 500, color: C.coral, opacity: 0.8, paddingTop: 4, flexShrink: 0, letterSpacing: "0.05em" }}>{p.num}</span>
                    <div>
                      <h4 style={{ fontFamily: "Geist,sans-serif", fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>{p.title}</h4>
                      <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{p.desc}</p>
                    </div>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANIES SECTION ── */}
      <section className="main-section" style={{ padding: "100px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <InView>
          <div className="section-flex" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
            <div>
              <SectionHeader>Company Tracks</SectionHeader>
              <h2 className="section-h2" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: C.navy, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Prep for your<br />dream company
              </h2>
            </div>
            <Button variant="outline" size="md" onClick={() => setPage("practice")}>
              View All Tracks →
            </Button>
          </div>
        </InView>

        <div className="companies-grid" style={{ display: "grid", gap: 16 }}>
          {COMPANIES.map((co, i) => (
            <InView key={co.id} delay={i * 0.07}>
              <CompanyTrackCard company={co} isActive={co.id === "capgemini"} onClick={() => co.id === "capgemini" && setPage("practice")} />
            </InView>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-section" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <InView>
            <div className="cta-box" style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)`, borderRadius: 28, textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: C.coral + "20" }} />
              <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: C.brand + "20" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 className="cta-h2" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>
                  Your placement offer<br />
                  <span style={{ fontStyle: "italic", color: C.coral }}>starts here.</span>
                </h2>
                <p style={{ fontFamily: "Geist,sans-serif", fontSize: 16, color: "rgba(255,255,255,0.65)", marginBottom: 36 }}>
                  Join 50,000+ students who chose focused preparation over wishful thinking.
                </p>
                <Button variant="coral" size="xl" onClick={() => setPage("practice")}>
                  Begin Free Practice →
                </Button>
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* ── INTERVIEW EXPERIENCES TEASER ── */}
      <section className="main-section" style={{ padding: "80px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <InView>
          <div className="section-flex" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
            <div>
              <SectionHeader>Community</SectionHeader>
              <h2 className="community-h2" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: C.navy, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Learn from real<br />interview experiences
              </h2>
            </div>
            <Button variant="outline" size="md" onClick={() => setPage("interview-exp")}>
              View All Experiences →
            </Button>
          </div>
        </InView>
        <InterviewExperienceTeaser setPage={setPage} C={C} />
      </section>

      {/* ── REVIEWS TEASER ── */}
      <section className="main-section" style={{ padding: "80px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <InView>
          <div className="section-flex" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
            <div>
              <SectionHeader>Student Reviews</SectionHeader>
              <h2 className="community-h2" style={{ fontFamily: "Instrument Serif,serif", fontWeight: 400, color: C.navy, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Loved by students<br />
                <span style={{ fontStyle: "italic", color: C.coral }}>across India</span>
              </h2>
            </div>
            <Button variant="outline" size="md" onClick={() => setPage("reviews")}>
              Read All Reviews →
            </Button>
          </div>
        </InView>
        <ReviewsTeaser setPage={setPage} C={C} />
      </section>

      {/* ── FOOTER ── */}
      <Footer setPage={setPage} />
    </div>
  );
}
