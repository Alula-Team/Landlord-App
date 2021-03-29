import React from "react";
import { Alert, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Header, Icon } from "react-native-elements";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./tenant-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doDeleteTenant } from "../../redux/actions";

import "./getInitials";
// Things I need
// Actions button pops up modal with options to:
//add lease (if no lease),
// remove lease (if there is a lease),
// renew lease (once lease term is set to expire in 60d)

const TenantDetailScreen = ({ route, deleteTenant }) => {
  const navigation = useNavigation();
  const { itemID, itemName, itemEmail, itemPhone } = route.params;
  const itemInitials = itemName.getInitials();
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
          onPress: (id) => deleteTenant(itemID),
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
              paddingTop: 30,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#fff"
              size={25}
              iconStyle={{
                paddingTop: 30,
                paddingLeft: 10,
                paddingBottom: 10,
              }}
              onPress={() => navigation.goBack()}
            />
          }
          containerStyle={{
            backgroundColor: "#09061C",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        <ScrollView style={{ marginTop: 30 }}>
          {/* Tenant Information */}
          <View
            style={{
              backgroundColor: "#ffffff20",
              borderRadius: 10,
              marginHorizontal: 30,
              marginTop: 10,
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <View style={styles.imgPlaceHolder}>
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}
                >
                  {/* TN */}
                  {itemInitials}
                </Text>
              </View>
              <View style={{ marginLeft: 15, alignSelf: "center" }}>
                {/* Tenant Name */}
                <Text style={styles.tenantName}>{itemName}</Text>

                {/* Phone Number */}
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Feather name="phone" size={16} color="#ffffff80" />
                  <Text
                    style={{
                      color: "#ffffff80",
                      fontSize: 16,
                      fontWeight: "500",
                      marginLeft: 5,
                    }}
                  >
                    {itemPhone}
                  </Text>
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
                  <Text
                    style={{
                      color: "#ffffff80",
                      fontSize: 16,
                      fontWeight: "500",
                      marginLeft: 5,
                    }}
                  >
                    {itemEmail}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Lease Information */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.sectionTitle}>Lease Details</Text>
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 30, marginRight: 40 }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "500",
                  marginRight: 10,
                }}
              >
                Actions
              </Text>
              <Feather name="arrow-right" color="#fff" size={18} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#ffffff20",
              borderRadius: 10,
              marginHorizontal: 30,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={styles.tenantName}>Lease Activity</Text>

            {/* Property */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="key" color="#ffffff90" size={16} />
                <Text style={styles.infoTitle}>Property:</Text>
              </View>
              <Text style={styles.infoText}></Text>
            </View>

            {/* Lease Type */}
            <View
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
            </View>

            {/* Lease Period */}
            <View
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
            </View>

            {/* Rental Rate */}
            <View
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
            </View>

            {/* Security Deposit */}
            <View
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
            </View>

            {/* Rent Due */}
            <View
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
            </View>
          </View>

          {/* Remove Property Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              marginTop: 50,
              marginHorizontal: 30,
              padding: 15,
              borderRadius: 10,
            }}
            onPress={deleteAlert}
          >
            <Text style={styles.removePropButtonText}>Delete Tenant</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

const actions = {
  deleteTenant: doDeleteTenant,
};

export default connect(null, actions)(TenantDetailScreen);
