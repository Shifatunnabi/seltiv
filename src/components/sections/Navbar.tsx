'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const menuVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scaleY: 0.95,
    transition: { duration: 0.22, ease: 'easeIn' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  exit: { opacity: 0, y: -6 },
};

function isActive(href: string, pathname: string) {
  if (href.includes('#')) return false;
  return pathname === href;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  return (
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
      <div className="nav-wrapper" style={{ width: '62.5%', maxWidth: 960, position: 'relative' }}>
        {/* Main pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(8,13,20,0.88)' : 'rgba(8,13,20,0.5)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0,230,118,0.32)',
            borderRadius: 14,
            padding: '10px 20px',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 18px rgba(0,230,118,0.1), 0 0 1px rgba(0,230,118,0.25)',
          }}
        >
          <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="Seltiv"
              width={160}
              height={44}
              className="nav-logo"
              style={{ height: 44, width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </a>

          <ul
            className="nav-links-desktop"
            style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0 }}
          >
            {navLinks.map((l) => (
              <li key={l.label}>
                <NavLink href={l.href} label={l.label} active={isActive(l.href, pathname)} />
              </li>
            ))}
          </ul>

          <a href="/contact" className="btn-green nav-cta-desktop" style={{ fontSize: 13, padding: '9px 18px' }}>
            Book a Call <em className="arrow">↗</em>
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: 4,
              width: 32,
              height: 32,
            }}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                right: 0,
                background: 'rgba(8,13,20,0.97)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,230,118,0.12)',
                borderRadius: 14,
                overflow: 'hidden',
                transformOrigin: 'top center',
                zIndex: 10,
                padding: '20px 24px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {navLinks.map((l) => (
                <motion.a
                  key={l.label}
                  variants={itemVariants}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: isActive(l.href, pathname) ? '#00e676' : '#fff',
                    fontSize: 18,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    textDecoration: 'none',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  {l.label}
                  {isActive(l.href, pathname) && (
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#00e676',
                      boxShadow: '0 0 8px rgba(0,230,118,0.8)',
                      display: 'inline-block',
                    }} />
                  )}
                </motion.a>
              ))}
              <motion.a
                variants={itemVariants}
                href="/contact"
                className="btn-green"
                onClick={() => setMenuOpen(false)}
                style={{ marginTop: 16, textAlign: 'center', justifyContent: 'center' }}
              >
                Book a Call <em className="arrow">↗</em>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered || active ? '#00e676' : '#a0aec0',
        fontSize: 14,
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'color 0.2s',
        fontFamily: "'Space Grotesk', sans-serif",
        position: 'relative',
        paddingBottom: 3,
      }}
    >
      {label}
      {active && (
        <span
          style={{
            position: 'absolute',
            bottom: -1,
            left: 0,
            right: 0,
            height: 2,
            background: '#00e676',
            borderRadius: 1,
            boxShadow: '0 0 8px rgba(0,230,118,0.7)',
          }}
        />
      )}
    </a>
  );
}
