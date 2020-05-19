import {
	UPDATE_AGE,
	UPDATE_SEX,
	UPDATE_HEIGHT,
	UPDATE_WEIGHT,
	UPDATE_ACTIVITY_LEVEL,
	UPDATE_DESIRED_DIFFICULTY,
	UPDATE_FITNESS_GOALS,
	UPDATE_APP_FIRST_TIME_USAGE,
} from "./action_types";
import defaultState from "./state";

const rootReducer = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_AGE:
			return {
				...state,
				age: action.age,
			};
		case UPDATE_SEX:
			return {
				...state,
				sex: action.sex,
			};
		case UPDATE_WEIGHT:
			return {
				...state,
				weight: action.weight,
			};
		case UPDATE_HEIGHT:
			return {
				...state,
				height: action.height,
			};
		case UPDATE_ACTIVITY_LEVEL:
			return {
				...state,
				activityLevel: action.activityLevel,
			};
		case UPDATE_DESIRED_DIFFICULTY:
			return {
				...state,
				desiredDifficulty: action.desiredDifficulty,
			};
		case UPDATE_FITNESS_GOALS:
			return {
				...state,
				fitnessGoals: action.fitnessGoals.data.map(
					(goal) => goal.label
				),
			};
		case UPDATE_APP_FIRST_TIME_USAGE:
			return {
				...state,
				isFirstTimeToUseApp: false,
			};
		default:
			return state;
	}
};

export default rootReducer;
