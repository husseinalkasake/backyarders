import React from "react";
import { View, Slider } from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";
import { updateActivityLevel } from "../../redux/actions";
import questionnaireStyles from "./styles";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireNextButton from "./QuestionnaireNextButton";
import QuestionnaireActivityLevelOption from "./components/QuestionnaireActivityLevelOption";
import activityLevel from "../../resources/activityLevel";
import { CustomStyleSheet } from "../../styles";

class QuestionnaireActivityLevel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tooltip: activityLevel.UNDEFINED,
		};
	}

	toggleTooltip(tooltip) {
		this.setState((prevState) => ({
			tooltip:
				prevState.tooltip === tooltip
					? activityLevel.UNDEFINED
					: tooltip,
		}));
	}

	updateActivityLevel(newActivityLevel) {
		this.toggleTooltip(activityLevel.UNDEFINED);
		this.props.updateActivityLevel(newActivityLevel);
	}

	render() {
		const { activityLevel: currentActivityLevel } = this.props;
		const { tooltip } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<QuestionnaireTitle />

					<View>
						<Text style={styles.subtitle}>
							Current activity level
						</Text>
					</View>

					<View style={styles.sliderContainer}>
						<Slider
							style={styles.slider}
							minimumValue={0}
							maximumValue={3}
							step={1}
							value={this.props.activityLevel}
							onValueChange={(activityLevel) =>
								this.updateActivityLevel(activityLevel)
							}
							minimumTrackTintColor="#000000"
							maximumTrackTintColor="#000000"
						/>
						<View style={styles.activityLevels}>
							<QuestionnaireActivityLevelOption
								text="Sedentary"
								option={activityLevel.SEDENTARY}
								currentOption={currentActivityLevel}
								tooltip={tooltip}
								onTooltip={() =>
									this.toggleTooltip(activityLevel.SEDENTARY)
								}
							/>
							<QuestionnaireActivityLevelOption
								text="Light"
								option={activityLevel.LIGHT}
								currentOption={currentActivityLevel}
								tooltip={tooltip}
								onTooltip={() =>
									this.toggleTooltip(activityLevel.LIGHT)
								}
							/>
							<QuestionnaireActivityLevelOption
								text="Moderate"
								option={activityLevel.MODERATE}
								currentOption={currentActivityLevel}
								tooltip={tooltip}
								onTooltip={() =>
									this.toggleTooltip(activityLevel.MODERATE)
								}
							/>
							<QuestionnaireActivityLevelOption
								text="Active"
								option={activityLevel.ACTIVE}
								currentOption={currentActivityLevel}
								tooltip={tooltip}
								onTooltip={() =>
									this.toggleTooltip(activityLevel.ACTIVE)
								}
							/>
						</View>
					</View>
				</View>

				<QuestionnaireNextButton
					goToNextScreen={() =>
						this.props.navigation.navigate("FitnessGoals")
					}
				/>
			</View>
		);
	}
}

const styles = CustomStyleSheet({
	...questionnaireStyles,
	activityLevels: {
		flexDirection: "row",
		marginHorizontal: "-2%",
	},
});

const mapStateToProps = (state) => ({
	activityLevel: state.activityLevel,
});

const mapDispatchToProps = (dispatch) => ({
	updateActivityLevel: (activityLevel) =>
		dispatch(updateActivityLevel(activityLevel)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionnaireActivityLevel);
