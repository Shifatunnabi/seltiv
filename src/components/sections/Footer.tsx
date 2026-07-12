'use client';

import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const socialIcons = [
  { label: 'FB', href: 'https://facebook.com/share/1Btk9Gk4kC/', icon: <FaFacebookF /> },
  { label: 'IG', href: 'https://www.instagram.com/getseltiv/', icon: <FaInstagram /> },
  { label: 'LN', href: 'https://www.linkedin.com/company/seltiv/', icon: <FaLinkedinIn /> }
];

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36, height: 36, borderRadius: 8,
        background: 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? 'var(--green-neon)' : 'rgba(0,230,118,0.12)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--green-neon)' : 'var(--muted)',
        fontSize: 16,
        transition: 'all 0.2s ease',
      }}
    >
      {icon}
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

function ContactLink({ href, icon, children }: { href?: string; icon: React.ReactNode; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const content = (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12,
        whiteSpace: 'nowrap'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ 
        color: 'var(--green-neon)', 
        fontSize: 18, 
        flexShrink: 0, 
        display: 'flex',
        alignItems: 'center'
      }}>
        {icon}
      </span>
      <span style={{ 
        color: hovered ? 'var(--green-neon)' : 'var(--muted)', 
        fontSize: 14, 
        fontFamily: 'Space Grotesk, sans-serif',
        transition: 'color 0.2s ease'
      }}>
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }
  return content;
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
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '70px 0 30px' }}>
        {/* Main grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: 60, marginBottom: 60 }}
          className="footer-grid"
        >
          {/* Col 1: Brand */}
          <div className="footer-brand">
            <div style={{ marginBottom: 16 }}>
              {/* <SeltivLogo size={28} /> */}
              <Image src="/icon.png" alt="Seltiv Logo" height={60} width={60} />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Think Growth. Think Seltiv.<br />
              Your all-in-one growth &amp; technology partner.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socialIcons.map((s) => (
                <SocialIcon key={s.label} icon={s.icon} href={s.href} />
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links">
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 20, color: '#fff' }}>
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((l) => (
                <FooterLink key={l.label} label={l.label} href={l.href} />
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="footer-contact">
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 20 }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ContactLink href="mailto:hello@seltiv.com" icon={<HiOutlineEnvelope />}>
                hello@seltiv.com
              </ContactLink>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: 'var(--green-neon)', fontSize: 18, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                  <HiOutlinePhone />
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <PhoneLink href="tel:+8801706642396">+880 1706 642396</PhoneLink>
                  <PhoneLink href="tel:+8801885890605">+880 1885 890605</PhoneLink>
                </div>
              </div>

              <ContactLink icon={<HiOutlineMapPin />}>
                Remote-first. Worldwide.
              </ContactLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 24,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
          }}
        >
          <span style={{ color: 'rgba(160,174,192,0.5)', fontSize: 13, fontFamily: 'Space Grotesk, sans-serif' }}>
            © 2026 Seltiv. All rights reserved.
          </span>
        </div>
      </div>

      {/* Watermark marquee */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 140,
          overflow: 'hidden',
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="footer-marquee-track">
          <div className="footer-marquee-group">
            {Array.from({ length: 8 }).map((_, i) => (
              <Image key={i} src="/logo.png" alt="" width={124} height={48} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
            ))}
          </div>
          <div className="footer-marquee-group" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <Image key={i} src="/logo.png" alt="" width={124} height={48} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-marquee-track {
          display: flex;
          align-items: center;
          height: 100%;
          width: max-content;
          animation: footer-marquee-scroll 26s linear infinite;
        }
        .footer-marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          height: 100%;
          gap: 44px;
          padding-right: 44px;
          opacity: 0.06;
          filter: grayscale(1) brightness(2);
        }
        @keyframes footer-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .footer-grid { 
            grid-template-columns: 1fr !important; 
            gap: 40px !important; 
          }
          .footer-links, .footer-contact {
            display: block;
            width: 100%;
          }
          .footer-brand {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </footer>
  );
}

function PhoneLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a 
      href={href} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        color: hovered ? 'var(--green-neon)' : 'var(--muted)', 
        fontSize: 14, 
        fontFamily: 'Space Grotesk, sans-serif', 
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </a>
  );
}

