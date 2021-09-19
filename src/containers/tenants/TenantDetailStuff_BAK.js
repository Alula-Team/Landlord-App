import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

import DetailScreen from "../constants/DetailScreen";

import { getInitials } from "../../utilities";

const TenantDetailStuff = ({ tenant }) => {
  const { name, email, phone } = tenant;
  const tenantInitials = getInitials(name);
  <DetailScreen title="Tenant Detail" onGoBack={() => navigation.goBack()} onPress={() => setModalVisible(true)}>
    {/* Tenant Information */}
    <View style={styles.propInfo}>
      <View style={styles.imgPlaceHolder}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
          {tenantInitials}
        </Text>
      </View>
      <View style={{ marginLeft: 15, alignSelf: "center" }}>
        {/* Tenant Name */}
        <Text style={styles.tenantName}>{name}</Text>

        {/* Phone Number */}
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Feather name="phone" size={16} color="#ffffff80" />
          <Text style={styles.cardText}>{phone}</Text>
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
          <Text style={styles.cardText}>{email}</Text>
        </View>
      </View>
    </View>

    <View style={{ backgroundColor: '#fff', paddingHorizontal: 30, paddingVertical: 12.5 }} >
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
        <Text style={{ color: "#34383D", fontSize: 16 }}>Start Date: </Text>
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
        <Text style={{ color: "#34383D", fontSize: 16 }}>End Date: </Text>
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
        <Text style={{ color: "#34383D", fontSize: 16 }}>Rental Rate: </Text>
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
        <Text style={{ color: "#34383D", fontSize: 16 }}>Rent Due On: </Text>
        <Text style={{ color: "#34383D", fontSize: 16, fontWeight: "600" }}>
          1st /mo
        </Text>
      </View>

      {/* View Lease */}
      <TouchableOpacity onPress={() => navigation.navigate('CurrentLease')} style={{ marginTop: 30, height: 45, alignItems: 'center' }}>
        <Text style={{ alignSelf: "center", color: "#232256", fontSize: 16, fontWeight: "600", textDecorationLine: 'underline' }}>
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
                itemID
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
  </DetailScreen>
}

export default TenantDetailStuff;