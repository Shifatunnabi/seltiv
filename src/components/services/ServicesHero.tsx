'use client';

import { motion } from 'framer-motion';

const pills = [
  { label: 'Software Development', href: '#software-dev' },
  { label: 'Branding', href: '#branding' },
  { label: 'Digital Marketing', href: '#digital-marketing' },
  { label: 'Content', href: '#content-services' },
];

export default function ServicesHero() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--bg)',
        overflow: 'hidden',
        paddingTop: 160,
        paddingBottom: 100,
        textAlign: 'center',
      }}
      className="svc-hero"
    >
      {/* Top-center glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,230,118,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      {/* Bottom-left glow (matches homepage hero) */}
      <div
        style={{
          position: 'absolute',
          bottom: -60,
          left: '-100px',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(14,107,63,0.22) 0%, rgba(5,26,13,0.1) 45%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div className="grid-overlay" style={{ opacity: 0.4 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}
          >
            Everything Your Business<br />
            <span
              style={{
                color: 'var(--green-neon)',
                textShadow: '0 0 60px rgba(0,230,118,0.4)',
              }}
            >
              Needs to Grow
            </span>
          </h1>

          <p
            style={{
              color: 'var(--muted)',
              fontSize: 18,
              maxWidth: 520,
              margin: '0 auto 44px',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            From idea to execution — we&apos;re your all-in-one partner for software,
            marketing, content, and brand.
          </p>

          {/* Service pills — clickable, scroll to section */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            {pills.map((p, i) => (
              <motion.a
                key={p.label}
                href={p.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{
                  padding: '8px 18px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: 13,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                  display: 'inline-block',
                }}
                whileHover={{
                  borderColor: 'rgba(0,230,118,0.45)',
                  color: '#00e676',
                  background: 'rgba(0,230,118,0.06)',
                }}
              >
                {p.label}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="btn-green"
            style={{ fontSize: 15, padding: '14px 32px' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            Book a Free Strategy Call <em className="arrow">↗</em>
          </motion.a>
        </motion.div>

        {/* Scroll cue — fades in then floats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ marginTop: 64, display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              color: 'var(--muted)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <div
              style={{
                width: 1,
                height: 48,
                background: 'linear-gradient(to bottom, transparent, rgba(0,230,118,0.5))',
              }}
            />
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .svc-hero { padding-top: 110px !important; padding-bottom: 70px !important; }
        }
      `}</style>
    </section>
  );
}
