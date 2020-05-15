import React from "react";
import { Button, Text } from "native-base";
import styles from "./styles";

export default function QuestionnaireNextButton({ goToNextScreen, text }) {
	return (
		<Button style={styles.nextButton} onPress={goToNextScreen}>
			<Text style={styles.nextButtonText}>{text || "Next"}</Text>
		</Button>
	);
}
