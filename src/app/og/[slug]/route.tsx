import { ImageResponse } from 'next/og';
import { socialCards } from '@/lib/social-cards';
import { Mark } from '@/components/ui/Logo';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return socialCards.map((card) => ({ slug: card.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = socialCards.find((item) => item.slug === slug);
  if (!card) return new Response('Not found', { status: 404 });
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '52px 64px', backgroundColor: '#050807', backgroundImage: 'radial-gradient(ellipse at 95% 5%, #123d29 0%, #050807 65%)', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}><Mark size={46} color="#00e676" /><span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>Seltiv</span></div>
        <span style={{ color: '#b6c3bb', fontSize: 19 }}>seltiv.com</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 48, color: '#7cf5b4', fontSize: 20, letterSpacing: 2 }}>{card.category}</div>
      <div style={{ display: 'flex', marginTop: 18, maxWidth: 1060, fontSize: card.title.length > 35 ? 66 : 80, fontWeight: 700, lineHeight: 1.08, letterSpacing: -3 }}>{card.title}</div>
      <div style={{ display: 'flex', marginTop: 25, maxWidth: 950, fontSize: 27, lineHeight: 1.35, color: '#c9cfcb' }}>{card.description}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 24, borderTop: '1px solid #2a4033' }}>
        <span style={{ fontSize: 21, color: '#b9c8bf' }}>{card.detail}</span><span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '50%', background: '#00e676', color: '#050807', fontSize: 30 }}>↗</span>
      </div>
    </div>,
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=86400' } },
  );
}
