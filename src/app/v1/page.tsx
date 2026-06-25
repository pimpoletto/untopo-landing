import type { Metadata } from "next";

import { V1HomePage } from "@/versions/v1/home-page";

export const metadata: Metadata = {
  title: "Untopo v1 — Archive",
  robots: { index: false, follow: false },
};

export default function V1ArchivePage() {
  return <V1HomePage />;
}
