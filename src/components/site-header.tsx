"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/brand/logo";
import { LandingThemeToggle } from "@/components/landing/landing-theme-toggle";
import { useLandingThemeOptional } from "@/components/landing/landing-theme-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const landingTheme = useLandingThemeOptional();
  const isLanding = pathname === "/";
  const isLandingDark = isLanding && landingTheme?.theme === "dark";

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 backdrop-blur-md",
        isLandingDark
          ? "border-b border-white/10 bg-[#14102a]/85"
          : "border-b border-border/80 bg-background/90",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo theme={isLandingDark ? "dark" : "light"} />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? isLandingDark
                    ? "bg-white/10 text-white"
                    : "bg-primary-soft text-primary-strong"
                  : isLandingDark
                    ? "text-white/70 hover:text-white"
                    : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LandingThemeToggle />
          <Button
            href={siteConfig.appUrl}
            variant="ghost"
            size="sm"
            external
            className={cn(
              isLandingDark && "text-white/80 hover:bg-white/10 hover:text-white",
            )}
          >
            Connexion
          </Button>
          {isLanding ? (
            <Button
              href="/#apercu"
              size="sm"
              className={cn(
                isLandingDark
                  ? "border border-[#7c9eff]/50 bg-transparent text-white hover:bg-white/10"
                  : "border border-primary/25 bg-transparent text-primary-strong hover:bg-primary-soft",
              )}
            >
              Voir l&apos;application
            </Button>
          ) : null}
          <Button
            href={siteConfig.appUrl}
            size="sm"
            external
            className={cn(
              isLandingDark && "bg-white text-[#14102a] hover:bg-white/90",
            )}
          >
            Commencer gratuitement
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LandingThemeToggle />
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg border",
              isLandingDark ? "border-white/20 text-white" : "border-border",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className={cn(
            "border-t md:hidden",
            isLandingDark ? "border-white/10 bg-[#14102a]" : "border-border",
          )}
        >
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-sm font-medium",
                  pathname === link.href
                    ? isLandingDark
                      ? "bg-white/10 text-white"
                      : "bg-primary-soft text-primary-strong"
                    : isLandingDark
                      ? "text-white/80"
                      : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div
              className={cn(
                "mt-2 flex flex-col gap-2 border-t pt-3",
                isLandingDark ? "border-white/10" : "border-border",
              )}
            >
              <Button
                href={siteConfig.appUrl}
                variant="ghost"
                external
                className={cn(isLandingDark && "text-white hover:bg-white/10")}
              >
                Connexion
              </Button>
              <Button
                href={siteConfig.appUrl}
                external
                className={cn(isLandingDark && "bg-white text-[#14102a] hover:bg-white/90")}
              >
                Commencer gratuitement
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
