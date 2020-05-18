import React from "react";
import { View } from "react-native";
import styles from "./styles";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireNextButton from "./QuestionnaireNextButton";
import FitnessGoalsForm from "../../forms/FitnessGoalsForm";

class QuestionnaireFitnessGoals extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View
					style={[
						styles.innerContainer,
						styles.fitnessGoalsContainer,
					]}>
					<QuestionnaireTitle />
					<FitnessGoalsForm />
				</View>

				<QuestionnaireNextButton
					goToNextScreen={() =>
						this.props.navigation.navigate("DesiredDifficulty")
					}
				/>
			</View>
		);
	}
}

export default QuestionnaireFitnessGoals;
