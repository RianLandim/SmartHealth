import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  friendsRanking: {
    backgroundColor: "#6F6F6F",
    // width: 200,
    height: 258,
    width: "80%",
  },
  friendsRankingTitle: {
    fontSize: 18,
    textAlign: "center",
  },
  top: {
    display: "flex",
    flexDirection: "row",
  },
  addFriend: {
    width: 140,
    backgroundColor: "#6F6F6F",

    height: 50,
    marginTop: 10,
  },
  evolutionTitle: {
    fontSize: 24,
    textAlign: "center",
  },
  evolution: {
    backgroundColor: "#6F6F6F",
    width: "90%",
    height: 340,
  },
});
