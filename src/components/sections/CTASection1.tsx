'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const features = [
  { icon: '◈', text: 'End-to-end project delivery' },
  { icon: '▲', text: 'Dedicated growth strategist' },
  { icon: '✦', text: 'Transparent reporting & analytics' },
  { icon: '◆', text: 'Ongoing support & optimization' },
];

export default function CTASection1() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" style={{ background: 'var(--bg2)', overflow: 'hidden' }} ref={ref}>
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}
          className="cta1-grid"
        >
          {/* Left: photo */}
          <motion.div
            style={{ position: 'relative' }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="cta1-photo"
              style={{
                height: 420,
                borderRadius: 20,
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <Image
                src="/misc/lifestyle.png"
                alt="Seltiv Lifestyle"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(14,107,63,0.3), rgba(0,0,0,0.5))',
                  borderRadius: 20,
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="section-label">Why Seltiv</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: 16 }}>
              Built for Growth.<br />
              <span className="neon">Obsessed with Result.</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              We don&apos;t just deliver work — we embed ourselves in your success. Our team operates like a
              strategic partner, not a vendor.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {features.map((f) => (
                <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ color: 'var(--green-neon)', fontSize: 16, flexShrink: 0 }}>{f.icon}</span>
                  <span style={{ fontSize: 15, fontFamily: 'Space Grotesk, sans-serif' }}>{f.text}</span>
                </div>
              ))}
            </div>
            <a href="/contact" className="btn-green" style={{ fontSize: 15, padding: '14px 28px' }}>
              Start a Project <em className="arrow">↗</em>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta1-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cta1-photo { height: auto !important; aspect-ratio: 1 / 1; }
        }
      `}</style>
    </section>
  );
}
