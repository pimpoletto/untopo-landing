import { siteConfig } from "@/lib/site";

export const launchConfig = {
  signupUrl: `${siteConfig.appUrl}/login`,
  feedbackUrl: `${siteConfig.appUrl}/help?tab=contact`,
} as const;

export const launchNotice =
  "Untopo est actuellement accessible gratuitement pendant sa phase de lancement.";

export const launchBannerText =
  "Phase de lancement en cours — accès gratuit jusqu'à la sortie officielle.";

export const launchFeatureCards = [
  {
    title: "Créez des rapports plus rapidement",
    description:
      "Ajoutez vos constatations, photos et informations pratiques dans une interface pensée pour un usage quotidien.",
  },
  {
    title: "Retrouvez facilement vos dossiers",
    description:
      "Historique des rapports, contacts, adresses et exports PDF centralisés dans une seule application.",
  },
  {
    title: "Travaillez sur mobile et ordinateur",
    description:
      "Commencez un rapport pendant la journée et finalisez-le plus confortablement sur un grand écran.",
  },
] as const;

export type AppScreenshot = {
  id: string;
  label: string;
  alt: string;
  src: string;
  variant: "desktop" | "mobile";
};

export const appScreenshots: AppScreenshot[] = [
  {
    id: "history",
    label: "Historique",
    alt: "Historique des rapports Untopo sur ordinateur",
    src: "/screenshots/beta/desktop-history.png",
    variant: "desktop",
  },
  {
    id: "editor",
    label: "Éditeur",
    alt: "Éditeur de rapport Untopo avec zones et photos",
    src: "/screenshots/beta/desktop-editor.png",
    variant: "desktop",
  },
  {
    id: "pdf",
    label: "Export PDF",
    alt: "Aperçu PDF généré par Untopo",
    src: "/screenshots/beta/desktop-pdf.png",
    variant: "desktop",
  },
  {
    id: "mobile-home",
    label: "Mobile",
    alt: "Accueil Untopo sur smartphone",
    src: "/screenshots/beta/mobile-home.png",
    variant: "mobile",
  },
  {
    id: "mobile-report",
    label: "Rapport mobile",
    alt: "Création de rapport sur mobile",
    src: "/screenshots/beta/mobile-report.png",
    variant: "mobile",
  },
];
