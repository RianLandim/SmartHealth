import { Inter_400Regular } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
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
  body: {},
  subtitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  numberNotifications: {
    color: "#000000",
    backgroundColor: "#fff",
    width: 30,
    borderRadius: 80,
  },
  notification: {
    backgroundColor: "#464848",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "25%",
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
  },
  notificationText: {
    color: "#fff",
    fontSize: 25,
  },
});
