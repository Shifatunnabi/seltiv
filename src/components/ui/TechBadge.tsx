'use client';

import { useState } from 'react';

interface TechBadgeProps {
  name: string;
  color: string;
  bg?: string;
}

export default function TechBadge({ name, color, bg }: TechBadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '5px 11px',
        borderRadius: 30,
        background: hovered ? `${color}18` : bg || 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? `${color}55` : `${color}22`}`,
        fontSize: 11,
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: 600,
        color: color || '#a0aec0',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s ease',
        cursor: 'default',
      }}
    >
      {name}
    </span>
  );
}
