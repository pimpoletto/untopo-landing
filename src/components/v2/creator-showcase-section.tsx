"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CreatorShowcaseSection() {
  const t = useTranslations("CreatorShowcase");

  return (
    <Section id="createur">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
                alt={t("desktopAlt")}
                width={1024}
                height={498}
                className="creator-showcase__desktop-img"
                priority
              />
            </div>

            <div className="creator-showcase__phone">
              <Image
                src="/showcase/creator-mobile.png"
                alt={t("mobileAlt")}
                width={393}
                height={852}
                className="creator-showcase__phone-img"
              />
            </div>
          </div>

          <div className="lg:order-2">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground sm:text-lg">
              {t("description")}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
