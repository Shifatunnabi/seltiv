'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Discovery & Strategy',
    desc: 'We deep-dive into your business, audience, and goals to craft a precise roadmap.',
  },
  {
    n: '02',
    title: 'Design & Build',
    desc: 'Our team designs, develops, and iterates rapidly — shipping high-quality work fast.',
  },
  {
    n: '03',
    title: 'Launch & Scale',
    desc: 'We go live, monitor performance, and optimise continuously for compounding growth.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" style={{ background: 'var(--bg2)' }} ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Our <span className="neon">Process</span>
          </h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}
          className="process-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                className="glass"
                style={{ padding: '28px 28px', display: 'flex', gap: 24, alignItems: 'flex-start' }}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: 'transparent',
                    WebkitTextStroke: '1.5px var(--green-neon)',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 52,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="img-placeholder process-img"
            style={{ height: 360, fontSize: 11 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="24" stroke="rgba(0,230,118,0.3)" strokeWidth="1.5" />
              <circle cx="30" cy="30" r="14" stroke="rgba(0,230,118,0.2)" strokeWidth="1" />
              <circle cx="30" cy="30" r="6" fill="rgba(0,230,118,0.3)" />
              <line x1="30" y1="6" x2="30" y2="14" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" />
              <line x1="54" y1="30" x2="46" y2="30" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" />
              <line x1="30" y1="54" x2="30" y2="46" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" />
              <line x1="6" y1="30" x2="14" y2="30" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" />
            </svg>
            <span style={{ marginTop: 12 }}>Process Illustration</span>
            <span style={{ color: 'rgba(0,230,118,0.3)', fontSize: 10 }}>drop isometric art here</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
