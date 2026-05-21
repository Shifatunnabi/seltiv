import ServiceSection from './ServiceSection';

const services = [
  { name: 'Search Engine Optimisation', desc: 'Boost organic visibility through technical audits, keyword strategy and on-page optimisation.' },
  { name: 'Performance Marketing', desc: 'Targeted PPC and social media ad campaigns to maximise ROI and lead generation.' },
  { name: 'Social Media Growth', desc: 'Strategy-driven community management and engagement across all major platforms.' },
  { name: 'Data Analytics', desc: 'Track user behaviour and campaign performance to surface actionable growth insights.' },
];

const tech = [
  { name: 'Google Ads', color: '#4285f4' }, { name: 'Meta Ads', color: '#0866ff' },
  { name: 'SEMrush', color: '#ff6600' }, { name: 'GA4', color: '#e37400' },
  { name: 'HubSpot', color: '#ff7a59' }, { name: 'Klaviyo', color: '#00b87c' },
  { name: 'Ahrefs', color: '#f0643a' }, { name: 'Hotjar', color: '#fd3a5c' },
  { name: 'Zapier', color: '#ff4a00' },
];

export default function DigitalMarketing() {
  return (
    <ServiceSection
      id="digital-marketing"
      index={3}
      label="Digital Marketing"
      headline={
        <>
          Growth Marketing That<br />
          <span style={{ color: '#f6c90e', textShadow: '0 0 40px rgba(246,201,14,0.3)' }}>
            Delivers Real ROI
          </span>
        </>
      }
      description="Data-driven digital marketing strategies that move the needle — from SEO and paid ads to social media and analytics that turn clicks into loyal customers."
      icon="▲"
      iconColor="#f6c90e"
      glowColor="rgba(246,201,14,0.10)"
      categoryTitle="Digital Marketing"
      services={services}
      tech={tech}
      priceTag="$299"
      priceLabel="/mo"
      flip
      bg="var(--bg2)"
    />
  );
}
