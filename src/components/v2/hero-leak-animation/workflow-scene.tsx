/**
 * Scène v5 — workflow Untopo (réf. illustration produit).
 * Intervention → documentation terrain → rapport PDF.
 */

function AppWindow() {
  return (
    <g className="hero-workflow__app" transform="translate(268, 52)">
      <rect x="0" y="0" width="400" height="210" rx="14" className="hero-workflow__app-bg" />
      <text x="18" y="26" className="hero-workflow__app-logo" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
        untopo
      </text>
      <g transform="translate(300, 12)">
        <rect x="0" y="0" width="28" height="8" rx="4" className="hero-workflow__app-pill" />
        <rect x="36" y="0" width="28" height="8" rx="4" className="hero-workflow__app-pill" />
        <rect x="72" y="0" width="18" height="8" rx="4" className="hero-workflow__app-pill" />
      </g>

      <text x="18" y="48" className="hero-workflow__app-section" fontSize="7" fontWeight="700">
        Intervention
      </text>
      <line x1="18" y1="56" x2="160" y2="56" className="hero-workflow__app-line" />
      <line x1="18" y1="64" x2="120" y2="64" className="hero-workflow__app-line hero-workflow__app-line--short" />

      <text x="18" y="82" className="hero-workflow__app-section" fontSize="7" fontWeight="700">
        Observations
      </text>
      <g transform="translate(18, 88)">
        <rect x="0" y="0" width="200" height="28" rx="6" className="hero-workflow__wave-bg" />
        <g className="hero-workflow__waveform">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <rect
              key={i}
              x={i * 14 + 8}
              y={14}
              width="6"
              height="6"
              rx="1"
              className={`hero-workflow__wave-bar hero-workflow__wave-bar--${(i % 6) + 1}`}
            />
          ))}
        </g>
        <circle cx="188" cy="14" r="8" className="hero-workflow__play-btn" />
        <path d="M 185 11 L 185 17 L 191 14 Z" className="hero-workflow__play-icon" />
        <text x="8" y="38" className="hero-workflow__wave-time" fontSize="6" fontFamily="var(--font-geist-mono), monospace">
          0:18
        </text>
      </g>

      <text x="18" y="132" className="hero-workflow__app-section" fontSize="7" fontWeight="700">
        Photos
      </text>
      <g transform="translate(18, 138)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 58}, 0)`}>
            <rect x="0" y="0" width="50" height="36" rx="5" className="hero-workflow__photo-thumb" />
            <path d="M 8 28 L 16 18 L 24 24 L 34 12 L 42 18" className="hero-workflow__photo-line" fill="none" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}
      </g>

      <text x="18" y="188" className="hero-workflow__app-section" fontSize="7" fontWeight="700">
        Conclusion
      </text>
      <path d="M 18 198 Q 60 208, 100 196" className="hero-workflow__signature" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

function Technician() {
  return (
    <g className="hero-workflow__tech">
      <ellipse cx="0" cy="78" rx="36" ry="8" className="hero-workflow__tech-shadow" />
      {/* Jambes */}
      <path d="M -16 52 L -20 78 L -8 78 L -6 52 Z" className="hero-workflow__tech-pants" />
      <path d="M 6 52 L 8 78 L 20 78 L 16 52 Z" className="hero-workflow__tech-pants" />
      {/* Torse */}
      <path d="M -28 8 L 28 8 L 32 52 L -32 52 Z" className="hero-workflow__tech-jacket" />
      <rect x="-6" y="14" width="12" height="10" rx="2" className="hero-workflow__tech-badge" />
      {/* Tête */}
      <circle cy="-8" r="18" className="hero-workflow__tech-head" />
      <path d="M -10 -12 Q 0 -6, 10 -12" className="hero-workflow__tech-smile" fill="none" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bras + tablette */}
      <path d="M -28 18 L -42 38" className="hero-workflow__tech-arm" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M 28 18 L 42 38" className="hero-workflow__tech-arm" strokeWidth="10" strokeLinecap="round" fill="none" />
      <rect x="-38" y="34" width="76" height="52" rx="6" className="hero-workflow__tablet" />
      <rect x="-32" y="40" width="64" height="38" rx="4" className="hero-workflow__tablet-screen" />
    </g>
  );
}

export function HeroWorkflowScene() {
  return (
    <div className="hero-workflow">
      <div className="hero-workflow__glow" aria-hidden />
      <div className="hero-workflow__grid" aria-hidden />

      <svg
        viewBox="0 0 960 380"
        className="hero-workflow__canvas"
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Workflow Untopo : intervention, documentation et rapport PDF"
      >
        <defs>
          <linearGradient id="hero-workflow-path" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5EA2F9" />
            <stop offset="100%" stopColor="#1E50D9" />
          </linearGradient>
          <linearGradient id="hero-workflow-path-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <filter id="hero-workflow-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="hsl(219 79% 57% / 0.15)" />
          </filter>
        </defs>

        <AppWindow />

        {/* Ligne de flux */}
        <path
          d="M 108 210 C 200 290, 340 330, 480 300 S 720 230, 848 175"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className="hero-workflow__path"
          pathLength={100}
        />

        {/* Étape 1 — intervention */}
        <g transform="translate(36, 148)">
          <g className="hero-workflow__card hero-workflow__card--intervention" filter="url(#hero-workflow-shadow)">
          <rect x="0" y="0" width="148" height="108" rx="12" className="hero-workflow__card-bg" />
          <text x="14" y="22" className="hero-workflow__card-title" fontSize="7" fontWeight="700">
            Prochaine intervention
          </text>
          <rect x="14" y="30" width="120" height="52" rx="6" className="hero-workflow__mini-map" />
          <path d="M 74 44 L 74 62 L 68 68 L 80 68 Z" className="hero-workflow__map-pin" />
          <circle cx="74" cy="44" r="10" className="hero-workflow__map-pin-ring" fill="none" strokeWidth="1" />
          <text x="14" y="96" className="hero-workflow__card-meta" fontSize="6.5" fontFamily="var(--font-geist-mono), monospace">
            10:30 · Rue des Peupliers, 12
          </text>
          </g>
        </g>

        {/* Icônes terrain */}
        <g transform="translate(268, 288)">
          <g className="hero-workflow__chip hero-workflow__chip--photo">
          <rect x="0" y="0" width="72" height="56" rx="10" className="hero-workflow__chip-bg" />
          <rect x="22" y="12" width="28" height="20" rx="4" className="hero-workflow__chip-icon-bg" />
          <circle cx="36" cy="22" r="5" className="hero-workflow__chip-icon-lens" fill="none" strokeWidth="1" />
          <text x="36" y="48" className="hero-workflow__chip-label" fontSize="6.5" fontWeight="600" textAnchor="middle">
            Photo
          </text>
          </g>
        </g>

        <g transform="translate(368, 298)">
          <g className="hero-workflow__chip hero-workflow__chip--voice">
          <rect x="0" y="0" width="72" height="56" rx="10" className="hero-workflow__chip-bg" />
          <rect x="28" y="14" width="16" height="22" rx="8" className="hero-workflow__chip-icon-bg" />
          <path d="M 22 38 Q 22 44, 36 44 Q 50 44, 50 38" className="hero-workflow__chip-mic" fill="none" strokeWidth="1" />
          <text x="36" y="48" className="hero-workflow__chip-label" fontSize="6.5" fontWeight="600" textAnchor="middle">
            Note vocale
          </text>
          </g>
        </g>

        {/* Validation */}
        <g transform="translate(618, 268)">
          <g className="hero-workflow__check-node">
          <circle r="16" className="hero-workflow__check-bg" />
          <path d="M -5 0 L -1 4 L 6 -4" className="hero-workflow__check-mark" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* Étape finale — rapport */}
        <g transform="translate(728, 118)">
          <g className="hero-workflow__card hero-workflow__card--report" filter="url(#hero-workflow-shadow)">
          <rect x="0" y="0" width="168" height="148" rx="12" className="hero-workflow__card-bg" />
          <text x="14" y="22" className="hero-workflow__card-title" fontSize="7" fontWeight="700">
            Rapport généré
          </text>
          <rect x="118" y="8" width="40" height="18" rx="4" className="hero-workflow__pdf-badge" />
          <text x="138" y="20" className="hero-workflow__pdf-text" fontSize="7" fontWeight="700" textAnchor="middle">
            PDF
          </text>
          <rect x="14" y="32" width="140" height="72" rx="6" className="hero-workflow__report-preview" />
          <path d="M 28 88 L 48 68 L 68 78 L 98 52 L 128 62" className="hero-workflow__report-line" fill="none" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 24 118 Q 56 128, 88 118 T 140 122" className="hero-workflow__report-sign" fill="none" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        </g>

        <g transform="translate(468, 168)">
          <Technician />
        </g>

        {/* Nœuds sur la ligne */}
        <circle cx="108" cy="210" r="5" className="hero-workflow__node hero-workflow__node--1" />
        <circle cx="480" cy="300" r="5" className="hero-workflow__node hero-workflow__node--2" />
        <circle cx="848" cy="175" r="5" className="hero-workflow__node hero-workflow__node--3" />
      </svg>
    </div>
  );
}
