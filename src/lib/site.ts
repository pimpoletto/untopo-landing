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
export const PRO_PRICE_MONTHLY_EUR = 39;
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
    question: "Untopo fonctionne-t-il sur téléphone et ordinateur ?",
    answer:
      "Oui. Untopo a été conçu pour fonctionner aussi bien sur mobile que sur ordinateur, afin de s'adapter à votre manière de travailler sur le terrain, en déplacement ou au bureau.",
  },
  {
    question: "Est-ce que l'application fonctionne sans réseau ou sans 4G ?",
    answer:
      "Oui. Vous pouvez ouvrir un rapport, ajouter des informations, prendre des photos et continuer votre intervention même sans connexion. Dès que votre appareil retrouve du réseau, les données se synchronisent automatiquement.",
  },
  {
    question: "Faut-il installer un logiciel ?",
    answer: "Non. Untopo fonctionne directement depuis votre navigateur web, sans installation.",
  },
  {
    question: "Les rapports PDF sont-ils conformes pour les assurances et les syndics ?",
    answer:
      "Oui. Les rapports générés par Untopo intègrent les informations essentielles attendues dans le cadre d'un sinistre : identification du demandeur, distinction entre l'origine et les zones sinistrées, relevés des appareils de mesure et intégration claire des photos.",
  },
  {
    question: "Puis-je personnaliser mes rapports avec mon logo ?",
    answer:
      "Oui. Vous pouvez ajouter votre logo afin de personnaliser automatiquement vos rapports et e-mails aux couleurs de votre entreprise.",
  },
  {
    question: "Mes anciens rapports sont-ils conservés ?",
    answer:
      "Oui. Untopo conserve l'historique de vos interventions afin de retrouver facilement vos anciens rapports et informations de chantier.",
  },
  {
    question: "Puis-je envoyer mes rapports directement depuis Untopo ?",
    answer:
      "Oui. Les rapports peuvent être envoyés directement depuis l'application avec une mise en page d'e-mail professionnelle.",
  },
] as const;
