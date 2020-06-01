/*
You access this page from the NutritionPlate to focus on this nutrution section
Then you get to choose the different options for this plate section.
*/

import React from "react";
import { ScrollView, Text, View } from "react-native";
import { List, ListItem } from "native-base";
import { CustomStyleSheet, colors } from "../../styles";
import nutrition from "../../resources/nutrition";
import capitalizeFirstLetterOfEveryWord from "../../utils/capitalizeFirstLetterOfEveryWord";

const PlateSection = ({ route, navigation }) => {
	const { option: foodOption } = route.params;
	navigation.setOptions({
		title: foodOption,
	});
	const getList = (foodType) => {
		return (
			<List>
				{foodType.map((foodOption, index) => {
					return (
						<ListItem key={`food-list-item-${index}`}>
							<Text style={[styles.bold, styles.foodOptionText]}>
								{capitalizeFirstLetterOfEveryWord(foodOption)}
							</Text>
						</ListItem>
					);
				})}
			</List>
		);
	};

	const foodList = [];
	const foodType = nutrition[foodOption.toUpperCase()];
	if (Array.isArray(foodType)) {
		foodList.push(getList(foodType));
	} else {
		for (let [name, foods] of Object.entries(foodType)) {
			foodList.push(
				<View style={styles.subtitleContainer}>
					<Text style={[styles.bold, styles.subtitle]}>
						{capitalizeFirstLetterOfEveryWord(
							name.replace("_", " ")
						)}
					</Text>
				</View>
			);
			foodList.push(getList(foods));
		}
	}

	return <ScrollView style={styles.container}>{foodList}</ScrollView>;
};

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	foodOptionText: {
		fontSize: 20,
	},
	subtitleContainer: {
		height: 50,
		justifyContent: "center",
		backgroundColor: colors.MAIN_COLOR,
	},
	subtitle: {
		fontSize: 24,
		marginLeft: 12,
		color: "white",
	},
});

export default PlateSection;
