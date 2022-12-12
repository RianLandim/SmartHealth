import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function AppBar() {
  const navigator = useNavigation();

  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>SMART HEALTH</Text>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate("notifications" as never);
        }}
      >
        <Ionicons name="notifications" size={30} color="#6F6F6F" />
      </TouchableOpacity>
    </View>
  );
}
