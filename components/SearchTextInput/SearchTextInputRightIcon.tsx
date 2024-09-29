import Feather from "@expo/vector-icons/Feather";
import React, { ReactElement } from "react";
import { TouchableOpacity, View } from "react-native";

interface SearchTextInputRightIconProps {
  rightIcon?: ReactElement;
  onPress?: () => void;
}

const SearchTextInputRightIcon = ({
  rightIcon,
  onPress,
}: SearchTextInputRightIconProps) => {
  const icon = rightIcon ? (
    rightIcon
  ) : (
    <Feather name="x" size={24} color="black" />
  );

  if (onPress)
    return (
      <TouchableOpacity
        className="aspect-square h-full items-center justify-center"
        onPress={onPress}
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

export default SearchTextInputRightIcon;
