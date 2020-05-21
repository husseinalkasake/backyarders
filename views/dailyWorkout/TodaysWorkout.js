/*
This page plays the workouts dynamically.
*/

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SampleTimer from "./SampleTimer";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

function TodaysWorkout({ navigation }) {
	const title = "Today's Workout";
	navigation.setOptions({
		title,
	});

	return (
		<View style={styles.container}>
			<SampleTimer />
		</View>
	);
}

export default TodaysWorkout;
