'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { projects } from '@/lib/content';
import ProjectVisual from './ProjectVisual';

const FILTERS = ['All', 'E-commerce', 'Platform', 'Software', 'AI', 'Website'] as const;

export default function WorkGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))), [filter]);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className="relative rounded-full border border-ink/10 px-4 py-2 text-sm"
          >
            {filter === f && (
              <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
            )}
            <span className={`relative ${filter === f ? 'text-white' : 'text-ink'}`}>{f}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-x-6 gap-y-14 pb-10 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => {
            return (
              <motion.li
                key={p.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.06 }}
              >
                <Link
                  href={`/work/${p.slug}`}
                  aria-label={`Read the ${p.name} case study`}
                  className="group block rounded-[22px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-ink"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-paper-2">
                    <ProjectVisual project={p} sizes="(min-width:768px) 50vw, 100vw" />
                    <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-1.5">
                      {(p.mockup ? [p.mockup.eyebrow] : p.tags).map((t) => (
                        <span key={t} className="rounded-full bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="badge-arrow absolute bottom-4 right-4 grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-ink/85 text-white backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-signal group-hover:text-ink">
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-medium tracking-tight">{p.name}</h2>
                      <p className="mt-1 text-[#5d6660]">{p.summary}</p>
                    </div>
                    <span className="shrink-0 pt-1 font-mono text-[10px] uppercase tracking-wider text-[#5d6660]">Case study</span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
