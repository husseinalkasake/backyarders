/*
TODO make a new time for every item in the workoutRoutine array
*/

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { Countdown, TimeInput, TimerToggleButton } from "./TimerComponents";
import { Timer, vibrate } from "./utils";
import WorkoutVideo from "../workoutProfile/WorkoutVideo";
import ProgressBar from "./ProgressBarAnimated";
import WorkoutRoutine from "./workoutRoutine";
import workoutTypes from "../../resources/workoutTypes";
import desiredWorkoutDurationMin from "../../resources/desiredWorkoutDurationMin";

class WorkoutRoutinePlayer extends React.Component {
	constructor(props) {
		super(props);

		const workoutRoutineObj = new WorkoutRoutine(
			this.props.desiredWorkoutDuration, // in minutes
			this.props.desiredWorkoutDuration === desiredWorkoutDurationMin.ABS
				? workoutTypes.ABS
				: this.props.weeksWorkouts[0], // the workout type
			this.props.desiredDifficulty
		);

		this.state = {
			workoutRoutine: workoutRoutineObj.workoutRoutine, // an array of the exact routine to be followed
			numberOfWorkoutRoutineIntervals: workoutRoutineObj.getTotalNumberOfItems(),
			currentWorkoutRoutineIndex: 0, // start with the first element of the workout routine
			timeRemaining: workoutRoutineObj.workoutRoutine[0].duration * 1000, // start with the first item in the list (in ms)
			isRunning: false,
			isOver: false, // indicates end of workout
		};
	}

	// set up the first video of the workout
	componentDidMount() {
		this.timer = new Timer(
			this.state.timeRemaining,
			this.updateTimeRemaining,
			this.handleTimerEnd
		);
		this.setState({ isRunning: this.timer.isRunning });
	}

	// once user is ready to leave workout screen, kill an instance of Timer class
	componentWillUnmount() {
		if (this.timer) this.timer.stop();
	}

	// resets and pauses timer
	resetTimerAndStop = () => {
		this.startNewTimer(false); // start a new timer and stop it
	};

	updateTimeRemaining = (timeRemaining) => {
		this.setState({ timeRemaining });
	};

	// pause/play timer
	toggleTimer = () => {
		if (!this.timer) return;
		if (this.timer.isRunning) this.timer.stop();
		else this.timer.start();

		this.setState({ isRunning: this.timer.isRunning });
	};

	// once timer ends, vibrate phone and setup next video/break
	handleTimerEnd = () => {
		vibrate();
		console.log("About to handle timer end");
		const {
			currentWorkoutRoutineIndex,
			numberOfWorkoutRoutineIntervals,
		} = this.state;

		if (
			currentWorkoutRoutineIndex ===
			numberOfWorkoutRoutineIntervals + 1
		) {
			// handles end of last video
			if (this.timer) delete this.timer; // delete timer so we do not get any memory problems
			this.setState({ isOver: true });
		} else {
			// sets up next workout/break
			this.setState({
				currentWorkoutRoutineIndex: currentWorkoutRoutineIndex + 1,
			});

			this.startNewTimer(true);
		}
	};

	// set up the timer for the new exercise
	startNewTimer = (shouldPlay) => {
		if (this.timer) delete this.timer;
		const { workoutRoutine, currentWorkoutRoutineIndex } = this.state; // get variables that I will need
		const newExercise = workoutRoutine[currentWorkoutRoutineIndex]; // get the workout/break object
		this.setState({ timeRemaining: newExercise.duration * 1000 }); // update time remaining to the duration of the new exercise (in ms)
		this.timer = new Timer( // create a new timer
			this.state.timeRemaining,
			this.updateTimeRemaining,
			this.handleTimerEnd
		);
		if (!shouldPlay) this.timer.stop();
		this.setState({ isRunning: this.timer.isRunning }); // let state know that new timer is running
	};

	// TODO currently only using this for progress bar, don't know if i will wanna keep it
	getTimeTotal = () => {};

	render() {
		if (this.state.isOver) {
			return (
				<View>
					<Text>Amazing work Yarder!</Text>
					<Text>Time to replanish your body!</Text>
				</View>
			);
		} else {
			const { workoutRoutine, currentWorkoutRoutineIndex } = this.state;
			const currentExercise = workoutRoutine[currentWorkoutRoutineIndex];

			return (
				<View style={styles.container}>
					{currentExercise.type === "Break" ? (
						<View>
							<Text style={[styles.title, styles.center]}>
								BREAK TIME
							</Text>
							<Countdown
								style={styles.center}
								timeRemaining={this.state.timeRemaining}
								onToggleTimer={this.toggleTimer}
								size="big"
							/>
						</View>
					) : (
						<View>
							<Countdown
								style={styles.center}
								timeRemaining={this.state.timeRemaining}
								onToggleTimer={this.toggleTimer}
								size="small"
							/>
							<WorkoutVideo
								source={{
									uri: `https://gdurl.com${currentExercise.sourceMain}`,
								}}
							/>
						</View>
					)}

					<View style={[styles.buttonGroup, styles.center]}>
						<TimerToggleButton
							onToggle={this.toggleTimer}
							isRunning={this.state.isRunning}
						/>
						<Button
							title="Reset"
							onPress={() => this.resetTimerAndStop()}
						/>
					</View>
				</View>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	weeksWorkouts: state.weeksWorkouts,
	desiredDifficulty: state.desiredDifficulty,
});

export default connect(mapStateToProps)(WorkoutRoutinePlayer);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 150,
		backgroundColor: "#fff",
		alignItems: "stretch",
	},
	center: {
		alignSelf: "center",
	},
	buttonGroup: {
		flexDirection: "row",
	},
	title: {
		fontWeight: "bold",
		fontSize: 48,
	},
});

/* 
<ProgressBar
	timeRemaining={this.state.timeRemaining}
	timeTotal={this.getTimeTotal()}
	isRunning={this.state.isRunning}
/> 
*/
