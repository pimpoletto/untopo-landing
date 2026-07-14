import { cn } from "@/lib/utils";

type HeroLeakRipplesProps = {
  className?: string;
};

/** Point de fuite + ondes acoustiques / hydrauliques */
export function HeroLeakRipples({ className }: HeroLeakRipplesProps) {
  return (
    <div className={cn("hero-leak-bg__origin", className)}>
      <div className="hero-leak-bg__acoustic-sweep" />

      <span className="hero-leak-bg__crosshair hero-leak-bg__crosshair--h" />
      <span className="hero-leak-bg__crosshair hero-leak-bg__crosshair--v" />
      <span className="hero-leak-bg__halo" />
      <span className="hero-leak-bg__ring hero-leak-bg__ring--1" />
      <span className="hero-leak-bg__ring hero-leak-bg__ring--2" />
      <span className="hero-leak-bg__sonar-sweep" />
      <span className="hero-leak-bg__core" />
      <span className="hero-leak-bg__core-hotspot" />
      <span className="hero-leak-bg__ping" />
      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--1" />
      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--2" />
      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--3" />
      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--4" />
      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--sonar" />
    </div>
  );
}
