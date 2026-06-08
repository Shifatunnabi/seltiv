'use client';

import { motion } from 'framer-motion';
import HeroGraphic from '@/components/ui/HeroGraphic';
import statsData from '@/data/stats.json';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--hero-grad)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 100,
      }}
    >
      <div className="grid-overlay" />

      {/* Extra glow bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,107,63,0.25) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="section-label" style={{ marginBottom: 20 }}>
            Growth &amp; Technology Agency
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: 20,
            }}
          >
            Think Growth.<br />
            <span
              style={{
                color: 'var(--green-neon)',
                textShadow: '0 0 40px rgba(0,230,118,0.4)',
              }}
            >
              Think Seltiv.
            </span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: 'var(--muted)',
              maxWidth: 480,
              marginBottom: 36,
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Your all-in-one growth &amp; technology partner for branding, marketing, and software
            solutions that scale.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-green" style={{ fontSize: 15, padding: '14px 30px' }}>
              Book a Call <em className="arrow">↗</em>
            </a>
            <a
              href="/contact"
              className="btn-ghost"
              style={{ fontSize: 15, padding: '14px 30px', border: '2.5px solid rgba(255,255,255,0.38)' }}
            >
              View Projects <em className="arrow">→</em>
            </a>
          </div>

          <div className="hero-stats" style={{ marginTop: 48, display: 'flex', gap: 100 }}>
            {statsData.stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: "'Syne', sans-serif",
                    color: 'var(--green-neon)',
                  }}
                >
                  {s.value}{s.suffix}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {s.label.split(' ')[0]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hero-graphic-wrap"
        >
          <HeroGraphic />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-graphic-wrap { display: block !important; }
          .hero-stats { display: none !important; }
          #home {
            flex-direction: column !important;
            justify-content: flex-start !important;
            align-items: center !important;
            min-height: 100svh !important;
            padding-top: 120px !important;
            padding-bottom: 44px !important;
          }
          #home .container {
            display: flex !important;
            flex-direction: column !important;
            flex-grow: 1 !important;
            justify-content: space-between !important;
            width: 90% !important;
            max-width: 1240px !important;
          }
        }
      `}</style>
    </section>
  );
}
