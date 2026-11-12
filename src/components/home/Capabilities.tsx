'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SplitReveal from '@/components/motion/SplitReveal';
import FadeUp from '@/components/motion/FadeUp';
import { capabilities } from '@/lib/content';

export default function Capabilities() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative py-16 md:py-28">
      <div className="wrap">
        <div className="mb-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">What we build</p>
          </div>
          <div className="lg:col-span-9">
            <SplitReveal
              className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] text-white"
              segments={['AI at the core.\n', { text: 'Craft in every layer.', className: 'text-white/40' }]}
            />
            <FadeUp delay={0.3}>
              <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-fog">
                Websites & e-commerce, AI agents & automation, custom software, AI products and SaaS platforms. One senior team takes each from strategy to
                launch, and builds every one as if AI will be part of its future.
              </p>
            </FadeUp>
          </div>
        </div>

        <ul className="border-t border-line">
          {capabilities.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.slug} id={c.slug} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-6 text-left md:grid-cols-[80px_1fr_auto_auto] md:gap-8 md:py-8"
                >
                  <span className="font-mono text-xs text-muted">{c.index}</span>
                  <span
                    className={`display text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.08] transition-colors duration-500 ${
                      isOpen ? 'text-white' : 'text-white/40 group-hover:text-white/80'
                    }`}
                  >
                    {c.title}
                  </span>
                  <span className="hidden font-mono text-xs uppercase tracking-[0.14em] text-muted md:block">
                    from <span className="text-mint">{c.from}</span>
                  </span>
                  <span
                    data-open={isOpen}
                    className={`plus-btn grid h-10 w-10 place-items-center rounded-full border ${
                      isOpen ? 'rotate-45 border-signal bg-signal text-ink' : 'border-signal/50 bg-signal/10 text-signal'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 md:grid-cols-[80px_1fr_1fr] md:gap-8">
                        <span className="hidden md:block" />
                        <div className="flex flex-col justify-between gap-8">
                          <p className="max-w-[46ch] text-lg leading-relaxed text-fog md:text-xl">{c.pitch}</p>
                          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                            {c.outcomes.map((o) => (
                              <li key={o} className="group/li flex items-center gap-3 text-white">
                                <span className="bullet h-1.5 w-1.5 rounded-[2px] bg-signal" />
                                {o}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {c.tags.map((t) => (
                              <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                            <span>
                              From <span className="text-mint">{c.from}</span>
                            </span>
                            <span>{c.timeline}</span>
                            <Link href={`/services/${c.slug}`} className="link-u text-white">
                              Explore <span className="arrow-inline">→</span>
                            </Link>
                          </div>
                        </div>
                        <motion.div
                          initial={{ clipPath: 'inset(12% 12% 12% 12% round 20px)', opacity: 0 }}
                          animate={{ clipPath: 'inset(0% 0% 0% 0% round 20px)', opacity: 1 }}
                          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                          className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-line"
                        >
                          <Image src={c.art} alt={`${c.title} illustration`} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
