import { ColorTheme, FontTheme } from "@/types";
import { createStore } from "zustand";

export type SettingType = "color-theme" | "font-theme";

export type SettingsProps = {
  color: ColorTheme;
  font: FontTheme;
};

type SettingsActions = {
  setActive: (setting: SettingType) => void;
  setColor: (color: ColorTheme) => void;
  setFont: (font: FontTheme) => void;
};

export type SettingsState = {
  active: SettingType;
  color: ColorTheme;
  font: FontTheme;
} & SettingsActions;

export type SettingsStore = ReturnType<typeof createSettingsStore>;

export const createSettingsStore = (initProps?: Partial<SettingsProps>) => {
  const DEFAULT_PROPS: SettingsProps = {
    color: "light",
    font: "sans-serif",
  };
  return createStore<SettingsState>()((set) => ({
    active: "color-theme",
    ...DEFAULT_PROPS,
    ...initProps,
    setActive: (setting) => set({ active: setting }),
    setColor: (color) => set({ color: color }),
    setFont: (font) => set({ font: font }),
  }));
};
