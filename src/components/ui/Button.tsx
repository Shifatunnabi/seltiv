import Link from 'next/link';
import type { ReactNode } from 'react';
import Magnetic from '@/components/motion/Magnetic';

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = 'primary',
  magnetic = true,
  className = '',
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'dark';
  magnetic?: boolean;
  className?: string;
  external?: boolean;
}) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn-icon">
        <Arrow />
      </span>
    </>
  );
  const el = external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
  return magnetic ? <Magnetic>{el}</Magnetic> : el;
}

export { Arrow };
