import type { Metadata } from "next";

import { LegalDoc } from "@/components/legal-doc";
import { legalContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
};

export default function TermsPage() {
  return <LegalDoc title="CGU" content={legalContent.termsOfService} />;
}
