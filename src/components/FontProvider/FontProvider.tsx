"use client";

import { inter, noto_serif, source_code_pro } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";
import { FontTheme } from "@/types";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import React from "react";

type FontProviderProps = {
  children: React.ReactElement<{ className: string }>;
};

const fonts: Record<FontTheme, NextFontWithVariable> = {
  "sans-serif": inter,
  serif: noto_serif,
  monospace: source_code_pro,
};

const FontProvider = ({ children }: FontProviderProps) => {
  const fontTheme = useSettings((state) => state.font);

  return React.cloneElement(children, {
    className: fonts[fontTheme].variable,
  });
};

export default FontProvider;
