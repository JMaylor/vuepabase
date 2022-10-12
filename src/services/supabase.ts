import router from "@/router";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { InjectionKey } from "vue";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabaseSymbol = Symbol(
  "supabase"
) as InjectionKey<SupabaseClient>;

supabase.auth.onAuthStateChange((event) => {
  if (event == "SIGNED_OUT") return router.push("/");
});
