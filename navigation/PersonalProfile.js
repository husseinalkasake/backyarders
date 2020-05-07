import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalProfileScreen from "../views/personalProfile/PersonalProfile";
import EditPersonalProfile from "../views/personalProfile/EditPersonalProfile";

export default function PersonalProfile() {
  const PersonalProfileStack = createStackNavigator();

  return (
    <PersonalProfileStack.Navigator initialRouteName="PersonalProfile">
      <PersonalProfileStack.Screen
        name="PersonalProfile"
        component={PersonalProfileScreen}
      />
      <PersonalProfileStack.Screen
        name="EditPersonalProfile"
        component={EditPersonalProfile}
      />
    </PersonalProfileStack.Navigator>
  );
}
