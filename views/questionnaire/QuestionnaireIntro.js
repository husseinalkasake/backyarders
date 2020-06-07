import React from "react";
import {
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Text,
} from "react-native";
import questionnaireStyles from "./styles";
import { CustomStyleSheet, colors } from "../../styles";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireNextButton from "./QuestionnaireNextButton";
import BasicInfoForm from "../../forms/BasicInfoForm";
import { connect } from "react-redux";
import sex from "../../resources/sex";

class QuestionnaireIntro extends React.Component {
	state = {
		showError: false,
	};

	isValid() {
		const isValid =
			this.props.age &&
			this.props.weight &&
			this.props.height &&
			this.props.sex !== sex.UNDEFINED;
		this.setState({ showError: !isValid });
		return isValid;
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView
					behavior="height"
					style={styles.container}>
					<View style={styles.innerContainer}>
						<QuestionnaireTitle />
						<BasicInfoForm />
					</View>
					{this.state.showError && (
						<Text style={styles.requiredText}>
							All above fields are required
						</Text>
					)}
					<QuestionnaireNextButton
						absolutePosition={false}
						goToNextScreen={() =>
							this.isValid() &&
							this.props.navigation.navigate("ActivityLevel")
						}
					/>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = CustomStyleSheet({
	...questionnaireStyles,
	requiredText: {
		fontSize: 14,
		fontWeight: "bold",
		alignSelf: "center",
		marginBottom: 36,
		color: colors.ERROR_COLOR,
	},
});

const mapStateToProps = (state) => ({
	age: state.age,
	sex: state.sex,
	weight: state.weight,
	height: state.height,
});

export default connect(mapStateToProps)(QuestionnaireIntro);
