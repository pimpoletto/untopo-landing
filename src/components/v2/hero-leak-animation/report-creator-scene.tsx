/**
 * Scène anim steps — workflow créateur de rapport Untopo (réf. app Reported).
 * Éditeur → Générer le PDF → progression → PDF prêt → actions → Envoyer → boucle.
 */

import { cn } from "@/lib/utils";

export type HeroReportCreatorVariant = "v1" | "v2";

function ZoneCard({
  title,
  status,
  className,
}: {
  title: string;
  status: "ok" | "warn";
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="hero-creator-flow__zone-head">
        <span className="hero-creator-flow__zone-title">{title}</span>
        <span
          className={`hero-creator-flow__zone-badge hero-creator-flow__zone-badge--${status}`}
          aria-hidden
        >
          {status === "ok" ? "✓" : "!"}
        </span>
      </div>
      <span className="hero-creator-flow__zone-line" />
      <span className="hero-creator-flow__zone-line hero-creator-flow__zone-line--short" />
    </div>
  );
}

export function HeroReportCreatorScene({ variant = "v2" }: { variant?: HeroReportCreatorVariant }) {
  return (
    <div className={cn("hero-creator-flow", `hero-creator-flow--${variant}`)}>
      <div className="hero-creator-flow__glow" aria-hidden />

      <div
        className="hero-creator-flow__device"
        role="img"
        aria-label="Animation : création et envoi d'un rapport PDF dans Untopo"
      >
        <div className="hero-creator-flow__chrome">
          <span className="hero-creator-flow__back" aria-hidden />
          <span className="hero-creator-flow__header-title">Rapport</span>
          <span className="hero-creator-flow__status hero-creator-flow__status--draft">Brouillon</span>
          <span className="hero-creator-flow__status hero-creator-flow__status--finalized">Finalisé</span>
        </div>

        <div className="hero-creator-flow__viewport">
          <div className="hero-creator-flow__scene hero-creator-flow__scene--editor">
            <p className="hero-creator-flow__section-label hero-creator-flow__editor-block hero-creator-flow__editor-block--1">
              Constatations par zones
            </p>
            <ZoneCard
              title="Zone A — Hall d'entrée"
              status="ok"
              className="hero-creator-flow__zone hero-creator-flow__editor-block hero-creator-flow__editor-block--2"
            />
            <ZoneCard
              title="Zone B — Cave technique"
              status="warn"
              className="hero-creator-flow__zone hero-creator-flow__editor-block hero-creator-flow__editor-block--3"
            />

            <div className="hero-creator-flow__section-collapsed hero-creator-flow__editor-block hero-creator-flow__editor-block--4">
              <span>Méthodes</span>
              <span className="hero-creator-flow__section-collapsed-chevron" aria-hidden />
            </div>
            <div className="hero-creator-flow__section-collapsed hero-creator-flow__editor-block hero-creator-flow__editor-block--5">
              <span>Avis expert</span>
              <span className="hero-creator-flow__section-collapsed-chevron" aria-hidden />
            </div>

            <div className="hero-creator-flow__finalize hero-creator-flow__editor-block hero-creator-flow__editor-block--6">
              <button type="button" className="hero-creator-flow__generate-btn">
                Générer le PDF
              </button>
              <span className="hero-creator-flow__click-indicator hero-creator-flow__click-indicator--generate" aria-hidden />
              <span className="hero-creator-flow__tap-ring hero-creator-flow__tap-ring--generate" aria-hidden />
              <span className="hero-creator-flow__tap-ring hero-creator-flow__tap-ring--generate hero-creator-flow__tap-ring--outer" aria-hidden />
            </div>
          </div>

          <div className="hero-creator-flow__scene hero-creator-flow__scene--result">
            <div className="hero-creator-flow__result-card hero-creator-flow__result-block hero-creator-flow__result-block--1">
              <div className="hero-creator-flow__result-meta">
                <span className="hero-creator-flow__result-id">#A4F2K</span>
                <span className="hero-creator-flow__result-name">Résidence Les Pins</span>
              </div>
              <div className="hero-creator-flow__pdf-preview">
                <span className="hero-creator-flow__pdf-badge">PDF</span>
                <span className="hero-creator-flow__pdf-line hero-creator-flow__pdf-line--title" />
                <span className="hero-creator-flow__pdf-line" />
                <span className="hero-creator-flow__pdf-line hero-creator-flow__pdf-line--short" />
                <span className="hero-creator-flow__pdf-block" />
              </div>
            </div>

            <div className="hero-creator-flow__actions hero-creator-flow__result-block hero-creator-flow__result-block--2">
              <button type="button" className="hero-creator-flow__action hero-creator-flow__action--secondary">
                Voir PDF
              </button>
              <button type="button" className="hero-creator-flow__action hero-creator-flow__action--secondary">
                Télécharger
              </button>
              <button type="button" className="hero-creator-flow__action hero-creator-flow__action--primary">
                Envoyer
              </button>
              <span className="hero-creator-flow__click-indicator hero-creator-flow__click-indicator--send" aria-hidden />
              <span className="hero-creator-flow__tap-ring hero-creator-flow__tap-ring--send" aria-hidden />
              <span className="hero-creator-flow__tap-ring hero-creator-flow__tap-ring--send hero-creator-flow__tap-ring--outer" aria-hidden />
            </div>

            <div className="hero-creator-flow__send-success hero-creator-flow__result-block hero-creator-flow__result-block--3">
              <span className="hero-creator-flow__send-success-icon" aria-hidden>
                ✓
              </span>
              Rapport envoyé par e-mail.
            </div>
          </div>
        </div>

        <div className="hero-creator-flow__scene hero-creator-flow__scene--progress">
          <div className="hero-creator-flow__overlay-scrim" />
          <div className="hero-creator-flow__progress-sheet">
            <p className="hero-creator-flow__progress-title">Génération du PDF</p>
            <div className="hero-creator-flow__progress-track">
              <div className="hero-creator-flow__progress-fill" />
            </div>
            <p className="hero-creator-flow__progress-step hero-creator-flow__progress-step--1">
              Préparation du rapport…
            </p>
            <p className="hero-creator-flow__progress-step hero-creator-flow__progress-step--2">
              Envoi des photos…
            </p>
            <p className="hero-creator-flow__progress-step hero-creator-flow__progress-step--3">
              Création du PDF…
            </p>
            <p className="hero-creator-flow__progress-step hero-creator-flow__progress-step--4">
              Finalisation…
            </p>
            <p className="hero-creator-flow__progress-step hero-creator-flow__progress-step--5">
              PDF prêt
            </p>
            <span className="hero-creator-flow__percent" aria-hidden />
            <div className="hero-creator-flow__progress-check" aria-hidden>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M6 12.5 L10 16.5 L18 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
