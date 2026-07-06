"use client";

import { useState } from "react";

import { IconCheck } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  PRO_PRICE_ANNUAL_EUR,
  PRO_PRICE_MONTHLY_EUR,
  siteConfig,
  TRIAL_REPORTS,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const planFeatures = [
  "Exports PDF professionnels",
  "Modification de rapports",
  "Historique complet",
  "Carnet de contacts & lieux",
  "Dictée vocale et ajout de photos",
] as const;

export function PricingCards({ launchMode = false }: { launchMode?: boolean }) {
  const [yearly, setYearly] = useState(true);
  const price = yearly ? PRO_PRICE_ANNUAL_EUR : PRO_PRICE_MONTHLY_EUR;
  const period = yearly ? "/ an" : "/ mois";
  const monthlyEquivalent = (PRO_PRICE_ANNUAL_EUR / 12)
    .toFixed(2)
    .replace(".", ",");

  const billingOptions = [
    { id: true, label: "Annuel", badge: "2 mois offerts" },
    { id: false, label: "Mensuel" },
  ] as const;

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-2">
        <div
          className="inline-flex rounded-xl border border-border bg-muted/50 p-1"
          role="tablist"
          aria-label="Période de facturation"
        >
          {billingOptions.map((option) => (
            <button
              key={String(option.id)}
              type="button"
              role="tab"
              aria-selected={yearly === option.id}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                yearly === option.id
                  ? option.id
                    ? "brand-gradient text-white shadow-sm"
                    : "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setYearly(option.id)}
            >
              {option.label}
              {"badge" in option && option.badge ? (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide",
                    yearly === option.id
                      ? "bg-white/20 text-white"
                      : "bg-positive/15 text-positive",
                  )}
                >
                  {option.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {yearly
            ? `Économisez 2 mois par rapport au tarif mensuel (soit ${monthlyEquivalent} €/mois).`
            : "Passez à l'annuel pour économiser l'équivalent de 2 mois."}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">Gratuit</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight">0 €</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Pour tester l&apos;app avant de souscrire à Pro
          </p>
          <div className="mt-4 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm">
            <p className="font-medium text-foreground">
              {TRIAL_REPORTS} rapports inclus
            </p>
            <p className="mt-1 text-muted-foreground">Sans carte bancaire</p>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {planFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <IconCheck className="mt-0.5 text-positive" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            href={siteConfig.appUrl}
            variant="ghost"
            external
            className="mt-8 w-full bg-[var(--cta-primary)] !text-white shadow-sm hover:bg-[var(--cta-primary-hover)]"
          >
            Commencer gratuitement
          </Button>
        </div>

        <div className="brand-soft-tile relative flex flex-col overflow-hidden rounded-[calc(var(--radius)+2px)] p-6 sm:p-8">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative flex flex-1 flex-col">
            <p className="text-sm font-medium text-primary-strong">Untopo Pro</p>
            {launchMode ? (
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="text-4xl font-semibold tracking-tight text-muted-foreground line-through decoration-muted-foreground/70">
                  {price} €
                  <span className="text-base font-normal">{period}</span>
                </p>
                <span className="text-sm font-semibold text-positive">
                  gratuit phase de lancement
                </span>
              </div>
            ) : (
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                {price} €
                <span className="text-base font-normal text-muted-foreground">{period}</span>
              </p>
            )}
            <p className="mt-1 text-sm text-muted-foreground">
              {launchMode
                ? "Tarif prévu à la sortie officielle · hors TVA"
                : yearly
                  ? `Soit ${monthlyEquivalent} €/mois · hors TVA`
                  : "Hors TVA · tarifs indicatifs"}
            </p>
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
              <p className="font-medium text-foreground">Rapports illimités</p>
              <p className="mt-1 text-muted-foreground">
                {yearly
                  ? "Abonnement annuel — 2 mois offerts"
                  : "Abonnement mensuel, sans engagement"}
              </p>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {planFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <IconCheck className="mt-0.5 text-positive" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href={siteConfig.appUrl}
              variant="ghost"
              external
              className="mt-8 w-full bg-[var(--cta-primary)] !text-white shadow-sm hover:bg-[var(--cta-primary-hover)]"
            >
              {launchMode ? "Essayer maintenant" : yearly ? "S'abonner à l'année" : "S'abonner au mois"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
