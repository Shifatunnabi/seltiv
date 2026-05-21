import ServiceSection from './ServiceSection';

const services = [
  { name: 'Video Production', desc: 'High-impact promotional videos, motion graphics and short-form content for social media.' },
  { name: 'Professional Copywriting', desc: 'Persuasive blog posts, website copy and newsletters that tell your brand story.' },
  { name: 'Multimedia Assets', desc: 'Digital brochures, infographics and presentations that simplify complex information.' },
  { name: 'Scripting & Storyboarding', desc: 'Creative concepts and scripts for video marketing and brand campaigns.' },
];

const tech = [
  { name: 'Premiere Pro', color: '#9999ff' }, { name: 'After Effects', color: '#9999ff' },
  { name: 'DaVinci', color: '#ffcc00' }, { name: 'CapCut', color: '#00c4cc' },
  { name: 'Canva', color: '#00c4cc' }, { name: 'Midjourney', color: '#ffffff' },
  { name: 'ChatGPT', color: '#74aa9c' }, { name: 'Descript', color: '#7c5cfc' },
];

export default function ContentServices() {
  return (
    <ServiceSection
      id="content-services"
      index={4}
      label="Content Creation & Production"
      headline={
        <>
          Content That Captures<br />
          <span style={{ color: 'var(--green-neon)', textShadow: '0 0 40px rgba(0,230,118,0.35)' }}>
            & Converts
          </span>
        </>
      }
      description="High-impact video, copy, and creative assets produced at scale by our in-house team — designed to tell your brand story and drive real engagement."
      icon="✦"
      iconColor="#00e676"
      glowColor="rgba(0,230,118,0.10)"
      categoryTitle="Content Creation & Production"
      services={services}
      tech={tech}
      priceTag="$299"
      priceLabel="/mo"
      bg="var(--bg)"
    />
  );
}
