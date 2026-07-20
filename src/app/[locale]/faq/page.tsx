import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { getPathname } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Faq" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: getPathname({ locale, href: "/faq" }),
      languages: {
        fr: getPathname({ locale: "fr", href: "/faq" }),
        en: getPathname({ locale: "en", href: "/faq" }),
      },
    },
  };
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Faq");

  return (
    <>
      <Section className="pb-8 pt-14 sm:pb-8 sm:pt-20 lg:pb-10 lg:pt-24">
        <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="mx-auto max-w-3xl">
          <FaqList />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
