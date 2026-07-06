"use client";

import { useEffect, useState } from "react";

import { detectAppSession } from "@/lib/app-session";
import { siteConfig } from "@/lib/site";

export function useAppSession(): boolean | null {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    detectAppSession(siteConfig.appUrl).then((ok) => {
      if (!cancelled) setLoggedIn(ok);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return loggedIn;
}
