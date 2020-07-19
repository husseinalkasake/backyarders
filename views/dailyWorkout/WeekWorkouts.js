/*
This is the landing page of the custom workout plan.
It shows the workouts planned up for the next senven days.
It lets the uesr choose between 30, 45 and 60 mins as a workout duration.
It has a start button at the bottom to start today's workout.
It has an optional Abs button (user can do abs at any given day)
*/

import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import desiredWorkoutDurationMin from "../../resources/desiredWorkoutDurationMin";

import { colors, CustomStyleSheet } from "../../styles";
import workoutTypes from "../../resources/workoutTypes";
import daysOfWeek from "../../resources/daysOfWeek";

function WeekWorkouts({ navigation, weeksWorkouts }) {
	const [desiredWorkoutDuration, setDesiredWorkoutDuration] = useState(
		desiredWorkoutDurationMin.FORTY_FIVE_MINUTES
	); // set default workout time to 45 minutes

	navigation.setOptions({
		title: "This Week's Workouts",
	});

	// offset day to match workout plan (Workout sequence starts on Monday but JS Date().getDay() starts with Sunday)
	let today = new Date().getDay() - 1;
	today = today < 0 ? 6 : today;

	return (
		<ScrollView>
			<View style={styles.container}>
				{weeksWorkouts.map((workoutType, index) => (
					<View style={styles.options} key={`workout_${index}`}>
						<View style={styles.dayOfWeek}>
							<Text style={styles.dayOfWeektext}>
								{index === today ? "Today" : daysOfWeek[index]}
							</Text>
						</View>
						<Text style={styles.workoutName}>{workoutType}</Text>
					</View>
				))}

				{weeksWorkouts[today] === workoutTypes.BREAK ? (
					<Text style={styles.bold}>Rest well today! :)</Text>
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
								navigation.navigate("TodaysWorkout", {
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
						navigation.navigate("TodaysWorkout", {
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
	weeksWorkouts: state.workoutSequence,
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
