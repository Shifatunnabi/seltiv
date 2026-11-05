'use client';

import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Step = { k: string; v: string; wait: number };

// wait = ms before this step appears (after the previous one)
const STEPS: Step[] = [
  { k: 'TRIGGER', v: 'New enquiry · WhatsApp', wait: 300 },
  { k: 'READ', v: '3-bed move · 14 Dec · Swindon → Bath', wait: 900 },
  { k: 'TOOL', v: 'pricing.estimate() → £1,240', wait: 900 },
  { k: 'TOOL', v: 'calendar.check(14 Dec) → 2 crews free', wait: 900 },
  { k: 'DRAFT', v: 'Quote + booking link prepared', wait: 900 },
  { k: 'HUMAN', v: 'Waiting for approval…', wait: 700 },
  { k: 'DONE', v: 'Quote sent · CRM updated', wait: 600 },
];
const HUMAN = STEPS.findIndex((s) => s.k === 'HUMAN');
const AUTO_APPROVE_MS = 3500;

export default function AgentConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '0px 0px -20% 0px' });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? STEPS.length : 0);
  const [approvedBy, setApprovedBy] = useState<'you' | 'ops' | null>(reduce ? 'ops' : null);
  const [run, setRun] = useState(0);

  // advance through steps on a schedule (no per-frame state)
  useEffect(() => {
    if (reduce || !inView) return;
    if (shown < STEPS.length) {
      if (shown === HUMAN + 1 && !approvedBy) {
        const id = setTimeout(() => setApprovedBy('ops'), AUTO_APPROVE_MS);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setShown((n) => n + 1), STEPS[shown].wait);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setShown(0);
      setApprovedBy(null);
      setRun((r) => r + 1);
    }, 4500);
    return () => clearTimeout(id);
  }, [shown, approvedBy, inView, reduce]);

  const waiting = shown === HUMAN + 1 && !approvedBy;
  const done = shown >= STEPS.length;

  return (
    <div ref={ref} className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-ink text-left font-mono text-xs text-fog md:text-[13px]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-3 hidden uppercase tracking-[0.12em] text-muted sm:inline">agent://quote-desk</span>
        </div>
        <span className="rounded-full border border-line px-2 py-0.5 uppercase tracking-[0.12em] text-muted">Concept demo</span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-col gap-3 border-b border-line p-4">
          <p className="uppercase tracking-[0.12em] text-muted">Inbox</p>
          <div className="rounded-xl border border-line bg-surface p-3 font-sans text-[15px] leading-snug text-white">
            Hi! Need a quote to move a 3-bed house from Swindon to Bath on 14 Dec. Is that possible?
          </div>
          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="ml-6 rounded-xl bg-signal p-3 font-sans text-[15px] leading-snug text-ink"
              >
                Yes, we have crews free on 14 Dec. Your estimate is £1,240. Book here →
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative flex-1 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="uppercase tracking-[0.12em] text-muted">Trace</p>
            <span className={`flex items-center gap-2 uppercase tracking-[0.12em] ${done ? 'text-signal' : 'text-fog'}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-signal' : 'animate-pulse bg-fog'}`} />
              {done ? 'Completed' : waiting ? 'Needs approval' : 'Running'}
            </span>
          </div>
          <ol className="relative space-y-2.5 border-l border-line pl-4">
            <AnimatePresence initial={false}>
              {STEPS.slice(0, shown).map((s, i) => {
                const isHuman = s.k === 'HUMAN';
                const green = (isHuman && approvedBy) || s.k === 'DONE';
                const label = isHuman && approvedBy ? `Approved by ${approvedBy === 'you' ? 'you' : 'Ops'}` : s.v;
                return (
                  <motion.li
                    key={`${run}-${i}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <span className={`absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-[3px] ${green ? 'bg-signal' : 'bg-white/25'}`} />
                    <span className={green ? 'text-signal' : 'text-muted'}>{s.k}</span>
                    <span className="ml-2 text-white/90">{label}</span>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ol>

          <AnimatePresence>
            {waiting && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-signal/40 bg-signal/[0.06] p-3"
              >
                <span className="font-sans text-sm text-white">Send this quote to the customer?</span>
                <button
                  type="button"
                  onClick={() => setApprovedBy('you')}
                  className="rounded-full bg-signal px-4 py-1.5 font-sans text-sm font-medium text-ink transition-transform hover:scale-[1.04]"
                >
                  Approve
                </button>
                <span className="relative h-0.5 w-16 overflow-hidden rounded bg-white/10" aria-hidden>
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-signal/60"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTO_APPROVE_MS / 1000, ease: 'linear' }}
                  />
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {!done && !waiting && <span className="caret ml-4 mt-2 inline-block h-3.5 w-2 bg-signal align-middle" />}
        </div>
      </div>
    </div>
  );
}
