import { HeroReportFillScene } from "@/components/v2/hero-leak-animation/report-fill-scene";

/** Animation hero v3 — remplissage de rapport (active sur /) */
export function HeroLeakAnimationV3() {
  return (
    <div className="hero-leak-bg hero-leak-bg--v3 pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <HeroReportFillScene />
    </div>
  );
}
