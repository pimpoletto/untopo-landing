"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { Logo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLandingThemeOptional } from "@/components/landing/landing-theme-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useAppSession } from "@/hooks/use-app-session";
import { Link, usePathname } from "@/i18n/navigation";
import { navHrefs } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLabelKeys = ["pricing", "faq", "contact"] as const;

function HeaderAuthActions({
  isLandingDark,
  loggedIn,
  onNavigate,
  className,
  hideWhenLoggedIn,
}: {
  isLandingDark: boolean;
  loggedIn: boolean | null;
  onNavigate?: () => void;
  className?: string;
  hideWhenLoggedIn?: boolean;
}) {
  const t = useTranslations("Nav");

  if (hideWhenLoggedIn && loggedIn) return null;

  if (loggedIn) {
    return (
      <div className={className}>
        <Button
          href={siteConfig.appUrl}
          variant="ghost"
          size="sm"
          className="bg-[var(--cta-primary)] !text-white shadow-sm hover:bg-[var(--cta-primary-hover)]"
          onClick={onNavigate}
        >
          {t("dashboard")}
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <Button
        href={siteConfig.appUrl}
        variant="ghost"
        size="sm"
        external
        className={cn(
          "border bg-transparent",
          isLandingDark
            ? "border-white/30 !text-white hover:bg-white/10"
            : "border-border !text-foreground hover:bg-muted/50",
        )}
        onClick={onNavigate}
      >
        {t("login")}
      </Button>
      <Button
        href={siteConfig.appUrl}
        variant="ghost"
        size="sm"
        external
        className="bg-[var(--cta-primary)] !text-white shadow-sm hover:bg-[var(--cta-primary-hover)]"
        onClick={onNavigate}
      >
        {t("startFree")}
      </Button>
    </div>
  );
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const loggedIn = useAppSession();
  const landingTheme = useLandingThemeOptional();
  const isLanding = pathname === "/";
  const isLandingDark = isLanding && landingTheme?.theme === "dark";

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50",
        isLandingDark ? "bg-[#14102a]" : "bg-background",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo theme={isLandingDark ? "dark" : "light"} />

        <nav className="hidden items-center gap-1 md:flex" aria-label={t("mainAria")}>
          {navHrefs.map((href, index) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? isLandingDark
                    ? "bg-white/10 text-white"
                    : "bg-primary-soft text-primary-strong"
                  : isLandingDark
                    ? "text-white/70 hover:text-white"
                    : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(navLabelKeys[index])}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher isLandingDark={isLandingDark} />
          <HeaderAuthActions
            isLandingDark={isLandingDark}
            loggedIn={loggedIn}
            className="flex items-center gap-2"
          />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher isLandingDark={isLandingDark} />
          {loggedIn ? (
            <Button
              href={siteConfig.appUrl}
              variant="ghost"
              size="sm"
              className="bg-[var(--cta-primary)] !text-white shadow-sm hover:bg-[var(--cta-primary-hover)]"
            >
              {t("dashboard")}
            </Button>
          ) : null}
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg border",
              isLandingDark ? "border-white/20 text-white" : "border-border",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t("menu")}</span>
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
            {navHrefs.map((href, index) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-sm font-medium",
                  pathname === href
                    ? isLandingDark
                      ? "bg-white/10 text-white"
                      : "bg-primary-soft text-primary-strong"
                    : isLandingDark
                      ? "text-white/80"
                      : "text-foreground",
                )}
              >
                {t(navLabelKeys[index])}
              </Link>
            ))}
            <HeaderAuthActions
              isLandingDark={isLandingDark}
              loggedIn={loggedIn}
              hideWhenLoggedIn
              onNavigate={() => setOpen(false)}
              className={cn(
                "mt-2 flex flex-col gap-2 border-t pt-3",
                isLandingDark ? "border-white/10" : "border-border",
              )}
            />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
