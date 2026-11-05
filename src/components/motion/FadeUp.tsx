'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function FadeUp({
  children,
  delay = 0,
  className,
  y = 28,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: 'div' | 'li' | 'p' | 'section' | 'article';
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}
