import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

// Screens
import Dashboard from "../Dashboard";
import { Ranking } from "../Ranking";
import { Training } from "../Training";
import { Profile } from "../Profile";

// Icons
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomNavigationBar() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#6F6F6F",
          height: 60,
        },
      }}
    >
      <Screen
        name="Saúde"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            marginBottom: 10,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <FontAwesome name="heartbeat" size={size} color="#FF9900" />
              );
            }
            return <FontAwesome name="heartbeat" size={size} color="#D9D9D9" />;
          },
        }}
      />
      <Screen
        name="Ranking"
        component={Ranking}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            marginBottom: 10,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Foundation name="trophy" size={size} color="#FF9900" />;
            }
            return <Foundation name="trophy" size={size} color="#D9D9D9" />;
          },
        }}
      />
      <Screen
        name="Treino"
        component={Training}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            marginBottom: 10,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="weight-lifter"
                  size={size}
                  color="#FF9900"
                />
              );
            }
            return (
              <MaterialCommunityIcons
                name="weight-lifter"
                size={size}
                color="#D9D9D9"
              />
            );
          },
        }}
      />
      <Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            marginBottom: 10,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color="#FF9900" />;
            }
            return <Ionicons name="person" size={size} color="#D9D9D9" />;
          },
        }}
      />
    </Navigator>
  );
}
