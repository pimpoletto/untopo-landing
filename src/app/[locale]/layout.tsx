import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LandingThemeProvider } from "@/components/landing/landing-theme-provider";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s — ${siteConfig.name}`,
    },
    description: t("description"),
    applicationName: siteConfig.name,
    openGraph: {
      type: "website",
      locale: t("ogLocale"),
      siteName: siteConfig.name,
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    icons: {
      icon: "/brand/symbol-square-icon.svg",
      apple: "/brand/symbol-square-icon.svg",
    },
    alternates: {
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Script id="set-html-lang" strategy="beforeInteractive">
        {`document.documentElement.lang=${JSON.stringify(locale)};`}
      </Script>
      <Script id="landing-theme-init" strategy="beforeInteractive">
        {`(function(){try{var p=window.location.pathname;if(p!=="/fr"&&p!=="/en"&&p!=="/fr/"&&p!=="/en/")return;document.documentElement.setAttribute("data-landing-theme","light");}catch(e){}})();`}
      </Script>
      <LandingThemeProvider>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </LandingThemeProvider>
    </NextIntlClientProvider>
  );
}
