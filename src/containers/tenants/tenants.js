import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header, Icon } from "react-native-elements";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./tenant-styles";

// Redux Stuff
import { connect } from "react-redux";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New tenants auto sorted by first name

const Tenants = ({ stateTenants, stateProperties }) => {
  const navigation = useNavigation();
  // const data = stateTenants;
  let data = stateTenants;
  let newData = [];
  for (tenant of stateTenants) {
    newData.push(tenant.name, tenant.email);
    for (property of stateProperties) {
      if (tenant.property === property.id) {
        newData.push(property.address);
      }
    }
  }

  function Active(props) {
    return <Text style={{ color: "#5CB85C", fontWeight: "700" }}>Active</Text>;
  }
  function Archived(props) {
    return (
      <Text style={{ color: "#D9534F", fontWeight: "700" }}>Archived</Text>
    );
  }
  function Status(props) {
    const archived = props.archived;
    if (archived) {
      return <Archived />;
    } else {
      return <Active />;
    }
  }

  // Separator
  const renderSeparator = () => {
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE50" }} />;
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          placement={"left"}
          centerComponent={{
            text: "Tenants",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 30,
            },
          }}
          rightComponent={
            <>
              <Icon
                name="plus"
                type="feather"
                color="#fff"
                size={25}
                iconStyle={{
                  paddingTop: 30,
                  paddingRight: 20,
                  paddingBottom: 10,
                }}
                onPress={() => navigation.navigate("AddTenants")}
              />
            </>
          }
          containerStyle={{
            backgroundColor: "#09061C",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            color="#fff"
            size={20}
            style={styles.searchIcon}
          />
          <TextInput
            type="search"
            placeholder="Search Tenants"
            placeholderTextColor="#ffffff75"
            style={styles.searchInput}
            keyboardAppearance="dark"
          />
        </View>

        {/* Tenants Flat List */}
        <SafeAreaView>
          <View style={styles.listView}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listCell}
                  onPress={() =>
                    navigation.navigate("TenantDetail", {
                      itemID: item.id,
                      itemName: item.name,
                      itemEmail: item.email,
                      itemPhone: item.phone,
                      itemProperty: item.property,
                      itemLeaseType: item.leaseType,
                      itemLeasePeriod: item.leasePeriod,
                      itemRentalRate: item.rentalRate,
                      itemSecurityDeposit: item.securityDeposit,
                      itemRentDue: item.rentDue,
                    })
                  }
                >
                  <View style={{ flexDirection: "row" }}>
                    <Feather name="user" color="#fff" size={20} />
                    <View>
                      <Text style={styles.listItem}>{item.name}</Text>
                      <Text style={styles.status}>
                        Status: <Status archived={item.archived} />
                      </Text>
                    </View>
                  </View>
                  <Feather
                    name="arrow-right"
                    color="#fff"
                    size={20}
                    style={styles.arrow}
                  />
                </TouchableOpacity>
              )}
              contentContainerStyle={{ paddingBottom: 350 }}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={renderSeparator}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stateProperties: state.properties.properties,
    stateTenants: state.tenants.tenants,
  };
};

export default connect(mapStateToProps)(Tenants);
