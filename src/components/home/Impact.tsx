'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { stats } from '@/lib/content';
import FadeUp from '@/components/motion/FadeUp';

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const reduce = useReducedMotion();
  const num = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: reduce ? 0 : 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        if (num.current) num.current.textContent = String(Math.round(n));
      },
    });
    return () => c.stop();
  }, [inView, to, reduce]);
  return (
    <span ref={ref} className="tabular-nums">
      <span ref={num}>0</span>
      <span className="text-[0.5em] align-top">{suffix}</span>
    </span>
  );
}

export default function Impact() {
  return (
    <section className="relative rounded-b-[32px] bg-paper pb-24 pt-10 text-ink md:pb-36">
      <div className="wrap">
        <div className="grid gap-10 border-t border-ink/10 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow on-paper">Impact</p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:col-span-9 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div className="display text-[clamp(3.4rem,7vw,6.5rem)] leading-none">
                  <Count to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-4 text-base font-medium">{s.label}</p>
                <p className="mt-1 text-sm text-[#5d6660]">{s.note}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
