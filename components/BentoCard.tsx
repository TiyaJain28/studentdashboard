'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  colSpan2?: boolean;
}

export function BentoCard({ children, className = '', index = 0, colSpan2 = false }: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        backgroundColor: '#111118',
        border: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
        cursor: 'default',
        gridColumn: colSpan2 ? 'span 2' : 'span 1',
      }}
      className={className}
    >
      {children}
    </motion.article>
  );
}