import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { launchNotice } from "@/lib/launch";
import { siteConfig } from "@/lib/site";

export function CtaBanner() {
  return (
    <Section className="pb-20 pt-4">
      <div className="brand-soft-tile relative overflow-hidden rounded-[calc(var(--radius)+4px)] px-6 py-10 text-center sm:px-10 sm:py-14">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-2xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Prêt pour votre prochaine intervention ?
          </h2>
          <p className="text-muted-foreground">{launchNotice}</p>
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Button href={siteConfig.appUrl} size="lg" external>
              Commencer gratuitement
            </Button>
            <Button href="/tarifs" variant="secondary" size="lg">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
