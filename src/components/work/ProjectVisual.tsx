import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Project } from '@/lib/content';
import styles from './ProjectVisual.module.css';

/** Real project captures in a shared frame, sized by the surrounding card. */
export default function ProjectVisual({ project, sizes }: { project: Project; sizes: string }) {
  if (!project.mockup) {
    return <Image src={project.image} alt={`${project.name} project`} fill sizes={sizes} className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]" />;
  }

  return (
    <div className={styles.stage} style={{ '--project-accent': project.mockup.accent } as CSSProperties}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.wordmark} style={project.name.length > 18 ? { fontSize: '7cqw' } : undefined} aria-hidden="true">{project.name}</div>
      <div className={styles.browser}>
        <div className={styles.toolbar} aria-hidden="true">
          <span className={styles.dots}><i /><i /><i /></span>
          <span className={styles.address}>{project.mockup.domain}</span>
          <span className={styles.expand}>↗</span>
        </div>
        <div className={styles.screen}>
          {/* Preserve capture resolution and fine UI detail without another lossy encoding. */}
          <Image src={project.image} alt={`${project.name} — ${project.summary}`} fill unoptimized className="object-cover object-top" />
        </div>
      </div>
    </div>
  );
}
