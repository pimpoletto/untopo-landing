import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PricingCards } from "@/components/pricing-cards";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Untopo est actuellement gratuit pendant sa phase de lancement. Découvrez la grille tarifaire prévue pour la sortie officielle.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pb-8 pt-14 sm:pb-8 sm:pt-20 lg:pb-10 lg:pt-24">
        <PageHero
          eyebrow="Tarifs"
          title="Phase de lancement : accès gratuit jusqu'à la sortie officielle"
          description="Untopo est actuellement accessible gratuitement pendant sa phase de lancement. Les tarifs ci-dessous correspondent à la formule prévue lors du lancement officiel."
        />
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <PricingCards launchMode />
      </Section>

      <CtaBanner />
    </>
  );
}
