import { Inter_400Regular } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "50%",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  numberNotifications: {
    color: "#000000",
    backgroundColor: "#fff",
    width: 30,
    borderRadius: 80,
  },
});
