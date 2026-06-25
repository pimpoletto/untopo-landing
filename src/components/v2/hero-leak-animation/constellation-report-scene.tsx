/**
 * Scène v6 — carte terrain (gauche) → itinéraire / loading → rapport (droite).
 * Pipeline visuel inspiré Sentry : profondeur, flux, carte produit flottante.
 */
import {
  OGF_FUITE_POS,
  OGF_ROUTE_PATH,
  OGF_STREETS,
} from "@/components/v2/hero-leak-animation/archived/city-constellation/ogf-city-network";

const REPORT_LINES = [
  { y: 36, w: 52 },
  { y: 50, w: 64 },
  { y: 64, w: 44 },
  { y: 78, w: 58 },
  { y: 92, w: 38 },
] as const;

export function HeroConstellationReportScene() {
  const [fuiteX, fuiteY] = OGF_FUITE_POS;

  return (
    <div className="hero-constellation hero-constellation--v6">
      <div className="hero-constellation__glow hero-v6__glow" aria-hidden />
      <div className="hero-constellation__dots" aria-hidden />

      <svg
        viewBox="0 0 1000 400"
        className="hero-constellation__canvas hero-v6__canvas"
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Itinéraire terrain et génération du rapport"
      >
        <defs>
          <linearGradient id="hero-v6-route" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#5ea2f9" />
          </linearGradient>
          <linearGradient id="hero-v6-route-light" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="hero-v6-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(199 89% 58% / 0)" />
            <stop offset="40%" stopColor="hsl(199 89% 58% / 0.55)" />
            <stop offset="100%" stopColor="hsl(160 84% 55% / 0.35)" />
          </linearGradient>
          <filter id="hero-v6-neon" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero-v6-report-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="hsl(219 79% 57% / 0.2)" />
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="hsl(199 89% 48% / 0.12)" />
          </filter>
          <radialGradient id="hero-v6-fuite-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(199 89% 58% / 0.22)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="hero-v6-fuite-glow-light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(199 89% 48% / 0.16)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Carte — calque gauche, atténué */}
        <g className="hero-v6__map" transform="translate(8, 6) scale(0.9)">
          <g className="hero-constellation__streets" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {OGF_STREETS.map((street, i) => (
              <path key={`street-${i}`} d={street.d} className="hero-constellation__street" data-weight={street.weight} />
            ))}
          </g>

          <circle cx={fuiteX} cy={fuiteY} r="88" className="hero-v6__fuite-halo" fill="url(#hero-v6-fuite-glow)" />

          <g className="hero-constellation__ripples hero-v6__ripples" transform={`translate(${fuiteX} ${fuiteY})`}>
            <circle className="hero-constellation__ripple hero-constellation__ripple--1" r="10" />
            <circle className="hero-constellation__ripple hero-constellation__ripple--2" r="10" />
          </g>

          <path
            d={OGF_ROUTE_PATH}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hero-v6__route-track"
          />
          <path
            d={OGF_ROUTE_PATH}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hero-constellation__route hero-v6__route"
            pathLength={100}
          />

          <circle r="5" className="hero-v6__route-head" filter="url(#hero-v6-neon)">
            <animateMotion dur="10s" repeatCount="indefinite" path={OGF_ROUTE_PATH} calcMode="spline" keyTimes="0;0.08;0.82;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" keyPoints="0;0.02;1;1" />
          </circle>

          <g className="hero-v6__fuite" transform={`translate(${fuiteX} ${fuiteY})`}>
            <circle className="hero-constellation__core" r="4" filter="url(#hero-v6-neon)" />
            <path d="M 0 -12 L 3.5 -5 L 0 -3.5 L -3.5 -5 Z" className="hero-constellation__fuite-pin" />
          </g>
        </g>

        {/* Flux terrain → rapport */}
        <path
          d={`M ${fuiteX - 8} ${fuiteY - 4} Q ${fuiteX - 60} ${fuiteY - 50}, 770 118`}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          className="hero-v6__beam"
          pathLength={100}
        />

        {/* Rapport — panneau flottant à droite */}
        <g transform="translate(768, 68)">
          <g className="hero-v6__report-float" filter="url(#hero-v6-report-shadow)">
            <rect x="0" y="0" width="92" height="116" rx="11" className="hero-v6__report-bg" />
            <rect x="0" y="0" width="92" height="24" rx="11" className="hero-v6__report-header" />
            <rect x="0" y="14" width="92" height="10" className="hero-v6__report-header-fill" />

            <text x="14" y="16" className="hero-v6__report-title" fontSize="8" fontWeight="700" letterSpacing="0.06em">
              RAPPORT
            </text>

            <g className="hero-v6__report-check" transform="translate(72, 12)">
              <circle r="10" className="hero-v6__report-check-bg" />
              <circle r="10" className="hero-v6__report-check-ring" fill="none" />
              <path d="M -3.5 0 L -1 2.5 L 4 -2.5" className="hero-v6__report-check-mark" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            <g className="hero-v6__report-ghost">
              {REPORT_LINES.map((line) => (
                <line key={`ghost-${line.y}`} x1="14" y1={line.y} x2={14 + line.w} y2={line.y} className="hero-v6__report-line-ghost" />
              ))}
            </g>

            <g className="hero-v6__report-fill">
              {REPORT_LINES.map((line, i) => (
                <line
                  key={`fill-${line.y}`}
                  x1="14"
                  y1={line.y}
                  x2={14 + line.w}
                  y2={line.y}
                  className={`hero-v6__report-line hero-v6__report-line--${i + 1}`}
                  pathLength={100}
                />
              ))}
            </g>

            <g transform="translate(14, 102)">
              <rect x="0" y="0" width="64" height="4" rx="2" className="hero-v6__report-progress-track" />
              <rect x="0" y="0" width="64" height="4" rx="2" className="hero-v6__report-progress-fill" />
            </g>
          </g>
        </g>
      </svg>

      <span className="hero-constellation__particle hero-v6__particle hero-v6__particle--1" aria-hidden />
      <span className="hero-constellation__particle hero-v6__particle hero-v6__particle--2" aria-hidden />
    </div>
  );
}
