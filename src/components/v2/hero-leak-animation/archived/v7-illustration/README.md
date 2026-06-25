# Hero v7 — Illustration statique

Image source : `public/hero/v7-workflow-illustration.png`

## Animation

Une seule micro-animation : barre de progression (~5 s) + check vert sur la zone « Rapport généré ».

## Réactiver

Dans `src/components/v2/hero-leak-bg.tsx` :

```ts
export { HeroLeakAnimationV7 as HeroLeakDetectionBg } from "@/components/v2/hero-leak-animation/v7";
```

## Remplacer l'image

Remplacer `public/hero/v7-workflow-illustration.png` (même nom) ou mettre à jour le chemin dans `illustration-hero-scene.tsx`.
