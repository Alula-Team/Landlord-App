import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header, Icon } from "react-native-elements";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./trans-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doDeleteTransaction } from "../../redux/actions";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New transactions auto sorted by newest to oldest
// Separation between months/year

const Transactions = ({ stateTransactions, deleteTransaction }) => {
  const navigation = useNavigation();
  const data = stateTransactions;

  // Amount Function
  function Expense(props) {
    return (
      <Text style={{ color: "#D9534F", fontWeight: "700", fontSize: 18 }}>
        -$
      </Text>
    );
  }
  function Payment(props) {
    return (
      <Text style={{ color: "#5CB85C", fontWeight: "700", fontSize: 18 }}>
        +$
      </Text>
    );
  }
  function Amount(props) {
    const payment = props.payment;
    if (payment) {
      return <Payment />;
    } else {
      return <Expense />;
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
    return(
      <View style={styles.emptyList}>
        <Image source={require('../../assets/transEmptyList.png')} style={styles.img} />
        <Text style={{color: '#fff', marginHorizontal: 35, alignSelf: 'center', fontSize: 18}}>
          Hmm... 
          There is nothing here... 
          Use the '+' symbol at the top to get started. 
        </Text>
      </View>
    );
  }

  const id = stateTransactions.id;

  // Delete Alert Pop Up
  const deleteAlert = () => {
    Alert.alert(
      "Delete Transaction?",
      "Deleting this transaction will also delete its data from all reportings.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: (id) => deleteTransaction(id),
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
                onPress={() => navigation.navigate("AddTransactions")}
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
            placeholder="Search Transactions"
            placeholderTextColor="#ffffff75"
            style={styles.searchInput}
            keyboardAppearance="dark"
            clearButtonMode='while-editing'
          />
        </View>

          {/* Transactions Flat List */}
          <SafeAreaView>
            <View style={styles.listView}>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.listCell}>
                    {/* Transaction Type and Amount*/}
                    <View style={styles.itemCenter}>
                      <Text style={styles.transactionType}>
                        {item.transactionType}
                      </Text>
                      <Text
                        style={{
                          color: item.payment === true ? "#5CB85C" : "#D9534F",
                          fontWeight: "700",
                          fontSize: 18,
                        }}
                      >
                        <Amount payment={item.payment} />
                        {item.amount}
                      </Text>
                    </View>
                    {/* Category */}
                    <View style={{ flexDirection: "row", marginTop: 10}}>
                      <Feather name="file-text" color="#fff" size={15} />
                      <Text style={styles.listItem}>{item.transactionCategory}</Text>
                    </View>
                    {/* Property */}
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="map-pin" color="#fff" size={15} />
                      <Text style={styles.listItem}>{item.address}</Text>
                    </View>
                    {/* Date */}
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Feather name="clock" color="#fff" size={15} />
                        <Text style={styles.listItem}>{item.date}</Text>
                    </View>
                    {/* Payment Type */}
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="credit-card" color="#fff" size={15} />
                      <Text style={styles.listItem}>{item.paymentMethod}</Text>
                    </View>
                    {/* Actions */}
                    <View>
                      <TouchableOpacity
                        style={styles.actionsBtn}
                        onPress={deleteAlert}
                      >
                        <Feather
                          name="trash-2"
                          color="#fff"
                          size={20}
                          style={{ marginRight: 10 }}
                        />
                        <Text style={styles.actionsText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                contentContainerStyle={{ paddingBottom: 350 }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}
                ListEmptyComponent={EmptyListMessage}
              />
            </View>
          </SafeAreaView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stateTransactions: state.transactions.transactions,
  };
};

const actions = {
  deleteTransaction: doDeleteTransaction,
};

export default connect(mapStateToProps, actions)(Transactions);
