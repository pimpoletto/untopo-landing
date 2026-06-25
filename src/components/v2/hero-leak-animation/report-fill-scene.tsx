/**
 * Scène HUD — remplissage progressif d'un rapport de détection de fuite.
 */

const REPORT_FIELDS = [
  { id: 1, label: "Client / chantier", value: "Résidence Les Pins — Bât. C", y: 52, width: 220 },
  { id: 2, label: "Zone A — fuite", value: "Zone A · fuite confirmée", y: 82, width: 180 },
  { id: 3, label: "Observations", value: "Pression basse, bruit caractéristique", y: 112, width: 240 },
  { id: 4, label: "Photos jointes", value: "3 clichés géolocalisés", y: 142, width: 160 },
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

function VoiceWaveform() {
  return (
    <g className="hero-report__waveform">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={i * 7}
          y={-4}
          width="4"
          height="8"
          rx="1"
          className={`hero-report__wave-bar hero-report__wave-bar--${i + 1}`}
        />
      ))}
    </g>
  );
}

export function HeroReportFillScene() {
  return (
    <div className="hero-report">
      <div className="hero-report__glow" aria-hidden />
      <div className="hero-report__dots" aria-hidden />

      <svg
        viewBox="0 0 1000 400"
        className="hero-report__canvas"
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Animation : remplissage d'un rapport de détection de fuite"
      >
        <defs>
          <linearGradient id="hero-report-accent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="hero-report-accent-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="hero-report-shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="hsl(199 89% 78% / 0.55)" />
            <stop offset="55%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="hero-report-neon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero-report-doc-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="hsl(219 79% 57% / 0.18)" />
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="hsl(199 89% 48% / 0.12)" />
          </filter>
          <radialGradient id="hero-report-focus-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(199 89% 58% / 0.28)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Connecteurs widgets → document */}
        <g className="hero-report__connectors" fill="none" strokeLinecap="round">
          <path id="hero-report-path-voice" d="M 195 175 C 250 175, 290 160, 330 145" className="hero-report__connector hero-report__connector--1" pathLength={100} />
          <path id="hero-report-path-camera" d="M 800 155 C 740 155, 680 150, 620 145" className="hero-report__connector hero-report__connector--2" pathLength={100} />
          <path id="hero-report-path-pdf" d="M 810 285 C 750 270, 650 250, 580 235" className="hero-report__connector hero-report__connector--3" pathLength={100} />
        </g>

        {/* Paquets de données sur les connecteurs */}
        <circle r="3" className="hero-report__packet hero-report__packet--1" />
        <circle r="3" className="hero-report__packet hero-report__packet--2" />
        <circle r="3" className="hero-report__packet hero-report__packet--3" />

        <circle cx="500" cy="210" r="130" className="hero-report__focus-halo" fill="url(#hero-report-focus-glow)" />

        {/* Document principal */}
        <g className="hero-report__doc" transform="translate(310, 78)" filter="url(#hero-report-doc-shadow)">
          <rect x="0" y="0" width="380" height="248" rx="12" className="hero-report__doc-bg" />
          <rect x="0" y="0" width="380" height="34" rx="12" className="hero-report__doc-header" />
          <rect x="0" y="22" width="380" height="12" className="hero-report__doc-header-fill" />

          <text x="20" y="22" className="hero-report__doc-title" fontSize="10" fontWeight="700" letterSpacing="0.12em">
            RAPPORT DE DÉTECTION
          </text>
          <text x="248" y="22" className="hero-report__doc-date" fontSize="6.5" fontFamily="var(--font-geist-mono), monospace">
            24/06/2026
          </text>
          <text x="360" y="22" className="hero-report__doc-meta" fontSize="7" fontFamily="var(--font-geist-mono), monospace" textAnchor="end">
            #2847
          </text>

          {/* Statut : brouillon → validé */}
          <g transform="translate(168, 8)">
            <rect x="0" y="0" width="52" height="14" rx="4" className="hero-report__status-bg hero-report__status-bg--draft" />
            <rect x="0" y="0" width="52" height="14" rx="4" className="hero-report__status-bg hero-report__status-bg--valid" />
            <text x="26" y="10" className="hero-report__status-text hero-report__status-text--draft" fontSize="6" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
              BROUILLON
            </text>
            <text x="26" y="10" className="hero-report__status-text hero-report__status-text--valid" fontSize="6" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
              VALIDÉ
            </text>
          </g>

          {/* Ligne de scan */}
          <line x1="14" y1="42" x2="366" y2="42" className="hero-report__scan" />

          {REPORT_FIELDS.map((field) => (
            <g key={field.id} className={`hero-report__field hero-report__field--${field.id}`}>
              <rect
                x="12"
                y={field.y - 11}
                width="356"
                height="24"
                rx="5"
                className={`hero-report__field-highlight hero-report__field-highlight--${field.id}`}
              />
              <text x="20" y={field.y} className={`hero-report__field-label hero-report__field-label--${field.id}`} fontSize="8" fontWeight="600">
                {field.label}
              </text>
              <line
                x1="20"
                y1={field.y + 10}
                x2={20 + field.width}
                y2={field.y + 10}
                className="hero-report__field-track"
                pathLength={100}
              />
              <line
                x1="20"
                y1={field.y + 10}
                x2={20 + field.width}
                y2={field.y + 10}
                className="hero-report__field-line"
                pathLength={100}
              />
              <g className={`hero-report__field-value-wrap hero-report__field-value-wrap--${field.id}`}>
                <text x="20" y={field.y + 8} className="hero-report__field-value" fontSize="7.5" fontFamily="var(--font-geist-mono), monospace">
                  {field.value}
                </text>
              </g>
              <rect
                x={20 + field.width - 1}
                y={field.y + 1}
                width="1.5"
                height="9"
                rx="0.5"
                className={`hero-report__cursor hero-report__cursor--${field.id}`}
              />
              <g className={`hero-report__check hero-report__check--${field.id}`} transform={`translate(${field.width + 8}, ${field.y + 4})`}>
                <circle r="7" className="hero-report__check-bg" />
                <path
                  d="M -3 0 L -1 2.5 L 3.5 -2.5"
                  className="hero-report__check-mark"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={10}
                />
              </g>
            </g>
          ))}

          {/* Miniatures photos */}
          <g className="hero-report__photos" transform="translate(20, 168)">
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${i * 52}, 0)`} className={`hero-report__photo hero-report__photo--${i + 1}`}>
                <rect x="0" y="0" width="44" height="34" rx="4" className="hero-report__photo-frame" />
                <rect x="2" y="2" width="40" height="22" rx="2" className={`hero-report__photo-sky hero-report__photo-sky--${i + 1}`} />
                <path d="M 8 24 L 16 16 L 24 22 L 32 12 L 36 16" className="hero-report__photo-thumb" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="34" cy="8" r="5" className="hero-report__photo-pin-bg" />
                <circle cx="34" cy="7" r="2" className="hero-report__photo-pin" />
                <g className={`hero-report__photo-check hero-report__photo-check--${i + 1}`} transform="translate(6, 26)">
                  <circle r="5" className="hero-report__photo-check-bg" />
                  <path d="M -2 0 L -0.5 1.5 L 2.5 -1.5" className="hero-report__photo-check-mark" strokeWidth="1" fill="none" strokeLinecap="round" />
                </g>
              </g>
            ))}
          </g>

          {/* Barre de progression */}
          <g transform="translate(20, 218)">
            <text x="0" y="-4" className="hero-report__progress-label" fontSize="7" fontWeight="600" letterSpacing="0.08em">
              COMPLÉTION
            </text>
            <text x="340" y="-4" className="hero-report__progress-pct hero-report__progress-pct--mid" fontSize="7" fontFamily="var(--font-geist-mono), monospace" textAnchor="end">
              67%
            </text>
            <text x="340" y="-4" className="hero-report__progress-pct hero-report__progress-pct--full" fontSize="7" fontFamily="var(--font-geist-mono), monospace" textAnchor="end">
              100%
            </text>
            <rect x="0" y="0" width="340" height="6" rx="3" className="hero-report__progress-track" />
            <rect x="0" y="0" width="340" height="6" rx="3" className="hero-report__progress-fill" />
            <rect x="0" y="0" width="340" height="6" rx="3" className="hero-report__progress-shimmer" />
          </g>
        </g>

        {/* Widget dictée vocale */}
        <g className="hero-report__widget hero-report__widget--voice" transform="translate(118, 158)">
          <HudReticle r={34} className="hero-report__hud-spin" />
          <rect x="-40" y="-28" width="80" height="56" rx="8" className="hero-report__widget-bg" />
          <rect x="-40" y="-28" width="80" height="56" rx="8" className="hero-report__widget-glow" />
          <text x="0" y="-14" className="hero-report__widget-label" fontSize="7" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">
            DICTÉE
          </text>
          <circle cx="28" cy="-20" r="3" className="hero-report__rec-dot" />
          <g transform="translate(-18, -2)">
            <VoiceWaveform />
          </g>
        </g>

        {/* Widget appareil photo */}
        <g className="hero-report__widget hero-report__widget--camera" transform="translate(818, 148)">
          <HudReticle r={30} className="hero-report__hud-pulse" />
          <rect x="-36" y="-26" width="72" height="52" rx="8" className="hero-report__widget-bg" />
          <rect x="-36" y="-26" width="72" height="52" rx="8" className="hero-report__widget-glow" />
          <rect x="-36" y="-26" width="72" height="52" rx="8" className="hero-report__camera-flash" />
          <text x="0" y="-10" className="hero-report__widget-label" fontSize="7" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">
            PHOTOS
          </text>
          <rect x="-14" y="-2" width="28" height="20" rx="3" className="hero-report__camera-body" />
          <circle cx="0" cy="8" r="6" className="hero-report__camera-lens" />
          <text x="0" y="30" className="hero-report__widget-count hero-report__photo-count" fontSize="8" fontFamily="var(--font-geist-mono), monospace" textAnchor="middle">
            3/3
          </text>
        </g>

        {/* Widget export PDF */}
        <g className="hero-report__widget hero-report__widget--pdf" transform="translate(808, 278)">
          <g className="hero-report__pdf-ripples">
            <circle className="hero-report__ripple hero-report__ripple--1" r="12" />
            <circle className="hero-report__ripple hero-report__ripple--2" r="12" />
          </g>
          <rect x="-38" y="-30" width="76" height="60" rx="8" className="hero-report__widget-bg hero-report__pdf-bg" />
          <rect x="-38" y="-30" width="76" height="60" rx="8" className="hero-report__widget-glow" />
          <text x="0" y="-12" className="hero-report__widget-label" fontSize="7" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">
            EXPORT
          </text>
          <path d="M -10 -2 L 0 -12 L 10 -2 Z M -8 0 L -8 14 L 8 14 L 8 0" className="hero-report__pdf-icon" />
          <g className="hero-report__pdf-badge" transform="translate(0, 22)">
            <rect x="-28" y="-8" width="56" height="16" rx="4" className="hero-report__pdf-badge-bg" />
            <text x="0" y="3" className="hero-report__pdf-badge-text" fontSize="7" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
              PDF PRÊT
            </text>
          </g>
          <g className="hero-report__pdf-send" transform="translate(46, 0)">
            <line x1="0" y1="0" x2="16" y2="0" className="hero-report__pdf-send-line" strokeLinecap="round" />
            <path d="M 12 -3.5 L 16 0 L 12 3.5" className="hero-report__pdf-send-arrow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </g>
      </svg>

      <span className="hero-report__particle hero-report__particle--1" aria-hidden />
      <span className="hero-report__particle hero-report__particle--2" aria-hidden />
      <span className="hero-report__particle hero-report__particle--3" aria-hidden />
      <span className="hero-report__particle hero-report__particle--4" aria-hidden />
    </div>
  );
}
