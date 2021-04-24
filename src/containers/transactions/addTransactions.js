import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./trans-styles";

import { connect } from "react-redux";

import { doAddTransaction } from "../../redux/actions";

const AddTransactions = (addTransaction) => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();
  //   const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => addTransaction(data);

  // For Picker Select
  // Styles
  const pickerStyles = {
    inputIOS: {
      marginHorizontal: 30,
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
      marginHorizontal: 30,
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
        <KeyboardAwareScrollView style={{ flex: 1 }}>
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
                  { label: "Expense", value: "expense", color: "white" },
                  { label: "Payment", value: "payment", color: "white" },
                ]}
              />
            )}
            name="transactionType"
            rules={{ required: true }}
            defaultValue=""
          />

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
                  { label: "Appraisal", value: "appraisal", color: "white" },
                  { label: "Cleaning", value: "cleaning", color: "white" },
                  { label: "Inspection", value: "inspection", color: "white" },
                  { label: "Marketing", value: "marketing", color: "white" },
                  {
                    label: "Renovations",
                    value: "renovations",
                    color: "white",
                  },
                  {
                    label: "Rent Payment",
                    value: "rent-payment",
                    color: "white",
                  },
                  { label: "Repairs", value: "repairs", color: "white" },
                  {
                    label: "Security Deposit",
                    value: "secuirty-deposit",
                    color: "white",
                  },
                  {
                    label: "Tax Services",
                    value: "tax-services",
                    color: "white",
                  },
                ]}
              />
            )}
            name="transactionCategory"
            rules={{ required: true }}
            defaultValue=""
          />

          {/* Property */}
          <Text style={styles.sectionText}>Property</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <RNPickerSelect
                placeholder={PropertyPlaceholder}
                style={pickerStyles}
                onValueChange={(value) => onChange(value)}
                items={[
                  { label: "Property", value: "property", color: "white" },
                ]}
              />
            )}
            name="property"
            rules={{ required: true }}
            defaultValue=""
          />

          {/* Date Paid */}
          <Text style={styles.sectionText}>Date Paid</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <View style={styles.dateContainer}>
                <TextInput
                  type="text"
                  placeholder="e.g mm/dd/yyyy"
                  placeholderTextColor="#ffffff80"
                  style={styles.dateText}
                  keyboardAppearance="dark"
                  keyboardType="phone-pad"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              </View>
            )}
            name="date"
            rules={{ required: true }}
            defaultValue=""
          />

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
                    value: "bank-transfer",
                    color: "white",
                  },
                  { label: "Cash", value: "cash", color: "white" },
                  { label: "Check", value: "check", color: "white" },
                  { label: "Other", value: "other", color: "white" },
                ]}
              />
            )}
            name="paymentMethod"
            rules={{ required: true }}
            defaultValue=""
          />

          {/* Attachement */}
          {/* <Text style={styles.sectionText}>Attachements:</Text>
                    <TouchableOpacity style={styles.upload}>
                        <Feather name='upload' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                        <Text style={{color: '#fff', marginLeft: 10, fontSize: 16, fontWeight: '600', alignSelf: 'center'}}>Upload Attachement</Text>
                    </TouchableOpacity> */}

          {/* Notes */}
          {/* <Text style={styles.sectionText}>Notes:</Text>
                    <View>
                        <TextInput 
                            style={{
                                marginTop: 10,
                                marginLeft: 30,
                                marginBottom: 50,
                                color:'#fff',
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                            placeholder="Enter Notes (optional)..."
                            placeholderTextColor='#ffffff90'
                            keyboardAppearance='dark'
                            autoCapitalize='none'
                            autoCorrect={false}
                            multiline={true}
                        />
                    </View> */}
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const actions = {
  addTransaction: doAddTransaction,
};

export default connect(null, actions)(AddTransactions);
