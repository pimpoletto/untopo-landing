import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { FeatureIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { features, siteConfig, TRIAL_REPORTS } from "@/lib/site";

/** Landing v1 — archivée sur /v1 */
export function V1HomePage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden border-b border-border/60">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-primary-strong">
              Assistant terrain pour experts fuites
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              Vos rapports d&apos;intervention,{" "}
              <span className="brand-gradient-text">5 à 10× plus vite</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Untopo transforme votre dictée et vos photos en rapports PDF structurés. Conçu pour
              le terrain — pas un CRM, pas un logiciel de bureau.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={siteConfig.appUrl} size="lg" external>
                Essayer gratuitement
              </Button>
              <Button href="/fonctionnalites" variant="secondary" size="lg">
                Découvrir les fonctionnalités
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {TRIAL_REPORTS} rapports offerts · sans carte bancaire · installation PWA
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="brand-soft-tile relative overflow-hidden rounded-[calc(var(--radius)+8px)] p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/brand/symbol-square-icon.svg"
                    alt=""
                    width={44}
                    height={44}
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-medium">Rapport en cours</p>
                    <p className="text-xs text-muted-foreground">Rue des Lilas — fuite cuisine</p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-background/80 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Dictée vocale
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    « Fuite localisée sous l&apos;évier, humidité sur cloison adjacente. Recommandation
                    ouverture carrelage zone 40×30 cm. »
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-background/80 p-3">
                    <p className="text-xs text-muted-foreground">Photos</p>
                    <p className="mt-1 text-2xl font-semibold">4</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background/80 p-3">
                    <p className="text-xs text-muted-foreground">Zones</p>
                    <p className="mt-1 text-2xl font-semibold">2</p>
                  </div>
                </div>
                <div className="brand-gradient rounded-xl px-4 py-3 text-center text-sm font-medium text-white">
                  Générer le PDF
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Pensé pour l&apos;intervention, pas pour le bureau
          </h2>
          <p className="mt-3 text-muted-foreground">
            Une seule main libre. Zéro formation. Un flux simple : parler, photographier, valider.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Voix d'abord",
              text: "Structurez le rapport en parlant naturellement, sans ressaisir sur clavier.",
            },
            {
              title: "Mobile-first",
              text: "Interface épurée, boutons accessibles, installation sur l'écran d'accueil.",
            },
            {
              title: "PDF pro",
              text: "Export prêt à envoyer, avec votre identité visuelle et vos coordonnées.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-5"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/50">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Tout ce qu&apos;il faut sur le terrain
            </h2>
            <p className="mt-3 text-muted-foreground">
              Des fonctionnalités utiles, sans complexité inutile.
            </p>
          </div>
          <Button href="/fonctionnalites" variant="secondary">
            Voir tout
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 3).map((feature) => (
            <div
              key={feature.title}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-soft p-2.5 text-primary-strong">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="brand-soft-tile rounded-[calc(var(--radius)+4px)] px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Tarifs simples et transparents</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Commencez avec {TRIAL_REPORTS} rapports gratuits. Passez à Pro quand vous êtes
                convaincu sur le terrain.
              </p>
            </div>
            <Button href="/tarifs" size="lg">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
