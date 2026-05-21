import ServiceSection from './ServiceSection';

const services = [
  { name: 'Custom Websites', desc: 'Responsive, high-performance websites using modern frameworks and headless architectures.' },
  { name: 'UI/UX Design', desc: 'Intuitive, user-centric interfaces focused on seamless navigation and conversion.' },
  { name: 'Mobile & Web Apps', desc: 'Scalable cross-platform applications tailored to your specific business logic.' },
  { name: 'E-commerce Systems', desc: 'Secure, optimized online stores with integrated payment gateways and inventory management.' },
];

const tech = [
  { name: 'React', color: '#61dafb' }, { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68a063' }, { name: 'TypeScript', color: '#3178c6' },
  { name: 'Flutter', color: '#54c5f8' }, { name: 'Tailwind', color: '#38bdf8' },
  { name: 'PostgreSQL', color: '#336791' }, { name: 'AWS', color: '#ff9900' },
  { name: 'Supabase', color: '#3ecf8e' }, { name: 'Figma', color: '#f24e1e' },
];

export default function SoftwareDev() {
  return (
    <ServiceSection
      id="software-dev"
      index={1}
      label="Software & Website Development"
      headline={
        <>
          Software That Scales With<br />
          <span style={{ color: 'var(--green-neon)', textShadow: '0 0 40px rgba(0,230,118,0.35)' }}>
            Your Ambition
          </span>
        </>
      }
      description="From pixel-perfect websites to enterprise-grade applications — we architect, design, and ship software that solves real problems and grows with your business."
      icon="◈"
      iconColor="#00e676"
      glowColor="rgba(0,230,118,0.12)"
      categoryTitle="Software & Website Development"
      services={services}
      tech={tech}
      priceTag="$399"
      bg="var(--bg)"
    />
  );
}
