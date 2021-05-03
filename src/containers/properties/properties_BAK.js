import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import filter from "lodash.filter";

const properties = [
  { id: "1", address: "540 Harmony Avenue", city: "Las Vegas" },
  { id: "2", address: "108 Verigold Lane", city: "Las Vegas" },
  { id: "3", address: "2560 Freshal Canyon Avenue", city: "Enterprise" },
];

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
  const [text, setText] = useState("");
  const [data, setData] = useState([...properties]);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([...properties]);

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    console.log(formattedQuery);
    const data = filter(fullData, (property) => {
      return contains(property, formattedQuery);
    });
    setData(data);
    setQuery(text);
  };

  const contains = ({ address, city }, query) => {
    if (
      address.toLowerCase().includes(query) ||
      city.toLowerCase().includes(query)
    ) {
      return true;
    }
    return false;
  };
  // useEffect(() => {
  //   makeRemoteRequest();
  // });

  // const makeRemoteRequest = () => {
  //   const url = `https://randomuser.me/api/?seed=1&page=1&results=20`;
  //   setLoading(true);

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(page === 1 ? res.results : [...data, ...res.results]);
  //       setError(res.error || null);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // };

  // const renderFooter = () => {
  //   if (!loading) return null;

  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: "#CED0CE",
  //       }}
  //     >
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };
  {
    /* Search Bar */
  }

  const renderHeader = () => {
    return (
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          color="#fff"
          size={20}
          style={styles.searchIcon}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "5%",
        }}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 40,
      }}
    >
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          color="#fff"
          size={20}
          style={styles.searchIcon}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={handleSearch}
          defaultValue={text}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert("Item pressed!")}>
            <View
              style={{
                flexDirection: "row",
                padding: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 22 }}>
                {item.id} - {item.address} - {item.city}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default Properties;
