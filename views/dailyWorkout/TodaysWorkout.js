/*
This screen is a middle ware compoenent function to render the WorkoutRoutinePlayer.
*/

import React from "react";
import { View } from "react-native";
import WorkoutRoutinePlayer from "./WorkoutRoutinePlayer";
import { CustomStyleSheet } from "../../styles";

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

function TodaysWorkout({ route, navigation }) {
	const { desiredWorkoutDuration } = route.params;

	const title = "Today's Workout";
	navigation.setOptions({
		title,
	});

	return (
		<View style={styles.container}>
			<WorkoutRoutinePlayer
				desiredWorkoutDuration={desiredWorkoutDuration}
			/>
		</View>
	);
}

export default TodaysWorkout;
