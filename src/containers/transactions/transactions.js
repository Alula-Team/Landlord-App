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
  Modal,
} from "react-native";

import { useForm, Controller } from "react-hook-form";

import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import { styles } from "./styles";

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
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE" }} />;
  };

  // Flatlist Header
  const HeaderComponent = () => {
    return (
      <View style={{ backgroundColor: "#09061C" }}>
        <TextInput style={styles.sectionText}>Date</TextInput>
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
                {/* Dashboard */}
                <Icon
                  name="activity"
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
                    navigation.navigate("AddTransaction");
                  }}
                />
              </View>
            </>
          }
          containerStyle={{
            backgroundColor: "#232256",
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
            <Text style={{ fontWeight: "500", color: "#34383D80" }}>
              Financial Activity
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Revenue:</Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "500" }}
              >
                $42,000
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>Expenses:</Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "500" }}
              >
                - $14,450
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#34383D", fontSize: 16 }}>
                Net Profit:
              </Text>
              <Text
                style={{ color: "#34383D", fontSize: 16, fontWeight: "500" }}
              >
                $27,550
              </Text>
            </View>
          </View>
        ) : null}
        {/* END Revenue Overview */}

        {/* Transactions Flat List */}
        <SafeAreaView>
          <View style={styles.listView}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.listCell}
                    onPress={() => navigation.navigate("ManageTransaction")}
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
                      <Text style={styles.listItem}>{item.address}</Text>
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
              contentContainerStyle={{ paddingBottom: 350 }}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={renderSeparator}
              ListEmptyComponent={EmptyListMessage}
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
