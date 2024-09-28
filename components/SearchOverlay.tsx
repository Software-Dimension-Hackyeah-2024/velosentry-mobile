import React, { useEffect, useRef } from "react";
import { Text, TextInput, View } from "react-native";
import SearchTextInput from "./SearchTextInput/SearchTextInput";
import Feather from "@expo/vector-icons/Feather";
import { useSearchStore } from "@/store/searchStorage";

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

  const getSearchInputInitialValue = () => {
    if (clickedSearchInputVariant === "startLocation")
      return startLocationSearch;
    if (clickedSearchInputVariant === "endLocation") return endLocationSearch;
    else "";
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
        onChange={(value) => {
          if (clickedSearchInputVariant === "startLocation")
            setStartLocationSearch(value);
          if (clickedSearchInputVariant === "endLocation")
            setEndLocationSearch(value);
        }}
        ref={searchInputRef}
        initialValue={getSearchInputInitialValue()}
      />
    </View>
  );
};

export default SearchOverlay;
