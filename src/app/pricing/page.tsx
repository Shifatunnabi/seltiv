import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ServicesHero from '@/components/pricing/ServicesHero';
import SoftwareDev from '@/components/pricing/SoftwareDev';
import DigitalMarketing from '@/components/pricing/DigitalMarketing';
import ContentServices from '@/components/pricing/ContentServices';
import BrandingSection from '@/components/pricing/BrandingSection';
import CTASection2 from '@/components/sections/CTASection2';

export const metadata = {
  title: 'Pricing — Seltiv',
  description: 'Our transparent pricing and service packages — software development, digital marketing, content production, and branding.',
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
