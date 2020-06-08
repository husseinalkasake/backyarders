/*

This class creates a workout sequence, which depends on:
- fitnessGoal, and
- desiredDifficulty.

*/

import workoutTypes from "./workoutTypes";
import { fitnessGoalsEnum } from "./fitnessGoals";
import desiredDifficultyEnum from "./desiredDifficulty";

// TODO: MOVE ALL THIS TO BACKEND
const workoutSequence = {
	BULK: {
		BEGINNER: [
			workoutTypes.PUSH,
			workoutTypes.HIIT,
			workoutTypes.PULL,
			workoutTypes.BREAK,
			workoutTypes.LEGS,
			workoutTypes.BREAK,
			workoutTypes.BREAK,
		],
		INTERMEDIATE: [
			workoutTypes.PUSH,
			workoutTypes.HIIT,
			workoutTypes.PULL,
			workoutTypes.HIIT,
			workoutTypes.LEGS,
			workoutTypes.BREAK,
			workoutTypes.BREAK,
		],
		EXPERIENCED: [
			workoutTypes.PUSH,
			workoutTypes.HIIT,
			workoutTypes.PULL,
			workoutTypes.HIIT,
			workoutTypes.LEGS,
			workoutTypes.HIIT,
			workoutTypes.BREAK,
		],
	},
	STRENGTH: {
		BEGINNER: [
			workoutTypes.PUSH,
			workoutTypes.BREAK,
			workoutTypes.PULL,
			workoutTypes.BREAK,
			workoutTypes.LEGS,
			workoutTypes.BREAK,
			workoutTypes.BREAK,
		],
		INTERMEDIATE: [
			workoutTypes.PUSH,
			workoutTypes.PULL,
			workoutTypes.LEGS,
			workoutTypes.BREAK,
			workoutTypes.PUSH,
			workoutTypes.PULL,
			workoutTypes.BREAK,
		],
		EXPERIENCED: [
			workoutTypes.PUSH,
			workoutTypes.PULL,
			workoutTypes.LEGS,
			workoutTypes.PUSH,
			workoutTypes.PULL,
			workoutTypes.LEGS,
			workoutTypes.BREAK,
		],
	},
	WEIGHT_LOSS: {
		BEGINNER: [
			workoutTypes.PUSH,
			workoutTypes.BREAK,
			workoutTypes.PULL,
			workoutTypes.BREAK,
			workoutTypes.LEGS,
			workoutTypes.BREAK,
			workoutTypes.BREAK,
		],
		INTERMEDIATE: [
			workoutTypes.PUSH,
			workoutTypes.HIIT,
			workoutTypes.PULL,
			workoutTypes.ABS,
			workoutTypes.LEGS,
			workoutTypes.BREAK,
			workoutTypes.BREAK,
		],
		EXPERIENCED: [
			workoutTypes.PUSH,
			workoutTypes.HIIT,
			workoutTypes.PULL,
			workoutTypes.ABS,
			workoutTypes.LEGS,
			workoutTypes.HIIT,
			workoutTypes.BREAK,
		],
	},
};

function getWorkoutSequence(fitnessGoal, desiredDifficulty) {
	const getKey = (obj, val) =>
		Object.keys(obj).find((key) => obj[key] === val);

	fitnessGoalKey = getKey(fitnessGoalsEnum, fitnessGoal);
	desiredDifficultyKey = getKey(desiredDifficultyEnum, desiredDifficulty);
	return workoutSequence[fitnessGoalKey][desiredDifficultyKey];
}

export default getWorkoutSequence;
