import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NutritionPlate from "../views/nutrition/NutritionPlate";
import PlateSection from "../views/nutrition/PlateSection";
import {
  WORKOUTS_LIST_ROUTE,
  NUTRITION_ROUTE,
  NUTRITION_PLATE_ROUTE,
} from "./routes";

export default function Nutrition() {
  const NutritionStack = createStackNavigator();

  return (
    <NutritionStack.Navigator initialRouteName={WORKOUTS_LIST_ROUTE}>
      <NutritionStack.Screen
        name={NUTRITION_ROUTE}
        component={NutritionPlate}
      />
      <NutritionStack.Screen
        name={NUTRITION_PLATE_ROUTE}
        component={PlateSection}
      />
    </NutritionStack.Navigator>
  );
}
