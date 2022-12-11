import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import graphicSleep from "../../assets/graphicSleep.png";

export function Weight() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <MaterialIcons
          name="arrow-back-ios"
          color={"#fff"}
          size={30}
          style={{ marginLeft: 40 }}
        />
        <Text style={styles.title}>Peso</Text>
        {/* <Text style={styles.title2}>SMART HEALTH</Text> */}
      </View>

      <View style={styles.body}></View>
    </SafeAreaView>
  );
}
