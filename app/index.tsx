import MapView from "@/components/MapView";
import RouteDetailBottomSheet from "@/components/RouteDetailBottomSheet/RouteDetailBottomSheet";
import SearchOverlay from "@/components/SearchOverlay/SearchOverlay";
import SearchSection from "@/components/SearchSection";
import { useSearchStore } from "@/store/searchStorage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomePage = () => {
  const [coords, setCoords] =
    useState<{ latitude: number; longitude: number }[]>();
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const { isSearchOverlayOpen, startLocationSearch, endLocationSearch } =
    useSearchStore();

  const fetchData = async () => {
    if (!startLocationSearch || !endLocationSearch) {
      setCoords([]);
      return;
    }
    const res = await fetch(
      `http://localhost:3000/route?startCoords=${startLocationSearch.lng},${startLocationSearch.lat}&endCoords=${endLocationSearch.lng},${endLocationSearch.lat}`
    );
    const data = await res.json();
    console.log(data);
    setCoords(data[0].coordinates);
    setDistance(data[0].route.distance);
    setDuration(data[0].route.duration);
  };

  useEffect(() => {
    fetchData();
  }, [startLocationSearch, endLocationSearch]);

  return (
    <GestureHandlerRootView>
      {isSearchOverlayOpen && <SearchOverlay />}
      <View className="bg-neutral-900 w-screen h-screen items-center">
        <MapView coordinates={coords ?? []} />
        <SearchSection />
        {endLocationSearch && (
          <RouteDetailBottomSheet distance={distance} duration={duration} />
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default HomePage;
