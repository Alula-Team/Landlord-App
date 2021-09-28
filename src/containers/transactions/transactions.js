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

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import { styles } from "./styles";

// Firebase
import { db } from "../../firebase";

import { TransactionsContext } from "../../providers/TransactionsProvider";
import MainScreen from "../constants/MainScreen";


// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New transactions auto sorted by newest to oldest
// Separation between months/year

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Transactions = ({ navigation }) => {
  const transactions = useContext(TransactionsContext);
  const [shouldShow, setShouldShow] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };

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


  const filteredList = transactions.filter(
    (item) =>
      item.transactionType.toLowerCase().includes(search.toLowerCase()) ||
      item.transactionCategory.toLowerCase().includes(search.toLowerCase())
  );

  //
  let data = filteredList;

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

  const onAction = () => {
    setShouldShow(!shouldShow);
  }

  const onAdd = () => {
    setSearch("");
    navigation.navigate("AddTransaction");
  }

  return (
    <MainScreen title="Transactions" actionIcon="activity" onAction={onAction} onAdd={onAdd}>
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
          placeholder="Search Transactions"
          placeholderTextColor="#34383D80"
          autoFocus={false}
          autoCorrect={false}
          style={styles.searchInput}
          clearButtonMode="while-editing"
          onChangeText={handleSearch}
          value={search}
        />
      </View>
      {/* END Search Bar */}

      {/* Revenue Overview */}
      {
        shouldShow ? (
          <View style={styles.moneyBox}>
            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
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
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Revenue:</Text>
              <Text style={styles.propInfoLabel}>$42,000</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Expenses:</Text>
              <Text style={styles.propInfoLabel}>- $14,450</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Net Profit:</Text>
              <Text style={styles.propInfoLabel}>$27,550</Text>
            </View>
          </View>

        ) : null
      }
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
                navigation.navigate("TransactionDetail", {
                  itemID: item.id,
                  allElse: JSON.stringify(item)
                }
                )
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
    </MainScreen>
  );
};

export default Transactions;
