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
      marginTop: 15,
      borderColor: "#ffffff50",
      borderRadius: 10,
      borderWidth: 1,
      height: 45,
      flexDirection: "row",
      color: "#fff",
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
      color: "#fff",
      paddingLeft: 15,
      fontSize: 16,
      fontWeight: "500",
    },
  };

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
            backgroundColor: "#09061C",
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
          {/* First Name */}
          <Text style={styles.sectionText}>First Name</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.tenantInputContainer}>
                <TextInput
                  type="text"
                  placeholder="First Name..."
                  placeholderTextColor="#ffffff80"
                  style={styles.tenantInput}
                  keyboardAppearance="dark"
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
          {/* Last Name */}
          <Text style={styles.sectionText}>Last Name</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.tenantInputContainer}>
                <TextInput
                  type="text"
                  placeholder="Last Name..."
                  placeholderTextColor="#ffffff80"
                  style={styles.tenantInput}
                  keyboardAppearance="dark"
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="lastName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.lastName && (
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
              <View style={styles.tenantInputContainer}>
                <TextInput
                  type="text"
                  placeholder="Email..."
                  placeholderTextColor="#ffffff80"
                  style={styles.tenantInput}
                  keyboardAppearance="dark"
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
              <View style={styles.tenantInputContainer}>
                <TextInput
                  type="text"
                  placeholder="Phone..."
                  placeholderTextColor="#ffffff80"
                  style={styles.tenantInput}
                  keyboardAppearance="dark"
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
