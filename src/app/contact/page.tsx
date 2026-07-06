import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe Untopo pour une question, un partenariat ou une suggestion.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-8 pt-14 sm:pb-8 sm:pt-20 lg:pb-10 lg:pt-24">
        <PageHero
          eyebrow="Contact"
          title="Une question ? Écrivez-nous."
          description="Support, démo, partenariat ou retour terrain — nous lisons chaque message."
        />
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6">
              <p className="text-sm font-medium">Email</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-2 block text-lg font-medium text-primary-strong hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
            <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6">
              <p className="text-sm font-medium">Application</p>
              <a
                href={siteConfig.appUrl}
                className="mt-2 block text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.appUrl}
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Pour un problème technique dans l&apos;app, précisez votre appareil et la dernière
                action effectuée.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
