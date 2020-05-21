import workoutLevels from "./desiredDifficulty";
import workoutTypes from "./workoutTypes";

export const NOT_APPLICABLE = "NA";

const workouts = [
	{
		level: workoutLevels.BEGINNER,
		type: workoutTypes.LEGS,
		name: "Basic Squat",
		sourceMain: "",
		sourceEdu: "/Bj2d",
		muscles: "Glutes/Hamstrings",
	},
	{
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		type: workoutTypes.PUSH,
		name: "Clap Push-up",
		sourceMain: "/Bj2d",
		sourceEdu: "NA",
		muscles: "Chest/Shoulders",
	},
];

export default workouts;
