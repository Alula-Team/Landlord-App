import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import { styles, pickerStyles } from "./styles";
import { SelectOptions, FakerOptions } from "../../forms";

// Firebase
import { auth, db } from "../../firebase/firebase";

const EditTransaction = ({ navigation, route }) => {
  const {
    itemID,
    itemAmount,
    itemDate,
    itemDescription,
    itemPaymentMethod,
    itemTransactionCategory,
    itemTransactionType,
  } = route.params;

  const INITIAL_STATE = {
    amount: itemAmount,
    date: itemDate,
    description: itemDescription,
    paymentMethod: itemPaymentMethod,
    transactionCategory: itemTransactionCategory,
    transactionType: itemTransactionType,
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
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
      setValue("amount", itemAmount);
      setValue("date", itemDate);
      setValue("description", itemDescription);
      setValue("paymentMethod", itemPaymentMethod);
      setValue("transactionCategory", itemTransactionCategory);
      setValue("transactionType", itemTransactionType);
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
    console.log(updates);
    db.collection("transactions")
      .doc(itemID)
      .update(updates)
      .then(() => console.log(`Successfully updated yer stuffs!`))
      .catch((error) => console.error(error));
    navigation.navigate("ManageTransaction", {
      itemID: data.id,
      itemAmount: data.amount,
      itemDate: data.date,
      itemDescription: data.description,
      itemPaymentMethod: data.paymentMethod,
      itemTransactionCategory: data.transactionCategory,
      itemTransactionType: data.transactionType,
    });
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "Edit Transaction",
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
        <Text style={styles.sectionText}>Transaction Type</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <RNPickerSelect
              placeholder={{
                label: "Select Transaction",
                value: "",
                color: "white",
              }}
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
        {errors.payment && (
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

        {/* Category */}
        <Text style={styles.sectionText}>Category</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <RNPickerSelect
              placeholder={{
                label: "Select Category",
                value: "",
                color: "white",
              }}
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

        {/* Payment Method */}
        <Text style={styles.sectionText}>Payment Method</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <RNPickerSelect
              placeholder={{
                label: "Select Payment Method",
                value: "",
                color: "white",
              }}
              style={pickerStyles}
              value={value}
              onValueChange={onChange}
              items={SelectOptions.paymentMethods}
            />
          )}
          name="paymentMethod"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.paymentMethod && (
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

        {/* Amount */}
        <Text style={styles.sectionText}>Amount</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="i.e 1500"
                placeholderTextColor="#34383D70"
                style={styles.dateText}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="amount"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.amount && (
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

        {/* Description */}
        <Text style={styles.sectionText}>Description</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.textArea}>
              <TextInput
                type="text"
                placeholder="Enter Transaction Description ..."
                placeholderTextColor="#34383D70"
                style={{
                  color: "#34383D",
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: 12.5,
                  paddingTop: 10,
                }}
                multiline={true}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="description"
          rules={{ required: false }}
          defaultValue=""
        />

        {/* Date Paid */}
        <Controller
          control={control}
          render={() => (
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={styles.sectionText}>Date Paid:</Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                display="default"
                textColor="#fff"
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  width: "100%",
                }}
                onChange={handleDateChange}
              />
            </View>
          )}
          name="date"
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditTransaction;
