import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: false,

    lib: {
      entry: "src/main.tsx",
      name: "ListKitWidget",
      formats: ["iife"],
      fileName: () => "widget.js",
    },

    cssCodeSplit: false,
  },
});