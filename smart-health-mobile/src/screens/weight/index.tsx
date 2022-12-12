import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import graphicWeight from "../../assets/graphicWeight.png";
import { useNavigation } from "@react-navigation/native";

export function Weight() {
  const navigator = useNavigation();

  return (
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
        <Text style={styles.title}>Peso</Text>
        {/* <Text style={styles.title2}>SMART HEALTH</Text> */}
      </View>

      <View style={styles.body}>
        <View>
          <Text style={styles.weight}>69.7 kg</Text>
          <Text style={styles.dateWeight}>Outubro 25, 2022 15:42</Text>
          <Image source={graphicWeight} />
          <Text style={styles.tip}>Dica: atualize seu peso mensalmente.</Text>
          <Text style={styles.note}>
            Observação: Estes resultados são usados apenas para referencia
            pessoal. Eles não tem como intenção algum proposito médico ou de
            diagnóstico.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
