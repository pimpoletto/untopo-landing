"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { HeroAnimStepsV2 } from "@/components/v2/hero-leak-bg";
import { V2FeatureCards } from "@/components/v2/feature-cards";
import { CreatorShowcaseSection } from "@/components/v2/creator-showcase-section";
import { PdfShowcaseSection } from "@/components/v2/pdf-showcase-section";
import { VoiceShowcaseSection } from "@/components/v2/voice-showcase-section";
import { signupUrl } from "@/lib/v2";
import { TRIAL_REPORTS } from "@/lib/site";

function HomeTitle() {
  const t = useTranslations("Home");
  const raw = t.raw("title") as string;
  const parts = raw.split(/<\/?gradient>/);

  return (
    <h1 className="landing-hero__title max-w-6xl text-[2.0625rem] font-extrabold leading-[1.1] tracking-tight sm:text-4xl sm:leading-[1.08] md:text-5xl lg:max-w-none lg:text-6xl lg:leading-[1.04] xl:text-[4.5rem]">
      {parts[0]}
      <span className="brand-gradient-text">{parts[1]}</span>
      {parts[2]}
    </h1>
  );
}

export function V4LaunchHomePage() {
  return <HomePageContent />;
}

function HomePageContent() {
  const t = useTranslations("Home");

  return (
    <div className="landing-page landing-page--ambient-v1">
      <div className="landing-page__ambient" aria-hidden />

      <div className="landing-page__content">
        <section className="landing-hero landing-hero--above-animation">
          <Container className="relative z-20 flex flex-col items-center px-4 pb-20 pt-16 text-center sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
            <HomeTitle />

            <p className="landing-hero__subtitle mt-6 max-w-2xl text-[0.9375rem] font-medium leading-relaxed sm:mt-10 sm:text-xl sm:font-semibold sm:leading-relaxed lg:mt-12 lg:text-[1.35rem] lg:leading-snug">
              {t("subtitle")}
            </p>

            <div className="mt-10 flex flex-col items-center sm:mt-12 lg:mt-14">
              <Button
                href={signupUrl}
                size="lg"
                external
                className="landing-hero__cta-primary min-w-[220px] rounded-full px-8 text-base font-semibold"
              >
                {t("cta")}
              </Button>

              <p className="landing-hero__trust" aria-label={t("trustAria")}>
                <span className="landing-hero__trust-item">
                  <span className="landing-hero__trust-check" aria-hidden>
                    ✓
                  </span>
                  {t("trustNoInstall")}
                </span>
                <span className="landing-hero__trust-sep" aria-hidden>
                  •
                </span>
                <span className="landing-hero__trust-item">
                  <span className="landing-hero__trust-check" aria-hidden>
                    ✓
                  </span>
                  {t("trustDevices")}
                </span>
                <span className="landing-hero__trust-sep" aria-hidden>
                  •
                </span>
                <span className="landing-hero__trust-item">
                  <span className="landing-hero__trust-check" aria-hidden>
                    ✓
                  </span>
                  {t("trustTrial", { count: TRIAL_REPORTS })}
                </span>
              </p>
            </div>
          </Container>
        </section>

        <div
          className="landing-page__hero-animation landing-page__hero-animation--creator landing-page__hero-animation--creator-v2"
          aria-hidden
        >
          <HeroAnimStepsV2 />
        </div>

        <div className="landing-page__section-above-animation">
          <PdfShowcaseSection />
        </div>

        <Section id="fonctionnalites">
          <div className="mx-auto max-w-3xl text-center text-pretty">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {t("featuresTitle")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("featuresSubtitle")}</p>
          </div>
          <V2FeatureCards />
        </Section>

        <VoiceShowcaseSection />

        <CreatorShowcaseSection />

        <section className="landing-cta border-t">
          <Container className="py-16 text-center sm:py-20">
            <h2 className="landing-cta__title text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("ctaTitle")}
            </h2>
            <p className="landing-cta__subtitle mx-auto mt-3 max-w-lg text-sm sm:text-base">
              {t("ctaSubtitle")}
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href={signupUrl}
                size="lg"
                external
                className="landing-cta__btn-primary"
              >
                {t("cta")}
              </Button>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
