import React, { useState, useEffect, useRef } from "react";
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
  Modal
} from "react-native";

import { useForm, Controller } from "react-hook-form";

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
  const [query, setQuery] = useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  let unsubscribe = null;
  useEffect(() => {
    let mounted = true;
    console.log("Transaction Time");
    async function getStuffs() {
      unsubscribe = firestore
        .collection("transactions")
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => {
          const transactions = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          if (mounted) setTransactions(transactions);
        });
    }
    getStuffs();

    return function cleanup() {
      unsubscribe();
      console.log("No mas transactions");
      mounted = false;
    };
  }, []);

  let data = filteredList;

  const { control } = useForm();

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
    return (
      <View style={{ backgroundColor: "#09061C" }}>
        <TextInput style={styles.sectionText}>Vacant</TextInput>
      </View>
    );
  };

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

                {/* ADD Transaction */}
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
                    setQuery("");
                    navigation.navigate("AddTransactions");
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
            render={({ field: { value, onChange } }) => (
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
        {/* END Search Bar */}

        {/* Transactions Flat List */}
        <SafeAreaView>
          <View style={styles.listView}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.listCell} onPress={() => setModalVisible(true)}>
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
                      <Feather name="map-pin" color="#fff" size={15} />
                      <Text style={styles.listItem}>{item.address}</Text>
                    </View>
                    {/* Date */}
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="clock" color="#fff" size={15} />
                      <Text style={styles.listItem}>{makeDate(item.date)}</Text>
                    </View>
                    {/* Payment Type */}
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="credit-card" color="#fff" size={15} />
                      <Text style={styles.listItem}>{item.paymentMethod}</Text>
                    </View>   
                  </TouchableOpacity>
                );
              }}
              contentContainerStyle={{ paddingBottom: 350 }}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={renderSeparator}
              ListEmptyComponent={EmptyListMessage}
              ListHeaderComponent={() => data.length > 0 && HeaderComponent}
              stickyHeaderIndices={[0]}
            />
          </View>

          {/* Actions Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.overlay}>
              <View style={styles.modalContainer}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  Actions
                </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 20,
                  }}
                >
                  <Feather name="edit-3" size={22.5} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Edit Transaction
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 20,
                  }}
                  onPress={deleteAlert}
                >
                  <Feather name="trash" size={22.5} color="red" />
                  <Text
                    style={{
                      color: "red",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Delete Transaction
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 50,
                    justifyContent: "center",
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Feather name="x" size={22.5} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
