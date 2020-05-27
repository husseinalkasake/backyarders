/*

This class creates a workout sequence, which depends on:
- fitnessGoal, and
- desiredDifficulty.

WEIGHT_LOSS:
- Beginner: PUSH, HIIT, PULL, BREAK, LEGS, BREAK, BREAK
- Intermediate: PUSH, HIIT, PULL, HIIT, LEGS, BREAK, BREAK
- Experienced: PUSH, HIIT, PULL, HIIT, LEGS, HIIT, BREAK

BULK:
- Beginner: PUSH, BREAK, PULL, BREAK, LEGS, BREAK, BREAK
- Intermediate: PUSH, PULL, LEGS, BREAK, PUSH, PULL, BREAK, LEGS, PUSH, PULL, BREAK, LEGS, PUSH, BREAK, 
- Experienced: PUSH, PULL, LEGS, PUSH, PULL, LEGS, BREAK

STRENGTH:
- Beginner: PUSH, BREAK, PULL, BREAK, LEGS, BREAK, BREAK
- Intermediate: PUSH, HIIT, PULL, ABS**, LEGS, BREAK, BREAK
- Experienced: PUSH, HIIT, PULL, ABS**, LEGS, HIIT, BREAK

** Abs are optional every day, so Abs in a sequence is equivalent to Break

*/

import desiredDifficulty from "./desiredDifficulty";
import fitnessGoals from "./fitnessGoals";
import workoutTypes from "./workoutTypes";

class WorkoutSequence {
	constructor(fitnessGoal, desiredDifficulty) {
		this.fitnessGoal = fitnessGoal;
		this.desiredDifficulty = desiredDifficulty;
		this.workoutSequence = [];
	}

	// generate a new workoutSequence
	generateSequence() {}

	// remove the first element in the workoutSequence array, and
	// push the new appropriate one
	updateSequence() {}
}

export default WorkoutSequence;
