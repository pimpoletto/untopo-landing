import type { Metadata } from "next";

import { V2HomePage } from "@/versions/v2/home-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return <V2HomePage />;
}
