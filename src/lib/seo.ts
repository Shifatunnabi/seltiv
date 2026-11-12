import type { Metadata } from 'next';
import { SITE_URL, CONTACT_EMAIL, PHONES, SOCIAL_LINKS, capabilities, type Capability } from './content';

// Update after substantive content changes, rather than on every build/request.
export const CONTENT_UPDATED = '2026-11-12';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export function pageMetadata({ title, description, path, imageKey }: {
  title: string; description: string; path: string; imageKey?: string;
}): Metadata {
  const key = imageKey ?? (path === '/' ? 'home' : path.slice(1).replaceAll('/', '-'));
  const image = { url: absoluteUrl(`/og/${key}`), width: 1200, height: 630, alt: `SELTIV | ${title}` };
  return {
    title: { absolute: `SELTIV | ${title}` },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { type: 'website', siteName: 'SELTIV', locale: 'en_US', title: `SELTIV | ${title}`, description, url: absoluteUrl(path), images: [image] },
    twitter: { card: 'summary_large_image', title: `SELTIV | ${title}`, description, images: [image] },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': ORGANIZATION_ID,
  name: 'SELTIV', alternateName: 'Seltiv', url: SITE_URL,
  description: 'A product studio based in Dhaka, Bangladesh, building websites, e-commerce, AI agents, custom software, AI products and SaaS platforms for local and international teams.',
  logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.png') },
  email: CONTACT_EMAIL, telephone: PHONES[0].raw,
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  sameAs: SOCIAL_LINKS.map((profile) => profile.url),
  areaServed: 'Worldwide',
  contactPoint: PHONES.map((phone) => ({ '@type': 'ContactPoint', contactType: 'sales', telephone: phone.raw, email: CONTACT_EMAIL, availableLanguage: ['English', 'Bengali'] })),
  knowsAbout: capabilities.map((service) => service.title),
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Website, AI and software development services',
    itemListElement: capabilities.map((service) => ({ '@type': 'Offer', itemOffered: { '@id': absoluteUrl(`/services/${service.slug}#service`) }, url: absoluteUrl(`/services/${service.slug}`) })),
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org', '@type': 'WebSite', '@id': WEBSITE_ID,
  name: 'SELTIV', alternateName: 'Seltiv', url: `${SITE_URL}/`, inLanguage: 'en', publisher: { '@id': ORGANIZATION_ID },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function serviceSchema(service: Capability) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', '@id': absoluteUrl(`/services/${service.slug}#service`),
    name: service.title, serviceType: service.title, description: service.pitch,
    url: absoluteUrl(`/services/${service.slug}`), provider: { '@id': ORGANIZATION_ID },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer', url: absoluteUrl(`/services/${service.slug}`),
      description: `Projects start from ${service.from} USD. Final scope and quote are agreed before work begins.`,
      priceSpecification: { '@type': 'PriceSpecification', minPrice: Number(service.from.replace(/[^\d.]/g, '')), priceCurrency: 'USD' },
    },
  };
}

export function faqSchema(questions: { question: string; answer: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions.map((q) => ({ '@type': 'Question', name: q.question, acceptedAnswer: { '@type': 'Answer', text: q.answer } })) };
}
