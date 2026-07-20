import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LandingThemeProvider } from "@/components/landing/landing-theme-provider";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: "/brand/symbol-square-icon.svg",
    apple: "/brand/symbol-square-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f7f9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full`}
      suppressHydrationWarning
    >
      <body className={`${geistSans.className} flex min-h-full flex-col antialiased`}>
        <Script id="landing-theme-init" strategy="beforeInteractive">
          {`(function(){try{var p=window.location.pathname;if(p!=="/"&&p!=="")return;document.documentElement.setAttribute("data-landing-theme","light");}catch(e){}})();`}
        </Script>
        <LandingThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LandingThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
