/*
This screen displays a list of workouts alphabeticcaly/by type/by level (section list).

it should import a big data structure that requires the .json workout files.
*/

import React from "react";
import { Button, Text } from "native-base";
import { SectionList, TouchableOpacity, View } from "react-native";

import workoutLevels from "../../resources/desiredDifficulty";
import workouts from "../../resources/workouts";
import { CustomStyleSheet, colors } from "../../styles";
import capitalizeFirstLetterOfEveryWord from "../../utils/capitalizeFirstLetterOfEveryWord";
import { absLevels } from "../../resources/workoutTypes";

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	row: {
		padding: 20,
	},
	sortButton: {
		position: "absolute",
		right: 12,
		backgroundColor: colors.MAIN_COLOR,
	},
	sectionHeader: {
		paddingLeft: 12,
		paddingVertical: 12,
		fontSize: 24,
		color: "white",
		backgroundColor: colors.MAIN_COLOR,
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

// TODO change this to colors we actually like
function getBackgroundColor(level) {
	let backgroundColor;
	switch (level) {
		case workoutLevels.INTERMEDIATE:
			backgroundColor = "#E6771680";
			break;
		case workoutLevels.EXPERIENCED:
		case absLevels.HARD:
			backgroundColor = "#963A9280";
			break;
		case workoutLevels.GIVE_ME_A_CHALLENGE:
			backgroundColor = "#CD025C80";
			break;
		default:
			backgroundColor = "#fff";
	}
	return { backgroundColor };
}

// renderes the headers of each section in the section list
const renderSectionHeader = ({ section }) => (
	<Text style={[styles.bold, styles.sectionHeader]}>
		{capitalizeFirstLetterOfEveryWord(section.title)}
	</Text>
);

function WorkoutsList({ route, navigation }) {
	const { sortBy } = route.params;
	let sections = [];

	navigation.setOptions({
		title: "Workouts",
		headerRight: () => (
			<Button
				style={styles.sortButton}
				onPress={() =>
					navigation.navigate("WorkoutsList", {
						sortBy: sortNextBy[sortBy],
					})
				}>
				<Text style={styles.bold}>Sort</Text>
			</Button>
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
			// TODO make this read the key of the type instead of the value and tern it to lowet case
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
			keyExtractor={(item) => item.name + item.type + item.level}
			sections={sections}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={[styles.row, getBackgroundColor(item.level)]}
					onPress={() =>
						navigation.navigate("WorkoutProfile", { workout: item })
					}>
					<Text style={styles.bold}>
						{capitalizeFirstLetterOfEveryWord(item.name)}
					</Text>
				</TouchableOpacity>
			)}
			renderSectionHeader={renderSectionHeader}
		/>
	);
}

export default WorkoutsList;
