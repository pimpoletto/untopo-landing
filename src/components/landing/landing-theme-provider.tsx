"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export type LandingTheme = "light" | "dark";

const STORAGE_KEY = "untopo-landing-theme";

type LandingThemeContextValue = {
  theme: LandingTheme;
  setTheme: (theme: LandingTheme) => void;
  toggleTheme: () => void;
  isLanding: boolean;
};

const LandingThemeContext = createContext<LandingThemeContextValue | null>(null);

function readStoredTheme(): LandingTheme {
  return "light";
}

function applyLandingTheme(theme: LandingTheme | null) {
  const root = document.documentElement;
  if (theme) {
    root.setAttribute("data-landing-theme", theme);
  } else {
    root.removeAttribute("data-landing-theme");
  }
}

export function LandingThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [theme, setThemeState] = useState<LandingTheme>("light");

  useEffect(() => {
    setThemeState(readStoredTheme());
  }, []);

  useEffect(() => {
    applyLandingTheme(isLanding ? theme : null);
  }, [isLanding, theme]);

  const setTheme = useCallback((_next: LandingTheme) => {
    setThemeState("light");
    try {
      localStorage.setItem(STORAGE_KEY, "light");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme("light");
  }, [setTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, isLanding }),
    [theme, setTheme, toggleTheme, isLanding],
  );

  return <LandingThemeContext.Provider value={value}>{children}</LandingThemeContext.Provider>;
}

export function useLandingTheme() {
  const ctx = useContext(LandingThemeContext);
  if (!ctx) {
    throw new Error("useLandingTheme must be used within LandingThemeProvider");
  }
  return ctx;
}

export function useLandingThemeOptional() {
  return useContext(LandingThemeContext);
}
