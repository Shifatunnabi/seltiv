'use client';

import { useScroll } from 'framer-motion';
import { useEffect, useRef, type RefObject } from 'react';
import ProjectVisual from '@/components/work/ProjectVisual';
import { showcaseProjects } from '@/lib/content';

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const STAGGER = 0.045;
const SPAN = 1 - STAGGER * (showcaseProjects.length - 1);

/**
 * Shared-element hand-off between the Reel mosaic and the Work track. While
 * the Work section scrolls in, the four mosaic tiles are swapped for fixed
 * "flyers" that travel from each tile's rect to its matching Work card, so the
 * cards read as the same objects moving on to the next section.
 *
 * Both ends are measured live every frame, so it holds at any viewport size.
 */
export default function CardHandoff({ section }: { section: RefObject<HTMLElement | null> }) {
  const flyers = useRef<(HTMLDivElement | null)[]>([]);
  const ends = useRef<{ src: HTMLElement | null; dst: HTMLElement | null }[]>([]);
  const flying = useRef(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const update = () => {
      const el = section.current;
      if (!el) return;
      const vh = window.innerHeight;
      // 0 → the section's top edge enters the viewport, 1 → it is pinned
      const e = 1 - el.getBoundingClientRect().top / vh;
      const active = e > 0 && e < 1;

      if (active !== flying.current) {
        flying.current = active;
        showcaseProjects.forEach((p, i) => {
          const pair = (ends.current[i] ??= { src: null, dst: null });
          if (!pair.src?.isConnected) pair.src = document.querySelector<HTMLElement>(`[data-handoff-src="${p.slug}"]`);
          if (!pair.dst?.isConnected) pair.dst = document.querySelector<HTMLElement>(`[data-handoff-dst="${p.slug}"]`);
          const ok = active && pair.src && pair.dst;
          if (pair.src) pair.src.style.opacity = ok ? '0' : '';
          if (pair.dst) pair.dst.style.opacity = ok ? '0' : '';
          const f = flyers.current[i];
          if (f) f.style.visibility = ok ? 'visible' : 'hidden';
        });
      }
      if (!active) return;

      // read everything first, then write
      const rects = ends.current.map(({ src, dst }) => (src && dst ? ([src.getBoundingClientRect(), dst.getBoundingClientRect()] as const) : null));
      rects.forEach((pair, i) => {
        const f = flyers.current[i];
        if (!pair || !f) return;
        const [a, b] = pair;
        const t = ease(clamp01((e - i * STAGGER) / SPAN));
        const lift = Math.sin(Math.PI * t);
        const tilt = (i % 2 ? 1 : -1) * 2.2 * lift;
        f.style.width = `${lerp(a.width, b.width, t)}px`;
        f.style.height = `${lerp(a.height, b.height, t)}px`;
        f.style.transform = `translate3d(${lerp(a.left, b.left, t)}px, ${lerp(a.top, b.top, t)}px, 0) rotate(${tilt}deg) scale(${1 + 0.035 * lift})`;
        f.style.borderRadius = `${lerp(15, 22, t)}px`;
        f.style.boxShadow = `0 ${28 * lift}px ${70 * lift}px rgba(0, 0, 0, ${0.5 * lift})`;
        f.style.setProperty('--t', String(t));
      });
    };

    update();
    const off = scrollY.on('change', update);
    window.addEventListener('resize', update);
    return () => {
      off();
      window.removeEventListener('resize', update);
    };
  }, [section, scrollY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden>
      {showcaseProjects.map((p, i) => (
        <div
          key={p.slug}
          ref={(node) => {
            flyers.current[i] = node;
          }}
          className="absolute left-0 top-0 overflow-hidden bg-ink will-change-transform"
          style={{ visibility: 'hidden' }}
        >
          <ProjectVisual project={p} sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 78vw" />
          <span
            className="absolute inline-flex items-center rounded-full bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white backdrop-blur"
            style={{
              left: 'calc(12px + 4px * var(--t, 0))',
              top: 'calc(12px + 4px * var(--t, 0))',
            }}
          >
            {p.mockup?.eyebrow ?? p.tags[0]}
          </span>
          <span
            className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-ink/85 text-white backdrop-blur"
            style={{
              opacity: 'var(--t, 0)',
              transform: 'scale(calc(0.5 + 0.5 * var(--t, 0)))',
            }}
          >
            ↗
          </span>
        </div>
      ))}
    </div>
  );
}
