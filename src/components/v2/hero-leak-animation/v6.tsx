import { HeroConstellationReportScene } from "@/components/v2/hero-leak-animation/constellation-report-scene";

/** Animation hero v6 — carte + loading itinéraire + rapport synchronisé */
export function HeroLeakAnimationV6() {
  return (
    <div className="hero-leak-bg hero-leak-bg--v6 pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <HeroConstellationReportScene />
    </div>
  );
}
