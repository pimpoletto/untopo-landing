"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "symbol";
  theme?: "light" | "dark";
  className?: string;
  href?: "/";
};

export function Logo({ variant = "full", theme = "light", className, href = "/" }: LogoProps) {
  const t = useTranslations("Nav");

  if (theme === "dark") {
    return (
      <Link
        href={href}
        className={cn("inline-flex shrink-0 items-center gap-2.5", className)}
        aria-label={`${siteConfig.name} — ${t("homeAria")}`}
      >
        <Image
          src="/brand/symbol.svg"
          alt=""
          width={32}
          height={32}
          priority
          className="size-8"
          aria-hidden
        />
        <span className="text-lg font-semibold tracking-tight text-white">{siteConfig.name}</span>
      </Link>
    );
  }

  const src =
    variant === "full" ? "/brand/symbol-logotype-header.svg" : "/brand/symbol.svg";

  const height = variant === "full" ? 32 : 36;
  const width = variant === "full" ? 140 : 36;

  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.name} — ${t("homeAria")}`}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={width}
        height={height}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
