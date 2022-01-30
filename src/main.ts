import { InjectionKey, Ref } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import { pinia } from "@/stores";
import VWave from "v-wave";
import "@purge-icons/generated";

const app = createApp(App);

export const isDarkKey: InjectionKey<Ref<boolean>> = Symbol();
const isDark = useDark();
app.provide(isDarkKey, isDark);

app.use(router).use(pinia).use(VWave);

app.mount("#app");
