/** Couches d'ambiance — dégradé, grille, gouttes et micro-bulles */

export function HeroLeakEffects() {
  return (
    <>
      <div className="hero-leak-bg__gradient" />
      <div className="hero-leak-bg__grid" />
      <span className="hero-leak-bg__droplet hero-leak-bg__droplet--1" />
      <span className="hero-leak-bg__droplet hero-leak-bg__droplet--2" />
      <span className="hero-leak-bg__droplet hero-leak-bg__droplet--3" />
      <span className="hero-leak-bg__droplet hero-leak-bg__droplet--4" />
      <span className="hero-leak-bg__droplet hero-leak-bg__droplet--5" />
      <span className="hero-leak-bg__mist hero-leak-bg__mist--1" />
      <span className="hero-leak-bg__mist hero-leak-bg__mist--2" />
      <span className="hero-leak-bg__mist hero-leak-bg__mist--3" />
    </>
  );
}
