import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import react from "@vitejs/plugin-react";
import sass from "sass";

export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ["Barlow Semi Condensed"],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
