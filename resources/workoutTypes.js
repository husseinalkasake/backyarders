const levels = {
	0: "Beginner",
	1: "Intermediate",
	2: "Pro",
	3: "Challenge",
};

const types = {
	push: "Push",
	pull: "Pull",
	legs: "Legs",
	abs: "Abs",
	hiit: "H.I.I.T.",
};

export const workouts = [
	{ level: levels[0], type: types.legs, name: "Basic Squat" },
	{ level: levels[3], type: types.push, name: "Clap Push-up" },
];
