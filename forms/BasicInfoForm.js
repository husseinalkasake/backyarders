import React from "react";
import { View } from "react-native";
import { Item, Button, Text } from "native-base";
import { connect } from "react-redux";
import {
	updateAge,
	updateSex,
	updateWeight,
	updateHeight,
} from "../redux/actions";
import sex from "../resources/sex";
import NumberInput from "../components/NumberInput";
import { colors, CustomStyleSheet } from "../styles";

class BasicInfoForm extends React.Component {
	render() {
		const {
			age,
			sex: currentSex,
			height,
			weight,
			isPersonalProfile,
			disabled,
		} = this.props;
		const fields = [
			this.getAgeField(age, isPersonalProfile, disabled),
			this.getSexField(currentSex, isPersonalProfile, disabled),
			this.getWeightField(weight, isPersonalProfile, disabled),
			this.getHeightField(height, isPersonalProfile, disabled),
		];

		return fields;
	}

	getAgeField(age, isPersonalProfile, disabled) {
		return (
			<View
				style={
					isPersonalProfile
						? styles.personalProfileField
						: styles.questionnaireField
				}>
				<Text style={styles.text}>Age</Text>
				<Item regular style={styles.input}>
					<NumberInput
						value={age}
						disabled={disabled}
						onChangeText={(text) => this.props.updateAge(text)}
					/>
				</Item>
			</View>
		);
	}
	getSexField(currentSex, isPersonalProfile, disabled) {
		return (
			<View
				style={
					isPersonalProfile
						? styles.personalProfileField
						: styles.questionnaireField
				}>
				<Text style={styles.text}>Sex</Text>
				<View style={styles.options}>
					<Button
						bordered
						style={[
							styles.optionButton,
							currentSex === sex.MALE &&
								(disabled
									? styles.optionButtonSelectedDisabled
									: styles.optionButtonSelected),
						]}
						onPress={() =>
							!disabled && this.props.updateSex(sex.MALE)
						}>
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
								(disabled
									? styles.optionButtonSelectedDisabled
									: styles.optionButtonSelected),
						]}
						onPress={() =>
							!disabled && this.props.updateSex(sex.FEMALE)
						}>
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
	getWeightField(weight, isPersonalProfile, disabled) {
		return (
			<View
				style={
					isPersonalProfile
						? styles.personalProfileField
						: styles.questionnaireField
				}>
				<Text style={styles.text}>Weight (kg)</Text>
				<Item regular style={styles.input}>
					<NumberInput
						disabled={disabled}
						onChangeText={(text) => this.props.updateWeight(text)}
						value={weight}
					/>
				</Item>
			</View>
		);
	}
	getHeightField(height, isPersonalProfile, disabled) {
		return (
			<View
				style={
					isPersonalProfile
						? styles.personalProfileField
						: styles.questionnaireField
				}>
				<Text style={styles.text}>Height (cm)</Text>
				<Item regular style={styles.input}>
					<NumberInput
						disabled={disabled}
						onChangeText={(text) => this.props.updateHeight(text)}
						value={height}
					/>
				</Item>
			</View>
		);
	}
}

const styles = CustomStyleSheet({
	input: {
		position: "absolute",
		right: 0,
		width: "30%",
		maxWidth: 240,
		borderColor: "black",
		borderRadius: 15,
	},
	optionButton: {
		marginLeft: 12,
		borderColor: colors.MAIN_COLOR,
		borderRadius: 15,
	},
	optionButtonText: {
		color: colors.MAIN_COLOR,
		fontSize: 12,
	},
	optionButtonSelected: {
		backgroundColor: colors.MAIN_COLOR,
	},
	optionButtonSelectedText: {
		color: colors.BACKGROUND_COLOR,
	},
	optionButtonSelectedDisabled: {
		backgroundColor: "gray",
	},
	personalProfileField: {
		flexDirection: "row",
		paddingTop: 60,
		marginHorizontal: 24,
	},
	questionnaireField: {
		flexDirection: "row",
		paddingTop: "24%",
		marginHorizontal: "10%",
	},
	options: {
		flexDirection: "row",
		position: "absolute",
		right: 0,
	},
});

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
