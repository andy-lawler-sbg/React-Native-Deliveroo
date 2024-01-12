import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    marginBottom: 15,
  },
  logo: {
    width: 120,
    height: 30,
    marginRight: 20,
    justifyContent: "flex-start",
  },
  navBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
