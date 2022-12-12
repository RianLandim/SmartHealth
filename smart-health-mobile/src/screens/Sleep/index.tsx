import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import graphicSleep from "../../assets/graphicSleep.png";
import { useNavigation } from "@react-navigation/native";

export function Sleep() {
  const navigator = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => navigator.navigate("dashboard" as never)}
          >
            <MaterialIcons
              name="arrow-back-ios"
              color={"#fff"}
              size={30}
              style={{ marginLeft: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Sono</Text>
          {/* <Text style={styles.title2}>SMART HEALTH</Text> */}
        </View>

        <View style={styles.body}>
          <View style={styles.cardTime}>
            <Text style={styles.cardTimeTitle}>Tempo</Text>
            <Text style={styles.time}>7 hrs 02 mins</Text>
            <Text style={styles.statusSleep}>Bom</Text>
          </View>
          <View style={styles.graphic}>
            {/* <Text style={styles.time}>7 hrs 02 mins</Text>
          <Text style={styles.hours}>11:43 - 6:45</Text> */}
            <Image source={graphicSleep} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
