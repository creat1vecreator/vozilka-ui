import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
    'https://xnverdgutnjbhtihzvpq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudmVyZGd1dG5qYmh0aWh6dnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NzMyMTMsImV4cCI6MjAxMTE0OTIxM30.zMu2XCcExUmwIuL36rW3CsalDmFkk-ezxKlfZ1dguzc');
export default supabase;