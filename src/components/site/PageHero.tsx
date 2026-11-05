import SplitReveal from '@/components/motion/SplitReveal';
import FadeUp from '@/components/motion/FadeUp';
import type { ReactNode } from 'react';

type Segment = string | { text: string; className?: string };

export default function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: Segment[]; intro?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 md:pb-24 md:pt-52">
      <div
        className="pointer-events-none absolute -top-1/2 right-[-20%] h-[120%] w-[70%] rounded-full opacity-50"
        style={{ background: 'radial-gradient(closest-side, rgba(14,107,63,0.45), transparent)' }}
      />
      <div className="wrap relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <FadeUp>
            <p className="eyebrow">{eyebrow}</p>
          </FadeUp>
        </div>
        <div className="lg:col-span-9">
          <SplitReveal as="h1" immediate delay={0.1} className="display text-[clamp(2.75rem,7vw,7rem)] leading-[0.98] text-white" segments={title} />
          {intro && (
            <FadeUp delay={0.5}>
              <p className="mt-10 max-w-[54ch] text-lg leading-relaxed text-fog md:text-xl">{intro}</p>
            </FadeUp>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
