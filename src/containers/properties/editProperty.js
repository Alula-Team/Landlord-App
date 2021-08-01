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

const EditProperty = ({ navigation, route }) => {
  const { itemID, itemAddress, itemCity, itemState, itemUnit, itemZip } =
    route.params;

  const INITIAL_STATE = {
    address: itemAddress,
    city: itemCity,
    state: itemState,
    unit: itemUnit,
    zip: itemZip,
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
      setValue("address", itemAddress);
      setValue("city", itemCity);
      setValue("state", itemState);
      setValue("zip", itemZip);
      setValue("unit", itemUnit);
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
    db.collection("properties")
      .doc(itemID)
      .update(updates)
      .then(() => console.log(`Successfully updated yer stuffs!`))
      .catch((error) => console.error(error));
    navigation.navigate("PropertyDetail", {
      itemID: data.id,
      itemAddress: data.address,
      itemUnit: data.unit,
      itemCity: data.city,
      itemState: data.state,
      itemZip: data.zip,
    });
  };

  // Placeholder
  const StatePlaceholder = {
    label: "Select State...",
    value: null,
    color: "#34383D",
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "Edit property",
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <Text style={styles.inputLabel}>Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Address..."
                  placeholderTextColor="#34383D70"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
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
              marginTop: -15,
              marginBottom: -2,
            }}
          >
            This field is required
          </Text>
        )}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <Text style={styles.inputLabel}>City</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="City..."
                  placeholderTextColor="#34383D70"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
          )}
          name="city"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.city && (
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <Text style={styles.inputLabel}>State</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="State..."
                  placeholderTextColor="#34383D70"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
          )}
          name="state"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.state && (
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <Text style={styles.inputLabel}>Zip Code</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Zip..."
                  placeholderTextColor="#34383D70"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
          )}
          name="zip"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.zip && (
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <Text style={styles.inputLabel}>Unit</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Unit..."
                  placeholderTextColor="#34383D70"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
          )}
          name="unit"
          rules={{ required: false }}
          defaultValue=""
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProperty;
