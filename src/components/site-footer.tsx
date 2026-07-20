import { getTranslations } from "next-intl/server";

import { Logo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Container } from "@/components/ui/container";
import { Link } from "@/i18n/navigation";
import { footerLegalHrefs, navHrefs, siteConfig } from "@/lib/site";

const navLabelKeys = ["pricing", "faq", "contact"] as const;
const legalLabelKeys = [
  "legalNotice",
  "terms",
  "privacy",
  "dataRetention",
  "launchPhase",
] as const;

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <Logo />
          <LanguageSwitcher />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">{t("product")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navHrefs.map((href, index) => (
              <li key={href}>
                <Link href={href} className="hover:text-foreground">
                  {tNav(navLabelKeys[index])}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.appUrl}
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("openApp")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">{t("legal")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerLegalHrefs.map((href, index) => (
              <li key={href}>
                <Link href={href} className="hover:text-foreground">
                  {t(legalLabelKeys[index])}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">{t("contact")}</p>
          <p className="text-sm text-muted-foreground">
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-foreground">
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
        </Container>
      </div>
    </footer>
  );
}
