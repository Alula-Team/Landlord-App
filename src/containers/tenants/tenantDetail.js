import React, { useEffect, useState } from "react";
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

import { db } from "../../firebase/firebase";

import "./getInitials";
import { collectIdsAndData } from "../../utilities";
// Things I need
// Actions button pops up modal with options to:
//add lease (if no lease),
// remove lease (if there is a lease),
// renew lease (once lease term is set to expire in 60d)

const TenantDetailScreen = ({ route, navigation }) => {
  const { theItem, theProperty } = route.params;

  // const [propertyInfo, setPropertyInfo] = useState();

  // let unsubscribe = null;
  // useEffect(() => {
  //   let mounted = true;
  //   async function getProperty() {
  //     unsubscribe = await db
  //       .collection("properties")
  //       .where("id", "==", property)
  //       .onSnapshot((snapshot) => {
  //         const property = snapshot.docs.map(collectIdsAndData);
  //         if (mounted) setPropertyInfo(property);
  //         console.log(property);
  //       });
  //   }
  //   getProperty();

  //   return function cleanup() {
  //     unsubscribe();
  //     mounted = false;
  //   };
  // }, []);

  const itemInitials = theItem.name.getInitials();
  const [modalVisible, setModalVisible] = useState(false);

  // Delete Alert Pop Up
  const deleteAlert = () => {
    Alert.alert(
      "Delete Tenant?",
      "Are you sure you want to delete this tenant?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Delete",
          style: "destructive",
          //   onPress: () => console.log("Delete Pressed"),
          // onPress: (id) => deleteTenant(itemID),

          onPress: () => {
            db.doc(`tenants/${theItem.ID}`).delete();
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Manage Tenant",
            style: {
              color: "#34383D",
              fontWeight: "600",
              fontSize: 20,
              paddingTop: 20,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#34383D80"
              size={25}
              iconStyle={{
                paddingTop: 20,
                paddingLeft: 10,
                paddingBottom: 10,
              }}
              onPress={() => navigation.goBack()}
            />
          }
          rightComponent={
            <Icon
              name="more-horizontal"
              type="feather"
              color="#34383D80"
              size={27.5}
              iconStyle={{
                paddingTop: 20,
                paddingRight: 10,
              }}
              onPress={() => setModalVisible(true)}
            />
          }
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        <ScrollView>
          {/* Tenant Information */}
          <View style={styles.propInfo}>
            <View style={styles.imgPlaceHolder}>
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                {itemInitials}
              </Text>
            </View>
            <View style={{ marginLeft: 15, alignSelf: "center" }}>
              {/* Tenant Name */}
              <Text style={styles.tenantName}>{theItem.name}</Text>

              {/* Phone Number */}
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Feather name="phone" size={16} color="#ffffff80" />
                <Text style={styles.cardText}>{theItem.phone}</Text>
              </View>

              {/* Email Address */}
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginVertical: 10,
                }}
              >
                <Feather name="mail" size={16} color="#ffffff80" />
                <Text style={styles.cardText}>{theItem.email}</Text>
              </View>
            </View>
          </View>
          
          <View style={{backgroundColor: '#fff', paddingHorizontal: 30, paddingVertical: 12.5}} >
            {/* Leasing Information */}
            <Text
              style={{
                color: "#34383D90",
                fontSize: 14,
                marginTop: 20,
                fontWeight: "600",
              }}
            >
              Leasing Information:
            </Text>

            {/* Start Date */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Start Date:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                Jan 1, 2021
              </Text>
            </View>

            {/* End Date */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>End Date:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                Jan 1, 2022
              </Text>
            </View>

            {/* Rental Rate */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Rental Rate:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                $1,399
              </Text>
            </View>

            {/* Payment Due */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Rent Due On:</Text>
              <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
                1st /mo
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("CurrentLease")} style={{ marginTop: 30, height: 45, alignItems: 'center'}}>
              <Text style={{ alignSelf: "center",color: "#232256", fontSize: 16, fontWeight: "600", textDecorationLine: 'underline'}}>
                View Lease Agreement
              </Text>
            </TouchableOpacity>
          </View>

          {/* Actions Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.overlay}>
              <View style={styles.modalContainer}>
                <Text
                  style={{
                    color: "#34383D",
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  Actions
                </Text>

                {/* Edit Tenant */}
                <TouchableOpacity
                  onPress={() => (
                    setModalVisible(!modalVisible),
                    navigation.navigate("EditTenant", {
                      itemID,
                      itemName,
                      itemEmail,
                      itemPhone,
                      propertyId,
                      propertyAddress,
                      propertyCity,
                      propertyState,
                      propertyUnit,
                      propertyZip,
                    })
                  )}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 20,
                  }}
                >
                  <Feather name="user" size={20} color="#34383D" />
                  <Text
                    style={{
                      color: "#34383D",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Edit Tenant
                  </Text>
                </TouchableOpacity>

                {/* Edit Lease Information */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 20,
                  }}
                >
                  <Feather name="file-text" size={20} color="#34383D" />
                  <Text
                    style={{
                      color: "#34383D",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Edit Leasing Information
                  </Text>
                </TouchableOpacity>

                {/* Delete Tenant */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 20,
                  }}
                  onPress={deleteAlert}
                >
                  <Feather name="delete" size={20} color="red" />
                  <Text
                    style={{
                      color: "red",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Delete Tenant
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 40,
                    justifyContent: "center",
                    backgroundColor: "#34383D30",
                    marginHorizontal: 30,
                    padding: 15,
                    borderRadius: 10
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={{
                      color: "#34383D",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </>
  );
};

export default TenantDetailScreen;
