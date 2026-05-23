'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/data/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Square Image Container */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Details Section */}
      <div style={{ padding: '24px' }}>
        <div
          style={{
            fontSize: 12,
            color: 'var(--green-neon)',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.08em',
            marginBottom: 8,
            textTransform: 'uppercase',
          }}
        >
          {project.category.join(' · ')}
        </div>
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 20,
            color: '#fff',
          }}
        >
          {project.name}
        </h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            padding: '8px 18px',
            display: 'inline-flex',
            background: 'var(--green-bright)',
            color: '#fff',
            borderRadius: 999,
            textDecoration: 'none',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            transition: 'all 0.25s ease',
            border: '1px solid var(--green-bright)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--green-neon)';
            e.currentTarget.style.borderColor = 'var(--green-neon)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--green-bright)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'var(--green-bright)';
          }}
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}
