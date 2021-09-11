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
import { db } from "../../firebase";
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import { styles } from "./styles";

const TransactionDetail = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { itemID } = route.params;

  const transRef = db.collection('transactions').doc(itemID);
  const [transaction, loading, error] = useDocumentDataOnce(transRef, { idField: "id" });



  const makeDate = (dateObj) => {
    const zeeDate = new Date(dateObj.seconds * 1000).toLocaleDateString(
      "en-us",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
    return zeeDate;
  };



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
            db.doc(`transactions/${itemID}`).delete();
            navigation.goBack();
          },
        },
      ]
    );
  };
  if (loading) {
    return (<Text>Loading...</Text>)
  }
  if (transaction) {
    const { property: { address, city, state, unit, zip }, amount, date, description, paymentMethod, transactionCategory, transactionType } = transaction;
    return (

      <>
        <View style={styles.container}>
          {/* Header */}
          <Header
            centerComponent={{
              text: "Transaction Detail",
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
                {address} {unit}
              </Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Feather
                  name="map-pin"
                  color="white"
                  size={15}
                  style={{ marginTop: 1, color: "#34383D80" }}
                />
                <Text style={styles.notificationText}>
                  {city}, {state} {zip}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Feather name="clock" color="#34383D80" size={15} />
                <Text style={styles.notificationText}>{makeDate(date)}</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Feather name="credit-card" color="#34383D80" size={15} />
                <Text style={styles.notificationText}>
                  {paymentMethod}
                </Text>
              </View>
            </View>

            {/* Transaction Title */}
            <View style={styles.propertySectionSpacing}>
              <Text style={styles.notificationTitle}>
                {transactionCategory}
              </Text>
              <Text style={styles.statusText}>{transactionType}</Text>
              <Text style={styles.statusText}>${amount}</Text>
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
              <Text style={styles.descriptionText}>{description}</Text>
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
                        editID: itemID,
                      },
                      )
                    )}
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
                    <Feather name="trash" size={22.5} color="red" />
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
  }
};

export default TransactionDetail;
