import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://lflskyzhohjdxvryfdow.supabase.co",
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbHNreXpob2hqZHh2cnlmZG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2OTU0NDgsImV4cCI6MjAxNTI3MTQ0OH0.sqDWkbGh2dTsYsZiJzOx13ZyYYHHR2FQTgNcO28CNwk`
);

export default supabase;
