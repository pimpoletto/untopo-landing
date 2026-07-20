import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "always",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/tarifs": {
      fr: "/tarifs",
      en: "/pricing",
    },
    "/faq": "/faq",
    "/contact": "/contact",
    "/fonctionnalites": {
      fr: "/fonctionnalites",
      en: "/features",
    },
    "/phase-lancement": {
      fr: "/phase-lancement",
      en: "/launch-phase",
    },
    "/mentions-legales": {
      fr: "/mentions-legales",
      en: "/legal-notice",
    },
    "/cgu": {
      fr: "/cgu",
      en: "/terms",
    },
    "/confidentialite": {
      fr: "/confidentialite",
      en: "/privacy",
    },
    "/retention-donnees": {
      fr: "/retention-donnees",
      en: "/data-retention",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
