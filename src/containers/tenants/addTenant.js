import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Firebase
import { firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

import DateTimePicker from "@react-native-community/datetimepicker";

import faker from "faker";
faker.locale = "en_US";

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./tenant-styles";

const auth = firebase.auth();

const AddTenant = ({ navigation }) => {
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);

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
      unsubscribe();
      mounted = false;
    };
  }, []);

  const fakeIt = () => {
    setValue("firstName", faker.name.firstName());
    setValue("lastName", faker.name.lastName());
    setValue("email", faker.internet.email().toLowerCase());
    setValue("phone", faker.phone.phoneNumber("(###) ###-####"));
    setValue("author", auth.currentUser.uid);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    firestore.collection("tenants").add(data);
    navigation.goBack();
  };

  // For Picker Select
  // Styles
  const pickerStyles = {
    inputIOS: {
      marginHorizontal: 20,
      marginTop: 10,
      marginBottom: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height: 45,
      flexDirection: 'row',
      backgroundColor: '#fff',
      color: "#34383D",
      paddingLeft: 15,
      fontSize: 16,
      fontWeight: "500",
    },
    inputAndroid: {
      marginHorizontal: 20,
      marginTop: 15,
      borderColor: "#ffffff50",
      borderRadius: 10,
      borderWidth: 1,
      height: 45,
      flexDirection: "row",
      color: "#34383D",
      paddingLeft: 15,
      fontSize: 16,
      fontWeight: "500",
    },
  };

  // Placeholders
  const PropertyPlaceholder = {
    label: "Select Property...",
    value: null,
    color: "#34383D",
  };

  const addressArray = properties.map((property) => {
    return property.address;
  });

  const allProperties = properties.map((item) => {
    return {
      label: item.address,
      value: item.address,
    };
  });

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Add Tenant",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 22,
              paddingTop: 30,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#fff"
              size={25}
              iconStyle={{
                paddingTop: 30,
                paddingLeft: 10,
                paddingBottom: 10,
              }}
              onPress={() => navigation.goBack()}
            />
          }
          rightComponent={
            <TouchableOpacity
              style={{ paddingTop: 32.5, paddingRight: 10 }}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                Save
              </Text>
            </TouchableOpacity>
          }
          containerStyle={{
            backgroundColor: "#232256",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        {/* Content */}
        <KeyboardAwareScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: "#5858FB",
              margin: 30,
              padding: 15,
              borderRadius: 10,
            }}
            onPress={fakeIt}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Fake It!
            </Text>
          </TouchableOpacity>

          {/* Property */}
          <Text style={styles.sectionText}>Property</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={PropertyPlaceholder}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={allProperties}
              />
            )}
            name="address"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.address && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 5,
                marginBottom: -22,
              }}
            >
              This field is required
            </Text>
          )}
          {/* First Name */}
          <Text style={styles.sectionText}>Tenant Name</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Tenant Name"
                  placeholderTextColor="#34383D70"
                  style={styles.tenantInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="firstName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.firstName && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: -15,
                marginBottom: -2,
              }}
            >
              This field is required
            </Text>
          )}
          
          <Text style={styles.sectionText}>Email</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Email"
                  placeholderTextColor="#34383D70"
                  style={styles.tenantInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: -15,
                marginBottom: -2,
              }}
            >
              This field is required
            </Text>
          )}
          <Text style={styles.sectionText}>Phone</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Phone"
                  placeholderTextColor="#34383D70"
                  style={styles.tenantInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="phone"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.phone && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: -15,
                marginBottom: -2,
              }}
            >
              This field is required
            </Text>
          )}
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default AddTenant;
