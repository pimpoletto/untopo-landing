import { HeroReportCreatorSceneV1 } from "@/components/v2/hero-leak-animation/archived/anim-steps-v1/report-creator-scene";

/** Anim steps v1 (archivé) — créateur de rapport, mockup 320px */
export function HeroAnimStepsV1() {
  return (
    <div
      className="hero-creator-flow-root pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible"
      aria-hidden
    >
      <HeroReportCreatorSceneV1 />
    </div>
  );
}
