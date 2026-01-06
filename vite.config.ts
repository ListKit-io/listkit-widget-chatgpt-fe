// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

/*export default defineConfig({
  plugins: [react(),
    cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "ListKitMcpWidgets",
      formats: ["es"],
      fileName: () => "listkit-mcp-widgets.es.js",
    },
    cssCodeSplit: false,
  },
});*/

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});