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
import { faqs } from '@/lib/content';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="relative z-10 bg-ink">
        <Hero />
        <Manifesto />
        <Reel />
        <Work />
        <Impact />
        <Capabilities />
        <Stack />
        <Process />
        <Engagements />
        <Fractional />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
