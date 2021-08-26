import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  RefreshControl,
} from "react-native";

import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

// Firebase
import firebase, { auth, db } from "../../firebase/firebase";
import { collectIdsAndData } from "../../utilities";

import { TenantsContext } from "../../providers/TenantsProvider";
// import { withProperty } from "../../providers/PropertiesProvider";

import Tenant from "./Tenant";
import { PropertyContext } from "../../providers/PropertiesProvider";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New tenants auto sorted by first name

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Tenants = ({ navigation }) => {
  const tenants = useContext(TenantsContext);
  const [query, setQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const handleQuery = (text) => {
    setQuery(text);
  };

  const filteredList = tenants.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const data = filteredList;

  // const listItemBase = () => (
  //   <TouchableOpacity
  //     style={styles.listCell}
  //     onPress={() =>
  //       navigation.navigate("TenantDetail", {
  //         itemID: item.id,
  //         itemName: item.name,
  //         itemEmail: item.email,
  //         itemPhone: item.phone,
  //         property: item.property,
  //       })
  //     }
  //   >
  //     <Tenant />
  //     <View style={{ flexDirection: "row" }}>
  //       <Feather name="user" color="#34383D90" size={20} />
  //       <View>
  //         <Text style={styles.listItem}>{item.name}</Text>
  //       </View>
  //     </View>
  //     <Feather
  //       name="arrow-right"
  //       color="#34383D90"
  //       size={20}
  //       style={styles.arrow}
  //     />
  //   </TouchableOpacity>
  // );

  // onRefresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // Separator
  const renderSeparator = () => {
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE" }} />;
  };

  // Empty List Content
  const EmptyListMessage = () => {
    let message =
      tenants.length === 0
        ? `Let's move someone in... These guys charge by the minute!`
        : `Your search returned 0 tenants. Back up and try again.`;
    return (
      <View style={styles.emptyList}>
        <Image
          source={require("../../assets/tenantEmptyList.png")}
          style={styles.img}
        />
        <Text
          style={{
            color: "#34383D80",
            marginHorizontal: 35,
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {message}
        </Text>
      </View>
    );
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
              paddingTop: 20,
            },
          }}
          rightComponent={
            <>
              <View>
                {/* ADD Tenant */}
                <Icon
                  name="plus"
                  type="feather"
                  color="#fff"
                  size={25}
                  iconStyle={{
                    paddingTop: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                  }}
                  // onPress={() => setModalVisible(true)}
                  onPress={() => {
                    // setQuery("");
                    navigation.navigate("AddTenant");
                  }}
                />
              </View>
            </>
          }
          containerStyle={{
            backgroundColor: "#232256",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            color="#34383D80"
            size={20}
            style={styles.searchIcon}
          />
          <TextInput
            type="search"
            placeholder="Search Tenants"
            placeholderTextColor="#34383D80"
            autoFocus={false}
            autoCorrect={false}
            style={styles.searchInput}
            clearButtonMode="while-editing"
            onChangeText={handleQuery}
            value={query}
          />
        </View>

        {/* END Search Bar */}

        {/* Properties Flat List */}
        <SafeAreaView>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listCell}
                onPress={() =>
                  navigation.navigate("TenantDetail", {
                    theItem: {
                      ID: item.id,
                      name: item.name,
                      email: item.email,
                      phone: item.phone,
                    },
                    theProperty: {
                      ID: item.property.id,
                      address: item.property.address,
                      city: item.property.city,
                      state: item.property.state,
                      unit: item.property.unit,
                      zip: item.property.zip,
                    },
                  })
                }
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Feather name="user" color="#34383D90" size={20} />
                  <View>
                    <Text style={styles.listItem}>{item.name}</Text>
                    <Text style={styles.listItemMuted}>
                      {item.property.address} {item.property.unit}
                    </Text>
                  </View>
                </View>
                <Feather
                  name="arrow-right"
                  color="#34383D90"
                  size={20}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={{ paddingBottom: 350 }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={EmptyListMessage}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default Tenants;
