import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DAILY_WORKOUTS_ROUTE, DAILY_WORKOUT_ROUTE } from "./routes";
import WeekWorkouts from "../views/dailyWorkout/WeekWorkouts";
import TodaysWorkout from "../views/dailyWorkout/TodaysWorkout";

export default function DailyWorkout() {
	const DailyWorkoutStack = createStackNavigator();
	return (
		<DailyWorkoutStack.Navigator initialRouteName={DAILY_WORKOUTS_ROUTE}>
			<DailyWorkoutStack.Screen
				name={DAILY_WORKOUTS_ROUTE}
				component={WeekWorkouts}
			/>
			<DailyWorkoutStack.Screen
				name={DAILY_WORKOUT_ROUTE}
				component={TodaysWorkout}
			/>
		</DailyWorkoutStack.Navigator>
	);
}
