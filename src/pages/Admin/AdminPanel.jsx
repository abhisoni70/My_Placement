import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../utils/ThemeContext";
import { getQuestions, setQuestions as storeSetQuestions, subscribe } from "../../utils/quizStore";

// hook defined here, not in the store file
function useQuestions() {
  const [qs, setQs] = useState(() => getQuestions());
  useEffect(() => {
    setQs(getQuestions());
    return subscribe(setQs);
  }, []);
  return qs;
}



// ── Initial data store ─────────────────────────────────────────
const initialData = {
  games: [
    { id: "deductive",          title: "Deductive",           icon: "🔍", difficulty: "Medium", duration: "14 min", questions: 20, category: "Logical",      tags: ["Capgemini"], active: true,  plays: 3241 },
    { id: "switch-challenge",   title: "Switch Challenge",    icon: "🔀", difficulty: "Hard",   duration: "10 min", questions: 25, category: "Speed",        tags: ["Capgemini"], active: true,  plays: 2187 },
    { id: "memory-bubble",      title: "Memory Bubble",       icon: "🧠", difficulty: "Medium", duration: "8 min",  questions: 20, category: "Memory",       tags: ["Capgemini"], active: true,  plays: 1894 },
    { id: "inductive-challenge",title: "Inductive Challenge", icon: "💡", difficulty: "Hard",   duration: "15 min", questions: 22, category: "Logical",      tags: ["Capgemini"], active: false, plays: 987  },
    { id: "pattern-matrix",     title: "Pattern Matrix",      icon: "◉", difficulty: "Medium", duration: "12 min", questions: 20, category: "Logical",      tags: ["TCS","Infosys","Wipro"], active: true, plays: 4102 },
    { id: "memory-recall",      title: "Memory Recall",       icon: "◈", difficulty: "Easy",   duration: "8 min",  questions: 15, category: "Memory",       tags: ["Accenture","Deloitte"],  active: true, plays: 2931 },
    { id: "reaction-time",      title: "Reaction Time",       icon: "◎", difficulty: "Hard",   duration: "6 min",  questions: 30, category: "Speed",        tags: ["Capgemini","Cognizant"], active: true, plays: 1654 },
    { id: "motion-challenge",   title: "Motion Challenge",    icon: "🎯", difficulty: "Hard",   duration: "8 min",  questions: 30, category: "Attention",    tags: ["Capgemini"], active: false, plays: 432  },
  ],
  companies: [
    { id: "tcs",       name: "TCS",       full: "Tata Consultancy Services", color: "#1a73e8", tests: 42, active: true,  students: 14200 },
    { id: "infosys",   name: "Infosys",   full: "Infosys Limited",           color: "#006EAF", tests: 38, active: true,  students: 11800 },
    { id: "wipro",     name: "Wipro",     full: "Wipro Technologies",        color: "#7a1ea1", tests: 35, active: true,  students: 9400  },
    { id: "capgemini", name: "Capgemini", full: "Capgemini SE",              color: "#003882", tests: 29, active: true,  students: 8700  },
    { id: "accenture", name: "Accenture", full: "Accenture plc",             color: "#a100ff", tests: 46, active: true,  students: 16300 },
    { id: "cognizant", name: "Cognizant", full: "Cognizant Technology",      color: "#1961ac", tests: 31, active: false, students: 6200  },
    { id: "deloitte",  name: "Deloitte",  full: "Deloitte Consulting",       color: "#86bc25", tests: 27, active: true,  students: 5800  },
  ],
  users: [
    { id: 1, name: "Arjun Sharma",    email: "arjun@gmail.com",   company: "TCS",       score: 82, streak: 7,  joined: "2026-03-12", status: "active" },
    { id: 2, name: "Priya Singh",     email: "priya@gmail.com",   company: "Infosys",   score: 91, streak: 14, joined: "2026-02-28", status: "active" },
    { id: 3, name: "Rahul Verma",     email: "rahul@gmail.com",   company: "Capgemini", score: 67, streak: 2,  joined: "2026-04-01", status: "active" },
    { id: 4, name: "Neha Gupta",      email: "neha@gmail.com",    company: "Wipro",     score: 78, streak: 5,  joined: "2026-03-20", status: "inactive" },
    { id: 5, name: "Amit Kumar",      email: "amit@gmail.com",    company: "Accenture", score: 88, streak: 11, joined: "2026-01-15", status: "active" },
    { id: 6, name: "Divya Patel",     email: "divya@gmail.com",   company: "TCS",       score: 73, streak: 3,  joined: "2026-04-10", status: "active" },
    { id: 7, name: "Saurabh Mishra",  email: "saurabh@gmail.com", company: "Cognizant", score: 55, streak: 0,  joined: "2026-04-22", status: "suspended" },
    { id: 8, name: "Kavya Reddy",     email: "kavya@gmail.com",   company: "Deloitte",  score: 95, streak: 21, joined: "2026-02-05", status: "active" },
  ],
  mockRounds: [
    { id: 1, name: "Cognitive Assessment",  questions: 30, time: 25, active: true,  completions: 8421 },
    { id: 2, name: "Quantitative Aptitude", questions: 26, time: 35, active: true,  completions: 7234 },
    { id: 3, name: "Verbal Ability",        questions: 24, time: 20, active: true,  completions: 6891 },
    { id: 4, name: "Programming Logic",     questions: 10, time: 15, active: false, completions: 3102 },
  ],
  siteSettings: {
    siteName: "AssessPrep",
    tagline: "Get Placed. Not Just Prepared.",
    maintenanceMode: false,
    allowRegistrations: true,
    dailyGoal: 50,
    sessionTimeout: 30,
    maxStreakBonus: 100,
    analyticsEnabled: true,
  },
};

// ── Reusable UI pieces ─────────────────────────────────────────
const getStyles = (C) => ({
  card: { background: C.bgCard, borderRadius: 16, border: `1px solid ${C.border}`, padding: 24 },
  input: {
    width: "100%", boxSizing: "border-box", padding: "10px 14px",
    border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 14,
    fontFamily: "Geist, sans-serif", color: C.text, background: C.bg,
    outline: "none", transition: "border .2s",
  },
  btn: (bg, color="#fff") => ({
    padding: "9px 18px", borderRadius: 10, border: "none", cursor: "pointer",
    fontSize: 13, fontWeight: 600, fontFamily: "Geist, sans-serif",
    background: bg, color, transition: "opacity .15s",
  }),
  badge: (bg, color) => ({
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
    background: bg, color, fontFamily: "Geist, sans-serif",
  }),
});

const Toggle = ({ value, onChange }) => {
  const { C } = useTheme();
  return (
    <div
    onClick={() => onChange(!value)}
    style={{
      width: 44, height: 24, borderRadius: 12, cursor: "pointer", position: "relative",
      background: value ? C.success : C.border, transition: "background .25s",
    }}
    >
    <div style={{
      position: "absolute", top: 3, left: value ? 23 : 3, width: 18, height: 18,
      borderRadius: "50%", background: "#fff", transition: "left .25s",
      boxShadow: "0 1px 4px rgba(0,0,0,.18)",
    }} />
  </div>
  );
};

const Badge = ({ children, type = "default" }) => {
  const { C } = useTheme();
  const css = getStyles(C);
  const styles = {
    default:   { bg: C.bgMuted,              color: C.textMid },
    active:    { bg: C.success + "18",       color: C.success },
    inactive:  { bg: C.border,               color: C.textMut },
    suspended: { bg: C.danger + "15",        color: C.danger  },
    hard:      { bg: "#fef2f2",              color: C.danger  },
    medium:    { bg: "#fffbeb",              color: C.gold    },
    easy:      { bg: C.success + "15",       color: C.success },
  };
  const s = styles[type] || styles.default;
  return <span style={css.badge(s.bg, s.color)}>{children}</span>;
};

const StatCard = ({ icon, label, value, delta, color }) => {
  const { C } = useTheme();
  const css = getStyles(C);
  return (
    <div style={{ ...css.card, padding: 20 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <span style={{ fontSize: 22, color }}>{icon}</span>
      {delta && <span style={css.badge(C.success+"15", C.success)}>{delta}</span>}
    </div>
    <p style={{ fontFamily: "Instrument Serif, serif", fontSize: 36, color: C.navy, lineHeight: 1, letterSpacing: "-0.02em" }}>{value}</p>
    <p style={{ fontFamily: "Geist, sans-serif", fontSize: 12, color: C.textMut, marginTop: 4, fontWeight: 500 }}>{label}</p>
  </div>
  );
};

const Modal = ({ open, title, onClose, children }) => {
  const { C } = useTheme();
  const css = getStyles(C);
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(15,31,61,.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ ...css.card, width: "100%", maxWidth: 520, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ fontFamily: "Instrument Serif, serif", fontSize: 22, color: C.navy, fontWeight: 400 }}>{title}</h3>
          <button onClick={onClose} style={{ background: C.bgMuted, border: "none", borderRadius: 8, width: 32, height: 32, cursor: "pointer", fontSize: 16, color: C.textMid }}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};

const Toast = ({ msg, type, onClose }) => {
  const { C } = useTheme();
  useEffect(() => { if (msg) { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); } }, [msg]);
  if (!msg) return null;
  const bg = type === "error" ? C.danger : type === "warn" ? C.gold : C.success;
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, background: bg, color: "#fff", padding: "12px 20px", borderRadius: 12, fontFamily: "Geist,sans-serif", fontSize: 13, fontWeight: 600, zIndex: 2000, boxShadow: "0 8px 24px rgba(0,0,0,.2)", display: "flex", alignItems: "center", gap: 10 }}>
      {type === "error" ? "✕" : "✓"} {msg}
    </div>
  );
};

// ── SIDEBAR ────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "overview",  label: "Overview",    icon: "⬡" },
  { id: "games",     label: "Games",       icon: "◉" },
  { id: "companies", label: "Companies",   icon: "◆" },
  { id: "users",     label: "Users",       icon: "◈" },
  { id: "mock",      label: "Mock Tests",  icon: "◎" },
  { id: "quiz",      label: "Cap. Quiz",   icon: "❓" },
  { id: "settings",  label: "Settings",   icon: "⚙" },
];

function Sidebar({ active, setActive }) {
  const { C } = useTheme();
  return (
    <aside style={{
      width: 220, flexShrink: 0, background: C.navy, minHeight: "100vh",
      display: "flex", flexDirection: "column", position: "sticky", top: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: "28px 24px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: C.coral, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>◉</div>
          <div>
            <p style={{ fontFamily: "Instrument Serif, serif", fontSize: 17, color: "#fff", lineHeight: 1 }}>AssessPrep</p>
            <p style={{ fontFamily: "Geist, sans-serif", fontSize: 10, color: "rgba(255,255,255,.45)", marginTop: 1, fontWeight: 500 }}>Admin Panel</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: "0 12px" }}>
        {NAV_ITEMS.map(item => (
          <button key={item.id} onClick={() => setActive(item.id)} style={{
            width: "100%", display: "flex", alignItems: "center", gap: 10,
            padding: "11px 14px", borderRadius: 10, marginBottom: 2,
            background: active === item.id ? "rgba(255,255,255,.1)" : "transparent",
            border: active === item.id ? `1px solid rgba(255,255,255,.15)` : "1px solid transparent",
            color: active === item.id ? "#fff" : "rgba(255,255,255,.55)",
            fontSize: 13, fontWeight: 600, fontFamily: "Geist, sans-serif",
            cursor: "pointer", textAlign: "left", transition: "all .15s",
          }}>
            <span style={{ fontSize: 15, opacity: active === item.id ? 1 : 0.7 }}>{item.icon}</span>
            {item.label}
            {active === item.id && <div style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: C.coral }} />}
          </button>
        ))}
      </div>

      <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <p style={{ fontFamily: "Geist, sans-serif", fontSize: 11, color: "rgba(255,255,255,.3)", fontWeight: 500 }}>Logged in as</p>
        <p style={{ fontFamily: "Geist, sans-serif", fontSize: 12, color: "rgba(255,255,255,.65)", fontWeight: 600, marginTop: 2 }}>Super Admin</p>
      </div>
    </aside>
  );
}

// ── OVERVIEW PAGE ──────────────────────────────────────────────
function MiniBar({ val }) {
  const { C } = useTheme();
  return (
    <div style={{ height: 5, background: C.bgMuted, borderRadius: 4, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${val}%`, background: `linear-gradient(90deg,${C.brand},${C.coral})`, borderRadius: 4 }} />
    </div>
  );
}

function OverviewPage({ data }) {
  const { C } = useTheme();
  const css = getStyles(C);
  const totalUsers    = data.users.length;
  const activeUsers   = data.users.filter(u => u.status === "active").length;
  const totalGames    = data.games.length;
  const activeGames   = data.games.filter(g => g.active).length;
  const totalPlays    = data.games.reduce((a, g) => a + g.plays, 0);
  const avgScore      = Math.round(data.users.reduce((a, u) => a + u.score, 0) / data.users.length);

  const weekData = [62, 75, 58, 88, 71, 93, 79];
  const days     = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div>
      <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: 32, color: C.navy, fontWeight: 400, marginBottom: 6 }}>Platform Overview</h2>
      <p style={{ fontFamily: "Geist, sans-serif", fontSize: 13, color: C.textMut, marginBottom: 28 }}>Live snapshot of all key metrics.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14, marginBottom: 24 }}>
        <StatCard icon="◈" label="Total Users"    value={totalUsers}              delta="+12 this week"  color={C.brand} />
        <StatCard icon="◉" label="Active Games"   value={`${activeGames}/${totalGames}`} delta="+1 new"   color={C.coral} />
        <StatCard icon="◎" label="Total Plays"    value={totalPlays.toLocaleString()} delta="+248 today" color={C.purple} />
        <StatCard icon="◆" label="Avg Score"      value={`${avgScore}%`}          delta="+3% this week"  color={C.success} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(400px,100%),1fr))", gap: 20, marginBottom: 24 }}>
        {/* Chart */}
        <div style={css.card}>
          <p style={{ fontFamily: "Geist, sans-serif", fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 4 }}>Weekly Activity</p>
          <p style={{ fontFamily: "Geist, sans-serif", fontSize: 12, color: C.textMut, marginBottom: 24 }}>Sessions per day (last 7 days)</p>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 100 }}>
            {weekData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <div style={{
                  width: "100%", height: `${v}%`,
                  background: i === 5 ? `linear-gradient(${C.coral},${C.coralLt})` : `linear-gradient(${C.brand}70,${C.brand}30)`,
                  borderRadius: "6px 6px 0 0",
                }} />
                <span style={{ fontFamily: "Geist, sans-serif", fontSize: 10, color: C.textMut }}>{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top games */}
        <div style={css.card}>
          <p style={{ fontFamily: "Geist, sans-serif", fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 16 }}>Top Games</p>
          {[...data.games].sort((a,b) => b.plays - a.plays).slice(0,5).map((g, i) => (
            <div key={g.id} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 11, color: C.textMut, width: 14 }}>{i+1}</span>
              <span style={{ fontSize: 16 }}>{g.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: "Geist, sans-serif", fontSize: 12, fontWeight: 600, color: C.navy, marginBottom: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{g.title}</p>
                <MiniBar val={Math.round(g.plays / data.games[0].plays * 100)} />
              </div>
              <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 11, color: C.textMut, flexShrink: 0 }}>{g.plays.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Company breakdown */}
      <div style={css.card}>
        <p style={{ fontFamily: "Geist, sans-serif", fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 16 }}>Company Track Popularity</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 12 }}>
          {data.companies.map(co => (
            <div key={co.id} style={{ textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: co.color + "18", border: `2px solid ${co.color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", fontSize: 13, fontWeight: 800, color: co.color, fontFamily: "Geist, sans-serif" }}>
                {co.name[0]}
              </div>
              <p style={{ fontFamily: "Geist, sans-serif", fontSize: 11, fontWeight: 700, color: C.navy }}>{co.name}</p>
              <p style={{ fontFamily: "Geist Mono, monospace", fontSize: 10, color: C.textMut }}>{co.students.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── GAMES PAGE ────────────────────────────────────────────────
function GamesPage({ data, setData, toast }) {
  const { C } = useTheme();
  const css = getStyles(C);
  const [editGame,  setEditGame]  = useState(null);
  const [addOpen,   setAddOpen]   = useState(false);
  const [newGame,   setNewGame]   = useState({ title:"", icon:"🎮", difficulty:"Medium", duration:"10 min", questions:20, category:"Logical", tags:"" });
  const [search,    setSearch]    = useState("");
  const [filter,    setFilter]    = useState("all");

  const filtered = data.games
    .filter(g => filter === "all" ? true : filter === "active" ? g.active : !g.active)
    .filter(g => g.title.toLowerCase().includes(search.toLowerCase()));

  const toggleActive = (id) => {
    setData(d => ({ ...d, games: d.games.map(g => g.id === id ? { ...g, active: !g.active } : g) }));
    toast("Game status updated", "success");
  };

  const deleteGame = (id) => {
    setData(d => ({ ...d, games: d.games.filter(g => g.id !== id) }));
    toast("Game deleted", "success");
  };

  const saveEdit = () => {
    setData(d => ({ ...d, games: d.games.map(g => g.id === editGame.id ? editGame : g) }));
    setEditGame(null); toast("Game updated", "success");
  };

  const addGame = () => {
    const id = newGame.title.toLowerCase().replace(/\s+/g, "-");
    setData(d => ({ ...d, games: [...d.games, { ...newGame, id, active: true, plays: 0, tags: newGame.tags.split(",").map(t=>t.trim()) }] }));
    setAddOpen(false);
    setNewGame({ title:"", icon:"🎮", difficulty:"Medium", duration:"10 min", questions:20, category:"Logical", tags:"" });
    toast("Game added!", "success");
  };

  const diffType = (d) => d === "Hard" ? "hard" : d === "Easy" ? "easy" : "medium";

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: 32, color: C.navy, fontWeight: 400, marginBottom: 4 }}>Games</h2>
          <p style={{ fontFamily: "Geist, sans-serif", fontSize: 13, color: C.textMut }}>{data.games.length} games · {data.games.filter(g=>g.active).length} active</p>
        </div>
        <button onClick={() => setAddOpen(true)} style={css.btn(C.coral)}>+ Add Game</button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search games…" style={{ ...css.input, maxWidth: 240 }} />
        {["all","active","inactive"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            ...css.btn(filter===f ? C.navy : C.bgMuted, filter===f ? "#fff" : C.textMid),
            textTransform: "capitalize",
          }}>{f}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(240px,100%),1fr))", gap: 14 }}>
        {filtered.map(g => (
          <div key={g.id} style={{ ...css.card, opacity: g.active ? 1 : 0.65, transition: "opacity .2s" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: C.bgMuted, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{g.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <p style={{ fontFamily: "Geist, sans-serif", fontSize: 15, fontWeight: 700, color: C.navy }}>{g.title}</p>
                  <Toggle value={g.active} onChange={() => toggleActive(g.id)} />
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6, flexWrap: "wrap" }}>
                  <Badge type={diffType(g.difficulty)}>{g.difficulty}</Badge>
                  <span style={{ fontFamily: "Geist, sans-serif", fontSize: 11, color: C.textMut }}>{g.duration}</span>
                  <span style={{ fontFamily: "Geist, sans-serif", fontSize: 11, color: C.textMut }}>·</span>
                  <span style={{ fontFamily: "Geist, sans-serif", fontSize: 11, color: C.textMut }}>{g.questions} Qs</span>
                  <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 11, color: C.brand, fontWeight: 600 }}>{g.plays.toLocaleString()} plays</span>
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                  {g.tags.map(t => <span key={t} style={{ ...css.badge(C.navy+"10", C.navyMid), fontSize: 10 }}>{t}</span>)}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button onClick={() => setEditGame({...g})} style={{ ...css.btn(C.bgMuted, C.textMid), fontSize: 12 }}>✏ Edit</button>
              <button onClick={() => deleteGame(g.id)} style={{ ...css.btn(C.dangerLt, C.danger), fontSize: 12 }}>🗑 Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal open={!!editGame} title="Edit Game" onClose={() => setEditGame(null)}>
        {editGame && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[["Title","title"],["Icon","icon"],["Duration","duration"]].map(([label,key]) => (
              <div key={key}>
                <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>{label}</label>
                <input value={editGame[key]} onChange={e => setEditGame(g => ({...g,[key]:e.target.value}))} style={css.input} />
              </div>
            ))}
            <div>
              <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Questions</label>
              <input type="number" value={editGame.questions} onChange={e => setEditGame(g => ({...g,questions:+e.target.value}))} style={css.input} />
            </div>
            <div>
              <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Difficulty</label>
              <select value={editGame.difficulty} onChange={e => setEditGame(g => ({...g,difficulty:e.target.value}))} style={{ ...css.input }}>
                {["Easy","Medium","Hard"].map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div style={{ display:"flex", gap:10, marginTop:8 }}>
              <button onClick={saveEdit} style={css.btn(C.brand)}>Save Changes</button>
              <button onClick={() => setEditGame(null)} style={css.btn(C.bgMuted, C.textMid)}>Cancel</button>
            </div>
          </div>
        )}
      </Modal>

      {/* Add Modal */}
      <Modal open={addOpen} title="Add New Game" onClose={() => setAddOpen(false)}>
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {[["Title","title"],["Icon (emoji)","icon"],["Duration","duration"],["Tags (comma separated)","tags"]].map(([label,key]) => (
            <div key={key}>
              <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>{label}</label>
              <input value={newGame[key]} onChange={e => setNewGame(g => ({...g,[key]:e.target.value}))} style={css.input} />
            </div>
          ))}
          <div>
            <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Questions</label>
            <input type="number" value={newGame.questions} onChange={e => setNewGame(g => ({...g,questions:+e.target.value}))} style={css.input} />
          </div>
          <div>
            <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Difficulty</label>
            <select value={newGame.difficulty} onChange={e => setNewGame(g => ({...g,difficulty:e.target.value}))} style={{ ...css.input }}>
              {["Easy","Medium","Hard"].map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div style={{ display:"flex", gap:10, marginTop:8 }}>
            <button onClick={addGame} style={css.btn(C.coral)}>Add Game</button>
            <button onClick={() => setAddOpen(false)} style={css.btn(C.bgMuted, C.textMid)}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// ── COMPANIES PAGE ────────────────────────────────────────────
function CompaniesPage({ data, setData, toast }) {
  const { C } = useTheme();
  const css = getStyles(C);
  const [editCo, setEditCo] = useState(null);

  const toggleActive = (id) => {
    setData(d => ({ ...d, companies: d.companies.map(c => c.id === id ? { ...c, active: !c.active } : c) }));
    toast("Company status updated", "success");
  };

  const saveEdit = () => {
    setData(d => ({ ...d, companies: d.companies.map(c => c.id === editCo.id ? editCo : c) }));
    setEditCo(null); toast("Company updated", "success");
  };

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:24 }}>
        <div>
          <h2 style={{ fontFamily:"Instrument Serif,serif", fontSize:32, color:C.navy, fontWeight:400, marginBottom:4 }}>Companies</h2>
          <p style={{ fontFamily:"Geist,sans-serif", fontSize:13, color:C.textMut }}>{data.companies.length} company tracks</p>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:14 }}>
        {data.companies.map(co => (
          <div key={co.id} style={{ ...css.card, opacity: co.active ? 1 : 0.6 }}>
            <div style={{ display:"flex", gap:14, alignItems:"center" }}>
              <div style={{ width:52, height:52, borderRadius:14, background:co.color+"18", border:`2px solid ${co.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:800, color:co.color, fontFamily:"Geist,sans-serif", flexShrink:0 }}>
                {co.name[0]}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <p style={{ fontFamily:"Geist,sans-serif", fontSize:16, fontWeight:700, color:C.navy }}>{co.name}</p>
                  <Toggle value={co.active} onChange={() => toggleActive(co.id)} />
                </div>
                <p style={{ fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMut, marginTop:2 }}>{co.full}</p>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginTop:16, padding:"14px 0", borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
              {[["Tests", co.tests], ["Students", co.students.toLocaleString()], ["Status", co.active?"Active":"Off"]].map(([l,v]) => (
                <div key={l} style={{ textAlign:"center" }}>
                  <p style={{ fontFamily:"Instrument Serif,serif", fontSize:22, color:C.navy, lineHeight:1 }}>{v}</p>
                  <p style={{ fontFamily:"Geist,sans-serif", fontSize:11, color:C.textMut, marginTop:3 }}>{l}</p>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", gap:8, marginTop:14 }}>
              <button onClick={() => setEditCo({...co})} style={{ ...css.btn(C.bgMuted, C.textMid), fontSize:12 }}>✏ Edit Details</button>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginLeft:"auto" }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background: co.active ? C.success : C.border }} />
                <span style={{ fontFamily:"Geist,sans-serif", fontSize:11, color:co.active ? C.success : C.textMut, fontWeight:600 }}>{co.active ? "Active" : "Inactive"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={!!editCo} title="Edit Company" onClose={() => setEditCo(null)}>
        {editCo && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {[["Short Name","name"],["Full Name","full"],["Brand Color","color"]].map(([label,key]) => (
              <div key={key}>
                <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>{label}</label>
                <input type={key==="color"?"color":"text"} value={editCo[key]} onChange={e => setEditCo(c => ({...c,[key]:e.target.value}))} style={key==="color" ? { ...css.input, height:42, padding:6 } : css.input} />
              </div>
            ))}
            <div>
              <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Number of Tests</label>
              <input type="number" value={editCo.tests} onChange={e => setEditCo(c => ({...c,tests:+e.target.value}))} style={css.input} />
            </div>
            <div style={{ display:"flex", gap:10, marginTop:8 }}>
              <button onClick={saveEdit} style={css.btn(C.brand)}>Save</button>
              <button onClick={() => setEditCo(null)} style={css.btn(C.bgMuted, C.textMid)}>Cancel</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

// ── USERS PAGE ────────────────────────────────────────────────
function UsersPage({ data, setData, toast }) {
  const { C } = useTheme();
  const css = getStyles(C);
  const [search,     setSearch]     = useState("");
  const [filter,     setFilter]     = useState("all");
  const [editUser,   setEditUser]   = useState(null);
  const [sortKey,    setSortKey]    = useState("name");
  const [sortAsc,    setSortAsc]    = useState(true);

  const handleSort = (key) => {
    if (sortKey === key) setSortAsc(a => !a);
    else { setSortKey(key); setSortAsc(true); }
  };

  const changeStatus = (id, status) => {
    setData(d => ({ ...d, users: d.users.map(u => u.id === id ? { ...u, status } : u) }));
    toast(`User status → ${status}`, "success");
  };

  const saveEdit = () => {
    setData(d => ({ ...d, users: d.users.map(u => u.id === editUser.id ? editUser : u) }));
    setEditUser(null); toast("User updated", "success");
  };

  const filtered = data.users
    .filter(u => filter === "all" ? true : u.status === filter)
    .filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) => {
      const va = a[sortKey], vb = b[sortKey];
      const cmp = typeof va === "number" ? va - vb : String(va).localeCompare(String(vb));
      return sortAsc ? cmp : -cmp;
    });

  const th = (key, label) => (
    <th onClick={() => handleSort(key)} style={{ fontFamily:"Geist,sans-serif", fontSize:11, fontWeight:700, color:C.textMut, textAlign:"left", padding:"10px 16px", cursor:"pointer", whiteSpace:"nowrap", userSelect:"none" }}>
      {label} {sortKey===key ? (sortAsc?"↑":"↓") : ""}
    </th>
  );

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:24 }}>
        <div>
          <h2 style={{ fontFamily:"Instrument Serif,serif", fontSize:32, color:C.navy, fontWeight:400, marginBottom:4 }}>Users</h2>
          <p style={{ fontFamily:"Geist,sans-serif", fontSize:13, color:C.textMut }}>{data.users.length} registered users</p>
        </div>
      </div>

      <div style={{ display:"flex", gap:10, marginBottom:20, flexWrap:"wrap" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name or email…" style={{ ...css.input, maxWidth:280 }} />
        {["all","active","inactive","suspended"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ ...css.btn(filter===f ? C.navy : C.bgMuted, filter===f ? "#fff" : C.textMid), textTransform:"capitalize", fontSize:12 }}>{f}</button>
        ))}
      </div>

      <div style={{ ...css.card, padding:0, overflow:"hidden" }}>
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse" }}>
            <thead>
              <tr style={{ background:C.bgMuted, borderBottom:`1px solid ${C.border}` }}>
                {th("name","Name")}
                {th("email","Email")}
                {th("company","Company")}
                {th("score","Score")}
                {th("streak","Streak")}
                <th style={{ fontFamily:"Geist,sans-serif", fontSize:11, fontWeight:700, color:C.textMut, padding:"10px 16px" }}>Status</th>
                <th style={{ fontFamily:"Geist,sans-serif", fontSize:11, fontWeight:700, color:C.textMut, padding:"10px 16px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => (
                <tr key={u.id} style={{ borderBottom:`1px solid ${C.border}`, background: i%2===0 ? C.bgCard : C.bgMuted+"60" }}>
                  <td style={{ padding:"12px 16px" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{ width:32, height:32, borderRadius:"50%", background:`linear-gradient(135deg,${C.brand},${C.coral})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"#fff", fontFamily:"Geist,sans-serif", flexShrink:0 }}>
                        {u.name.split(" ").map(n=>n[0]).join("")}
                      </div>
                      <span style={{ fontFamily:"Geist,sans-serif", fontSize:13, fontWeight:600, color:C.navy, whiteSpace:"nowrap" }}>{u.name}</span>
                    </div>
                  </td>
                  <td style={{ padding:"12px 16px", fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMid }}>{u.email}</td>
                  <td style={{ padding:"12px 16px", fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMid }}>{u.company}</td>
                  <td style={{ padding:"12px 16px" }}>
                    <span style={{ fontFamily:"Geist Mono,monospace", fontSize:13, fontWeight:700, color: u.score>=80 ? C.success : u.score>=60 ? C.gold : C.danger }}>{u.score}%</span>
                  </td>
                  <td style={{ padding:"12px 16px", fontFamily:"Geist Mono,monospace", fontSize:12, color:C.textMid }}>🔥 {u.streak}d</td>
                  <td style={{ padding:"12px 16px" }}><Badge type={u.status}>{u.status}</Badge></td>
                  <td style={{ padding:"12px 16px" }}>
                    <div style={{ display:"flex", gap:6 }}>
                      <button onClick={() => setEditUser({...u})} style={{ ...css.btn(C.bgMuted, C.textMid), padding:"5px 10px", fontSize:11 }}>✏</button>
                      {u.status !== "suspended" && <button onClick={() => changeStatus(u.id, "suspended")} style={{ ...css.btn(C.dangerLt, C.danger), padding:"5px 10px", fontSize:11 }}>Ban</button>}
                      {u.status === "suspended" && <button onClick={() => changeStatus(u.id, "active")} style={{ ...css.btn(C.success+"20", C.success), padding:"5px 10px", fontSize:11 }}>Restore</button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={!!editUser} title="Edit User" onClose={() => setEditUser(null)}>
        {editUser && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {[["Full Name","name"],["Email","email"],["Company","company"]].map(([label,key]) => (
              <div key={key}>
                <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>{label}</label>
                <input value={editUser[key]} onChange={e => setEditUser(u => ({...u,[key]:e.target.value}))} style={css.input} />
              </div>
            ))}
            <div>
              <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Status</label>
              <select value={editUser.status} onChange={e => setEditUser(u => ({...u,status:e.target.value}))} style={{ ...css.input }}>
                {["active","inactive","suspended"].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div style={{ display:"flex", gap:10, marginTop:8 }}>
              <button onClick={saveEdit} style={css.btn(C.brand)}>Save</button>
              <button onClick={() => setEditUser(null)} style={css.btn(C.bgMuted, C.textMid)}>Cancel</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

// ── MOCK TESTS PAGE ───────────────────────────────────────────
function MockPage({ data, setData, toast }) {
  const { C } = useTheme();
  const css = getStyles(C);
  const [edit, setEdit] = useState(null);

  const toggleActive = (id) => {
    setData(d => ({ ...d, mockRounds: d.mockRounds.map(r => r.id === id ? { ...r, active: !r.active } : r) }));
    toast("Round status updated", "success");
  };
  const saveEdit = () => {
    setData(d => ({ ...d, mockRounds: d.mockRounds.map(r => r.id === edit.id ? edit : r) }));
    setEdit(null); toast("Round updated", "success");
  };

  return (
    <div>
      <h2 style={{ fontFamily:"Instrument Serif,serif", fontSize:32, color:C.navy, fontWeight:400, marginBottom:4 }}>Mock Tests</h2>
      <p style={{ fontFamily:"Geist,sans-serif", fontSize:13, color:C.textMut, marginBottom:24 }}>Manage mock assessment rounds</p>

      <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
        {data.mockRounds.map((r, i) => (
          <div key={r.id} style={{ ...css.card, display:"flex", alignItems:"center", gap:20, opacity: r.active ? 1 : 0.65 }}>
            <div style={{ width:44, height:44, borderRadius:12, background:`linear-gradient(135deg,${C.brand},${C.coral})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, fontWeight:800, color:"#fff", fontFamily:"Geist Mono,monospace", flexShrink:0 }}>
              {String(i+1).padStart(2,"0")}
            </div>
            <div style={{ flex:1 }}>
              <p style={{ fontFamily:"Geist,sans-serif", fontSize:15, fontWeight:700, color:C.navy }}>{r.name}</p>
              <p style={{ fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMut, marginTop:2 }}>
                {r.questions} questions · {r.time} min · {r.completions.toLocaleString()} completions
              </p>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <Badge type={r.active ? "active" : "inactive"}>{r.active ? "Active" : "Off"}</Badge>
              <Toggle value={r.active} onChange={() => toggleActive(r.id)} />
              <button onClick={() => setEdit({...r})} style={{ ...css.btn(C.bgMuted, C.textMid), fontSize:12 }}>✏ Edit</button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={!!edit} title="Edit Round" onClose={() => setEdit(null)}>
        {edit && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <div>
              <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Round Name</label>
              <input value={edit.name} onChange={e => setEdit(r => ({...r,name:e.target.value}))} style={css.input} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              <div>
                <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Questions</label>
                <input type="number" value={edit.questions} onChange={e => setEdit(r => ({...r,questions:+e.target.value}))} style={css.input} />
              </div>
              <div>
                <label style={{ fontFamily:"Geist,sans-serif", fontSize:12, fontWeight:600, color:C.textMid, display:"block", marginBottom:6 }}>Time (min)</label>
                <input type="number" value={edit.time} onChange={e => setEdit(r => ({...r,time:+e.target.value}))} style={css.input} />
              </div>
            </div>
            <div style={{ display:"flex", gap:10, marginTop:8 }}>
              <button onClick={saveEdit} style={css.btn(C.brand)}>Save</button>
              <button onClick={() => setEdit(null)} style={css.btn(C.bgMuted, C.textMid)}>Cancel</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

// ── CAPGEMINI QUIZ PAGE ────────────────────────────────────────
const BLANK_Q = { id: null, imageUrl: "", options: ["", "", "", ""], correct: 0, topic: "Aptitude", difficulty: "Medium" };
const TOPICS = ["Aptitude", "Logical", "Verbal", "Programming", "Data Interpretation", "General"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

function QuizPage({ toast }) {
  const { C } = useTheme();
  const css = getStyles(C);
  const questions = useQuestions();
  const [editing, setEditing] = useState(null); // null | question object
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  const persist = (qs) => { storeSetQuestions(qs); };

  const openNew = () => setEditing({ ...BLANK_Q, id: Date.now() });
  const openEdit = (q) => setEditing({ ...q, options: [...q.options] });
  const cancelEdit = () => setEditing(null);

  const handleImageFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setEditing(ed => ({ ...ed, imageUrl: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const saveQuestion = () => {
    if (!editing.imageUrl) { toast("Please upload a question image", "error"); return; }
    if (editing.options.some(o => !o.trim())) { toast("Fill all 4 options", "error"); return; }
    const exists = questions.find(q => q.id === editing.id);
    const updated = exists
      ? questions.map(q => q.id === editing.id ? editing : q)
      : [...questions, editing];
    persist(updated);
    toast("Question saved!", "success");
    setEditing(null);
  };

  const deleteQuestion = (id) => {
    if (!window.confirm("Delete this question?")) return;
    persist(questions.filter(q => q.id !== id));
    toast("Question deleted", "success");
  };

  const setOpt = (i, val) => setEditing(ed => {
    const opts = [...ed.options]; opts[i] = val; return { ...ed, options: opts };
  });

  // ── Form view ──
  if (editing) return (
    <div style={{ maxWidth: 780, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
        <button onClick={cancelEdit} style={{ ...css.btn(C.bgMuted, C.text), padding: "8px 16px" }}>← Back</button>
        <div>
          <h2 style={{ fontFamily: "Instrument Serif,serif", fontSize: 30, color: C.navy, fontWeight: 400, margin: 0 }}>
            {editing.id && questions.find(q => q.id === editing.id) ? "Edit Question" : "Add New Question"}
          </h2>
        </div>
      </div>

      <div style={{ ...css.card, marginBottom: 20 }}>
        <p style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 13, color: C.textMut, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Question Image</p>
        {editing.imageUrl ? (
          <div style={{ position: "relative", marginBottom: 12 }}>
            <img src={editing.imageUrl} alt="question" style={{ width: "100%", maxHeight: 300, objectFit: "contain", borderRadius: 10, border: `1px solid ${C.border}`, background: "#f9f9f7" }} />
            <button onClick={() => setEditing(ed => ({ ...ed, imageUrl: "" }))} style={{ position: "absolute", top: 8, right: 8, background: C.danger, color: "#fff", border: "none", borderRadius: 8, padding: "4px 10px", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>✕ Remove</button>
          </div>
        ) : (
          <div
            onClick={() => fileRef.current?.click()}
            style={{ border: `2px dashed ${C.border}`, borderRadius: 12, padding: "40px 20px", textAlign: "center", cursor: "pointer", background: C.bgMuted, transition: "border .2s" }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>🖼️</div>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid, margin: 0 }}>Click to upload question image (PNG, JPG, WEBP)</p>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageFile} />
        {!editing.imageUrl && (
          <div style={{ marginTop: 12 }}>
            <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, marginBottom: 6 }}>Or paste image URL:</p>
            <input
              style={css.input}
              placeholder="https://example.com/question.png"
              value={editing.imageUrl}
              onChange={e => setEditing(ed => ({ ...ed, imageUrl: e.target.value }))}
            />
          </div>
        )}
      </div>

      <div style={{ ...css.card, marginBottom: 20 }}>
        <p style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 13, color: C.textMut, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Options (A–D)</p>
        {editing.options.map((opt, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div
              onClick={() => setEditing(ed => ({ ...ed, correct: i }))}
              style={{
                width: 36, height: 36, borderRadius: "50%", border: `2px solid ${editing.correct === i ? C.success : C.border}`,
                background: editing.correct === i ? C.success : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", flexShrink: 0, transition: "all .2s",
                color: editing.correct === i ? "#fff" : C.textMut,
                fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 13,
              }}
              title="Click to mark as correct answer"
            >
              {["A","B","C","D"][i]}
            </div>
            <input
              style={{ ...css.input, border: `1.5px solid ${editing.correct === i ? C.success : C.border}` }}
              placeholder={`Option ${["A","B","C","D"][i]}`}
              value={opt}
              onChange={e => setOpt(i, e.target.value)}
            />
            {editing.correct === i && (
              <span style={{ ...css.badge(C.success + "22", C.success), whiteSpace: "nowrap", fontSize: 11 }}>✓ Correct</span>
            )}
          </div>
        ))}
        <p style={{ fontFamily: "Geist,sans-serif", fontSize: 12, color: C.textMut, marginTop: 4 }}>Click the circle to mark the correct answer.</p>
      </div>

      <div style={{ ...css.card, marginBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 13, color: C.textMut, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Topic</p>
            <select style={{ ...css.input }} value={editing.topic} onChange={e => setEditing(ed => ({ ...ed, topic: e.target.value }))}>
              {TOPICS.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <p style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 13, color: C.textMut, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Difficulty</p>
            <select style={{ ...css.input }} value={editing.difficulty} onChange={e => setEditing(ed => ({ ...ed, difficulty: e.target.value }))}>
              {DIFFICULTIES.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={saveQuestion} style={{ ...css.btn(C.success), flex: 1, padding: "12px 24px", fontSize: 15 }}>💾 Save Question</button>
        <button onClick={cancelEdit} style={{ ...css.btn(C.bgMuted, C.text), padding: "12px 24px" }}>Cancel</button>
      </div>
    </div>
  );

  // ── List view ──
  const diffColor = { Easy: C.success, Medium: C.gold, Hard: C.danger };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontFamily: "Instrument Serif,serif", fontSize: 32, color: C.navy, fontWeight: 400, marginBottom: 4 }}>Capgemini Quiz</h2>
          <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid }}>
            Manage image-based quiz questions for the Capgemini assessment section. {questions.length} question{questions.length !== 1 ? "s" : ""} total.
          </p>
        </div>
        <button onClick={openNew} style={{ ...css.btn(C.brand), padding: "10px 20px", fontSize: 14 }}>+ Add Question</button>
      </div>

      {questions.length === 0 ? (
        <div style={{ ...css.card, textAlign: "center", padding: "60px 24px" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>❓</div>
          <h3 style={{ fontFamily: "Instrument Serif,serif", fontSize: 24, color: C.navy, fontWeight: 400, marginBottom: 8 }}>No questions yet</h3>
          <p style={{ fontFamily: "Geist,sans-serif", fontSize: 14, color: C.textMid, marginBottom: 20 }}>Add your first question to get started.</p>
          <button onClick={openNew} style={{ ...css.btn(C.brand), padding: "10px 24px" }}>+ Add First Question</button>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {questions.map((q, idx) => (
            <div key={q.id} style={{ ...css.card, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Image thumbnail */}
              <div style={{ width: 120, height: 90, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}`, flexShrink: 0, background: C.bgMuted, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => setPreview(q.imageUrl)}>
                {q.imageUrl
                  ? <img src={q.imageUrl} alt="q" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  : <span style={{ fontSize: 28 }}>🖼️</span>
                }
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "Geist,sans-serif", fontWeight: 700, fontSize: 13, color: C.textMut }}>Q{idx + 1}</span>
                  <span style={{ ...css.badge(C.brand + "18", C.brand) }}>{q.topic}</span>
                  <span style={{ ...css.badge(diffColor[q.difficulty] + "22", diffColor[q.difficulty]) }}>{q.difficulty}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px" }}>
                  {q.options.map((opt, i) => (
                    <div key={i} style={{ fontFamily: "Geist,sans-serif", fontSize: 13, color: i === q.correct ? C.success : C.textMid, fontWeight: i === q.correct ? 700 : 400, display: "flex", alignItems: "center", gap: 4 }}>
                      <span style={{ opacity: 0.6 }}>{["A","B","C","D"][i]}.</span>
                      <span>{opt || <span style={{ opacity: 0.4, fontStyle: "italic" }}>empty</span>}</span>
                      {i === q.correct && <span style={{ fontSize: 11 }}>✓</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }}>
                <button onClick={() => openEdit(q)} style={{ ...css.btn(C.bgMuted, C.text), padding: "7px 14px", fontSize: 12 }}>✏️ Edit</button>
                <button onClick={() => deleteQuestion(q.id)} style={{ ...css.btn(C.dangerLt, C.danger), padding: "7px 14px", fontSize: 12 }}>🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image preview modal */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        >
          <img src={preview} alt="preview" style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 12, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }} onClick={e => e.stopPropagation()} />
          <button onClick={() => setPreview(null)} style={{ position: "fixed", top: 20, right: 20, background: "#fff", border: "none", borderRadius: "50%", width: 40, height: 40, fontSize: 20, cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>✕</button>
        </div>
      )}
    </div>
  );
}

// ── SETTINGS PAGE ─────────────────────────────────────────────
function SettingsPage({ data, setData, toast }) {
  const { C } = useTheme();
  const css = getStyles(C);
  const [s, setS] = useState(data.siteSettings);
  const [saved, setSaved] = useState(false);

  const save = () => {
    setData(d => ({ ...d, siteSettings: s }));
    setSaved(true); toast("Settings saved!", "success");
    setTimeout(() => setSaved(false), 2000);
  };

  const Field = ({ label, desc, children }) => (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 0", borderBottom:`1px solid ${C.border}` }}>
      <div>
        <p style={{ fontFamily:"Geist,sans-serif", fontSize:14, fontWeight:600, color:C.navy }}>{label}</p>
        {desc && <p style={{ fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMut, marginTop:2 }}>{desc}</p>}
      </div>
      {children}
    </div>
  );

  return (
    <div>
      <h2 style={{ fontFamily:"Instrument Serif,serif", fontSize:32, color:C.navy, fontWeight:400, marginBottom:4 }}>Settings</h2>
      <p style={{ fontFamily:"Geist,sans-serif", fontSize:13, color:C.textMut, marginBottom:28 }}>Global platform configuration</p>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        {/* General */}
        <div style={css.card}>
          <p style={{ fontFamily:"Geist,sans-serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:4 }}>General</p>
          <p style={{ fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMut, marginBottom:4 }}>Core platform identity</p>

          <Field label="Site Name">
            <input value={s.siteName} onChange={e => setS(x => ({...x,siteName:e.target.value}))} style={{ ...css.input, maxWidth:200 }} />
          </Field>
          <Field label="Tagline" desc="Shown on the homepage hero">
            <input value={s.tagline} onChange={e => setS(x => ({...x,tagline:e.target.value}))} style={{ ...css.input, maxWidth:260 }} />
          </Field>
          <Field label="Allow Registrations" desc="Let new users sign up">
            <Toggle value={s.allowRegistrations} onChange={v => setS(x => ({...x,allowRegistrations:v}))} />
          </Field>
          <Field label="Maintenance Mode" desc="Take the site offline for users">
            <Toggle value={s.maintenanceMode} onChange={v => setS(x => ({...x,maintenanceMode:v}))} />
          </Field>
        </div>

        {/* Gamification */}
        <div style={css.card}>
          <p style={{ fontFamily:"Geist,sans-serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:4 }}>Gamification</p>
          <p style={{ fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMut, marginBottom:4 }}>Engagement & goals</p>

          <Field label="Daily Goal (questions)" desc="Target per user per day">
            <input type="number" value={s.dailyGoal} onChange={e => setS(x => ({...x,dailyGoal:+e.target.value}))} style={{ ...css.input, maxWidth:100 }} />
          </Field>
          <Field label="Session Timeout (min)" desc="Auto-logout after inactivity">
            <input type="number" value={s.sessionTimeout} onChange={e => setS(x => ({...x,sessionTimeout:+e.target.value}))} style={{ ...css.input, maxWidth:100 }} />
          </Field>
          <Field label="Max Streak Bonus (pts)" desc="Cap on streak point rewards">
            <input type="number" value={s.maxStreakBonus} onChange={e => setS(x => ({...x,maxStreakBonus:+e.target.value}))} style={{ ...css.input, maxWidth:100 }} />
          </Field>
          <Field label="Analytics Tracking" desc="Collect usage data for insights">
            <Toggle value={s.analyticsEnabled} onChange={v => setS(x => ({...x,analyticsEnabled:v}))} />
          </Field>
        </div>
      </div>

      {/* Danger zone */}
      <div style={{ ...css.card, marginTop:20, borderColor: C.danger+"40", background: C.dangerLt }}>
        <p style={{ fontFamily:"Geist,sans-serif", fontSize:15, fontWeight:700, color:C.danger, marginBottom:4 }}>Danger Zone</p>
        <p style={{ fontFamily:"Geist,sans-serif", fontSize:12, color:C.textMid, marginBottom:16 }}>These actions are irreversible. Proceed with caution.</p>
        <div style={{ display:"flex", gap:12 }}>
          <button onClick={() => toast("Reset cancelled (demo mode)", "warn")} style={css.btn(C.danger)}>Reset All User Data</button>
          <button onClick={() => toast("Export started (demo mode)", "success")} style={css.btn(C.bgCard, C.danger)}>Export Database</button>
          <button onClick={() => toast("Purge cancelled (demo mode)", "warn")} style={css.btn("#fff0f0", C.danger)}>Purge Inactive Accounts</button>
        </div>
      </div>

      <div style={{ display:"flex", justifyContent:"flex-end", marginTop:20 }}>
        <button onClick={save} style={{ ...css.btn(saved ? C.success : C.brand), minWidth:140 }}>
          {saved ? "✓ Saved!" : "Save Settings"}
        </button>
      </div>
    </div>
  );
}

// ── ROOT ──────────────────────────────────────────────────────
export default function AdminPanel() {
  const { C } = useTheme();
  const [activePage, setActivePage] = useState("overview");
  const [data,       setData]       = useState(initialData);
  const [toastMsg,   setToastMsg]   = useState("");
  const [toastType,  setToastType]  = useState("success");

  const toast = (msg, type="success") => { setToastMsg(msg); setToastType(type); };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  const pageProps = { data, setData, toast };
  const pages = {
    overview:  <OverviewPage  {...pageProps} />,
    games:     <GamesPage     {...pageProps} />,
    companies: <CompaniesPage {...pageProps} />,
    users:     <UsersPage     {...pageProps} />,
    mock:      <MockPage      {...pageProps} />,
    quiz:      <QuizPage      toast={toast} />,
    settings:  <SettingsPage  {...pageProps} />,
  };

  return (
    <div style={{ display:"flex", minHeight:"100vh", background:C.bg, fontFamily:"Geist,sans-serif" }}>
      <style>{`
        .admin-sidebar { display: flex !important; }
        .admin-main { padding: 36px !important; }
        .admin-grid-2 { grid-template-columns: 1fr 1fr !important; }
        .admin-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 900px) {
          .admin-sidebar { display: none !important; }
          .admin-main { padding: 16px !important; }
          .admin-grid-2 { grid-template-columns: 1fr !important; }
          .admin-grid-3 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .admin-main { padding: 12px !important; }
          .admin-grid-3 { grid-template-columns: 1fr !important; }
          .admin-table-wrap { overflow-x: auto !important; }
        }
      `}</style>
      <Sidebar active={activePage} setActive={setActivePage} />

      <main className="admin-main" style={{ flex:1, overflowY:"auto", minWidth:0 }}>
        {pages[activePage]}
      </main>

      <Toast msg={toastMsg} type={toastType} onClose={() => setToastMsg("")} />
    </div>
  );
}
