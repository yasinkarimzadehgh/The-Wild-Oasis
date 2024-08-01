import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://azhzxzejwryvvonclofz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6aHp4emVqd3J5dnZvbmNsb2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNDE5NTAsImV4cCI6MjAzNzkxNzk1MH0.6ihDGiXQCbiWQqB9-DDizN4-8IR14URAfZvrM2tme7I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
