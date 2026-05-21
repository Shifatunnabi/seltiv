'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    quote: "Seltiv transformed our entire digital presence in under 8 weeks. The quality of work, speed of delivery, and strategic thinking are unlike any agency we've worked with. Our revenue is up 60% since launch.",
    name: 'Arjun Mehta',
    role: 'CEO, FinTrack',
    initials: 'AM',
  },
  {
    quote: "The team at Seltiv doesn't just build — they think. They pushed back on our brief in the best way possible and delivered something far better than we imagined. Highly recommend.",
    name: 'Sophia Laurent',
    role: 'Founder, Bloom Co.',
    initials: 'SL',
  },
  {
    quote: "From branding to software, Seltiv is a one-stop shop that actually delivers. Professional, proactive, and genuinely talented. They're our long-term growth partner.",
    name: 'David Okafor',
    role: 'CTO, NovaMed',
    initials: 'DO',
  },
];

const persons = [
  { initials: 'AM', g1: '#0e6b3f', g2: '#1db864' },
  { initials: 'SL', g1: '#1db864', g2: '#00e676' },
  { initials: 'DO', g1: '#00e676', g2: '#0a4d2d' },
  { initials: 'RK', g1: '#0a4d2d', g2: '#0e6b3f' },
  { initials: 'NB', g1: '#1db864', g2: '#0e6b3f' },
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div
          className="reviews-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}
        >
          {/* Left: title + 5 static circles */}
          <div>
            <div className="section-label">Testimonials</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: 32 }}>
              What Our<br />
              <span className="neon">Clients Say</span>
            </h2>

            <div style={{ display: 'flex', marginBottom: 8 }}>
              {persons.map((p, i) => (
                <div
                  key={i}
                  className="avatar-circle"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    marginLeft: i > 0 ? -12 : 0,
                    background: `linear-gradient(135deg, ${p.g1}, ${p.g2})`,
                    border: '2px solid #080d14',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    position: 'relative',
                    zIndex: persons.length - i,
                    flexShrink: 0,
                  }}
                >
                  {p.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated testimonial card + dots */}
          <div>
            <div
              style={{
                fontSize: 80,
                color: 'var(--green-neon)',
                opacity: 0.3,
                lineHeight: 0.8,
                fontFamily: 'Georgia, serif',
                marginBottom: 16,
              }}
            >
              &ldquo;
            </div>

            <div style={{ position: 'relative', minHeight: 200, overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <blockquote
                    style={{
                      fontSize: 'clamp(15px, 1.5vw, 18px)',
                      fontStyle: 'italic',
                      lineHeight: 1.8,
                      color: 'var(--text)',
                      marginBottom: 28,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {reviews[active].quote}
                  </blockquote>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0e6b3f, #00e676)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        flexShrink: 0,
                      }}
                    >
                      {reviews[active].initials}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15 }}>
                        {reviews[active].name}
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Space Grotesk, sans-serif' }}>
                        {reviews[active].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots below the testimonial card */}
            <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: 'none',
                    cursor: 'pointer',
                    background: active === i ? 'var(--green-neon)' : 'rgba(255,255,255,0.15)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .avatar-circle { width: 32px !important; height: 32px !important; font-size: 10px !important; margin-left: -8px !important; }
          .avatar-circle:first-child { margin-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
