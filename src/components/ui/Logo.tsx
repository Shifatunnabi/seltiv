// Seltiv "S" mark, redrawn as vector geometry from the brand icon.
// Two identical interlocking pieces (one rotated 180°) + a centre block.

export const MARK_PIECE =
  'M32 0H93Q100 0 100 7V18.7Q100 25.7 93 25.7H32.7Q25.7 25.7 25.7 32.7V43.5Q25.7 50.5 18.7 50.5H7Q0 50.5 0 43.5V31.8Q0 24.8 7 24.8H18Q25 24.8 25 17.8V7Q25 0 32 0Z';

export function Mark({ size = 28, color = 'currentColor', className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`mark overflow-visible ${className}`} aria-hidden>
      <path className="mark-a" d={MARK_PIECE} fill={color} />
      <g transform="rotate(180 50 50)">
        <path className="mark-b" d={MARK_PIECE} fill={color} />
      </g>
      <rect className="mark-c" x="37.2" y="37.2" width="25.6" height="25.6" rx="3.6" fill={color} />
    </svg>
  );
}

export default function Logo({ height = 22, className = '' }: { height?: number; className?: string }) {
  return (
    <span className={`mark-host inline-flex items-center gap-2.5 ${className}`} aria-label="Seltiv">
      <Mark size={height * 1.15} color="var(--color-signal)" />
      <span className="wordmark text-white" style={{ height }} />
    </span>
  );
}
