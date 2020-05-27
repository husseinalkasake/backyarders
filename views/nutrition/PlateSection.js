/*
You access this page from the NutritionPlate to focus on this nutrution section:
- carbs
- proteins
- fibers

Then you get to choose the different options for this plate section.
*/

import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { CustomStyleSheet } from "../../styles";
import PieChart from "../../components/PieChart";
import sex from "../../resources/sex";
import activityLevel from "../../resources/activityLevel";

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

class PlateSection extends React.Component {
	getCalorieIntake = () => {
		const { age } = this.props;
		const weightInPounds = this.props.weight * 2.20462;
		const heightInInches = this.props.height * 0.393701;
		const bmr =
			this.props.sex === sex.MALE
				? 66 + 6.3 * weightInPounds + 12.9 * heightInInches - 6.8 * age
				: 655 + 4.3 * weightInPounds + 4.7 * heightInInches - 4.7 * age;

		let calorieIntake = 0;
		switch (this.props.activityLevel) {
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

	render() {
		this.props.navigation.setOptions({
			title: "Plate Section",
		});
		return (
			<View style={styles.container}>
				<Text>Today's meal plan</Text>
				<PieChart
					chart_wh={250}
					series={[100, 50, 50]}
					sliceColor={["#F44336", "#2196F3", "#FFEB3B"]}
					doughnut={true}
					coverRadius={0.45}
					coverFill={"#FFF"}
				/>
				<Text>Today's Calorie Intake</Text>
				<Text>{`${this.getCalorieIntake()} kcal`}</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	sex: state.sex,
	age: state.age,
	weight: state.weight,
	height: state.height,
	activityLevel: state.activityLevel,
});

export default connect(mapStateToProps)(PlateSection);
