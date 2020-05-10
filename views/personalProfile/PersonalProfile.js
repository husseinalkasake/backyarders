/*
This page shows the personal profile of a user.
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

function PersonalProfile({ route, navigation }) {
	navigation.setOptions({
		title: "Personal Profile",
		headerRight: () => (
			<Button
				title="Edit"
				onPress={() => navigation.navigate("EditPersonalProfile")}
			/>
		),
	});

	return (
		<View style={styles.container}>
			<Text>Personal Profile</Text>
			<Text>Coming Soon</Text>
		</View>
	);
}

export default PersonalProfile;
