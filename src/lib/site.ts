export const siteConfig = {
  name: "Untopo",
  title: "Untopo: Rapports de détection de fuites.",
  description:
    "Créez vos rapports de détection plus rapidement. Untopo simplifie la création et l'envoi de rapports professionnels de détection de fuite.",
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
      "Untopo est conçu pour les professionnels de la détection de fuites, qu'ils travaillent seuls ou en équipe. L'application simplifie la création, la gestion et l'envoi de rapports directement depuis le terrain.",
  },
  // Utilisation
  {
    question: "Untopo fonctionne-t-il sur téléphone et ordinateur ?",
    answer:
      "Oui. Untopo fonctionne sur smartphone, tablette et ordinateur, pour vous accompagner aussi bien sur le terrain qu'au bureau.",
  },
  {
    question: "Est-ce que l'application fonctionne sans réseau ou sans 4G ?",
    answer:
      "Oui. Vous pouvez continuer votre intervention sans connexion : compléter un rapport, ajouter des informations et prendre des photos. Dès que la connexion est rétablie, la synchronisation se fait automatiquement.",
  },
  {
    question: "Puis-je commencer un rapport sur le terrain et le terminer au bureau ?",
    answer:
      "Oui. Commencez sur le terrain, reprenez au bureau sur un autre appareil : vos brouillons se synchronisent automatiquement dès que la connexion est rétablie.",
  },
  {
    question: "Faut-il installer un logiciel ?",
    answer:
      "Non. Untopo fonctionne directement dans votre navigateur, sans installation. Il vous suffit de vous connecter à votre compte.",
  },
  // Rapports
  {
    question: "Puis-je personnaliser mes rapports avec mon logo ?",
    answer:
      "Oui. Ajoutez votre logo pour personnaliser automatiquement vos rapports PDF et vos e-mails aux couleurs de votre entreprise.",
  },
  {
    question: "Puis-je envoyer mes rapports directement depuis Untopo ?",
    answer:
      "Oui. Envoyez vos rapports directement depuis Untopo avec un e-mail professionnel prêt à être envoyé.",
  },
  {
    question: "Les rapports sont-ils adaptés aux assurances et aux syndics ?",
    answer:
      "Oui. Les rapports générés par Untopo présentent les informations généralement attendues lors d'une intervention : identification du demandeur, origine de la fuite, zones affectées, relevés des appareils de mesure et photos intégrées dans une mise en page professionnelle.",
  },
  {
    question: "Puis-je modifier un rapport après sa création ?",
    answer:
      "Oui. Tant qu'un rapport est en brouillon, vous pouvez le modifier, le compléter et le reprendre à tout moment — y compris depuis un autre appareil une fois synchronisé.",
  },
  {
    question: "Combien de temps faut-il pour créer un rapport ?",
    answer:
      "Grâce à la dictée vocale, aux photos et à la génération automatique du PDF, vous créez vos rapports en quelques minutes plutôt qu'en repartant de zéro.",
  },
  // Compte
  {
    question: "Mes anciens rapports sont-ils conservés ?",
    answer: "Oui. Retrouvez à tout moment l'historique de vos interventions.",
  },
  {
    question: "Les données sont-elles sécurisées ?",
    answer:
      "Oui. Vos rapports et vos photos sont stockés de manière sécurisée et ne sont accessibles qu'à vous.",
  },
  {
    question: "Mes clients verront-ils le logo Untopo ?",
    answer:
      "Non. Vos rapports PDF et vos e-mails affichent votre entreprise, avec votre logo et vos coordonnées. Le nom Untopo n'apparaît pas.",
  },
] as const;
