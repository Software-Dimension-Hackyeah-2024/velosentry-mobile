import React from "react";
import { Text, View } from "react-native";
import SearchTextInput from "./SearchTextInput/SearchTextInput";
import { useSearchStore } from "@/store/searchStorage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { formatTextWithEllipsis } from "@/utils/formatTextWithEllipsis";
import { CURRENT_LOCALIZATION } from "@/consts/currentLocalization";

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
      {endLocationSearch && (
        <SearchTextInput
          onPress={() => {
            setIsSearchOverlayOpen(true);
            setClickedSearchInputVariant("startLocation");
          }}
          initialValue={formatTextWithEllipsis(startLocationSearch.title, 30)}
          leftIcon={
            <MaterialIcons name="location-pin" size={24} color="black" />
          }
          rightIcon={<MaterialIcons name="edit" size={24} color="black" />}
        />
      )}
      <SearchTextInput
        onPress={() => {
          setIsSearchOverlayOpen(true);
          setClickedSearchInputVariant("endLocation");
        }}
        initialValue={formatTextWithEllipsis(
          endLocationSearch?.title ?? "",
          30
        )}
        onInputClear={() => {
          setEndLocationSearch(undefined);
          setStartLocationSearch(CURRENT_LOCALIZATION);
        }}
      />
    </View>
  );
};

export default SearchSection;
