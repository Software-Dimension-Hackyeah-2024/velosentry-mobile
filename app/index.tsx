import MapView from "@/components/MapView";
import RouteDetailBottomSheet from "@/components/RouteDetailBottomSheet/RouteDetailBottomSheet";
import SearchOverlay from "@/components/SearchOverlay/SearchOverlay";
import SearchSection from "@/components/SearchSection";
import { CURRENT_LOCALIZATION } from "@/consts/currentLocalization";
import { useSearchStore } from "@/store/searchStorage";
import { useEffect, useState } from "react";
import { PermissionsAndroid, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomePage = () => {
  const [coords, setCoords] =
    useState<{ latitude: number; longitude: number }[]>();
  const { isSearchOverlayOpen, endLocationSearch } = useSearchStore();

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setCoords(data[0].coordinates);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GestureHandlerRootView>
      {isSearchOverlayOpen && <SearchOverlay />}
      <View className="bg-neutral-900 w-screen h-screen items-center">
        <MapView coordinates={coords ?? []} />
        <SearchSection />
        {endLocationSearch && <RouteDetailBottomSheet />}
      </View>
    </GestureHandlerRootView>
  );
};

export default HomePage;
