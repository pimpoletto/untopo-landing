"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const reasonKeys = ["info", "issue", "suggestion", "partnership"] as const;

export function ContactForm() {
  const t = useTranslations("Contact");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 text-center sm:p-8">
        <p className="text-lg font-medium">{t("thanks")}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t("thanksHint")}</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5 rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(`[Untopo] ${String(data.get("reason"))}`);
        const body = encodeURIComponent(
          `${t("mailName")}: ${String(data.get("name"))}\n${t("mailEmail")}: ${String(data.get("email"))}\n\n${String(data.get("message"))}`,
        );
        window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2 text-sm">
          <span className="font-medium">{t("name")}</span>
          <input
            required
            name="name"
            className={inputClass}
            placeholder={t("namePlaceholder")}
            autoComplete="name"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="font-medium">{t("emailLabel")}</span>
          <input
            required
            type="email"
            name="email"
            className={inputClass}
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        <span className="font-medium">{t("reason")}</span>
        <select
          required
          name="reason"
          className={inputClass}
          defaultValue={t(`reasons.${reasonKeys[0]}`)}
        >
          {reasonKeys.map((key) => (
            <option key={key} value={t(`reasons.${key}`)}>
              {t(`reasons.${key}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2 text-sm">
        <span className="font-medium">{t("message")}</span>
        <textarea
          required
          name="message"
          rows={5}
          className={cn(inputClass, "resize-y min-h-32")}
          placeholder={t("messagePlaceholder")}
        />
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {t("submit")}
      </Button>
      <p className="text-xs text-muted-foreground">
        {t("formHint")}{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-primary-strong hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/30";
