import React, { useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, Controller } from "react-hook-form";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import styles from "./styles";
// Firebase
import { auth, db } from "../../firebase/firebase";

const EditTenant = ({ navigation, route }) => {
  const { theItem, theProperty } = route.params;

  const INITIAL_STATE = {
    property: {
      ...theProperty,
    },
    ...theItem,
  };

  const checkEqual = (prop1, prop2) => {
    return prop1 === prop2;
  };

  const returnFinalObject = (obj1, obj2) => {
    let finished = {};
    Object.keys(obj1).forEach((key) => {
      if (obj2.hasOwnProperty(key) && checkEqual(obj1[key], obj2[key])) {
        return;
      } else {
        finished[key] = obj2[key];
      }
    });
    console.log(finished);
    return finished;
  };

  useEffect(() => {
    function fillForm() {
      setValue("name", itemName);
      setValue("email", itemEmail);
      setValue("phone", itemPhone);
    }
    fillForm();
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let updates = returnFinalObject(INITIAL_STATE, data);
    data.id = itemID;
    console.log(data);
    db.collection("tenants")
      .doc(itemID)
      .update(updates)
      .then(() => console.log(`Successfully updated yer stuffs!`))
      .catch((error) => console.error(error));
    navigation.navigate("TenantDetail", {
      itemID: data.id,
      itemName: data.name,
      itemEmail: data.email,
      itemPhone: data.phone,
    });
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "Edit Tenant",
          style: {
            color: "#fff",
            fontWeight: "700",
            fontSize: 20,
            paddingTop: 20,
          },
        }}
        leftComponent={
          <Icon
            name="arrow-left"
            type="feather"
            color="#fff"
            size={25}
            iconStyle={{
              paddingTop: 20,
              paddingLeft: 10,
              paddingBottom: 10,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <TouchableOpacity
            style={{ paddingTop: 22.5, paddingRight: 10 }}
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

      <KeyboardAwareScrollView>
        {/* Property */}
        <Text style={styles.inputLabel}>Property</Text>
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
          name="property"
          rules={{ required: false }}
          defaultValue=""
        />
        {errors.property && (
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
        <Text style={styles.inputLabel}>Tenant Name</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                type="text"
                placeholder="Tenant Name"
                placeholderTextColor="#34383D70"
                style={styles.inputField}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="name"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.name && (
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

        <Text style={styles.inputLabel}>Email</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                type="text"
                placeholder="Email"
                placeholderTextColor="#34383D70"
                style={styles.inputField}
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
        <Text style={styles.inputLabel}>Phone</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                type="text"
                placeholder="Phone"
                placeholderTextColor="#34383D70"
                style={styles.inputField}
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
  );
};

export default EditTenant;
