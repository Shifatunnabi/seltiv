import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import PortfolioPageContent from '@/components/portfolio/PortfolioPageContent';
import { projects } from '@/data/portfolio';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Custom Software, SaaS & AI Projects We Have Built',
  description:
    'Explore real projects delivered by Seltiv: custom software, SaaS platforms, ecommerce stores, AI automation, branding, and marketing work for startups and businesses worldwide.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — Our Work | Seltiv',
    description:
      'Real projects delivered by Seltiv: custom software, SaaS platforms, ecommerce, AI automation, and branding.',
    url: '/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <PortfolioPageContent projects={projects} />
      <Footer />
    </>
  );
}
