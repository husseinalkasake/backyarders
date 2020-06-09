/*
Accepts a workout object which has:
- name: a string
- type: push, pull, legs, abs, hiit
- level: 0, 1, 2, 3 (beginner, intermediate, pro, challenge)

It thens renders the info and the video.
*/

import React from "react";
import { ScrollView, Text, View } from "react-native";

import WorkoutVideo from "./WorkoutVideo";

import { NOT_APPLICABLE } from "../../resources/workouts";
import { CustomStyleSheet, colors } from "../../styles";
import capitalizeFirstLetterOfEveryWord from "../../utils/capitalizeFirstLetterOfEveryWord";

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	workoutDetails: {
		height: "10%",
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: colors.MAIN_COLOR,
	},
	workoutDetail: {
		flexDirection: "column",
		justifyContent: "center",
	},
	workoutDetailText: {
		color: "white",
		alignSelf: "center",
	},
	title: {
		fontSize: 20,
	},
});

function WorkoutProfile({ route, navigation }) {
	// get the workout object which has the following keys: type, level, name, sourceMain, sourceEdu
	const { workout } = route.params;

	navigation.setOptions({
		title: capitalizeFirstLetterOfEveryWord(workout.name),
	});

	return (
		<ScrollView style={styles.container}>
			<View style={styles.workoutDetails}>
				<View style={styles.workoutDetail}>
					<Text
						style={[
							styles.bold,
							styles.title,
							styles.workoutDetailText,
						]}>
						Level
					</Text>
					<Text style={[styles.bold, styles.workoutDetailText]}>
						{workout.level}
					</Text>
				</View>
				<View style={styles.workoutDetail}>
					<Text
						style={[
							styles.bold,
							styles.title,
							styles.workoutDetailText,
						]}>
						Type
					</Text>
					<Text style={[styles.bold, styles.workoutDetailText]}>
						{workout.type}
					</Text>
				</View>

				<View style={styles.workoutDetail}>
					<Text
						style={[
							styles.bold,
							styles.title,
							styles.workoutDetailText,
						]}>
						Muscles
					</Text>
					<Text style={[styles.bold, styles.workoutDetailText]}>
						{capitalizeFirstLetterOfEveryWord(
							workout.muscles.split("/").join(" | ")
						)}
					</Text>
				</View>
			</View>

			<WorkoutVideo
				isEducational={true}
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
