import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuestionnaireIntro from "../views/questionnaire/QuestionnaireIntro";
import QuestionnaireActivityLevel from "../views/questionnaire/QuestionnaireActivityLevel";
import QuestionnaireFitnessGoals from "../views/questionnaire/QuestionnaireFitnessGoals";
import QuestionnaireDesiredDifficulty from "../views/questionnaire/QuestionnaireDesiredDifficulty";
import {
	QUESTIONNAIRE_WELCOME_ROUTE,
	QUESTIONNAIRE_INTRO_ROUTE,
	QUESTIONNAIRE_ACTIVITY_LEVEL_ROUTE,
	QUESTIONNAIRE_FITNESS_GOALS_ROUTE,
	QUESTIONNAIRE_DESIRED_DIFFICULTY_ROUTE,
} from "./routes";

export default function Questionnaire() {
	const QuestionnaireStack = createStackNavigator();
	return (
		<QuestionnaireStack.Navigator
			initialRouteName={QUESTIONNAIRE_WELCOME_ROUTE}>
			<QuestionnaireStack.Screen
				name={QUESTIONNAIRE_INTRO_ROUTE}
				component={QuestionnaireIntro}
				options={{ title: "General Info" }}
			/>
			<QuestionnaireStack.Screen
				name={QUESTIONNAIRE_ACTIVITY_LEVEL_ROUTE}
				component={QuestionnaireActivityLevel}
				options={{ title: "Current Activity Level" }}
			/>
			<QuestionnaireStack.Screen
				name={QUESTIONNAIRE_FITNESS_GOALS_ROUTE}
				component={QuestionnaireFitnessGoals}
				options={{ title: "Fitness Goal Ranking" }}
			/>
			<QuestionnaireStack.Screen
				name={QUESTIONNAIRE_DESIRED_DIFFICULTY_ROUTE}
				component={QuestionnaireDesiredDifficulty}
				options={{ title: "Desired Difficulty" }}
			/>
		</QuestionnaireStack.Navigator>
	);
}
