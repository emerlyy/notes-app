import { ColorTheme, FontTheme } from "@/types";
import { create } from "zustand";

export type SettingType = "color-theme" | "font-theme";

type SettingsState = {
  active: SettingType;
  color: ColorTheme;
  font: FontTheme;
};

const initialState: SettingsState = {
  active: "color-theme",
  color: "light",
  font: "sans-serif",
};

type SettingsActions = {
  setActive: (setting: SettingType) => void;
  setColor: (color: ColorTheme) => void;
  setFont: (font: FontTheme) => void;
};

export type SettingsStore = SettingsState & SettingsActions;

export const useSettings = create<SettingsStore>((set) => ({
  ...initialState,
  setActive: (setting) => set({ active: setting }),
  setColor: (color) => set({ color: color }),
  setFont: (font) => set({ font: font }),
}));
