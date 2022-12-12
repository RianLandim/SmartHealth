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
            <View style={styles.friend}>
              <Text style={styles.friendNumber}>1.</Text>
              <Text style={styles.friendName}>Bruno</Text>
              <View style={styles.friendBallBlueLight}></View>
            </View>
            <View style={styles.friend}>
              <Text style={styles.friendNumber}>2.</Text>
              <Text style={styles.friendName}>Diego</Text>
              <View style={styles.friendBallOrange}></View>
            </View>
            <View style={styles.friend}>
              <Text style={styles.friendNumber}>3.</Text>
              <Text style={styles.friendName}>Maísa</Text>
              <View style={styles.friendBallBlueLight}></View>
            </View>
            <View style={styles.friend}>
              <Text style={styles.friendNumber}>4.</Text>
              <Text style={styles.friendName}>Luana</Text>
              <View style={styles.friendBallGreen}></View>
            </View>
            <View style={styles.friend}>
              <Text style={styles.friendNumber}>5.</Text>
              <Text style={styles.friendName}>João</Text>
              <View style={styles.friendBallRed}></View>
            </View>
          </View>

          <TouchableOpacity style={styles.addFriendBtn}>
            <Text style={styles.addFriendBtnText}>Adicionar Amigo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.evolution}>
          <Text style={styles.evolutionTitle}>Evoluçao</Text>
          <Image source={evolution} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
