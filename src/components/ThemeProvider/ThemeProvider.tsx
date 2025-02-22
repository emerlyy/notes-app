"use client";

import { useSettings } from "@/store/useSettings";
import { applyThemePreference } from "@/utils/applyThemePreference";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSettings(
    useShallow((state) => ({
      colorTheme: state.color,
      fontTheme: state.font,
    }))
  );

  useEffect(() => {
    applyThemePreference({ ...theme });
  }, [theme]);

  return children;
};

export default ThemeProvider;
