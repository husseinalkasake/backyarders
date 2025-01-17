import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";
import { updateFitnessGoals } from "../redux/actions";
import styles from "../views/questionnaire/styles";
import FitnessGoalsDragList from "./components/FitnessGoalsDragList";

function FitnessGoalsForm({
	fitnessGoals,
	updateFitnessGoals,
	isQuestionnaire,
}) {
	return [
		<View key="formSubtitle">
			<Text style={styles.subtitle}>Rank your fitness goals</Text>
		</View>,
		<FitnessGoalsDragList
			key="fitnessGoalsDragList"
			isQuestionnaire={isQuestionnaire}
			fitnessGoals={fitnessGoals}
			updateFitnessGoals={updateFitnessGoals}
		/>,
	];
}

const mapStateToProps = (state) => ({
	fitnessGoals: state.fitnessGoals,
});

const mapDispatchToProps = (dispatch) => ({
	updateFitnessGoals: (fitnessGoals) =>
		dispatch(updateFitnessGoals(fitnessGoals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FitnessGoalsForm);
