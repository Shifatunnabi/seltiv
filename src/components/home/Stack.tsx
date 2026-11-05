import { stack } from '@/lib/content';
import { Mark } from '@/components/ui/Logo';

export default function Stack() {
  const items = [...stack, ...stack];
  return (
    <section aria-label="Technology we use" className="marquee relative overflow-hidden border-y border-line py-7">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10 px-5 text-2xl font-light tracking-tight text-white/50 md:text-3xl">
            {s}
            <Mark size={14} color="var(--color-signal)" className={`mark-solo opacity-70 ${i % 2 ? 'mark-spin' : ''}`} />
          </span>
        ))}
      </div>
    </section>
  );
}
