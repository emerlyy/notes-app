import { SettingType } from "@/store/settingsStore";
import { ColorTheme, FontTheme } from "@/types";
import { InputHTMLAttributes, SVGProps } from "react";
import {
  IconFontMonospace,
  IconFontSansSerif,
  IconFontSerif,
  IconMoon,
  IconSun,
  IconSystemTheme,
} from "../ui/icons";

type Option<T extends string = string> = {
  value: T;
  label: string;
  description: string;
  icon: React.ReactElement<SVGProps<SVGSVGElement>>;
} & InputHTMLAttributes<HTMLInputElement>;

export const SETTINGS_OPTIONS: Record<
  SettingType,
  Option<FontTheme | ColorTheme>[]
> = {
  "color-theme": [
    {
      value: "light",
      label: "Light Mode",
      description: "Pick a clean and classic light theme",
      icon: <IconSun />,
    },
    {
      value: "dark",
      label: "Dark Mode",
      description: "Select a sleek and modern dark theme",
      icon: <IconMoon />,
    },
    {
      value: "system",
      label: "System",
      description: "Adapts to your device’s theme",
      icon: <IconSystemTheme />,
    },
  ],
  "font-theme": [
    {
      value: "sans-serif",
      label: "Sans Serif",
      description: "Clean and modern, easy to read.",
      icon: <IconFontSansSerif />,
    },
    {
      value: "serif",
      label: "Serif",
      description: "Classic and elegant for a timeless feel.",
      icon: <IconFontSerif />,
    },
    {
      value: "monospace",
      label: "Monospace",
      description: "Code-like, great for a technical vibe",
      icon: <IconFontMonospace />,
    },
  ],
};
