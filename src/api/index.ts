
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseApi = import.meta.env.VITE_SUPABASE_API as string;
console.log("Supabase URL:", import.meta.env);
console.log("Supabase API Key:", supabaseApi);
const supabase = createClient(supabaseUrl, supabaseApi);
export default supabase;