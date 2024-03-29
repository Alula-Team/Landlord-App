import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, useFieldArray, Controller } from "react-hook-form";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

// Google Address bar
import GooglePlacesSearch from "../../forms";

// ScreenHeader
import AddEditScreenHeader from "../constants/AddEditScreenHeader";

// Firebase
import { db } from "../../firebase";


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
    name: "unit",
  });

  const breakIntoUnits = (data) => {
    let addresses = [];
    data.unit.forEach((item, index) => {
      addresses.push({
        address: data.address,
        city: data.city,
        state: data.state,
        unit: data.unit[index].number,
        zip: data.zip,
      });
    });
    return addresses;
  };

  const fillForm = (property) => {
    const reverseProperty = property.split(", ").reverse();
    const [country, stateZip, city, address, maybe] = reverseProperty;
    const [state, zip] = stateZip.split(" ");
    setValue("address", address);
    setValue("city", city);
    setValue("state", state);
    setValue("zip", zip);
  };

  const onSubmit = (data) => {
    if (data.unit.length) {
      let batch = db.batch();
      const docs = breakIntoUnits(data);
      docs.forEach((doc) => {
        var docRef = db.collection("properties").doc();
        batch.set(docRef, doc);
      });
      batch.commit();
    } else {
      data.tenants = [];
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
      {/* <AddScreenHeader title="Add Property" /> */}

      <GooglePlacesSearch onPress={fillForm} />
      <KeyboardAwareScrollView>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <Text style={styles.inputLabel}>Property Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Street"
                  placeholderTextColor="#34383D70"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="City"
                  placeholderTextColor="#34383D70"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="State"
                  placeholderTextColor="#34383D70"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="Zip Code"
                  placeholderTextColor="#34383D70"
                  autoCorrect={false}
                  clearButtonMode={"while-editing"}
                  keyboardAppearance="light"
                  style={styles.inputField}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
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
          onPress={() => append({ number: "" })}
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
                <View style={styles.inputContainer}>
                  <TextInput
                    type="text"
                    placeholder="Apt, Unit, Suite, etc..."
                    placeholderTextColor="#34383D70"
                    autoCorrect={false}
                    clearButtonMode={"while-editing"}
                    keyboardAppearance="light"
                    style={styles.inputField}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
                <TouchableOpacity
                  style={{ alignSelf: "center" }}
                  onPress={() => remove(index)}
                >
                  <Feather name="trash" color="#34383D80" size={20} />
                </TouchableOpacity>
              </View>
            )}
            name={`unit[${index}].number`}
            rules={{ required: true }}
            defaultValue=""
          />
        ))}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddProperty;
