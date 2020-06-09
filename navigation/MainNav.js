import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DailyWorkout from "./DailyWorkout";
import WorkoutsProfile from "./WorkoutsProfile";
import Nutrition from "./Nutrition";
import PersonalProfile from "./PersonalProfile";
import routes from "./routes";
import { colors } from "../styles";

export default function MainNav() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName={routes.DAILY_WORKOUTS_ROUTE}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					switch (route.name) {
						case routes.DAILY_WORKOUTS_ROUTE:
							iconName = focused ? "ios-fitness" : "ios-fitness";
							break;
						case routes.WORKOUTS_LIST_ROUTE:
							iconName = focused ? "ios-search" : "ios-search";
							break;
						case routes.NUTRITION_ROUTE:
							iconName = focused
								? "ios-restaurant"
								: "ios-restaurant";
							break;
						case routes.PERSONAL_PROFILE_ROUTE:
							iconName = focused ? "ios-contact" : "ios-contact";
							break;
						default:
							break;
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: colors.MAIN_COLOR,
				inactiveTintColor: "gray",
				showLabel: false,
			}}>
			<Tab.Screen
				name={routes.DAILY_WORKOUTS_ROUTE}
				component={DailyWorkout}
			/>
			<Tab.Screen
				name={routes.WORKOUTS_LIST_ROUTE}
				component={WorkoutsProfile}
			/>
			<Tab.Screen name={routes.NUTRITION_ROUTE} component={Nutrition} />
			<Tab.Screen
				name={routes.PERSONAL_PROFILE_ROUTE}
				component={PersonalProfile}
			/>
		</Tab.Navigator>
	);
}
