import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import Dashboard from '../screens/dashboard';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="dashboard" component={Dashboard} />
    </Navigator>
  );
}
