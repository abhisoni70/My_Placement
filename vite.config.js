import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@games": path.resolve(__dirname, "./src/games"),
    },
  },
  server: {
    port: 5173,
    // Proxy API calls to backend during development
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
