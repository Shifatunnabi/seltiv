'use client';

export default function HeroGraphic() {
  return (
    <div
      className="hero-graphic-container"
      style={{
        position: 'relative',
        width: '100%',
        height: 520,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Glow orbs */}
      <div
        style={{
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,230,118,0.18) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          animation: 'floatOrb 5s ease-in-out infinite',
          filter: 'blur(20px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,107,63,0.25) 0%, transparent 70%)',
          bottom: 60,
          right: 40,
          animation: 'floatOrb 7s ease-in-out infinite reverse',
          filter: 'blur(15px)',
        }}
      />

      {/* Grid lines */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.12,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <line key={i} x1={i * 80} y1="0" x2={i * 80} y2="100%" stroke="#00e676" strokeWidth="0.5" />
        ))}
        {[...Array(8)].map((_, i) => (
          <line key={i + 8} x1="0" y1={i * 70} x2="100%" y2={i * 70} stroke="#00e676" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Floating metric cards */}
      <div
        className="hero-card-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 14,
          padding: 20,
          width: '100%',
        }}
      >
        {/* Card 1 — MRR Growth */}
        <div
          className="glass hero-card"
          style={{
            padding: '18px 20px',
            animation: 'floatCard 4s ease-in-out infinite',
          }}
        >
          <div className="hero-card-label" style={{ fontSize: 11, color: '#a0aec0', marginBottom: 6, fontFamily: 'Space Grotesk, sans-serif' }}>
            MRR Growth
          </div>
          <div
            className="hero-metric"
            style={{
              fontSize: 26,
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: '#00e676',
              animation: 'counter-glow 3s ease-in-out infinite',
            }}
          >
            +147%
          </div>
          <div className="hero-chart" style={{ marginTop: 10, height: 36 }}>
            <svg width="100%" height="100%" viewBox="0 0 120 36">
              <polyline
                points="0,30 20,22 40,18 60,14 80,8 100,5 120,2"
                fill="none"
                stroke="#1db864"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <polygon
                points="0,36 0,30 20,22 40,18 60,14 80,8 100,5 120,2 120,36"
                fill="url(#lineGrad)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00e676" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Card 2 — Projects Launched */}
        <div
          className="glass hero-card"
          style={{
            padding: '18px 20px',
            animation: 'floatCard 4s ease-in-out infinite 1s',
            background: 'linear-gradient(135deg, rgba(14,107,63,0.2), rgba(8,13,20,0.8))',
          }}
        >
          <div className="hero-card-label" style={{ fontSize: 11, color: '#a0aec0', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
            Projects Launched
          </div>
          <div className="hero-metric" style={{ fontSize: 32, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: '#fff' }}>
            50<span style={{ color: '#00e676' }}>+</span>
          </div>
          <div className="hero-bars" style={{ marginTop: 6, display: 'flex', gap: 4 }}>
            {[0.9, 0.7, 1, 0.6, 0.85, 0.75, 0.95].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 20 * h,
                  background: i === 6 ? '#00e676' : 'rgba(0,230,118,0.3)',
                  borderRadius: 3,
                  alignSelf: 'flex-end',
                }}
              />
            ))}
          </div>
        </div>

        {/* Card 3 — Happy Clients */}
        <div
          className="glass hero-card"
          style={{
            padding: '18px 20px',
            animation: 'floatCard 4s ease-in-out infinite 0.5s',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <div
            className="hero-icon"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0e6b3f, #00e676)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              flexShrink: 0,
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          >
            ✦
          </div>
          <div>
            <div className="hero-metric" style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
              30<span style={{ color: '#00e676' }}>+</span>
            </div>
            <div className="hero-card-label" style={{ fontSize: 11, color: '#a0aec0', fontFamily: 'Space Grotesk, sans-serif' }}>Happy Clients</div>
          </div>
        </div>

        {/* Card 4 — Satisfaction Rate */}
        <div
          className="glass hero-card"
          style={{
            padding: '18px 20px',
            animation: 'floatCard 4s ease-in-out infinite 1.5s',
            background: 'linear-gradient(135deg, rgba(246,201,14,0.08), rgba(8,13,20,0.8))',
          }}
        >
          <div className="hero-card-label" style={{ fontSize: 11, color: '#a0aec0', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
            Satisfaction Rate
          </div>
          <div className="hero-metric" style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: '#f6c90e' }}>98%</div>
          <div style={{ marginTop: 8, height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: '98%',
                background: 'linear-gradient(90deg, #f6c90e, #00e676)',
                borderRadius: 3,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
