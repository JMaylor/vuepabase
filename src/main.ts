import App from "./App.vue";
import router from "./router";
import { pinia } from "@/stores";
import VWave from "v-wave";
import { isDarkKey } from "./symbols";
import "./main.css";
import "@purge-icons/generated";

const app = createApp(App);

const isDark = useDark();
app.provide(isDarkKey, isDark);

app.use(router).use(pinia).use(VWave);
app.mount("#app");
