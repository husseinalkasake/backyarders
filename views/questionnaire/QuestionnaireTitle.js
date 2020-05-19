import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { CustomStyleSheet } from "../../styles";

export default function QuestionnaireTitle() {
	return (
		<View style={styles.questionnaireTitle}>
			<Text style={styles.headingText}>
				First, help us gather some of your info...
			</Text>
		</View>
	);
}

const styles = CustomStyleSheet({
	questionnaireTitle: {
		flexDirection: "row",
		paddingTop: "24%",
		marginHorizontal: "10%",
	},
	headingText: {
		paddingBottom: 24,
		fontSize: 18,
		position: "absolute",
		left: 0,
	},
});
