import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { Header, Icon } from "react-native-elements";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./tenant-styles";

// Redux Stuff
import { connect } from "react-redux";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New tenants auto sorted by first name

const Tenants = ({ stateTenants }) => {
  const navigation = useNavigation();
  const data = stateTenants;
  const datas = [
    {
      id: 0,
      tenant: "Kane Toomer",
      address: "5612 Harmony Ave",
      archived: true,
    },
    {
      id: 1,
      tenant: "Jaida Nash",
      address: "123 Main Street",
      archived: true,
    },
    {
      id: 2,
      tenant: "Xochitl Gonzales-Lopez",
      address: "595 S. Green Valley Pkwy Apt 121",
      archived: true,
    },
    {
      id: 3,
      tenant: "John Smith",
      address: "561 Harrington Ct",
      archived: false,
    },
    {
      id: 4,
      tenant: "Jane Doe",
      address: "1012 Horizon Ridge",
      archived: false,
    },
  ];

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
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE50" }} />;
  };

  // Empty List Content
  const EmptyListMessage = () => {
    return(
      <View style={styles.emptyList}>
        <Image source={require('../../assets/tenantEmptyList.png')} style={styles.img} />
        <Text style={{color: '#fff', marginHorizontal: 35, alignSelf: 'center', fontSize: 18}}>
          When you invite tenants to connect, they will show up here!
        </Text>
      </View>
    );
  }

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
            placeholder="Search Tenants"
            placeholderTextColor="#ffffff75"
            style={styles.searchInput}
            keyboardAppearance="dark"
            clearButtonMode='while-editing'
          />
        </View>

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
                      itemName: item.name,
                      itemEmail: item.email,
                      itemPhone: item.phone,
                    })
                  }
                >
                  <View style={{ flexDirection: "row" }}>
                    <Feather name="user" color="#fff" size={20} />
                    <View>
                      <Text style={styles.listItem}>{item.name}</Text>
                      <Text style={styles.status}>
                        Status: <Status archived={item.archived} />
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
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stateTenants: state.tenants.tenants,
  };
};

export default connect(mapStateToProps)(Tenants);
