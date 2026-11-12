'use client';

import { AnimatePresence, MotionConfig, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { capabilities } from '@/lib/content';
import styles from './ServicesMotion.module.css';

const SCENE_MS = 4600;
const E = [0.16, 1, 0.3, 1] as const;

const G = '#00e676';
const M = '#7cf5b4';
const LINE = '#1e2a23';
const EDGE = '#2a3930';
const S1 = '#0b120e';
const S2 = '#121c16';
const W = (a: number) => `rgba(255,255,255,${a})`;

/* ── tiny animation presets ── */
const rise = (delay: number, y = 12) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: E, delay },
});
const pop = (delay: number) => ({
  initial: { opacity: 0, scale: 0.4 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: 'spring' as const, stiffness: 420, damping: 20, delay },
});
const draw = (delay: number, duration = 0.9) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration, ease: 'easeInOut' as const, delay, opacity: { duration: 0.1, delay } },
});
/** Horizontal "typing / streaming" reveal from the left edge. */
const stream = (delay: number, duration = 0.6) => ({
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration, ease: 'linear' as const, delay },
  style: { originX: 0 },
});
const label = { fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: 0.9, fill: '#8a938d' } as const;

/* ── 01 · Websites & e-commerce: a storefront assembles, then gets its first order ── */
function WebScene() {
  const cards = [38, 124, 210];
  return (
    <>
      <defs>
        <linearGradient id="sm-web-img" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={G} stopOpacity="0.55" />
          <stop offset="1" stopColor={M} stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <motion.g {...rise(0, 16)}>
        <rect x="22" y="18" width="276" height="204" rx="12" fill={S1} stroke={EDGE} />
        <circle cx="36" cy="31" r="2.5" fill={G} />
        <circle cx="45" cy="31" r="2.5" fill={W(0.18)} />
        <circle cx="54" cy="31" r="2.5" fill={W(0.18)} />
        <rect x="110" y="25" width="100" height="12" rx="6" fill={S2} />
        <line x1="22" x2="298" y1="44" y2="44" stroke={LINE} />
        {/* cart */}
        <path d="M268 27h3l3 9h9l2-6h-12" fill="none" stroke={W(0.6)} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>

      <motion.rect {...rise(0.15)} x="38" y="58" width="122" height="10" rx="3" fill="#fff" />
      <motion.rect {...rise(0.22)} x="38" y="74" width="92" height="10" rx="3" fill={W(0.35)} />
      <motion.rect {...rise(0.3)} x="38" y="93" width="106" height="4" rx="2" fill={W(0.16)} />
      <motion.rect {...rise(0.34)} x="38" y="101" width="80" height="4" rx="2" fill={W(0.16)} />
      <motion.rect {...pop(0.55)} x="38" y="113" width="52" height="15" rx="7.5" fill={G} />

      <motion.g {...rise(0.28, 18)}>
        <rect x="184" y="56" width="98" height="72" rx="8" fill="url(#sm-web-img)" />
        <circle cx="258" cy="76" r="8" fill={W(0.5)} />
        <path d="M184 120l28-30 22 20 16-14 32 28v-4a8 8 0 0 1-8 8h-82a8 8 0 0 1-8-8z" fill={W(0.14)} />
      </motion.g>

      {cards.map((x, i) => (
        <motion.g key={x} {...rise(0.6 + i * 0.1, 18)}>
          <rect x={x} y="140" width="72" height="68" rx="8" fill={S2} stroke={LINE} />
          <rect x={x + 6} y="146" width="60" height="30" rx="5" fill={W(i === 1 ? 0.12 : 0.07)} />
          <rect x={x + 6} y="183" width="36" height="4" rx="2" fill={W(0.4)} />
          <rect x={x + 6} y="193" width="20" height="4" rx="2" fill={M} />
          <circle cx={x + 60} cy="194" r="6" fill={i === 1 ? G : 'none'} stroke={i === 1 ? G : EDGE} />
          <path d={`M${x + 57} 194h6M${x + 60} 191v6`} stroke={i === 1 ? '#050807' : W(0.4)} strokeWidth="1.3" strokeLinecap="round" />
        </motion.g>
      ))}

      {/* click on "add to cart" */}
      <motion.circle
        cx="184"
        cy="194"
        fill="none"
        stroke={G}
        strokeWidth="1.5"
        initial={{ r: 5, opacity: 0 }}
        animate={{ r: [5, 22], opacity: [0.9, 0] }}
        transition={{ duration: 0.9, delay: 2.15, repeat: 2, repeatDelay: 0.15, ease: 'easeOut' }}
      />
      <motion.g
        initial={{ x: 296, y: 236, opacity: 0 }}
        animate={{ x: [296, 200, 184], y: [236, 204, 194], opacity: [0, 1, 1] }}
        transition={{ duration: 1, delay: 1.15, ease: E }}
      >
        <path d="M0 0v14l3.6-3.4 2.9 6.4 2.6-1.2-2.9-6.2h5z" fill="#fff" stroke="#050807" strokeWidth="0.8" strokeLinejoin="round" />
      </motion.g>
      <motion.g {...pop(2.25)}>
        <circle cx="286" cy="26" r="6.5" fill={G} />
        <text x="286" y="28.6" textAnchor="middle" style={{ ...label, fill: '#050807', fontSize: 7.5, fontWeight: 600, letterSpacing: 0 }}>
          1
        </text>
      </motion.g>
    </>
  );
}

/* ── 02 · AI agents & automation: enquiries in, agent thinks, tools get called ── */
function AgentScene() {
  const inputs = [
    { y: 70, t: 'CHAT' },
    { y: 170, t: 'FORM' },
  ];
  const tools = [
    { y: 56, t: 'CRM' },
    { y: 120, t: 'CALENDAR' },
    { y: 184, t: 'EMAIL' },
  ];
  const inPath = (y: number) => `M80 ${y}C112 ${y} 108 120 138 120`;
  const outPath = (y: number) => `M182 120C214 120 208 ${y} 240 ${y}`;
  return (
    <>
      {inputs.map((n, i) => (
        <motion.path key={n.t} d={inPath(n.y)} fill="none" stroke={EDGE} strokeWidth="1.4" {...draw(0.35 + i * 0.12, 0.7)} />
      ))}
      {tools.map((n, i) => (
        <motion.path key={n.t} d={outPath(n.y)} fill="none" stroke={EDGE} strokeWidth="1.4" {...draw(0.8 + i * 0.12, 0.7)} />
      ))}

      {/* data pulses riding the wires */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.4 }}>
        {inputs.map((n, i) => (
          <circle key={n.t} r="3" fill={M}>
            <animateMotion dur="1.5s" begin={`${i * 0.75}s`} repeatCount="indefinite" path={inPath(n.y)} />
          </circle>
        ))}
        {tools.map((n, i) => (
          <circle key={n.t} r="3" fill={G}>
            <animateMotion dur="1.5s" begin={`${0.4 + i * 0.5}s`} repeatCount="indefinite" path={outPath(n.y)} />
          </circle>
        ))}
      </motion.g>

      {inputs.map((n, i) => (
        <motion.g key={n.t} {...rise(0.1 + i * 0.1)}>
          <rect x="18" y={n.y - 13} width="62" height="26" rx="13" fill={S2} stroke={EDGE} />
          <circle cx="32" cy={n.y} r="4" fill={W(0.3)} />
          <text x="42" y={n.y + 2.5} style={label}>
            {n.t}
          </text>
        </motion.g>
      ))}

      {/* agent core */}
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          cx="160"
          cy="120"
          r="26"
          fill="none"
          stroke={G}
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 2.1], opacity: [0.55, 0] }}
          transition={{ duration: 2.2, delay: 0.6 + i * 1.1, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
      <motion.g {...pop(0.25)}>
        <rect x="136" y="96" width="48" height="48" rx="14" fill={S1} stroke={G} strokeWidth="1.4" />
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i}
            x={148 + (i % 2) * 14}
            y={108 + Math.floor(i / 2) * 14}
            width="10"
            height="10"
            rx="3"
            fill={G}
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.2, delay: i * 0.18, repeat: Infinity }}
          />
        ))}
      </motion.g>
      <motion.text {...rise(0.5, 4)} x="160" y="160" textAnchor="middle" style={label}>
        AGENT
      </motion.text>

      {tools.map((n, i) => (
        <motion.g key={n.t} {...rise(0.7 + i * 0.1)}>
          <rect x="240" y={n.y - 13} width="64" height="26" rx="13" fill={S2} stroke={EDGE} />
          <text x="250" y={n.y + 2.5} style={label}>
            {n.t}
          </text>
          <motion.g {...pop(1.9 + i * 0.4)}>
            <circle cx="304" cy={n.y - 11} r="6.5" fill={G} />
            <path d={`M301 ${n.y - 11}l2.2 2.2 3.8-4.2`} fill="none" stroke="#050807" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>
        </motion.g>
      ))}
    </>
  );
}

/* ── 03 · Custom software: an operations dashboard fills with live data ── */
function SoftwareScene() {
  const bars = [26, 42, 34, 58, 50, 74, 92];
  return (
    <>
      <motion.g {...rise(0, 16)}>
        <rect x="22" y="18" width="276" height="204" rx="12" fill={S1} stroke={EDGE} />
        <line x1="76" x2="76" y1="18" y2="222" stroke={LINE} />
        <rect x="34" y="30" width="11" height="11" rx="3.5" fill={G} />
      </motion.g>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g key={i} {...rise(0.15 + i * 0.06, 6)}>
          {i === 1 && <rect x="30" y="72" width="38" height="14" rx="5" fill="rgba(0,230,118,0.12)" />}
          <rect x="35" y={60 + i * 17} width={[26, 28, 20, 24, 18][i]} height="4" rx="2" fill={i === 1 ? G : W(0.2)} />
        </motion.g>
      ))}

      {[0, 1, 2].map((i) => (
        <motion.g key={i} {...rise(0.3 + i * 0.1)}>
          <rect x={86 + i * 68} y="30" width="62" height="42" rx="8" fill={S2} stroke={LINE} />
          <rect x={94 + i * 68} y="39" width="22" height="3.5" rx="1.75" fill={W(0.25)} />
          <motion.rect {...stream(0.7 + i * 0.12, 0.5)} x={94 + i * 68} y="50" width={[34, 28, 38][i]} height="9" rx="2.5" fill="#fff" />
          <motion.path
            {...draw(0.9 + i * 0.12, 0.6)}
            d={`M${122 + i * 68} 64l5-3 4 2 5-7 4 2`}
            fill="none"
            stroke={i === 1 ? M : G}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      ))}

      <motion.g {...rise(0.55)}>
        <rect x="86" y="82" width="134" height="128" rx="8" fill={S2} stroke={LINE} />
        <rect x="96" y="92" width="34" height="4" rx="2" fill={W(0.3)} />
        {[0, 1, 2].map((i) => (
          <line key={i} x1="96" x2="210" y1={124 + i * 24} y2={124 + i * 24} stroke={W(0.06)} />
        ))}
      </motion.g>
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={98 + i * 16.5}
          y={198 - h}
          width="10"
          height={h}
          rx="3"
          fill={i === bars.length - 1 ? G : W(0.16)}
          style={{ originY: 1 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 1, 0.82, 1] }}
          transition={{ duration: 3, times: [0, 0.3, 0.6, 0.8, 1], ease: E, delay: 0.85 + i * 0.07 }}
        />
      ))}
      <motion.path
        {...draw(1.5, 0.9)}
        d="M103 166C120 150 136 160 152 140S186 128 202 100"
        fill="none"
        stroke={M}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <motion.g {...rise(0.65)}>
        <rect x="228" y="82" width="60" height="128" rx="8" fill={S2} stroke={LINE} />
        <circle cx="258" cy="114" r="18" fill="none" stroke={LINE} strokeWidth="7" />
      </motion.g>
      <motion.circle
        cx="258"
        cy="114"
        r="18"
        fill="none"
        stroke={G}
        strokeWidth="7"
        strokeLinecap="round"
        transform="rotate(-90 258 114)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 0.72, opacity: 1 }}
        transition={{ duration: 1.3, ease: E, delay: 1, opacity: { duration: 0.1, delay: 1 } }}
      />
      {[0, 1, 2].map((i) => (
        <motion.g key={i} {...rise(1.3 + i * 0.12, 6)}>
          <rect x="237" y={150 + i * 18} width="6" height="6" rx="2" fill={[G, M, W(0.25)][i]} />
          <rect x="248" y={151 + i * 18} width={[30, 22, 26][i]} height="4" rx="2" fill={W(0.22)} />
        </motion.g>
      ))}
    </>
  );
}

/* ── 04 · AI products: a model core streams an answer back to a prompt ── */
function AiScene() {
  const lines = [176, 192, 150, 96];
  const chips = [
    { x: 46, y: 44, t: 'TEXT', w: 38 },
    { x: 236, y: 36, t: 'VISION', w: 46 },
    { x: 240, y: 78, t: 'VOICE', w: 42 },
  ];
  return (
    <>
      <defs>
        <radialGradient id="sm-ai-orb">
          <stop offset="0" stopColor={M} />
          <stop offset="0.55" stopColor={G} stopOpacity="0.55" />
          <stop offset="1" stopColor={G} stopOpacity="0" />
        </radialGradient>
      </defs>

      <motion.g {...pop(0.05)}>
        <motion.circle cx="160" cy="62" r="30" fill="url(#sm-ai-orb)" animate={{ scale: [1, 1.16, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.circle
          cx="160"
          cy="62"
          r="36"
          fill="none"
          stroke={G}
          strokeWidth="1.2"
          strokeDasharray="3 9"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="160"
          cy="62"
          r="45"
          fill="none"
          stroke={W(0.14)}
          strokeDasharray="1 7"
          strokeLinecap="round"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M160 48c1.6 8.6 5.4 12.4 14 14-8.6 1.6-12.4 5.4-14 14-1.6-8.6-5.4-12.4-14-14 8.6-1.6 12.4-5.4 14-14z"
          fill="#050807"
          animate={{ rotate: [0, 90], scale: [1, 0.8, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.g>

      {chips.map((c, i) => (
        <motion.g key={c.t} {...pop(0.35 + i * 0.12)}>
          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}>
            <rect x={c.x} y={c.y} width={c.w} height="17" rx="8.5" fill={S2} stroke={EDGE} />
            <text x={c.x + c.w / 2} y={c.y + 11.2} textAnchor="middle" style={label}>
              {c.t}
            </text>
          </motion.g>
        </motion.g>
      ))}

      <motion.g {...rise(0.5, 16)}>
        <rect x="50" y="110" width="220" height="74" rx="11" fill={S1} stroke={EDGE} />
      </motion.g>
      {lines.map((w, i) => (
        <motion.rect key={i} {...stream(1.5 + i * 0.42, 0.42)} x="64" y={123 + i * 13} width={w} height="5" rx="2.5" fill={i === 0 ? W(0.85) : W(0.28)} />
      ))}
      <motion.rect
        x="165"
        y="160"
        width="4"
        height="9"
        rx="1"
        fill={G}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
        transition={{ duration: 1.5, delay: 3.2 }}
      />

      <motion.g {...rise(0.65, 16)}>
        <rect x="50" y="194" width="220" height="28" rx="14" fill={S2} stroke={EDGE} />
      </motion.g>
      <motion.rect {...stream(0.85, 0.55)} x="66" y="206" width="104" height="4" rx="2" fill={W(0.5)} />
      <motion.g {...pop(1.35)}>
        <circle cx="254" cy="208" r="9.5" fill={G} />
        <path d="M254 212.5v-9m-3.6 3.6 3.6-3.6 3.6 3.6" fill="none" stroke="#050807" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </>
  );
}

/* ── 05 · SaaS platforms: recurring revenue climbs, plans and seats fill up ── */
function SaasScene() {
  const curve = 'M38 124C66 120 84 108 112 104S156 90 186 78 246 64 280 46';
  return (
    <>
      <defs>
        <linearGradient id="sm-saas-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={G} stopOpacity="0.32" />
          <stop offset="1" stopColor={G} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.g {...rise(0, 16)}>
        <rect x="22" y="16" width="276" height="126" rx="12" fill={S1} stroke={EDGE} />
        <text x="38" y="36" style={label}>
          MRR
        </text>
        {[0, 1, 2].map((i) => (
          <line key={i} x1="38" x2="282" y1={70 + i * 24} y2={70 + i * 24} stroke={W(0.06)} />
        ))}
      </motion.g>
      <motion.rect {...stream(0.4, 0.5)} x="38" y="43" width="46" height="10" rx="3" fill="#fff" />

      {[0, 1, 2, 3].map((i) => (
        <motion.circle key={i} {...pop(1.1 + i * 0.14)} cx={242 + i * 12} cy="33" r="7.5" fill={[W(0.22), M, W(0.4), G][i]} stroke={S1} strokeWidth="2" />
      ))}

      <motion.path d={`${curve}V132H38z`} fill="url(#sm-saas-area)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }} />
      <motion.path {...draw(0.5, 1.5)} d={curve} fill="none" stroke={G} strokeWidth="2.2" strokeLinecap="round" />
      <motion.circle
        cx="280"
        cy="46"
        r="5"
        fill="none"
        stroke={G}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 3], opacity: [0.8, 0] }}
        transition={{ duration: 1.4, delay: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.circle {...pop(1.9)} cx="280" cy="46" r="4.5" fill="#fff" stroke={G} strokeWidth="2" />

      {[0, 1, 2].map((i) => {
        const hot = i === 1;
        const x = 22 + i * 96;
        return (
          <motion.g key={i} {...rise(0.9 + i * 0.12, 20)}>
            <motion.g animate={hot ? { y: [0, -7, -7] } : undefined} transition={{ duration: 0.8, delay: 2.1, ease: E }}>
              <rect x={x} y="154" width="84" height="70" rx="10" fill={hot ? 'rgba(0,230,118,0.09)' : S2} stroke={hot ? G : LINE} strokeWidth={hot ? 1.4 : 1} />
              <rect x={x + 10} y="164" width="24" height="4" rx="2" fill={W(0.3)} />
              <rect x={x + 10} y="174" width={[28, 36, 32][i]} height="9" rx="2.5" fill="#fff" />
              {[0, 1].map((r) => (
                <g key={r}>
                  <circle cx={x + 12} cy={193 + r * 9} r="2" fill={hot ? G : W(0.3)} />
                  <rect x={x + 18} y={191 + r * 9} width={[38, 30][r]} height="4" rx="2" fill={W(0.16)} />
                </g>
              ))}
              <rect x={x + 10} y="209" width="64" height="9" rx="4.5" fill={hot ? G : W(0.1)} />
            </motion.g>
          </motion.g>
        );
      })}
    </>
  );
}

const SCENES = [WebScene, AgentScene, SoftwareScene, AiScene, SaasScene];

/** Looping motion graphic of the five services, sized entirely by its container. */
export default function ServicesMotion() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '0px 0px -15% 0px' });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const playing = inView && !reduce && !hold;

  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => setActive((n) => (n + 1) % capabilities.length), SCENE_MS);
    return () => clearTimeout(id);
  }, [active, playing]);

  const Scene = SCENES[active];
  const current = capabilities[active];

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={ref}
        className={styles.root}
        role="group"
        aria-label="What Seltiv delivers"
        onPointerEnter={(e) => e.pointerType === 'mouse' && setHold(true)}
        onPointerLeave={() => setHold(false)}
      >
        <div className={styles.glow} aria-hidden />
        <div className={styles.grid} aria-hidden />

        <div className={styles.head}>
          <span className={styles.live}>
            <span className={styles.dot} />
            What we deliver
          </span>
          <span className={styles.count}>
            <b>{current.index}</b> / {String(capabilities.length).padStart(2, '0')}
          </span>
        </div>

        <div className={styles.stage} aria-hidden>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.scene}
              initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: E }}
            >
              <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid meet">
                <Scene />
              </svg>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.compact} aria-hidden>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={active}
              className={styles.compactName}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: E }}
            >
              {current.title}
            </motion.span>
          </AnimatePresence>
          <span className={styles.from}>
            from <b>{current.from}</b>
          </span>
        </div>

        <div className={styles.list}>
          {capabilities.map((c, i) => (
            <button
              key={c.slug}
              type="button"
              className={styles.item}
              data-active={i === active}
              data-done={i < active}
              aria-label={`${c.title}, from ${c.from}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <span className={styles.idx}>{c.index}</span>
              <span className={styles.name}>{c.title}</span>
              <span className={styles.from}>
                from <b>{c.from}</b>
              </span>
              {i === active && (
                <motion.span
                  key={`${active}-${playing}`}
                  className={styles.bar}
                  initial={{ scaleX: playing ? 0 : 1 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: playing ? SCENE_MS / 1000 : 0, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}
