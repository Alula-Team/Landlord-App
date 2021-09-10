import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { SelectOptions, FakerOptions } from "../../forms";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";

// Faker
import faker from "faker";
faker.locale = "en_US";

// Firebase
import firebase, { auth, db } from "../../firebase/firebase";

// Style Sheet
import styles, { pickerStyles } from "./styles";

import { PropertiesContext } from "../../providers/PropertiesProvider";

const AddTenant = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const properties = useContext(PropertiesContext);

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

  const allProperties = properties.map((item) => {
    return {
      label: `${item.address} ${item.unit}`,
      value: {
        id: item.id,
        address: item.address,
        city: item.city,
        state: item.state,
        zip: item.zip,
        unit: item.unit,
      },
    };
  });

  const fakeIt = () => {
    setValue("name", faker.name.firstName() + " " + faker.name.lastName());
    setValue("email", faker.internet.email().toLowerCase());
    setValue("phone", faker.phone.phoneNumber("(###) ###-####"));
    setValue("author", auth.currentUser.uid);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("tenants").add(data);
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Add Tenant",
            style: {
              color: "#34383D",
              fontWeight: "600",
              fontSize: 20,
              paddingTop: 20,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#34383D80"
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
              <Text style={{ color: "#955C28", fontSize: 18, fontWeight: "600" }}>
                Save
              </Text>
            </TouchableOpacity>
          }
          containerStyle={{
            backgroundColor: "#fff",
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

          {/* TENANT INFORMATION */}
          <Text style={styles.inputLabel}>Tenant Information</Text>
          {/* First Name */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Tenant Name"
                  autoCapitalize='words'
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  placeholderTextColor="#34383D40"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="name"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10
              }}
            >
              This field is required
            </Text>
          )}

          {/* Email */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Email"
                  placeholderTextColor="#34383D40"
                  autoCapitalize='none'
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  keyboardType="email-address"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10,
              }}
            >
              This field is required
            </Text>
          )}
          
          {/* Phone Number */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Phone"
                  placeholderTextColor="#34383D40"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  keyboardType="phone-pad"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="phone"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.phone && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10,
              }}
            >
              This field is required
            </Text>
          )}

          {/* LEASING INFORMATION */}
          <Text style={styles.inputLabel}>Leasing Information</Text>
    
          {/* Property */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={{
                  label: "Select Property",
                  value: "selectProperty",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={allProperties}
              />
            )}
            name="property"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.property && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10
              }}
            >
              This field is required
            </Text>
          )}

          {/* Lease Length */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={{
                  label: "Select Leasing Length",
                  value: "selectLeasingLength",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.leasingLength}
              />
            )}
            name="leaseLength"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.leaseLength && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10
              }}
            >
              This field is required
            </Text>
          )}

          {/* Lease Type */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={{
                  label: "Select Leasing Type",
                  value: "selectLeasingType",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.leasingType}
              />
            )}
            name="leaseType"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.leaseType && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10
              }}
            >
              This field is required
            </Text>
          )}

          {/* Rent Due On */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={{
                  label: "Select Rent Due Date",
                  value: "selectRentDueDate",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.rentDueDate}
              />
            )}
            name="rentDueOn"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.rentDueOn && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10
              }}
            >
              This field is required
            </Text>
          )}

          {/* Rent Rate */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Rental Rate"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  keyboardType='number-pad'
                  placeholderTextColor="#34383D40"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="rentRate"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.rentRate && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10
              }}
            >
              This field is required
            </Text>
          )}

          {/* Security Deposit */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Security Deposit"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  keyboardType='number-pad'
                  placeholderTextColor="#34383D40"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="securityDeposit"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.securityDeposit && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: 10
              }}
            >
              This field is required
            </Text>
          )}

          {/* Start Date - Calendar */}
          <Controller
            control={control}
            render={() => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.inputLabel}>Start Date:</Text>
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

export default AddTenant;
