import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, useFieldArray, Controller } from "react-hook-form";

// Firebase
import { addProperty, firestore } from "../../firebase/firebase";


// Google Places
import { apiKey } from '../../googlePlaces/googlePlacesConfig';

import faker from "faker";
faker.locale = "en_US";


// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./prop-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddProperty } from "../../redux/actions";

const AddProperty = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [unit, setUnit] = useState([]);

  const [property, setProperty] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    unit: "",
  });

  const emptyState = () => {
    setProperty({
      address: "",
      city: "",
      state: "",
      zip: "",
      unit: [],
    });
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "units",
  });

  const fakeIt = () => {
    setValue("address", faker.address.streetAddress());
    setValue("city", faker.address.city());
    setValue("state", "NV");
    setValue("zip", faker.address.zipCode());
  };

  const onSubmit = (data) => {
    firestore.collection("properties").add(data);
    navigation.goBack();
    // emptyState();
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

      <KeyboardAwareScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: "#5858FB",
            margin: 30,
            padding: 15,
            borderRadius: 10,
          }}
          // onPress={}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
            onPress={fakeIt}
          >
            Fake It!
          </Text>
        </TouchableOpacity>
        <Text style={styles.sectionText}>Property Address</Text>
        {/* Street Address */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.addInputContainer}>
              <TextInput
                type="text"
                placeholder="Enter Property Address..."
                placeholderTextColor="#ffffff80"
                style={styles.propertyInput}
                keyboardAppearance="dark"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="address"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.address && (
          <Text
            style={{
              color: "red",
              paddingLeft: 35,
              marginTop: -15,
              marginBottom: -2,
            }}
          >
            This field is required
          </Text>
        )}

        {/* City */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.addInputContainer}>
              <TextInput
                type="text"
                placeholder="Enter City..."
                placeholderTextColor="#ffffff80"
                style={styles.propertyInput}
                keyboardAppearance="dark"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="city"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.city && (
          <Text
            style={{
              color: "red",
              paddingLeft: 35,
              marginTop: -15,
              marginBottom: -2,
            }}
          >
            This field is required
          </Text>
        )}
        {/* STATE */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <RNPickerSelect
              placeholder={StatePlaceholder}
              style={pickerStyles}
              onValueChange={onChange}
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
          name="state"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.state && (
          <Text
            style={{
              color: "red",
              paddingLeft: 35,
              marginTop: -15,
              marginBottom: -2,
            }}
          >
            This field is required
          </Text>
        )}
        {/* ZIP CODE */}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.addInputContainer}>
              <TextInput
                type="text"
                placeholder="Enter Zip Code..."
                placeholderTextColor="#ffffff80"
                style={styles.propertyInput}
                keyboardAppearance="dark"
                keyboardType="number-pad"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="zip"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.zip && (
          <Text
            style={{
              color: "red",
              paddingLeft: 35,
              marginTop: -15,
              marginBottom: -2,
            }}
          >
            This field is required
          </Text>
        )}

        {/* Units */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => append({ number: "Something" })}
        >
          <Text style={styles.addButtonText}>
            + Add Unit(s) to this Property
          </Text>
        </TouchableOpacity>
        {fields.map((item, index) => (
          <Controller
            key={item.id}
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.addUnitInput}>
                  <TextInput
                    type="text"
                    placeholder="i.e Apt, Unit, Suite, etc..."
                    placeholderTextColor="#ffffff80"
                    style={styles.propertyInput}
                    keyboardAppearance="dark"
                    onChangeText={onChange}
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
            name={`units[${index}].number`}
            rules={{ required: true }}
            defaultValue=""
          />
        ))}
      </KeyboardAwareScrollView>
    </View>
  );
};

// const actions = {
//   addProperty: doAddProperty,
// };

export default AddProperty;
