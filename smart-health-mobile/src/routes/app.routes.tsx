import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/login";
import Dashboard from "../screens/dashboard";
import { BottomNavigationBar } from "../screens/bottomNavigationBar";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="bottomNavigationBar" component={BottomNavigationBar} />
    </Navigator>
  );
}
