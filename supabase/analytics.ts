--xxx CREATE supabase/analytics.ts
import { supabase } from '@/config/supabase';

export async function trackEvent(userId: string, event: string, metadata?: Record<string, any>) {
  const { error } = await supabase.from('analytics').insert([{ user_id: userId, event, metadata }]);
  if (error) console.error('Analytics tracking error:', error.message);
}

export async function getUserStats(userId: string) {
  const { data, error } = await supabase
    .from('analytics')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching user stats:', error.message);
    return [];
  }
  return data;
}

export async function getAnalytics(event?: string) {
  let query = supabase.from('analytics').select('*');
  if (event) query = query.eq('event', event);
  const { data, error } = await query;
  if (error) {
    console.error('Error fetching analytics:', error.message);
    return [];
  }
  return data;
}
