import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppBar } from "../../components/appBar";
import { styles } from "./styles";
import caminhada from "../../assets/caminhada.png";
import corrida from "../../assets/corrida.png";
import ciclismo from "../../assets/ciclismo.png";

export function Training() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <AppBar />
        <View>
          <Text>Treino</Text>
          <Text>Diária</Text>
          <Image source={caminhada} style={styles.graphic} />
          <Image source={corrida} style={styles.graphic} />
          <Image source={ciclismo} style={styles.graphic} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
