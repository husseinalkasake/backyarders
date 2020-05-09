import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutsList from "../views/workoutProfile/WorkoutsList";
import WorkoutProfile from "../views/workoutProfile/WorkoutProfile";
import { WORKOUTS_LIST_ROUTE, WORKOUT_PROFILE_ROUTE } from "./routes";

export default function WorkoutsProfile() {
  const WorkoutProfileStack = createStackNavigator();

  return (
    <WorkoutProfileStack.Navigator initialRouteName={WORKOUTS_LIST_ROUTE}>
      <WorkoutProfileStack.Screen
        name={WORKOUTS_LIST_ROUTE}
        component={WorkoutsList}
        initialParams={{ sortBy: "alphabetical" }}
      />
      <WorkoutProfileStack.Screen
        name={WORKOUT_PROFILE_ROUTE}
        component={WorkoutProfile}
      />
    </WorkoutProfileStack.Navigator>
  );
}
