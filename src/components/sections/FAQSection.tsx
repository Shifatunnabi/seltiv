'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data/faqs';

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="glass"
      style={{
        borderRadius: 16,
        border: `1px solid ${isOpen ? 'rgba(0,230,118,0.3)' : 'rgba(255,255,255,0.08)'}`,
        overflow: 'hidden',
        transition: 'border-color 0.25s ease',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: isOpen ? 'var(--green-neon)' : '#fff',
            transition: 'color 0.25s ease',
            margin: 0,
          }}
        >
          {question}
        </h3>
        <span
          style={{
            color: 'var(--green-neon)',
            fontSize: 20,
            flexShrink: 0,
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                padding: '0 24px 20px',
                margin: 0,
                color: 'var(--muted)',
                fontSize: 14,
                lineHeight: 1.8,
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section" style={{ background: 'var(--bg)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Frequently Asked <span className="neon">Questions</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: 14, fontSize: 15 }}>
            Everything you need to know about working with Seltiv.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
