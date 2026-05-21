'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import TechBadge from '@/components/ui/TechBadge';

interface ServiceItem {
  name: string;
  desc: string;
}

export interface ServiceSectionProps {
  id: string;
  index: number;
  label: string;
  headline: ReactNode;
  description: string;
  icon: string;
  iconColor: string;
  glowColor: string;
  categoryTitle: string;
  services: ServiceItem[];
  tech: { name: string; color: string }[];
  priceTag: string;
  priceLabel?: string;
  flip?: boolean;
  bg?: string;
}

export default function ServiceSection({
  id, index, label, headline, description,
  icon, iconColor, glowColor, categoryTitle,
  services, tech, priceTag, priceLabel,
  flip, bg,
}: ServiceSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const num = String(index).padStart(2, '0');

  return (
    <section
      id={id}
      ref={ref}
      style={{
        background: bg || 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0 80px',
      }}
    >
      {/* Decorative orb */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          [flip ? 'left' : 'right']: '-80px',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 65%)`,
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />

      {/* Decorative section number */}
      <div
        style={{
          position: 'absolute',
          top: -20,
          [flip ? 'right' : 'left']: '3%',
          fontSize: 'clamp(100px, 15vw, 180px)',
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          color: iconColor,
          opacity: 0.04,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        {num}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label" style={{ marginBottom: 18 }}>{label}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'flex-end' }} className="svc-header-grid">
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {headline}
            </h2>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: 16,
                lineHeight: 1.8,
                margin: 0,
                fontWeight: 300,
                paddingBottom: 4,
              }}
            >
              {description}
            </p>
          </div>
        </motion.div>

        {/* Main panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}
          className="services-panel"
        >
          {/* Left: service cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="services-subgrid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="glass svc-card"
                style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${iconColor}18`, border: `1px solid ${iconColor}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, color: iconColor, flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>
                  {s.name}
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.65 }}>
                  {s.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: tech stack + stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              className="glass"
              style={{
                padding: '28px',
                background: `linear-gradient(135deg, ${iconColor}0d, rgba(8,13,20,0.9))`,
                border: `1px solid ${iconColor}22`,
                flex: 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div
                  style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${iconColor}22`, border: `1px solid ${iconColor}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, color: iconColor,
                    boxShadow: `0 0 24px ${glowColor}`,
                    animation: 'pulse-glow 3s ease-in-out infinite',
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, lineHeight: 1.2 }}>
                    {categoryTitle}
                  </div>
                  <div style={{ fontSize: 12, color: iconColor, marginTop: 3, fontFamily: 'Space Grotesk, sans-serif' }}>
                    {services.length} specialisations
                  </div>
                </div>
              </div>

              <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                Tech Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {tech.map((t) => (
                  <TechBadge key={t.name} name={t.name} color={t.color} />
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[{ n: '50+', l: 'Projects' }, { n: '98%', l: 'Satisfaction' }].map((s) => (
                <div
                  key={s.l}
                  className="glass"
                  style={{ padding: '16px 18px', textAlign: 'center', border: `1px solid ${iconColor}22` }}
                >
                  <div style={{ fontSize: 26, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: iconColor }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA + Pricing row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cta-price-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
            marginTop: 44,
            paddingTop: 36,
            borderTop: `1px solid ${iconColor}12`,
          }}
        >
          <a href="#contact" className="btn-green" style={{ fontSize: 15, padding: '14px 30px' }}>
            Book a Free Call <em className="arrow">↗</em>
          </a>
          <div style={{ textAlign: 'right' }}>
            <span className="cta-price-from" style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', display: 'block', marginBottom: 2 }}>
              Starts from
            </span>
            <span className="cta-price-big" style={{ fontSize: 32, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: iconColor }}>
              {priceTag}
            </span>
            {priceLabel && (
              <span style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', marginLeft: 4 }}>
                {priceLabel}
              </span>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .svc-header-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
