import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import { styles, pickerStyles } from "./styles";
import { SelectOptions, FakerOptions } from "../../forms";
import { APMError, APMSelect, APMText, APMTextarea } from "../../forms/APMFormFields";
import { PropertySelect } from "../../forms";

// Firebase
import { auth, db } from "../../firebase";
import AddEditScreen from "../constants/AddEditScreen";
import UploadReceipt from "../constants/uploadImage";

import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';

const EditTransaction = ({ navigation, route }) => {
  const { itemID } = route.params;

  const transRef = db.collection("transactions").doc(itemID);
  const [transaction, loading, error] = useDocumentDataOnce(transRef, { idField: "id" });

  // const INITIAL_STATE = {
  //   property: {
  //     ...theProperty,
  //   },
  //   ...theItem,
  // };

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

  // useEffect(() => {
  //   function fillForm() {
  //     setValue("amount", itemAmount);
  //     setValue("date", itemDate);
  //     setValue("description", itemDescription);
  //     setValue("paymentMethod", itemPaymentMethod);
  //     setValue("transactionCategory", itemTransactionCategory);
  //     setValue("transactionType", itemTransactionType);
  //   }
  //   fillForm();
  // }, []);

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
    navigation.navigate("TransactionDetail", { itemID: data.id });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return `Error: ${error.message}`;
  }

  if (transaction) {
    const { property: { address, city, state, unit, zip }, amount, date, description, paymentMethod, transactionCategory, transactionType } = transaction;
    return (
      <AddEditScreen title="Edit Transaction" onGoBack={() => navigation.goBack()} onSubmit={onSubmit}>
        <KeyboardAwareScrollView>
          {/* Transaction Type */}
          <Text style={styles.inputLabel}>Transaction Type</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMSelect value={value} onChange={onChange} placeholder="Select Transaction" items={SelectOptions.paymentTypes} />
            )}
            name="transactionType"
            rules={{ required: true }}
          />
          {
            errors.payment && (
              <APMError />
            )
          }

          {/* Category */}
          <Text style={styles.inputLabel}>Category</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMSelect value={value} onChange={onChange} placeholder="Select Category" items={SelectOptions.transactionCategories} />
            )}
            name="transactionCategory"
            rules={{ required: true }}
          />
          {errors.transactionCategory && (
            <APMError />
          )}

          {/* Property */}
          <Text style={styles.inputLabel}>Property</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <PropertySelect value={value} onChange={onChange} />
            )}
            name="property"
            rules={{ required: true }}
          />
          {errors.property && (
            <APMError />
          )}

          {/* Payment Method */}
          <Text style={styles.inputLabel}>Payment Method</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMSelect value={value} onChange={onChange} placeholder="Select Payment Method" items={SelectOptions.paymentMethods} />
            )}
            name="paymentMethod"
            rules={{ required: true }}
          />
          {errors.paymentMethod && (
            <APMError />
          )}

          {/* Amount */}
          <Text style={styles.inputLabel}>Amount</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMText value={value} onChange={onChange} placeholder="i.e. 1500" />
            )}
            name="amount"
            rules={{ required: true }}
          />
          {errors.amount && (
            <APMError />
          )}

          {/* Date Paid */}
          {/* <Text style={styles.inputLabel}>Date Paid</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMNumber value={value} onChange={onChange} placeholder="MM/DD/YYYY" />
            )}
            name="date"
            rules={{ required: false }}
          />
          {errors.date && (
            <APMError />
          )} */}

          {/* Description */}
          <Text style={styles.inputLabel}>Description</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMTextarea value={value} onChange={onChange} placeholder="Enter Transaction Description..." />
            )}
            name="description"
            rules={{ required: false }}
          />
          {errors.description && (
            <APMError />
          )}

          {/* Upload Recipt*/}
          <Text style={styles.inputLabel}>Upload Receipt: </Text>
          <UploadReceipt />
        </KeyboardAwareScrollView>
      </AddEditScreen>
    );
  }
};

export default EditTransaction;
