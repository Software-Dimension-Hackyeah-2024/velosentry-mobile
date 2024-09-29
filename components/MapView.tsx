import { CURRENT_LOCALIZATION } from "@/consts/currentLocalization";
import { useSearchStore } from "@/store/searchStorage";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import RNMMapView, { Marker, Polyline, Region } from "react-native-maps";

const getInitialRegion = () => {
  return {
    latitude: CURRENT_LOCALIZATION.lat,
    longitude: CURRENT_LOCALIZATION.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
};

const MapView = ({
  coordinates,
}: {
  coordinates: { latitude: number; longitude: number }[];
}) => {
  const initialRegion = getInitialRegion();
  const [region, setRegion] = useState<Region>(initialRegion);
  const { startLocationSearch, endLocationSearch } = useSearchStore();

  // useEffect(() => {
  //   setRegion({
  //     latitude: startLocationSearch.lat,
  //     longitude: startLocationSearch.lng,
  //     latitudeDelta: 0.01,
  //     longitudeDelta: 0.01,
  //   });
  // }, [startLocationSearch]);

  return (
    <RNMMapView
      onRegionChange={(reg) => {
        setRegion(reg);
      }}
      region={region}
      initialRegion={initialRegion}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      <Polyline
        coordinates={coordinates}
        strokeColor="#000"
        strokeColors={["#7F0000"]}
        strokeWidth={6}
      />
      {endLocationSearch && (
        <>
          <Marker
            coordinate={{
              latitude: startLocationSearch.lat,
              longitude: startLocationSearch.lng,
            }}
            pinColor="red"
          />
          <Marker
            coordinate={{
              latitude: endLocationSearch.lat,
              longitude: endLocationSearch.lng,
            }}
            pinColor="green"
          />
        </>
      )}
    </RNMMapView>
  );
};

export default MapView;
