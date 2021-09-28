import React, { useEffect } from "react";
import { Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, Controller } from "react-hook-form";
import { APMError, APMText } from "../../forms/APMFormFields";

import faker from "faker";
faker.locale = "en_US";


// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import styles from "./styles";
import DetailScreen from "../constants/DetailScreen";
// Firebase
import { db } from "../../firebase";
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import LoadingScreen from "../constants/LoadingScreen";
import ErrorScreen from "../constants/ErrorScreen";
import AddEditScreen from "../constants/AddEditScreen";
import TheProperty from "./TheProperty";

const EditProperty = ({ navigation, route }) => {
  const { itemID } = route.params;
  const propRef = db.collection('properties').doc(itemID);
  const [property, loading, error] = useDocumentDataOnce(propRef, { idField: "id" });

  if (error) {
    return <ErrorScreen error={error} />
  }
  if (loading) {
    return <LoadingScreen />
  }

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

    navigation.navigate("PropertyDetail", { itemID });
  };
  // const { address, city, state, unit, zip } = property;
  // const INITIAL_STATE = {
  //   address,
  //   city,
  //   state,
  //   unit,
  //   zip,
  // };

  // useEffect(() => {
  //   function fillForm() {
  //     setValue("address", address);
  //     setValue("city", city);
  //     setValue("state", state);
  //     setValue("zip", zip);
  //     setValue("unit", unit);
  //   }
  //   fillForm();
  // }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <AddEditScreen title="Edit Property" onGoBack={() => navigation.navigate()} onSubmit={handleSubmit(onSubmit)} >
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
          defaultValue={address}
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
    </AddEditScreen>
  )
};

export default EditProperty;
