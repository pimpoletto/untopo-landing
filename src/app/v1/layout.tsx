import { NextIntlClientProvider } from "next-intl";

import frMessages from "@/messages/fr.json";

/** Minimal intl + chrome for archived routes outside /[locale]. */
export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="fr" messages={frMessages}>
      <main className="flex-1">{children}</main>
    </NextIntlClientProvider>
  );
}
