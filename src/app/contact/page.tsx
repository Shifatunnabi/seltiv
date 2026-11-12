import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/site/PageHero';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/contact/ContactForm';
import FadeUp from '@/components/motion/FadeUp';
import { CONTACT_EMAIL, PHONES } from '@/lib/content';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Seltiv — Discuss Your Website, AI or Software Project',
  description: 'Contact Seltiv in Dhaka about websites, e-commerce, AI agents, custom software, AI products or SaaS. Get a scoped quote and clear next steps.',
  path: '/contact',
});

const next = [
  ['Reply within a day', 'A senior team member reads your brief and replies with questions or a time to talk.'],
  ['30-minute intro call', 'We dig into goals, constraints and what success looks like. No sales script.'],
  ['Fixed proposal', 'Scope, timeline and price in writing, usually within 3 business days.'],
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <>
      <main className="relative z-10 bg-ink">
        <PageHero
          eyebrow="Contact"
          title={['Let’s build\nwhat’s ', { text: 'next.', className: 'serif-accent text-signal' }]}
        />
        <section className="pb-32">
          <div className="wrap grid gap-16 lg:grid-cols-12">
            <aside className="space-y-12 lg:col-span-4">
              <FadeUp>
                <p className="eyebrow mb-4">Direct</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="link-u text-2xl text-white">
                  {CONTACT_EMAIL}
                </a>
                <div className="mt-3 flex flex-col items-start gap-1">
                  {PHONES.map((p) => (
                    <a key={p.raw} href={`tel:${p.raw}`} className="link-u text-fog">
                      {p.label}
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-muted">Dhaka, Bangladesh · Working worldwide</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="eyebrow mb-6">What happens next</p>
                <ol className="space-y-6">
                  {next.map(([t, d], i) => (
                    <li key={t} className="group grid grid-cols-[36px_1fr] gap-4">
                      <span className="num-tile grid h-9 w-9 place-items-center rounded-lg border border-line font-mono text-xs text-signal">0{i + 1}</span>
                      <div>
                        <p className="font-medium text-white">{t}</p>
                        <p className="mt-1 text-sm text-fog">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </FadeUp>
            </aside>
            <div className="lg:col-span-7 lg:col-start-6">
              <FadeUp delay={0.2}>
                <ContactForm initialService={service} />
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
