/*

This is the meat of this app!
This is where the daily workout routine takes place.

This component takes the desired workout intensity of the user and the day's workout type,
it then filters the pool of workouts to find the workouts that fit those two criteria.

It picks a random set of workouts for the day:
- 5 exercises if user chooses 30 mins (each exercise repeats 3 times)
- 7 exercises if user chooses 45 mins + 3 mins stretch (each exercise repeats 3 times)
- 7 exercises if user chooses 60 mins + 4 mins stretch (each exercise repeats 4 times)

This class takes 3 parameters:
- desiredWorkoutDurationMin: # of mins
- workoutType: Push, Pull, Legs, etc
- desiredDifficultyLevel: Beginner, Intermediate, etc

It generates a workout based on these parameters.
A workout includes:
- total workout duration (in seconds);
- an array of workout objects; each object has:
-- a video source, 
-- a name, and 
-- a duration (in seconds).
*/

import desiredDifficulty from "../../resources/desiredDifficulty";
import workouts from "../../resources/workouts";
import workoutDurationSec from "../../resources/workoutDurationSec";
import desiredWorkoutDurationMin from "../../resources/desiredWorkoutDurationMin";
import workoutTypes from "../../resources/workoutTypes";

class WorkoutRoutine {
	constructor(
		desiredWorkoutDurationMin,
		workoutType,
		desiredDifficultyLevel
	) {
		this.totalWorkoutTimeMin = desiredWorkoutDurationMin;
		this.workoutType = workoutType;
		this.desiredDifficulty = desiredDifficultyLevel;
		this.workoutRoutine = []; // initialize it to an empty array then fill it with WorkoutVideo objects
		this.numberOfExercises = 0; // the number of exercises (includes the reps, cool down and warmp up)
		this.genrateWorkoutRoutine(); // make the routine
	}

	// returns true if workout starts with a stretch
	hasStretch() {
		return (
			this.totalWorkoutTimeMin ===
				desiredWorkoutDurationMin.FORTY_FIVE_MINUTES ||
			this.totalWorkoutTimeMin === desiredWorkoutDurationMin.SIXTY_MINUTES
		);
	}

	// 5 for 30 mins, 7 for 45 and 60 mins
	getNumberOfUniqueWorkouts() {
		return this.totalWorkoutTimeMin ==
			desiredWorkoutDurationMin.THIRTY_MINUTES
			? 5
			: 7;
	}

	// 3 for 30 and 45 minutes, 4 for 60 mins
	getNumberOfWorkoutRepitions() {
		return this.totalWorkoutTimeMin ==
			desiredWorkoutDurationMin.SIXTY_MINUTES
			? 4
			: 3;
	}

	// returns the total time required
	getTotalWorkoutTimeInSecs() {
		return this.totalWorkoutTimeMin * 60;
	}

	getWorkoutTimeSec() {
		if (this.workoutType == workoutTypes.HIIT)
			return workoutDurationSec.NOT_HIIT;
		switch (this.desiredDifficulty) {
			case desiredDifficulty.BEGINNER:
				return workoutDurationSec.HIIT_BEGINNER_WORK;
			case desiredDifficulty.INTERMEDIATE:
				return workoutDurationSec.HIIT_INTERMEDIATE_WORK;
			case desiredDifficulty.EXPERIENCED:
				return workoutDurationSec.HIIT_PRO_WORK;
			default:
				return workoutDurationSec.NOT_HIIT;
		}
	}

	getBreakTimeSec() {
		if (this.workoutType == workoutTypes.HIIT)
			return workoutDurationSec.NOT_HIIT;
		switch (this.desiredDifficulty) {
			case desiredDifficulty.BEGINNER:
				return workoutDurationSec.HIIT_BEGINNER_REST;
			case desiredDifficulty.INTERMEDIATE:
				return workoutDurationSec.HIIT_INTERMEDIATE_REST;
			case desiredDifficulty.EXPERIENCED:
				return workoutDurationSec.HIIT_PRO_REST;
			default:
				return workoutDurationSec.NOT_HIIT;
		}
	}

	genrateWorkoutRoutine() {
		// get a list of the of the workouts that can be used in this day's workout
		const availableWorkouts = workouts.filter(
			(workout) =>
				workout.level === this.desiredDifficulty && // must be the same level as the user wants
				workout.type === this.workoutType // must be in the pool of the day's workouts
		);

		// get the warm-up video
		const stretch = workouts.filter(
			(workout) => workout.type === workoutTypes.WARM_UP
		);

		// shuffle the workouts to get a random set
		const shuffledWorkouts = shuffle(availableWorkouts);

		const sets = this.getNumberOfUniqueWorkouts();

		// choose number of exercises based on availabilty of time -> slice to 4 / 6
		const todaysWorkouts = shuffledWorkouts.slice(0, sets - 1);

		const reps = this.getNumberOfWorkoutRepitions();

		// add a stretch if time permits
		switch (this.totalWorkoutTimeMin) {
			case desiredWorkoutDurationMin.FORTY_FIVE_MINUTES:
				const stretchVideo = new WorkoutVideo({
					...stretch,
					duration: 3 * 60, // warmp up for 3 mins
				}); // TODO add mins
				this.workoutRoutine.push(stretchVideo);
				break;
			case desiredWorkoutDurationMin.SIXTY_MINUTES:
				const stretchVideo = new WorkoutVideo({
					...stretch,
					duration: 4 * 60, // warm up for 4 mins
				});
				this.workoutRoutine.push(stretchVideo);
				break;
			default:
				break; // dont add stretch for 30 mins
		}

		// add in the exact routine of workouts and breaks and their durations (factor in reps)
		todaysWorkouts.map((workout) => {
			for (let i = 0; i < reps; i++) {
				// add the workout
				this.workoutRoutine.push({
					...workout,
					duration: this.getWorkoutTimeSec(),
				});
				// add the break after the workout
				this.workoutRoutine.push({
					name: "Break",
					type: workoutTypes.BREAK,
					duration: this.getBreakTimeSec(),
				});
			}
		});
	}
}

export default WorkoutRoutine;

// function that returns the passed in array in random order
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
