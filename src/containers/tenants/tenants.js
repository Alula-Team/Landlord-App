import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
} from "react-native";

import { useForm, Controller } from "react-hook-form";

import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./tenant-styles";

// Redux Stuff
import { connect } from "react-redux";

import { firestore } from "../../firebase/firebase";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New tenants auto sorted by first name

const Tenants = ({ navigation }) => {
  const [tenants, setTenants] = useState([]);
  const [query, setQuery] = useState("");

  let unsubscribe = null;

  useEffect(() => {
    let mounted = true;
    async function getStuffs() {
      unsubscribe = firestore.collection("tenants").onSnapshot((snapshot) => {
        const tenants = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        if (mounted) setTenants(tenants);
      });
    }
    getStuffs();
    return function cleanup() {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const {
    control,
    formState: { isDirty },
  } = useForm();

  const handleQuery = (text) => {
    setQuery(text);
  };

  const filteredList = tenants.filter((item) =>
    item.firstName.toLowerCase().includes(query.trim().toLowerCase())
  );

  const data = filteredList;

  function Active(props) {
    return <Text style={{ color: "#5CB85C", fontWeight: "700" }}>Active</Text>;
  }
  function Archived(props) {
    return (
      <Text style={{ color: "#D9534F", fontWeight: "700" }}>Archived</Text>
    );
  }
  function Status(props) {
    const archived = props.archived;
    if (archived) {
      return <Archived />;
    } else {
      return <Active />;
    }
  }

  // Separator
  const renderSeparator = () => {
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE" }} />;
  };

  // Empty List Content
  const EmptyListMessage = () => {
    return (
      <View style={styles.emptyList}>
        <Image
          source={require("../../assets/tenantEmptyList.png")}
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
          When you invite tenants to connect, they will show up here!
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
            text: "Tenants",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 30,
            },
          }}
          rightComponent={
            <>
              <View>
                {/* ADD Tenant */}
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
                  // onPress={() => setModalVisible(true)}
                  onPress={() => {
                    // setQuery("");
                    navigation.navigate("AddTenant");
                  }}
                />
              </View>
            </>
          }
          containerStyle={{
            backgroundColor: "#D59166",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        {/* Search Bar */}
          <Controller
            control={control}
            render={() => (
              <View style={styles.searchContainer}>
                <Feather
                  name="search"
                  color="#34383D80"
                  size={20}
                  style={styles.searchIcon}
                />
                <TextInput
                  type="search"
                  placeholder="Search Tenants"
                  placeholderTextColor="#34383D80"
                  autoFocus={false}
                  autoCorrect={false}
                  style={styles.searchInput}
                  clearButtonMode="while-editing"
                  onChangeText={handleQuery}
                />
              </View>
            )}
            name="search"
          />
        {/* END Search Bar */}

        

        {/* Properties Flat List */}
        <SafeAreaView>
          <View style={styles.listView}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listCell}
                  onPress={() =>
                    navigation.navigate("TenantDetail", {
                      itemID: item.id,
                      itemName: `${item.firstName} ${item.lastName}`,
                      itemEmail: item.email,
                      itemPhone: item.phone,
                    })
                  }
                >
                  <View style={{ flexDirection: "row" }}>
                    <Feather name="user" color="#34383D90" size={20} />
                    <View>
                      <Text style={styles.listItem}>
                        {item.firstName} {item.lastName}
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
  return { stateTenants: state.tenants.tenants };
};

export default connect(mapStateToProps)(Tenants);
