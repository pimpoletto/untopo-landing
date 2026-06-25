import type { Metadata } from "next";

import { LegalDoc } from "@/components/legal-doc";
import { legalContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PrivacyPage() {
  return <LegalDoc title="Confidentialité" content={legalContent.privacyPolicy} />;
}
