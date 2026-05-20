'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SeltivLogo from '@/components/ui/SeltivLogo';

const links = ['Home', 'Services', 'Portfolio', 'Pricing'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: '16px 20px',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            width: '62.5%',
            maxWidth: 960,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(8,13,20,0.85)' : 'rgba(8,13,20,0.5)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0,230,118,0.1)',
            borderRadius: 14,
            padding: '10px 20px',
            transition: 'all 0.3s ease',
          }}
        >
          <a href="#home" style={{ textDecoration: 'none' }}>
            <SeltivLogo size={26} />
          </a>

          <ul
            className="nav-links-desktop"
            style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0 }}
          >
            {links.map((l) => (
              <li key={l}>
                <NavLink href={`#${l.toLowerCase()}`} label={l} />
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-green" style={{ fontSize: 13, padding: '9px 18px' }}>
            Book a Call <em className="arrow">↗</em>
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 1999 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 280,
                background: 'rgba(8,13,20,0.97)',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(0,230,118,0.12)',
                zIndex: 2000,
                padding: '80px 32px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  background: 'none',
                  border: 'none',
                  color: '#a0aec0',
                  fontSize: 24,
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  {l}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-green"
                style={{ marginTop: 16, textAlign: 'center', justifyContent: 'center' }}
              >
                Book a Call <em className="arrow">↗</em>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#00e676' : '#a0aec0',
        fontSize: 14,
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'color 0.2s',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {label}
    </a>
  );
}
