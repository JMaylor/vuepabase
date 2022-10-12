import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { supabase, supabaseSymbol } from "./services/supabase";
import "./styles/main.css";

const app = createApp(App);

app.provide(supabaseSymbol, supabase);
app.use(createPinia());
app.use(router);

app.mount("#app");
