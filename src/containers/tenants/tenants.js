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
  KeyboardAvoidingView
} from "react-native";

import { useForm, Controller } from "react-hook-form";

import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./tenant-styles";

// Redux Stuff
import { connect } from "react-redux";

// THINGS I NEED FOR THIS SCREEN
// Working Search Feature
// New tenants auto sorted by first name

const Tenants = ({ stateTenants, navigation }) => {

  const [query, setQuery] = useState("");
  const [shouldShow, setShouldShow] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const handleQuery = (text) => {
    setQuery(text);
  };

  const {
    control,
    formState: { isDirty },
  } = useForm();

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
          rightComponent={
            <>
              <View style={{flexDirection: 'row'}}>
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

                {/* ADD PROPERTY */}
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
                    navigation.navigate("AddProperty");
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
            render={() => (
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
                  autoCorrect={false}
                  style={styles.searchInput}
                  keyboardAppearance="dark"
                  clearButtonMode="while-editing"
                  onChangeText={handleQuery}
                />
              </View>
            )}
            name="search"
          />
        ): null }
        {/* END Search Bar */}

        {/* Add Tenant Modal */}
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
            <KeyboardAvoidingView behavior="position" enabled>
              <View style={styles.modalContainer}>
                {/* Close modal button */}
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Feather
                    name="x"
                    size={25}
                    color="#fff"
                    style={{ marginLeft: 20, marginTop: 20 }}
                  />
                </TouchableOpacity>

                <Text style={styles.modalText}>
                  Invite your tenant to connect...
                </Text>

                {/* Email Field */}
                <View style={styles.tenantInputContainer}>
                  <TextInput
                    type="text"
                    placeholder="Enter Tenant Email..."
                    placeholderTextColor="#ffffff90"
                    style={styles.tenantInput}
                    keyboardAppearance="dark"
                    // onChangeText={}
                    // value={}
                  />
                </View>

                {/* Invite Button */}
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Invite</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>

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
  return { stateTenants: state.tenants.tenants };
};

export default connect(mapStateToProps)(Tenants);
