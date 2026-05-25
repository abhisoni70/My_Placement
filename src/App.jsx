import { useState, useEffect, useCallback } from "react";
import { injectFonts } from "./constants/theme";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

/**
 * App — root component.
 * Owns the global page state, injects fonts, scrolls to top on navigation,
 * and delegates rendering to MainLayout + AppRoutes.
 *
 * Browser history is kept in sync so the mobile back button (and browser
 * back/forward) navigate within the app instead of leaving it.
 */
export default function App() {
  // Initialise from the URL hash so deep-links work (e.g. #interview)
  const initialPage = window.location.hash.replace("#", "") || "home";
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    injectFonts();

    // Push a base entry so there is always something to go back *to*
    // (prevents the very first back-press from leaving the app entirely).
    if (!window.location.hash) {
      window.history.replaceState({ page: "home" }, "", "#home");
    }
  }, []);

  // Wrapped setter that also pushes a history entry
  const navigateTo = useCallback((newPage) => {
    setPage(newPage);
    window.history.pushState({ page: newPage }, "", `#${newPage}`);
  }, []);

  // Listen to the browser back / forward buttons
  useEffect(() => {
    const onPop = (e) => {
      const p = e.state?.page || window.location.hash.replace("#", "") || "home";
      setPage(p);          // update UI without pushing another entry
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <MainLayout page={page} setPage={navigateTo}>
      <AppRoutes page={page} setPage={navigateTo} />
    </MainLayout>
  );
}
