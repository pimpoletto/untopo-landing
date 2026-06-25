import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PricingCards } from "@/components/pricing-cards";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Untopo Pro à partir de 49 €/mois. Accès gratuit pendant la phase de lancement. Tarifs transparents pour experts fuites.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pb-8 pt-14 sm:pt-20">
        <PageHero
          eyebrow="Tarifs"
          title="Des tarifs clairs, un accès gratuit pour démarrer"
          description="Commencez gratuitement pendant la phase de lancement. Les tarifs Pro ci-dessous seront activés ultérieurement."
        />
      </Section>

      <Section className="pt-0">
        <PricingCards />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-4 text-sm text-muted-foreground">
          <p>
            La facturation sera activée ultérieurement. Les montants affichés sont hors TVA et
            indicatifs.
          </p>
          <p>
            L&apos;offre annuelle correspond à 10 mois facturés (2 mois offerts par rapport au
            tarif mensuel).
          </p>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
