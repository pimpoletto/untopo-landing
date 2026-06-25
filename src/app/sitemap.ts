import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/fonctionnalites",
  "/tarifs",
  "/faq",
  "/contact",
  "/phase-lancement",
  "/mentions-legales",
  "/cgu",
  "/confidentialite",
  "/retention-donnees",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
