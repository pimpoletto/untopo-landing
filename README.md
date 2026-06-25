# Untopo — site vitrine

Site marketing pour [Untopo](https://github.com/pimpoletto/Reported), logiciel de rapport terrain pour experts fuites.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Déploiement Vercel

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

| Variable | Description | Défaut |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site vitrine | `https://untopo.com` |
| `NEXT_PUBLIC_APP_URL` | URL de l'application produit | `https://app.untopo.com` |

## Déploiement Vercel

1. Importer le dépôt GitHub `untopo-landing`
2. Framework preset : **Next.js**
3. Ajouter les variables d'environnement ci-dessus
4. Déployer

## Versions

| Version | URL | Description |
| --- | --- | --- |
| **v2** (active) | `/` | Landing inspirée Sentry (hero, onglets, CTA sombre) |
| **v1** (archive) | `/v1` | Landing marketing classique |
| **launch** (archive) | `/launch` | Landing phase de lancement |

Voir [VERSIONS.md](./VERSIONS.md).

## Pages

- `/` — Accueil (v2)
- `/v1` — Archive landing v1
- `/fonctionnalites` — Fonctionnalités
- `/tarifs` — Phase de lancement + Pro (indicatif)
- `/faq` — Questions fréquentes
- `/contact` — Contact
- `/mentions-legales`, `/cgu`, `/confidentialite`, `/retention-donnees` — Légal
