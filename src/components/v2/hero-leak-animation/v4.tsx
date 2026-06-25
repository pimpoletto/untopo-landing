import { HeroRouteReportScene } from "@/components/v2/hero-leak-animation/route-report-scene";

/** Animation hero v4 — carte terrain → rapport professionnel */
export function HeroLeakAnimationV4() {
  return (
    <div className="hero-leak-bg hero-leak-bg--v4 pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <HeroRouteReportScene />
    </div>
  );
}
