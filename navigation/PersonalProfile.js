import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalProfileScreen from "../views/personalProfile/PersonalProfile";
import { PERSONAL_PROFILE_ROUTE } from "./routes";

export default function PersonalProfile() {
	const PersonalProfileStack = createStackNavigator();

	return (
		<PersonalProfileStack.Navigator
			initialRouteName={PERSONAL_PROFILE_ROUTE}>
			<PersonalProfileStack.Screen
				name={PERSONAL_PROFILE_ROUTE}
				component={PersonalProfileScreen}
			/>
		</PersonalProfileStack.Navigator>
	);
}
