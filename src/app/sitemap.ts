import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.seltiv.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/pricing', '/portfolio', '/contact'];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
