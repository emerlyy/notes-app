"use client";

import {
  createSettingsStore,
  SettingsProps,
  SettingsState,
  SettingsStore,
} from "@/store/settingsStore";
import { applyThemePreference } from "@/utils/applyThemePreference";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export const SettingsContext = createContext<SettingsStore | null>(null);

type SettingsProviderProps = React.PropsWithChildren<Partial<SettingsProps>>;

const SettingsProvider = ({ children, ...props }: SettingsProviderProps) => {
  const storeRef = useRef<SettingsStore>(null);
  if (!storeRef.current) {
    storeRef.current = createSettingsStore(props);
    storeRef.current.subscribe((state) => {
      applyThemePreference({ colorTheme: state.color, fontTheme: state.font });
    });
  }

  return (
    <SettingsContext.Provider value={storeRef.current}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

export function useSettings<T>(selector: (state: SettingsState) => T): T {
  const store = useContext(SettingsContext);
  if (!store) throw new Error("Missing SettingsContext.Provider in the tree");
  return useStore(store, selector);
}
