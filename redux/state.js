import sex from "../resources/sex";
import activityLevel from "../resources/activityLevel";
import desiredDifficulty from "../resources/desiredDifficulty";
import fitnessGoals from "../resources/fitnessGoals";
import workoutTypes from "../resources/workoutTypes";

const defaultState = {
	age: "",
	sex: sex.UNDEFINED,
	weight: "",
	height: "",
	activityLevel: activityLevel.SEDENTARY,
	desiredDifficulty: desiredDifficulty.BEGINNER,
	fitnessGoals,
	isFirstTimeToUseApp: true,
	weeksWorkouts: [
		workoutTypes.PUSH,
		workoutTypes.ABS,
		workoutTypes.LEGS,
		workoutTypes.PULL,
		workoutTypes.HIIT,
		workoutTypes.PUSH,
		workoutTypes.ABS,
	],
};

export default defaultState;
