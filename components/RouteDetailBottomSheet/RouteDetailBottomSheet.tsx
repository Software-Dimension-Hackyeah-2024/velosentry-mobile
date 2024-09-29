import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Feather from "@expo/vector-icons/Feather";
import colors from "tailwindcss/colors";

const RouteDetailBottomSheet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => [100, "25%", "65%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={false}
      >
        <BottomSheetView className="flex-1 items-center">
          <View className="w-full h-full mt-5 items-center">
            <View className=" w-full h-28 flex-row">
              <View className="flex-col items-center justify-center w-1/3 border-r-2 border-neutral-300">
                <Text className="text-2xl text-neutral-500 font-semibold">
                  km
                </Text>
                <Text className="text-3xl font-bold text-emerald-500">
                  13,9
                </Text>
              </View>
              <View className="flex-col items-center justify-center w-1/3">
                <Text className="text-2xl text-neutral-500 font-semibold">
                  h
                </Text>
                <Text className="text-3xl font-bold text-emerald-500">
                  0:30
                </Text>
              </View>
              <View className="flex-col items-center justify-center w-1/3 border-l-2 border-neutral-300">
                <Text className="text-2xl text-neutral-500 font-semibold">
                  kcal
                </Text>
                <Text className="text-3xl font-bold text-neutral-500">
                  1300
                </Text>
              </View>
            </View>
            <View className="w-full flex-1 mt-5">
              <View className="w-full flex-row px-4 my-2">
                <View className="aspect-square bg-emerald-500 w-24 rounded-3xl items-center justify-center">
                  <Image source={require("../../assets/mock/Road.png")} />
                </View>
                <View className="flex-col justify-center ml-5 space-y-1 flex-1">
                  <Text className="text-lg text-neutral-800 font-semibold">
                    Wysoki procent ścieżek
                  </Text>
                  <Text className="text-base text-neutral-500">
                    85% stanowią trasy rowerowe
                  </Text>
                </View>
                <View className="justify-center">
                  <Feather
                    name="chevron-right"
                    size={20}
                    color={colors.neutral[500]}
                  />
                </View>
              </View>
              <View className="w-full flex-row px-4 my-2">
                <View className="aspect-square bg-blue-300 w-24 rounded-3xl items-center justify-center">
                  <Image source={require("../../assets/mock/Sun.png")} />
                </View>
                <View className="flex-col justify-center ml-5 space-y-1 flex-1">
                  <Text className="text-lg text-neutral-800 font-semibold">
                    Dobre warunki atmosferyczne
                  </Text>
                  <Text className="text-base text-neutral-500">
                    Sprawdź pogodę
                  </Text>
                </View>
                <View className="justify-center">
                  <Feather
                    name="chevron-right"
                    size={20}
                    color={colors.neutral[500]}
                  />
                </View>
              </View>
              <View className="w-full flex-row px-4 my-2">
                <View className="aspect-square bg-neutral-300 w-24 rounded-3xl items-center justify-center">
                  <Image source={require("../../assets/mock/Bus.png")} />
                </View>
                <View className="flex-col justify-center ml-5 space-y-1 flex-1">
                  <Text className="text-lg text-neutral-800 font-semibold">
                    Możliwość przewozu roweru
                  </Text>
                  <Text className="text-base text-neutral-500">2 odcinki</Text>
                </View>
                <View className="justify-center">
                  <Feather
                    name="chevron-right"
                    size={20}
                    color={colors.neutral[500]}
                  />
                </View>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default RouteDetailBottomSheet;
