import { HeroLeakDetectionBg } from "@/components/v2/hero-leak-bg";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { V2FeatureCards } from "@/components/v2/feature-cards";
import { CreatorShowcaseSection } from "@/components/v2/creator-showcase-section";
import { PdfShowcaseSection } from "@/components/v2/pdf-showcase-section";
import { VoiceShowcaseSection } from "@/components/v2/voice-showcase-section";
import { signupUrl } from "@/lib/v2";

export function V3PaidFinalHomePage() {
  return (
    <div className="landing-page">
      <section className="landing-hero relative overflow-hidden">
        <div className="landing-hero__grain" aria-hidden />
        <HeroLeakDetectionBg />

        <Container className="relative z-[1] flex flex-col items-center px-4 pb-6 pt-16 text-center sm:pt-20 lg:pt-24">
          <h1 className="landing-hero__title max-w-6xl text-[1.85rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:max-w-none lg:text-6xl lg:leading-[1.04] lg:whitespace-nowrap xl:text-[4.5rem]">
            Rapide, <span className="brand-gradient-text">facile,</span> professionnel.
          </h1>

          <p className="landing-hero__subtitle mt-8 max-w-2xl text-lg font-semibold leading-relaxed sm:mt-10 sm:text-xl sm:leading-relaxed lg:mt-12 lg:text-[1.35rem] lg:leading-snug">
            Créer et envoyer vos rapports de détection de fuites directement depuis votre
            ordinateur ou votre téléphone.
          </p>

          <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
            <Button
              href={signupUrl}
              size="lg"
              external
              className="landing-hero__cta-primary min-w-[220px] rounded-full px-8 text-base font-semibold"
            >
              Commencer gratuitement
            </Button>
          </div>
        </Container>

        <div className="landing-hero__visual relative z-0 h-[min(38vh,380px)] w-full sm:h-[min(42vh,420px)]" aria-hidden />
      </section>

      <PdfShowcaseSection />

      <Section id="fonctionnalites">
        <div className="mx-auto max-w-3xl text-center text-pretty">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Tout ce dont vous avez besoin pour vos&nbsp;rapports
          </h2>
          <p className="mt-3 text-muted-foreground">
            Créer, personnaliser, exporter et envoyer vos&nbsp;rapports de détection de fuite depuis
            une&nbsp;seule&nbsp;interface.
          </p>
        </div>
        <V2FeatureCards />
      </Section>

      <VoiceShowcaseSection />

      <CreatorShowcaseSection />

      <section className="landing-cta border-t">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="landing-cta__title text-2xl font-semibold tracking-tight sm:text-3xl">
            Commencez gratuitement dès aujourd&apos;hui
          </h2>
          <p className="landing-cta__subtitle mx-auto mt-3 max-w-lg text-sm sm:text-base">
            Créez, personnalisez et envoyez vos rapports de détection depuis une seule interface.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={signupUrl}
              size="lg"
              external
              className="landing-cta__btn-primary"
            >
              Commencer gratuitement
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
