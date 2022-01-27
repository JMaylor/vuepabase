import { supabase } from "@/services/supabase";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return { supabase };
  },
});
