import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { capabilities, projects } from '@/lib/content';
import { serviceDetails } from '@/lib/service-details';
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import PageHero from '@/components/site/PageHero';
import Footer from '@/components/site/Footer';
import Button from '@/components/ui/Button';
import ProjectVisual from '@/components/work/ProjectVisual';

export function generateStaticParams() {
  return capabilities.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const details = serviceDetails[slug];
  const service = capabilities.find((item) => item.slug === slug);
  if (!details || !service) return { title: 'Service not found', robots: { index: false } };
  return pageMetadata({ title: details.searchTitle, description: details.description.replace('{price}', service.from), path: `/services/${slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = capabilities.find((item) => item.slug === slug);
  if (!service) notFound();
  const details = serviceDetails[slug];
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.title, path: `/services/${slug}` }];
  const related = details.projects.map((projectSlug) => projects.find((p) => p.slug === projectSlug)).filter((p) => p !== undefined);

  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema(crumbs), faqSchema(details.questions)]} />
      <main id="service" className="relative z-10 bg-ink">
        <PageHero eyebrow="Dhaka, Bangladesh · Working worldwide" title={[service.title]} intro={service.pitch}>
          <div className="mt-8"><Breadcrumbs items={crumbs} /></div>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href={`/contact?service=${service.slug}`}>Discuss this service</Button>
            <p className="text-sm text-fog">From <strong className="font-medium text-mint">{service.from} USD</strong> · {service.timeline}</p>
          </div>
        </PageHero>
        <section className="rounded-t-[32px] bg-paper py-16 text-ink md:py-24">
          <div className="wrap">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="eyebrow on-paper">Built around your business</p>
                <h2 className="display mt-6 text-4xl">The right fit.</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#5d6660]">{service.idealFor}</p>
                <p className="mt-5 text-sm leading-relaxed text-[#5d6660]">Based in Dhaka, Seltiv works with businesses in Bangladesh and international teams. We agree the scope, platform, timeline and final quote before development starts.</p>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
                {[['What we build', service.outcomes], ['What you receive', service.deliverables]].map(([title, items]) => (
                  <div key={title as string}>
                    <h2 className="display text-3xl">{title as string}</h2>
                    <ul className="mt-6 space-y-4">
                      {(items as string[]).map((item) => <li key={item} className="flex gap-3 border-t border-ink/10 pt-4 text-[15px] leading-relaxed"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-signal-dim" />{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14 rounded-2xl bg-ink p-7 text-white md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div><p className="text-sm text-muted">Starting project investment</p><p className="display mt-3 text-5xl text-signal">{service.from} <span className="text-xl text-fog">USD</span></p></div>
                <p className="max-w-[46ch] text-sm leading-relaxed text-fog">This is a starting price. Integrations, platforms and the agreed feature scope determine the final quote. Typical project timing: {service.timeline}.</p>
                <Button href={`/contact?service=${slug}`} variant="ghost">Get a scoped quote</Button>
              </div>
            </div>
            <div className="mt-20">
              <p className="eyebrow on-paper">Relevant project studies</p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {related.map((project) => (
                  <Link href={`/work/${project.slug}`} key={project.slug} className="group block rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-ink">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><ProjectVisual project={project} sizes="(min-width:768px) 45vw, 90vw" /></div>
                    <div className="mt-4 flex flex-wrap items-start justify-between gap-2"><h3 className="text-2xl font-medium tracking-tight">{project.name}</h3><span className="pt-1 text-xs text-[#68716a]">{project.status} →</span></div>
                    <p className="mt-1 text-[#5d6660]">{project.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28">
          <div className="wrap grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="eyebrow">Before we build</p><h2 className="display mt-6 text-4xl text-white">Common questions.</h2></div>
            <dl className="space-y-8 lg:col-span-7 lg:col-start-6">
              {details.questions.map((item) => <div key={item.question} className="border-t border-line pt-6"><dt className="text-xl font-medium text-white">{item.question}</dt><dd className="mt-4 text-lg leading-relaxed text-fog">{item.answer}</dd></div>)}
            </dl>
          </div>
          <div className="wrap mt-16 flex flex-wrap gap-3" aria-label="Other services">
            {capabilities.filter((item) => item.slug !== slug).map((item) => <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-full border border-line px-4 py-2 text-sm text-fog transition-colors hover:border-signal hover:text-white">{item.title} →</Link>)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
