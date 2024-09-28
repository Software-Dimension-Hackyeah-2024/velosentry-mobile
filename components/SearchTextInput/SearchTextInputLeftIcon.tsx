import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { ReactElement } from "react";
import { TouchableOpacity, View } from "react-native";

interface SearchTextInputLeftIconProps {
  leftIcon?: ReactElement;
  onPress?: () => void;
}

const SearchTextInputLeftIcon = ({
  leftIcon,
  onPress,
}: SearchTextInputLeftIconProps) => {
  const icon = leftIcon ? (
    leftIcon
  ) : (
    <MaterialIcons name="search" size={24} color="black" />
  );

  if (onPress)
    return (
      <TouchableOpacity
        onPress={onPress}
        className="aspect-square h-full items-center justify-center"
      >
        {icon}
      </TouchableOpacity>
    );

  return (
    <View className="aspect-square h-full items-center justify-center">
      {icon}
    </View>
  );
};

export default SearchTextInputLeftIcon;
