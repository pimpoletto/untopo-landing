import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur Untopo : accès, offre Pro, utilisation hors ligne et sécurité des données.",
};

export default function FaqPage() {
  return (
    <>
      <Section className="pb-8 pt-14 sm:pt-20">
        <PageHero
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Tout ce qu'il faut savoir avant d'utiliser Untopo sur vos prochaines interventions."
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <FaqList />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
