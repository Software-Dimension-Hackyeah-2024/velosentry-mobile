import React from "react";
import { Text, View } from "react-native";
import SearchTextInput from "./SearchTextInput/SearchTextInput";
import { useSearchStore } from "@/store/searchStorage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SearchSection = () => {
  const {
    startLocationSearch,
    endLocationSearch,
    setIsSearchOverlayOpen,
    setClickedSearchInputVariant,
    setStartLocationSearch,
    setEndLocationSearch,
  } = useSearchStore();
  return (
    <View className="w-full items-center py-2">
      {endLocationSearch !== "" && (
        <SearchTextInput
          onPress={() => {
            setIsSearchOverlayOpen(true);
            setClickedSearchInputVariant("startLocation");
          }}
          initialValue={startLocationSearch}
          onInputClear={() => {
            setStartLocationSearch("");
          }}
          leftIcon={
            <MaterialIcons name="location-pin" size={24} color="black" />
          }
        />
      )}
      <SearchTextInput
        onPress={() => {
          setIsSearchOverlayOpen(true);
          setClickedSearchInputVariant("endLocation");
        }}
        initialValue={endLocationSearch}
        onInputClear={() => {
          setEndLocationSearch("");
          setStartLocationSearch("");
        }}
      />
    </View>
  );
};

export default SearchSection;
