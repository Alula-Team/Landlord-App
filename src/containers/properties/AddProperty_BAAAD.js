import React, { useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AddScreen from '../constants/AddScreen';
// Form
import { useForm, Controller } from "react-hook-form";
import { APMText, APMError } from "../../forms/APMFormFields";
import AddScreenHeader from "../constants/AddScreenHeader";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import styles from "./styles";

// Firebase
import { db } from "../../firebase";

const AddProperty = ({ navigation, route }) => {
  // const { itemID } = route.params;

  // const INITIAL_STATE = {
  //   address: itemAddress,
  //   city: itemCity,
  //   state: itemState,
  //   unit: itemUnit,
  //   zip: itemZip,
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
  //     setValue("address", itemAddress);
  //     setValue("city", itemCity);
  //     setValue("state", itemState);
  //     setValue("zip", itemZip);
  //     setValue("unit", itemUnit);
  //   }
  //   fillForm();
  // }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let updates = returnFinalObject(INITIAL_STATE, data);
    data.id = itemID;

    let theProperty = db.collection("properties").doc(itemID);

    theProperty
      .update(updates)
      .then(() => console.log(`Successfully update yer property`));

    let theTenants = db
      .collection("tenants")
      .where("property.id", "==", data.id);

    theTenants.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({ property: updates });
      });
    });

    let theTransactions = db
      .collection("transactions")
      .where("property.id", "==", data.id);

    theTransactions.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({ property: updates });
      });
    });

    navigation.navigate("PropertyDetail", {
      itemID: data.id,
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
      {/* Header */}
      <AddScreenHeader title="Add Property" onGoBack={() => navigation.goBack()} onSubmit={onSubmit} />
      {/* Content */}
      <KeyboardAwareScrollView>
        {/* Address */}
        <Text style={styles.inputLabel}>Address</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMText value={value} onChange={onChange} placeholder="Address..." />
          )}
          name="address"
          rules={{ required: true }}
        />
        {errors.address && (
          <APMError />
        )}
        {/* City */}
        <Text style={styles.inputLabel}>City</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMText value={value} onChange={onChange} placeholder="City..." />
          )}
          name="city"
          rules={{ required: true }}
        />
        {errors.city && (
          <APMError />
        )}
        {/* State */}
        <Text style={styles.inputLabel}>State</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMText value={value} onChange={onChange} placeholder="State..." />
          )}
          name="state"
          rules={{ required: true }}
        />
        {errors.state && (
          <APMError />
        )}
        {/* Zip */}
        <Text style={styles.inputLabel}>Zip Code</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMText value={value} onChange={onChange} placeholder="Zip..." />
          )}
          name="zip"
          rules={{ required: true }}
        />
        {errors.zip && (
          <APMError />
        )}
        {/* Unit */}
        <Text style={styles.inputLabel}>Unit</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMText value={value} onChange={onChange} placeholder="Unit..." />
          )}
          name="unit"
          rules={{ required: false }}
        />
        {errors.unit && (
          <APMError />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddProperty;
