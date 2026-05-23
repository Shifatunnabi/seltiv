'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SubService {
  icon: string;
  color: string;
  title: string;
  desc: string;
  badge?: string | null;
}

interface SolutionMainCardProps {
  label: string;
  title: ReactNode;
  desc: string;
  subServices: SubService[];
  priceTag: string;
  priceLabel?: string;
  imageAlt: string;
  imagePlaceholderText: string;
}

const softwareSubServices: SubService[] = [
  {
    icon: '🛒', color: '#00e676',
    title: 'Custom Ecommerce Solution',
    desc: 'High-converting online stores tailored to your brand and customer journey.',
    badge: 'Most Popular',
  },
  {
    icon: '◈', color: '#00e676',
    title: 'Build Your SaaS With Us',
    desc: 'End-to-end SaaS development from MVP to scalable production platforms.',
  },
  {
    icon: '⬡', color: '#f6c90e',
    title: 'Custom ERP Software',
    desc: 'Tailored enterprise resource planning systems to streamline your workflows.',
  },
  {
    icon: '◉', color: '#00e676',
    title: 'Build a Custom Website',
    desc: 'Fast, secure, and modern websites built with the latest headless technologies.',
  },
];

const agencySubServices: SubService[] = [
  {
    icon: '◆', color: '#00e676',
    title: 'Brand Strategy & Identity',
    desc: 'Comprehensive brand positioning and visual identity systems that stand out.',
  },
  {
    icon: '▲', color: '#f6c90e',
    title: 'Content & Marketing Planning',
    desc: 'Strategic roadmaps for multi-channel growth and audience engagement.',
  },
  {
    icon: '✦', color: '#00e676',
    title: 'Content Creation & Production',
    desc: 'Professional video, graphics, and copy that drive results at scale.',
  },
  {
    icon: '⚙', color: '#f6c90e',
    title: 'Customized Agency Solution',
    desc: 'Bespoke marketing and creative services based on your unique needs.',
  },
];

function SolutionMainCard({ label, title, desc, subServices, priceTag, priceLabel, imageAlt, imagePlaceholderText }: SolutionMainCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--glass-border)',
        borderRadius: 24,
        padding: '30px',
        marginBottom: 40,
        overflow: 'hidden',
      }}
    >
      {/* 1. Photo at top (3:1 Aspect Ratio) */}
      <div
        className="img-placeholder"
        style={{
          width: '100%',
          aspectRatio: '3 / 1',
          height: 'auto',
          borderRadius: 16,
          marginBottom: 32,
          fontSize: 14,
        }}
      >
        <div style={{ opacity: 0.5, textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🖼️</div>
          {imagePlaceholderText}
        </div>
      </div>

      {/* 2. Service Name (Section Label + Title) */}
      <div className="section-label" style={{ marginBottom: 16 }}>{label}</div>
      <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: 16, fontFamily: "'Syne', sans-serif" }}>
        {title}
      </h3>

      {/* 3. Description Paragraph */}
      <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 800 }}>
        {desc}
      </p>

      {/* 4. Sub Services Grid (2x2 Desktop, 1x1 Mobile) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
          marginBottom: 40,
        }}
        className="sub-services-grid"
      >
        {subServices.map((s, i) => (
          <div
            key={i}
            className="glass sol-card"
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              position: 'relative',
              borderRadius: 16,
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(0, 230, 118, 0.1)',
            }}
          >
            {s.badge && (
              <span
                style={{
                  position: 'absolute', top: 12, right: 12,
                  fontSize: 10, fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif',
                  color: '#000', background: 'var(--green-neon)',
                  padding: '3px 8px', borderRadius: 20, letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                {s.badge}
              </span>
            )}
            <span style={{ fontSize: 24, color: s.color, flexShrink: 0, marginTop: 2 }}>{s.icon}</span>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Footer Row (Button at left, Price at right) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
          paddingTop: 30,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
        className="cta-price-row"
      >
        <a href="/contact" className="btn-green" style={{ fontSize: 15, padding: '14px 30px' }}>
          Book a Free Call <em className="arrow">↗</em>
        </a>
        <div style={{ textAlign: 'right' }}>
          <span className="cta-price-from" style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', display: 'block', marginBottom: 2 }}>
            Starts from
          </span>
          <span className="cta-price-big" style={{ fontSize: 32, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: 'var(--green-neon)' }}>
            {priceTag}
          </span>
          {priceLabel && (
            <span style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', marginLeft: 4 }}>
              {priceLabel}
            </span>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .sub-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="section" style={{ background: 'var(--bg2)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>What We Build</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Our <span className="neon">Solutions</span>
          </h2>
        </div>

        <SolutionMainCard
          label="Software Solutions"
          title="Build Your Dream Software Project"
          desc="From MVPs to enterprise-grade platforms — we architect, design, and ship software that solves real problems and scales with your ambitions."
          subServices={softwareSubServices}
          priceTag="$399"
          imageAlt="Software Development Showcase"
          imagePlaceholderText="Software Development & SaaS Platforms"
        />

        <SolutionMainCard
          label="Agency Fulfillment"
          title={<>Agency Fulfillment<br />at Scale</>}
          desc="Partner with us as your dedicated creative and marketing team. We execute the work while you focus on growing your business."
          subServices={agencySubServices}
          priceTag="$299"
          priceLabel="/mo"
          imageAlt="Agency Fulfillment Showcase"
          imagePlaceholderText="Content, Branding & Marketing Fulfillment"
        />
      </div>
    </section>
  );
}
