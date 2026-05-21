'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SolutionCard {
  icon: string;
  color: string;
  title: string;
  desc: string;
  badge?: string | null;
}

const softwareCards: SolutionCard[] = [
  {
    icon: '◈', color: '#00e676',
    title: 'Build Your SaaS With Us',
    desc: 'We architect, design and ship your SaaS product end-to-end — from MVP to full-scale platform.',
    badge: 'Most Popular',
  },
  {
    icon: '⬡', color: '#f6c90e',
    title: 'Custom ERP Software',
    desc: 'Streamline your business operations with a fully tailored ERP built around your unique workflows.',
    badge: null,
  },
  {
    icon: '◉', color: '#00e676',
    title: 'Build a Custom Website',
    desc: 'High-performance, conversion-optimised websites built with modern headless frameworks.',
    badge: null,
  },
];

const agencyCards: SolutionCard[] = [
  {
    icon: '▲', color: '#00e676',
    title: 'Content & Marketing Planning',
    desc: 'Data-driven content calendars, channel strategies and campaign blueprints tailored to your growth goals.',
  },
  {
    icon: '✦', color: '#f6c90e',
    title: 'Content Creation & Production',
    desc: 'Videos, copy, visuals and social assets — produced at scale by our in-house creative team.',
  },
  {
    icon: '◆', color: '#00e676',
    title: 'Brand Strategy',
    desc: 'Identity systems, positioning, and messaging that differentiate you in a crowded market.',
  },
];

interface SubSectionProps {
  label: string;
  title: ReactNode;
  desc: string;
  cards: SolutionCard[];
  flip?: boolean;
  gradTint?: string;
  priceTag: string;
  priceLabel?: string;
}

function SubSection({ label, title, desc, cards, flip, gradTint, priceTag, priceLabel }: SubSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div style={{ background: gradTint || 'transparent', borderRadius: 24, padding: '70px 0', marginBottom: 2, overflow: 'hidden' }} ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }} className="solutions-grid">
          {/* Text side */}
          <motion.div
            style={{ order: flip ? 2 : 1 }}
            initial={{ opacity: 0, x: flip ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="section-label">{label}</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, marginBottom: 16 }}>{title}</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{desc}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="glass sol-card"
                  style={{
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {c.badge && (
                    <span
                      style={{
                        position: 'absolute', top: 10, right: 12,
                        fontSize: 10, fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif',
                        color: '#000', background: 'var(--green-neon)',
                        padding: '3px 8px', borderRadius: 20, letterSpacing: '0.06em',
                      }}
                    >
                      {c.badge}
                    </span>
                  )}
                  <span style={{ fontSize: 22, color: c.color, flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-price-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <a href="#contact" className="btn-green" style={{ fontSize: 14, padding: '12px 22px' }}>
                Book a Free Call <em className="arrow">↗</em>
              </a>
              <div style={{ textAlign: 'right' }}>
                <span className="cta-price-from" style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', display: 'block', marginBottom: 2 }}>
                  Starts from
                </span>
                <span className="cta-price-big" style={{ fontSize: 30, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: 'var(--green-neon)' }}>
                  {priceTag}
                </span>
                {priceLabel && (
                  <span style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', marginLeft: 4 }}>
                    {priceLabel}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            style={{ order: flip ? 1 : 2 }}
            initial={{ opacity: 0, x: flip ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="img-placeholder" style={{ height: 400, fontSize: 11, borderRadius: 20 }}>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <rect x="4" y="8" width="44" height="30" rx="5" stroke="rgba(0,230,118,0.35)" strokeWidth="1.5" fill="none" />
                <line x1="4" y1="16" x2="48" y2="16" stroke="rgba(0,230,118,0.25)" strokeWidth="1" />
                <rect x="10" y="22" width="13" height="10" rx="2" fill="rgba(0,230,118,0.12)" stroke="rgba(0,230,118,0.3)" strokeWidth="1" />
                <rect x="28" y="22" width="13" height="10" rx="2" fill="rgba(14,107,63,0.18)" stroke="rgba(0,230,118,0.3)" strokeWidth="1" />
                <line x1="24" y1="38" x2="28" y2="38" stroke="rgba(0,230,118,0.3)" strokeWidth="1" />
                <rect x="17" y="38" width="18" height="5" rx="2" fill="rgba(0,230,118,0.08)" stroke="rgba(0,230,118,0.2)" strokeWidth="1" />
              </svg>
              <span style={{ marginTop: 10 }}>{flip ? 'Agency Dashboard' : 'Software UI Mockup'}</span>
              <span style={{ color: 'rgba(0,230,118,0.3)', fontSize: 10 }}>drop screenshot here</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="section" style={{ background: 'var(--bg2)', padding: '100px 0 60px' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>What We Build</div>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
          Our <span className="neon">Solutions</span>
        </h2>
      </div>

      <SubSection
        label="Software Solutions"
        title="Build Your Dream Software Project"
        desc="From MVPs to enterprise-grade platforms — we architect, design, and ship software that solves real problems and scales with your ambitions."
        cards={softwareCards}
        flip={false}
        priceTag="$399"
      />

      <SubSection
        label="Agency Fulfillment"
        title={<>Agency Fulfillment<br />at Scale</>}
        desc="Partner with us as your dedicated creative and marketing team. We execute the work while you focus on growing your business."
        cards={agencyCards}
        flip={true}
        gradTint="linear-gradient(135deg, rgba(14,107,63,0.05) 0%, transparent 60%)"
        priceTag="$299"
        priceLabel="/mo"
      />
    </section>
  );
}
