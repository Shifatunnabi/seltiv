'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
  });

  const budgets = [
    'less than $2k',
    '$2k-$5k',
    '5k-8k',
    '8k-10k',
    '10k+',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
  };

  return (
    <section className="section" style={{ background: 'var(--bg)', paddingTop: 20 }} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            position: 'relative', overflow: 'hidden',
            background: 'radial-gradient(ellipse 90% 120% at 15% 110%, #0e6b3f 0%, #051a0d 45%, #080d14 75%)',
            border: '1px solid rgba(0,230,118,0.15)',
            borderRadius: 24, padding: '80px 40px',
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

          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="contact-grid">
            {/* Left Side Info */}
            <div>
              <div className="section-label" style={{ marginBottom: 20 }}>
                Your Next Big Move Starts Here
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 800,
                  marginBottom: 20, lineHeight: 1.1, textAlign: 'left',
                }}
              >
                Have an Idea?<br />
                <span style={{ color: 'var(--green-neon)', textShadow: '0 0 40px rgba(0,230,118,0.4)' }}>
                  Let&apos;s Build the<br />Future Together.
                </span>
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 440, lineHeight: 1.7 }}>
                From concept to launch — we turn ambitious ideas into exceptional digital experiences. We&apos;re ready to help you scale.
              </p>
            </div>

            {/* Right Side Form */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 32 }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                        fontFamily: 'Space Grotesk, sans-serif'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                        fontFamily: 'Space Grotesk, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Phone (WhatsApp)</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Project Budget</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {budgets.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => handleBudgetSelect(b)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: 999,
                          fontSize: 12,
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          background: formData.budget === b ? 'var(--green-neon)' : 'rgba(255,255,255,0.05)',
                          color: formData.budget === b ? '#000' : '#fff',
                          border: '1px solid',
                          borderColor: formData.budget === b ? 'var(--green-neon)' : 'rgba(255,255,255,0.1)',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Project Description</label>
                  <textarea
                    name="description"
                    placeholder="Tell us about your project goals, timelines, etc."
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                      fontFamily: 'Space Grotesk, sans-serif', resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-green"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 10, fontSize: 16, padding: '14px' }}
                >
                  Let&apos;s Connect <em className="arrow">↗</em>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
