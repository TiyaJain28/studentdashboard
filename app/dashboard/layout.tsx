import { Sidebar } from '@/components/Sidebar';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#0A0A0F',
        overflow: 'hidden',
      }}
    >
      <Sidebar />
      {children}
    </div>
  );
}