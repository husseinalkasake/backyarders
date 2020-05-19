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

function BasicInfoForm({
	age,
	sex: currentSex,
	weight,
	height,
	updateAge,
	updateSex,
	updateHeight,
	updateWeight,
	isPersonalProfile,
	disabled,
}) {
	return [
		<AgeField
			key="ageField"
			age={age}
			isPersonalProfile={isPersonalProfile}
			disabled={disabled}
			updateAge={updateAge}
		/>,
		<SexField
			key="sexField"
			currentSex={currentSex}
			isPersonalProfile={isPersonalProfile}
			disabled={disabled}
			updateSex={updateSex}
		/>,
		<WeightField
			key="weightField"
			weight={weight}
			isPersonalProfile={isPersonalProfile}
			disabled={disabled}
			updateWeight={updateWeight}
		/>,
		<HeightField
			key="heightField"
			height={height}
			isPersonalProfile={isPersonalProfile}
			disabled={disabled}
			updateHeight={updateHeight}
		/>,
	];
}

function AgeField({ age, isPersonalProfile, disabled, updateAge }) {
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
					onChangeText={(text) => updateAge(text)}
				/>
			</Item>
		</View>
	);
}

function SexField({ currentSex, isPersonalProfile, disabled, updateSex }) {
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
					onPress={() => !disabled && updateSex(sex.MALE)}>
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
					onPress={() => !disabled && updateSex(sex.FEMALE)}>
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
function WeightField({ weight, isPersonalProfile, disabled, updateWeight }) {
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
					onChangeText={(text) => updateWeight(text)}
					value={weight}
				/>
			</Item>
		</View>
	);
}

function HeightField({ height, isPersonalProfile, disabled, updateHeight }) {
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
					onChangeText={(text) => updateHeight(text)}
					value={height}
				/>
			</Item>
		</View>
	);
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
