import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';

const SITE_URL = 'https://www.seltiv.com';
const DESCRIPTION =
  'We provide custom software development, AI solutions, and Business automation with reliable, scalable, and efficient technologies tailored to your business needs.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Custom Software & AI Solutions Development Company | Seltiv',
    template: '%s | Seltiv',
  },
  description: DESCRIPTION,
  applicationName: 'Seltiv',
  keywords: [
    'custom software development company',
    'software development outsourcing',
    'AI development company',
    'AI agent development',
    'AI integration and automation',
    'SaaS product development',
    'ecommerce development company',
    'business automation solutions',
    'UI UX design services',
    'API integration services',
    'cloud deployment and maintenance',
    'website design and development',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Seltiv',
    title: 'Custom Software & AI Solutions Development Company | Seltiv',
    description: DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Seltiv — Custom Software Development & AI Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software & AI Solutions Development Company | Seltiv',
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const SERVICES = [
  'Custom Software Development',
  'Website Design & Development',
  'SaaS Product Development',
  'eCommerce Solutions',
  'AI Integration & Automation',
  'AI Agent Development',
  'Business Automation',
  'UI/UX Design',
  'API Integration',
  'Cloud Deployment & Maintenance',
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Seltiv',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/og-image.png`,
  description: DESCRIPTION,
  email: 'hello@seltiv.com',
  telephone: '+8801706642396',
  slogan: 'Think Growth. Think Seltiv.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'hello@seltiv.com',
    telephone: '+8801706642396',
    availableLanguage: ['English'],
  },
  areaServed: 'Worldwide',
  knowsAbout: SERVICES,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development & AI Services',
    itemListElement: SERVICES.map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Worldwide',
      },
    })),
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Seltiv',
  alternateName: 'Seltiv — Custom Software Development & AI Solutions',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
