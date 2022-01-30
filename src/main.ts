import App from "./App.vue";
import router from "./router";
import "./main.css";
import { pinia } from "@/stores";
import VWave from "v-wave";
import '@purge-icons/generated'

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VWave);
app.mount("#app");
