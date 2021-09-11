import React, { useState, useEffect, useRef } from "react";
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from "react-native";

import { Header, Icon } from "react-native-elements";
import { db } from "../../firebase/firebase";
// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import { styles } from "./styles";

const ManageTransaction = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theItem, theProperty } = route.params;

  // Delete Alert Pop Up
  const deleteAlert = () => {
    Alert.alert(
      "Delete Transaction?",
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
            db.doc(`transactions/${theItem.ID}`).delete();
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
            text: "Manage Transaction",
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
          {/* Property Address */}
          <View style={styles.propertySectionSpacing}>
            <Text style={styles.notificationTitle}>
              {theProperty.address} {theProperty.unit}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Feather
                name="map-pin"
                color="white"
                size={15}
                style={{ marginTop: 1, color: "#34383D80" }}
              />
              <Text style={styles.notificationText}>
                {theProperty.city}, {theProperty.state} {theProperty.zip}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Feather name="clock" color="#34383D80" size={15} />
              <Text style={styles.notificationText}>{theItem.date}</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Feather name="credit-card" color="#34383D80" size={15} />
              <Text style={styles.notificationText}>
                {theItem.paymentMethod}
              </Text>
            </View>
          </View>

          {/* Transaction Title */}
          <View style={styles.propertySectionSpacing}>
            <Text style={styles.notificationTitle}>
              {theItem.transactionCategory}
            </Text>
            <Text style={styles.statusText}>{theItem.transactionType}</Text>
            <Text style={styles.statusText}>${theItem.amount}</Text>
          </View>

          {/* Description */}
          <View style={styles.descriptionSectionSpacing}>
            <Text
              style={{
                color: "#34383D80",
                fontSize: 15,
                fontWeight: "600",
                marginTop: 30,
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Description:
            </Text>
            <Text style={styles.descriptionText}>{theItem.description}</Text>
          </View>

          {/* Image - PDF, JPG or PNG */}
          <View style={styles.propertySectionSpacing}>
            <Text
              style={{
                color: "#34383D80",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Receipt:
            </Text>
            <TouchableOpacity style={{ marginBottom: 30, marginTop: 20 }}>
              <Image
                style={{ height: 200, width: 200, borderRadius: 10 }}
                source={require("../../assets/receipt.jpg")}
              />
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

                <TouchableOpacity
                  onPress={() => (
                    setModalVisible(!modalVisible),
                    navigation.navigate("EditTransaction", {
                      theItem: {
                        ID: theItem.id,
                        amount: theItem.amount,
                        date: theItem.date,
                        description: theItem.description,
                        paymentMethod: theItem.paymentMethod,
                        transactionCategory: theItem.transactionCategory,
                        transactionType: theItem.transactionType,
                      },
                    })
                  )}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 20,
                  }}
                >
                  <Feather name="file" size={20} color="#34383D" />
                  <Text
                    style={{
                      color: "#34383D",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Edit Transaction
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
                  <Feather name="delete" size={20} color="red" />
                  <Text
                    style={{
                      color: "red",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Delete Transaction
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

export default ManageTransaction;
