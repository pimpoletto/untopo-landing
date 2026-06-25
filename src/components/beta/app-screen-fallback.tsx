import { cn } from "@/lib/utils";

type ScreenKind = "desktop-home" | "desktop-history" | "desktop-editor" | "desktop-pdf" | "mobile-home" | "mobile-report";

export function AppScreenFallback({
  kind,
  className,
}: {
  kind: ScreenKind;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-[hsl(210,20%,98%)] text-[hsl(222,38%,11%)]",
        kind.startsWith("mobile") ? "text-[11px]" : "text-xs",
        className,
      )}
      aria-hidden
    >
      {kind === "desktop-home" ? <DesktopHomeFallback /> : null}
      {kind === "desktop-history" ? <DesktopHistoryFallback /> : null}
      {kind === "desktop-editor" ? <DesktopEditorFallback /> : null}
      {kind === "desktop-pdf" ? <DesktopPdfFallback /> : null}
      {kind === "mobile-home" ? <MobileHomeFallback /> : null}
      {kind === "mobile-report" ? <MobileReportFallback /> : null}
    </div>
  );
}

function DesktopChrome({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex h-full min-h-[280px]">
      <aside className="hidden w-56 shrink-0 border-r border-[hsl(220,18%,84%)] bg-white p-3 sm:block">
        <div className="mb-4 h-7 w-24 rounded bg-[hsl(215,28%,92%)]" />
        <div className="space-y-2">
          {["Accueil", "Historique", "Contacts", "Réglages"].map((item, i) => (
            <div
              key={item}
              className={cn(
                "rounded-lg px-2.5 py-2",
                i === 0 ? "bg-[hsl(219,100%,95%)] text-[hsl(219,79%,48%)]" : "text-[hsl(220,12%,35%)]",
              )}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
      <div className="min-w-0 flex-1 p-4 sm:p-6">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-wider text-[hsl(220,12%,35%)]">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}

function DesktopHomeFallback() {
  return (
    <DesktopChrome title="Accueil">
      <div className="mx-auto max-w-md text-center">
        <h3 className="text-lg font-semibold tracking-tight sm:text-xl">Bonjour, Marc</h3>
        <p className="mt-1 text-[hsl(220,12%,35%)]">Prêt pour votre prochaine intervention ?</p>
        <div className="mx-auto mt-4 inline-flex rounded-xl border border-[hsl(220,18%,84%)] bg-white px-4 py-2.5 font-medium text-[hsl(219,79%,48%)]">
          + Nouveau rapport
        </div>
      </div>
      <div className="mx-auto mt-6 grid max-w-lg grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ["Rapports", "12"],
          ["Clients", "8"],
          ["Contacts", "3"],
          ["Lieu le + visité", "Rue des Lilas"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-[hsl(220,18%,84%)]/80 bg-white px-3 py-2.5 text-center">
            <p className="text-[10px] text-[hsl(220,12%,35%)]">{label}</p>
            <p className="mt-0.5 text-sm font-semibold tabular-nums">{value}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-4 max-w-lg rounded-2xl border border-[hsl(219,79%,57%)]/20 bg-gradient-to-br from-[hsl(219,100%,95%)] to-white p-3 text-left">
        <p className="font-medium">Accès gratuit</p>
        <p className="mt-1 text-[hsl(220,12%,35%)]">
          Phase de lancement — créez et exportez vos rapports sans frais.
        </p>
      </div>
    </DesktopChrome>
  );
}

function DesktopHistoryFallback() {
  return (
    <DesktopChrome title="Historique">
      <div className="space-y-2">
        {[
          ["Fuite cuisine — Rue des Lilas", "Généré · 12 juin"],
          ["Recherche fuite parking", "Brouillon · 11 juin"],
          ["Infiltration toiture", "Généré · 9 juin"],
        ].map(([title, meta]) => (
          <div key={title} className="rounded-xl border border-[hsl(220,18%,84%)] bg-white px-3 py-3">
            <p className="font-medium">{title}</p>
            <p className="mt-0.5 text-[hsl(220,12%,35%)]">{meta}</p>
          </div>
        ))}
      </div>
    </DesktopChrome>
  );
}

function DesktopEditorFallback() {
  return (
    <DesktopChrome title="Rapport">
      <div className="grid gap-3 lg:grid-cols-[1fr_200px]">
        <div className="space-y-3">
          <div className="rounded-xl border border-[hsl(220,18%,84%)] bg-white p-3">
            <p className="font-medium">Zone sinistrée — Cuisine</p>
            <p className="mt-1 leading-relaxed text-[hsl(220,12%,35%)]">
              Fuite localisée sous l&apos;évier. Humidité sur cloison adjacente. Recommandation
              ouverture carrelage 40×30 cm.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-[4/3] rounded-lg bg-[hsl(215,28%,92%)]" />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-[hsl(220,18%,84%)] bg-white p-3">
          <p className="font-medium">Infos pratiques</p>
          <p className="mt-2 text-[hsl(220,12%,35%)]">Client : M. Dupont</p>
          <p className="text-[hsl(220,12%,35%)]">Adresse : Rue des Lilas 12</p>
        </div>
      </div>
    </DesktopChrome>
  );
}

function DesktopPdfFallback() {
  return (
    <DesktopChrome title="Aperçu PDF">
      <div className="mx-auto max-w-sm rounded-lg border border-[hsl(220,18%,84%)] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-[hsl(220,18%,84%)] pb-3">
          <div className="h-6 w-16 rounded bg-[hsl(215,28%,92%)]" />
          <p className="text-[10px] text-[hsl(220,12%,35%)]">Rapport d&apos;intervention</p>
        </div>
        <p className="mt-3 font-semibold">Détection de fuite — Rue des Lilas</p>
        <p className="mt-1 text-[hsl(220,12%,35%)]">12 juin 2026 · Réf. 2026-0612</p>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded bg-[hsl(215,28%,92%)]" />
          <div className="h-2 w-5/6 rounded bg-[hsl(215,28%,92%)]" />
          <div className="h-2 w-4/6 rounded bg-[hsl(215,28%,92%)]" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="aspect-video rounded bg-[hsl(215,28%,92%)]" />
          <div className="aspect-video rounded bg-[hsl(215,28%,92%)]" />
        </div>
      </div>
    </DesktopChrome>
  );
}

function MobileHomeFallback() {
  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[hsl(210,20%,98%)]">
      <div className="flex items-center justify-between border-b border-[hsl(220,18%,84%)] px-3 py-2.5">
        <div className="h-5 w-16 rounded bg-[hsl(215,28%,92%)]" />
        <div className="size-7 rounded-full bg-[hsl(215,28%,92%)]" />
      </div>
      <div className="flex-1 space-y-3 p-3">
        <div className="brand-gradient rounded-2xl px-4 py-4 text-center text-white">
          <p className="font-medium">+ Nouveau rapport</p>
        </div>
        <p className="px-1 text-[10px] font-medium uppercase tracking-wider text-[hsl(220,12%,35%)]">
          Récents
        </p>
        {["Rue des Lilas", "Parking Central"].map((place) => (
          <div key={place} className="rounded-xl border border-[hsl(220,18%,84%)] bg-white px-3 py-2.5">
            <p className="font-medium">{place}</p>
            <p className="text-[hsl(220,12%,35%)]">Brouillon</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileReportFallback() {
  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[hsl(210,20%,98%)]">
      <div className="border-b border-[hsl(220,18%,84%)] px-3 py-2.5 text-center font-medium">
        Rapport
      </div>
      <div className="flex-1 space-y-2 p-3">
        <div className="rounded-xl border border-[hsl(220,18%,84%)] bg-white p-2.5">
          <p className="font-medium">Zone cuisine</p>
          <p className="mt-1 text-[hsl(220,12%,35%)]">Fuite sous évier…</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square rounded-lg bg-[hsl(215,28%,92%)]" />
          <div className="aspect-square rounded-lg bg-[hsl(215,28%,92%)]" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-[hsl(220,18%,84%)] p-2">
        <div className="rounded-lg bg-[hsl(215,28%,92%)] py-3 text-center">Photo</div>
        <div className="brand-gradient rounded-lg py-3 text-center text-white">Micro</div>
        <div className="rounded-lg bg-[hsl(215,28%,92%)] py-3 text-center">PDF</div>
      </div>
    </div>
  );
}
