import type { Metadata } from "next";

import { LegalDoc } from "@/components/legal-doc";
import { launchLegalContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Phase de lancement",
};

export default function LaunchPhasePage() {
  return (
    <LegalDoc title="Phase de lancement" content={launchLegalContent.launchInfo} />
  );
}
