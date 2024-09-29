import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "./storage";
import { SuggestionRowProps } from "@/components/SearchOverlay/SuggestionRow";
import { CURRENT_LOCALIZATION } from "@/consts/currentLocalization";

type SearchInputVariants = "startLocation" | "endLocation" | undefined;

export interface SearchState {
  startLocationSearch: SuggestionRowProps;
  setStartLocationSearch: (value: SuggestionRowProps) => void;
  endLocationSearch?: SuggestionRowProps;
  setEndLocationSearch: (value?: SuggestionRowProps) => void;
  isSearchOverlayOpen: boolean;
  setIsSearchOverlayOpen: (value: boolean) => void;
  clickedSearchInputVariant: SearchInputVariants;
  setClickedSearchInputVariant: (value: SearchInputVariants) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      startLocationSearch: CURRENT_LOCALIZATION,
      endLocationSearch: undefined,
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
