'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useRange, useRangeUnit } from '@/components/motion/useRange';
import BlockField from './BlockField';
import SplitReveal from '@/components/motion/SplitReveal';
import Button from '@/components/ui/Button';
import { capabilities } from '@/lib/content';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useRange(scrollYProgress, [0, 1], [1, 0.94]);
  const radius = useRange(scrollYProgress, [0, 1], [24, 44]);
  const fieldY = useRangeUnit(scrollYProgress, [0, 1], [0, 14], '%');
  const fade = useRange(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] px-[var(--gutter)] pb-3 pt-[72px] md:h-[100svh] md:min-h-[680px] md:pb-4"
      style={{ background: 'linear-gradient(180deg, #0c1a12 0%, #0a150f 75%, var(--color-ink) 100%)' }}
    >
      <motion.div style={{ scale, borderRadius: radius }} className="grain relative min-h-[calc(100svh-84px)] overflow-hidden border border-white/[0.05] bg-[#070d0a] md:h-full md:min-h-0">
        <motion.div style={{ y: fieldY }} className="absolute inset-0">
          <BlockField />
        </motion.div>
        {/* quiet the grid beneath the copy */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_0%_100%,#070d0a_25%,transparent_70%)] opacity-80" />
        <div
          className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[80%] w-[70%] rounded-full opacity-50"
          style={{ background: 'radial-gradient(closest-side, rgba(14,107,63,0.5), transparent)' }}
        />

        <motion.div
          style={{ opacity: fade }}
          className="relative flex min-h-[calc(100svh-84px)] flex-col justify-end px-5 pb-5 pt-[212px] md:h-full md:min-h-0 md:px-12 md:pb-12 md:pt-16"
        >
          <p className="eyebrow rise-in mb-6 md:mb-10" style={{ animationDelay: '0.1s' }}>
            AI-first product studio · Dhaka → Worldwide
          </p>

          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <SplitReveal
              as="h1"
              immediate
              delay={0.2}
              stagger={0.012}
              className="display text-[3rem] leading-[0.98] text-white sm:text-[clamp(3rem,8.9vw,8rem)] sm:leading-[0.95] lg:col-span-8"
              segments={['Intelligent\nsoftware, built\nto ', { text: 'grow.', className: 'serif-accent text-signal' }]}
            />

            <div
              className="shine-card rise-in overflow-hidden rounded-2xl bg-[#0f1c14]/85 p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8),-28px_-8px_70px_-26px_rgba(0,230,118,0.55)] backdrop-blur-xl md:p-6 lg:col-span-4 lg:max-w-[430px] lg:justify-self-end"
              style={{ animationDelay: '0.75s' }}
            >
              <span className="shine-glow" aria-hidden />
              <p className="text-base leading-[1.55] text-fog md:text-[17px]">
                AI agents, AI products, SaaS, custom software and websites. Designed and engineered from the first
                workflow to the production release.
              </p>
              <ul className="mt-5 hidden flex-wrap gap-1.5 sm:flex" aria-label="What we build">
                {capabilities.map((c) => (
                  <li key={c.slug} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-fog">
                    {c.short}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Button href="/contact" className="btn-compact">
                  Book an intro call
                </Button>
                <Button href="/work" variant="ghost" className="btn-compact">
                  See our work
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
