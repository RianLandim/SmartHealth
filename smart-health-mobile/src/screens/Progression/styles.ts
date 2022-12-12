import {
  Inter_700Bold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
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
    marginLeft: 80,
    fontFamily: "Inter_400Regular",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  subtitle: {
    color: "#fff",
    fontFamily: "Inter_400Regular",
    fontSize: 22,
    marginBottom: 30,
  },
});
