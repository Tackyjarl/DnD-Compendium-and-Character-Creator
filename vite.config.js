import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/DnD-Compendium-and-Character-Creator",
  plugins: [react()],
});
