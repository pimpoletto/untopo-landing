"use client";

import { useState } from "react";

import { ScreenshotFrame } from "@/components/beta/screenshot-frame";
import { cn } from "@/lib/utils";
import { v2FeatureTabs, type V2FeatureTabId } from "@/lib/v2";

export function V2FeatureTabs() {
  const [active, setActive] = useState<V2FeatureTabId>(v2FeatureTabs[0].id);
  const tab = v2FeatureTabs.find((t) => t.id === active) ?? v2FeatureTabs[0];
  const isMobile = "variant" in tab && tab.variant === "mobile";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
      <div>
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Fonctionnalités Untopo"
        >
          {v2FeatureTabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === item.id}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? "border-primary/30 bg-primary-soft text-primary-strong"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-4" role="tabpanel">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{tab.title}</h3>
          <p className="text-base leading-relaxed text-muted-foreground">{tab.description}</p>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto w-full",
          isMobile ? "max-w-[280px]" : "max-w-2xl",
        )}
      >
        <div className="rounded-[calc(var(--radius)+6px)] border border-border bg-card p-2 shadow-[0_24px_60px_rgba(15,23,42,0.1)] sm:p-3">
          <ScreenshotFrame
            id={tab.screenshotId}
            src={tab.src}
            alt={tab.alt}
            label={tab.label}
            variant={isMobile ? "mobile" : "desktop"}
            className="[&_figcaption]:sr-only"
          />
        </div>
      </div>
    </div>
  );
}
