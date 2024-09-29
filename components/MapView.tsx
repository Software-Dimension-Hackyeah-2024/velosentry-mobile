import { CURRENT_LOCALIZATION } from "@/consts/currentLocalization";
import { useSearchStore } from "@/store/searchStorage";
import Feather from "@expo/vector-icons/Feather";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import RNMMapView, { Marker, Polyline, Region } from "react-native-maps";
import colors from "tailwindcss/colors";
import DangerousIntersectionMarker from "./DangerousIntersectionMarker";

const getInitialRegion = () => {
  return {
    latitude: CURRENT_LOCALIZATION.lat,
    longitude: CURRENT_LOCALIZATION.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
};

const MapView = ({ routes }: { routes: any[] }) => {
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

  const dangerousIntersectionsCoords = useMemo(
    () => routes.map((route) => route.dangerousIntersectionsCoordinates).flat(),
    [routes]
  );

  return (
    <RNMMapView
      onRegionChange={(reg) => {
        setRegion(reg);
      }}
      region={region}
      initialRegion={initialRegion}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      {routes ? (
        routes.map((route, index) => (
          <Polyline
            coordinates={route.coordinates}
            strokeColor="#000"
            strokeColors={["#7F0000"]}
            strokeWidth={6}
            key={"Route " + index}
          />
        ))
      ) : (
        <></>
      )}
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

          {dangerousIntersectionsCoords.map((dangerouseCoord, index) => (
            <DangerousIntersectionMarker
              key={`${index}-${dangerouseCoord.latitude}-${dangerouseCoord.longitude}`}
              latitude={dangerouseCoord.latitude}
              longitude={dangerouseCoord.longitude}
            />
          ))}

          {/* {routes ? (
            routes.map((route, index) =>
              route.dangerousIntersectionsCoordinates.map((coord: any) => {
              })
            )
          ) : (
            <></>
          )} */}
        </>
      )}
    </RNMMapView>
  );
};

export default MapView;
