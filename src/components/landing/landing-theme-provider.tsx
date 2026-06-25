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
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return "dark";
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
  const [theme, setThemeState] = useState<LandingTheme>("dark");

  useEffect(() => {
    setThemeState(readStoredTheme());
  }, []);

  useEffect(() => {
    applyLandingTheme(isLanding ? theme : null);
  }, [isLanding, theme]);

  const setTheme = useCallback((next: LandingTheme) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

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
