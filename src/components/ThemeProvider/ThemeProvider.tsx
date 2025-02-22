"use client";

import { inter, noto_serif, source_code_pro } from "@/app/fonts";
import { useSettings } from "@/store/useSettings";
import { FontTheme } from "@/types";
import { applyThemePreference } from "@/utils/applyThemePreference";
import React, { useEffect } from "react";
import { useShallow } from "zustand/shallow";

const fonts: Record<FontTheme, string> = {
  "sans-serif": inter.variable,
  serif: noto_serif.variable,
  monospace: source_code_pro.variable,
};

const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement<{ className: string }>;
}) => {
  const theme = useSettings(
    useShallow((state) => ({
      colorTheme: state.color,
      fontTheme: state.font,
    }))
  );

  useEffect(() => {
    applyThemePreference({ ...theme });
  }, [theme]);

  return React.cloneElement(children, { className: fonts[theme.fontTheme] });
};

export default ThemeProvider;
