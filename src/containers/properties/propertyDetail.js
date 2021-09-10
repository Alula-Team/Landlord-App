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
import FontAwesome from "react-native-vector-icons/FontAwesome5";

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        centerComponent={
          <Text
            style={{
              color: "#34383D",
              fontSize: 17,
              fontWeight: "600",
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
        {/* Property Information */}
        <View style={styles.propInfo}>
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10}}>
              <Text
                style={{
                  fontWeight: "500",
                  color: "#fff",
                  marginRight: 5,
                }}
              >
                Financial Activity
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "500", color: "#ffffff90" }}
              >
                (year to date)
              </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Revenue:</Text>
            <Text style={styles.propInfoLabel}>$12,591</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Expenses:</Text>
            <Text style={styles.propInfoLabel}>- $750</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Net Profit:</Text>
            <Text style={styles.propInfoLabel}>$11,841</Text>
          </View>
        </View>

        {/* Tenant Information */}
        <View style={styles.tenantInfo}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#34383D",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Joseph Smith
              </Text>
              <Text
                style={{
                  color: "#34383D90",
                  fontSize: 15,
                  fontWeight: "500",
                  marginTop: 5,
                }}
              >
                joseph.smith@yahoo.com
              </Text>
            </View>
          </View>

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

          {/* Lease Length */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#34383D", fontSize: 16 }}>Lease Length:</Text>
            <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
              12 mo
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
            <Text style={{ color: "#34383D", fontSize: 16 }}>Lease Type:</Text>
            <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
              Fixed
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
            <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
              $750
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

        {/* Market Property View */}
        <TouchableOpacity style={{ backgroundColor: '#586D81', padding: 18, margin: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: 'white'}}>MARKET PROPERTY</Text>
        </TouchableOpacity>

        {/* Actions Modal */}
        <Modal
          animationType='fade'
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
                  fontSize: 20,
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Actions
              </Text>

              <TouchableOpacity
                onPress={() => (setModalVisible(!modalVisible),
                  navigation.navigate("EditProperty", {
                    itemID,
                    itemAddress,
                    itemCity,
                    itemState,
                    itemUnit,
                    itemZip,
                  }))
                }
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 30,
                  paddingLeft: 20,
                }}
              >
                <Feather name="edit-3" size={22.5} color="#34383D" />
                <Text
                  style={{
                    color: "#34383D",
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
                  marginTop: 40,
                  justifyContent: "center",
                  backgroundColor: "#34383D30",
                  marginHorizontal: 30,
                  padding: 15,
                  borderRadius: 10
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                {/* <Feather name="x" size={22.5} color="#34383D" /> */}
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
  );
};

export default PropertyDetail;
