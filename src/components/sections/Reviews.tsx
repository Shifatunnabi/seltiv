'use client';

import { useState, useEffect } from 'react';

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
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'center' }}
          className="reviews-grid"
        >
          {/* Left */}
          <div>
            <div className="section-label">Testimonials</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, marginBottom: 32 }}>
              What Our<br />
              <span className="neon">Clients Say</span>
            </h2>

            {/* Avatar stack */}
            <div style={{ display: 'flex', marginBottom: 20 }}>
              {reviews.map((r, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: 48, height: 48, borderRadius: '50%',
                    marginLeft: i > 0 ? -12 : 0,
                    background: `linear-gradient(135deg, #0e6b3f, ${i === 1 ? '#1db864' : i === 2 ? '#00e676' : '#0a4d2d'})`,
                    border: `2px solid ${active === i ? '#00e676' : '#080d14'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13,
                    cursor: 'pointer', transition: 'all 0.3s ease',
                    transform: active === i ? 'scale(1.15)' : 'scale(1)',
                    zIndex: active === i ? 2 : 1, position: 'relative',
                  }}
                >
                  {r.initials}
                </div>
              ))}
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8 }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? 24 : 8, height: 8,
                    borderRadius: 4, border: 'none', cursor: 'pointer',
                    background: active === i ? 'var(--green-neon)' : 'rgba(255,255,255,0.15)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: quote */}
          <div>
            <div
              style={{
                fontSize: 80, color: 'var(--green-neon)', opacity: 0.3,
                lineHeight: 0.8, fontFamily: 'Georgia, serif', marginBottom: 16,
              }}
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)', fontStyle: 'italic',
                lineHeight: 1.8, color: 'var(--text)', marginBottom: 28,
                transition: 'opacity 0.4s ease',
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
              }}
            >
              {reviews[active].quote}
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0e6b3f, #00e676)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
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
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
