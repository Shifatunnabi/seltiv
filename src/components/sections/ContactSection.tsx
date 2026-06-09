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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const budgets = [
    'less than $2k',
    '$2k-$5k',
    '$5k-$8k',
    '$8k-$10k',
    '$10k+',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: 'success', msg: 'Message sent! We\'ll get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', budget: '', description: '' });
      } else {
        setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Failed to send message. Check your connection.' });
    } finally {
      setLoading(false);
    }
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
            borderRadius: 24,
          }}
          className="contact-card-inner"
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

          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center', justifyContent: 'center' }} className="contact-grid">
            {/* Left Side Info */}
            <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  paddingLeft: 25 }}>
              {/* <div className="section-label" style={{ marginBottom: 20 }}>
                Your Next Big Move Starts Here
              </div> */}
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 800,
                  marginBottom: 20, lineHeight: 1.1, textAlign: 'left', paddingTop: 20
                }}
              >
                Have an Idea?<br />
                <span style={{ color: 'var(--green-neon)', textShadow: '0 0 40px rgba(0,230,118,0.4)' }}>
                  Let&apos;s Build the Future Together.
                </span>
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 440, lineHeight: 1.7 }}>
                From concept to launch — we turn ambitious ideas into exceptional digital experiences. We&apos;re ready to help you scale.
              </p>
            </div>

            {/* Right Side Form */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 32 }} className="contact-form-wrapper">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,230,118,0.2)',
                        padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                        fontFamily: 'Space Grotesk, sans-serif'
                      }}
                      className="form-input"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,230,118,0.2)',
                        padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                        fontFamily: 'Space Grotesk, sans-serif'
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Phone (WhatsApp)</label>
                  <input
                    required
                    type="text"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,230,118,0.2)',
                      padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}
                    className="form-input"
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
                          borderColor: formData.budget === b ? 'var(--green-neon)' : 'rgba(0,230,118,0.2)',
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
                    required
                    name="description"
                    placeholder="Tell us about your project goals, timelines, etc."
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,230,118,0.2)',
                      padding: '12px 16px', borderRadius: 10, color: '#fff', fontSize: 14,
                      fontFamily: 'Space Grotesk, sans-serif', resize: 'vertical'
                    }}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-green"
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center', 
                    marginTop: 10, 
                    fontSize: 16, 
                    padding: '14px',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {loading ? 'Sending...' : 'Let\'s Connect'} <em className="arrow">↗</em>
                </button>

                {status && (
                  <div style={{ 
                    marginTop: 10, 
                    padding: '10px', 
                    borderRadius: 8, 
                    fontSize: 14,
                    textAlign: 'center',
                    background: status.type === 'success' ? 'rgba(0,230,118,0.1)' : 'rgba(255,0,0,0.1)',
                    color: status.type === 'success' ? '#00e676' : '#ff4444',
                    border: `1px solid ${status.type === 'success' ? '#00e676' : '#ff4444'}`
                  }}>
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-card-inner {
          padding: 80px 60px;
        }
        @media (max-width: 900px) {
          .contact-card-inner { padding: 60px 24px 40px 24px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .contact-form-wrapper { marginRight: 0 !important; padding: 20px !important; }
          .contact-info { text-align: center !important; }
          .contact-info h2 { text-align: center !important; }
          .contact-info p { margin: 0 auto !important; }
          .form-input { padding: 14px 16px !important; font-size: 16px !important; }
          .form-textarea { padding: 14px 16px !important; font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
}
