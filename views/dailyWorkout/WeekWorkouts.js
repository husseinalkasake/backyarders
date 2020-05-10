/*
This is the landing page of the custom workout plan.
It shows the workouts planned up for the next senven days.
It has a start button at the bottom to start today's workout.
*/

import React from "react";
import {
 View, Text, Button, StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

function WeekWorkouts({ navigation }) {
	navigation.setOptions({
		title: "This Week's Workouts",
	});

	return (
		<View style={styles.container}>
			<Text>Week Workouts</Text>
			<Text>Coming Soon</Text>
			<Button
				title="Start Today's Workout"
				onPress={() => navigation.navigate("TodaysWorkout")}
			/>
		</View>
	);
}

export default WeekWorkouts;
