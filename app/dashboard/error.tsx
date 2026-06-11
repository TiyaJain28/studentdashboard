'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-white/50">
      <p className="text-sm">Something went wrong loading the dashboard.</p>
      <button
        onClick={reset}
        className="px-4 py-2 text-xs rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}