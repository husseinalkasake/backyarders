import React from "react";
import { Button, Text } from "native-base";
import { CustomStyleSheet, colors } from "../../styles";

export default function QuestionnaireNextButton({
	goToNextScreen,
	text,
	absolutePosition = true,
}) {
	return (
		<Button
			style={[
				styles.nextButton,
				absolutePosition && styles.absolutePosition,
			]}
			onPress={goToNextScreen}>
			<Text style={styles.nextButtonText}>{text || "Next"}</Text>
		</Button>
	);
}

const styles = CustomStyleSheet({
	nextButton: {
		backgroundColor: colors.NEXT_BUTTON_COLOR,
		borderColor: colors.NEXT_BUTTON_COLOR,
		alignSelf: "center",
		borderRadius: 15,
	},
	nextButtonText: {
		color: "white",
		fontSize: 18,
	},
	absolutePosition: {
		position: "absolute",
		bottom: "15%",
	},
});
