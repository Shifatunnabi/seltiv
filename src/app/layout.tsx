import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/motion/SmoothScroll';
import Header from '@/components/site/Header';
import { CONTACT_EMAIL, PHONES, SITE_URL, capabilities } from '@/lib/content';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic', 'normal'],
  variable: '--font-instrument',
  display: 'swap',
});

const TITLE = 'Seltiv — AI-first product studio | AI agents, SaaS, software & websites';
const DESCRIPTION =
  'Seltiv is an AI-first product studio. We design and build AI agents, AI products, SaaS platforms, custom software and high-performance websites for ambitious companies.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s | Seltiv' },
  description: DESCRIPTION,
  applicationName: 'Seltiv',
  keywords: [
    'AI agent development',
    'AI automation agency',
    'AI product development',
    'SaaS development company',
    'custom software development',
    'ERP development',
    'website design and development',
    'ecommerce development',
    'Next.js agency',
    'software development Bangladesh',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/icon.png', shortcut: '/favicon.ico', apple: '/icon.png' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Seltiv',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Seltiv — AI-first product studio' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#050807',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Seltiv',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: DESCRIPTION,
  email: CONTACT_EMAIL,
  telephone: PHONES[0].raw,
  contactPoint: PHONES.map((p) => ({
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: p.raw,
    email: CONTACT_EMAIL,
    availableLanguage: ['English', 'Bengali'],
  })),
  slogan: 'Think Growth. Think Seltiv.',
  areaServed: 'Worldwide',
  knowsAbout: capabilities.map((c) => c.title),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI, Software & Web Services',
    itemListElement: capabilities.map((c) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: c.title, description: c.pitch, provider: { '@id': `${SITE_URL}/#organization` } },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}
