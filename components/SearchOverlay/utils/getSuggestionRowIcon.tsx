import { LocationCategory } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ReactElement } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const iconProps = {
  size: 24,
  color: "black",
};

export const getSuggestionRowIcon = (
  category: LocationCategory
): ReactElement => {
  switch (category) {
    case "agriculture":
      return <MaterialIcons name="agriculture" {...iconProps} />;
    case "building":
      return <FontAwesome name="building" {...iconProps} />;
    case "commerce":
      return <FontAwesome name="shopping-cart" {...iconProps} />;
    case "construction":
      return <MaterialIcons name="construction" {...iconProps} />;
    case "education":
      return <MaterialIcons name="school" {...iconProps} />;
    case "fictitious":
      return <FontAwesome5 name="brain" {...iconProps} />;
    case "financial":
      return <MaterialCommunityIcons name="finance" {...iconProps} />;
    case "government":
      return <MaterialCommunityIcons name="state-machine" {...iconProps} />;
    case "health":
      return <MaterialIcons name="health-and-safety" {...iconProps} />;
    case "industrial":
      return <FontAwesome name="industry" {...iconProps} />;
    case "military":
      return <FontAwesome6 name="person-military-rifle" {...iconProps} />;
    case "natural/water":
      return <MaterialIcons name="nature" {...iconProps} />;
    case "outdoors/recreation":
      return <MaterialIcons name="park" {...iconProps} />;
    case "place":
      return <MaterialIcons name="place" {...iconProps} />;
    case "place_of_worship":
      return <FontAwesome5 name="place-of-worship" {...iconProps} />;
    case "postcode":
      return <MaterialIcons name="local-post-office" {...iconProps} />;
    case "road":
      return <FontAwesome name="road" {...iconProps} />;
    case "social":
      return <FontAwesome6 name="people-group" {...iconProps} />;
    case "transportation":
      return <FontAwesome name="bus" {...iconProps} />;
    case "travel/tourism":
      return <MaterialCommunityIcons name="earth" {...iconProps} />;
    default:
      return <FontAwesome name="question" {...iconProps} />;
  }
};
