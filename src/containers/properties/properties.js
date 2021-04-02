import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Badge, Header, Icon } from "react-native-elements";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./prop-styles";

// Redux Stuff
import { connect } from "react-redux";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New properties auto sorted in alpha numeric order
import {
  normalProps,
  normalTenant,
  normalTransaction,
  normalServiceRequest,
} from "../../normalizedState";
const Properties = ({ stateProperties }) => {
  console.log(normalProps);
  console.log(normalTenant);
  console.log(normalTransaction);
  console.log(normalServiceRequest);
  const navigation = useNavigation();
  const data = stateProperties;
  // Flatlist Dummy Data

  function Occupied(props) {
    return (
      <Text style={{ color: "#5CB85C", fontWeight: "700" }}>Occupied</Text>
    );
  }
  function Vacant(props) {
    return <Text style={{ color: "#D9534F", fontWeight: "700" }}>Vacant</Text>;
  }
  function Status(props) {
    const vacant = props.vacant;
    if (vacant) {
      return <Vacant />;
    } else {
      return <Occupied />;
    }
  }

  // Separator
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          //   width: '86%',
          backgroundColor: "#CED0CE50",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          placement={"left"}
          centerComponent={{
            text: "Properties",
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
                onPress={() => navigation.navigate("AddProperty")}
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
            placeholder="Search Properties"
            placeholderTextColor="#ffffff75"
            style={styles.searchInput}
            keyboardAppearance="dark"
          />
        </View>

        {/* Service Requests */}
        <TouchableOpacity
          style={styles.serviceRequestsButton}
          onPress={() => navigation.navigate("ServiceRequests")}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Badge
              status="error"
              value="New"
              badgeStyle={{
                borderWidth: "none",
                height: 22.5,
                width: 35,
              }}
              containerStyle={{
                marginLeft: 10,
              }}
              textStyle={{
                fontSize: 12,
                fontWeight: "600",
              }}
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

        {/* Properties Flat List */}
        <SafeAreaView>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listCell}
                onPress={() =>
                  navigation.navigate("PropertyDetail", {
                    itemID: item.id,
                    itemAddress: item.address,
                    itemCity: item.city,
                    itemState: item.state,
                    itemZip: item.zip,
                  })
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <Feather name="map-pin" color="#fff" size={20} />
                  <View>
                    <Text style={styles.listItem}>{item.address}</Text>
                    <Text style={styles.status}>
                      Status: <Status vacant={item.vacant} />
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
        </SafeAreaView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return { stateProperties: state.properties.properties };
};

export default connect(mapStateToProps)(Properties);
