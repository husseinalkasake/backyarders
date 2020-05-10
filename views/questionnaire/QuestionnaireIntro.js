import React from "react";
import {
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import {
 Input, Item, Button, Text,
} from "native-base";
import { connect } from "react-redux";
import {
	updateAge,
	updateSex,
	updateWeight,
	updateHeight,
} from "../../redux/actions";
import sex from "../../resources/sex";
import styles from "./styles";
import QuestionnaireTitle from "./QuestionnaireTitle";
import QuestionnaireNextButton from "./QuestionnaireNextButton";

class QuestionnaireIntro extends React.Component {
	static numberInput(text) {
		return text.replace(/\D/g, "");
	}

	render() {
		const {
 age, sex: currentSex, height, weight,
} = this.props;

		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView
					behavior="height"
					style={styles.container}
				>
					<View style={styles.innerContainer}>
						<QuestionnaireTitle />
						<View style={styles.field}>
							<Text style={styles.text}>Age</Text>
							<Item regular style={styles.input}>
								<Input
									keyboardType="number-pad"
									onChangeText={(text) =>
										this.props.updateAge(
											this.numberInput(text),
										)
									}
									value={age}
								/>
							</Item>
						</View>

						<View style={styles.field}>
							<Text style={styles.text}>Sex</Text>
							<View style={styles.options}>
								<Button
									bordered
									style={[
										styles.optionButton,
										currentSex === sex.MALE
											&& styles.optionButtonSelected,
									]}
									onPress={() =>
										this.props.updateSex(sex.MALE)
									}
								>
									<Text
										style={[
											styles.optionButtonText,
											currentSex === sex.MALE
												&& styles.optionButtonSelectedText,
										]}
									>
										Male
									</Text>
								</Button>
								<Button
									bordered
									style={[
										styles.optionButton,
										currentSex === sex.FEMALE
											&& styles.optionButtonSelected,
									]}
									onPress={() =>
										this.props.updateSex(sex.FEMALE)
									}
								>
									<Text
										style={[
											styles.optionButtonText,
											currentSex === sex.FEMALE
												&& styles.optionButtonSelectedText,
										]}
									>
										Female
									</Text>
								</Button>
							</View>
						</View>

						<View style={styles.field}>
							<Text style={styles.text}>Weight (kg)</Text>
							<Item regular style={styles.input}>
								<Input
									keyboardType="number-pad"
									onChangeText={(text) =>
										this.props.updateWeight(
											this.numberInput(text),
										)
									}
									value={weight}
								/>
							</Item>
						</View>

						<View style={styles.field}>
							<Text style={styles.text}>Height (cm)</Text>
							<Item regular style={styles.input}>
								<Input
									keyboardType="number-pad"
									onChangeText={(text) =>
										this.props.updateHeight(
											this.numberInput(text),
										)
									}
									value={height}
								/>
							</Item>
						</View>
					</View>

					<QuestionnaireNextButton
						goToNextScreen={() =>
							this.props.navigation.navigate("ActivityLevel")
						}
					/>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = (state) => ({
	age: state.age,
	sex: state.sex,
	weight: state.weight,
	height: state.height,
});

const mapDispatchToProps = (dispatch) => ({
	updateAge: (age) => dispatch(updateAge(age)),
	updateSex: (sex) => dispatch(updateSex(sex)),
	updateWeight: (weight) => dispatch(updateWeight(weight)),
	updateHeight: (height) => dispatch(updateHeight(height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireIntro);
