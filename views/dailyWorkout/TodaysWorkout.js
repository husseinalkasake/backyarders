/*
This page plays the workouts dynamically.
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

function NutritionPlate({ navigation }) {
	const title = "Today's Workout";
	navigation.setOptions({
		title,
	});

	return (
		<View style={styles.container}>
			<Text>{title}</Text>
			<Text>Coming Soon</Text>
		</View>
	);
}

export default NutritionPlate;
