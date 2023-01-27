import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 45,
  },
  inputContainer: {
    padding: 10,
    flex: 1,
    marginLeft: 5,
  },
  searchButtonContainer: {
    backgroundColor: "#00ccbc",
    borderRadius: 20,
    height: "80%",
    marginRight: 4,
    justifyContent: "center",
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
});
