"use client";

import { useState } from "react";

import { IconCheck } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  PRO_PRICE_ANNUAL_EUR,
  PRO_PRICE_MONTHLY_EUR,
  siteConfig,
} from "@/lib/site";
import { launchNotice } from "@/lib/launch";
import { cn } from "@/lib/utils";

const proFeatures = [
  "Exports PDF illimités",
  "Modification de rapports illimitée",
  "Historique complet",
  "Carnet de contacts & lieux",
];

export function PricingCards() {
  const [yearly, setYearly] = useState(true);
  const price = yearly ? PRO_PRICE_ANNUAL_EUR : PRO_PRICE_MONTHLY_EUR;
  const period = yearly ? "/ an" : "/ mois";

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div
          className="inline-flex rounded-xl border border-border bg-muted/50 p-1"
          role="tablist"
          aria-label="Période de facturation"
        >
          {[
            { id: false, label: "Mensuel" },
            { id: true, label: "Annuel" },
          ].map((option) => (
            <button
              key={String(option.id)}
              type="button"
              role="tab"
              aria-selected={yearly === option.id}
              className={cn(
                "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                yearly === option.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setYearly(option.id)}
            >
              {option.label}
              {option.id ? (
                <span className="ml-1.5 text-xs text-positive">−2 mois</span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">Phase de lancement</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight">0 €</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Accès gratuit pendant la phase de lancement
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Toutes les fonctionnalités de création",
              "Dictée vocale et photos",
              "Export PDF professionnel",
              "Sans carte bancaire",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <IconCheck className="mt-0.5 text-positive" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button href={siteConfig.appUrl} className="mt-8 w-full" external>
            Commencer gratuitement
          </Button>
        </div>

        <div className="brand-soft-tile relative overflow-hidden rounded-[calc(var(--radius)+2px)] p-6 sm:p-8">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-primary-strong">Untopo Pro</p>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary-strong">
                Recommandé
              </span>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-tight">
              {price} €
              <span className="text-base font-normal text-muted-foreground">{period}</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Hors TVA · tarifs indicatifs</p>
            <ul className="mt-6 space-y-3">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <IconCheck className="mt-0.5 text-positive" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href={siteConfig.appUrl} className="mt-8 w-full" external>
              Passer à Pro
            </Button>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">{launchNotice}</p>
      <p className="text-center text-sm text-muted-foreground">
        La facturation sera activée ultérieurement. Les tarifs affichés sont indicatifs.
      </p>
    </div>
  );
}
