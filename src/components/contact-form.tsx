"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const reasons = [
  "Demande d'information",
  "Signaler un problème",
  "Suggestion d'amélioration",
  "Partenariat / presse",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-card p-6 text-center sm:p-8">
        <p className="text-lg font-medium">Merci pour votre message.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Nous vous répondrons à l&apos;adresse indiquée dès que possible.
        </p>
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
          `Nom: ${String(data.get("name"))}\nEmail: ${String(data.get("email"))}\n\n${String(data.get("message"))}`,
        );
        window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2 text-sm">
          <span className="font-medium">Nom</span>
          <input
            required
            name="name"
            className={inputClass}
            placeholder="Jean Dupont"
            autoComplete="name"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="font-medium">Email</span>
          <input
            required
            type="email"
            name="email"
            className={inputClass}
            placeholder="vous@entreprise.be"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        <span className="font-medium">Motif</span>
        <select required name="reason" className={inputClass} defaultValue={reasons[0]}>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2 text-sm">
        <span className="font-medium">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className={cn(inputClass, "resize-y min-h-32")}
          placeholder="Décrivez votre besoin ou votre question..."
        />
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Envoyer le message
      </Button>
      <p className="text-xs text-muted-foreground">
        Le formulaire ouvre votre client mail avec le message prérempli. Vous pouvez aussi nous
        écrire directement à{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary-strong hover:underline">
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/30";
