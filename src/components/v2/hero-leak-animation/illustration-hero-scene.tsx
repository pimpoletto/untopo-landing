import Image from "next/image";

const ILLUSTRATION = "/hero/v7-workflow-illustration.png";

export function HeroIllustrationScene() {
  return (
    <div className="hero-illustration">
      <div className="hero-illustration__frame">
        <Image
          src={ILLUSTRATION}
          alt="Workflow Untopo : intervention terrain jusqu'au rapport PDF"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 920px"
          className="hero-illustration__image"
        />

        {/* Barre de progression — seule animation active */}
        <div className="hero-illustration__progress" aria-hidden>
          <div className="hero-illustration__progress-track" />
          <div className="hero-illustration__progress-fill" />
        </div>

        {/* Check — apparaît quand la barre est complète */}
        <div className="hero-illustration__check" aria-hidden>
          <span className="hero-illustration__check-ring" />
          <svg viewBox="0 0 24 24" className="hero-illustration__check-icon" aria-hidden>
            <circle cx="12" cy="12" r="11" className="hero-illustration__check-bg" />
            <path d="M7 12.5 L10.5 16 L17 8.5" className="hero-illustration__check-mark" fill="none" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
