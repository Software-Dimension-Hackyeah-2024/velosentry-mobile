import MapView from "@/components/MapView";
import SearchOverlay from "@/components/SearchOverlay/SearchOverlay";
import SearchSection from "@/components/SearchSection";
import { CURRENT_LOCALIZATION } from "@/consts/currentLocalization";
import { useSearchStore } from "@/store/searchStorage";
import { useEffect, useState } from "react";
import { PermissionsAndroid, View } from "react-native";

const HomePage = () => {
  const [coords, setCoords] =
    useState<{ latitude: number; longitude: number }[]>();
  const { isSearchOverlayOpen, setStartLocationSearch } = useSearchStore();

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setCoords(data[0].coordinates);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isSearchOverlayOpen && <SearchOverlay />}
      <View className="bg-neutral-900 w-screen h-screen items-center">
        <MapView coordinates={coords ?? []} />
        <SearchSection />
      </View>
    </>
  );
};

export default HomePage;
