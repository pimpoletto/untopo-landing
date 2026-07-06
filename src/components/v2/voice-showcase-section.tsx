import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

function VoiceIllustration() {
  return (
    <div className="voice-showcase">
      <div className="voice-showcase__glow" />

      <div className="voice-showcase__panel">
        <div className="voice-showcase__frame">
          <video
            className="voice-showcase__video"
            src="/showcase/voice-dictee-anim-5.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </div>
  );
}

export function VoiceShowcaseSection() {
  return (
    <Section id="dictee-vocale">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Une rédaction plus simple
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dictez votre rapport oralement ou rédigez-le manuellement. Untopo peut ensuite corriger
              et peaufiner automatiquement votre texte, sans modifier le sens de vos observations.
            </p>
          </div>

          <VoiceIllustration />
        </div>
      </Container>
    </Section>
  );
}
