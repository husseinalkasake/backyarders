/*
Accepts a workout object which has:
- name: a string
- type: push, pull, legs, abs, hiit
- level: 0, 1, 2, 3 (beginner, intermediate, pro, challenge)

It thens renders the info and the video.
*/

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

function WorkoutProfile({ route, navigation }) {
	navigation.setOptions({
		title: "Workout Profile",
	});

	return (
		<View style={styles.container}>
			<Text>Workout Profile</Text>
			<Text>Coming Soon</Text>
		</View>
	);
}

export default WorkoutProfile;
