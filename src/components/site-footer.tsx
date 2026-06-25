import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { footerLegalLinks, navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Logiciel de rapport terrain pour experts fuites. Voix, photos, PDF — conçu pour
            l&apos;intervention réelle.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Produit</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={siteConfig.appUrl} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                Ouvrir l&apos;application
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Légal</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Contact</p>
          <p className="text-sm text-muted-foreground">
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-foreground">
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. Tous droits réservés.</p>
          <p>Conçu pour les professionnels de la détection de fuites.</p>
        </Container>
      </div>
    </footer>
  );
}
