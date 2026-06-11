import { HeroSkeleton, CourseSkeleton } from '@/components/CourseSkeleton';

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <HeroSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
    </div>
  );
}