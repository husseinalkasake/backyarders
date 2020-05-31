/*
This is the landing page of the custom workout plan.
It shows the workouts planned up for the next senven days.
It lets the uesr choose between 30, 45 and 60 mins as a workout duration.
It has a start button at the bottom to start today's workout.
It has an optional Abs button (user can do abs at any given day)
*/

import React, { useState } from "react";
import { ScrollView, View, Text, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import desiredWorkoutDurationMin from "../../resources/desiredWorkoutDurationMin";

import NextButton from "../questionnaire/QuestionnaireNextButton";

import DAILY_WORKOUT_ROUTE from "../../navigation/routes";

import { colors, CustomStyleSheet } from "../../styles";
import workoutTypes from "../../resources/workoutTypes";

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

// returns the name of the day of the week that is daysFromNow in the future
const nameOfFutureDay = (daysFromNow) => {
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + daysFromNow);
	return daysOfWeek[tomorrow.getDay()]; // getDay() returns a number between 0 (Sunday) and 6 (Saturday)
};

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
		<ScrollView>
			<View style={styles.container}>
				{weeksWorkouts.map((type, i) => (
					<View style={styles.options} key={`workout_${i}`}>
						<View style={styles.dayOfWeek}>
							<Text style={styles.dayOfWeektext}>
								{dayName[i]}
							</Text>
						</View>
						<Text style={styles.workoutName}>{type}</Text>
					</View>
				))}

				{weeksWorkouts[0] == workoutTypes.BREAK ? (
					<Text>Rest well today!</Text>
				) : (
					<View>
						<View style={styles.options}>
							{Object.values(desiredWorkoutDurationMin)
								.filter((duration) => duration >= 30)
								.map((duration) => (
									<TouchableOpacity
										key={`${duration}_btn`}
										style={[
											styles.optionButton,
											desiredWorkoutDuration ===
												duration &&
												styles.optionButtonSelected,
										]}
										onPress={() =>
											setDesiredWorkoutDuration(duration)
										}>
										<Text
											style={[
												styles.optionButtonText,
												desiredWorkoutDuration ===
													duration &&
													styles.optionButtonSelectedText,
											]}>
											{duration} Minutes
										</Text>
									</TouchableOpacity>
								))}
						</View>
						<TouchableOpacity
							style={styles.startWorkoutButton}
							onPress={() =>
								navigation.navigate(DAILY_WORKOUT_ROUTE, {
									desiredWorkoutDuration,
								})
							}>
							<Text style={styles.startWorkoutButtonText}>
								Start Today's Workout
							</Text>
						</TouchableOpacity>
					</View>
				)}

				<TouchableOpacity
					style={styles.startWorkoutButton}
					onPress={() =>
						navigation.navigate(DAILY_WORKOUT_ROUTE, {
							desiredWorkoutDuration:
								desiredWorkoutDurationMin.ABS,
						})
					}>
					<Text style={styles.startWorkoutButtonText}>
						Let's Do Some Abs
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const mapStateToProps = (state) => ({
	weeksWorkouts: state.weeksWorkouts,
});

export default connect(mapStateToProps)(WeekWorkouts);

// TODO maybe put these styles in their own file
const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: colors.BACKGROUND_COLOR,
		alignItems: "center",
		justifyContent: "center",
	},
	dayOfWeek: {
		margin: 10,
		width: 80,
		height: 40,
		backgroundColor: colors.MAIN_COLOR,
		borderRadius: 25,
	},
	dayOfWeektext: {
		color: colors.BACKGROUND_COLOR,
		fontSize: 12,
		alignSelf: "center",
		paddingTop: 12,
	},
	workoutName: {
		paddingTop: 20,
		paddingLeft: 20,
	},
	optionButton: {
		margin: 10,
		width: 100,
		height: 50,
		borderColor: colors.MAIN_COLOR,
		borderRadius: 15,
		borderWidth: 1,
	},
	optionButtonText: {
		color: colors.MAIN_COLOR,
		fontSize: 12,
		alignSelf: "center",
		paddingTop: 15,
	},
	optionButtonSelected: {
		backgroundColor: colors.MAIN_COLOR,
	},
	optionButtonSelectedText: {
		color: colors.BACKGROUND_COLOR,
	},
	options: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	startWorkoutButton: {
		margin: 10,
		padding: 15,
		backgroundColor: colors.NEXT_BUTTON_COLOR,
		borderColor: colors.NEXT_BUTTON_COLOR,
		alignSelf: "center",
		borderRadius: 15,
	},
	startWorkoutButtonText: {
		color: "white",
		fontSize: 18,
	},
});
