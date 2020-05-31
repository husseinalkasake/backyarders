/*
You access this page from the NutritionPlate to focus on this nutrution section:
- carbs
- proteins
- fibers

Then you get to choose the different options for this plate section.
*/

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { List, ListItem } from "native-base";
import { CustomStyleSheet } from "../../styles";
import nutrition from "../../resources/nutrition";

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	foodOptionText: {
		fontSize: 20,
	},
});

function PlateSection({ route, navigation }) {
	const { option } = route.params;
	navigation.setOptions({
		title: option,
	});
	return (
		<ScrollView style={styles.container}>
			<List>
				{nutrition[option.toUpperCase()].map((foodOption) => {
					return (
						<ListItem>
							<Text style={[styles.bold, styles.foodOptionText]}>
								{foodOption.replace(/\w\S*/g, (word) => {
									return (
										word.charAt(0).toUpperCase() +
										word.substr(1).toLowerCase()
									);
								})}
							</Text>
						</ListItem>
					);
				})}
			</List>
		</ScrollView>
	);
}

export default PlateSection;
