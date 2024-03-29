import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Body
  container: {
    backgroundColor: "#ffffff80",
    height: "100%",
  },
  fieldError: {
    color: "red",
    paddingLeft: 35,
    marginTop: -10,
    marginBottom: 0,
  },
  // Searchbar
  searchContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  searchIcon: {
    alignSelf: "center",
    marginLeft: 10,
  },
  searchInput: {
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 12.5,
    width: "85%",
  },

  // Money Boxes
  moneyBox: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },

  // Flatlist
  listCell: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  itemCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  listItem: {
    paddingLeft: 12.5,
    fontSize: 14,
    fontWeight: "600",
    color: "#34383D80",
    alignSelf: "center",
  },
  transactionType: {
    color: "#34383D",
    fontSize: 18,
    fontWeight: "600",
  },
  amount: {
    alignSelf: "center",
    flexDirection: "row",
  },
  actionsBtn: {
    alignItems: "center",
    alignSelf: "flex-end",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 30,
    padding: 7,
    width: 100,
  },
  actionsText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  emptyList: {
    marginTop: 30,
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },

  // Add Transaction Screen
  scrollView: {
    paddingBottom: 30,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34383D",
    textAlign: "left",
    marginTop: 30,
    marginLeft: 20,
  },
  textArea: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  amountContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    borderColor: "#ffffff50",
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
  },
  dateContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderColor: "#ffffff50",
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
  },
  dateText: {
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 12.5,
  },
  // Flatlist
  inputLabel: {
    marginLeft: 22.5,
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500'
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#00000009",
  },
  inputField: {
    paddingLeft: 12.5,
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500",
    width: "100%",
  },

  // Manage Transaction Screen
  propertySectionSpacing: {
    marginTop: 30,
    marginLeft: 20,
  },
  notificationContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  notificationTitle: {
    color: "#34383D",
    fontSize: 18,
    fontWeight: "600",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  notificationText: {
    paddingLeft: 12.5,
    fontSize: 14,
    fontWeight: "600",
    color: "#34383D80",
    alignSelf: "center",
  },
  statusText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "700",
    color: "#34383D90",
  },
  descriptionText: {
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: "500",
    color: "#34383D",
  },
  modalContainer: {
    backgroundColor: "#2a2933",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 275,
  },
  overlay: {
    backgroundColor: "#00000050",
    flex: 1,
    justifyContent: "flex-end",
  },
});

const googlePlacesStyles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInputContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#00000009",
  },
  textInput: {
    height: 45,
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500",
    backgroundColor: "transparent",
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#fff",
    color: "#34383D",
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  inputAndroid: {
    marginHorizontal: 20,
    marginTop: 15,
    borderColor: "#ffffff50",
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
    color: "#34383D",
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
export { pickerStyles, googlePlacesStyles };
