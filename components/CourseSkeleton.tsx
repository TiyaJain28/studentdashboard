export function CourseSkeleton() {
  return (
    <div className="rounded-2xl bg-[#111118] border border-white/5 p-5 space-y-4 animate-pulse">
      <div className="w-9 h-9 rounded-lg bg-white/10" />
      <div className="space-y-2">
        <div className="h-3.5 w-3/4 rounded bg-white/10" />
        <div className="h-3 w-1/2 rounded bg-white/5" />
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/10" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="rounded-2xl bg-[#111118] border border-white/5 p-8 animate-pulse col-span-2 space-y-4">
      <div className="h-5 w-1/3 rounded bg-white/10" />
      <div className="h-8 w-2/3 rounded bg-white/10" />
      <div className="h-4 w-1/4 rounded bg-white/5" />
    </div>
  );
}