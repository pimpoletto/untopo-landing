/**
 * Scène v4 — carte terrain + transformation en rapport professionnel.
 * Pipeline : Intervention → Documentation → PDF envoyé
 */
import {
  OGF_CAR_POS,
  OGF_CAR_ROTATE,
  OGF_FUITE_POS,
  OGF_ROUTE_PATH,
  OGF_ROUTE_WAYPOINTS,
  OGF_STREETS,
} from "@/components/v2/hero-leak-animation/archived/city-constellation/ogf-city-network";

const PIPELINE = [
  { id: 1, label: "Intervention" },
  { id: 2, label: "Documentation" },
  { id: 3, label: "PDF envoyé" },
] as const;

const REPORT_LINES = [
  { id: 1, label: "Zone", value: "Salle de bain", y: 48, width: 120 },
  { id: 2, label: "Observations", value: "Fuite confirmée", y: 72, width: 155 },
  { id: 3, label: "Photos", value: "3 clichés", y: 96, width: 90 },
] as const;

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

function MiniWaveform() {
  return (
    <g className="hero-route-report__mini-wave">
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={i * 5} y={-3} width="3" height="6" rx="0.75" className={`hero-route-report__wave-bar hero-route-report__wave-bar--${i + 1}`} />
      ))}
    </g>
  );
}

export function HeroRouteReportScene() {
  const [carX, carY] = OGF_CAR_POS;
  const [fuiteX, fuiteY] = OGF_FUITE_POS;

  return (
    <div className="hero-route-report">
      <div className="hero-route-report__glow" aria-hidden />
      <div className="hero-route-report__dots" aria-hidden />

      <svg
        viewBox="0 0 1000 400"
        className="hero-route-report__canvas"
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Animation : intervention terrain transformée en rapport professionnel"
      >
        <defs>
          <linearGradient id="hero-route-report-route" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="55%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="hero-route-report-route-light" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="hero-route-report-accent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="hero-route-report-accent-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="hero-route-report-neon" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero-route-report-doc-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="hsl(219 79% 57% / 0.2)" />
          </filter>
          <radialGradient id="hero-route-report-fuite-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(199 89% 58% / 0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="hero-route-report-fuite-glow-light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(199 89% 48% / 0.28)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* UI fantôme en arrière-plan */}
        <g className="hero-route-report__ghosts" opacity="0.35">
          <g transform="translate(48, 248)" className="hero-route-report__ghost-card hero-route-report__ghost-checklist">
            <rect x="0" y="0" width="108" height="72" rx="8" className="hero-route-report__ghost-bg" />
            <text x="12" y="18" className="hero-route-report__ghost-title" fontSize="7" fontWeight="600">
              Checklist
            </text>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(12, ${26 + i * 14})`}>
                <rect x="0" y="0" width="8" height="8" rx="2" className="hero-route-report__ghost-check" />
                <line x1="14" y1="4" x2={72 - i * 8} y2="4" className="hero-route-report__ghost-line" />
              </g>
            ))}
          </g>
          <g transform="translate(720, 268)" className="hero-route-report__ghost-card hero-route-report__ghost-pdf">
            <rect x="0" y="0" width="88" height="56" rx="8" className="hero-route-report__ghost-bg" />
            <path d="M 28 8 L 36 0 L 44 8 M 30 8 L 30 40 L 58 40 L 58 8" className="hero-route-report__ghost-pdf-icon" />
            <text x="44" y="50" className="hero-route-report__ghost-title" fontSize="6" textAnchor="middle">
              preview.pdf
            </text>
          </g>
        </g>

        {/* Pipeline */}
        <g className="hero-route-report__pipeline" transform="translate(310, 28)">
          {PIPELINE.map((step, i) => (
            <g key={step.id} transform={`translate(${i * 148}, 0)`}>
              <rect x="0" y="0" width="108" height="22" rx="6" className={`hero-route-report__pipeline-step hero-route-report__pipeline-step--${step.id}`} />
              <text x="54" y="14" className={`hero-route-report__pipeline-label hero-route-report__pipeline-label--${step.id}`} fontSize="7" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
                {step.label.toUpperCase()}
              </text>
              {i < PIPELINE.length - 1 && (
                <path d="M 114 11 L 138 11 L 132 7 M 138 11 L 132 15" className={`hero-route-report__pipeline-arrow hero-route-report__pipeline-arrow--${i + 1}`} fill="none" strokeWidth="1" strokeLinecap="round" />
              )}
            </g>
          ))}
        </g>

        {/* Carte — calque map */}
        <g className="hero-route-report__map">
          <g className="hero-constellation__streets" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {OGF_STREETS.map((street, i) => (
              <path key={`street-${i}`} d={street.d} className="hero-constellation__street" data-weight={street.weight} />
            ))}
          </g>

          <circle cx={fuiteX} cy={fuiteY} r="120" className="hero-constellation__fuite-halo hero-constellation__fuite-halo-bg hero-route-report__fuite-halo" fill="url(#hero-route-report-fuite-glow)" />

          <g className="hero-constellation__ripples hero-route-report__ripples" transform={`translate(${fuiteX} ${fuiteY})`}>
            <circle className="hero-constellation__ripple hero-constellation__ripple--1" r="14" />
            <circle className="hero-constellation__ripple hero-constellation__ripple--2" r="14" />
            <circle className="hero-constellation__ripple hero-constellation__ripple--3" r="14" />
          </g>

          <path d={OGF_ROUTE_PATH} fill="none" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="hero-constellation__route-halo hero-route-report__route-halo" />
          <path d={OGF_ROUTE_PATH} fill="none" strokeLinecap="round" strokeLinejoin="round" className="hero-constellation__route hero-route-report__route" pathLength={100} />

          {OGF_ROUTE_WAYPOINTS.map(([x, y]) => (
            <g key={`node-${x}-${y}`} className="hero-constellation__waypoint hero-route-report__waypoint">
              <circle cx={x} cy={y} r="4" className="hero-constellation__waypoint-core" filter="url(#hero-route-report-neon)" />
              <circle cx={x} cy={y} r="7" className="hero-constellation__waypoint-ring" strokeWidth="0.5" />
            </g>
          ))}

          <g className="hero-constellation__vehicle hero-route-report__vehicle" transform={`translate(${carX} ${carY}) rotate(${OGF_CAR_ROTATE})`}>
            <HudReticle r={26} className="hero-constellation__hud-spin" />
            <path d="M -5 -10 L 7 0 L -5 4 L -2 0 Z" className="hero-constellation__vehicle-arrow" filter="url(#hero-route-report-neon)" />
          </g>

          <g className="hero-constellation__fuite hero-route-report__fuite" transform={`translate(${fuiteX} ${fuiteY})`}>
            <HudReticle r={30} className="hero-constellation__hud-pulse" />
            <circle className="hero-constellation__core" r="5" filter="url(#hero-route-report-neon)" />
            <circle className="hero-constellation__core-dot" r="2" />
            <path d="M 0 -16 L 5 -7 L 0 -5 L -5 -7 Z" className="hero-constellation__fuite-pin" />
            <g className="hero-constellation__fuite-label" transform="translate(-36, -38)">
              <rect x="0" y="0" width="72" height="20" rx="3" className="hero-constellation__fuite-label-bg" strokeWidth="0.75" />
              <text x="36" y="13" className="hero-constellation__fuite-label-text" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">
                FUITE
              </text>
            </g>
          </g>
        </g>

        {/* Artefacts terrain près de la fuite */}
        <g className="hero-route-report__artifacts">
          <g className="hero-route-report__artifact hero-route-report__artifact--photo" transform={`translate(${fuiteX - 95}, ${fuiteY - 55})`}>
            <rect x="0" y="0" width="52" height="40" rx="6" className="hero-route-report__artifact-bg" />
            <rect x="4" y="4" width="44" height="24" rx="3" className="hero-route-report__artifact-photo-sky" />
            <path d="M 10 30 L 18 22 L 26 28 L 34 16 L 42 22" className="hero-route-report__artifact-photo-line" fill="none" strokeWidth="1" strokeLinecap="round" />
            <text x="26" y="38" className="hero-route-report__artifact-tag" fontSize="5.5" textAnchor="middle" fontWeight="600">
              PHOTO
            </text>
          </g>

          <g className="hero-route-report__artifact hero-route-report__artifact--voice" transform={`translate(${fuiteX - 42}, ${fuiteY + 28})`}>
            <rect x="0" y="0" width="64" height="32" rx="6" className="hero-route-report__artifact-bg" />
            <g transform="translate(10, 16)">
              <MiniWaveform />
            </g>
            <text x="48" y="18" className="hero-route-report__artifact-tag" fontSize="5.5" textAnchor="middle" fontWeight="600">
              DICTÉE
            </text>
          </g>

          <g className="hero-route-report__artifact hero-route-report__artifact--zone" transform={`translate(${fuiteX + 18}, ${fuiteY - 48})`}>
            <rect x="0" y="0" width="88" height="22" rx="5" className="hero-route-report__artifact-zone-bg" />
            <text x="44" y="14" className="hero-route-report__artifact-zone-text" fontSize="6.5" fontWeight="700" textAnchor="middle" letterSpacing="0.04em">
              SALLE DE BAIN
            </text>
          </g>
        </g>

        {/* Convergence terrain → rapport */}
        <g className="hero-route-report__converge" fill="none" strokeLinecap="round">
          <path d={`M ${fuiteX - 70} ${fuiteY - 35} C ${fuiteX - 120} ${fuiteY - 60}, 560 120, 620 145`} className="hero-route-report__converge-line hero-route-report__converge-line--1" pathLength={100} />
          <path d={`M ${fuiteX - 10} ${fuiteY + 12} C ${fuiteX - 80} ${fuiteY + 40}, 580 155, 630 165`} className="hero-route-report__converge-line hero-route-report__converge-line--2" pathLength={100} />
          <path d={`M ${fuiteX + 50} ${fuiteY - 37} C ${fuiteX + 10} ${fuiteY - 80}, 600 130, 640 150`} className="hero-route-report__converge-line hero-route-report__converge-line--3" pathLength={100} />
        </g>

        <circle r="3" className="hero-route-report__converge-packet hero-route-report__converge-packet--1" />
        <circle r="3" className="hero-route-report__converge-packet hero-route-report__converge-packet--2" />
        <circle r="3" className="hero-route-report__converge-packet hero-route-report__converge-packet--3" />

        {/* Rapport généré */}
        <g className="hero-route-report__report" transform="translate(618, 108)" filter="url(#hero-route-report-doc-shadow)">
          <rect x="0" y="0" width="268" height="178" rx="10" className="hero-route-report__report-bg" />
          <rect x="0" y="0" width="268" height="28" rx="10" className="hero-route-report__report-header" />
          <rect x="0" y="18" width="268" height="10" className="hero-route-report__report-header-fill" />

          <text x="14" y="18" className="hero-route-report__report-title" fontSize="8" fontWeight="700" letterSpacing="0.1em">
            RAPPORT
          </text>
          <g className="hero-route-report__report-badge" transform="translate(198, 6)">
            <rect x="0" y="0" width="62" height="16" rx="4" className="hero-route-report__report-badge-bg" />
            <text x="31" y="11" className="hero-route-report__report-badge-text" fontSize="6" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
              GÉNÉRÉ
            </text>
          </g>

          {REPORT_LINES.map((line) => (
            <g key={line.id} className={`hero-route-report__report-field hero-route-report__report-field--${line.id}`}>
              <text x="14" y={line.y} className="hero-route-report__report-label" fontSize="7" fontWeight="600">
                {line.label}
              </text>
              <line x1="14" y1={line.y + 9} x2={14 + line.width} y2={line.y + 9} className="hero-route-report__report-track" />
              <line x1="14" y1={line.y + 9} x2={14 + line.width} y2={line.y + 9} className="hero-route-report__report-line" pathLength={100} />
              <g className={`hero-route-report__report-value-wrap hero-route-report__report-value-wrap--${line.id}`}>
                <text x="14" y={line.y + 7} className="hero-route-report__report-value" fontSize="7" fontFamily="var(--font-geist-mono), monospace">
                  {line.value}
                </text>
              </g>
            </g>
          ))}

          <g className="hero-route-report__report-photos" transform="translate(14, 118)">
            {[0, 1, 2].map((i) => (
              <rect key={i} x={i * 36} y="0" width="30" height="24" rx="3" className={`hero-route-report__report-photo hero-route-report__report-photo--${i + 1}`} />
            ))}
          </g>

          <g transform="translate(14, 152)">
            <rect x="0" y="0" width="240" height="5" rx="2.5" className="hero-route-report__report-progress-track" />
            <rect x="0" y="0" width="240" height="5" rx="2.5" className="hero-route-report__report-progress-fill" />
          </g>

          <g className="hero-route-report__report-pdf" transform="translate(134, 158)">
            <circle className="hero-route-report__pdf-ripple hero-route-report__pdf-ripple--1" r="8" />
            <circle className="hero-route-report__pdf-ripple hero-route-report__pdf-ripple--2" r="8" />
            <rect x="-36" y="-14" width="72" height="28" rx="6" className="hero-route-report__report-pdf-bg" />
            <path d="M -8 -4 L 0 -12 L 8 -4 M -6 -2 L -6 8 L 6 8 L 6 -2" className="hero-route-report__report-pdf-icon" />
            <text x="0" y="6" className="hero-route-report__report-pdf-text" fontSize="6" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
              PDF ENVOYÉ
            </text>
          </g>
        </g>
      </svg>

      <span className="hero-route-report__particle hero-route-report__particle--1" aria-hidden />
      <span className="hero-route-report__particle hero-route-report__particle--2" aria-hidden />
      <span className="hero-route-report__particle hero-route-report__particle--3" aria-hidden />
    </div>
  );
}
