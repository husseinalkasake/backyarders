import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Icon } from "native-base";
import styles from "../styles";

class QuestionnaireActivityLevelOption extends React.Component {
	getTooltipText() {
		const exerciseAmounts = ["0", "1-3", "3-4", "5-6"];
		return `I exercise ${
			exerciseAmounts[this.props.option]
		} times per week`;
	}

	render() {
		const {
 option, text, currentOption, tooltip, onTooltip,
} = this.props;
		return (
			<View>
				<View style={styles.activityLevel}>
					<Text
						style={[
							styles.activityLevelText,
							currentOption === option
								&& styles.activityLevelTextSelected,
						]}
					>
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

export default QuestionnaireActivityLevelOption;
