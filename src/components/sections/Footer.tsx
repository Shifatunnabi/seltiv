'use client';

import { useState } from 'react';
import SeltivLogo from '@/components/ui/SeltivLogo';

const quickLinks = ['Home', 'Services', 'Portfolio', 'Pricing', 'About'];
const socialIcons = [
  { label: 'X', href: '#' },
  { label: 'in', href: '#' },
  { label: 'ig', href: '#' },
  { label: 'yt', href: '#' },
];
const contactItems = [
  { icon: '✉', val: 'hello@seltiv.com' },
  { icon: '☎', val: '+1 (555) 000-0000' },
  { icon: '◎', val: 'Remote-first. Worldwide.' },
];

function SocialIcon({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36, height: 36, borderRadius: 8,
        background: 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? 'var(--green-neon)' : 'rgba(0,230,118,0.12)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--green-neon)' : 'var(--muted)',
        fontSize: 12, fontWeight: 700,
        fontFamily: "'Syne', sans-serif", textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
    >
      {label}
    </a>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? '#00e676' : 'var(--muted)',
          fontSize: 14, textDecoration: 'none',
          fontFamily: 'Space Grotesk, sans-serif',
          transition: 'color 0.2s ease',
        }}
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#05090f',
        borderTop: '1px solid rgba(0,230,118,0.07)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
          fontFamily: "'Syne', sans-serif", fontWeight: 900,
          fontSize: 'clamp(80px, 15vw, 160px)',
          color: 'transparent', WebkitTextStroke: '1px rgba(14,107,63,0.08)',
          whiteSpace: 'nowrap', letterSpacing: '0.1em',
          pointerEvents: 'none', userSelect: 'none',
          lineHeight: 1,
        }}
      >
        SELTIV
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '70px 0 30px' }}>
        {/* Main grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: 60, marginBottom: 60 }}
          className="footer-grid"
        >
          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <SeltivLogo size={28} />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Think Growth. Think Seltiv.<br />
              Your all-in-one growth &amp; technology partner.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socialIcons.map((s) => (
                <SocialIcon key={s.label} label={s.label} href={s.href} />
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 20, color: '#fff' }}>
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((l) => (
                <FooterLink key={l} label={l} href={`#${l.toLowerCase()}`} />
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 20 }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactItems.map((c) => (
                <div key={c.val} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: 'var(--green-neon)', fontSize: 14, flexShrink: 0 }}>{c.icon}</span>
                  <span style={{ color: 'var(--muted)', fontSize: 14, fontFamily: 'Space Grotesk, sans-serif' }}>{c.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 24,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
          }}
        >
          <span style={{ color: 'rgba(160,174,192,0.5)', fontSize: 13, fontFamily: 'Space Grotesk, sans-serif' }}>
            © {new Date().getFullYear()} Seltiv. All rights reserved.
          </span>
          <span style={{ color: 'rgba(160,174,192,0.5)', fontSize: 13, fontFamily: 'Space Grotesk, sans-serif' }}>
            Built with ◈ by Seltiv
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
