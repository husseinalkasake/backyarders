import sex from "../resources/sex";
import activityLevel from "../resources/activityLevel";
import desiredDifficulty from "../resources/desiredDifficulty";
import fitnessGoals from "../resources/fitnessGoals";

const defaultState = {
	age: "",
	sex: sex.UNDEFINED,
	weight: "",
	height: "",
	activityLevel: activityLevel.SEDENTARY,
	desiredDifficulty: desiredDifficulty.BEGINNER,
	fitnessGoals,
	isFirstTimeToUseApp: true,
};

export default defaultState;
