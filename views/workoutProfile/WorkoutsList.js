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

import { workouts, workoutLevels } from "../../resources/workoutTypes";

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

// main enum that holds the types of sorting
const SORT_BY = {
	ALPHABETICAL: "alphabetical",
	LEVEL: "level",
	TYPE: "type",
};

// used to sort differently every on every press
const sortNextBy = {
	alphabetical: SORT_BY.TYPE,
	type: SORT_BY.LEVEL,
	level: SORT_BY.ALPHABETICAL,
};

// TODO cahnge this to colors we actually like
function getBackgroundColor(level) {
	let backgroundColor;
	switch (level) {
		case workoutLevels[1]:
			backgroundColor = "rgba(0, 255, 0, 0.3)";
			break;
		case workoutLevels[2]:
			backgroundColor = "rgba(0, 0, 255, 0.3)";
			break;
		case workoutLevels[3]:
			backgroundColor = "rgba(255, 0, 0, 0.3)";
			break;
		default:
			// case workoutLevels[0]:
			backgroundColor = "#fff";
	}
	return { backgroundColor };
}

// renderes the headers of each section in the section list
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

	if (sortBy === SORT_BY.ALPHABETICAL) {
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
	} else if (sortBy === SORT_BY.TYPE) {
		const workoutsByType = workouts.reduce((obj, workout) => {
			const type = workout.type;

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
	} else if (sortBy === SORT_BY.LEVEL) {
		const workoutsByLevel = workouts.reduce((obj, workout) => {
			const level = workout.level;

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
					style={[styles.row, getBackgroundColor(item.level)]}
					onPress={() =>
						navigation.navigate("WorkoutProfile", { workout: item })
					}>
					<Text>{item.name}</Text>
				</TouchableOpacity>
			)}
			renderSectionHeader={renderSectionHeader}
		/>
	);
}

export default WorkoutsList;
