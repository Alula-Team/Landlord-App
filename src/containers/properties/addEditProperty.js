import React, { useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import {
  useForm,
  useFormState,
  useFieldArray,
  Controller,
} from "react-hook-form";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles, { googlePlacesStyles } from "./styles";

// Redux Stuff
import { batch, connect } from "react-redux";
import { doAddproperty } from "../../store/actions";
import { onChange } from "react-native-reanimated";

// Firebase
import { auth, db } from "../../firebase/firebase";
import ScreenHeader from "./screenHeader";
import GooglePlacesSearch from "./googlePlacesSearch";

const EditProperty = ({ navigation, route }) => {
  const { itemID, itemAddress, itemCity, itemState, itemUnit, itemZip } =
    route.params;
  const INITIAL_STATE = {
    address: itemAddress,
    city: itemCity,
    state: itemState,
    unit: itemUnit,
    zip: itemZip,
  };

  // function dirtyValues(dirtyFields, allValues) {
  //   if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues;
  //   return Object.fromEntries(
  //     Object.keys(dirtyFields).map((key) => [
  //       key,
  //       dirtyValues(dirtyFields[key], allValues[key]),
  //     ])
  //   );
  // }

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

  const [property, setProperty] = React.useState(INITIAL_STATE);
  // const [editedProperty, setEditedProperty] = React.useState(EDITED_STATE);
  // const { address } = property;

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setEditedProperty({ ...property, [name]: value });
  //   console.log(editedProperty);
  // };

  useEffect(() => {
    function fillForm() {
      setValue("address", itemAddress);
      setValue("city", itemCity);
      setValue("state", itemState);
      setValue("zip", itemZip);
      setValue("unit", itemUnit);
    }
    fillForm();
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // const { dirtyFields } = useFormState({
  //   control,
  // });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "unit",
  });

  const breakIntoUnits = (data) => {
    let addresses = [];
    data.unit.forEach((item, index) => {
      addresses.push({
        address: data.address,
        author: auth.currentUser.uid,
        city: data.city,
        state: data.state,
        tenants: [],
        unit: data.unit[index].number,
        zip: data.zip,
      });
    });
    return addresses;
  };

  const onSubmit = (data) => {
    let updates = returnFinalObject(INITIAL_STATE, data);
    console.log(updates);
    data.id = itemID;
    console.log(data);

    // data.unit = "";
    // db.collection("properties")
    //   .doc(data.id)
    //   .update(updates)
    //   .then((doc) => console.log(doc.id))
    //   .catch((error) => console.error(error));
    // navigation.goBack();
  };

  // Placeholder
  const StatePlaceholder = {
    label: "Select State...",
    value: null,
    color: "#34383D",
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "Edit property",
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

      <KeyboardAwareScrollView>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="Address..."
                placeholderTextColor="#34383D70"
                style={styles.searchInput}
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="City..."
                placeholderTextColor="#34383D70"
                style={styles.searchInput}
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
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="State..."
                placeholderTextColor="#34383D70"
                style={styles.searchInput}
                onChangeText={onChange}
                value={value}
              />
            </View>
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
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="Zip..."
                placeholderTextColor="#34383D70"
                style={styles.searchInput}
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
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProperty;
