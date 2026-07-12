import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ServicesHero from '@/components/pricing/ServicesHero';
import SoftwareDev from '@/components/pricing/SoftwareDev';
import DigitalMarketing from '@/components/pricing/DigitalMarketing';
import ContentServices from '@/components/pricing/ContentServices';
import BrandingSection from '@/components/pricing/BrandingSection';
import CTASection2 from '@/components/sections/CTASection2';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Service Packages — Software Development, AI & Marketing',
  description:
    'Transparent pricing for custom software development, SaaS & ecommerce builds, AI automation, digital marketing, content production, and branding. Get a package that fits your budget.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing & Service Packages | Seltiv',
    description:
      'Transparent pricing for custom software development, AI automation, digital marketing, and branding services.',
    url: '/pricing',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <SoftwareDev />
        <BrandingSection />
        <DigitalMarketing />
        <ContentServices />
        <CTASection2 />
      </main>
      <Footer />
    </>
  );
}
