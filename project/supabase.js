
import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://pwnystbgxmoqswruloxw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bnlzdGJneG1vcXN3cnVsb3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MzA4MzQsImV4cCI6MjAzMTUwNjgzNH0.zJggmjMt-9cNQKLwDRVPCEZCGCEKn5Gav4BBfXZolbA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;