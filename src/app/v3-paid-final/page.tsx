import type { Metadata } from "next";

import { V3PaidFinalHomePage } from "@/versions/v3-paid-final/home-page";

export const metadata: Metadata = {
  title: "Untopo v3 Paid Final — Archive",
  robots: { index: false, follow: false },
};

export default function V3PaidFinalArchivePage() {
  return <V3PaidFinalHomePage />;
}
