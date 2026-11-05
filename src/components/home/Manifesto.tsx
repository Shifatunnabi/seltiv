'use client';

import { useRange } from '@/components/motion/useRange';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Token = { w: string } | { pill: ReactNode; label: string };

const I = {
  idea: (
    <svg viewBox="0 0 24 24" className="h-[0.55em] w-[0.55em]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z" strokeLinejoin="round" />
    </svg>
  ),
  flow: (
    <svg viewBox="0 0 24 24" className="h-[0.55em] w-[0.55em]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="7" height="6" rx="1.6" />
      <rect x="14" y="14" width="7" height="6" rx="1.6" />
      <path d="M6.5 10v4a3 3 0 0 0 3 3H14" strokeLinecap="round" />
    </svg>
  ),
  sys: (
    <svg viewBox="0 0 24 24" className="h-[0.55em] w-[0.55em]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" className="h-[0.55em] w-[0.55em]" fill="currentColor">
      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" />
    </svg>
  ),
};

const text: Token[] = [
  ...'We build agents, products, platforms and websites around how your business actually works. The'.split(' ').map((w) => ({ w })),
  { pill: I.idea, label: 'idea' },
  ...'you keep sketching, the'.split(' ').map((w) => ({ w })),
  { pill: I.flow, label: 'workflow' },
  ...'eating your team’s week, the'.split(' ').map((w) => ({ w })),
  { pill: I.sys, label: 'system' },
  ...'you have outgrown. We turn them into'.split(' ').map((w) => ({ w })),
  { pill: I.spark, label: 'software' },
  ...'people actually use.'.split(' ').map((w) => ({ w })),
];

function Word({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const reduce = useReducedMotion();
  const opacity = useRange(progress, range, [reduce ? 1 : 0.12, 1]);
  const blurPx = useRange(progress, range, [reduce ? 0 : 4, 0]);
  const blur = useTransform(blurPx, (b) => `blur(${b}px)`);
  return (
    <motion.span style={{ opacity, filter: blur }} className="mr-[0.24em] inline-block">
      {children}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });

  return (
    <section className="relative py-16 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="eyebrow sticky top-28">Why Seltiv</p>
        </div>
        <div ref={ref} className="lg:col-span-9">
          <p className="text-[clamp(1.9rem,4.4vw,4.4rem)] font-light leading-[1.08] tracking-[-0.035em] text-white">
            <span className="mb-[0.3em] block text-signal">
              <Word progress={scrollYProgress} range={[0, 0.06]}>
                Less manual work. More useful software.
              </Word>
            </span>
            {text.map((t, i) => {
              const start = 0.06 + (i / text.length) * 0.9;
              const range: [number, number] = [start, start + 0.9 / text.length + 0.02];
              if ('w' in t) {
                return (
                  <Word key={i} progress={scrollYProgress} range={range}>
                    {t.w}
                  </Word>
                );
              }
              return (
                <Word key={i} progress={scrollYProgress} range={range}>
                  <span className="pill relative top-[-0.06em] inline-flex h-[0.82em] items-center gap-[0.18em] rounded-full border border-signal/40 bg-signal/10 px-[0.32em] align-middle text-[0.62em] text-signal">
                    <span className={`pill-ico ${t.label === 'software' ? 'is-spin' : ''}`} style={{ animationDelay: `${(i % 4) * 0.35}s` }}>
                      {t.pill}
                    </span>
                  </span>{' '}
                  <span className="serif-accent">{t.label}</span>
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
