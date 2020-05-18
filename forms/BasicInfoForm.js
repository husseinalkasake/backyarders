import React from "react";
import {
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { Item, Button, Text } from "native-base";
import { connect } from "react-redux";
import {
	updateAge,
	updateSex,
	updateWeight,
	updateHeight,
} from "../redux/actions";
import sex from "../resources/sex";
import styles from "../views/questionnaire/styles";
import NumberInput from "../components/NumberInput";

class BasicInfoForm extends React.Component {
	render() {
		const { age, sex: currentSex, height, weight } = this.props;
		const fields = [
			this.getAgeField(age),
			this.getSexField(currentSex),
			this.getWeightField(weight),
			this.getHeightField(height),
		];

		return fields;
	}

	getAgeField(age) {
		return (
			<View style={styles.field}>
				<Text style={styles.text}>Age</Text>
				<Item regular style={styles.input}>
					<NumberInput
						value={age}
						onChangeText={(text) => this.props.updateAge(text)}
					/>
				</Item>
			</View>
		);
	}
	getSexField(currentSex) {
		return (
			<View style={styles.field}>
				<Text style={styles.text}>Sex</Text>
				<View style={styles.options}>
					<Button
						bordered
						style={[
							styles.optionButton,
							currentSex === sex.MALE &&
								styles.optionButtonSelected,
						]}
						onPress={() => this.props.updateSex(sex.MALE)}>
						<Text
							style={[
								styles.optionButtonText,
								currentSex === sex.MALE &&
									styles.optionButtonSelectedText,
							]}>
							Male
						</Text>
					</Button>
					<Button
						bordered
						style={[
							styles.optionButton,
							currentSex === sex.FEMALE &&
								styles.optionButtonSelected,
						]}
						onPress={() => this.props.updateSex(sex.FEMALE)}>
						<Text
							style={[
								styles.optionButtonText,
								currentSex === sex.FEMALE &&
									styles.optionButtonSelectedText,
							]}>
							Female
						</Text>
					</Button>
				</View>
			</View>
		);
	}
	getWeightField(weight) {
		return (
			<View style={styles.field}>
				<Text style={styles.text}>Weight (kg)</Text>
				<Item regular style={styles.input}>
					<NumberInput
						onChangeText={(text) => this.props.updateWeight(text)}
						value={weight}
					/>
				</Item>
			</View>
		);
	}
	getHeightField(height) {
		return (
			<View style={styles.field}>
				<Text style={styles.text}>Height (cm)</Text>
				<Item regular style={styles.input}>
					<NumberInput
						onChangeText={(text) => this.props.updateHeight(text)}
						value={height}
					/>
				</Item>
			</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoForm);
