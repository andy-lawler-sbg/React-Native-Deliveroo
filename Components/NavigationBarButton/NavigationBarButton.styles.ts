import { StyleSheet } from "react-native";
import { AppColour } from "../../utils/Colour";

export default StyleSheet.create({
  navBarButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  icon: {
    marginTop: 1,
    width: 15,
    height: 15,
    tintColor: AppColour,
  },
  text: {
    fontSize: 10,
    fontWeight: "500",
  },
});
