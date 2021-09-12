import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { SelectOptions, FakerOptions } from "../../forms";
import { useForm, Controller } from "react-hook-form";
import PropertySelect from "../../forms/PropertySelect";
import { CustomTextInput, CustomEmailInput, CustomPhoneInput, CustomNumberInput, CustomSelectInput, CustomTextAreaInput, CustomErrorField } from '../../forms/CustomFormFields'

// Faker
import faker from "faker";
faker.locale = "en_US";

// Firebase
import { auth, db } from "../../firebase";

// Style Sheet
import styles, { pickerStyles } from "./styles";

const AddTenant = ({ navigation }) => {

  const fakeIt = () => {
    setValue("name", faker.name.firstName() + " " + faker.name.lastName());
    setValue("email", faker.internet.email().toLowerCase());
    setValue("phone", faker.phone.phoneNumber("(###) ###-####"));
    setValue("author", auth.currentUser.uid);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.property = JSON.parse(data.property);
    console.log(data);
    db.collection("tenants").add(data);
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Add Tenant",
            style: {
              color: "#34383D",
              fontWeight: "600",
              fontSize: 20,
              paddingTop: 20,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#34383D80"
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
              <Text style={{ color: "#955C28", fontSize: 18, fontWeight: "600" }}>
                Save
              </Text>
            </TouchableOpacity>
          }
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        {/* Content */}
        <KeyboardAwareScrollView>
          {/* <TouchableOpacity
            style={{
              backgroundColor: "#5858FB",
              margin: 30,
              padding: 15,
              borderRadius: 10,
            }}
            onPress={fakeIt}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Fake It!
            </Text>
          </TouchableOpacity> */}

          {/* TENANT INFORMATION */}
          <Text style={styles.inputLabel}>Tenant Information</Text>
          {/* Tenant Name */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomTextInput value={value} onChange={onChange} placeholder="Tenant Name" />
            )}
            name="name"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && (
            <CustomErrorField />
          )}

          {/* Email */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomEmailInput value={value} onChange={onChange} />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && (
            <CustomErrorField />
          )}

          {/* Phone Number */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomPhoneInput value={value} onChange={onChange} />
            )}
            name="phone"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.phone && (
            <CustomErrorField />
          )}

          {/* LEASING INFORMATION */}
          <Text style={styles.inputLabel}>Leasing Information</Text>

          {/* Property */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <PropertySelect value={value} onChange={onChange} />
            )}
            name="property"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.property && (
            <CustomErrorField />
          )}

          {/* Lease Start Date */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomNumberInput value={value} onChange={onChange} placeholder="Move-In Date - MM/DD/YYYY" />
            )}
            name="leaseStartDate"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.leaseStartDate && (
            <CustomErrorField />
          )}

          {/* Lease Length */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomNumberInput value={value} onChange={onChange} placeholder="Lease Length - Months" />
            )}
            name="leaseLength"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.leaseLength && (
            <CustomErrorField />
          )}

          {/* Lease Type */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomSelectInput value={value} onChange={onChange} placeholder="Select Leasing Type" items={SelectOptions.leasingType} />
            )}
            name="leaseType"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.leaseType && (
            <CustomErrorField />
          )}

          {/* Rent Due On */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomSelectInput value={value} onChange={onChange} placeholder="Select Rent Due Date" items={SelectOptions.rentDueDate} />
            )}
            name="rentDueOn"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.rentDueOn && (
            <CustomErrorField />
          )}

          {/* Rent Rate */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomNumberInput value={value} onChange={onChange} placeholder="Rental Rate" />
            )}
            name="rentRate"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.rentRate && (
            <CustomErrorField />
          )}

          {/* Security Deposit */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomNumberInput value={value} onChange={onChange} placeholder="Security Deposit" />
            )}
            name="securityDeposit"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.securityDeposit && (
            <CustomErrorField />
          )}

          {/* Description */}
          <Text style={styles.inputLabel}>Description</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomTextAreaInput value={value} onChange={onChange} placeholder="Enter Transaction Description..." />
            )}
            name="description"
            rules={{ required: false }}
            defaultValue=""
          />
          {errors.description && (
            <CustomErrorField />
          )}
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default AddTenant;
