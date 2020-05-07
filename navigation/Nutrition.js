import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NutritionPlate from "../views/nutrition/NutritionPlate";
import PlateSection from "../views/nutrition/PlateSection";

export default function Nutrition() {
  const NutritionStack = createStackNavigator();

  return (
    <NutritionStack.Navigator initialRouteName="WorkoutsList">
      <NutritionStack.Screen name="NutritionPlate" component={NutritionPlate} />
      <NutritionStack.Screen name="PlateSection" component={PlateSection} />
    </NutritionStack.Navigator>
  );
}
