import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useForm, useFieldArray, Controller } from "react-hook-form";

import { useNavigation } from "@react-navigation/native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./prop-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddProperty } from "../../redux/actions";

const AddProperty = ({ addProperty }) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "units",
  });

  const onSubmit = (data) => console.log(data);

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
        <Text style={styles.sectionText}>Units</Text>
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
                    onChangeText={(value) => onChange(value)}
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
        {/* {fields.map((item, index) => {
          return (
            <View>
              <Controller
                key={item.id}
                control={control}
                render={({ onChange, value }) => (
                  <View style={styles.addInputContainer}>
                    <TextInput
                      type="text"
                      placeholder="Enter Unit Number..."
                      placeholderTextColor="#ffffff80"
                      style={styles.propertyInput}
                      keyboardAppearance="dark"
                      onChangeText={(value) => onChange(value)}
                      value={value}
                    />
                  </View>
                )}
                name={`unit.${index}`}
                defaultValue=""
              />

              <Text style={{ color: "white" }} onPress={() => remove(index)}>
                Remove
              </Text>
            </View>
          );
        })} */}
      </KeyboardAwareScrollView>

      {/* Add Units Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => append({ units: "" })}
      >
        <Feather name="plus" size={25} style={styles.addButtonText} />
        <Text style={styles.addButtonText}>Add Unit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProperty;
