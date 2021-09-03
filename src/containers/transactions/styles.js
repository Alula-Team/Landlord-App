import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Body
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },

  // Searchbar
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#00000009",
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
    backgroundColor: "#955C28",
    paddingHorizontal: 20,
    paddingVertical: 12.5,
    marginHorizontal: 10,
    borderRadius: 10
  },
  propInfoLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    textAlign: "left",
    marginVertical: 10,
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
  listCell: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  itemCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  textArea: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 200,
    flexDirection: "row",
    backgroundColor: "#00000009",
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500"
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

  // Camera Modal
  cameraContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#000'
  },
  camera: {
      flex: 1
  },
  cameraGroup: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'flex-end'
  },
  backButton: {
      flex: 0.1,
      marginLeft: 30,
      top: 60,
      position: 'absolute',
  },
  cancel: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff'
  },
  flipButton: {
      flex: 0.1,
      marginLeft: 30,
      alignSelf: 'flex-start',
      justifyContent: 'flex-end',
  },
  captureOuter: { 
      borderWidth: 2,
      borderRadius: 50,
      borderColor: 'white',
      height: 50,
      width: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50
  },
  captureInner: {
      borderWidth: 2,
      borderRadius: 50,
      borderColor: 'white',
      height: 40,
      width: 40,
      backgroundColor: 'white',
  }
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#00000009",
    paddingLeft: 12.5,
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500",
  },
  inputAndroid: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#00000009",
    paddingLeft: 12.5,
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles, pickerStyles };
