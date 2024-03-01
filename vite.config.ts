import react from "@vitejs/plugin-react";
import stylexPlugin from "unplugin-stylex/vite";
import { defineConfig } from "vite";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylexPlugin({})],
  define: {
    "process.env": process.env,
  },
});
