import { ScreenshotFrame } from "@/components/beta/screenshot-frame";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { appScreenshots } from "@/lib/launch";

export function AppPreviewGallery() {
  return (
    <Section className="bg-card/50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Aperçu de l&apos;application
          </h2>
          <p className="mt-3 text-muted-foreground">
            Interface réelle Untopo — historique, édition, export PDF, mobile et bureau.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appScreenshots.map((shot) => (
            <ScreenshotFrame
              key={shot.id}
              id={shot.id}
              src={shot.src}
              alt={shot.alt}
              label={shot.label}
              variant={shot.variant}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
