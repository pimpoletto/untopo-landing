import type { Metadata } from "next";

import { V4LaunchHomePage } from "@/versions/v4-launch/home-page";
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
  return <V4LaunchHomePage />;
}
