import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/site/PageHero';
import Footer from '@/components/site/Footer';
import Process from '@/components/home/Process';
import Fractional from '@/components/home/Fractional';
import Stack from '@/components/home/Stack';
import FadeUp from '@/components/motion/FadeUp';
import Button from '@/components/ui/Button';
import { capabilities } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services — AI agents, AI products, SaaS, custom software & websites',
  description:
    'Seltiv designs and builds AI agents & automation, AI products, SaaS platforms, custom software and high-performance websites. Fixed scopes, weekly demos and senior engineers.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <main className="relative z-10 bg-ink">
        <PageHero
          eyebrow="Services"
          title={['Five ways we\n', { text: 'help you grow.', className: 'text-white/40' }]}
          intro="AI is at the core of how we think. Craft is at the core of how we build. Whether you need an agent, a product, a platform or a website, you get one senior team from first workshop to launch and beyond."
        >
          <FadeUp delay={0.7}>
            <ul className="mt-12 flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`#${c.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-fog transition-colors hover:border-signal hover:text-white"
                  >
                    <span className="font-mono text-[11px] text-signal">{c.index}</span>
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>
        </PageHero>

        <div className="wrap space-y-6 pb-24">
          {capabilities.map((c) => (
            <section
              key={c.slug}
              id={c.slug}
              className="grid scroll-mt-24 gap-10 rounded-[28px] border border-line bg-surface p-6 md:p-10 lg:grid-cols-12 lg:gap-14"
            >
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <FadeUp>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-line">
                      <Image src={c.art} alt={`${c.title} illustration`} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                    </div>
                  </FadeUp>
                </div>
              </div>
              <div className="lg:col-span-7">
                <FadeUp>
                  <p className="font-mono text-xs text-signal">{c.index}</p>
                  <h2 className="display mt-4 text-[clamp(2.4rem,4.6vw,4.4rem)] text-white">{c.title}</h2>
                  <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-fog md:text-xl">{c.pitch}</p>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow mb-4">What we build</p>
                      <ul className="space-y-2.5">
                        {c.outcomes.map((o) => (
                          <li key={o} className="group/li flex items-center gap-3 text-white">
                            <span className="bullet h-1.5 w-1.5 rounded-[2px] bg-signal" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow mb-4">What you get</p>
                      <ul className="space-y-2.5">
                        {c.deliverables.map((o) => (
                          <li key={o} className="group/li flex items-center gap-3 text-fog">
                            <span className="bullet h-1.5 w-1.5 rounded-[2px] bg-white/30" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <div className="mt-8 rounded-2xl border border-line bg-ink p-5">
                    <p className="eyebrow mb-2">Ideal for</p>
                    <p className="text-white">{c.idealFor}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
                    <div className="flex gap-10">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Starting at</p>
                        <p className="display mt-1 text-4xl text-mint">{c.from}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Typical timeline</p>
                        <p className="display mt-1 text-4xl text-white">{c.timeline}</p>
                      </div>
                    </div>
                    <Button href={`/contact?service=${c.slug}`}>Start this project</Button>
                  </div>
                </FadeUp>
              </div>
            </section>
          ))}
        </div>

        <Stack />
        <Process />
        <Fractional />
      </main>
      <Footer />
    </>
  );
}
