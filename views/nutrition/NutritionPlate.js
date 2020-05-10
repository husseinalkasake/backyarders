/*
This is the landing page of nutrition.
It shows the stuff on the plate, and lets us select each compoenet to go into more details in PlateSection.
*/

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

function NutritionPlate({ route, navigation }) {
	navigation.setOptions({
		title: "Nutrition Plate",
	});

	return (
		<View style={styles.container}>
			<Text>Nutrition Plate</Text>
			<Text>Coming Soon</Text>
			<Button
				title="Go to plate section"
				onPress={() => navigation.navigate("PlateSection")}
			/>
		</View>
	);
}

export default NutritionPlate;
