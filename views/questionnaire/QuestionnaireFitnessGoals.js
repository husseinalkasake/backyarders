import React from "react";
import { View } from "react-native";
import questionnaireStyles from "./styles";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireNextButton from "./QuestionnaireNextButton";
import FitnessGoalsForm from "../../forms/FitnessGoalsForm";
import { CustomStyleSheet } from "../../styles";

function QuestionnaireFitnessGoals({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={[styles.innerContainer, styles.fitnessGoalsContainer]}>
				<QuestionnaireTitle />
				<FitnessGoalsForm isQuestionnaire={true} />
			</View>

			<QuestionnaireNextButton
				goToNextScreen={() => navigation.navigate("DesiredDifficulty")}
			/>
		</View>
	);
}

const styles = CustomStyleSheet({
	...questionnaireStyles,
	fitnessGoalsContainer: {
		top: "-15%", // HACK DUE TO DRAGLIST ACTING WEIRD
	},
});

export default QuestionnaireFitnessGoals;
