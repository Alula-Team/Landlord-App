import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  // Body
  container: {
    backgroundColor: "#ffffff80",
    height: "100%",
  },

  // Searchbar
  searchContainer: {
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

  // Flatlist
  listCell: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem: {
    paddingLeft: 12.5,
    fontSize: 15,
    fontWeight: "600",
    color: "#34383D",
    alignSelf: "center",
  },
  status: {
    color: "#fff",
    marginLeft: 12.5,
    marginTop: 5,
  },
  arrow: {
    alignSelf: "center",
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

  // ** ADD PROPERTY SCREEN ** //
  sectionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34383D",
    textAlign: "left",
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#34383D",
    textAlign: "left",
    marginVertical: 10,
    marginLeft: 20,
  },
  addButton: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: "#34383D",
    // textDecorationLine: 'underline'
  },
  propertyInput: {
    backgroundColor: "transparent",
    color: "#34383D",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 12.5,
  },
  addUnitInput: {
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
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  addInputContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
    borderColor: "#34383D",
    backgroundColor: "transparent",
  },

  // ** SERVICE REQUEST Screen ** //
  propertySectionSpacing: {
    marginTop: 30,
    marginLeft: 20,
  },
  notificationContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  notificationTitle: {
      color: '#34383D',
      fontSize: 18,
      fontWeight: '600',
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginTop: 10, 
      alignItems: 'center',
  },
  notificationText: {
      paddingLeft: 12.5,
      fontSize: 14,
      fontWeight: '600',
      color: '#34383D80',
      alignSelf: 'center',
  },
  statusText: {
    paddingLeft: 12.5,
    fontSize: 14,
    fontWeight: '800',
    color: '#34383D90',
    alignSelf: 'center',
  },
  descriptionText: {
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: '500',
    color: '#34383D',
  },

  // ** PROPERTY DETAIL SCREEN ** //
  propInfo: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
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
  },
  propInfoLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#34383D",
    textAlign: "left",
    marginVertical: 10,
  },
  sectionTitle: {
    color: "#34383D",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  tenantInitials: {
    width: 50,
    height: 50,
    borderRadius: 80 / 2,
    borderColor: "#fff",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  modalContainer: {
    backgroundColor: '#2a2933',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 275
  },
  overlay: {
      backgroundColor: '#00000050',
      flex: 1,
      justifyContent: 'flex-end',
  },
});

export default styles;
