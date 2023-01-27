import { StyleSheet } from "react-native";

export default StyleSheet.create({
  touchableContainer: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "black",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  logo: {
    width: 27,
    height: 27,
    marginHorizontal: 5,
  },
  textContainer: {
    marginHorizontal: 2,
  },
  subtitleText: {
    color: "white",
    fontSize: 8,
    fontWeight: "500",
    letterSpacing: 1,
    paddingLeft: 2,
  },
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
