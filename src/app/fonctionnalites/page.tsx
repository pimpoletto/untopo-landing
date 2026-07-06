import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { FeatureIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Dictée vocale, photos annotées, PDF professionnel et carnet contacts — découvrez Untopo pour les experts fuites.",
};

const workflow = [
  {
    step: "01",
    title: "Démarrez l'intervention",
    text: "Créez un rapport en un geste. L'app garde le brouillon actif pour reprendre plus tard.",
  },
  {
    step: "02",
    title: "Décrivez et photographiez",
    text: "Dictez vos constats, capturez les zones sinistrées et annotez les visuels sur place.",
  },
  {
    step: "03",
    title: "Validez et envoyez",
    text: "Générez le PDF, vérifiez le rendu et partagez-le au client ou à l'assureur.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Section className="pb-10 pt-14 sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24">
        <PageHero
          eyebrow="Fonctionnalités"
          title="Un assistant terrain, pas un logiciel de gestion"
          description="Untopo se concentre sur une seule mission : vous faire gagner du temps sur chaque rapport d'intervention, avec un minimum de manipulation."
        />
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-4 sm:grid-cols-3">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold tracking-widest text-primary-strong">{item.step}</p>
              <h2 className="mt-3 text-lg font-medium">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-soft p-2.5 text-primary-strong">
                <FeatureIcon name={feature.icon} />
              </div>
              <h2 className="text-lg font-medium">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-[calc(var(--radius)+4px)] border border-border bg-card p-6 text-center sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Ce que Untopo n&apos;est pas</h2>
          <p className="mt-3 text-muted-foreground">
            Pas de CRM lourd, pas de parcours administratif à rallonge, pas de formation de
            plusieurs jours. Untopo reste un outil de terrain, rapide et fiable.
          </p>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
