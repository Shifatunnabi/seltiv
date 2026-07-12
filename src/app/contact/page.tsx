import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Software & AI Consultation',
  description:
    'Tell us about your project. Book a free consultation call for custom software development, AI agent development, business automation, or any digital service you need.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Seltiv — Free Consultation',
    description:
      'Book a free consultation for custom software development, AI automation, or any digital service you need.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80, background: 'var(--bg)' }}>
        {/* Title Section */}
        <section className="section-sm" style={{ textAlign: 'center' }}>
          <div className="container">
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Tell us about your <span className="neon">dream project</span>
            </h1>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: 18,
                maxWidth: 600,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              We’re excited to hear from you. Fill out the form below or pick a slot for a direct call.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
