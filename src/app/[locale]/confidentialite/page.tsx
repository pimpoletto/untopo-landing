import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { LegalDoc } from "@/components/legal-doc";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getLegalMarkdown, type LegalDocId } from "@/lib/legal";

type Props = { params: Promise<{ locale: string }> };

const DOC: LegalDocId = "privacy";
const HREF = "/confidentialite" as const;
const TITLE_KEY = "privacyTitle" as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });

  return {
    title: t(TITLE_KEY),
    alternates: {
      canonical: getPathname({ locale, href: HREF }),
      languages: {
        fr: getPathname({ locale: "fr", href: HREF }),
        en: getPathname({ locale: "en", href: HREF }),
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Legal");
  const content = await getLegalMarkdown(locale as Locale, DOC);

  return <LegalDoc title={t(TITLE_KEY)} content={content} eyebrow={t("eyebrow")} />;
}
