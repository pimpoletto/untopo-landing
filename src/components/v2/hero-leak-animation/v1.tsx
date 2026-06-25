import { HeroLeakEffects } from "@/components/v2/hero-leak-animation/effects";

import { HeroLeakRipples } from "@/components/v2/hero-leak-animation/ripples";



/** Animation hero v1 — ondes, balayage, gouttes (sans carte ville) */

export function HeroLeakAnimationV1() {

  return (

    <div className="hero-leak-bg hero-leak-bg--v1 pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>

      <HeroLeakEffects />

      <HeroLeakRipples className="hero-leak-bg__origin--v1" />

    </div>

  );

}


