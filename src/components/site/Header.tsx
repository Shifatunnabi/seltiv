'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/components/ui/Logo';
import { Arrow } from '@/components/ui/Button';
import { CONTACT_EMAIL, PHONES, capabilities, nav } from '@/lib/content';

const EASE = [0.76, 0, 0.24, 1] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 300 && y > prev && !open);
  });

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const menuBtn = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    const bg = Array.from(document.querySelectorAll<HTMLElement>('body > main, body > div:not([id]), body > footer'));
    const btn = menuBtn.current;
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = 'hidden';
      bg.forEach((el) => el.setAttribute('inert', ''));
      const t = setTimeout(() => menuRef.current?.querySelector<HTMLElement>('a')?.focus(), 80);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
        if (e.key === 'Tab' && menuRef.current) {
          const f = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a, button'));
          const all = [btn!, ...f];
          const idx = all.indexOf(document.activeElement as HTMLElement);
          const next = e.shiftKey ? (idx <= 0 ? all.length - 1 : idx - 1) : idx === all.length - 1 ? 0 : idx + 1;
          e.preventDefault();
          all[next]?.focus();
        }
      };
      window.addEventListener('keydown', onKey);
      return () => {
        clearTimeout(t);
        window.removeEventListener('keydown', onKey);
        bg.forEach((el) => el.removeAttribute('inert'));
        document.documentElement.style.overflow = '';
        lenis?.start();
        btn?.focus({ preventScroll: true });
      };
    }
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div
          className={`wrap flex h-[72px] items-center justify-between transition-colors duration-500 ${
            scrolled && !open ? 'bg-ink/70 backdrop-blur-xl' : ''
          }`}
          style={{ maxWidth: 'none' }}
        >
          <Link href="/" aria-label="Seltiv home" className="relative z-10">
            <Logo height={18} />
          </Link>

          <div className="relative z-10 flex items-center gap-2">
            <span className="hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-sans text-xs font-medium tracking-[0.01em] text-fog md:inline-flex">
              <span className="live-dot" />
              Accepting new projects
            </span>
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-signal sm:inline-flex"
            >
              Book a call
            </Link>
            <button
              ref={menuBtn}
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-4 pr-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:border-white/30"
            >
              {open ? 'Close' : 'Menu'}
              <span className="menu-dots relative grid h-3.5 w-3.5 grid-cols-2 gap-[3px]" data-open={open}>
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="rounded-[1.5px] bg-current transition-transform duration-500"
                    style={{
                      transform: open
                        ? `translate(${i % 2 === 0 ? 2.5 : -2.5}px, ${i < 2 ? 2.5 : -2.5}px) rotate(45deg)`
                        : undefined,
                      transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                    }}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-surface"
            data-lenis-prevent
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="wrap grid min-h-full grid-cols-1 gap-12 pb-10 pt-28 lg:grid-cols-12">
              <nav className="lg:col-span-7" aria-label="Main">
                <ul>
                  {[{ label: 'Home', href: '/' }, ...nav].map((item, i) => (
                    <li key={item.href} className="overflow-hidden border-b border-line">
                      <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.6, delay: 0.12 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          className="group flex items-baseline justify-between py-3 md:py-4"
                        >
                          <span className="display text-[clamp(2.6rem,7vw,6rem)] text-white transition-[color,transform] duration-500 group-hover:translate-x-3 group-hover:text-signal">
                            {item.label}
                          </span>
                          <span className="font-mono text-xs text-muted">0{i + 1}</span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>

              <motion.aside
                className="flex flex-col justify-between gap-10 lg:col-span-4 lg:col-start-9"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <p className="eyebrow mb-5">What we build</p>
                  <ul className="space-y-2.5">
                    {capabilities.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/services/${c.slug}`} className="link-u text-lg text-fog hover:text-white">
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="eyebrow mb-3">Talk to us</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="link-u block text-2xl text-white">
                      {CONTACT_EMAIL}
                    </a>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                      {PHONES.map((p) => (
                        <a key={p.raw} href={`tel:${p.raw}`} className="link-u text-fog">
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="btn btn-primary">
                    <span>Book an intro call</span>
                    <span className="btn-icon">
                      <Arrow />
                    </span>
                  </Link>
                </div>
              </motion.aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
