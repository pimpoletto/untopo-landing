import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CreatorShowcaseSection() {
  return (
    <Section id="createur">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visuel */}
          <div className="creator-showcase lg:order-1">
            <div className="creator-showcase__glow" aria-hidden />

            <div className="creator-showcase__browser">
              <div className="creator-showcase__chrome">
                <span className="creator-showcase__dot" />
                <span className="creator-showcase__dot" />
                <span className="creator-showcase__dot" />
                <span className="creator-showcase__url">app.untopo.com/rapport</span>
              </div>
              <Image
                src="/showcase/creator-desktop.png"
                alt="Créateur de rapport Untopo — vue ordinateur"
                width={1024}
                height={498}
                className="creator-showcase__desktop-img"
                priority
              />
            </div>

            <div className="creator-showcase__phone">
              <Image
                src="/showcase/creator-mobile.png"
                alt="Créateur de rapport Untopo — vue mobile"
                width={393}
                height={852}
                className="creator-showcase__phone-img"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Pensé pour les détecteurs de fuites
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground sm:text-lg">
              Untopo a été développé avec des professionnels du terrain afin de créer une expérience
              simple, rapide et efficace pour rédiger vos rapports, aussi bien sur téléphone que sur
              ordinateur.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
