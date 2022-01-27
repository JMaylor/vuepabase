import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

// supabase.auth.onAuthStateChange((event, session) => {
//   console.log("SUPABASE AUTH STATE CHANGE");
//   console.log(event, session);
// });

export { supabase };
