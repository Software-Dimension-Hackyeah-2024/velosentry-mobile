import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RNMMapView, { Polyline, Region } from "react-native-maps";

const getInitialRegion = () => {
  return {
    latitude: 37.78825,
    longitude: -122.4324,
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
  return (
    <RNMMapView
      onRegionChange={(reg) => {
        setRegion(reg);
      }}
      initialRegion={{
        latitude: 50.177168,
        longitude: 19.75402,
        longitudeDelta: 1,
        latitudeDelta: 1,
      }}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      <Polyline
        coordinates={coordinates}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={["#7F0000"]}
        strokeWidth={6}
      />
    </RNMMapView>
  );
};

export default MapView;
