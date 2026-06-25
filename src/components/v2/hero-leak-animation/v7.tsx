import { HeroIllustrationScene } from "@/components/v2/hero-leak-animation/illustration-hero-scene";

/** Animation hero v7 — illustration statique + micro-animation (barre + check) */
export function HeroLeakAnimationV7() {
  return (
    <div className="hero-leak-bg hero-leak-bg--v7 pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <HeroIllustrationScene />
    </div>
  );
}
