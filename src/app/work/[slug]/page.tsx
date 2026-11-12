import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import PageHero from '@/components/site/PageHero';
import Footer from '@/components/site/Footer';
import ProjectVisual from '@/components/work/ProjectVisual';
import Button from '@/components/ui/Button';
import { absoluteUrl, breadcrumbSchema, CONTENT_UPDATED, ORGANIZATION_ID, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import Breadcrumbs from '@/components/site/Breadcrumbs';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project not found', robots: { index: false } };
  return pageMetadata({
    title: `${project.name} — ${project.tags[0]} Case Study`,
    description: project.caseStudy.overview,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Work', path: '/work' }, { name: project.name, path: `/work/${project.slug}` }];

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(crumbs),
        { '@context': 'https://schema.org', '@type': 'CreativeWork', '@id': absoluteUrl(`/work/${project.slug}#case-study`), name: `${project.name} case study`, description: project.caseStudy.overview, url: absoluteUrl(`/work/${project.slug}`), image: absoluteUrl(project.image), creativeWorkStatus: project.status, dateModified: CONTENT_UPDATED, author: { '@id': ORGANIZATION_ID }, isPartOf: { '@id': absoluteUrl('/work#collection') } },
      ]} />
      <main className="relative z-10 bg-ink">
        <PageHero eyebrow={`${project.status} · Case study`} title={[project.name]} intro={project.caseStudy.overview}>
          <div className="mt-8 flex flex-wrap gap-3">
            {!project.contactOnly && <Button href={project.url} external variant="ghost">Visit website</Button>}
            <Button href="/contact">Discuss a similar project</Button>
          </div>
        </PageHero>
        <section className="rounded-t-[32px] bg-paper pb-20 pt-6 text-ink md:pb-28 md:pt-10">
          <div className="wrap">
            <div className="py-3"><Breadcrumbs items={crumbs} onPaper /></div>
            <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-[24px] md:aspect-[16/10]">
              <ProjectVisual project={project} sizes="(min-width:1440px) 1360px, 95vw" />
              <span className="absolute left-5 top-5 rounded-full bg-ink/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white md:text-xs">
                {project.mockup.eyebrow}
              </span>
            </div>
            <div className="mt-14 grid gap-12 border-t border-ink/15 pt-12 lg:grid-cols-12 lg:gap-16">
              <aside className="lg:col-span-3">
                <p className="eyebrow on-paper">Project overview</p>
                <dl className="mt-7 space-y-6 text-sm">
                  <div><dt className="text-[#68716a]">Focus</dt><dd className="mt-1 font-medium">{project.mockup.eyebrow}</dd></div>
                  <div><dt className="text-[#68716a]">Project</dt><dd className="mt-1 font-medium">{project.status}</dd></div>
                </dl>
              </aside>
              <div className="space-y-12 lg:col-span-8 lg:col-start-5">
                <div>
                  <h2 className="display text-3xl md:text-4xl">The brief</h2>
                  <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-[#5d6660]">{project.caseStudy.brief}</p>
                </div>
                <div>
                  <h2 className="display text-3xl md:text-4xl">The experience</h2>
                  <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-[#5d6660]">{project.caseStudy.experience}</p>
                </div>
                <div>
                  <h2 className="display text-3xl md:text-4xl">Inside the product</h2>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {project.caseStudy.features.map((feature) => (
                      <li key={feature} className="flex gap-3 border-t border-ink/10 pt-4 text-[15px] leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-signal-dim" aria-hidden="true" />{feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.caseStudy.mediaNote && <p className="border-l-2 border-ink/15 pl-4 text-sm leading-relaxed text-[#68716a]">{project.caseStudy.mediaNote}</p>}
              </div>
            </div>
            <div className="mt-20 flex flex-wrap items-end justify-between gap-8 border-t border-ink/15 pt-8">
              <Link href={`/work/${nextProject.slug}`} className="group">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#68716a]">Next case study</span>
                <span className="display mt-3 block text-3xl md:text-5xl">{nextProject.name} <span className="arrow-inline">→</span></span>
              </Link>
              <Button href="/contact" variant="dark">Start a conversation</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
