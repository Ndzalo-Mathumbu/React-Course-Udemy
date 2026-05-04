import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase_URL = "https://ywucaamsuyzalyxdhjlv.supabase.co";
const supabase_Publishable_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3dWNhYW1zdXl6YWx5eGRoamx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0Nzg0NzcsImV4cCI6MjA5MzA1NDQ3N30.Um5Xj4DekHksnp84shNsRtNEtwG6ZjnIS9yaEpSNbgs";

const supabase = createClient(supabase_URL, supabase_Publishable_Key);

export { supabase_URL };
export default supabase;
