'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

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
  const inView = useInView(ref, { once: true, margin: '-60px' });

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} className="process-steps">
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
            style={{
              height: 420,
              background: 'transparent',
              border: 'none',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 24
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Image
              src="/misc/process.png"
              alt="Our Process"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .process-steps { order: 2; }
          .process-img {
            order: 1;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
