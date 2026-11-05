'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRange } from '@/components/motion/useRange';
import AgentConsole from './AgentConsole';

function Tag({ children, live }: { children: string; live?: boolean }) {
  return (
    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-fog backdrop-blur">
      {live && <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
      {children}
    </span>
  );
}

function Mosaic({ headerOpacity }: { headerOpacity?: ReturnType<typeof useRange> }) {
  return (
    <div className="flex h-full flex-col gap-2 bg-ink p-2 md:gap-3 md:p-3">
      <motion.div
        style={headerOpacity ? { opacity: headerOpacity } : undefined}
        className="flex items-center justify-between gap-4 px-2 pt-1 md:px-3"
      >
        <p className="display text-[clamp(1.25rem,2.2vw,2rem)] text-white">
          One studio. <span className="text-white/45">Five ways to grow.</span>
        </p>
        <p className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-muted lg:block">
          Agents · AI products · SaaS · Software · Web
        </p>
      </motion.div>
      <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-[1.4fr_1fr] gap-2 md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-2 md:gap-3">
        <div className="col-span-2 min-h-0 overflow-hidden rounded-2xl border border-line md:col-span-1 md:row-span-2">
          <AgentConsole />
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-paper">
          <Image src="/clients/themall.jpg" alt="The Mall BD e-commerce platform" fill className="object-cover" sizes="33vw" />
          <Tag live>The Mall BD · Live</Tag>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-line">
          <Image src="/art/saas.svg" alt="SaaS dashboard concept" fill className="object-cover" sizes="33vw" />
          <Tag>SaaS · Concept</Tag>
        </div>
        <div className="relative hidden overflow-hidden rounded-2xl border border-line md:block">
          <Image src="/art/software.svg" alt="Custom ERP system concept" fill className="object-cover" sizes="33vw" />
          <Tag>Software · Concept</Tag>
        </div>
        <div className="relative hidden overflow-hidden rounded-2xl bg-paper md:block">
          <Image src="/clients/dg.jpg" alt="Directors Guild website" fill className="object-cover" sizes="33vw" />
          <Tag live>Directors Guild · Live</Tag>
        </div>
      </div>
    </div>
  );
}

/**
 * Pinned scroll scene: "Think [ ] Seltiv." The block between the words grows
 * to fill the viewport and reveals a mosaic of what we build.
 */
export default function Reel() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // measure the sticky stage itself (handles mobile browser chrome / svh)
  const vp = useRef({ w: 1440, h: 900 });
  const [, force] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = stickyRef.current;
      vp.current = { w: el?.clientWidth ?? window.innerWidth, h: el?.clientHeight ?? window.innerHeight };
      force((n) => n + 1);
    };
    on();
    const ro = new ResizeObserver(on);
    if (stickyRef.current) ro.observe(stickyRef.current);
    return () => ro.disconnect();
  }, []);

  const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
  const grow = (p: number) => {
    const t = clamp01(p / 0.45);
    return 1 - Math.pow(1 - t, 2.2);
  };
  const startW = () => Math.min(210, Math.max(84, vp.current.w * 0.13));
  const w = useTransform(scrollYProgress, (p) => startW() + (vp.current.w - 24 - startW()) * grow(p));
  const h = useTransform(scrollYProgress, (p) => startW() * 0.62 + (vp.current.h - 24 - startW() * 0.62) * grow(p));
  const r = useRange(scrollYProgress, [0, 0.45], [14, 28]);
  const leftX = useTransform(scrollYProgress, (p) => -vp.current.w * 0.2 * clamp01(p / 0.4));
  const rightX = useTransform(scrollYProgress, (p) => vp.current.w * 0.2 * clamp01(p / 0.4));
  const wordsOpacity = useRange(scrollYProgress, [0.22, 0.4], [1, 0]);
  const mosaicOpacity = useRange(scrollYProgress, [0.08, 0.3], [0, 1]);
  const mosaicScale = useRange(scrollYProgress, [0.08, 0.45], [1.2, 1]);
  const thumbOpacity = useRange(scrollYProgress, [0, 0.12], [1, 0]);
  const headerOpacity = useRange(scrollYProgress, [0.42, 0.55], [0, 1]);

  if (reduce) {
    return (
      <section className="py-16 md:py-28" aria-label="What we build">
        <div className="wrap">
          <div className="aspect-[4/5] overflow-hidden rounded-[28px] border border-line md:aspect-[16/9]">
            <Mosaic />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[220svh]" aria-label="What we build, in motion">
      <div ref={stickyRef} className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center whitespace-nowrap">
          <motion.span
            style={{ x: leftX, opacity: wordsOpacity }}
            className="display justify-self-end pr-[2vw] text-[clamp(2.6rem,9vw,9rem)] text-white"
          >
            Think
          </motion.span>

          <motion.div style={{ width: w, height: h, borderRadius: r }} className="relative z-10 shrink-0 overflow-hidden whitespace-normal bg-ink">
            <motion.div style={{ opacity: thumbOpacity }} className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-signal">
              <div className="grid grid-cols-4 gap-[3px] p-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-[clamp(6px,0.9vw,14px)] w-[clamp(6px,0.9vw,14px)] animate-pulse rounded-[3px] bg-ink"
                    style={{ animationDelay: `${(i % 4) * 120 + Math.floor(i / 4) * 120}ms` }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div style={{ opacity: mosaicOpacity, scale: mosaicScale }} className="absolute inset-0">
              <Mosaic headerOpacity={headerOpacity} />
            </motion.div>
          </motion.div>

          <motion.span
            style={{ x: rightX, opacity: wordsOpacity }}
            className="display justify-self-start pl-[2vw] text-[clamp(2.6rem,9vw,9rem)] text-white"
          >
            Seltiv<span className="text-signal">.</span>
          </motion.span>
        </div>
      </div>
    </section>
  );
}
