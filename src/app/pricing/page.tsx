import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/site/PageHero';
import Footer from '@/components/site/Footer';
import Engagements from '@/components/home/Engagements';
import FAQ from '@/components/home/FAQ';
import FadeUp from '@/components/motion/FadeUp';
import { capabilities } from '@/lib/content';

export const metadata: Metadata = pageMetadata({
  title: 'Website, AI & Software Development Pricing',
  description: `Websites from ${capabilities[0].from}, AI agents from ${capabilities[1].from} and custom software from ${capabilities[2].from}. Compare all five Seltiv services and request a scoped quote.`,
  path: '/pricing',
});

const always = [
  ['Senior team', 'Strategists, designers and engineers who have shipped before. No hand-offs to juniors.'],
  ['Fixed quote', 'A written scope and price before work starts. Paid discovery is credited to the build.'],
  ['Weekly demos', 'A live staging link from the first sprint and a demo every week.'],
  ['You own it', 'Full source code, design files and documentation, handed over at launch.'],
];

export default function PricingPage() {
  return (
    <>
      <main className="relative z-10 bg-ink">
        <PageHero
          eyebrow="Pricing"
          title={['Clear scope.\n', { text: 'Honest pricing.', className: 'text-white/40' }]}
          intro="Three ways to work with us. Every project starts with a fixed quote, so you know exactly what you get and what it costs before we write a line of code."
        />
        <div className="-mt-20">
          <Engagements showHeading={false} />
        </div>

        <section className="pb-28">
          <div className="wrap">
            <FadeUp>
              <p className="eyebrow mb-8">Starting prices by service</p>
            </FadeUp>
            <ul className="border-t border-line">
              {capabilities.map((c, i) => (
                <FadeUp key={c.slug} as="li" delay={i * 0.04}>
                  <Link
                    href={`/services/${c.slug}`}
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-6 md:grid-cols-[80px_1fr_200px_160px]"
                  >
                    <span className="hidden font-mono text-xs text-muted md:block">{c.index}</span>
                    <span className="text-2xl tracking-tight text-white transition-colors group-hover:text-signal md:text-3xl">{c.title}</span>
                    <span className="hidden font-mono text-xs uppercase tracking-[0.14em] text-muted md:block">{c.timeline}</span>
                    <span className="display text-right text-2xl text-white md:text-3xl">{c.from}</span>
                  </Link>
                </FadeUp>
              ))}
            </ul>

            <div className="mt-20 grid gap-px overflow-hidden rounded-[26px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {always.map(([t, d], i) => (
                <FadeUp key={t} delay={i * 0.06} className="bg-surface p-7">
                  <p className="font-mono text-xs text-signal">0{i + 1}</p>
                  <p className="mt-8 text-xl font-medium text-white">{t}</p>
                  <p className="mt-2 text-fog">{d}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
