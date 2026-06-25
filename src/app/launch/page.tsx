import type { Metadata } from "next";

import { Logo } from "@/components/brand/logo";
import { AppPreviewGallery } from "@/components/beta/app-preview-gallery";
import { HeroScreenshots } from "@/components/beta/screenshot-frame";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  launchConfig,
  launchFeatureCards,
  launchNotice,
} from "@/lib/launch";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Untopo — Rapports de détection pour experts fuites",
  description:
    "Créez vos rapports de détection plus rapidement. Untopo simplifie la création, l'organisation et l'envoi de rapports professionnels de détection de fuite.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Untopo — Rapports de détection pour experts fuites",
    description: siteConfig.description,
  },
};

export default function LaunchArchivePage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden border-b border-border/60">
        <Container className="grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="space-y-6">
            <Logo />

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                Créez vos rapports de détection plus rapidement.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Untopo simplifie la création, l&apos;organisation et l&apos;envoi de rapports
                professionnels de détection de fuite.
              </p>
              <p className="text-sm text-muted-foreground">
                Pensé pour fonctionner aussi bien sur mobile que sur ordinateur.
              </p>
              <p className="text-sm text-muted-foreground">{launchNotice}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={launchConfig.signupUrl} size="lg" external>
                Commencer gratuitement
              </Button>
              <Button href="#apercu" variant="secondary" size="lg">
                Découvrir l&apos;application
              </Button>
            </div>
          </div>

          <HeroScreenshots />
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ce que permet Untopo
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {launchFeatureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-5 sm:p-6"
            >
              <h3 className="text-lg font-medium">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div id="apercu">
        <AppPreviewGallery />
      </div>

      <Section>
        <div className="brand-soft-tile relative overflow-hidden rounded-[calc(var(--radius)+4px)] px-6 py-8 sm:px-10 sm:py-10">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-3xl space-y-5 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Prêt pour votre prochaine intervention ?
            </h2>
            <p className="text-muted-foreground">{launchNotice}</p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Button href={launchConfig.signupUrl} size="lg" external>
                Commencer gratuitement
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
