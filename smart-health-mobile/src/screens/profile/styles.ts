import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerUser: {
    backgroundColor: "#464848",
    height: 360,
    width: 330,
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 20,
  },
  containerUserTop: {
    display: "flex",
    flexDirection: "row",
  },
  containerUserData: {
    paddingLeft: 20,
  },
  nameUser: {
    fontSize: 28,
    fontFamily: "Inter_400Regular",
    color: "#fff",
    textAlign: "center",
  },
  data: {
    display: "flex",
    flexDirection: "row",
  },
  dataItem: {
    color: "#fff",
  },
  menu: {
    paddingLeft: 5,
    marginTop: 20,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6F6F6F",
    height: 45,
    width: "85%",
    borderRadius: 10,
    marginBottom: 15,
  },
  menuItemText: {
    fontSize: 19,
    color: "#fff",
    textAlign: "center",

    fontFamily: "Inter_400Regular",
  },
  signOutButton: {
    backgroundColor: "#464848",
    height: 50,
    width: 170,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "30%",
    marginBottom: "30%",
  },
  signOutButtonText: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },
});
