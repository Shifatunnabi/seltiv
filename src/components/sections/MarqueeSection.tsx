'use client';

const items = [
  'Website Development',
  'Custom Software',
  'Website Optimization',
  'Branding',
  'UI/UX Design',
  'Digital Marketing',
  'Growth Strategy',
  'Product Design',
  'SEO & Performance',
];

const repeated = [...items, ...items];

export default function MarqueeSection() {
  return (
    <div
      style={{
        borderTop: '1px solid rgba(0,230,118,0.08)',
        borderBottom: '1px solid rgba(0,230,118,0.08)',
        background: 'rgba(0,0,0,0.3)',
        padding: '16px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: 'linear-gradient(90deg, #080d14, transparent)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: 'linear-gradient(-90deg, #080d14, transparent)',
          zIndex: 2,
        }}
      />

      <div
        style={{
          display: 'flex',
          animation: 'marqueeScroll 30s linear infinite',
          width: 'max-content',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '0 28px',
              whiteSpace: 'nowrap',
              fontFamily: "'Syne', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: i % 3 === 1 ? 'var(--green-neon)' : 'var(--muted)',
              textTransform: 'uppercase',
            }}
          >
            {item}
            <span style={{ color: 'var(--green)', fontSize: 10 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
