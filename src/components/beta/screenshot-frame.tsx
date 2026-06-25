"use client";

import Image from "next/image";
import { useState } from "react";

import { AppScreenFallback } from "@/components/beta/app-screen-fallback";
import { cn } from "@/lib/utils";

const FALLBACK_BY_ID: Record<string, Parameters<typeof AppScreenFallback>[0]["kind"]> = {
  history: "desktop-history",
  editor: "desktop-editor",
  pdf: "desktop-pdf",
  "mobile-home": "mobile-home",
  "mobile-report": "mobile-report",
};

type ScreenshotFrameProps = {
  id: string;
  src: string;
  alt: string;
  label: string;
  variant: "desktop" | "mobile";
  className?: string;
  priority?: boolean;
};

export function ScreenshotFrame({
  id,
  src,
  alt,
  label,
  variant,
  className,
  priority,
}: ScreenshotFrameProps) {
  const [useFallback, setUseFallback] = useState(false);
  const fallbackKind = FALLBACK_BY_ID[id] ?? (variant === "mobile" ? "mobile-home" : "desktop-home");

  return (
    <figure className={cn("space-y-2", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-[calc(var(--radius)+2px)] border border-border bg-[hsl(210,20%,96%)] shadow-sm",
          variant === "desktop" ? "aspect-[16/10]" : "aspect-[9/19]",
        )}
      >
        {!useFallback ? (
          <Image
            src={src}
            alt={alt}
            width={variant === "desktop" ? 1280 : 390}
            height={variant === "desktop" ? 800 : 844}
            className="h-full w-full object-contain object-top"
            priority={priority}
            onError={() => setUseFallback(true)}
          />
        ) : (
          <AppScreenFallback kind={fallbackKind} className="h-full w-full" />
        )}
      </div>
      <figcaption className="text-center text-sm text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

export function HeroScreenshots() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div className="rounded-[calc(var(--radius)+6px)] border border-border bg-card p-2 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-3">
        <ScreenshotFrame
          id="editor"
          src="/screenshots/beta/desktop-editor.png"
          alt="Éditeur de rapport Untopo sur ordinateur"
          label="Éditeur de rapport — bureau"
          variant="desktop"
          priority
          className="[&_figcaption]:sr-only"
        />
      </div>
      <div className="absolute -bottom-6 -right-2 w-[38%] max-w-[180px] sm:-bottom-8 sm:-right-4 sm:max-w-[220px]">
        <div className="rounded-[1.25rem] border-4 border-background bg-background p-1 shadow-lg">
          <ScreenshotFrame
            id="mobile-home"
            src="/screenshots/beta/mobile-home.png"
            alt="Untopo sur smartphone"
            label="Vue mobile"
            variant="mobile"
            className="[&_figcaption]:sr-only"
          />
        </div>
      </div>
    </div>
  );
}
