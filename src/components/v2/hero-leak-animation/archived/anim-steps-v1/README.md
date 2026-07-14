# Anim steps v1 — Créateur de rapport (archivé)

Workflow animé : éditeur → Générer le PDF → progression → PDF prêt → actions → Envoyer.

## Caractéristiques

- **Largeur mockup :** 320px (`hero-creator-flow--v1`)
- **Boucle :** 14,3 s (grille timings dans `globals.css`)
- **Styles partagés :** `.hero-creator-flow*` + `@keyframes creator-*` dans `src/app/globals.css`

## Grille timings

| Phase | Durée |
|-------|-------|
| Éditeur (pause) | 3 s |
| Clic Générer le PDF | 0,4 s |
| Overlay progression | 5 s |
| PDF prêt + checkmark | 1 s |
| Résultat (PDF + boutons) | 2,5 s |
| Clic Envoyer | 0,4 s |
| Succès envoi | 2 s |

## Réactiver sur la landing

Dans `src/versions/v4-launch/home-page.tsx` :

```tsx
import { HeroAnimStepsV1 } from "@/components/v2/hero-leak-bg";

<div className="landing-page__hero-animation landing-page__hero-animation--creator">
  <HeroAnimStepsV1 />
</div>
```
