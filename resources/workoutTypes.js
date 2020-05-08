export const workoutLevels = {
  0: "Beginner",
  1: "Intermediate",
  2: "Pro",
  3: "Challenge",
};

const absLevels = {
  0: "Easy",
  1: "Hard",
};

const workoutTypes = {
  push: "Push",
  pull: "Pull",
  legs: "Legs",
  abs: "Abs",
  hiit: "H.I.I.T.",
};

export const NOT_APPLICABLE = "NA";

export const workouts = [
  {
    level: workoutLevels[0],
    type: workoutTypes.legs,
    name: "Basic Squat",
    sourceMain: "",
    sourceEdu: require("../assets/workoutEdu/mountain_climbers.mov"),
    muscles: "Glutes/Hamstrings",
  },
  {
    level: workoutLevels[3],
    type: workoutTypes.push,
    name: "Clap Push-up",
    sourceMain: require("../assets/workoutEdu/mountain_climbers.mov"),
    sourceEdu: "NA",
    muscles: "Chest/Shoulders",
  },
];
