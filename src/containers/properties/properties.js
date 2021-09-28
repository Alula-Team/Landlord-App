import React, { useState, useEffect, useContext } from "react";

import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
} from "react-native";

import { useForm, Controller } from "react-hook-form";


import { Badge, Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

// Firebase
import { PropertiesContext } from "../../providers/PropertiesProvider";
import MainScreen from "../constants/MainScreen";
import { mainStyles } from "../constants/styles";
// import MainScreenHeader from "../constants/MainScreenHeader";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};



const Properties = ({ navigation }) => {
  const properties = useContext(PropertiesContext);
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };

  const filteredList = properties.filter((item) =>
    item.address.toLowerCase().includes(search.trim().toLowerCase())
  );
  console.log(properties);
  const data = filteredList;

  const SearchZeeList = ({ placeholder = "Search...", value, onChangeText }) => {
    return (
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          color="#34383D80"
          size={20}
          style={styles.searchIcon}
        />
        <TextInput
          type="search"
          placeholder={placeholder}
          placeholderTextColor="#34383D80"
          autoFocus={false}
          autoCorrect={false}
          style={styles.searchInput}
          clearButtonMode="while-editing"
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    )
  }

  const {
    control,
    formState: { isDirty },
  } = useForm();

  // onRefresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // Separator
  const renderSeparator = () => {
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE", width: '90%', alignSelf: 'center' }} />;
  };

  // Empty List Content
  const EmptyListMessage = () => {
    let message =
      properties.length === 0
        ? `I think it may be time to add a property 🤷🏽‍♂️`
        : `Your search returned 0 properties. Back up and try again.`;
    return (
      <View style={styles.emptyList}>
        <Image
          source={require("../../assets/emptyPropList.png")}
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

  const onAction = () => {
    navigation.navigate("Messages")
  }

  const onAdd = () => {
    setSearch("");
    navigation.navigate("AddProperty");
  }
  // const propsRef = db.collection('properties');
  // const [properties: datums, loading, error] = useCollectionData(propsRef, { idField: "id" });
  // if (error) {
  //   console.log(error)
  // }
  // if (loading) {
  //   console.log('Loading ...')
  // }
  return (
    <MainScreen title="Properties" actionIcon="message-circle" onAction={onAction} onAdd={onAdd}>
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            color="#34383D80"
            size={20}
            style={styles.searchIcon}
          />
          <TextInput
            type="search"
            placeholder="Search Properties"
            placeholderTextColor="#34383D80"
            autoFocus={false}
            autoCorrect={false}
            style={styles.searchInput}
            clearButtonMode="while-editing"
            onChangeText={handleSearch}
            value={search}
          />
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listCell}
              onPress={() =>
                navigation.navigate("PropertyDetail", {
                  itemID: item.id,
                })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <Feather name="map-pin" color="#34383D80" size={20} />
                <View>
                  <Text style={styles.listItem}>
                    {item.address} {item.unit}
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
    </MainScreen>
  );
};

export default Properties;
