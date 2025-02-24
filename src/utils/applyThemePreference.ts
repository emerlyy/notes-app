import { ColorTheme, FontTheme } from "@/types";
import Cookies from "js-cookie";

type Args = {
  colorTheme?: ColorTheme;
  fontTheme?: FontTheme;
};

export const applyThemePreference = (theme: Args) => {
  if (!theme.colorTheme && !theme.fontTheme) return;

  const body = document.body;
  if (theme.colorTheme) {
    body.dataset.colorTheme = theme.colorTheme;
    Cookies.set("color-theme", theme.colorTheme, { expires: 365 });
  }
  if (theme.fontTheme) {
    body.dataset.fontTheme = theme.fontTheme;
    Cookies.set("font-theme", theme.fontTheme, { expires: 365 });
  }
};
