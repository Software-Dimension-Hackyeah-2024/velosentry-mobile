import React, { useEffect, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import SearchTextInput from "../SearchTextInput/SearchTextInput";
import Feather from "@expo/vector-icons/Feather";
import { useSearchStore } from "@/store/searchStorage";
import { geocode } from "opencage-api-client";
import SuggestionRow, { SuggestionRowProps } from "./SuggestionRow";
import { MOCK_GEO_RESPONSE } from "@/consts/mockGeoResponse";
import { LocationCategory } from "@/types";
import { CURRENT_LOCALIZATION } from "@/consts/currentLocalization";
import { API_KEY } from "@env";

const SearchOverlay = () => {
  const {
    setIsSearchOverlayOpen,
    isSearchOverlayOpen,
    setClickedSearchInputVariant,
    clickedSearchInputVariant,
    startLocationSearch,
    setStartLocationSearch,
    endLocationSearch,
    setEndLocationSearch,
  } = useSearchStore();
  const searchInputRef = useRef<TextInput>(null);
  const [suggestions, setSuggestions] = useState<SuggestionRowProps[]>([]);

  const getSearchInputInitialValue = () => {
    if (clickedSearchInputVariant === "startLocation")
      return startLocationSearch;
    if (clickedSearchInputVariant === "endLocation") return endLocationSearch;
    else "";
  };

  const handleInputChange = async (newValue: string) => {
    if (newValue.length > 2) {
      try {
        // const response = await geocode({ key: API_KEY, q: newValue });
        const response = MOCK_GEO_RESPONSE;
        setSuggestions(
          response?.results.map((result: any) => {
            const lat = result.geometry.lat;
            const lng = result.geometry.lng;
            const title = result.formatted;
            const category = result.components._category;
            console.log(category);
            return { lat, lng, title, category };
          })
        );
      } catch (error) {
        console.error("Error fetching geocode data:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    if (isSearchOverlayOpen) searchInputRef.current?.focus();
    if (!isSearchOverlayOpen) setClickedSearchInputVariant(undefined);
  }, [isSearchOverlayOpen]);

  return (
    <View className="h-screen w-screen bg-white items-center py-2">
      <SearchTextInput
        leftIcon={<Feather name="arrow-left" size={24} color="black" />}
        onLeftIconPress={() => {
          setIsSearchOverlayOpen(false);
        }}
        onChange={handleInputChange}
        ref={searchInputRef}
        initialValue={getSearchInputInitialValue()?.title}
      />
      {clickedSearchInputVariant === "startLocation" && (
        <SuggestionRow
          {...CURRENT_LOCALIZATION}
          onPress={() => {
            setStartLocationSearch(CURRENT_LOCALIZATION);
            setIsSearchOverlayOpen(false);
          }}
        />
      )}
      {suggestions.map((suggestion) => {
        return (
          <SuggestionRow
            {...suggestion}
            key={`${suggestion.lat}-${suggestion.lng}`}
            onPress={() => {
              if (clickedSearchInputVariant === "startLocation")
                setStartLocationSearch(suggestion);
              if (clickedSearchInputVariant === "endLocation")
                setEndLocationSearch(suggestion);
              setIsSearchOverlayOpen(false);
            }}
          />
        );
      })}
    </View>
  );
};

export default SearchOverlay;
