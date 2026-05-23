import ServiceSection from './ServiceSection';

const services = [
  { name: 'Visual Identity Design', desc: 'Unique logos, colour palettes and typography that define your brand personality.' },
  { name: 'High-End Photo Retouching', desc: 'Professional image editing, colour correction and background removal.' },
  { name: 'Brand Guidelines', desc: 'Comprehensive style guides ensuring visual consistency across all media.' },
  { name: 'Creative Manipulation', desc: 'Combining photography and graphic elements to produce striking marketing visuals.' },
];

const tech = [
  { name: 'Figma', color: '#f24e1e' }, { name: 'Photoshop', color: '#31a8ff' },
  { name: 'Illustrator', color: '#ff9a00' }, { name: 'Lightroom', color: '#31a8ff' },
  { name: 'InDesign', color: '#ff3366' }, { name: 'Blender', color: '#ea7600' },
  { name: 'Spline', color: '#1cf5d3' },
];

export default function BrandingSection() {
  return (
    <ServiceSection
      id="branding"
      index={2}
      label="Brand Identity & Graphic Design"
      headline={
        <>
          A Brand Identity That  
          <span style={{ color: '#f6c90e', textShadow: '0 0 40px rgba(246,201,14,0.3)', marginLeft: 8}}>
             Stands Apart
          </span>
        </>
      }
      description="From visual identity systems to professional photo editing — we craft the look and feel that defines your brand across every touchpoint and platform."
      icon="◆"
      iconColor="#f6c90e"
      glowColor="rgba(246,201,14,0.10)"
      categoryTitle="Branding & Photo Editing"
      services={services}
      tech={tech}
      priceTag="$499"
      flip
      bg="var(--bg2)"
    />
  );
}
