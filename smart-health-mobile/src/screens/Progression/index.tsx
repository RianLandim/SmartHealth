import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import progressionImg from "../../assets/progressionImg.png";
import { useNavigation } from "@react-navigation/native";

export function Progression() {
  const navigator = useNavigation();

  return (
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
        <Text style={styles.title}>Progressão</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.subtitle}>Diária</Text>
        <Image source={progressionImg} />
      </View>
    </SafeAreaView>
  );
}
