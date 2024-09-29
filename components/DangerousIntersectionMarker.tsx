import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { LatLng, Marker } from "react-native-maps";
import colors from "tailwindcss/colors";

const DangerousIntersectionMarker = (coords: LatLng) => {
  return (
    <Marker coordinate={coords}>
      <MaterialIcons name="warning" size={36} color={colors.red[500]} />
    </Marker>
  );
};

export default DangerousIntersectionMarker;
