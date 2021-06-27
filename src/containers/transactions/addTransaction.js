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

const AddTransaction = ({ navigation }) => {
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
  const TransactionPlaceholder = {
    label: "Select Transaction Type...",
    value: null,
    color: "#34383D80",
  };
  const PropertyPlaceholder = {
    label: "Select Property...",
    value: null,
    color: "#34383D80",
  };
  const PaymentPlaceholder = {
    label: "Select Payment Method...",
    value: null,
    color: "#34383D80",
  };
  const CategoryPlaceholder = {
    label: "Select Category...",
    value: null,
    color: "#34383D80",
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
                  style={styles.dateText}
                  multiline={true}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="amount"
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

          {/* Upload Receipt - PDF, JPG or PNG */}
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              marginTop: 50,
              marginBottom: 30,
              height: 45,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Feather 
                name='upload' 
                size={18} 
                color="#34383D80" 
                style={{ 
                  alignSelf: "center", 
                  marginLeft: 20 
                }} 
              />
              <Text 
                style={{ 
                  alignSelf: 'center', 
                  color: '#34383D', 
                  fontSize: 16, 
                  fontWeight: '600',
                  marginLeft: 10,
                  textDecorationLine: 'underline'
                }}
              >
                Upload Receipt
              </Text>
              <Text 
                style={{ 
                  alignSelf: 'center', 
                  color: '#34383D90', 
                  fontSize: 14, 
                  fontWeight: '600',
                  marginLeft: 5,
                }}
              >
                - PDF, JPG or PNG
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return { stateProperties: state.properties.properties };
};

export default AddTransaction;
