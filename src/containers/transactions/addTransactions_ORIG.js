import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";
// Forms
import { useForm, Controller } from "react-hook-form";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import { format, compareDesc } from "date-fns";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./trans-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddTransaction } from "../../redux/actions";

const AddTransactions = ({ stateProperties, addTransaction }) => {
  const navigation = useNavigation();

  const allAddresses = stateProperties.map((item) => {
    return {
      label: item.address,
      value: item.address,
      color: "white",
    };
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // const value = getValues("date");

  useEffect(() => {
    register({ name: "date" });
  }, [register]);

  const dateValue = watch("date");
  const handleChange = (e) => setValue("name", e.target.value);

  const [selectedDate, handleDateChange] = useState(new Date());

  // useEffect(() => {
  //   setDate(value || null);
  // }, [setDate, value]);

  const onSubmit = (data) => {
    // let month = data.date.getMonth();
    addTransaction(data);
    navigation.goBack();

    console.log(data);
  };

  // Date
  const [date, setDate] = useState(new Date("May 15,2002"));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
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
          {/* Transaction Type */}
          <Text style={styles.sectionText}>Transaction Type</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <RNPickerSelect
                placeholder={TransactionPlaceholder}
                style={pickerStyles}
                onValueChange={(value) => onChange(value)}
                items={[
                  { label: "Expense", value: "Expense", color: "white" },
                  { label: "Payment", value: "Payment", color: "white" },
                ]}
              />
            )}
            name="payment"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.payment && (
            <Text
              style={{
                color: "#f00",
                fontSize: 14,
                fontWeight: "600",
                paddingLeft: 30,
                paddingTop: 5,
              }}
            >
              This field is required
            </Text>
          )}
          {/* Category */}
          <Text style={styles.sectionText}>Category</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <RNPickerSelect
                placeholder={CategoryPlaceholder}
                style={pickerStyles}
                onValueChange={(value) => onChange(value)}
                items={[
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
                ]}
              />
            )}
            name="transactionCategory"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.transactionCategory && (
            <Text
              style={{
                color: "#f00",
                fontSize: 14,
                fontWeight: "600",
                paddingLeft: 30,
                paddingTop: 5,
              }}
            >
              This field is required
            </Text>
          )}
          {/* Property */}
          <Text style={styles.sectionText}>Property</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <RNPickerSelect
                placeholder={PropertyPlaceholder}
                style={pickerStyles}
                onValueChange={(value) => onChange(value)}
                items={[...allAddresses]}
              />
            )}
            name="address"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.address && (
            <Text
              style={{
                color: "#f00",
                fontSize: 14,
                fontWeight: "600",
                paddingLeft: 30,
                paddingTop: 5,
              }}
            >
              This field is required
            </Text>
          )}
          {/* Payment Method */}
          <Text style={styles.sectionText}>Payment Method</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <RNPickerSelect
                placeholder={PaymentPlaceholder}
                style={pickerStyles}
                onValueChange={(value) => onChange(value)}
                items={[
                  {
                    label: "Bank Transfer",
                    value: "Bank Transfer",
                    color: "white",
                  },
                  { label: "Cash", value: "Cash", color: "white" },
                  { label: "Check", value: "Check", color: "white" },
                  { label: "Other", value: "Other", color: "white" },
                ]}
              />
            )}
            name="paymentMethod"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.paymentMethod && (
            <Text
              style={{
                color: "#f00",
                fontSize: 14,
                fontWeight: "600",
                paddingLeft: 30,
                paddingTop: 5,
              }}
            >
              This field is required
            </Text>
          )}
          {/* Amount */}
          <Text style={styles.sectionText}>Amount</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <View style={styles.amountContainer}>
                <TextInput
                  type="text"
                  placeholder="i.e 1500"
                  placeholderTextColor="#ffffff80"
                  style={styles.dateText}
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  onChangeText={(value) => onChange(value)}
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
                color: "#f00",
                fontSize: 14,
                fontWeight: "600",
                paddingLeft: 30,
                paddingTop: 5,
              }}
            >
              This field is required
            </Text>
          )}

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={styles.sectionText}>Date Paid:</Text>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stateProperties: state.properties.properties,
  };
};

const actions = {
  addTransaction: doAddTransaction,
};

export default connect(mapStateToProps, actions)(AddTransactions);
