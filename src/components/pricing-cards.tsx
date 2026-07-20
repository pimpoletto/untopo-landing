"use client";

import { useTranslations } from "next-intl";
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

const planFeatureKeys = ["pdf", "edit", "history", "contacts", "voice"] as const;

export function PricingCards({ launchMode = false }: { launchMode?: boolean }) {
  const t = useTranslations("Pricing");
  const [yearly, setYearly] = useState(true);
  const price = yearly ? PRO_PRICE_ANNUAL_EUR : PRO_PRICE_MONTHLY_EUR;
  const period = yearly ? t("perYear") : t("perMonth");
  const monthlyEquivalent = (PRO_PRICE_ANNUAL_EUR / 12).toFixed(2).replace(".", ",");

  const billingOptions = [
    { id: true as const, label: t("yearly"), badge: t("yearlyBadge") },
    { id: false as const, label: t("monthly") },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-2">
        <div
          className="inline-flex rounded-xl border border-border bg-muted/50 p-1"
          role="tablist"
          aria-label={t("billingAria")}
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
          {yearly ? t("yearlyHint", { price: monthlyEquivalent }) : t("monthlyHint")}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">{t("free")}</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight">0 €</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("freeSubtitle")}</p>
          <div className="mt-4 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm">
            <p className="font-medium text-foreground">
              {t("reportsIncluded", { count: TRIAL_REPORTS })}
            </p>
            <p className="mt-1 text-muted-foreground">{t("noCard")}</p>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {planFeatureKeys.map((key) => (
              <li key={key} className="flex items-start gap-2.5 text-sm">
                <IconCheck className="mt-0.5 text-positive" />
                <span>{t(`planFeatures.${key}`)}</span>
              </li>
            ))}
          </ul>
          <Button
            href={siteConfig.appUrl}
            variant="ghost"
            external
            className="mt-8 w-full bg-[var(--cta-primary)] !text-white shadow-sm hover:bg-[var(--cta-primary-hover)]"
          >
            {t("startFree")}
          </Button>
        </div>

        <div className="brand-soft-tile relative flex flex-col overflow-hidden rounded-[calc(var(--radius)+2px)] p-6 sm:p-8">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative flex flex-1 flex-col">
            <p className="text-sm font-medium text-primary-strong">{t("pro")}</p>
            {launchMode ? (
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="text-4xl font-semibold tracking-tight text-muted-foreground line-through decoration-muted-foreground/70">
                  {price} €
                  <span className="text-base font-normal">{period}</span>
                </p>
                <span className="text-sm font-semibold text-positive">{t("launchFree")}</span>
              </div>
            ) : (
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                {price} €
                <span className="text-base font-normal text-muted-foreground">{period}</span>
              </p>
            )}
            <p className="mt-1 text-sm text-muted-foreground">
              {launchMode
                ? t("launchPriceNote")
                : yearly
                  ? t("yearlyPriceNote", { price: monthlyEquivalent })
                  : t("monthlyPriceNote")}
            </p>
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
              <p className="font-medium text-foreground">{t("unlimited")}</p>
              <p className="mt-1 text-muted-foreground">
                {yearly ? t("yearlySub") : t("monthlySub")}
              </p>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {planFeatureKeys.map((key) => (
                <li key={key} className="flex items-start gap-2.5 text-sm">
                  <IconCheck className="mt-0.5 text-positive" />
                  <span>{t(`planFeatures.${key}`)}</span>
                </li>
              ))}
            </ul>
            <Button
              href={siteConfig.appUrl}
              variant="ghost"
              external
              className="mt-8 w-full bg-[var(--cta-primary)] !text-white shadow-sm hover:bg-[var(--cta-primary-hover)]"
            >
              {launchMode
                ? t("tryNow")
                : yearly
                  ? t("subscribeYearly")
                  : t("subscribeMonthly")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
