import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { fileURLToPath } from "url";
import { resolve, dirname } from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      strictMessage: false,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    testTimeout: 20000,
  },
});
