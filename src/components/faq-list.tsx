"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function FaqList() {
  const t = useTranslations("Faq");
  const items = t.raw("items") as { question: string; answer: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-[calc(var(--radius)+2px)] border border-border bg-card">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="text-sm font-medium sm:text-base">{item.question}</span>
              <span
                className={cn(
                  "mt-0.5 shrink-0 text-muted-foreground transition-transform",
                  open && "rotate-45",
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            {open ? (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
