'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Website Development', 'Branding', 'Marketing', 'Content'];

export default function PortfolioPageContent({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <main style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg)' }}>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          {/* Headline */}
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: 20 }}>
              Our <span className="neon">Portfolio</span>
            </h1>
            <p style={{ color: 'var(--muted)', maxWidth: 600, margin: '0 auto', fontSize: 18 }}>
              Explore our latest work across digital development, branding, and strategic marketing.
            </p>
          </div>

          {/* Filters */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 12,
              marginBottom: 48,
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 999,
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--green-neon)' : 'rgba(255,255,255,0.1)',
                  background: activeCategory === cat ? 'rgba(0,230,118,0.1)' : 'transparent',
                  color: activeCategory === cat ? 'var(--green-neon)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 30,
            }}
            className="projects-grid"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
}
