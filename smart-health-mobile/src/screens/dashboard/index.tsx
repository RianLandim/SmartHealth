import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
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
import { AppBar } from "../../components/appBar";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigator = useNavigation();

  const { data: dataSource } = useQuery("getDataSource", async () => {
    const { data } = await api.get("datasource");
    return data;
  });

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />

      {/* <Text style={styles.subtitle}>Saúde</Text> */}
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

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigator.navigate("progression" as never)}
        >
          <Image style={styles.cardImage} source={progressionImg} />
          <Text style={styles.cardText}>PROGRESSÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigator.navigate("sleep" as never)}
        >
          <Image style={styles.cardImage} source={sleepImg} />
          <Text style={styles.cardText}>Sono</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigator.navigate("weight" as never)}
        >
          <Image style={styles.cardImage} source={weightImg} />
          <Text style={styles.cardText}>Peso</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
