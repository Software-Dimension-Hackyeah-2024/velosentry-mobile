import React, {
  forwardRef,
  ReactElement,
  RefObject,
  useEffect,
  useState,
} from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import SearchTextInputContainer from "./SearchTextInputContainer";
import SearchTextInputLeftIcon from "./SearchTextInputLeftIcon";

interface SearchTextInputProps {
  initialValue?: string;
  onChange?: (newValue: string) => void;
  onInputClear?: () => void;
  onPress?: () => void;
  onLeftIconPress?: () => void;
  leftIcon?: ReactElement;
}

const SearchTextInput = forwardRef<TextInput, SearchTextInputProps>(
  (
    {
      onChange,
      onPress,
      leftIcon,
      onLeftIconPress,
      initialValue,
      onInputClear,
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue ?? "");

    const clearInput = () => {
      setValue("");
      if (onInputClear) onInputClear();
    };

    useEffect(() => {
      if (initialValue) setValue(initialValue);
    }, [initialValue]);

    return (
      <SearchTextInputContainer onPress={onPress}>
        <SearchTextInputLeftIcon
          leftIcon={leftIcon}
          onPress={onLeftIconPress}
        />
        <TextInput
          ref={ref}
          value={value}
          onChangeText={(newValue) => {
            setValue(newValue);
            if (onChange) onChange(newValue);
          }}
          className="h-full flex-1 text-lg justify-center -mt-2"
          placeholder="Search"
          onPress={onPress}
          editable={onPress === undefined}
        />
        <TouchableOpacity
          className="aspect-square h-full items-center justify-center"
          onPress={clearInput}
        >
          {value !== "" && <Feather name="x" size={24} color="black" />}
        </TouchableOpacity>
      </SearchTextInputContainer>
    );
  }
);

export default SearchTextInput;
