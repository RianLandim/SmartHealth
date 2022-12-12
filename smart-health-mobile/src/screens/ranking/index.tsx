import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppBar } from "../../components/appBar";
import { styles } from "./styles";
import evolution from "../../assets/evolution.png";

export function Ranking() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <AppBar />
        <Text style={styles.title}>Ranking</Text>
        <View style={styles.top}>
          <View style={styles.friendsRanking}>
            <Text style={styles.friendsRankingTitle}>Amigos</Text>
            <View></View>
          </View>
        </View>
        <TouchableOpacity style={styles.addFriend}>
          <Text>Adicionar Amigo</Text>
        </TouchableOpacity>
        <View style={styles.evolution}>
          <Text style={styles.evolutionTitle}>Evoluçao</Text>
          <Image source={evolution} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
