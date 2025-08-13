// src/theme/ThemeProvider.tsx
import { useColorScheme as useNWColorScheme } from "nativewind";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Scheme = "light" | "dark" | "system";
type ThemeCtx = {
  scheme: Scheme;
  resolvedScheme: "light" | "dark";
  setScheme: (s: Scheme) => void;
  toggle: () => void;
};

const Ctx = createContext<ThemeCtx | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme, setColorScheme } = useNWColorScheme();
  const [scheme, setScheme] = useState<Scheme>("system");

  // Tell NativeWind what to use: "light" | "dark" | "system"
  useEffect(() => {
    setColorScheme(scheme);
  }, [scheme, setColorScheme]);

  const resolvedScheme = (colorScheme ?? "light") as "light" | "dark";

  const value = useMemo<ThemeCtx>(
    () => ({
      scheme,
      resolvedScheme,
      setScheme,
      toggle: () => setScheme((p) => (p === "dark" ? "light" : "dark")),
    }),
    [scheme, resolvedScheme]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAppTheme = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAppTheme must be used inside AppThemeProvider");
  return ctx;
};
