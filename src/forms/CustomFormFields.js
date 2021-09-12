import React from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import styles from "./styles";

export const CustomTextInput = ({ value, onChange, placeholder = "Change this placeholder..." }) => (
  <View style={styles.inputContainer}>
    <TextInput
      type="text"
      placeholder={placeholder}
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
)

export const CustomEmailInput = ({ value, onChange, placeholder = "Email" }) => (
  <View style={styles.inputContainer}>
    <TextInput
      type="text"
      placeholder={placeholder}
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
)

export const CustomPhoneInput = ({ value, onChange, placeholder = "Phone" }) => (
  <View style={styles.inputContainer}>
    <TextInput
      type="text"
      placeholder={placeholder}
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
)

export const CustomSelectInput = ({ value, onChange, placeholder = "Select one...", items = [] }) => {
  let fieldPlaceholder = {
    label: placeholder,
    value: null,
    color: "#34383D80",
  };
  return (
    <RNPickerSelect
      placeholder={fieldPlaceholder}
      style={pickerStyles}
      value={value}
      onValueChange={onChange}
      items={items}
    />
  );
}

export const CustomTextAreaInput = ({ value, onChange, placeholder = "Enter Transaction Description..." }) => (
  <View style={styles.textArea}>
    <TextInput
      type="text"
      placeholder={placeholder}
      placeholderTextColor="#34383D70"
      style={{
        color: "#34383D",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 12.5,
        paddingTop: 10,
      }}
      multiline={multiline}
      onChangeText={onChange}
      value={value}
    />
  </View>
)

export const CustomNumberInput = ({ value, onChange, placeholder = "Choose a number..." }) => (
  <View style={styles.inputContainer}>
    <TextInput
      type="text"
      placeholder={placeholder}
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
)

export const CustomRepeaterInput = ({ value, onChange, placeholder = "Apt, Unit, Suite, etc..." }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.inputContainer}>
      <TextInput
        type="text"
        placeholder={placeholder}
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
)

export const CustomErrorField = () => (
  <Text
    style={{
      color: "red",
      paddingLeft: 35,
      marginTop: 10
    }}
  >
    This field is required
  </Text>
)