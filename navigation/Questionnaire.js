import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuestionnaireIntro from "../views/questionnaire/QuestionnaireIntro";
import QuestionnaireActivityLevel from "../views/questionnaire/QuestionnaireActivityLevel";
import QuestionnaireFitnessGoals from "../views/questionnaire/QuestionnaireFitnessGoals";
import QuestionnaireDesiredDifficulty from "../views/questionnaire/QuestionnaireDesiredDifficulty";

export default function Questionnaire() {
  const QuestionnaireStack = createStackNavigator();
  return (
    <QuestionnaireStack.Navigator initialRouteName="Welcome">
      <QuestionnaireStack.Screen
        name="Intro"
        component={QuestionnaireIntro}
        options={{ title: "General Info" }}
      />
      <QuestionnaireStack.Screen
        name="ActivityLevel"
        component={QuestionnaireActivityLevel}
        options={{ title: "Current Activity Level" }}
      />
      <QuestionnaireStack.Screen
        name="FitnessGoals"
        component={QuestionnaireFitnessGoals}
        options={{ title: "Fitness Goal Ranking" }}
      />
      <QuestionnaireStack.Screen
        name="DesiredDifficulty"
        component={QuestionnaireDesiredDifficulty}
        options={{ title: "Desired Difficulty" }}
      />
    </QuestionnaireStack.Navigator>
  );
}
