'use client';

import Link from 'next/link';
import { useRangeUnit } from '@/components/motion/useRange';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMotionPreference } from '@/components/motion/useMotionPreference';
import { useLayoutEffect, useRef, useState } from 'react';
import { projects, featuredProjects } from '@/lib/content';
import { getHomepageProjectHref } from '@/lib/projects';
import SplitReveal from '@/components/motion/SplitReveal';
import Button from '@/components/ui/Button';
import ProjectVisual from '@/components/work/ProjectVisual';
import CardHandoff from './CardHandoff';

const featured = featuredProjects;

function Card({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const href = getHomepageProjectHref(p);
  const external = href.startsWith('https://');
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-card
      className="group block w-[78vw] shrink-0 rounded-[22px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-ink sm:w-[46vw] lg:w-[30vw]"
    >
      <div data-handoff-dst={p.slug} className="relative aspect-[4/3.4] overflow-hidden rounded-[22px] bg-paper-2">
        <ProjectVisual project={p} sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 78vw" />
        <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-1.5">
          {(p.mockup ? [p.mockup.eyebrow] : p.tags).map((t) => (
            <span key={t} className="rounded-full bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur">
              {t}
            </span>
          ))}
        </div>
        <span className="badge-arrow absolute bottom-4 right-4 grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-ink/85 text-white backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-signal group-hover:text-ink">
          <span aria-hidden>{external ? '↗' : '→'}</span>
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 text-ink">
        <div>
          <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
          <p className="mt-0.5 text-[15px] text-[#5d6660]">{p.summary}</p>
        </div>
        <span className="font-mono text-xs text-[#5d6660]">
          {String(i + 1).padStart(2, '0')}
        </span>
      </div>
    </Link>
  );
}

export default function Work() {
  const reduce = useMotionPreference();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, (p) => -dist * Math.min(1, Math.max(0, (p - 0.05) / 0.9)));
  const bar = useRangeUnit(scrollYProgress, [0.05, 0.95], [0, 100], '%');

  // keep keyboard focus visible: scroll the page so a focused card is in view
  const onFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (reduce || !section.current || !track.current || dist <= 0) return;
    const card = (e.target as HTMLElement).closest('[data-card]') as HTMLElement | null;
    if (!card) return;
    const t = Math.min(1, Math.max(0, (card.offsetLeft - 40) / dist));
    const range = section.current.offsetHeight - window.innerHeight;
    const y = section.current.offsetTop + (0.05 + 0.9 * t) * range;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(y, { immediate: true });
    else window.scrollTo(0, y);
  };

  return (
    <section
      id="work"
      ref={section}
      className="relative rounded-t-[32px] bg-paper text-ink"
      style={{ height: reduce ? undefined : `calc(100svh + ${dist}px)` }}
    >
      {!reduce && <CardHandoff section={section} />}
      <div className={reduce ? 'py-20' : 'sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden'}>
        <div className="wrap mb-8 flex items-end justify-between gap-6 md:mb-12" style={{ maxWidth: 'none' }}>
          <div>
            <p className="eyebrow on-paper mb-5">Selected work</p>
            <SplitReveal
              className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]"
              segments={['Built around ', { text: 'real work.', className: 'serif-accent' }]}
            />
          </div>
          <div className="hidden md:block">
            <Button href="/work" variant="dark">
              All projects
            </Button>
          </div>
        </div>

        <motion.div
          ref={track}
          style={reduce ? undefined : { x }}
          onFocus={onFocus}
          className={`flex gap-5 pl-[var(--gutter)] pr-[var(--gutter)] md:gap-8 ${reduce ? 'overflow-x-auto pb-4' : ''}`}
        >
          {featured.map((p, i) => (
            <Card key={p.name} p={p} i={i} />
          ))}
          <Link
            href="/work"
            className="group flex w-[60vw] shrink-0 flex-col justify-between rounded-[22px] bg-ink p-8 text-white sm:w-[34vw] lg:w-[22vw]"
          >
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">+{projects.length - featured.length} more</span>
            <span className="display text-[clamp(2rem,3.4vw,3.4rem)]">
              See all
              <br />
              <span className="serif-accent text-signal">projects</span> <span className="arrow-inline">→</span>
            </span>
          </Link>
        </motion.div>

        <div className="wrap mt-10" style={{ maxWidth: 'none' }}>
          <div className="h-px w-full bg-ink/10">
            <motion.div style={{ width: bar }} className="h-px bg-ink" />
          </div>
        </div>
      </div>
    </section>
  );
}
