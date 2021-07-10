import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Firebase
import { firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

// Faker
import faker from "faker";
faker.locale = "en_US";

// Form Stuffs
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectOptions, FakerOptions } from "../../forms";

// Style Sheet
import { styles, pickerStyles } from "./styles";

const auth = firebase.auth();

const AddTransaction = ({ navigation }) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fakeIt = () => {
    setValue(
      "transactionType",
      faker.random.arrayElement(FakerOptions.transactionTypeArray)
    );
    setValue(
      "transactionCategory",
      faker.random.arrayElement(FakerOptions.transactionCategoryArray)
    );
    setValue("address", faker.random.arrayElement(addressArray));
    setValue(
      "paymentMethod",
      faker.random.arrayElement(FakerOptions.paymentMethodArray)
    );
    setValue(
      "amount",
      faker.datatype.number({ min: 640, max: 1650 }).toString()
    );
    setValue("description", faker.lorem.sentence());
    setValue("date", faker.date.past());
    setValue("author", auth.currentUser.uid);
  };

  // Date
  const onSubmit = (data) => {
    console.log(data);
    firestore.collection("transactions").add(data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        centerComponent={{
          text: "Add Transaction",
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
        <View>
          <Text style={styles.sectionText}>Transaction Type</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder="Select Transaction Type..."
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.paymentTypes}
              />
            )}
            name="transactionType"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.transactionType && (
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
        </View>
        <View>
          <Text style={styles.sectionText}>Category</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder="Select Category..."
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.transactionCategories}
              />
            )}
            name="transactionCategory"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.transactionCategory && (
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
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddTransaction;
