import Image from "next/image";

import { LandingThemeToggle } from "@/components/landing/landing-theme-toggle";
import { HeroLeakDetectionBg } from "@/components/v2/hero-leak-bg";
import { V2FeatureTabs } from "@/components/v2/feature-tabs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FeatureIcon } from "@/components/icons";
import { launchNotice, signupUrl, v2Difference, v2Features, v2Pillars, v2QuickStart, v2TrustPoints, v2Workflow } from "@/lib/v2";

export function V2HomePage() {
  return (
    <div className="landing-page">
      <section className="landing-hero relative overflow-hidden">
        <div className="landing-hero__grain" aria-hidden />
        <HeroLeakDetectionBg />

        <Container className="relative z-[1] flex flex-col items-center px-4 pb-6 pt-16 text-center sm:pt-20 lg:pt-24">
          <div className="mb-6 flex justify-center md:hidden">
            <LandingThemeToggle variant="hero" />
          </div>

          <h1 className="landing-hero__title max-w-6xl text-[1.85rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:max-w-none lg:text-6xl lg:leading-[1.04] lg:whitespace-nowrap xl:text-[4.5rem]">
            Rapide, <span className="brand-gradient-text">facile,</span> professionnel.
          </h1>

          <p className="landing-hero__subtitle mt-8 max-w-2xl text-lg font-semibold leading-relaxed sm:mt-10 sm:text-xl sm:leading-relaxed lg:mt-12 lg:text-[1.35rem] lg:leading-snug">
            Créer et envoyer vos rapports de détection de fuites directement depuis votre
            ordinateur ou votre téléphone.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row lg:mt-14">
            <Button
              href={signupUrl}
              size="lg"
              external
              className="landing-hero__cta-primary min-w-[220px] rounded-full px-8 text-base font-semibold"
            >
              Commencer gratuitement
            </Button>
            <Button
              href="#apercu"
              size="lg"
              className="landing-hero__cta-secondary min-w-[220px] rounded-full px-8 text-base font-semibold"
            >
              Voir l&apos;application
            </Button>
          </div>
        </Container>

        <div className="landing-hero__visual relative z-0 h-[min(38vh,380px)] w-full sm:h-[min(42vh,420px)]" aria-hidden />
      </section>

      {/* Features grid */}
      <Section id="fonctionnalites">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Tout ce dont vous avez besoin pour vos rapports
          </h2>
          <p className="mt-3 text-muted-foreground">
            Créer, personnaliser, exporter et envoyer vos rapports de détection de fuite depuis une seule interface.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {v2Features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary-strong">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Difference Untopo */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            La différence Untopo
          </h2>
          <p className="mt-3 text-muted-foreground">
            Une application pensée intelligemment pour le métier, pas une usine à fonctionnalités.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {v2Difference.map((item) => (
            <div
              key={item.title}
              className="rounded-[calc(var(--radius)+4px)] border border-border bg-card p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pillars — "Developer first" */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Pensé pour le terrain. D&apos;abord.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Une seule main libre. Zéro formation. Un flux simple : parler, photographier, valider.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {v2Pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-medium">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Feature tabs — Sentry carousel pattern */}
      <Section className="bg-card/40" id="apercu">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              L&apos;application en action
            </h2>
            <p className="mt-3 text-muted-foreground">
              Éditeur, historique, PDF et mobile — le même outil, partout où vous travaillez.
            </p>
          </div>
          <V2FeatureTabs />
        </Container>
      </Section>

      {/* Connected workflow */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Tout est relié
          </h2>
          <p className="mt-3 text-muted-foreground">
            Dictée, photos, zones et export PDF — un seul fil conducteur, du chantier au document final.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {v2Workflow.map((item, index) => (
            <div
              key={item.title}
              className="relative rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold tracking-widest text-primary-strong">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick start */}
      <Section className="bg-card/40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Démarrez en quelques minutes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pas de configuration complexe. Créez un compte et lancez votre premier rapport.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {v2QuickStart.map((item) => (
            <div
              key={item.step}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary-strong">
                {item.step}
              </div>
              <h3 className="mt-4 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href={signupUrl} size="lg" external>
            Créer un compte
          </Button>
        </div>
      </Section>

      {/* Trust band */}
      <Section>
        <div className="rounded-[calc(var(--radius)+4px)] border border-border bg-card px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Conçu pour être fiable, sans vous compliquer la vie
              </h2>
              <ul className="mt-4 space-y-2">
                {v2TrustPoints.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary-strong" aria-hidden>
                      ·
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <Button href="/confidentialite" variant="secondary">
                Confidentialité
              </Button>
              <Button href="/contact" variant="ghost" className="text-muted-foreground">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="landing-cta border-t">
        <Container className="py-16 text-center sm:py-20">
          <div className="mx-auto flex max-w-md justify-center">
            <Image
              src="/brand/symbol.svg"
              alt=""
              width={48}
              height={48}
              aria-hidden
              className="opacity-90"
            />
          </div>
          <h2 className="landing-cta__title mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
            Passez moins de temps sur vos rapports
          </h2>
          <p className="landing-cta__subtitle mx-auto mt-3 max-w-lg text-sm sm:text-base">
            {launchNotice}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={signupUrl}
              size="lg"
              external
              className="landing-cta__btn-primary"
            >
              Commencer gratuitement
            </Button>
            <Button
              href="/tarifs"
              variant="secondary"
              size="lg"
              className="landing-cta__btn-secondary"
            >
              Voir les tarifs
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
