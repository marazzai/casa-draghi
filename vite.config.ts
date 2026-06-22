import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// `base: "./"` rende i path relativi: il sito funziona anche aprendo
// la build da una sottocartella o da hosting statico (Netlify, GitHub Pages).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
