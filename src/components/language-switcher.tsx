"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function LanguageSwitcher({
  className,
  isLandingDark = false,
}: {
  className?: string;
  isLandingDark?: boolean;
}) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative inline-flex", className)}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-lg px-1.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
          isLandingDark
            ? "text-white/80 hover:bg-white/10 hover:text-white"
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
        )}
        aria-label={t("label")}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <GlobeIcon className="size-3.5 shrink-0" />
        <span>{t(locale)}</span>
        <ChevronDownIcon
          className={cn("size-3.5 shrink-0 opacity-70 transition-transform", open && "rotate-180")}
        />
      </button>

      {open ? (
        <div
          className={cn(
            "language-switcher__menu absolute right-0 top-full z-50 mt-2 w-44 origin-top-right overflow-hidden rounded-2xl border p-1.5",
            isLandingDark
              ? "border-white/12 bg-[#1a1630]/95 text-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md"
              : "border-border/80 bg-card/95 text-foreground shadow-[0_18px_40px_-18px_rgba(15,23,42,0.28)] backdrop-blur-md",
          )}
        >
          <ul id={listId} role="listbox" aria-label={t("label")} className="space-y-0.5">
            {routing.locales.map((code) => {
              const active = code === locale;
              return (
                <li key={code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors",
                      active
                        ? isLandingDark
                          ? "bg-white/12 text-white"
                          : "bg-primary-soft text-primary-strong"
                        : isLandingDark
                          ? "text-white/80 hover:bg-white/8"
                          : "text-foreground hover:bg-muted/70",
                    )}
                    onClick={() => {
                      setOpen(false);
                      if (code === locale) return;
                      router.replace(pathname, { locale: code });
                    }}
                  >
                    <span
                      className={cn(
                        "inline-flex size-7 shrink-0 items-center justify-center rounded-lg text-[0.65rem] font-bold uppercase tracking-wide",
                        active
                          ? isLandingDark
                            ? "bg-white/15 text-white"
                            : "bg-background/80 text-primary-strong shadow-sm"
                          : isLandingDark
                            ? "bg-white/8 text-white/70"
                            : "bg-muted text-muted-foreground",
                      )}
                    >
                      {t(code)}
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-medium normal-case tracking-normal">
                      {t(`${code}Name`)}
                    </span>
                    {active ? (
                      <CheckIcon
                        className={cn(
                          "size-3.5 shrink-0",
                          isLandingDark ? "text-white/80" : "text-primary-strong",
                        )}
                      />
                    ) : (
                      <span className="size-3.5 shrink-0" aria-hidden />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
