import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/motion/SmoothScroll';
import Header from '@/components/site/Header';
import { SITE_URL } from '@/lib/content';
import { organizationSchema, pageMetadata, websiteSchema } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic', 'normal'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Websites, AI & Software Development in Bangladesh',
    description: 'Seltiv is a Dhaka-based product studio building websites, e-commerce, AI agents, custom software, AI products and SaaS for local and international teams.',
    path: '/',
  }),
  metadataBase: new URL(SITE_URL),
  title: { default: 'SELTIV | Websites, AI & Software Development in Bangladesh', template: 'SELTIV | %s' },
  applicationName: 'SELTIV',
  creator: 'SELTIV',
  publisher: 'SELTIV',
  icons: { icon: '/icon.png', shortcut: '/favicon.ico', apple: '/icon.png' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = { themeColor: '#050807' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}
