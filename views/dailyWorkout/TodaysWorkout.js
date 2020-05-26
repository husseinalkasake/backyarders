/*
This screen is a middle ware compoenent function to render the WorkoutRoutinePlayer.
*/

import React from "react";
import { View, StyleSheet } from "react-native";
import WorkoutRoutinePlayer from "./WorkoutRoutinePlayer";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

function TodaysWorkout({ route, navigation }) {
	const { desiredDuration } = route.params;

	const title = "Today's Workout";
	navigation.setOptions({
		title,
	});

	return (
		<View style={styles.container}>
			<WorkoutRoutinePlayer desiredDuration={desiredDuration} />
		</View>
	);
}

export default TodaysWorkout;
