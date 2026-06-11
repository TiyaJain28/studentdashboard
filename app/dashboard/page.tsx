import { Suspense } from 'react';
import { HeroTile } from '@/components/HeroTile';
import { ActivityTile } from '@/components/ActivityTile';
import { CoursesSection } from './CoursesSection';
import { CourseSkeleton } from '@/components/CourseSkeleton';

export default function DashboardPage() {
  return (
    <main
      style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <HeroTile />
        <Suspense
          fallback={
            <>
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
            </>
          }
        >
          <CoursesSection />
        </Suspense>
        <ActivityTile index={6} />
      </div>
    </main>
  );
}