import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Icon } from "native-base";
import questionnaireStyles from "../styles";
import { colors, CustomStyleSheet } from "../../../styles";

class QuestionnaireActivityLevelOption extends React.Component {
	getTooltipText() {
		const exerciseAmounts = ["0", "1-3", "3-4", "5-6"];
		return `I exercise ${
			exerciseAmounts[this.props.option]
		} times per week`;
	}

	render() {
		const { option, text, currentOption, tooltip, onTooltip } = this.props;
		return (
			<View>
				<View style={styles.activityLevel}>
					<Text
						style={[
							styles.sliderOptionText,
							currentOption === option &&
								styles.sliderOptionTextSelected,
						]}>
						{text}
					</Text>
				</View>
				<TouchableOpacity onPress={onTooltip}>
					<Icon
						style={styles.icon}
						type="AntDesign"
						name="questioncircle"
					/>
				</TouchableOpacity>
				{tooltip === option && (
					<Text style={styles.tooltipText}>
						{this.getTooltipText()}
					</Text>
				)}
			</View>
		);
	}
}

const styles = CustomStyleSheet({
	...questionnaireStyles,
	icon: {
		alignSelf: "center",
		paddingTop: 6,
		paddingRight: "6%",
		fontSize: 24,
	},
	tooltipText: {
		fontSize: 12,
		position: "absolute",
		bottom: -48,
		left: 6,
	},
	activityLevel: {
		marginRight: "6%",
		backgroundColor: colors.MAIN_COLOR,
		height: 60,
		width: 80,
		justifyContent: "center",
		position: "relative",
		borderRadius: 45,
	},
});

export default QuestionnaireActivityLevelOption;
