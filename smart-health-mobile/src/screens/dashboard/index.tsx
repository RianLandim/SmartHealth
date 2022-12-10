import React, { useEffect } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { useQuery } from "react-query";
import api from "../../service/http/api";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import LogoApp from "../../assets/logo.png";

import progressionImg from "../../assets/progression.png";
import sleepImg from "../../assets/sleep.png";
import weightImg from "../../assets/weight.png";
import rainbowImg from "../../assets/rainbow.png";
import caloriesImg from "../../assets/calories.png";
import sleepHorsImg from "../../assets/sleepHors.png";
import stepsImg from "../../assets/steps.png";

export default function Dashboard() {
  const { data: dataSource } = useQuery("getDataSource", async () => {
    const { data } = await api.get("datasource");
    return data;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.title}>SMART HEALTH</Text>
        {/* <FontAwesome name="heartbeat" size={30} color="#FF9900" /> */}
        <Ionicons name="notifications" size={30} color="#6F6F6F" />
      </View>

      <Text style={styles.subtitle}>Saúde</Text>

      <View style={styles.body}>
        <View style={styles.painel}>
          <Image source={rainbowImg} />
          <View style={styles.painelInformation}>
            <View style={styles.painelInformationItem}>
              <Image source={caloriesImg} />
              <Text style={styles.informationItemText}>0/400 kcal</Text>
            </View>
            <View style={styles.painelInformationItem}>
              <Image source={stepsImg} />
              <Text style={styles.informationItemText}>6000 passos</Text>
            </View>
            <View style={styles.painelInformationItem}>
              <Image source={sleepHorsImg} />
              <Text style={styles.informationItemText}>0/30 min</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.cardImage} source={progressionImg} />
          <Text style={styles.cardText}>PROGRESSÃO</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.cardImage} source={sleepImg} />
          <Text style={styles.cardText}>Sono</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.cardImage} source={weightImg} />
          <Text style={styles.cardText}>Peso</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
