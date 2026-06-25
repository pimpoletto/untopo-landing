import { siteConfig } from "@/lib/site";

export const v2Pillars = [
  {
    id: "voice",
    title: "Dictez, ne ressaisissez pas",
    description:
      "Décrivez l'intervention à voix haute. Untopo transcrit et structure le contenu dans un rapport clair.",
  },
  {
    id: "photos",
    title: "Photographiez sur place",
    description:
      "Capturez les zones sinistrées, annotez les visuels et associez chaque preuve au bon endroit du dossier.",
  },
  {
    id: "pdf",
    title: "Exportez un PDF pro",
    description:
      "Générez un document prêt à envoyer au client ou à l'assureur, avec votre identité visuelle.",
  },
  {
    id: "sync",
    title: "Mobile et bureau, un seul flux",
    description:
      "Commencez sur le terrain, finalisez au bureau. Historique, contacts et exports restent centralisés.",
  },
] as const;

export const v2FeatureTabs = [
  {
    id: "editor",
    label: "Éditeur",
    title: "Structurez chaque intervention sans formulaires interminables",
    description:
      "Zones, constatations, photos et infos pratiques dans une interface pensée pour un usage quotidien sur le terrain.",
    screenshotId: "editor",
    src: "/screenshots/beta/desktop-editor.png",
    alt: "Éditeur de rapport Untopo",
  },
  {
    id: "history",
    label: "Historique",
    title: "Retrouvez chaque dossier en quelques secondes",
    description:
      "Filtrez par statut, recherchez par référence et reprenez un brouillon là où vous l'avez laissé.",
    screenshotId: "history",
    src: "/screenshots/beta/desktop-history.png",
    alt: "Historique des rapports Untopo",
  },
  {
    id: "pdf",
    label: "Export PDF",
    title: "Un rendu professionnel, prêt à transmettre",
    description:
      "Méthodes, constatations par zone et visuels annotés — le format attendu par vos clients et assureurs.",
    screenshotId: "pdf",
    src: "/screenshots/beta/desktop-pdf.png",
    alt: "Aperçu PDF Untopo",
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Même outil dans la poche, sur le chantier",
    description:
      "Interface mobile-first : créez et complétez vos rapports là où l'intervention se déroule.",
    screenshotId: "mobile-report",
    src: "/screenshots/beta/mobile-report.png",
    alt: "Rapport Untopo sur mobile",
    variant: "mobile" as const,
  },
] as const;

export type V2FeatureTabId = (typeof v2FeatureTabs)[number]["id"];

export const v2Features = [
  {
    icon: "report",
    title: "Créateur de rapports",
    description:
      "Créez des rapports de détection de fuite rapidement grâce à une interface fluide",
  },
  {
    icon: "pdf",
    title: "Génération PDF professionnelle",
    description:
      "Générez automatiquement des rapports PDF propres, structurés et prêts à être envoyés à vos clients ou assurances.",
  },
  {
    icon: "history",
    title: "Historique des interventions",
    description:
      "Retrouvez facilement vos anciens rapports ainsi que l'historique complet de vos interventions.",
  },
  {
    icon: "contacts",
    title: "Carnet de contacts et lieux",
    description:
      "Les adresses et contacts liés à vos rapports sont automatiquement enregistrés dans votre carnet Untopo.",
  },
  {
    icon: "palette",
    title: "Personnalisation de vos rapports",
    description:
      "Ajoutez votre logo et personnalisez automatiquement vos rapports PDF aux couleurs de votre entreprise.",
  },
  {
    icon: "mail",
    title: "Envoi des rapports par e-mail",
    description:
      "Envoyez vos rapports directement depuis Untopo avec une mise en page professionnelle intégrant votre logo.",
  },
] as const satisfies readonly { icon: string; title: string; description: string }[];

export const v2Difference = [
  {
    title: "Pensé pour les détecteurs de fuites",
    description:
      "Untopo a été développé avec des professionnels du terrain afin de reproduire leur véritable manière de travailler. Chaque écran, chaque action et chaque étape du processus ont été conçus pour réduire les frictions et accélérer la création des rapports.",
  },
  {
    title: "Une expérience simple et efficace",
    description:
      "Untopo ne cherche pas à impressionner avec des fonctionnalités inutiles. L'application a été pensée pour être rapide à comprendre, agréable à utiliser et efficace au quotidien, aussi bien sur téléphone que sur ordinateur.",
  },
] as const;

export const v2Workflow = [
  {
    title: "Du constat à la zone",
    text: "Dictez vos observations ou saisissez-les — Untopo organise le contenu par zone sinistrée.",
  },
  {
    title: "De la photo au rapport",
    text: "Chaque visuel est rattaché au bon endroit, avec annotations et contexte métier.",
  },
  {
    title: "Du brouillon au PDF envoyé",
    text: "Validez, générez le PDF et partagez-le — sans repasser par Word ou des modèles éparpillés.",
  },
] as const;

export const v2QuickStart = [
  { step: "1", title: "Créez votre compte", text: "Inscription en quelques clics, sans carte bancaire." },
  { step: "2", title: "Démarrez un rapport", text: "Sur mobile ou ordinateur, dès la fin d'intervention." },
  { step: "3", title: "Générez le PDF", text: "Export professionnel prêt à envoyer au client ou à l'assureur." },
] as const;

export const v2TrustPoints = [
  "Données hébergées via des prestataires conformes (Supabase, Vercel)",
  "Vous conservez vos exports PDF et restez responsable de vos archivages",
  "Accessible gratuitement pendant la phase de lancement",
] as const;

export const launchNotice =
  "Untopo est actuellement accessible gratuitement pendant sa phase de lancement.";

export const signupUrl = `${siteConfig.appUrl}/login`;
