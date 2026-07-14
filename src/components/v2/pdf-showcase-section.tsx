import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const PDF_PAGES = [
  "/pdf-preview/page-1.png",
  "/pdf-preview/page-2.png",
  "/pdf-preview/page-3.png",
] as const;

export function PdfShowcaseSection() {
  return (
    <Section id="generation-pdf">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche : titre + texte */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Rapport PDF professionnels
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Untopo transforme en un clic vos interventions en rapports PDF clairs, structurés et
              prêts à transmettre — directement à vos clients ou à leur assurance.
            </p>
          </div>

          {/* Colonne droite : encart PDF défilant */}
          <div className="pdf-preview">
            <div className="pdf-preview__chrome">
              <span className="pdf-preview__dot" />
              <span className="pdf-preview__dot" />
              <span className="pdf-preview__dot" />
              <span className="pdf-preview__filename">rapport-detection.pdf</span>
              <span className="pdf-preview__badge" aria-hidden>
                PDF
              </span>
            </div>
            <div className="pdf-preview__frame">
              <div className="pdf-preview__scroll">
                {PDF_PAGES.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Rapport Untopo — page ${index + 1}`}
                    width={723}
                    height={1024}
                    className="pdf-preview__page"
                    priority={index === 0}
                  />
                ))}
              </div>
              <div className="pdf-preview__fade pdf-preview__fade--top" aria-hidden />
              <div className="pdf-preview__fade pdf-preview__fade--bottom" aria-hidden />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
