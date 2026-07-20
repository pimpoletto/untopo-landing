import type { MetadataRoute } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing, type Pathnames } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const routes: Pathnames[] = [
  "/",
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

  return routes.flatMap((href) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        `${base}${getPathname({ locale, href })}`,
      ]),
    );

    return routing.locales.map((locale) => {
      const path = getPathname({ locale, href });
      return {
        url: `${base}${path}`,
        lastModified: new Date(),
        changeFrequency: href === "/" ? ("weekly" as const) : ("monthly" as const),
        priority: href === "/" ? 1 : 0.7,
        alternates: {
          languages,
        },
      };
    });
  });
}
