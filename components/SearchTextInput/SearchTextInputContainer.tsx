import React, { PropsWithChildren } from "react";
import { TouchableOpacity, View } from "react-native";

interface SearchTextInputContainerProps extends PropsWithChildren {
  onPress?: () => void;
}

const SearchTextInputContainer = ({
  onPress,
  children,
}: SearchTextInputContainerProps) => {
  if (!onPress)
    return (
      <View className="flex-row bg-white rounded-3xl py-2 px-1 items-center my-1 h-14 border-2 border-neutral-200 mx-5">
        {children}
      </View>
    );
  return (
    <TouchableOpacity
      className="flex-row bg-white rounded-3xl py-2 px-1 items-center my-1 h-14 border-2 border-neutral-200 mx-5"
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default SearchTextInputContainer;
