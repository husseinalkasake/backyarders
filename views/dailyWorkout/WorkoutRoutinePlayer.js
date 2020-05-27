/*
TODO make a new time for every item in the workoutRoutine array
*/

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { Countdown, TimeInput, TimerToggleButton } from "./TimerComponents";
import { Timer, vibrate } from "./utils";
import ProgressBar from "./ProgressBarAnimated";
import workoutDurationSec from "../../resources/workoutDurationSec";
import WorkoutRoutine from "./workoutRoutine";
import workoutTypes from "../../resources/workoutTypes";
import desiredWorkoutDurationMin from "../../resources/desiredWorkoutDurationMin";

const nextTimer = { work: "break", break: "work" };

class WorkoutRoutinePlayer extends React.Component {
	constructor(props) {
		super(props);

		const workoutRoutineObj = new WorkoutRoutine(
			this.props.desiredWorkoutDuration, // in minutes
			this.props.desiredWorkoutDuration == desiredWorkoutDurationMin.ABS
				? workoutTypes.ABS
				: this.props.weeksWorkouts[0], // the workout type
			this.props.desiredDifficulty
		);

		this.state = {
			workoutRoutine: workoutRoutineObj.workoutRoutine, // an array of the exact routine to be followed
			// in seconds
			workTime: workoutRoutineObj.getWorkoutTimeSec(),
			breakTime: workoutRoutineObj.getBreakTimeSec(),
			// in ms
			timeRemaining: workoutDurationSec.NOT_HIIT * 1000, // we start with all the work time
			isRunning: false,
			activeTimer: "work",
		};
	}

	componentDidMount() {
		this.timer = new Timer(
			this.state.timeRemaining,
			this.updateTimeRemaining,
			this.handleTimerEnd
		);
		this.setState({ isRunning: this.timer.isRunning });
	}

	componentWillUnmount() {
		if (this.timer) this.timer.stop();
	}

	updateTime = (target) => (time, shouldStartTimer) => {
		if (this.state.activeTimer === target) {
			if (this.timer) this.timer.stop();
			const timeRemaining = +time * 1000;
			this.timer = new Timer(
				timeRemaining,
				this.updateTimeRemaining,
				this.handleTimerEnd
			);
			if (!shouldStartTimer) this.timer.stop();
			this.setState({
				[`${target}Time`]: time,
				timeRemaining,
				isRunning: this.timer.isRunning,
			});
		} else {
			this.setState({
				[`${target}Time`]: time,
				isRunning: this.timer.isRunning,
			});
		}
	};

	// hack: if an event is passed (ie is button press), stop timer
	resetTimer = (shouldStopTimer) => {
		const { activeTimer } = this.state;
		this.updateTime(activeTimer)(
			this.state[`${activeTimer}Time`],
			!shouldStopTimer
		);
	};

	updateTimeRemaining = (timeRemaining) => {
		this.setState({ timeRemaining });
	};

	toggleTimer = () => {
		if (!this.timer) return;
		if (this.timer.isRunning) this.timer.stop();
		else this.timer.start();

		this.setState({ isRunning: this.timer.isRunning });
	};

	handleTimerEnd = () => {
		vibrate();
		this.setState(
			(prevState) => ({ activeTimer: nextTimer[prevState.activeTimer] }),
			this.resetTimer
		);
	};

	getTimeTotal = () => {
		const { workTime, breakTime } = this.state;
		return (
			(this.state.activeTimer === "work" ? workTime : breakTime) * 1000
		);
	};

	block() {
		const doneTime = Date.now() + 200;
		while (Date.now() < doneTime) {}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.title, styles.center]}>
					{this.state.activeTimer.toUpperCase()} TIMER
				</Text>
				<Countdown
					style={styles.center}
					timeRemaining={this.state.timeRemaining}
					onToggleTimer={this.toggleTimer}
					size="big"
				/>
				<ProgressBar
					timeRemaining={this.state.timeRemaining}
					timeTotal={this.getTimeTotal()}
					isRunning={this.state.isRunning}
				/>
				<View style={[styles.buttonGroup, styles.center]}>
					<TimerToggleButton
						onToggle={this.toggleTimer}
						isRunning={this.state.isRunning}
					/>
					<Button title="Reset" onPress={this.resetTimer} />
				</View>
			</View>
		);
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
