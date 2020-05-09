import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalProfileScreen from "../views/personalProfile/PersonalProfile";
import EditPersonalProfile from "../views/personalProfile/EditPersonalProfile";
import { PERSONAL_PROFILE_ROUTE, PERSONAL_PROFILE_EDIT_ROUTE } from "./routes";

export default function PersonalProfile() {
  const PersonalProfileStack = createStackNavigator();

  return (
    <PersonalProfileStack.Navigator initialRouteName={PERSONAL_PROFILE_ROUTE}>
      <PersonalProfileStack.Screen
        name={PERSONAL_PROFILE_ROUTE}
        component={PersonalProfileScreen}
      />
      <PersonalProfileStack.Screen
        name={PERSONAL_PROFILE_EDIT_ROUTE}
        component={EditPersonalProfile}
      />
    </PersonalProfileStack.Navigator>
  );
}
