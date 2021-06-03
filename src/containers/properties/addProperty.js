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
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "units",
  });

  const emptyStatePARTS = () => {
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setUnit("");
  };

  const onSubmit = async (data) => {
    navigation.goBack();
    await firestore.collection("properties").add(data);
    emptyState();
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
