'use client';

import { useEffect, useRef } from 'react';

/**
 * Interactive canvas: a grid of rounded blocks. The Seltiv "S" is assembled
 * from the blocks (echoing the block construction of the logo). Blocks near the
 * pointer light up and the S cells drift away from it.
 */

const S_RES = 16; // cells across the S mark

// Logo geometry in 0–100 units (see components/ui/Logo.tsx)
const RECTS: [number, number, number, number][] = [
  [25, 0, 100, 25.7], // top bar
  [0, 24.8, 25.7, 50.5], // left block
  [37.2, 37.2, 62.8, 62.8], // centre block
  [74.3, 49.5, 100, 75.2], // right block
  [0, 74.3, 75, 100], // bottom bar
];

function inS(u: number, v: number) {
  return RECTS.some(([x0, y0, x1, y1]) => u >= x0 && u <= x1 && v >= y0 && v <= y1);
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

type Cell = { cx: number; cy: number; s: boolean; seed: number; born: number; glow: number };

export default function BlockField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cells: Cell[] = [];
    let pitch = 24;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const start = performance.now();
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mobile = w < 768;
      const sSize = mobile ? 160 : Math.min(360, h * 0.42, w * 0.3);
      pitch = Math.max(10, Math.floor(sSize / S_RES));
      const sPx = pitch * S_RES;

      const cols = Math.ceil(w / pitch) + 1;
      const rows = Math.ceil(h / pitch) + 1;
      // S anchor (snapped to grid): own row under the header on mobile,
      // aligned to the content's right edge on desktop
      const sx0 = Math.round((mobile ? 20 : w - 48 - sPx) / pitch);
      const sy0 = Math.round((mobile ? 36 : Math.max(48, h * 0.09)) / pitch);

      cells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const lc = c - sx0;
          const lr = r - sy0;
          let s = false;
          if (lc >= 0 && lc < S_RES && lr >= 0 && lr < S_RES) {
            s = inS(((lc + 0.5) / S_RES) * 100, ((lr + 0.5) / S_RES) * 100);
          }
          cells.push({
            cx: c * pitch + pitch / 2,
            cy: r * pitch + pitch / 2,
            s,
            seed: Math.random(),
            born: s ? 300 + Math.random() * 1100 : Math.random() * 900,
            glow: 0,
          });
        }
      }
    };

    const draw = (now: number) => {
      const t = reduce ? 1e6 : now - start;
      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;
      ctx.clearRect(0, 0, w, h);

      const size = pitch * 0.78;
      const radius = size * 0.24;
      const R = pitch * 5.5;

      for (const cell of cells) {
        const life = Math.min(1, Math.max(0, (t - cell.born) / 700));
        if (life <= 0) continue;
        const ease = 1 - Math.pow(1 - life, 3);

        const dx = cell.cx - pointer.x;
        const dy = cell.cy - pointer.y;
        const d = Math.hypot(dx, dy);
        const near = pointer.active ? Math.max(0, 1 - d / R) : 0;
        cell.glow += (near - cell.glow) * 0.08;

        const wave = Math.sin(t * 0.0012 - (cell.cx + cell.cy) * 0.006 + cell.seed * 2) * 0.5 + 0.5;

        let ox = 0;
        let oy = 0;
        if (cell.s && d > 0 && near > 0) {
          const push = near * near * pitch * 0.9;
          ox = (dx / d) * push;
          oy = (dy / d) * push;
        }

        const sz = size * (cell.s ? 0.6 + 0.4 * ease : ease * (0.55 + cell.glow * 0.4));
        const x = cell.cx - sz / 2 + ox;
        const y = cell.cy - sz / 2 + oy;

        if (cell.s) {
          const a = (0.72 + wave * 0.28) * ease;
          ctx.fillStyle = `rgba(0, 230, 118, ${a})`;
        } else {
          const base = 0.022 + wave * 0.028;
          const g = cell.glow;
          if (g > 0.02) {
            ctx.fillStyle = `rgba(0, 230, 118, ${(base + g * 0.45) * ease})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${base * ease})`;
          }
        }
        roundRect(ctx, x, y, sz, sz, radius * (sz / size));
        ctx.fill();
      }

      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - r.left;
      pointer.ty = e.clientY - r.top;
      if (!pointer.active) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      pointer.active = e.clientY >= r.top && e.clientY <= r.bottom;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    build();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      build();
      if (reduce) draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was && !reduce) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} aria-hidden />;
}
