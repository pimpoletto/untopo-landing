/**
 * Scène constellation / HUD — réseau routier Gobras City (OpenGeofiction).
 */
import {
  OGF_CAR_POS,
  OGF_CAR_ROTATE,
  OGF_FUITE_POS,
  OGF_ROUTE_PATH,
  OGF_ROUTE_WAYPOINTS,
  OGF_STREETS,
} from "@/components/v2/hero-leak-animation/archived/city-constellation/ogf-city-network";


function HudReticle({ r, className }: { r: number; className?: string }) {
  return (
    <g className={className}>
      <circle r={r} fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
      <circle r={r * 0.72} fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" strokeDasharray="3 5" />
      <line x1={-r} y1={0} x2={r} y2={0} stroke="currentColor" strokeWidth="0.35" opacity="0.25" />
      <line x1={0} y1={-r} x2={0} y2={r} stroke="currentColor" strokeWidth="0.35" opacity="0.25" />
    </g>
  );
}

export function HeroConstellationScene() {
  const [carX, carY] = OGF_CAR_POS;
  const [fuiteX, fuiteY] = OGF_FUITE_POS;

  return (
    <div className="hero-constellation">
      <div className="hero-constellation__glow" aria-hidden />
      <div className="hero-constellation__dots" aria-hidden />

      <svg
        viewBox="0 0 1000 400"
        className="hero-constellation__canvas"
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Carte ville : itinéraire vers une fuite signalée"
      >
        <defs>
          <linearGradient id="hero-constellation-route" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="55%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="hero-constellation-route-light" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="hero-constellation-neon" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="hero-constellation-fuite-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(199 89% 58% / 0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="hero-constellation-fuite-glow-light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(199 89% 48% / 0.28)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <g className="hero-constellation__streets" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {OGF_STREETS.map((street, i) => (
            <path
              key={`street-${i}`}
              d={street.d}
              className="hero-constellation__street"
              data-weight={street.weight}
            />
          ))}
        </g>

        <circle
          cx={fuiteX}
          cy={fuiteY}
          r="120"
          className="hero-constellation__fuite-halo hero-constellation__fuite-halo-bg"
        />

        <g className="hero-constellation__ripples" transform={`translate(${fuiteX} ${fuiteY})`}>
          <circle className="hero-constellation__ripple hero-constellation__ripple--1" r="14" />
          <circle className="hero-constellation__ripple hero-constellation__ripple--2" r="14" />
          <circle className="hero-constellation__ripple hero-constellation__ripple--3" r="14" />
        </g>

        {/* Itinéraire surligné — suit les vraies rues du réseau */}
        <path
          d={OGF_ROUTE_PATH}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-constellation__route-halo"
        />
        <path
          id="hero-constellation-route-path"
          d={OGF_ROUTE_PATH}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-constellation__route"
          pathLength={100}
        />

        {OGF_ROUTE_WAYPOINTS.map(([x, y]) => (
          <g key={`node-${x}-${y}`} className="hero-constellation__waypoint">
            <circle cx={x} cy={y} r="4" className="hero-constellation__waypoint-core" filter="url(#hero-constellation-neon)" />
            <circle cx={x} cy={y} r="7" className="hero-constellation__waypoint-ring" strokeWidth="0.5" />
          </g>
        ))}

        <g className="hero-constellation__vehicle" transform={`translate(${carX} ${carY}) rotate(${OGF_CAR_ROTATE})`}>
          <HudReticle r={26} className="hero-constellation__hud-spin" />
          <path d="M -5 -10 L 7 0 L -5 4 L -2 0 Z" className="hero-constellation__vehicle-arrow" filter="url(#hero-constellation-neon)" />
        </g>

        <g className="hero-constellation__fuite" transform={`translate(${fuiteX} ${fuiteY})`}>
          <HudReticle r={30} className="hero-constellation__hud-pulse" />
          <circle className="hero-constellation__core" r="5" filter="url(#hero-constellation-neon)" />
          <circle className="hero-constellation__core-dot" r="2" />
          <path d="M 0 -16 L 5 -7 L 0 -5 L -5 -7 Z" className="hero-constellation__fuite-pin" />
          <g className="hero-constellation__fuite-label" transform="translate(-36, -38)">
            <rect x="0" y="0" width="72" height="20" rx="3" className="hero-constellation__fuite-label-bg" strokeWidth="0.75" />
            <text x="36" y="13" className="hero-constellation__fuite-label-text" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">
              FUITE
            </text>
          </g>
          <text x="0" y="48" className="hero-constellation__fuite-coords" fontSize="7" fontFamily="var(--font-geist-mono), monospace" textAnchor="middle">
            {"48°51'24\"N"}
          </text>
        </g>
      </svg>

      <span className="hero-constellation__particle hero-constellation__particle--1" aria-hidden />
      <span className="hero-constellation__particle hero-constellation__particle--2" aria-hidden />
      <span className="hero-constellation__particle hero-constellation__particle--3" aria-hidden />
    </div>
  );
}
