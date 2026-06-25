import type { Metadata } from "next";

import { LegalDoc } from "@/components/legal-doc";
import { legalContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function LegalNoticePage() {
  return <LegalDoc title="Mentions légales" content={legalContent.legalNotice} />;
}
