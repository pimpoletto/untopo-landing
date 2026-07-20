import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { V4LaunchHomePage } from "@/versions/v4-launch/home-page";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const pathname = getPathname({ locale, href: "/" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: pathname,
      languages: {
        fr: getPathname({ locale: "fr", href: "/" }),
        en: getPathname({ locale: "en", href: "/" }),
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <V4LaunchHomePage />;
}
