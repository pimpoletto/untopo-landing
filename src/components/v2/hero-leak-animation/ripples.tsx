import { cn } from "@/lib/utils";



type HeroLeakRipplesProps = {

  className?: string;

};



/** Point de détection + ondes concentriques */

export function HeroLeakRipples({ className }: HeroLeakRipplesProps) {

  return (

    <div className={cn("hero-leak-bg__origin", className)}>

      <span className="hero-leak-bg__core" />

      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--1" />

      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--2" />

      <span className="hero-leak-bg__ripple hero-leak-bg__ripple--3" />

    </div>

  );

}


