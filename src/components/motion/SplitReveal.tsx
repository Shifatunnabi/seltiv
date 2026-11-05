'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ElementType } from 'react';

type Segment = string | { text: string; className?: string };

interface Props {
  segments: Segment[];
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /**
   * Hero mode: character-level blur reveal driven by CSS keyframes, so it plays
   * from server HTML before hydration. Reserve for the one hero headline.
   */
  immediate?: boolean;
}

/**
 * Headline reveal. Default: word-by-word rise on scroll into view (quiet,
 * 450ms). `immediate`: character blur reveal for the hero.
 * Use "\n" inside a segment to force a line break.
 */
export default function SplitReveal({ segments, as: Tag = 'h2', className, delay = 0, stagger, immediate = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const reduce = useReducedMotion();

  let index = 0;
  const plain = segments.map((s) => (typeof s === 'string' ? s : s.text)).join('');
  const step = stagger ?? (immediate ? 0.012 : 0.045);

  return (
    <Tag ref={ref} className={className} aria-label={plain.replace(/\n/g, ' ')}>
      {segments.map((seg, si) => {
        const text = typeof seg === 'string' ? seg : seg.text;
        const cls = typeof seg === 'string' ? undefined : seg.className;
        return (
          <span key={si} className={cls} aria-hidden>
            {text.split('\n').map((line, li) => (
              <span key={li}>
                {li > 0 && <br />}
                {line.split(/(\s+)/).map((word, wi) => {
                  if (/^\s+$/.test(word)) return <span key={wi}>{word}</span>;
                  if (!word) return null;

                  if (immediate) {
                    return (
                      <span key={wi} className="inline-block whitespace-nowrap">
                        {[...word].map((ch, ci) => {
                          const i = index++;
                          return (
                            <span key={ci} className="char-in" style={{ animationDelay: `${(delay + i * step).toFixed(3)}s` }}>
                              {ch}
                            </span>
                          );
                        })}
                      </span>
                    );
                  }

                  const i = index++;
                  return (
                    <span key={wi} className="-mr-[0.08em] inline-block overflow-hidden pb-[0.08em] pr-[0.08em] align-bottom">
                      <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: '100%', opacity: 0 }}
                        animate={inView ? { y: '0%', opacity: 1 } : undefined}
                        transition={{ duration: 0.45, delay: delay + i * step, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}
