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
  const {
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
  } = route.params;
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

  const itemInitials = itemName.getInitials();
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
            db.doc(`tenants/${itemID}`).delete();
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
              color: "#fff",
              fontWeight: "bold",
              fontSize: 22,
              paddingTop: 20,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#fff"
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
              color="#fff"
              size={27.5}
              iconStyle={{
                paddingTop: 20,
                paddingRight: 10,
              }}
              onPress={() => setModalVisible(true)}
            />
          }
          containerStyle={{
            backgroundColor: "#232256",
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
              <Text style={styles.tenantName}>{itemName}</Text>

              {/* Phone Number */}
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Feather name="phone" size={16} color="#ffffff80" />
                <Text style={styles.cardText}>{itemPhone}</Text>
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
                <Text style={styles.cardText}>{itemEmail}</Text>
              </View>
            </View>
          </View>

          {/* Leasing Information */}
          <Text style={styles.sectionText}>Lease Information</Text>
          <View
            style={{
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
            }}
          >
            {/* Property Address */}
            <Text
              style={{
                color: "#34383D",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              {propertyAddress} {propertyUnit}
            </Text>
            <Text
              style={{
                color: "#34383D90",
                marginVertical: 10,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {propertyCity}, {propertyState} {propertyZip}
            </Text>

            {/* Rental Rate */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>
                Rental Rate:
              </Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}
              >
                $1,500
              </Text>
            </View>

            {/* Security Deposit */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>
                Security Deposit:
              </Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}
              >
                $750
              </Text>
            </View>

            {/* Lease Type */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>
                Lease Type:
              </Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}
              >
                Fixed
              </Text>
            </View>

            {/* Lease Length */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>
                Lease Length:
              </Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}
              >
                12 mo
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
              <Text style={{ color: "#34383D", fontSize: 16 }}>
                Rent Due On:
              </Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}
              >
                1st /mo
              </Text>
            </View>
          </View>

          {/* Current Lease Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("CurrentLease")}
            style={{
              marginHorizontal: 5,
              marginTop: 10,
              marginBottom: 20,
              height: 45,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="eye"
                size={18}
                color="#34383D80"
                style={{
                  alignSelf: "center",
                  marginLeft: 20,
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  color: "#34383D",
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                View Current Lease
              </Text>
            </View>
            <Feather
              name="arrow-right"
              color="#34383D80"
              size={20}
              style={{ alignSelf: "center", marginRight: 10 }}
            />
          </TouchableOpacity>

          {/* Upload New Lease */}
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              marginTop: 10,
              marginBottom: 20,
              height: 45,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="upload"
                size={18}
                color="#34383D80"
                style={{
                  alignSelf: "center",
                  marginLeft: 20,
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  color: "#34383D",
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                  textDecorationLine: "underline",
                }}
              >
                Upload New Lease
              </Text>
            </View>
          </TouchableOpacity>

          {/* Actions Modal */}
          <Modal
            animationType="slide"
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
                    color: "#fff",
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
                  onPress={() =>
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
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 20,
                  }}
                >
                  <Feather name="edit-3" size={22.5} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
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
                  <Feather name="edit-3" size={22.5} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Edit Lease Information
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
                  <Feather name="trash" size={22.5} color="red" />
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
                    marginTop: 50,
                    justifyContent: "center",
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Feather name="x" size={22.5} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
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
