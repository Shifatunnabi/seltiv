import Link from 'next/link';
import { CONTACT_EMAIL, PHONES, capabilities, nav } from '@/lib/content';
import Button from '@/components/ui/Button';
import { Mark } from '@/components/ui/Logo';

/**
 * Curtain-reveal footer in brand green, on every screen size. The footer is
 * fixed behind the page inside a clipped, viewport-tall wrapper, so it is
 * revealed as the last section scrolls away. Its content must fit in one
 * viewport, hence the compact mobile sizing below.
 */
export default function Footer() {
  return (
    <div className="relative h-[100svh]" style={{ clipPath: 'inset(0 0 0 0)' }}>
      <footer className="fixed bottom-0 left-0 flex h-[100svh] w-full flex-col bg-signal text-ink">
        <div className="wrap flex flex-1 flex-col pt-[72px] md:pt-24" style={{ maxWidth: 'none' }}>
          <div className="grid gap-8 md:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mark-host mb-4 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] md:mb-6">
                <Mark size={12} color="currentColor" /> Have something in mind?
              </p>
              <h2 className="display text-[2.6rem] leading-[0.95] sm:text-[clamp(3rem,7.5vw,7.5rem)]">
                Let’s build
                <br />
                what’s <span className="serif-accent">next.</span>
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-10">
                <Button href="/contact" variant="dark">
                  Book an intro call
                </Button>
                <a href={`mailto:${CONTACT_EMAIL}`} className="link-u text-base font-medium md:text-xl">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-4 gap-y-5 text-sm [@media(max-height:620px)_and_(max-width:767px)]:hidden md:grid-cols-2 md:gap-8 md:text-[15px] lg:col-span-4 lg:col-start-9">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60 md:mb-4">Studio</p>
                <ul className="space-y-1.5 md:space-y-2">
                  {[{ label: 'Home', href: '/' }, ...nav].map((n) => (
                    <li key={n.href}>
                      <Link href={n.href} className="link-u">
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60 md:mb-4">Build</p>
                <ul className="space-y-1.5 md:space-y-2">
                  {capabilities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/services#${c.slug}`} className="link-u">
                        {c.short}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-3 md:col-span-2">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60 md:mb-4">Contact</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col">
                  {PHONES.map((p) => (
                    <a key={p.raw} href={`tel:${p.raw}`} className="link-u w-fit whitespace-nowrap">
                      {p.label}
                    </a>
                  ))}
                </div>
                <span className="mt-1 hidden text-ink/70 md:block">Dhaka · Working worldwide</span>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 md:pt-16">
            <span
              className="wordmark block text-ink [--fw-off:600px] md:[--fw-off:575px]"
              style={{ width: 'min(100%, max(180px, calc((100svh - var(--fw-off)) * 2.99)))' }}
              aria-hidden
            />
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-ink/15 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70 md:py-5 md:text-[11px]">
              <span>© {new Date().getFullYear()} Seltiv. All rights reserved.</span>
              <span className="hidden sm:inline">Think growth. Think Seltiv.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
