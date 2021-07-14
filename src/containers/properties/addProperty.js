import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, useFieldArray, Controller } from "react-hook-form";

// Firebase
import { addProperty, firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

// Google Places
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GOOGLE_PLACES_API_KEY from "../../googlePlaces";
import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./prop-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddProperty } from "../../redux/actions";
import { onChange } from "react-native-reanimated";

const auth = firebase.auth();

const AddProperty = ({ navigation }) => {
  const mapRef = useRef("NY");
  const stateRef = useRef("NY");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [stateErrors, setStateErrors] = useState([]);
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

  const breakIntoUnits = (data) => {
    let addresses = [];
    for (var i = 0; i < data.units.length; i++) {
      addresses.push({
        address: data.address,
        author: data.author,
        city: data.city,
        state: data.state,
        unit: data.units[i].number,
        vacant: data.vacant,
        zip: data.zip,
      });
    }
    return addresses;
  };

  const onSubmit = (data) => {
    if (data.units.length > 0) {
      const datums = breakIntoUnits(data);
      datums.forEach((datum) => {
        firestore.collection("properties").add(datum);
      });
    } else firestore.collection("properties").add(data);
    navigation.goBack();
  };

  // For Picker Select
  // Styles
  const pickerStyles = {
    inputIOS: {
      marginHorizontal: 20,
      marginTop: 10,
      marginBottom: 20,
      borderColor: "#34383D",
      borderRadius: 10,
      borderWidth: 1,
      height: 45,
      flexDirection: "row",
      color: "#34383D",
      paddingLeft: 15,
      fontSize: 16,
      fontWeight: "500",
    },
    inputAndroid: {
      marginHorizontal: 20,
      marginTop: 10,
      marginBottom: 20,
      borderColor: "#34383D",
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
  // Placeholder
  const StatePlaceholder = {
    label: "Select State...",
    value: null,
    color: "#34383D",
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        centerComponent={{
          text: "Add Property",
          style: {
            color: "#fff",
            fontWeight: "700",
            fontSize: 20,
            paddingTop: 20,
          },
        }}
        leftComponent={
          <Icon
            name="arrow-left"
            type="feather"
            color="#fff"
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
      
      <GooglePlacesAutocomplete
        placeholder="Search by Address"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: "en", // language of the results
        }}
        fetchDetails
        onPress={(data, details) => (details.formatted_address)}
        onFail={(error) => console.error(error)}
        renderLeftButton={ () =>
          <Feather 
            name="search"
            color="#34383D80"
            size={20}
            style={styles.searchIcon}
          />
        }
        styles={{
          container: {
            flex: 0,
          },
          textInputContainer: {
            marginHorizontal: 20,
            marginBottom: 20,
            marginTop: 10,
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
            flexDirection: "row",
            backgroundColor: "#fff",
          },
          textInput: {
            height: 45,
            color: "#34383D",
            fontSize: 16,
            fontWeight: "500",
          }
        }}
      />

      <KeyboardAwareScrollView>
        <Text style={styles.sectionText}>Property Address:</Text>
        <Text style={styles.sectionLabel}>Address</Text>
        <Text style={styles.sectionLabel}>City, State, Zip Code</Text>

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
                    placeholderTextColor="#34383D80"
                    style={styles.propertyInput}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
                <TouchableOpacity
                  style={{ alignSelf: "center", marginBottom: 12.5 }}
                  onPress={() => remove(index)}
                >
                  <Feather name="trash" color="#34383D80" size={20} />
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
