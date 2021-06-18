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
import styles from "./trans-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddTransaction } from "../../redux/actions";

const auth = firebase.auth();

const AddTransactions = ({ addTransaction }) => {
  const navigation = useNavigation();

  const [properties, setProperties] = useState([]);

  let unsubscribe = null;
  useEffect(() => {
    let mounted = true;
    async function getStuffs() {
      unsubscribe = firestore
        .collection("properties")
        .onSnapshot((snapshot) => {
          const properties = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          if (mounted) setProperties(properties);
        });
    }
    getStuffs();
    return function cleanup() {
      unsubscribe();
      mounted = false;
    };
  }, []);

  const transactionTypeArray = ["Expense", "Payment"];
  const transactionCategoryArray = [
    "Appraisal",
    "Cleaning",
    "Inspection",
    "Marketing",
    "Renovations",
    "Rent Payment",
    "Report",
    "Repairs",
    "Security Deposit",
    "Tax Services",
  ];
  const paymentMethodArray = ["Bank Transfer", "Cash", "Check", "Other"];

  const addressArray = properties.map((property) => {
    return property.address;
  });

  const fakeIt = () => {
    setValue(
      "transactionType",
      faker.random.arrayElement(transactionTypeArray)
    );
    setValue(
      "transactionCategory",
      faker.random.arrayElement(transactionCategoryArray)
    );
    setValue("address", faker.random.arrayElement(addressArray));
    setValue("paymentMethod", faker.random.arrayElement(paymentMethodArray));
    setValue(
      "amount",
      faker.datatype.number({ min: 640, max: 1650 }).toString()
    );
    setValue("date", faker.date.past());
    setValue("author", auth.currentUser.uid);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const allProperties = properties.map((item) => {
    return {
      label: item.address,
      value: item.address,
    };
  });

  const paymentTypes = [
    { label: "Expense", value: "Expense", color: "white" },
    { label: "Payment", value: "Payment", color: "white" },
  ];

  const transactionCategories = [
    { label: "Appraisal", value: "Appraisal", color: "white" },
    { label: "Cleaning", value: "Cleaning", color: "white" },
    { label: "Inspection", value: "Inspection", color: "white" },
    { label: "Marketing", value: "Marketing", color: "white" },
    {
      label: "Renovations",
      value: "Renovations",
      color: "white",
    },
    {
      label: "Rent Payment",
      value: "Rent Payment",
      color: "white",
    },
    { label: "Repairs", value: "Repairs", color: "white" },
    {
      label: "Security Deposit",
      value: "Secuirty Deposit",
      color: "white",
    },
    {
      label: "Tax Services",
      value: "Tax Services",
      color: "white",
    },
  ];

  const paymentMethods = [
    {
      label: "Bank Transfer",
      value: "Bank Transfer",
      color: "white",
    },
    { label: "Cash", value: "Cash", color: "white" },
    { label: "Check", value: "Check", color: "white" },
    { label: "Other", value: "Other", color: "white" },
  ];

  // const makeDate = (dateObj) => {
  //   const year = dateObj.getFullYear();
  //   const day = dateObj.getDate();
  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const month = months[dateObj.getMonth()];
  //   return Date.parse(`${month} ${day}, ${year}`);
  // };

  // const addItem = (data) => {
  //   makeDate(data.date);
  //   addTransaction(data);
  //   navigation.goBack();
  // };

  // Date
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

  const onSubmit = (data) => {
    console.log(data);
    // data.date = new Date(data.date).toLocaleDateString("en-us", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });
    firestore.collection("transactions").add(data);
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
  // Placeholders
  const TransactionPlaceholder = {
    label: "Select Transaction Type...",
    value: null,
    color: "#fff",
  };
  const PropertyPlaceholder = {
    label: "Select Property...",
    value: null,
    color: "#fff",
  };
  const PaymentPlaceholder = {
    label: "Select Payment Method...",
    value: null,
    color: "#fff",
  };
  const CategoryPlaceholder = {
    label: "Select Category...",
    value: null,
    color: "#fff",
  };

  return (
    <>
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
          {/* Transaction Type */}
          <Text style={styles.sectionText}>Transaction Type</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={TransactionPlaceholder}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={paymentTypes}
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
                placeholder={CategoryPlaceholder}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={transactionCategories}
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
            defaultValue="108 Verygold Lane"
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
          {/* Payment Method */}
          <Text style={styles.sectionText}>Payment Method</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={PaymentPlaceholder}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={paymentMethods}
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
              <View style={styles.amountContainer}>
                <TextInput
                  type="text"
                  placeholder="i.e 1500"
                  placeholderTextColor="#ffffff80"
                  style={styles.dateText}
                  keyboardAppearance="dark"
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
    </>
  );
};

const mapStateToProps = (state) => {
  return { stateProperties: state.properties.properties };
};

const actions = {
  addTransaction: doAddTransaction,
};

export default connect(mapStateToProps, actions)(AddTransactions);
