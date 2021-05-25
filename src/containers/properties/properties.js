import React, { useState, useEffect, useContext } from "react";
import { firestore } from "../../firebase/firebase";
import PropertiesContext from "./PropertiesContext";
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

import filter from "lodash.filter";

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

const Properties = () => {
  const { properties } = useContext(PropertiesContext);
  console.log(properties);

  // let unsubscribe = null;
  // useEffect(() => {
  //   let mounted = true;
  //   async function getStuffs() {
  //     unsubscribe = firestore
  //       .collection("properties")
  //       .onSnapshot((snapshot) => {
  //         const properties = snapshot.docs.map((doc) => {
  //           return { id: doc.id, ...doc.data() };
  //         });
  //         if (mounted) setProperties(properties);
  //       });
  //   }
  //   getStuffs();
  //   return function cleanup() {
  //     unsubscribe();
  //     mounted = false;
  //   };
  // }, []);

  const navigation = useNavigation();

  const {
    control,
    formState: { isDirty },
  } = useForm();

  // const [data, setData] = useState(properties);
  // const data = [
  //   {
  //     address: "108 Verygold Lane",
  //     city: "Los Tacos",
  //     state: "Nevada",
  //   },
  //   {
  //     address: "7070 Notsmuch Blvd",
  //     city: "West Tacos",
  //     state: "Ohio",
  //   },
  // ];

  const data = properties;

  console.log(data);

  // const resultsArray = stateProperties;

  const handleSearch = (text) => {
    const newData = resultsArray.filter((item) => {
      const itemData = `${item.address.toUpperCase()} ${item.city.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

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

  // Empty List Content
  const EmptyListMessage = () => {
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
          Hmm... There is nothing here... Let's add your first property! Use the
          '+' symbol at the top to get started.
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
                // onPress={() => addSomething()}
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
                style={styles.searchInput}
                keyboardAppearance="dark"
                clearButtonMode="while-editing"
                onChangeText={handleSearch}
              />
            </View>
          )}
          name="search"
        />
        {isDirty.search && (
          <Text style={{ color: "red" }}>
            This field is dry clean only. Which means, it's dirty.
          </Text>
        )}

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
            ListEmptyComponent={EmptyListMessage}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default Properties;
