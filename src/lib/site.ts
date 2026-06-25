export const siteConfig = {
  name: "Untopo",
  title: "Untopo — Rapports de détection pour experts fuites",
  description:
    "Créez vos rapports de détection plus rapidement. Untopo simplifie la création, l'organisation et l'envoi de rapports professionnels de détection de fuite.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://untopo.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.untopo.com",
  contactEmail: "contact@untopo.com",
  locale: "fr-BE",
} as const;

export const navLinks = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgu", label: "CGU" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/retention-donnees", label: "Rétention des données" },
  { href: "/phase-lancement", label: "Phase de lancement" },
] as const;

export const TRIAL_REPORTS = 20;
export const PRO_PRICE_MONTHLY_EUR = 49;
export const PRO_PRICE_ANNUAL_EUR = PRO_PRICE_MONTHLY_EUR * 10;

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
  {
    title: "Carnet contacts & lieux",
    description:
      "Retrouvez clients, adresses et historique d'interventions sans ressaisir les mêmes informations.",
    icon: "contacts",
  },
  {
    title: "Conçu pour le terrain",
    description:
      "Interface mobile-first, utilisable à une main, même avec des gants ou sous la pluie. Installez l'app sur l'écran d'accueil.",
    icon: "mobile",
  },
  {
    title: "Hors ligne puis synchro",
    description:
      "Travaillez sans réseau en cave ou sous parking. Vos brouillons restent sur l'appareil jusqu'à la synchronisation.",
    icon: "sync",
  },
] as const;

export const faqItems = [
  {
    question: "À qui s'adresse Untopo ?",
    answer:
      "Untopo est pensé pour les professionnels de la détection de fuites et experts terrain : techniciens, bureaux d'études et indépendants qui rédigent des rapports d'intervention après chaque visite.",
  },
  {
    question: "Faut-il une formation pour utiliser l'app ?",
    answer:
      "Non. L'objectif est zéro formation : vous parlez, vous photographiez, vous validez. L'interface évite les parcours complexes et les formulaires à plusieurs étapes.",
  },
  {
    question: "Comment accéder à Untopo aujourd'hui ?",
    answer:
      "Untopo est actuellement accessible gratuitement pendant sa phase de lancement. Créez un compte sur l'application — sans carte bancaire.",
  },
  {
    question: "Que comprend l'offre Pro ?",
    answer:
      "Untopo Pro débloque les exports PDF illimités, la modification illimitée des rapports, l'historique complet et le carnet de contacts & lieux.",
  },
  {
    question: "Puis-je utiliser Untopo sans connexion ?",
    answer:
      "Oui pour la création et l'édition de brouillons. La transcription vocale, la génération PDF et l'envoi par email nécessitent une connexion.",
  },
  {
    question: "Où sont hébergées mes données ?",
    answer:
      "Les données sont hébergées via des prestataires conformes (Supabase, Vercel). Consultez notre politique de confidentialité pour le détail des traitements et sous-traitants.",
  },
] as const;
