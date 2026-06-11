'use client';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = (LucideIcons as any)[name] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) {
    const Fallback = LucideIcons.BookOpen;
    return <Fallback {...props} />;
  }
  return <Icon {...props} />;
}