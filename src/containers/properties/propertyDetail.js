import React, { useState } from "react";
import {
  Alert,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

// Firebase
import { db } from "../../firebase/firebase";

const PropertyDetail = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { itemID, itemAddress, itemCity, itemState, itemZip, itemUnit } =
    route.params;

  // Delete Alert Pop Up
  const deleteAlert = () => {
    Alert.alert(
      "Delete Property?",
      "Deleting this property will also delete its data from all reportings.",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            db.doc(`properties/${itemID}`).delete();
            navigation.goBack();
          },
        },
      ]
    );
  };

  // View Service Requests
  const viewServiceRequests = () => {
    navigation.navigate("ServiceRequests");
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        centerComponent={
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              fontWeight: "700",
              paddingTop: 22.5,
            }}
          >
            {itemAddress} {itemUnit}
          </Text>
        }
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
        {/* Property Information */}
        <View style={{ marginTop: 30 }}></View>

        <Text style={styles.sectionTitle}>Property Information</Text>

        <View style={styles.propInfo}>
          <Text style={styles.propInfoLabel}>
            {itemAddress} {itemUnit}
          </Text>
          <Text style={styles.propInfoLabel}>
            {itemCity}, {itemState} {itemZip}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#34383D", fontSize: 16 }}>Revenue:</Text>
            <Text style={styles.propInfoLabel}>$42,000</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#34383D", fontSize: 16 }}>Expenses:</Text>
            <Text style={styles.propInfoLabel}>- $14,450</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#34383D", fontSize: 16 }}>Net Profit:</Text>
            <Text style={styles.propInfoLabel}>$27,550</Text>
          </View>
        </View>

        {/* Tenant Information */}
        <Text style={styles.sectionTitle}>Tenant Information</Text>

        <View
          style={{
            backgroundColor: "#5858FB",
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
          <Text style={{ color: "#ffffff90", fontSize: 14, fontWeight: "600" }}>
            Tenant:
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={styles.tenantInitials}>
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                TN
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                Tenant's Name
              </Text>
              <Text
                style={{
                  color: "#ffffff90",
                  fontSize: 15,
                  marginTop: 5,
                  marginLeft: 10,
                }}
              >
                tenant@tenant.com
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: "#ffffff90",
              fontSize: 14,
              marginTop: 20,
              fontWeight: "600",
            }}
          >
            Leasing Information:
          </Text>

          {/* Rental Rate */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Rental Rate:</Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
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
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Security Deposit:
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
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
            <Text style={{ color: "#fff", fontSize: 16 }}>Lease Type:</Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
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
            <Text style={{ color: "#fff", fontSize: 16 }}>Lease Length:</Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
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
            <Text style={{ color: "#fff", fontSize: 16 }}>Rent Due On:</Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              1st /mo
            </Text>
          </View>
        </View>

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

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditProperty", {
                    itemID,
                    itemAddress,
                    itemCity,
                    itemState,
                    itemUnit,
                    itemZip,
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
                  Edit Property
                </Text>
              </TouchableOpacity>

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
                  Delete Property
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
  );
};

export default PropertyDetail;
