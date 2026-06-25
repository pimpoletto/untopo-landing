# Animation v2 — Carte ville / itinéraire GPS

Archivée le 24/06/2026. Remplace l’animation active sur `/` par la v3 (remplissage de rapport).

## Contenu

- `constellation-scene.tsx` — scène SVG (réseau OpenGeofiction + itinéraire)
- `ogf-city-network.ts` — données routières générées
- `city-constellation.tsx` — wrapper hero

## Modes clair / sombre

Les styles sont dans `src/app/globals.css` (préfixe `.hero-constellation__*` + surcharges `html[data-landing-theme="light"]`).

## Réactiver

Dans `src/components/v2/hero-leak-bg.tsx` :

```ts
export { HeroCityConstellationAnimation as HeroLeakDetectionBg } from ".../archived/city-constellation/city-constellation";
```

## Régénérer les rues OGF

```bash
node scripts/generate-ogf-city-network.mjs
```
