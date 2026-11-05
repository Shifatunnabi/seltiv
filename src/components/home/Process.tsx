'use client';

import { useRangeUnit } from '@/components/motion/useRange';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { processSteps } from '@/lib/content';
import SplitReveal from '@/components/motion/SplitReveal';

export default function Process() {
  const [view, setView] = useState<'seltiv' | 'you'>('seltiv');
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.7', 'end 0.6'] });
  const fill = useRangeUnit(scrollYProgress, [0, 1], [0, 100], '%');

  return (
    <section className="relative py-16 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-6">How we work</p>
            <SplitReveal
              className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] text-white"
              segments={['Four phases.\n', { text: 'Zero guesswork.', className: 'text-white/40' }]}
            />
            <p className="mt-8 max-w-[40ch] text-lg text-fog">
              A fixed scope, a weekly demo and a live staging link from the first sprint. Switch the view to see what we
              need from you.
            </p>

            <div className="mt-10 inline-flex rounded-full border border-line bg-surface p-1" role="tablist" aria-label="Responsibility view">
              {(['seltiv', 'you'] as const).map((k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={view === k}
                  onClick={() => setView(k)}
                  className="relative rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  {view === k && (
                    <motion.span layoutId="proc-pill" className="absolute inset-0 rounded-full bg-signal" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                  )}
                  <span className={`relative ${view === k ? 'text-ink' : 'text-fog'}`}>{k === 'seltiv' ? 'What Seltiv does' : 'What you do'}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-6 lg:col-start-7">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-line">
            <motion.div style={{ height: fill }} className="w-px bg-signal" />
          </div>
          {processSteps.map((p) => (
            <li key={p.n} className="group relative grid grid-cols-[40px_1fr] gap-6 pb-16 last:pb-0">
              <span className="num-tile relative z-10 grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface font-mono text-xs text-signal">
                {p.n}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="display text-[clamp(1.9rem,3vw,2.8rem)] text-white">{p.title}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{p.duration}</span>
                </div>
                <div className="relative mt-4 min-h-[5.5em]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={view}
                      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="max-w-[48ch] text-lg leading-relaxed text-fog"
                    >
                      {view === 'seltiv' ? p.seltiv : p.you}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
