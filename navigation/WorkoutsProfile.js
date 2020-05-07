import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutsList from "../views/workoutProfile/WorkoutsList";
import WorkoutProfile from "../views/workoutProfile/WorkoutProfile";

export default function WorkoutsProfile() {
  const WorkoutProfileStack = createStackNavigator();

  return (
    <WorkoutProfileStack.Navigator initialRouteName="WorkoutsList">
      <WorkoutProfileStack.Screen
        name="WorkoutsList"
        component={WorkoutsList}
        initialParams={{ sortBy: "alphabetical" }}
      />
      <WorkoutProfileStack.Screen
        name="WorkoutProfile"
        component={WorkoutProfile}
      />
    </WorkoutProfileStack.Navigator>
  );
}
