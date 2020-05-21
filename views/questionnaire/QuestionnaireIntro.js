import React from "react";
import {
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import styles from "./styles";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireNextButton from "./QuestionnaireNextButton";
import BasicInfoForm from "../../forms/BasicInfoForm";

function QuestionnaireIntro({ navigation }) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView behavior="height" style={styles.container}>
				<View style={styles.innerContainer}>
					<QuestionnaireTitle />
					<BasicInfoForm />
				</View>

				<QuestionnaireNextButton
					goToNextScreen={() => navigation.navigate("ActivityLevel")}
				/>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

export default QuestionnaireIntro;
