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
      <View className="w-[90%] flex-row bg-white rounded-xl py-2 items-center my-1 h-14 border-2 border-neutral-200">
        {children}
      </View>
    );
  return (
    <TouchableOpacity
      className="w-[90%] flex-row bg-white rounded-xl py-2 items-center my-1 h-14 border-2 border-neutral-200"
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default SearchTextInputContainer;
