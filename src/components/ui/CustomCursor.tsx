'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pointerImgRef = useRef<HTMLImageElement>(null);
  const grabImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      const t = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (cursorRef.current) {
        cursorRef.current.style.transform = t;
        cursorRef.current.style.opacity = '1';
      }
      if (glowRef.current) {
        glowRef.current.style.transform = t;
        glowRef.current.style.opacity = '1';
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive = !!el.closest('a, button, [role="button"], input, textarea, select, label');
      if (pointerImgRef.current) pointerImgRef.current.style.display = isInteractive ? 'none' : 'block';
      if (grabImgRef.current) grabImgRef.current.style.display = isInteractive ? 'block' : 'none';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-img" aria-hidden="true">
        <img ref={pointerImgRef} src="/pointer.png" alt="" draggable={false} />
        <img ref={grabImgRef} src="/grab.png" alt="" draggable={false} style={{ display: 'none' }} />
      </div>
    </>
  );
}
