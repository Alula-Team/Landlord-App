import React, { useState } from "react";
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
import { InputWithLabel } from "../../forms";

// Google Places
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GOOGLE_PLACES_API_KEY from "../../googlePlaces";
import faker, { database } from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles, { googlePlacesStyles } from "./styles";

// Redux Stuff
import { batch, connect } from "react-redux";
import { doAddProperty } from "../../redux/actions";
import { onChange } from "react-native-reanimated";

// Firebase
import firebase, { auth, db } from "../../firebase/firebase";

const AddProperty = ({ navigation }) => {
  const INITIAL_STATE = {
    address: "",
    author: "",
    city: "",
    state: "",
    tenants: "",
    unit: "",
    zip: "",
  };
  const [property, setProperty] = useState(INITIAL_STATE);

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
    data.units.forEach((item, index) => {
      addresses.push({
        address: data.address,
        author: auth.currentUser.uid,
        city: data.city,
        state: data.state,
        tenants: [],
        unit: data.units[index].number,
        zip: data.zip,
      });
    });
    return addresses;
  };

  const fillForm = (property) => {
    const [address, city, stateZip, country] = property.split(", ");
    const [state, zip] = stateZip.split(" ");
    setValue("address", address);
    setValue("city", city);
    setValue("state", state);
    setValue("zip", zip);
  };

  const onSubmit = (data) => {
    if (data.units.length) {
      let batch = db.batch();
      const docs = breakIntoUnits(data);
      docs.forEach((doc) => {
        var docRef = db.collection("properties").doc();
        batch.set(docRef, doc);
      });
      batch.commit();
    } else {
      delete data.units;
      data.unit = "";
      db.collection("properties")
        .add(data)
        .then((doc) => console.log(doc.id))
        .catch((error) => console.error(error));
    }
    navigation.goBack();
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
          backgroundColor: "#232256",
          justifyContent: "space-around",
          borderBottomWidth: 0,
        }}
      />

      <GooglePlacesAutocomplete
        placeholder="Search by Address"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: "en",
        }}
        fetchDetails
        onPress={(data, details) => fillForm(details.formatted_address)}
        onFail={(error) => console.error(error)}
        renderLeftButton={() => (
          <Feather
            name="search"
            color="#34383D80"
            size={20}
            style={styles.searchIcon}
          />
        )}
        styles={googlePlacesStyles}
      />

      <KeyboardAwareScrollView>
        <View>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Address ..."
                  placeholderTextColor="#34383D70"
                  style={styles.propertyInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="address"
            rules={{ required: "true" }}
            defaultValue=""
          />
          {errors.address && (
            <Text style={styles.fieldError}>This field is required</Text>
          )}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="City ..."
                  placeholderTextColor="#34383D70"
                  style={styles.propertyInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="city"
            rules={{ required: "true" }}
            defaultValue=""
          />
          {errors.city && (
            <Text style={styles.fieldError}>This field is required</Text>
          )}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="State ..."
                  placeholderTextColor="#34383D70"
                  style={styles.propertyInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="state"
            rules={{ required: "true" }}
            defaultValue=""
          />
          {errors.state && (
            <Text style={styles.fieldError}>This field is required</Text>
          )}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Zip ..."
                  placeholderTextColor="#34383D70"
                  style={styles.propertyInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="zip"
            rules={{ required: "true" }}
            defaultValue=""
          />
          {errors.zip && (
            <Text style={styles.fieldError}>This field is required</Text>
          )}
        </View>

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

export default AddProperty;
