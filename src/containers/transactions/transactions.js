import React, { useState, useContext } from "react";

import {
  Alert,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
} from "react-native";

import { useForm, Controller } from "react-hook-form";

import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import { styles } from "./styles";

// Firebase
import firebase, { auth, db } from "../../firebase/firebase";

import { TransactionsContext } from "../../providers/TransactionsProvider";
import { PropertiesContext } from "../../providers/PropertiesProvider";
import { SafeAreaView } from "react-native-safe-area-context";

// import { getSubCollections } from "../../../functions";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New transactions auto sorted by newest to oldest
// Separation between months/year

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Transactions = ({ navigation }) => {
  const transactions = useContext(TransactionsContext);
  const properties = useContext(PropertiesContext);
  const [query, setQuery] = useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const makeDate = (dateObj) => {
    const zeeDate = new Date(dateObj.seconds * 1000).toLocaleDateString(
      "en-us",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
    return zeeDate;
  };

  const handleQuery = (text) => {
    setQuery(text);
  };

  const filteredList = transactions.filter(
    (item) =>
      item.transactionType.toLowerCase().includes(query.toLowerCase()) ||
      item.transactionCategory.toLowerCase().includes(query.toLowerCase())
  );

  //
  let data = filteredList;

  const { control } = useForm();

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
      transactions.length === 0
        ? `Hmm... No transactions yet`
        : `Your search returned 0 transactions. Back up and try again.`;
    return (
      <View style={styles.emptyList}>
        <Image
          source={require("../../assets/transEmptyList.png")}
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

  // Delete Alert Pop Up
  const deleteAlert = (id) => {
    Alert.alert(
      "Delete Transaction?",
      "Deleting this transaction will also delete its data from all reportings.",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancel Pressed", id),
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            db.doc(`transactions/${id}`).delete();
            setTransactions(filtered);
          },
        },
      ]
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          placement={"left"}
          centerComponent={{
            text: "Transactions",
            style: {
              color: "#34383D",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 20,
            },
          }}
          rightComponent={
            <>
              <View style={{ flexDirection: "row" }}>
                {/* Dashboard */}
                <Icon
                  name="activity"
                  type="feather"
                  color="#34383D80"
                  size={25}
                  iconStyle={{
                    paddingTop: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                  }}
                  onPress={() => setShouldShow(!shouldShow)}
                />
                {/* ADD Transaction */}
                <Icon
                  name="plus"
                  type="feather"
                  color="#34383D80"
                  size={25}
                  iconStyle={{
                    paddingTop: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                  }}
                  onPress={() => {
                    setQuery("");
                    navigation.navigate("AddTransaction");
                  }}
                />
              </View>
            </>
          }
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        {/* Search Bar */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <Feather
                name="search"
                color="#34383D80"
                size={20}
                style={styles.searchIcon}
              />
              <TextInput
                type="search"
                placeholder="Search Transactions"
                placeholderTextColor="#34383D80"
                autoFocus={false}
                autoCorrect={false}
                style={styles.searchInput}
                clearButtonMode="while-editing"
                onChangeText={handleQuery}
                value={query}
              />
            </View>
          )}
          name="search"
        />
        {/* END Search Bar */}

        {/* Revenue Overview */}
        {shouldShow ? (
          <View style={styles.moneyBox}>
            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10}}>
              <Text
                style={{
                  fontWeight: "500",
                  color: "#fff",
                  marginRight: 5,
                }}
              >
                Financial Activity
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "500", color: "#ffffff90" }}
              >
                (year to date)
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Revenue:</Text>
              <Text style={styles.propInfoLabel}>$42,000</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Expenses:</Text>
              <Text style={styles.propInfoLabel}>- $14,450</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Net Profit:</Text>
              <Text style={styles.propInfoLabel}>$27,550</Text>
            </View>
          </View>
            
        ) : null}
        {/* END Revenue Overview */}

        {/* Transactions Flat List */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.listCell}
                onPress={() =>
                  navigation.navigate("ManageTransaction", {
                    theItem: {
                      ID: item.id,
                      amount: item.amount,
                      date: makeDate(item.date),
                      description: item.description,
                      paymentMethod: item.paymentMethod,
                      transactionCategory: item.transactionCategory,
                      transactionType: item.transactionType,
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
                {/* Transaction Category and Amount*/}
                <View style={styles.itemCenter}>
                  <Text style={styles.transactionType}>
                    {item.transactionCategory}
                  </Text>
                  <Text
                    style={{
                      color:
                        item.transactionType === "Payment"
                          ? "#5CB85C"
                          : "#D9534F",
                      fontWeight: "700",
                      fontSize: 18,
                    }}
                  >
                    ${item.amount}
                  </Text>
                </View>
                {/* Property */}
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Feather name="map-pin" color="#34383D80" size={15} />
                  <Text style={styles.listItem}>
                    {item.property.address} {item.property.unit}
                  </Text>
                </View>
                {/* Date */}
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Feather name="clock" color="#34383D80" size={15} />
                  <Text style={styles.listItem}>{makeDate(item.date)}</Text>
                </View>
                {/* Payment Type */}
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Feather name="credit-card" color="#34383D80" size={15} />
                  <Text style={styles.listItem}>{item.paymentMethod}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{ paddingBottom: 350 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={EmptyListMessage}
        />
      </View>
    </>
  );
};

export default Transactions;
