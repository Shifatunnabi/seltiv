'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'FinTrack Dashboard', tag: 'SaaS · Fintech', desc: 'Real-time financial analytics platform for SMEs.', shade: 0 },
  { title: 'Bloom E-Commerce', tag: 'E-Commerce · Branding', desc: 'Full brand identity and Shopify store for a premium wellness brand.', shade: 1 },
  { title: 'NovaMed Platform', tag: 'HealthTech · Software', desc: 'Patient management system with AI-assisted diagnostics.', shade: 2 },
  { title: 'GrowthOS Agency', tag: 'SaaS · Marketing', desc: 'All-in-one growth automation platform for digital agencies.', shade: 3 },
  { title: 'Kode Academy', tag: 'EdTech · UI/UX', desc: 'Learning management system redesign — 3× engagement lift.', shade: 4 },
  { title: 'ArcLight Studios', tag: 'Branding · Web', desc: 'Bold visual identity and website for a creative production house.', shade: 5 },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <div className="section-label">Our Work</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
              Recent <span className="neon">Projects</span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost">
            View All Work <em className="arrow">→</em>
          </a>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="portfolio-grid"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                y: hovered === i ? -6 : 0,
                borderColor: hovered === i ? 'rgba(0,230,118,0.35)' : 'rgba(0,230,118,0.1)',
                boxShadow: hovered === i ? '0 20px 60px rgba(0,230,118,0.12)' : '0 0 0 rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'var(--glass)',
                border: '1px solid rgba(0,230,118,0.1)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  height: 180,
                  background: `repeating-linear-gradient(-45deg, rgba(14,107,63,${0.06 + i * 0.02}), rgba(14,107,63,${0.06 + i * 0.02}) 1px, rgba(8,13,20,0.9) 1px, rgba(8,13,20,0.9) 14px)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  color: 'rgba(0,230,118,0.35)',
                  fontFamily: 'monospace',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 40, height: 40,
                    border: '1px solid rgba(0,230,118,0.3)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, color: 'rgba(0,230,118,0.5)',
                  }}
                >
                  ◈
                </div>
                project screenshot
              </div>

              <div style={{ padding: '20px 20px 22px' }}>
                <div
                  style={{
                    fontSize: 11, color: 'var(--green-neon)',
                    fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600,
                    letterSpacing: '0.08em', marginBottom: 8,
                  }}
                >
                  {p.tag}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>
                  {p.desc}
                </div>
                <a
                  href="#contact"
                  style={{
                    color: 'var(--green-neon)', fontSize: 13, fontWeight: 600,
                    textDecoration: 'none', fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Explore Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
