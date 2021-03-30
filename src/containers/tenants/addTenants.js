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

const AddTransactions = ({ addresses, addTenant }) => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();
  const addItem = (data) => addTenant(data);
  const logItem = (data) => console.log(data);
  // For Picker Select
  const pickerStyles = {
    inputIOS: {
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        color: '#fff',
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: '500'
    },
    inputAndroid: {
        marginHorizontal: 20,
        marginTop: 15,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        color: '#fff',
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: '500'
    }
}
// Placeholders
const PropertyPlaceholder = {
    label: 'Select Property',
    value: null,
    color: '#fff'
}
const LeaseTypePlaceholder = {
    label: 'Select Lease Type',
    value: null,
    color: '#fff'
}
const LeasePeriodPlaceholder = {
    label: 'Select Lease Duration',
    value: null,
    color: '#fff'
}
const RentDuePlaceholder = {
    label: 'Select Rent Due Date',
    value: null,
    color: '#fff'
}

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
                  autoCapitalize='words'
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
                        type='text'
                        placeholder='Enter Tenants Email'
                        placeholderTextColor='#ffffff80'
                        style={styles.tenantInput}
                        autoCapitalize='none'
                        autocomplete='off'
                        keyboardAppearance='dark'
                        keyboardType='email-address'
                        onChangeText={value => onChange(value)}
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
                        type='text'
                        placeholder='Enter Tenants Phone Number'
                        placeholderTextColor='#ffffff80'
                        style={styles.tenantInput}
                        keyboardAppearance='dark'
                        keyboardType='phone-pad'
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                </View>
            )}
            name="tenantPhoneNumber"
            rules={{ required: true }}
            defaultValue=""
        />

          {/* Property */}
          <Text style={styles.sectionText}>Leasing Information</Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <RNPickerSelect
                placeholder={PropertyPlaceholder}
                style={pickerStyles}
                onValueChange={(value) => onChange(value)}
                items={addresses.map((item) => {
                    return {
                        label: item,
                        value: item,
                        color: 'white'
                    };
                })}
              />
            )}
            name="property"
            rules={{ required: true }}
            defaultValue=""
          />

          {/* Lease Type */}
          <Controller
                control={control}
                render={({ onChange, value }) => (
                    <RNPickerSelect
                        placeholder={LeaseTypePlaceholder}
                        style={pickerStyles}
                        onValueChange={value => onChange(value)}
                        items={[
                            { label: 'Fixed Lease', value: 'fixed', color: 'white' },
                            { label: 'Month to Month', value: 'month-to-month', color: 'white' },
                        ]}
                    />
                )}
                name="leaseType"
                rules={{ required: true }}
                defaultValue=""
            />

            {/* Lease Period */}
            <Controller
                control={control}
                render={({ onChange, value }) => (
                    <RNPickerSelect
                        placeholder={LeasePeriodPlaceholder}
                        style={pickerStyles}
                        onValueChange={value => onChange(value)}
                        items={[
                            { label: '6 month', value: 'six-month', color: 'white' },
                            { label: '12 month', value: 'twelve-month', color: 'white' },
                            { label: '15 month', value: 'fifteen-month', color: 'white' },
                        ]}
                    />
                )}
                name="leasePeriod"
                rules={{ required: true }}
                defaultValue=""
            />

            {/* Rental Rate */}
            <Controller
                control={control}
                render={({ onChange, value }) => (
                    <View style={styles.searchContainer}>
                        <TextInput 
                            type='text'
                            placeholder='Enter Rental Rate'
                            placeholderTextColor='#ffffff80'
                            style={styles.tenantInput}
                            keyboardAppearance='dark'
                            keyboardType='number-pad'
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    </View>
                )}
                name="rentalRate"
                rules={{ required: true }}
                defaultValue=""
            />

            {/* Security Deposit */}
            <Controller
                control={control}
                render={({ onChange, value }) => (
                    <View style={styles.searchContainer}>
                        <TextInput 
                            type='text'
                            placeholder='Enter Security Deposit (optional)'
                            placeholderTextColor='#ffffff80'
                            style={styles.tenantInput}
                            keyboardAppearance='dark'
                            keyboardType='number-pad'
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    </View>
                )}
                name="securityDeposit"
                rules={{ required: true }}
                defaultValue=""
            />

            {/* Rent Due */}
            <Controller
                control={control}
                render={({ onChange, value }) => (
                    <RNPickerSelect
                        placeholder={RentDuePlaceholder}
                        style={pickerStyles}
                        onValueChange={value => onChange(value)}
                        items={[
                            { label: '1st of each month', value: 'first-of-month', color: 'white' },
                            { label: '15th of each month', value: 'fifteenth-of-month', color: 'white' },
                        ]}
                    />
                )}
                name="rentDue"
                rules={{ required: true }}
                defaultValue=""
            />
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  const addresses = state.properties.properties.map((item) => item.address);
  return {
    addresses,
  };
};

const actions = {
  addTenant: doAddTenant,
};

export default connect(mapStateToProps, actions)(AddTransactions);
