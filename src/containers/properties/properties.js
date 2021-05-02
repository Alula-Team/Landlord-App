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

const mockData = [
  { id: "1", text: "Expo " },
  { id: "2", text: "is " },
  { id: "3", text: "Awesome!" },
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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [seed, setSeed] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    makeRemoteRequest();
  });

  const makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?seed=1&page=1&results=20`;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(page === 1 ? res.results : [...data, ...res.results]);
        setError(res.error || null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" />
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
                {item.name.first} - {item.name.last}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.email}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Properties;
