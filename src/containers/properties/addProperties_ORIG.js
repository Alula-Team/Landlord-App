import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { useForm, Controller, useFieldArray } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./prop-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddProperty } from "../../redux/actions";

// THINGS I NEED
// Function to add more units when button is pressed
// Update handleSubmit function to reset form when submitted.

const AddProperties = ({ addProperty }) => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "units",
  });

  const addItem = (data) => {
    addProperty(data);
    navigation.goBack();
  };

  const onSubmit = (data) => console.log(data);

  const logItem = (data) => {
    console.log(data);
  };
  // For Picker Select
  // Styles
  const pickerStyles = {
    inputIOS: {
      marginHorizontal: 20,
      marginTop: 10,
      marginBottom: 20,
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
      marginTop: 10,
      marginBottom: 20,
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
  // Placeholder
  const StatePlaceholder = {
    label: "Select State...",
    value: null,
    color: "#fff",
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        centerComponent={{
          text: "Add Property",
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
            onPress={handleSubmit(addItem)}
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

      <KeyboardAwareScrollView>
        {/* Form */}
        <Text style={styles.sectionText}>Property Address</Text>
        {/* Street Address */}
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <View style={styles.addInputContainer}>
              <TextInput
                type="text"
                placeholder="Enter Street Address..."
                placeholderTextColor="#ffffff80"
                style={styles.propertyInput}
                keyboardAppearance="dark"
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </View>
          )}
          name="address"
          rules={{ required: true }}
          defaultValue=""
        />

        {/* CITY */}
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <View style={styles.addInputContainer}>
              <TextInput
                type="text"
                placeholder="Enter City..."
                placeholderTextColor="#ffffff80"
                style={styles.propertyInput}
                keyboardAppearance="dark"
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </View>
          )}
          name="city"
          rules={{ required: true }}
          defaultValue=""
        />

        {/* STATE */}
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <RNPickerSelect
              placeholder={StatePlaceholder}
              style={pickerStyles}
              onValueChange={(value) => onChange(value)}
              items={[
                { label: "A. Samoa", value: "A. Samoa", color: "white" },
                { label: "AK", value: "AK", color: "white" },
                { label: "AL", value: "AL", color: "white" },
                { label: "AR", value: "AR", color: "white" },
                { label: "AZ", value: "AZ", color: "white" },
                { label: "CA", value: "CA", color: "white" },
                { label: "CO", value: "CO", color: "white" },
                { label: "CT", value: "CT", color: "white" },
                { label: "DC", value: "DC", color: "white" },
                { label: "DE", value: "DE", color: "white" },
                { label: "FL", value: "FL", color: "white" },
                { label: "GA", value: "GA", color: "white" },
                { label: "Guam", value: "Guam", color: "white" },
                { label: "HI", value: "HI", color: "white" },
                { label: "IA", value: "IA", color: "white" },
                { label: "ID", value: "ID", color: "white" },
                { label: "IL", value: "IL", color: "white" },
                { label: "IN", value: "IN", color: "white" },
                { label: "KS", value: "KS", color: "white" },
                { label: "KY", value: "KY", color: "white" },
                { label: "LA", value: "LA", color: "white" },
                { label: "MA", value: "MA", color: "white" },
                { label: "MD", value: "MD", color: "white" },
                { label: "ME", value: "ME", color: "white" },
                { label: "MI", value: "MI", color: "white" },
                { label: "MO", value: "MO", color: "white" },
                { label: "MN", value: "MN", color: "white" },
                { label: "MS", value: "MS", color: "white" },
                { label: "MT", value: "MT", color: "white" },
                { label: "NC", value: "NC", color: "white" },
                { label: "ND", value: "ND", color: "white" },
                { label: "NE", value: "NE", color: "white" },
                { label: "NH", value: "NH", color: "white" },
                { label: "NJ", value: "NJ", color: "white" },
                { label: "NM", value: "NM", color: "white" },
                { label: "NV", value: "NV", color: "white" },
                { label: "NY", value: "NY", color: "white" },
                { label: "OH", value: "OH", color: "white" },
                { label: "OK", value: "OK", color: "white" },
                { label: "OR", value: "OR", color: "white" },
                { label: "PA", value: "PA", color: "white" },
                {
                  label: "Puerto Rico",
                  value: "Puerto Rico",
                  color: "white",
                },
                { label: "RI", value: "RI", color: "white" },
                { label: "SC", value: "SC", color: "white" },
                { label: "SD", value: "SD", color: "white" },
                { label: "TN", value: "TN", color: "white" },
                { label: "TX", value: "TX", color: "white" },
                { label: "UT", value: "UT", color: "white" },
                { label: "VA", value: "VA", color: "white" },
                { label: "VT", value: "VT", color: "white" },
                { label: "WA", value: "WA", color: "white" },
                { label: "WI", value: "WI", color: "white" },
                { label: "WV", value: "WV", color: "white" },
                { label: "WY", value: "WY", color: "white" },
              ]}
            />
          )}
          name="states"
          rules={{ required: true }}
          defaultValue=""
        />
        {/* ZIP CODE */}
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <View style={styles.addInputContainer}>
              <TextInput
                type="text"
                placeholder="Enter Zip Code..."
                placeholderTextColor="#ffffff80"
                style={styles.propertyInput}
                keyboardAppearance="dark"
                keyboardType="number-pad"
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </View>
          )}
          name="zipCode"
          rules={{ required: true }}
          defaultValue=""
        />

        {/* Units */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.sectionText}>Unit(s)</Text>
          <Text style={{ marginTop: 15, marginLeft: 10, color: "#ffffff80" }}>
            (if applicable)
          </Text>
        </View>
        <Text style={{ color: "#ffffff80", marginLeft: 20 }}>
          Please include the appropriate label to each unit.
        </Text>
        {fields.map((item, index) => (
          <Controller
            key={item.id}
            control={control}
            render={({ onChange, value }) => (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.addUnitInput}>
                  <TextInput
                    type="text"
                    placeholder="i.e Apt, Unit, Suite, etc..."
                    placeholderTextColor="#ffffff80"
                    style={styles.propertyInput}
                    keyboardAppearance="dark"
                    onChangeText={(value, text) => onChange(value, text, key)}
                    value={value}
                  />
                </View>
                <TouchableOpacity
                  style={{ alignSelf: "center", marginBottom: 12.5 }}
                  onPress={() => remove(index)}
                >
                  <Feather name="trash" color="#fff" size={20} />
                </TouchableOpacity>
              </View>
            )}
            name={`units.${index}`}
            defaultValue=""
          />
        ))}
        {/* Add Units Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={append({ units: "" })}
        >
          <Feather name="plus" size={25} style={styles.addButtonText} />
          <Text style={styles.addButtonText}>Add Unit</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const actions = {
  addProperty: doAddProperty,
};

export default connect(null, actions)(AddProperties);
