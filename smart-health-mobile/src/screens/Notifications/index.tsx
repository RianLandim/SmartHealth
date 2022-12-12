import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Notifications() {
  const navigator = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => navigator.navigate("bottomNavigationBar" as never)}
        >
          <MaterialIcons name="arrow-back-ios" color={"#fff"} size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Notificações</Text>
        {/* <Text style={styles.numberNotifications}>3</Text> */}
        <Ionicons name="notifications" size={30} color="#6F6F6F" />
      </View>

      <View style={styles.body}>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Rian, tente fazer alguma atividade física hoje! Faz dois dias que
            não se exercita!
          </Text>
        </View>

        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            É recomendado pela OMS aumentar o consumo de grãos inteiros,
            vegetais, frutas, nozes e leguminosas
          </Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Rian, parabéns, o seu sono está regular! Continue Assim
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
