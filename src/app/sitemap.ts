import type { MetadataRoute } from 'next';
import { projects, capabilities } from '@/lib/content';
import { absoluteUrl, CONTENT_UPDATED } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/services', '/work', '/pricing', '/contact', ...capabilities.map((service) => `/services/${service.slug}`)];

  return [
    ...routes.map((route) => ({ url: absoluteUrl(route), lastModified: CONTENT_UPDATED })),
    ...projects.map((project) => ({ url: absoluteUrl(`/work/${project.slug}`), lastModified: CONTENT_UPDATED, images: [absoluteUrl(project.image)] })),
  ];
}
