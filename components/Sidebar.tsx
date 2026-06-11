'use client';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart2, Settings, Trophy } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { id: 'courses', label: 'Courses', icon: BookOpen, href: '/courses' },
  { id: 'progress', label: 'Progress', icon: BarChart2, href: '/progress' },
  { id: 'achievements', label: 'Achievements', icon: Trophy, href: '/achievements' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#111118',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        padding: '24px 12px',
        width: '64px',
        flexShrink: 0,
        transition: 'width 300ms',
      }}
      className="lg:w-56"
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 8px', marginBottom: '32px' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: '#6366F1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ color: 'white', fontSize: '12px', fontWeight: 700 }}>L</span>
        </div>
        <span
          className="hidden lg:block"
          style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}
        >
          LearnOS
        </span>
      </div>

      {/* Nav items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.id} style={{ position: 'relative' }}>
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '8px',
                    backgroundColor: 'rgba(99,102,241,0.15)',
                    border: '1px solid rgba(99,102,241,0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <Link
                href={item.href}
                style={{
                  position: 'relative',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 8px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: isActive ? '#A5B4FC' : 'rgba(255,255,255,0.4)',
                  transition: 'color 150ms',
                }}
              >
                <item.icon size={18} style={{ flexShrink: 0 }} />
                <span
                  className="hidden lg:block"
                  style={{ fontSize: '14px' }}
                >
                  {item.label}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}