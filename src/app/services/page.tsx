import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import SoftwareDev from '@/components/services/SoftwareDev';
import DigitalMarketing from '@/components/services/DigitalMarketing';
import ContentServices from '@/components/services/ContentServices';
import BrandingSection from '@/components/services/BrandingSection';
import CTASection2 from '@/components/sections/CTASection2';

export const metadata = {
  title: 'Services — Seltiv',
  description: 'Full-spectrum growth and technology services — software development, digital marketing, content production, and branding, all under one roof.',
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
