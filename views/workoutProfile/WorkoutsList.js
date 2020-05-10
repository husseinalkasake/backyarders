/*
This screen displays a list of workouts alphabeticcaly/by type/by level (section list).

it should import a big data structure that requires the .json workout files.
*/

import React from "react";
import {
	SectionList,
	Text,
	TouchableOpacity,
	Button,
	StyleSheet,
} from "react-native";

import workouts from "../../resources/workoutTypes";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	row: {
		padding: 20,
	},
});

const sortNextBy = {
	alphabetical: "type",
	type: "level",
	level: "alphabetical",
};

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

function WorkoutsList({ route, navigation }) {
	const { sortBy } = route.params;
	let sections = [];

	navigation.setOptions({
		title: "Workouts",
		headerRight: () => (
			<Button
				title="Sort"
				onPress={() =>
					navigation.navigate("WorkoutsList", {
						sortBy: sortNextBy[sortBy],
					})
				}
			/>
		),
	});

	if (sortBy === "alphabetical") {
		const workoutsByLetter = workouts.reduce((obj, workout) => {
			const firstLetter = workout.name[0].toUpperCase();

			return {
				...obj,
				[firstLetter]: [...(obj[firstLetter] || []), workout],
			};
		}, {});

		sections = Object.keys(workoutsByLetter)
			.sort()
			.map((letter) => ({
				data: workoutsByLetter[letter],
				title: letter,
			}));
	} else if (sortBy === "type") {
		const workoutsByType = workouts.reduce((obj, workout) => {
			const { type } = workout;

			return {
				...obj,
				[type]: [...(obj[type] || []), workout],
			};
		}, {});

		sections = Object.keys(workoutsByType)
			.sort()
			.map((type) => ({
				data: workoutsByType[type],
				title: type,
			}));
	} else if (sortBy === "level") {
		const workoutsByLevel = workouts.reduce((obj, workout) => {
			const { level } = workout;

			return {
				...obj,
				[level]: [...(obj[level] || []), workout],
			};
		}, {});

		sections = Object.keys(workoutsByLevel)
			.sort()
			.map((level) => ({
				data: workoutsByLevel[level],
				title: level,
			}));
	}

	return (
		<SectionList
			keyExtractor={(item) => item.name}
			sections={sections}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={styles.row}
					onPress={() => navigation.navigate("WorkoutProfile")} // {workout: item.workout}
				>
					<Text>{item.name}</Text>
				</TouchableOpacity>
			)}
			renderSectionHeader={renderSectionHeader}
		/>
	);
}

export default WorkoutsList;
