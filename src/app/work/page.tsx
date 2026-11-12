import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/site/PageHero';
import Footer from '@/components/site/Footer';
import WorkGrid from '@/components/work/WorkGrid';
import Impact from '@/components/home/Impact';
import { projects } from '@/lib/content';
import { absoluteUrl, breadcrumbSchema, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'Website, Software & AI Project Case Studies',
  description: 'Explore Seltiv’s work across e-commerce, school management, travel booking, ERP, cinema ticketing, AI support and event platforms.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Work', path: '/work' }]),
        { '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': absoluteUrl('/work#collection'), name: 'Seltiv project case studies', url: absoluteUrl('/work'), isPartOf: { '@id': WEBSITE_ID }, publisher: { '@id': ORGANIZATION_ID }, mainEntity: { '@type': 'ItemList', itemListElement: projects.map((project, i) => ({ '@type': 'ListItem', position: i + 1, name: project.name, url: absoluteUrl(`/work/${project.slug}`) })) } },
      ]} />
      <main className="relative z-10 bg-ink">
        <PageHero
          eyebrow="Work"
          title={['Built around\n', { text: 'real work.', className: 'serif-accent text-signal' }]}
          intro="Stores, platforms and software shaped around the people who use them. Explore client projects, products and new ideas through the case studies below."
        />
        <section className="rounded-t-[32px] bg-paper pt-16 text-ink md:pt-24">
          <div className="wrap">
            <WorkGrid />
            <p className="max-w-3xl pb-12 text-xs leading-relaxed text-[#737a74]">
              <span aria-hidden="true">*</span> Selected projects include independent work by members of the Seltiv team, completed outside their engagements with the studio.
            </p>
          </div>
        </section>
        <Impact />
      </main>
      <Footer />
    </>
  );
}
