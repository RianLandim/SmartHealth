import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>SMART HEALTH</Text>
      <Ionicons name="notifications" size={30} color="#6F6F6F" />
    </View>
  );
}
