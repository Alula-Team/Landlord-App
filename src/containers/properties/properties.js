import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";

import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { useForm, Controller } from "react-hook-form";

import { Badge, Header, Icon } from "react-native-elements";

// Navigation
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import Occupied from "./occupied";
import Vacant from "./vacant";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./prop-styles";

// Redux Stuff
import { connect } from "react-redux";

const Properties = ({ navigation }) => {
  const [properties, setProperties] = useState([]);
  const [query, setQuery] = useState("");
  const [shouldShow, setShouldShow] = useState(false);

  const handleQuery = (text) => {
    setQuery(text);
  };

  const filteredList = properties.filter((item) =>
    item.address.toLowerCase().includes(query.trim().toLowerCase())
  );

  const data = filteredList;

  let unsubscribe = null;
  useEffect(() => {
    let mounted = true;
    console.log("Im back here!");
    async function getStuffs() {
      unsubscribe = firestore
        .collection("properties")
        .onSnapshot((snapshot) => {
          const properties = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          if (mounted) setProperties(properties);
        });
    }
    getStuffs();
    return function cleanup() {
      console.log("Im outta here!");
      mounted = false;
      unsubscribe();
    };
  }, []);

  // const Tab = createMaterialTopTabNavigator();

  const {
    control,
    formState: { isDirty },
  } = useForm();

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

  // Empty List Content
  const EmptyListMessage = () => {
    let message =
      properties.length === 0
        ? `Hmm... There is nothing here... Let's add your first property! Use the '+' symbol at the top to get started.`
        : `Your search returned 0 properties. Back up and try again.`;
    return (
      <View style={styles.emptyList}>
        <Image
          source={require("../../assets/emptyPropList.png")}
          style={styles.img}
        />
        <Text
          style={{
            color: "#fff",
            marginHorizontal: 35,
            alignSelf: "center",
            fontSize: 18,
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
              <View style={{ flexDirection: "row" }}>
                {/* SEARCH */}
                <Icon
                  name="search"
                  type="feather"
                  color="#fff"
                  size={25}
                  iconStyle={{
                    paddingTop: 30,
                    paddingRight: 20,
                    paddingBottom: 10,
                  }}
                  onPress={() => setShouldShow(!shouldShow)}
                />

                {/* ADD PROPERTY */}
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
                  onPress={() => {
                    // setQuery("");
                    navigation.navigate("AddProperty");
                  }}
                />
              </View>
            </>
          }
          containerStyle={{
            backgroundColor: "#09061C",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />
        {/* Search Bar */}
        {shouldShow ? (
          <Controller
            control={control}
            render={() => (
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
                  autoFocus={true}
                  autoCorrect={false}
                  style={styles.searchInput}
                  keyboardAppearance="dark"
                  clearButtonMode="while-editing"
                  onChangeText={handleQuery}
                  value={query}
                />
              </View>
            )}
            name="search"
          />
        ) : null}

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
                    itemUnit: item.unit,
                    itemCity: item.city,
                    itemState: item.state,
                    itemZip: item.zip,
                  })
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <Feather name="map-pin" color="#fff" size={20} />
                  <View>
                    <Text style={styles.listItem}>
                      {item.address} {item.unit}
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
            ListEmptyComponent={EmptyListMessage}
          />
        </SafeAreaView>

        {/* END Search Bar */}
        {/* Stepper
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: { backgroundColor: "#5858FB" },
            labelStyle: { fontSize: 14, color: "#fff" },
            style: { backgroundColor: "transparent" },
          }}
        >
          <Tab.Screen name="Occupied" component={Occupied} />
          <Tab.Screen name="Vacant" component={Vacant} />
        </Tab.Navigator> */}
        {/* END Stepper */}
      </View>
    </>
  );
};

export default Properties;
