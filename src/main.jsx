import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./utils/ThemeContext.jsx";
import { BookmarkProvider } from "./utils/BookmarkContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BookmarkProvider>
        <App />
      </BookmarkProvider>
    </ThemeProvider>
  </StrictMode>
);
