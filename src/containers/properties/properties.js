import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

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

const Properties = ({ stateProperties }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([...stateProperties]);
  const [fullData, setFullData] = useState([]);
  const makeRemoteRequest = () => {
    const [page, seed] = useState();
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    // this.setState({ loading: true });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setFullData(res.results);
        // this.setState({
        //   data: page === 1 ? res.results : [...state.data, ...res.results],
        //   error: res.error || null,
        //   loading: false,

        //   // ---- ADD THIS ----
        //   fullData: res.results,
        // });
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  // const data = stateProperties;

  // Search state
  // const [query, setQuery] = useState("");
  // const [fullData, setFullData] = useState([...stateProperties]);
  console.log(data);
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const data = filter(fullData, (user) => {
      return this.contains(user, formattedQuery);
    });
    this.setState({ data, query: text });
  };
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }
    return false;
  };

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
            clearButtonMode="while-editing"
            onChangeText={handleSearch}
          />
        </View>

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

const mapStateToProps = (state) => {
  return { stateProperties: state.properties.properties };
};

export default connect(mapStateToProps)(Properties);
