import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <MaterialIcons name="arrow-back-ios" color={"#fff"} size={30} />
        <Text style={styles.title}>Notificações</Text>
        {/* <Text style={styles.numberNotifications}>3</Text> */}
        <Ionicons name="notifications" size={30} color="#6F6F6F" />
      </View>
    </SafeAreaView>
  );
}
