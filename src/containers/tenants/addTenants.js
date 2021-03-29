import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Style Sheet
import styles from "./tenant-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddTenant } from "../../redux/actions";

const AddTransactions = ({ properties, addTenant }) => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();
  const addItem = (data) => addTenant(data);
  const logItem = (data) => console.log(data);
  // For Picker Select
  // Styles
  const pickerStyles = {
    inputIOS: {
      marginHorizontal: 20,
      marginTop: 15,
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
      marginTop: 15,
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
  // Placeholders
  const PropertyPlaceholder = {
    label: "Select Property...",
    value: null,
    color: "#fff",
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Add Tenant",
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

        <KeyboardAwareScrollView style={{ marginHorizontal: 10 }}>
          {/* Form */}
          <Text style={styles.sectionText}>Tenant Information</Text>

          {/* Tenant Name */}
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder=" Name..."
                  placeholderTextColor="#ffffff80"
                  style={styles.tenantInput}
                  autoCapitalize={true}
                  keyboardAppearance="dark"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              </View>
            )}
            name="tenantName"
            rules={{ required: true }}
            defaultValue=""
          />

          {/* Email Address */}
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Email..."
                  placeholderTextColor="#ffffff80"
                  style={styles.tenantInput}
                  autoCapitalize={false}
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              </View>
            )}
            name="tenantEmail"
            rules={{ required: true }}
            defaultValue=""
          />

          {/* Phone Number*/}
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Phone Number..."
                  placeholderTextColor="#ffffff80"
                  style={styles.tenantInput}
                  keyboardAppearance="dark"
                  keyboardType="phone-pad"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              </View>
            )}
            name="tenantPhoneNumber"
            rules={{ required: true }}
            defaultValue=""
          />

          {/* Property */}
          <Text style={styles.sectionText}>Property</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <RNPickerSelect
                placeholder={PropertyPlaceholder}
                style={pickerStyles}
                onValueChange={(value) => onChange(value)}
                // items={[
                //   { label: "Property", value: "property", color: "white" },
                //   { addresses },
                // ]}
                items={properties.map((item) => {
                  return {
                    label: item.address,
                    value: item.address,
                    color: "white",
                  };
                })}
              />
            )}
            name="property"
            rules={{ required: true }}
            defaultValue=""
          />
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
  };
};

const actions = {
  addTenant: doAddTenant,
};

export default connect(mapStateToProps, actions)(AddTransactions);
