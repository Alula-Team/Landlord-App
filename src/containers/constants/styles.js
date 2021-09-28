import { StyleSheet } from "react-native";

export const addStyles = StyleSheet.create({
  // Body
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  leftIcon: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 10
  },
  centerText: {
    color: "#34383D",
    fontWeight: "600",
    fontSize: 20,
    paddingTop: 20,
  },
  rightText: {
    color: "#955c28",
    fontSize: 18,
    fontWeight: "700"
  },
  rightIcon: {
    paddingTop: 20,
    paddingRight: 10,
  },
  touchableOpacity: {
    paddingTop: 22.5,
    paddingRight: 10
  },
  containerRedux: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    borderBottomWidth: 0,
  }
})

export const mainStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  centerText: {
    color: "#34383D",
    fontWeight: "700",
    fontSize: 25,
    paddingTop: 20,
  },
  actionIcon: {
    paddingTop: 20,
    paddingRight: 20
  },
  badgeContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    borderWidth: 0
  },
  badge: {
    height: 10,
    width: 10,
    borderWidth: 0,
    borderRadius: 10 / 2,
  },
  addIcon: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  containerRedux: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    borderBottomWidth: 0,
  }
})