'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function hashTarget(hash: string) {
  if (!hash || hash === '#') return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const historyDestination = useRef<string | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    // Back/forward keeps the router's restored position; clicked routes start fresh.
    const fromHistory = historyDestination.current === pathname;
    historyDestination.current = null;
    const settle = () => {
      const target = fromHistory ? window.scrollY : hashTarget(window.location.hash) ?? 0;
      const lenis = lenisRef.current;
      if (lenis) {
        const wasStopped = lenis.isStopped;
        lenis.stop(); // Discard the previous page's momentum and animation target.
        lenis.resize();
        lenis.scrollTo(target, { immediate: true, force: true });
        if (!wasStopped) lenis.start();
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, left: 0, behavior: 'instant' });
      } else {
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    };

    settle();
    const main = document.querySelector('main');
    const animation = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? main?.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 420,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        })
      : undefined;

    // Layout measurements (including the pinned homepage work track) can update
    // during the commit. Sync dimensions once more before the following frame.
    const frame = requestAnimationFrame(() => {
      settle();
      ScrollTrigger.refresh();
    });
    return () => {
      cancelAnimationFrame(frame);
      animation?.cancel();
    };
  }, [pathname]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = reduce ? null : new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    const tick = (time: number) => lenis?.raf(time * 1000);
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    // Keep section links smooth, including full same-page URLs. Leave external,
    // new-tab, download and modified clicks to the browser.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!a || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
      const url = new URL(a.href);
      if (url.origin !== window.location.origin) return;
      historyDestination.current = null;
      if (url.pathname !== window.location.pathname) return;

      if (url.hash) {
        const target = hashTarget(url.hash);
        if (!target) return;
        e.preventDefault();
        if (url.href !== window.location.href) window.history.pushState(null, '', url.href);
        if (lenis) lenis.scrollTo(target, { offset: -20, force: true });
        else target.scrollIntoView({ block: 'start', behavior: 'instant' });
      } else {
        if (lenis) lenis.scrollTo(0, { duration: 0.7, force: true });
        else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };
    const onPopState = () => {
      historyDestination.current = window.location.pathname;
    };
    document.addEventListener('click', onClick, true);
    window.addEventListener('popstate', onPopState);

    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onPopState);
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
