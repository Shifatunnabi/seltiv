import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import Footer from '@/components/site/Footer';
import WorkGrid from '@/components/work/WorkGrid';
import Impact from '@/components/home/Impact';

export const metadata: Metadata = {
  title: 'Work — Websites, platforms & software we have shipped',
  description:
    'Selected projects by Seltiv: e-commerce platforms, media sites, booking platforms and business websites for clients in Bangladesh, the UK and beyond.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <>
      <main className="relative z-10 bg-ink">
        <PageHero
          eyebrow="Work"
          title={['Shipped, live,\n', { text: 'working.', className: 'serif-accent text-signal' }]}
          intro="A selection of the platforms, stores and websites we have designed and built. Every one is live and serving real customers."
        />
        <section className="rounded-t-[32px] bg-paper pt-16 text-ink md:pt-24">
          <div className="wrap">
            <WorkGrid />
          </div>
        </section>
        <Impact />
      </main>
      <Footer />
    </>
  );
}
