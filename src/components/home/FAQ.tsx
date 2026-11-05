'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { faqs } from '@/lib/content';
import SplitReveal from '@/components/motion/SplitReveal';

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="relative py-16 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-6">FAQ</p>
          <SplitReveal
            className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] text-white"
            segments={['Questions,\n', { text: 'answered.', className: 'text-white/40' }]}
          />
        </div>
        <ul className="lg:col-span-7 lg:col-start-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.question} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className={`text-xl tracking-tight transition-colors md:text-2xl ${isOpen ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                    {f.question}
                  </span>
                  <span
                    data-open={isOpen}
                    className={`plus-btn relative grid h-9 w-9 shrink-0 place-items-center rounded-full border ${isOpen ? 'rotate-45 border-signal bg-signal/15' : 'border-signal/40'}`}
                  >
                    <span className="absolute h-px w-3 bg-signal" />
                    <span className="absolute h-3 w-px bg-signal" />
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
                      <p className="max-w-[60ch] pb-7 text-lg leading-relaxed text-fog">{f.answer}</p>
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
