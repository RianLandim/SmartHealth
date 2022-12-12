import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import graphicSleep from "../../assets/graphicSleep2.png";
import line from "../../assets/line.png";
import { useNavigation } from "@react-navigation/native";

export function Sleep() {
  const navigator = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => navigator.navigate("bottomNavigationBar" as never)}
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
            <Text style={styles.time}>7 hrs 02 mins</Text>
            <Text style={styles.hours}>11:43 - 6:45</Text>
            <Image source={graphicSleep} />
            <Text style={styles.distributionSleep}>Distribuição do Sono</Text>
            <View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View style={styles.distributionSleepItem}>
                  <Text style={styles.distributionSleepItemHours}>56 min</Text>
                  <View style={styles.distributionSleepStatus}>
                    <View style={styles.squareRoxe}></View>
                    <Text style={styles.distributionSleepStatusText}>
                      Profundo
                    </Text>
                  </View>
                </View>
                <Image source={line} />
                <View style={styles.distributionSleepItem}>
                  <Text style={styles.distributionSleepItemHours}>
                    4 hrs 3 min
                  </Text>
                  <View style={styles.distributionSleepStatus}>
                    <View style={styles.squareBlueLight}></View>
                    <Text style={styles.distributionSleepStatusText}>Leve</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <View style={styles.distributionSleepItem}>
                  <Text style={styles.distributionSleepItemHours}>1 hr</Text>
                  <View style={styles.distributionSleepStatus}>
                    <View style={styles.square}></View>
                    <Text style={styles.distributionSleepStatusText}>
                      Profundo
                    </Text>
                  </View>
                </View>
                <Image source={line} />
                <View style={styles.distributionSleepItem}>
                  <Text style={styles.distributionSleepItemHours}>1</Text>
                  <View style={styles.distributionSleepStatus}>
                    <View style={styles.squareOrange}></View>
                    <Text style={styles.distributionSleepStatusText}>
                      Acordado
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
