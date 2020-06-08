import sex from "../resources/sex";
import activityLevel from "../resources/activityLevel";
import desiredDifficulty from "../resources/desiredDifficulty";
import fitnessGoals from "../resources/fitnessGoals";
import getWorkoutSequence from "../resources/workoutSequence";

const defaultState = {
	age: "",
	sex: sex.UNDEFINED,
	weight: "",
	height: "",
	activityLevel: activityLevel.SEDENTARY,
	desiredDifficulty: desiredDifficulty.BEGINNER,
	fitnessGoals,
	isFirstTimeToUseApp: true,
	workoutSequence: getWorkoutSequence(
		fitnessGoals[0],
		desiredDifficulty.BEGINNER
	),
};

export default defaultState;
