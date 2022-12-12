import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { BottomNavigationBar } from "../screens/BottomNavigationBar";
import { Notifications } from "../screens/Notifications";
import { Sleep } from "../screens/Sleep";
import { Weight } from "../screens/Weight";
import Dashboard from "../screens/Dashboard";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="bottomNavigationBar" component={BottomNavigationBar} />
      <Screen name="notifications" component={Notifications} />
      <Screen name="sleep" component={Sleep} />
      <Screen name="weight" component={Weight} />
    </Navigator>
  );
}
