import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, Controller } from "react-hook-form";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { PropertySelect } from "../../forms";
import { APMError, APMEmail, APMNumber, APMPhone, APMText } from "../../forms/APMFormFields";

import styles, { pickerStyles } from "./styles";
// Firebase
import firebase, { auth, db } from "../../firebase";
import AddEditScreen from "../constants/AddEditScreen";

const EditTenant = ({ navigation, route }) => {
  const { itemID } = route.params;

  const tenantRef = db.collection('tenants').doc(itemID);
  const [tenant, loading, error] = useDocumentDataOnce(tenantRef, { idField: "id" });

  let INITIAL_STATE = {};

  if (loading) {
    return <Text>Loading ...</Text>
  }

  if (tenant) {
    const { property: { address, unit }, name, email, phone } = tenant;

    INITIAL_STATE = {
      property: `${address} ${unit}`,
      name,
      email,
      phone
    };

    const {
      control,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm({
      defaultValues: INITIAL_STATE
    });

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
    //     setValue("name", name);
    //     setValue("email", email);
    //     setValue("phone", phone);
    //   }
    //   fillForm();
    // }, []);

    const onSubmit = (data) => {
      let updates = returnFinalObject(INITIAL_STATE, data);
      data.id = itemID;
      console.log(data);
      db.collection("tenants")
        .doc(itemID)
        .update(updates)
        .then(() => console.log(`Successfully updated yer stuffs!`))
        .catch((error) => console.error(error));
      navigation.navigate("TenantDetail", {
        itemID: data.id,
        itemName: data.name,
        itemEmail: data.email,
        itemPhone: data.phone,
      });
    };

    return (
      <AddEditScreen title="Edit Tunant" onGoBack={() => navigation.goBack()} onSubmit={onSubmit}>
        {/* TENANT INFORMATION */}
        <Text style={styles.inputLabel}>Tenant Information</Text>
        {/* Tenant Name */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMText value={value} onChange={onChange} placeholder="Tenant Name" />
          )}
          name="name"
          rules={{ required: true }}
        />
        {errors.name && (
          <APMError />
        )}
        {/* Email */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMEmail value={value} onChange={onChange} />
          )}
          name="email"
          rules={{ required: true }}
        />
        {errors.email && (
          <APMError />
        )}
        {/* Phone Number */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMPhone value={value} onChange={onChange} />
          )}
          name="phone"
          rules={{ required: true }}
        />
        {errors.phone && (
          <APMError />
        )}
        {/* LEASING INFORMATION */}
        <Text style={styles.inputLabel}>Leasing Information</Text>
        {/* Property */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <PropertySelect value={value} onChange={onChange} />
          )}
          name="property"
          rules={{ required: false }}
        />
        {errors.property && (
          <APMError />
        )}
        {/* Lease Start Date */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMNumber value={value} onChange={onChange} placeholder="Move-In Date - MM/DD/YYYY" />
          )}
          name="leaseStartDate"
          rules={{ required: false }}
        />
        {errors.leaseStartDate && (
          <APMError />
        )}
        {/* Lease Length */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMNumber value={value} onChange={onChange} placeholder="Lease Length - Months" />
          )}
          name="leaseLength"
          rules={{ required: false }}
        />
        {errors.leaseLength && (
          <APMError />
        )}
        {/* Lease Type */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMSelect value={value} onChange={onChange} placeholder="Select Leasing Type" items={SelectOptions.leasingType} />
          )}
          name="leaseType"
          rules={{ required: false }}
        />
        {errors.leaseType && (
          <APMError />
        )}
        {/* Rent Due On */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMSelect value={value} onChange={onChange} placeholder="Select Rent Due Date" items={SelectOptions.rentDueDate} />
          )}
          name="rentDueOn"
          rules={{ required: false }}
        />
        {errors.rentDueOn && (
          <APMError />
        )}
        {/* Rent Rate */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMNumber value={value} onChange={onChange} placeholder="Rental Rate" />
          )}
          name="rentRate"
          rules={{ required: false }}
        />
        {errors.rentRate && (
          <APMError />
        )}
        {/* Security Deposit */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMNumber value={value} onChange={onChange} placeholder="Security Deposit" />
          )}
          name="securityDeposit"
          rules={{ required: false }}
        />
        {errors.securityDeposit && (
          <APMError />
        )}
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
      </AddEditScreen>
    );
  }
};

export default EditTenant;
