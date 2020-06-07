/*
This is the landing page of nutrition.
It shows stuff on the plate, and lets you select each component to go into more details.
*/

import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "native-base";
import { CustomStyleSheet } from "../../styles";
import PieChart from "../../components/PieChart";
import sex from "../../resources/sex";
import activityLevel from "../../resources/activityLevel";

function NutritionPlate({
	age,
	weight,
	height,
	navigation,
	sex: currentSex,
	activityLevel: currentActivityLevel,
}) {
	// TODO: MOVE THIS SOMEWHERE ELSE WHEN ITS USED ELSEWHERE
	const getCalorieIntake = () => {
		const weightInPounds = weight * 2.20462;
		const heightInInches = height * 0.393701;
		const bmr =
			currentSex === sex.MALE
				? 66 + 6.3 * weightInPounds + 12.9 * heightInInches - 6.8 * age
				: 655 + 4.3 * weightInPounds + 4.7 * heightInInches - 4.7 * age;

		let calorieIntake = 0;
		switch (currentActivityLevel) {
			case activityLevel.SEDENTARY:
				calorieIntake = bmr * 1.2;
			case activityLevel.LIGHT:
				calorieIntake = bmr * 1.375;
			case activityLevel.MODERATE:
				calorieIntake = bmr * 1.55;
			case activityLevel.ACTIVE:
				calorieIntake = bmr * 1.725;
		}
		return calorieIntake ? Math.round(calorieIntake) : "N/A";
	};
	const optionButton = (option) => {
		return (
			<Button
				bordered
				style={[styles.optionButton(option)]}
				onPress={() =>
					navigation.navigate("PlateSection", { option: option.text })
				}>
				<Text style={[styles.bold, styles.optionButtonText(option)]}>
					{option.text}
				</Text>
			</Button>
		);
	};
	navigation.setOptions({
		title: "Nutrition Plate",
	});
	return (
		<View style={styles.container}>
			<Text style={[styles.title, styles.bold]}>Your Meal Plan</Text>
			<PieChart
				chart_wh={200}
				series={[100, 50, 50]}
				sliceColor={[
					options.CARBS.color,
					options.PROTEIN.color,
					options.FATS.color,
				]}
				doughnut={true}
				coverRadius={0.45}
				coverFill={"white"}
				style={styles.pieChart}
			/>
			<View style={styles.optionsContainer}>
				<View style={styles.optionsRow}>
					{optionButton(options.PROTEIN)}
					{optionButton(options.CARBS)}
				</View>
				<View style={styles.optionsRow}>
					{optionButton(options.VEGETABLES)}
					{optionButton(options.FATS)}
				</View>
			</View>
			<Text style={styles.subtitle}>Daily Calorie Intake</Text>
			<Text style={[styles.title, styles.bold]}>
				{`${getCalorieIntake()} kcal`}
			</Text>
		</View>
	);
}

const options = {
	PROTEIN: {
		text: "Protein",
		color: "#F94F4F",
	},
	CARBS: {
		text: "Carbs",
		color: "#2196F3",
	},
	VEGETABLES: {
		text: "Vegetables",
		color: "green",
	},
	FATS: {
		text: "Fats",
		color: "purple",
	},
};

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
	},
	pieChart: {
		marginTop: "10%",
	},
	optionButton: (option) => {
		return {
			width: "48%",
			minHeight: 50,
			marginVertical: "1%",
			borderColor: option.color,
			borderRadius: 10,
			justifyContent: "center",
		};
	},
	optionButtonText: (option) => {
		return {
			color: option.color,
			fontSize: 16,
		};
	},
	optionsContainer: {
		width: "60%",
		marginVertical: "10%",
	},
	optionsRow: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	subtitle: {
		fontSize: 16,
	},
});

const mapStateToProps = (state) => ({
	sex: state.sex,
	age: state.age,
	weight: state.weight,
	height: state.height,
	activityLevel: state.activityLevel,
});

export default connect(mapStateToProps)(NutritionPlate);
