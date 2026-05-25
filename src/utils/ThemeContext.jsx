import { createContext, useContext, useState, useEffect } from "react";
import { LIGHT, DARK } from "../constants/theme";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem("ap-dark") === "true"; } catch { return false; }
  });

  const C = isDark ? DARK : LIGHT;

  const toggle = () => setIsDark(d => {
    const next = !d;
    try { localStorage.setItem("ap-dark", String(next)); } catch {}
    return next;
  });

  useEffect(() => {
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ C, isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
