/**
 * Illustrazioni vettoriali decorative (aria-hidden), pensate per fondali
 * scuri. Usano la palette del sito e si adattano via CSS. Niente raster:
 * tutto scalabile e leggero.
 */

/** Crinale stilizzato delle Dolomiti, a strati. */
export function DolomitesRidge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 320"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <path
        d="M0 320 L0 190 L120 150 L210 205 L300 120 L380 175 L470 90 L560 165 L650 70 L760 150 L860 100 L960 170 L1060 120 L1140 175 L1200 140 L1200 320 Z"
        fill="rgba(47,107,63,0.18)"
      />
      <path
        d="M0 320 L0 235 L100 205 L200 250 L300 185 L420 240 L520 180 L620 235 L720 175 L820 230 L920 185 L1020 235 L1120 195 L1200 230 L1200 320 Z"
        fill="rgba(18,23,26,0.9)"
      />
      <path
        d="M0 320 L0 270 L160 255 L320 285 L480 250 L640 285 L800 255 L960 288 L1120 258 L1200 280 L1200 320 Z"
        fill="rgba(12,15,16,1)"
      />
    </svg>
  );
}

/** Linee topografiche: evocano territorio e movimento. */
export function Topo({ className = "" }: { className?: string }) {
  const lines = [40, 80, 120, 160, 200, 240, 280, 320];
  return (
    <svg
      className={className}
      viewBox="0 0 1200 360"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map((y, i) => (
        <path
          key={y}
          d={`M-20 ${y} C 200 ${y - 38 - i * 2}, 420 ${y + 30}, 640 ${y - 18}
              S 1040 ${y + 34}, 1220 ${y - 10}`}
          fill="none"
          stroke="rgba(192,99,58,0.16)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

/** Fasci di luce dei riflettori dall'alto. */
export function Beams({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(244,239,230,0.16)" />
          <stop offset="1" stopColor="rgba(244,239,230,0)" />
        </linearGradient>
      </defs>
      <polygon points="180,-40 360,-40 280,640 60,640" fill="url(#beam)" />
      <polygon points="640,-40 820,-40 900,640 700,640" fill="url(#beam)" />
      <polygon points="980,-40 1120,-40 1240,560 1080,560" fill="url(#beam)" />
    </svg>
  );
}

/** Grande stemma drago in filigrana (watermark). */
export function DragonWatermark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g transform="rotate(35 60 60)" opacity="0.9">
        <ellipse cx="60" cy="60" rx="28" ry="40" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <line x1="60" y1="28" x2="60" y2="92" stroke="currentColor" strokeWidth="2.4" />
        <line x1="51" y1="44" x2="69" y2="44" stroke="currentColor" strokeWidth="1.8" />
        <line x1="51" y1="58" x2="69" y2="58" stroke="currentColor" strokeWidth="1.8" />
        <line x1="51" y1="72" x2="69" y2="72" stroke="currentColor" strokeWidth="1.8" />
      </g>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M30 18 L58 30 L46 34 L66 40 L52 46 L72 54 Q60 60 48 56 L40 64 L42 50 L26 44 L40 38 L24 32 L40 30 Z"
      />
    </svg>
  );
}

/** Pattern linee di campo da rugby (decorativo). */
export function FieldLines({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="rgba(244,239,230,0.10)" strokeWidth="2" fill="none">
        <line x1="150" y1="0" x2="150" y2="600" />
        <line x1="350" y1="0" x2="350" y2="600" />
        <line x1="600" y1="0" x2="600" y2="600" stroke="rgba(192,99,58,0.22)" />
        <line x1="850" y1="0" x2="850" y2="600" />
        <line x1="1050" y1="0" x2="1050" y2="600" />
      </g>
    </svg>
  );
}
