import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";
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

const Transactions = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  let unsubscribe = null;
  useEffect(() => {
    let mounted = true;
    async function getStuffs() {
      unsubscribe = firestore
        .collection("transactions")
        .onSnapshot((snapshot) => {
          const transactions = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          if (mounted) setTransactions(transactions);
        });
    }
    getStuffs();
    console.log(transactions);
    return function cleanup() {
      unsubscribe();
      mounted = false;
    };
  }, []);

  const data = transactions;

  // // Separator
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

  // Flatlist Header
  const HeaderComponent = () => {
    return(
      <View style={{ backgroundColor: '#09061C'}}>
        <TextInput style={styles.sectionText}>Vacant</TextInput>
      </View>
    );
  }

  // Empty List Content
  const EmptyListMessage = () => {
    return (
      <View style={styles.emptyList}>
        <Image
          source={require("../../assets/transEmptyList.png")}
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
          Hmm... No transactions yet
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
            const filtered = transactions.filter((item) => item.id !== id);
            firestore.doc(`transactions/${id}`).delete();
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
            autoCorrect={false}
            style={styles.searchInput}
            keyboardAppearance="dark"
            clearButtonMode="while-editing"
            // onChangeText={handleSearch}
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
                  {/* Transaction Category and Amount*/}
                  <View style={styles.itemCenter}>
                    <Text style={styles.transactionType}>
                      {item.transactionCategory}
                    </Text>
                    <Text
                      style={{
                        color:
                          item.payment === "Payment" ? "#5CB85C" : "#D9534F",
                        fontWeight: "700",
                        fontSize: 18,
                      }}
                    >
                      ${item.amount}
                    </Text>
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
                      onPress={() => deleteAlert(item.id)}
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
              ListHeaderComponent={() => data.length > 0 && (HeaderComponent)}
              stickyHeaderIndices={[0]}
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
