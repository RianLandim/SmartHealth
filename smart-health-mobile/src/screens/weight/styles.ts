import { Inter_700Bold, Inter_400Regular } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    // alignItems: "center",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginTop: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginLeft: 120,
    fontFamily: "Inter_400Regular",
  },
  body: {
    marginTop: 40,
    marginLeft: 30,
  },
  cardTime: {
    backgroundColor: "#464848",
    height: 130,
    borderRadius: 10,
    paddingLeft: 20,
    width: "90%",
    justifyContent: "center",
    marginBottom: 20,
  },
  cardTimeTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter_400Regular",
  },
  time: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Inter_700Bold",
  },
  statusSleep: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },
  graphic: {
    backgroundColor: "#464848",
    // width: "80%",
    height: 540,
    color: "#fff",
    borderRadius: 10,
  },
  hours: {
    color: "#fff",
    fontSize: 15,
  },
  weight: {
    fontSize: 22,
    color: "#fff",
  },
  dateWeight: {
    color: "#969595",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    marginTop: 10,
    marginBottom: 40,
  },
  tip: {
    fontSize: 19,
    fontFamily: "Inter_400Regular",
    color: "#fff",
    marginTop: 40,
    marginBottom: 60,
  },
  note: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },
});
