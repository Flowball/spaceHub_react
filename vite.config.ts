import react from "@vitejs/plugin-react";
import stylexPlugin from "unplugin-stylex/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylexPlugin({})],
});
