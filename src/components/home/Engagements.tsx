'use client';

import { motion } from 'framer-motion';
import { fractionalPlans, plans } from '@/lib/content';
import SplitReveal from '@/components/motion/SplitReveal';
import Button from '@/components/ui/Button';

const VARIANTS = {
  projects: {
    plans,
    eyebrow: 'Engagements',
    heading: ['Clear scope.\n', 'Honest pricing.'],
    badge: 'Products & AI',
    note: 'Prices in USD. Local (BDT) pricing available. Every project gets a fixed quote before work starts.',
  },
  fractional: {
    plans: fractionalPlans,
    eyebrow: 'Fractional pricing',
    heading: ['Growth support.\n', 'One monthly price.'],
    badge: 'Most popular',
    note: 'Prices in USD. Local (BDT) pricing available. Ad spend is billed separately. Pause or cancel with 30 days notice.',
  },
} as const;

export default function Engagements({ showHeading = true, variant = 'projects' }: { showHeading?: boolean; variant?: keyof typeof VARIANTS }) {
  const v = VARIANTS[variant];
  return (
    <section id="pricing" className="relative py-16 md:py-28">
      <div className="wrap">
        {showHeading && (
          <div className="mb-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">{v.eyebrow}</p>
            </div>
            <div className="lg:col-span-9">
              <SplitReveal
                className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] text-white"
                segments={[v.heading[0], { text: v.heading[1], className: 'text-white/40' }]}
              />
            </div>
          </div>
        )}

        <div className="grid gap-4 lg:grid-cols-3">
          {v.plans.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col overflow-hidden rounded-[26px] p-7 md:p-9 ${
                p.featured ? 'border border-signal/60 bg-surface text-white shadow-[0_30px_80px_-40px_rgba(0,230,118,0.35)]' : 'border border-line bg-surface text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium tracking-tight">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full border border-signal/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
                    {v.badge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-muted">{p.tagline}</p>

              <div className="mt-10 flex items-baseline gap-3">
                <span className="display text-[clamp(3rem,4.6vw,4.4rem)] leading-none">{p.price}</span>
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">{p.unit}</p>

              <p className="mt-8 text-base leading-[1.55] text-fog">{p.bestFor}</p>

              <ul className="mt-8 space-y-3 border-t border-line pt-8">
                {p.includes.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-signal" />
                    {x}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <Button href="/contact" variant={p.featured ? 'primary' : 'ghost'} magnetic={false}>
                  {p.cta}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {v.note}
        </p>
      </div>
    </section>
  );
}
