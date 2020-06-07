import React from "react";
import { View, Slider } from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";
import {
	updateDesiredDifficulty,
	updateAppFirstTimeUsage,
} from "../../redux/actions";
import questionnaireStyles from "./styles";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireNextButton from "./QuestionnaireNextButton";
import desiredDifficulty from "../../resources/desiredDifficulty";
import { colors, CustomStyleSheet } from "../../styles";

function QuestionnaireDesiredDifficultyOption({ option, currentOption, text }) {
	return (
		<View style={styles.desiredDifficulty}>
			<Text
				style={[
					styles.sliderOptionText,
					currentOption === option && styles.sliderOptionTextSelected,
				]}>
				{text}
			</Text>
		</View>
	);
}

function QuestionnaireDesiredDifficulty({
	desiredDifficulty: currentDesiredDifficulty,
	updateDesiredDifficulty,
	updateAppFirstTimeUsage,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<QuestionnaireTitle />

				<View>
					<Text style={styles.subtitle}>
						Desired workout difficulty
					</Text>
				</View>

				<View style={styles.sliderContainer}>
					<Slider
						style={styles.slider}
						minimumValue={0}
						maximumValue={2}
						step={1}
						value={currentDesiredDifficulty}
						onValueChange={(desiredDifficulty) =>
							updateDesiredDifficulty(desiredDifficulty)
						}
						minimumTrackTintColor="#000000"
						maximumTrackTintColor="#000000"
					/>
					<View style={styles.desiredDifficulties}>
						<QuestionnaireDesiredDifficultyOption
							option={desiredDifficulty.BEGINNER}
							currentOption={currentDesiredDifficulty}
							text="Beginner"
						/>
						<QuestionnaireDesiredDifficultyOption
							option={desiredDifficulty.INTERMEDIATE}
							currentOption={currentDesiredDifficulty}
							text="Intermediate"
						/>
						<QuestionnaireDesiredDifficultyOption
							option={desiredDifficulty.EXPERIENCED}
							currentOption={currentDesiredDifficulty}
							text="Experienced"
						/>
						<QuestionnaireDesiredDifficultyOption
							option={desiredDifficulty.GIVE_ME_A_CHALLENGE}
							currentOption={currentDesiredDifficulty}
							text="Give me a challenge"
						/>
					</View>
				</View>
			</View>

			<QuestionnaireNextButton
				text="Finish"
				goToNextScreen={() => updateAppFirstTimeUsage()}
			/>
		</View>
	);
}

const styles = CustomStyleSheet({
	...questionnaireStyles,
	desiredDifficulties: {
		flexDirection: "row",
		marginHorizontal: "-4%",
	},
	desiredDifficulty: {
		marginRight: "12%",
		backgroundColor: colors.MAIN_COLOR,
		height: 80,
		width: 100,
		justifyContent: "center",
		position: "relative",
		borderRadius: 45,
	},
});

const mapStateToProps = (state) => ({
	desiredDifficulty: state.desiredDifficulty,
});

const mapDispatchToProps = (dispatch) => ({
	updateDesiredDifficulty: (desiredDifficulty) =>
		dispatch(updateDesiredDifficulty(desiredDifficulty)),
	updateAppFirstTimeUsage: () => dispatch(updateAppFirstTimeUsage()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionnaireDesiredDifficulty);
