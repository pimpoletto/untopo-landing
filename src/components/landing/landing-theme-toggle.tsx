"use client";

import { useLandingThemeOptional } from "@/components/landing/landing-theme-provider";
import { cn } from "@/lib/utils";

type LandingThemeToggleProps = {
  className?: string;
  variant?: "header" | "hero";
};

export function LandingThemeToggle({ className, variant = "header" }: LandingThemeToggleProps) {
  const ctx = useLandingThemeOptional();
  if (!ctx?.isLanding) return null;

  const { theme, toggleTheme } = ctx;
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors",
        variant === "header"
          ? cn(
              "h-9 px-3",
              isDark
                ? "border border-white/15 text-white/80 hover:bg-white/10 hover:text-white"
                : "border border-border bg-card text-muted-foreground hover:text-foreground",
            )
          : cn(
              "h-10 border px-4 shadow-sm backdrop-blur-sm",
              isDark
                ? "border-white/15 bg-white/5 text-white/90 hover:bg-white/10"
                : "border-border/80 bg-white/80 text-foreground hover:bg-white",
            ),
        className,
      )}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5Z" strokeLinejoin="round" />
        </svg>
      )}
      <span className={variant === "header" ? "hidden sm:inline" : undefined}>
        {isDark ? "Clair" : "Sombre"}
      </span>
    </button>
  );
}
