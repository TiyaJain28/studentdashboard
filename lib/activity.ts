import type { ActivityDay } from '@/types';

export function getActivityColor(count: number): string {
  if (count === 0) return '#1E1E2E';
  if (count === 1) return '#312E81';
  if (count === 2) return '#4338CA';
  if (count === 3) return '#6366F1';
  return '#818CF8';
}

// NOTE: Do NOT use Math.random() here — it causes hydration mismatch
// between server render and client render.
// Use the static version in ActivityTile.tsx instead (generateStaticActivity).
// This function is kept only for reference / non-SSR contexts.
export function generateActivityData(weeks = 15): ActivityDay[] {
  const days: ActivityDay[] = [];
  const pattern = [0,1,3,2,4,1,0,2,3,1,4,0,2,1,3,2,0,1,4,3,2,1,0,3,2,4,1,0,2,3,
                   1,4,2,0,3,1,2,4,0,1,3,2,1,0,4,2,3,1,0,2,1,3,0,2,4,1,3,2,0,1,
                   2,3,1,4,0,2,1,3,2,0,4,1,2,3,0,1,4,2,3,1,0,2,1,4,3,2,0,1,2,3,
                   1,0,4,2,1,3,0,2,4,1,3,2,1,0];
  const base = new Date('2026-02-24');
  for (let i = 0; i < weeks * 7; i++) {
    const date = new Date(base);
    date.setDate(base.getDate() + i);
    days.push({
      date: date.toISOString().split('T')[0],
      count: pattern[i % pattern.length],
    });
  }
  return days;
}