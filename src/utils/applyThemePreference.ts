import { ColorTheme, FontTheme } from "@/types";

type Args = {
  colorTheme?: ColorTheme;
  fontTheme?: FontTheme;
};

export const applyThemePreference = (theme: Args) => {
  if (!theme.colorTheme && !theme.fontTheme) return;

  const body = window.document.body;
  if (theme.colorTheme) {
    body.dataset.colorTheme = theme.colorTheme;
  }
  if (theme.fontTheme) {
    body.dataset.fontTheme = theme.fontTheme;
  }
};
