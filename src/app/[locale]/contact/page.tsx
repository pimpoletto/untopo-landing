import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { getPathname } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: getPathname({ locale, href: "/contact" }),
      languages: {
        fr: getPathname({ locale: "fr", href: "/contact" }),
        en: getPathname({ locale: "en", href: "/contact" }),
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <>
      <Section className="pb-8 pt-14 sm:pb-8 sm:pt-20 lg:pb-10 lg:pt-24">
        <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6">
              <p className="text-sm font-medium">{t("email")}</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-2 block text-lg font-medium text-primary-strong hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
            <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6">
              <p className="text-sm font-medium">{t("application")}</p>
              <a
                href={siteConfig.appUrl}
                className="mt-2 block text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.appUrl}
              </a>
              <p className="mt-3 text-sm text-muted-foreground">{t("appHint")}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
