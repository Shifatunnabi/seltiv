'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { n: '50+', label: 'Projects Delivered', icon: '◈' },
  { n: '30+', label: 'Happy Clients', icon: '◉' },
  { n: '3+', label: 'Years of Excellence', icon: '◆' },
];

export default function WhoWeAre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }} ref={ref}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
          className="who-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="section-label">Who We Are</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.1 }}>
              We Are Your Growth &amp;<br />
              <span style={{ color: 'var(--green-neon)' }}>Technology Partner</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
              Seltiv is a full-service growth and technology agency helping startups, SMEs, and enterprises unlock
              their full potential. We combine cutting-edge tech with sharp marketing strategy to build products
              people love and brands people trust.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="glass"
                  style={{ padding: '22px 18px', textAlign: 'center' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div style={{ fontSize: 20, marginBottom: 6, color: 'var(--green-neon)' }}>{s.icon}</div>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      fontFamily: "'Syne', sans-serif",
                      color: 'var(--green-neon)',
                      animation: 'counter-glow 3s ease-in-out infinite',
                    }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4, fontFamily: 'Space Grotesk, sans-serif' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
