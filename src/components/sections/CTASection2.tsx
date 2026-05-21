'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTASection2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg2)' }} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            position: 'relative', overflow: 'hidden',
            background: 'radial-gradient(ellipse 90% 120% at 15% 110%, #0e6b3f 0%, #051a0d 45%, #080d14 75%)',
            border: '1px solid rgba(0,230,118,0.15)',
            borderRadius: 24, padding: '80px 60px',
            textAlign: 'center',
          }}
        >
          <div className="grid-overlay" style={{ opacity: 0.5 }} />

          {/* Glow orb */}
          <div
            style={{
              position: 'absolute', bottom: -80, left: -80, width: 400, height: 400,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,230,118,0.15) 0%, transparent 65%)',
              pointerEvents: 'none', filter: 'blur(30px)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 20 }}>
              Your Next Big Move Starts Here
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 800,
                maxWidth: 720, margin: '0 auto 20px', lineHeight: 1.1,
              }}
            >
              Have an Idea?<br />
              <span style={{ color: 'var(--green-neon)', textShadow: '0 0 40px rgba(0,230,118,0.4)' }}>
                Let&apos;s Build the<br />Future Together.
              </span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
              From concept to launch — we turn ambitious ideas into exceptional digital experiences.
            </p>
            <a
              href="mailto:hello@seltiv.com"
              className="btn-green"
              style={{ fontSize: 16, padding: '16px 36px' }}
            >
              Book a Strategy Call <em className="arrow">↗</em>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
