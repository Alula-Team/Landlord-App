import { StyleSheet } from "react-native";

const addStyles = StyleSheet.create({
  // Body
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  leftIcon: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  centerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    paddingTop: 20,
  },
  rightText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },
  touchableOpacity: {
    paddingTop: 22.5,
    paddingRight: 10
  },
  containerRedux: {
    backgroundColor: "#232256",
    justifyContent: "space-around",
    borderBottomWidth: 0,
  }
})

export default addStyles;