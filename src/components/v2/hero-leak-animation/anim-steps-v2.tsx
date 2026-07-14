import { HeroReportCreatorScene } from "@/components/v2/hero-leak-animation/report-creator-scene";

/** Anim steps v2 — créateur de rapport, mockup élargi */
export function HeroAnimStepsV2() {
  return (
    <div
      className="hero-creator-flow-root pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible"
      aria-hidden
    >
      <HeroReportCreatorScene variant="v2" />
    </div>
  );
}
