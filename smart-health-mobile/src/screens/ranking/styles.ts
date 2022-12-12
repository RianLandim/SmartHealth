import { StyleSheet } from "react-native";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginTop: 40,
    fontFamily: "Inter_400Regular",
  },
  friendsRanking: {
    backgroundColor: "#6F6F6F",
    height: 240,
    width: "45%",
    borderRadius: 10,
    marginBottom: 50,
  },
  friendsRankingTitle: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter_700Bold",
    marginBottom: 20,
    marginTop: 10,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  addFriendBtn: {
    width: "35%",
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  addFriendBtnText: {
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    textAlign: "center",
  },
  evolutionTitle: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Inter_700Bold",
  },
  evolution: {
    backgroundColor: "#6F6F6F",
    width: "90%",
    height: 340,
  },
  friend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  friendNumber: {
    fontSize: 14,
  },
  friendName: {
    fontSize: 21,
    fontFamily: "Inter_400Regular",
    marginLeft: 10,
    marginRight: 10,
  },
  friendBallBlueLight: {
    backgroundColor: "#38B6FF",
    borderRadius: 80,
    width: 16,
    height: 16,
  },
  friendBallOrange: {
    backgroundColor: "#FF914D",
    borderRadius: 80,
    width: 16,
    height: 16,
  },
  friendBallBLue: {
    backgroundColor: "#5E17EB",
    borderRadius: 80,
    width: 16,
    height: 16,
  },
  friendBallGreen: {
    backgroundColor: "#7ED957",
    borderRadius: 80,
    width: 16,
    height: 16,
  },
  friendBallRed: {
    backgroundColor: "#FF5757",
    borderRadius: 80,
    width: 16,
    height: 16,
  },
});
