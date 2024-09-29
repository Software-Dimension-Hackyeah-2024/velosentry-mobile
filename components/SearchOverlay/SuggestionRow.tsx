import { LocationCategory } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { formatTextWithEllipsis } from "@/utils/formatTextWithEllipsis";
import { getSuggestionRowIcon } from "./utils/getSuggestionRowIcon";
import { localizationCategoryTranslation } from "@/consts/localizationCategoryTranslation";

export interface SuggestionRowProps {
  title: string;
  lat: number;
  lng: number;
  category: LocationCategory;
}

const SuggestionRow = ({
  title,
  category,
  onPress,
}: SuggestionRowProps & { onPress?: () => void }) => {
  return (
    <TouchableOpacity
      className="flex-row w-[90%] mb-2 h-16 border-b-[1px] border-neutral-300 py-2"
      onPress={() => {
        if (onPress) onPress();
      }}
    >
      <View className="bg-neutral-300 aspect-square rounded-full items-center justify-center">
        {getSuggestionRowIcon(category)}
      </View>
      <View className="flex-column w-full justify-evenly flex-1 ml-2">
        <Text className="font-semibold">
          {formatTextWithEllipsis(title, 40)}
        </Text>
        <Text>{localizationCategoryTranslation[category]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SuggestionRow;
