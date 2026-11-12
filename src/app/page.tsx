import Hero from '@/components/home/Hero';
import Manifesto from '@/components/home/Manifesto';
import Reel from '@/components/home/Reel';
import Capabilities from '@/components/home/Capabilities';
import Stack from '@/components/home/Stack';
import Work from '@/components/home/Work';
import Impact from '@/components/home/Impact';
import Process from '@/components/home/Process';
import Engagements from '@/components/home/Engagements';
import Fractional from '@/components/home/Fractional';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/site/Footer';
import { faqs, capabilities } from '@/lib/content';
import { faqSchema, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';

export const metadata = pageMetadata({
  title: 'Websites, AI & Software Development in Bangladesh',
  description: `Seltiv is a Dhaka-based product studio for websites, e-commerce, AI agents, custom software, AI products and SaaS. Projects start from ${capabilities[0].from} USD.`,
  path: '/',
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <main className="relative z-10 bg-ink">
        <Hero />
        <Manifesto />
        <Reel />
        <Work />
        <Impact />
        <Capabilities />
        <Stack />
        <Process />
        <Fractional />
        <Engagements variant="fractional" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
