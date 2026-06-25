import type { Metadata } from "next";

import { LegalDoc } from "@/components/legal-doc";
import { legalContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Rétention des données",
};

export default function DataRetentionPage() {
  return <LegalDoc title="Rétention des données" content={legalContent.dataRetention} />;
}
