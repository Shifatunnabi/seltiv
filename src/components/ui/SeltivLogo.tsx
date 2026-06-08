'use client';
import Image from 'next/image';

interface SeltivLogoProps {
  size?: number;
}

export default function SeltivLogo({ size = 32 }: SeltivLogoProps) {
  const t = size * 1.2;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {/* <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
        <rect x="8"  y="2"  width="38" height="10" rx="5" fill="#1db864" />
        <rect x="2"  y="16" width="10" height="10" rx="4" fill="#1db864" />
        <rect x="2"  y="30" width="30" height="10" rx="5" fill="#1db864" />
        <rect x="40" y="16" width="10" height="10" rx="4" fill="#1db864" />
        <rect x="12" y="40" width="38" height="10" rx="5" fill="#1db864" />
      </svg> */}
      <Image src="/icon.png" alt="Seltiv Logo" height={60} width={60} />
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: t,
          color: '#fff',
          letterSpacing: '0.04em',
        }}
      >
        SELTIV
      </span>
    </div>
  );
}
