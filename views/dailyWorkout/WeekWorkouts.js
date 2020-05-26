/*
This is the landing page of the custom workout plan.
It shows the workouts planned up for the next senven days.
It lets the uesr choose between 30, 45 and 60 mins as a workout duration.
It has a start button at the bottom to start today's workout.
*/

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import desiredWorkoutDurationMin from "../../resources/desiredWorkoutDurationMin";

import NextButton from "../questionnaire/QuestionnaireNextButton";

import { colors, CustomStyleSheet } from "../../styles";

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const nameOfFutureDay = (daysFromNow) =>
	daysOfWeek[new Date().setDate(new Date().getDate() + 1).getDay()];

// the title of the day
const dayName = [
	"Today",
	"Tomorrow",
	nameOfFutureDay(2),
	nameOfFutureDay(3),
	nameOfFutureDay(4),
	nameOfFutureDay(5),
	nameOfFutureDay(6),
];

function WeekWorkouts({ navigation, weeksWorkouts }) {
	const [desiredWorkoutDuration, setDesiredWorkoutDuration] = useState(
		desiredWorkoutDurationMin.FORTY_FIVE_MINUTES
	); // set default workout time to 45 minutes

	navigation.setOptions({
		title: "This Week's Workouts",
	});

	return (
		<View style={styles.container}>
			<Text>This Week's Workouts</Text>
			{weeksWorkouts.map((type, i) => (
				<Text key={`workout_${i}`}>
					<Text>{dayName[i]}</Text>
					<Text>{type}</Text>
				</Text>
			))}

			<View style={styles.options}>
				{desiredWorkoutDurationMin.map((duration, i) => {
					<Button
						bordered
						style={[
							styles.optionButton,
							desiredWorkoutDuration === duration &&
								styles.optionButtonSelected,
						]}
						onPress={() => setDesiredWorkoutDuration(duration)}>
						<Text
							style={[
								styles.optionButtonText,
								desiredWorkoutDuration === duration &&
									styles.optionButtonSelectedText,
							]}>
							{duration} Minutes
						</Text>
					</Button>;
				})}
			</View>

			<NextButton
				text="Start Today's Workout"
				goToNextScreen={() =>
					navigation.navigate("TodaysWorkout", {
						desiredWorkoutDuration,
					})
				}
			/>
		</View>
	);
}

const mapStateToProps = (state) => ({
	weeksWorkouts: state.weeksWorkouts,
});

export default connect(mapStateToProps)(WeekWorkouts);

// TODO I don't need most of these styles
// TODO maybe put these styles in their own file
const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: colors.BACKGROUND_COLOR,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		position: "absolute",
		right: 0,
		width: "30%",
		maxWidth: 240,
		borderColor: "black",
		borderRadius: 15,
	},
	optionButton: {
		marginLeft: 12,
		borderColor: colors.MAIN_COLOR,
		borderRadius: 15,
	},
	optionButtonText: {
		color: colors.MAIN_COLOR,
		fontSize: 12,
	},
	optionButtonSelected: {
		backgroundColor: colors.MAIN_COLOR,
	},
	optionButtonSelectedText: {
		color: colors.BACKGROUND_COLOR,
	},
	optionButtonSelectedDisabled: {
		backgroundColor: "gray",
	},
	personalProfileField: {
		flexDirection: "row",
		paddingTop: 60,
		marginHorizontal: 24,
	},
	questionnaireField: {
		flexDirection: "row",
		paddingTop: "24%",
		marginHorizontal: "10%",
	},
	options: {
		flexDirection: "row",
	},
});
