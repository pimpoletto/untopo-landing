import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { FeatureIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { getPathname } from "@/i18n/navigation";
import { featureIcons } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: getPathname({ locale, href: "/fonctionnalites" }),
      languages: {
        fr: getPathname({ locale: "fr", href: "/fonctionnalites" }),
        en: getPathname({ locale: "en", href: "/fonctionnalites" }),
      },
    },
  };
}

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FeaturesPage");
  const tFeatures = await getTranslations("Features");

  const workflow = [
    { step: "01", title: t("workflow.1.title"), text: t("workflow.1.text") },
    { step: "02", title: t("workflow.2.title"), text: t("workflow.2.text") },
    { step: "03", title: t("workflow.3.title"), text: t("workflow.3.text") },
  ];

  return (
    <>
      <Section className="pb-10 pt-14 sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24">
        <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-4 sm:grid-cols-3">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold tracking-widest text-primary-strong">
                {item.step}
              </p>
              <h2 className="mt-3 text-lg font-medium">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureIcons.map((icon) => (
            <article
              key={icon}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-soft p-2.5 text-primary-strong">
                <FeatureIcon name={icon} />
              </div>
              <h2 className="text-lg font-medium">{tFeatures(`${icon}.title`)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tFeatures(`${icon}.description`)}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-[calc(var(--radius)+4px)] border border-border bg-card p-6 text-center sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t("notTitle")}</h2>
          <p className="mt-3 text-muted-foreground">{t("notDescription")}</p>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
