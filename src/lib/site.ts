export const siteConfig = {
  name: "Untopo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://untopo.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.untopo.com",
  contactEmail: "contact@untopo.com",
  /** @deprecated Prefer Meta messages — kept for archive pages */
  description:
    "Créez vos rapports de détection plus rapidement. Untopo simplifie la création et l'envoi de rapports professionnels de détection de fuite.",
} as const;

export const TRIAL_REPORTS = 20;
export const PRO_PRICE_MONTHLY_EUR = 49;
export const PRO_PRICE_ANNUAL_EUR = PRO_PRICE_MONTHLY_EUR * 10;

/** Icon keys for feature grids (copy lives in messages). */
export const featureIcons = ["mic", "camera", "file", "contacts", "mobile", "sync"] as const;

/** Icon keys for home feature cards (copy lives in messages). */
export const v2FeatureIcons = [
  "report",
  "pdf",
  "history",
  "contacts",
  "palette",
  "mail",
] as const;

export const navHrefs = ["/tarifs", "/faq", "/contact"] as const;

export const footerLegalHrefs = [
  "/mentions-legales",
  "/cgu",
  "/confidentialite",
  "/retention-donnees",
  "/phase-lancement",
] as const;

/** FR copy kept for archive pages (/v1) only. */
export const features = [
  {
    title: "Dictée vocale structurée",
    description:
      "Décrivez l'intervention à voix haute. Untopo transcrit et organise le contenu dans un rapport clair, sans formulaires interminables.",
    icon: "mic",
  },
  {
    title: "Photos & annotations",
    description:
      "Capturez les zones sinistrées, annotez sur place et associez chaque visuel au bon endroit du rapport.",
    icon: "camera",
  },
  {
    title: "PDF professionnel",
    description:
      "Générez un export prêt à envoyer au client ou à l'assureur, avec votre logo et vos coordonnées.",
    icon: "file",
  },
] as const;
