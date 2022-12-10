import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/login";
import { BottomNavigationBar } from "../screens/bottomNavigationBar";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="bottomNavigationBar" component={BottomNavigationBar} />
    </Navigator>
  );
}
