import React, { useState } from "react";
import {
  Alert,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

// Style Sheet
import styles from "./prop-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doDeleteProperty } from "../../redux/actions";

// What I need:
// State
// import { State } from "react-native-gesture-handler";
// Function that deletes property from server

const PropertyDetail = ({ route, deleteProperty }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit } = useForm();
  const {
    itemID,
    itemAddress,
    itemUnit,
    itemCity,
    itemState,
    itemZip,
  } = route.params;
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
          // onPress: () => console.log("Deleting Item ", { itemID }),
          onPress: () => {
            deleteProperty(itemID);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ top: 0, left: 0, height: 100 }}>
        <TouchableOpacity style={styles.backBtn}>
          <Feather
            name="arrow-left"
            size={25}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View style={styles.sectionSpacing}>
          <Text style={styles.propertyDetailTitle}>
            {/* Property Address: */}
            {itemAddress} {itemUnit}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Feather
              name="map-pin"
              color="white"
              size={12}
              style={{ marginRight: 5, marginTop: 1, color: "#ffffff90" }}
            />
            <Text style={styles.propertyDetailSubText}>
              {itemCity}, {itemState} {itemZip}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView style={{ marginTop: 30 }}>
        {/* Tenant Information */}
        <Text style={styles.sectionTitle}>Tenant Information</Text>
        {/* <View
          style={{
            backgroundColor: "#ffffff20",
            borderRadius: 10,
            marginHorizontal: 30,
            marginTop: 10,
            padding: 10,
          }}
        > */}
        {/* <Text style={styles.tenantName}>Tenant Name</Text> */}

        {/* Lease Type */}
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="edit-3" color="#ffffff90" size={16} />
              <Text style={styles.infoTitle}>Lease Type:</Text>
            </View>
            <Text style={styles.infoText}></Text>
          </View> */}

        {/* Lease Period */}
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="clock" color="#ffffff90" size={16} />
              <Text style={styles.infoTitle}>Lease Period:</Text>
            </View>
            <Text style={styles.infoText}></Text>
          </View> */}

        {/* Rental Rate */}
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="dollar-sign" color="#ffffff90" size={16} />
              <Text style={styles.infoTitle}>Rental Rate:</Text>
            </View>
            <Text style={styles.infoText}></Text>
          </View> */}

        {/* Security Deposit */}
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="dollar-sign" color="#ffffff90" size={16} />
              <Text style={styles.infoTitle}>Security Deposit:</Text>
            </View>
            <Text style={styles.infoText}></Text>
          </View> */}

        {/* Rent Due */}
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="calendar" color="#ffffff90" size={16} />
              <Text style={styles.infoTitle}>Rent Due:</Text>
            </View>
            <Text style={styles.infoText}></Text>
          </View> */}
        {/* </View> */}

        {/* Add Tenant Button */}
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity
            style={styles.serviceRequestsButton}
            onPress={() => setModalVisible(true)}
          >
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Feather
                name="user-plus"
                color="#fff"
                size={20}
                style={{ marginLeft: 10, alignSelf: "center" }}
              />
              <Text style={styles.serviceRequestsText}>Add Tenant</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#fff"
              size={20}
              style={{ marginRight: 10, alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>

        {/* Add Tenant Modal */}
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
            <KeyboardAvoidingView behavior="position" enabled>
              <View style={styles.modalContainer}>
                {/* Close modal button */}
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Feather
                    name="x"
                    size={25}
                    color="#fff"
                    style={{ marginLeft: 20, marginTop: 20 }}
                  />
                </TouchableOpacity>

                <Text style={styles.modalText}>
                  Invite your tenant to connect...
                </Text>

                {/* Email Field */}
                <Controller
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <View style={styles.tenantInputContainer}>
                      <TextInput
                        type="text"
                        placeholder="Enter Tenant Email..."
                        placeholderTextColor="#ffffff90"
                        style={styles.tenantInput}
                        keyboardAppearance="dark"
                        onChangeText={onChange}
                        value={value}
                      />
                    </View>
                  )}
                  name="address"
                  rules={{ required: true }}
                  defaultValue=""
                />

                {/* Invite Button */}
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Invite</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>

        {/* Service Requests */}
        <Text style={styles.sectionTitle}>Service Requests</Text>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity
            style={styles.serviceRequestsButton}
            onPress={() => navigation.navigate("ServiceRequests")}
          >
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Feather
                name="tool"
                color="#fff"
                size={20}
                style={{ marginLeft: 10, alignSelf: "center" }}
              />
              <Text style={styles.serviceRequestsText}>Service Requests</Text>
            </View>
            <Feather
              name="arrow-right"
              color="#fff"
              size={20}
              style={{ marginRight: 10, alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>

        {/* Button Group */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* Edit Property Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#5858FB",
              margin: 30,
              padding: 15,
              borderRadius: 10,
            }}
            // onPress={}
          >
            <Text style={styles.removePropButtonText}>Edit Property</Text>
          </TouchableOpacity>

          {/* Remove Property Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              margin: 30,
              padding: 15,
              borderRadius: 10,
            }}
            onPress={deleteAlert}
          >
            <Text style={styles.removePropButtonText}>Delete Property</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const actions = {
  deleteProperty: doDeleteProperty,
};

export default connect(null, actions)(PropertyDetail);
