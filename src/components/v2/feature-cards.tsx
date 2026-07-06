import type { ReactNode } from "react";

import { FeatureIcon } from "@/components/icons";
import { v2Features } from "@/lib/v2";

/* —— Illustrations (fragments d'UI thématiques) —— */

function IllustrationReport() {
  return (
    <div className="feature-illu">
      <div className="feature-illu__doc">
        <span className="feature-illu__bar feature-illu__bar--title" />
        <span className="feature-illu__bar" style={{ width: "88%" }} />
        <span className="feature-illu__bar" style={{ width: "72%" }} />
        <div className="feature-illu__field">
          <span className="feature-illu__bar" style={{ width: "40%" }} />
          <span className="feature-illu__caret" />
        </div>
        <span className="feature-illu__bar" style={{ width: "64%" }} />
      </div>
    </div>
  );
}

function IllustrationPdf() {
  return (
    <div className="feature-illu">
      <div className="feature-illu__doc feature-illu__doc--pdf">
        <span className="feature-illu__bar feature-illu__bar--title" style={{ width: "50%" }} />
        <span className="feature-illu__bar" style={{ width: "82%" }} />
        <span className="feature-illu__bar" style={{ width: "70%" }} />
        <span className="feature-illu__bar" style={{ width: "78%" }} />
        <span className="feature-illu__badge">PDF</span>
      </div>
    </div>
  );
}

function IllustrationHistory() {
  return (
    <div className="feature-illu feature-illu--rows">
      {["24/06", "18/06", "09/06"].map((date, i) => (
        <div key={date} className="feature-illu__row">
          <span className="feature-illu__date">{date}</span>
          <span className="feature-illu__bar" style={{ width: `${72 - i * 14}%` }} />
        </div>
      ))}
    </div>
  );
}

function IllustrationContacts() {
  return (
    <div className="feature-illu feature-illu--rows">
      {[0, 1, 2].map((i) => (
        <div key={i} className="feature-illu__row feature-illu__row--contact">
          <span className="feature-illu__avatar" />
          <span className="feature-illu__bar" style={{ width: `${68 - i * 12}%` }} />
          {i === 0 ? <span className="feature-illu__pin" /> : null}
        </div>
      ))}
    </div>
  );
}

function IllustrationPalette() {
  return (
    <div className="feature-illu feature-illu--palette">
      <div className="feature-illu__brandcard">
        <div className="feature-illu__brandcard-header">
          <span className="feature-illu__brandcard-logo" />
        </div>
        <div className="feature-illu__brandcard-body">
          <span className="feature-illu__bar" style={{ width: "76%" }} />
          <span className="feature-illu__bar" style={{ width: "58%" }} />
          <span className="feature-illu__bar" style={{ width: "66%" }} />
        </div>
      </div>
      <div className="feature-illu__swatches">
        <span className="feature-illu__swatch feature-illu__swatch--1" />
        <span className="feature-illu__swatch feature-illu__swatch--2" />
        <span className="feature-illu__swatch feature-illu__swatch--3" />
      </div>
    </div>
  );
}

function IllustrationMail() {
  return (
    <div className="feature-illu feature-illu--mail">
      <div className="feature-illu__mailcard">
        <div className="feature-illu__mailcard-head">
          <span className="feature-illu__mailcard-logo" />
          <span className="feature-illu__bar" style={{ width: "46%" }} />
        </div>
        <div className="feature-illu__mailcard-body">
          <span className="feature-illu__bar" style={{ width: "82%" }} />
          <span className="feature-illu__bar" style={{ width: "64%" }} />
        </div>
        <div className="feature-illu__mailcard-foot">
          <span className="feature-illu__attach">
            <span className="feature-illu__attach-badge">PDF</span>
            <span className="feature-illu__bar" style={{ width: "38px" }} />
          </span>
          <span className="feature-illu__plane">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M3.2 10.6 20.4 3.4a.6.6 0 0 1 .8.8l-7.2 17.2a.6.6 0 0 1-1.1 0l-2.5-6.7a.9.9 0 0 0-.5-.5l-6.7-2.5a.6.6 0 0 1 0-1.1Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

const ILLUSTRATIONS: Record<string, ReactNode> = {
  report: <IllustrationReport />,
  pdf: <IllustrationPdf />,
  history: <IllustrationHistory />,
  contacts: <IllustrationContacts />,
  palette: <IllustrationPalette />,
  mail: <IllustrationMail />,
};

export function V2FeatureCards() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {v2Features.map((feature) => (
        <article key={feature.title} className="feature-card">
          <div className="feature-card__body">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary-strong">
                <FeatureIcon name={feature.icon} className="size-5" />
              </span>
              <h3 className="text-base font-semibold tracking-tight">{feature.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
          <div className="feature-card__illu">{ILLUSTRATIONS[feature.icon]}</div>
        </article>
      ))}
    </div>
  );
}
