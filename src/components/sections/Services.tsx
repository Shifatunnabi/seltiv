'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechBadge from '@/components/ui/TechBadge';

interface ServiceItem {
  name: string;
  desc: string;
}

interface Category {
  icon: string;
  iconColor: string;
  glowColor: string;
  title: string;
  shortTitle: string;
  services: ServiceItem[];
  tech: { name: string; color: string }[];
}

const categories: Category[] = [
  {
    icon: '◈', iconColor: '#00e676', glowColor: 'rgba(0,230,118,0.12)',
    title: 'Software & Website Development', shortTitle: 'Software Dev',
    services: [
      { name: 'Custom Websites', desc: 'Responsive, high-performance websites using modern frameworks and headless architectures.' },
      { name: 'UI/UX Design', desc: 'Intuitive, user-centric interfaces focused on seamless navigation and conversion.' },
      { name: 'Mobile & Web Apps', desc: 'Scalable cross-platform applications tailored to your specific business logic.' },
      { name: 'E-commerce Systems', desc: 'Secure, optimized online stores with integrated payment gateways and inventory management.' },
    ],
    tech: [
      { name: 'React', color: '#61dafb' }, { name: 'Next.js', color: '#ffffff' },
      { name: 'Node.js', color: '#68a063' }, { name: 'TypeScript', color: '#3178c6' },
      { name: 'Flutter', color: '#54c5f8' }, { name: 'Tailwind', color: '#38bdf8' },
      { name: 'PostgreSQL', color: '#336791' }, { name: 'AWS', color: '#ff9900' },
      { name: 'Supabase', color: '#3ecf8e' }, { name: 'Figma', color: '#f24e1e' },
    ],
  },
  {
    icon: '◆', iconColor: '#f6c90e', glowColor: 'rgba(246,201,14,0.10)',
    title: 'Branding & Photo Editing', shortTitle: 'Branding',
    services: [
      { name: 'Visual Identity Design', desc: 'Unique logos, colour palettes and typography that define your brand personality.' },
      { name: 'High-End Photo Retouching', desc: 'Professional image editing, colour correction and background removal.' },
      { name: 'Brand Guidelines', desc: 'Comprehensive style guides ensuring visual consistency across all media.' },
      { name: 'Creative Manipulation', desc: 'Combining photography and graphic elements to produce striking marketing visuals.' },
    ],
    tech: [
      { name: 'Figma', color: '#f24e1e' }, { name: 'Photoshop', color: '#31a8ff' },
      { name: 'Illustrator', color: '#ff9a00' }, { name: 'Lightroom', color: '#31a8ff' },
      { name: 'InDesign', color: '#ff3366' }, { name: 'Blender', color: '#ea7600' },
      { name: 'Spline', color: '#1cf5d3' },
    ],
  },
  {
    icon: '▲', iconColor: '#f6c90e', glowColor: 'rgba(246,201,14,0.10)',
    title: 'Digital Marketing', shortTitle: 'Digital Marketing',
    services: [
      { name: 'Search Engine Optimisation', desc: 'Boost organic visibility through technical audits, keyword strategy and on-page optimisation.' },
      { name: 'Performance Marketing', desc: 'Targeted PPC and social media ad campaigns to maximise ROI and lead generation.' },
      { name: 'Social Media Growth', desc: 'Strategy-driven community management and engagement across all major platforms.' },
      { name: 'Data Analytics', desc: 'Track user behaviour and campaign performance to surface actionable growth insights.' },
    ],
    tech: [
      { name: 'Google Ads', color: '#4285f4' }, { name: 'Meta Ads', color: '#0866ff' },
      { name: 'SEMrush', color: '#ff6600' }, { name: 'GA4', color: '#e37400' },
      { name: 'HubSpot', color: '#ff7a59' }, { name: 'Klaviyo', color: '#00b87c' },
      { name: 'Ahrefs', color: '#f0643a' }, { name: 'Hotjar', color: '#fd3a5c' },
      { name: 'Zapier', color: '#ff4a00' },
    ],
  },
  {
    icon: '✦', iconColor: '#00e676', glowColor: 'rgba(0,230,118,0.10)',
    title: 'Content Creation & Production', shortTitle: 'Content',
    services: [
      { name: 'Video Production', desc: 'High-impact promotional videos, motion graphics and short-form content for social media.' },
      { name: 'Professional Copywriting', desc: 'Persuasive blog posts, website copy and newsletters that tell your brand story.' },
      { name: 'Multimedia Assets', desc: 'Digital brochures, infographics and presentations that simplify complex information.' },
      { name: 'Scripting & Storyboarding', desc: 'Creative concepts and scripts for video marketing and brand campaigns.' },
    ],
    tech: [
      { name: 'Premiere Pro', color: '#9999ff' }, { name: 'After Effects', color: '#9999ff' },
      { name: 'DaVinci', color: '#ffcc00' }, { name: 'CapCut', color: '#00c4cc' },
      { name: 'Canva', color: '#00c4cc' }, { name: 'Midjourney', color: '#ffffff' },
      { name: 'ChatGPT', color: '#74aa9c' }, { name: 'Descript', color: '#7c5cfc' },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const cat = categories[activeTab];

  return (
    <section id="services" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 700, borderRadius: '50%',
          background: `radial-gradient(circle, ${cat.glowColor} 0%, transparent 65%)`,
          pointerEvents: 'none', transition: 'background 0.5s ease',
          filter: 'blur(40px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Our <span className="neon">Services</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: 14, maxWidth: 500, margin: '14px auto 0', fontSize: 15 }}>
            Full-spectrum growth and technology services — under one roof.
          </p>
        </div>

        {/* Tab bar */}
        <div className="services-tab-bar" style={{ display: 'flex', gap: 8, marginBottom: 44, paddingBottom: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map((c, i) => (
            <button
              key={i}
              className="services-tab-btn"
              onClick={() => setActiveTab(i)}
              style={{
                padding: '10px 22px', borderRadius: 40, cursor: 'pointer',
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13,
                transition: 'all 0.25s ease',
                background: activeTab === i
                  ? (c.iconColor === '#00e676' ? 'rgba(0,230,118,0.15)' : 'rgba(246,201,14,0.12)')
                  : 'rgba(255,255,255,0.04)',
                color: activeTab === i ? c.iconColor : '#a0aec0',
                border: `1px solid ${activeTab === i ? c.iconColor + '55' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: activeTab === i ? `0 0 20px ${c.glowColor}` : 'none',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              <span style={{ fontSize: 14 }}>{c.icon}</span>
              {c.shortTitle}
            </button>
          ))}
        </div>

        {/* Main service panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}
            className="services-panel"
          >
            {/* Left: services grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="services-subgrid">
              {cat.services.map((s, i) => (
                <motion.div
                  key={i}
                  className="glass svc-card"
                  style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `${cat.iconColor}18`, border: `1px solid ${cat.iconColor}33`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, color: cat.iconColor, flexShrink: 0,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>{s.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.65 }}>{s.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Right: tech stack + stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div
                className="glass"
                style={{
                  padding: '28px 28px',
                  background: `linear-gradient(135deg, ${cat.iconColor}0d, rgba(8,13,20,0.9))`,
                  border: `1px solid ${cat.iconColor}22`,
                  flex: 1,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: `${cat.iconColor}22`, border: `1px solid ${cat.iconColor}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 24, color: cat.iconColor,
                      boxShadow: `0 0 24px ${cat.glowColor}`,
                      animation: 'pulse-glow 3s ease-in-out infinite',
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, lineHeight: 1.2 }}>{cat.title}</div>
                    <div style={{ fontSize: 12, color: cat.iconColor, marginTop: 3, fontFamily: 'Space Grotesk, sans-serif' }}>
                      {cat.services.length} specialisations
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                    Tech Stack
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {cat.tech.map((t) => (
                      <TechBadge key={t.name} name={t.name} color={t.color} />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[{ n: '50+', l: 'Projects' }, { n: '98%', l: 'Satisfaction' }].map((s) => (
                  <div
                    key={s.l}
                    className="glass"
                    style={{ padding: '16px 18px', textAlign: 'center', border: `1px solid ${cat.iconColor}22` }}
                  >
                    <div style={{ fontSize: 26, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: cat.iconColor }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 60, paddingTop: 50, borderTop: '1px solid rgba(0,230,118,0.08)' }}>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 20, fontFamily: 'Space Grotesk, sans-serif' }}>
            Not sure which service fits your needs?
          </p>
          <a href="#contact" className="btn-green" style={{ fontSize: 15, padding: '14px 32px' }}>
            Discuss Your Project Over a Free Call <em className="arrow">↗</em>
          </a>
        </div>
      </div>
    </section>
  );
}
