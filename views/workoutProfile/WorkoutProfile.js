/*
Accepts a workout object which has:
- name: a string
- type: push, pull, legs, abs, hiit
- level: 0, 1, 2, 3 (beginner, intermediate, pro, challenge)

It thens renders the info and the video.
*/

import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import WorkoutVideo from "./WorkoutVideo";

import { NOT_APPLICABLE } from "../../resources/workouts";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

function WorkoutProfile({ route, navigation }) {
	// get the workout object which has the following keys: type, level, name, sourceMain, sourceEdu
	const { workout } = route.params;

	navigation.setOptions({
		title: workout.name,
	});

	return (
		<ScrollView style={styles.container}>
			<Text>
				<Text>Level: </Text>
				<Text>{workout.level}</Text>
			</Text>

			<Text>
				<Text>Type: </Text>
				<Text>{workout.type}</Text>
			</Text>

			{/* TODO cut these muscles up and display them as an array (string manipulation) */}
			<Text>
				<Text>Muscles under tension: </Text>
				<Text>{workout.muscles}</Text>
			</Text>

			<WorkoutVideo
				source={
					workout.sourceEdu === NOT_APPLICABLE
						? { uri: `https://gdurl.com${workout.sourceMain}` }
						: { uri: `https://gdurl.com${workout.sourceEdu}` }
				}
			/>
		</ScrollView>
	);
}

export default WorkoutProfile;
