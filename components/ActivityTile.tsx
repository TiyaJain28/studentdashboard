'use client';
import { BentoCard } from './BentoCard';
import { getActivityColor } from '@/lib/activity';

function generateStaticActivity() {
  const days = [];
  const base = new Date('2026-02-24');
  const pattern = [0,1,3,2,4,1,0,2,3,1,4,0,2,1,3,2,0,1,4,3,2,1,0,3,2,4,1,0,2,3,
                   1,4,2,0,3,1,2,4,0,1,3,2,1,0,4,2,3,1,0,2,1,3,0,2,4,1,3,2,0,1,
                   2,3,1,4,0,2,1,3,2,0,4,1,2,3,0,1,4,2,3,1,0,2,1,4,3,2,0,1,2,3,
                   1,0,4,2,1,3,0,2,4,1,3,2,1,0];
  for (let i = 0; i < 105; i++) {
    const date = new Date(base);
    date.setDate(base.getDate() + i);
    days.push({
      date: date.toISOString().split('T')[0],
      count: pattern[i % pattern.length],
    });
  }
  return days;
}

const ACTIVITY_DATA = generateStaticActivity();

export function ActivityTile({ index }: { index: number }) {
  const weeks: typeof ACTIVITY_DATA[] = [];
  for (let i = 0; i < ACTIVITY_DATA.length; i += 7) {
    weeks.push(ACTIVITY_DATA.slice(i, i + 7));
  }

  return (
    <BentoCard colSpan2 index={index}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500 }}>Activity</h3>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>Last 15 weeks</span>
        </div>
        <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '4px' }}>
          {weeks.map((week, wi) => (
            <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {week.map((day, di) => (
                <div
                  key={di}
                  title={`${day.date}: ${day.count} sessions`}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '2px',
                    backgroundColor: getActivityColor(day.count),
                    transition: 'transform 150ms',
                    cursor: 'default',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}