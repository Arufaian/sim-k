import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 3000,
    hot: true,
  },
  css: {
    devSourcemap: false,
  },
  optimizeDeps: {
    include: ["bootstrap"],
  },
});
