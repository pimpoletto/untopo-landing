import { HeroReportCreatorScene } from "@/components/v2/hero-leak-animation/report-creator-scene";

/** Anim steps v2 — créateur de rapport, mockup élargi */
export function HeroAnimStepsV2() {
  return (
    <div
      className="hero-creator-flow-root pointer-events-none relative flex w-full items-center justify-center overflow-visible px-4 pb-10 sm:px-5 sm:pb-12"
      aria-hidden
    >
      <HeroReportCreatorScene variant="v2" />
    </div>
  );
}
