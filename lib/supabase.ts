import { createClient } from '@supabase/supabase-js';
import type { Course } from '@/types';

export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables.');
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });
}

export async function fetchCourses(): Promise<Course[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch courses: ${error.message}`);
  }
  return data ?? [];
}

export const MOCK_COURSES: Course[] = [
  { id: '1', title: 'Advanced React Patterns', progress: 75, icon_name: 'Layers', created_at: new Date().toISOString() },
  { id: '2', title: 'TypeScript Mastery', progress: 48, icon_name: 'Code2', created_at: new Date().toISOString() },
  { id: '3', title: 'System Design Fundamentals', progress: 92, icon_name: 'Network', created_at: new Date().toISOString() },
  { id: '4', title: 'GraphQL & API Design', progress: 31, icon_name: 'Braces', created_at: new Date().toISOString() },
];