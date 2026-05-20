import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import MarqueeSection from '@/components/sections/MarqueeSection';
import WhoWeAre from '@/components/sections/WhoWeAre';
import Solutions from '@/components/sections/Solutions';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import CTASection1 from '@/components/sections/CTASection1';
import Reviews from '@/components/sections/Reviews';
import CTASection2 from '@/components/sections/CTASection2';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <WhoWeAre />
        <Solutions />
        <Services />
        <Process />
        <Portfolio />
        <CTASection1 />
        <Reviews />
        <CTASection2 />
      </main>
      <Footer />
    </>
  );
}
