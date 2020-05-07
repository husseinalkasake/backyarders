import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeekWorkouts from "../views/dailyWorkout/WeekWorkouts";
import TodaysWorkout from "../views/dailyWorkout/TodaysWorkout";

export default function DailyWorkout() {
  const DailyWorkoutStack = createStackNavigator();
  return (
    <DailyWorkoutStack.Navigator initialRouteName="WeekWorkouts">
      <DailyWorkoutStack.Screen name="WeekWorkouts" component={WeekWorkouts} />
      <DailyWorkoutStack.Screen
        name="TodaysWorkout"
        component={TodaysWorkout}
      />
    </DailyWorkoutStack.Navigator>
  );
}
