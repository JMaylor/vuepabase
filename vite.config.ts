import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      /* options */
    }),
    Components({
      dts: true,
    }),
    AutoImport({
      // targets to transform
      include: [/\.[tj]s?$/, /\.vue$/, /\.vue\?vue/],
      imports: ["vue", "vue-router", "@vueuse/core", "pinia"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
