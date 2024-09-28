import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "./storage";

type SearchInputVariants = "startLocation" | "endLocation" | undefined;

export interface SearchState {
  startLocationSearch: string;
  setStartLocationSearch: (value: string) => void;
  endLocationSearch: string;
  setEndLocationSearch: (value: string) => void;
  isSearchOverlayOpen: boolean;
  setIsSearchOverlayOpen: (value: boolean) => void;
  clickedSearchInputVariant: SearchInputVariants;
  setClickedSearchInputVariant: (value: SearchInputVariants) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      startLocationSearch: "",
      endLocationSearch: "",
      setStartLocationSearch: (value) => set({ startLocationSearch: value }),
      setEndLocationSearch: (value) => set({ endLocationSearch: value }),
      isSearchOverlayOpen: false,
      setIsSearchOverlayOpen: (value) => set({ isSearchOverlayOpen: value }),
      clickedSearchInputVariant: undefined,
      setClickedSearchInputVariant: (value) =>
        set({ clickedSearchInputVariant: value }),
    }),
    {
      name: "search-storage",
      storage,
    }
  )
);
