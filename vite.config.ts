import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import PurgeIcons from "vite-plugin-purge-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    PurgeIcons(),
    Components({
      dts: true,
    }),
    AutoImport({
      // targets to transform
      include: [/\.[tj]s?$/, /\.vue$/, /\.vue\?vue/],
      imports: ["vue", "vue-router", "@vueuse/core"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
