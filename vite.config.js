import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hooks": path.resolve(__dirname, "./src/helpers/hooks"),
      "@validation": path.resolve(__dirname, "./src/helpers/validation"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@svgs": path.resolve(__dirname, "./src/components/svgs"),
    },
  },
  plugins: [react()],
});
