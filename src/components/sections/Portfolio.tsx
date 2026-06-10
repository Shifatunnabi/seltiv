'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Portfolio() {
  const homeProjects = projects
    .filter((p) => p.showInHome)
    .slice(0, 6);

  return (
    <section id="portfolio" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 20,
          }}
          className="portfolio-header"
        >
          <div>
            <div className="section-label">Our Work</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
              Recent <span className="neon">Projects</span>
            </h2>
          </div>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}
          className="portfolio-grid"
        >
          {homeProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="portfolio-footer" style={{ marginTop: 48, textAlign: 'center' }}>
          <a href="/portfolio" className="btn-ghost portfolio-view-all">
            View All Work <em className="arrow">→</em>
          </a>
        </div>
      </div>

      <style>{`
        .portfolio-view-all {
          display: inline-flex;
        }

        @media (max-width: 768px) {
          .portfolio-view-all {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-header {
            justify-content: center !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
