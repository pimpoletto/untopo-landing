import { HeroWorkflowScene } from "@/components/v2/hero-leak-animation/workflow-scene";

/** Animation hero v5 — workflow produit (intervention → rapport PDF) */
export function HeroLeakAnimationV5() {
  return (
    <div className="hero-leak-bg hero-leak-bg--v5 pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <HeroWorkflowScene />
    </div>
  );
}
