import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
  },
  card: {
    borderRadius: 5,
    backgroundColor: "white",
    margin: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headingText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#2e3333",
    marginVertical: 10,
    marginRight: 40,
  },
  descriptionText: {
    marginTop: 10,
    lineHeight: 22,
  },
  downloadButtonContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  mapImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginTop: 10,
    alignItems: "flex-end",
  },
  riderImage: {
    width: 250,
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
