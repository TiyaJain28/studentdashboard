'use client';
import { BentoCard } from './BentoCard';
import { Flame } from 'lucide-react';

export function HeroTile() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <BentoCard colSpan2 index={0} style={{ padding: '32px', minHeight: '180px' }}>
      {/* Aurora glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at 20% 50%, #6366F1 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #8B5CF6 0%, transparent 60%)',
          animation: 'pulse 6s ease-in-out infinite',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: '16px', padding: '32px' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '4px' }}>{greeting}</p>
          <h1 style={{ fontSize: '30px', fontWeight: 600, color: 'white', letterSpacing: '-0.025em' }}>
            Welcome back!
          </h1>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.2)',
            width: 'fit-content',
          }}
        >
          <Flame size={14} style={{ color: '#FB923C' }} />
          <span style={{ color: '#FCA5A5', fontSize: '12px', fontWeight: 500 }}>12 day streak</span>
        </div>
      </div>
    </BentoCard>
  );
}