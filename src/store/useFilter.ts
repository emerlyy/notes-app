import { create } from "zustand";

type FilterState = {
  filter: string;
  setFilter: (nextFilter: string) => void;
};

export const useFilter = create<FilterState>((set) => ({
  filter: "all",
  setFilter: (nextFilter: string) => set({ filter: nextFilter }),
}));
