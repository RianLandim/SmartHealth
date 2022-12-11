import { Inter_400Regular } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "30%",
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  painel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: 360,
    height: 130,
    backgroundColor: "#6F6F6F",
    marginBottom: 40,
    borderRadius: 10,
    flexDirection: "row",
  },
  painelInformation: {
    display: "flex",
  },
  painelInformationItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  informationItemText: {
    marginLeft: 20,
  },

  body: {},
  card: {
    display: "flex",
    width: 360,
    height: 80,
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
    marginBottom: 20,
  },
  cardText: {
    textTransform: "uppercase",
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    marginLeft: 30,
  },
  cardImage: {},
});
