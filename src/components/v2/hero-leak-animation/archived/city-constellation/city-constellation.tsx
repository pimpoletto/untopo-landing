import { HeroConstellationScene } from "@/components/v2/hero-leak-animation/archived/city-constellation/constellation-scene";

/**
 * Animation archivée v2 — carte ville / itinéraire GPS (Gobras City).
 * Compatible modes clair et sombre via `data-landing-theme`.
 */
export function HeroCityConstellationAnimation() {
  return (
    <div className="hero-leak-bg hero-leak-bg--v2 pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <HeroConstellationScene />
    </div>
  );
}
