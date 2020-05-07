import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DailyWorkout from "./DailyWorkout";
import WorkoutsProfile from "./WorkoutsProfile";
import Nutrition from "./Nutrition";
import PersonalProfile from "./PersonalProfile";
import routes from "./routes";

export default function MainNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={routes.DAILY_WORKOUT_ROUTE}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case routes.DAILY_WORKOUT_ROUTE:
              iconName = focused ? "ios-fitness" : "ios-fitness";
              break;
            case routes.WORKOUTS_PROFILE_ROUTE:
              iconName = focused ? "ios-search" : "ios-search";
              break;
            case routes.NUTRITION_ROUTE:
              iconName = focused ? "ios-restaurant" : "ios-restaurant";
              break;
            case routes.PERSONAL_PROFILE_ROUTE:
              iconName = focused ? "ios-contact" : "ios-contact";
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name={routes.DAILY_WORKOUT_ROUTE} component={DailyWorkout} />
      <Tab.Screen
        name={routes.WORKOUTS_PROFILE_ROUTE}
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
