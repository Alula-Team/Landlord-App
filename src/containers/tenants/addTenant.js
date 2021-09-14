import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { SelectOptions } from "../../forms";
import { APMEmail, APMError, APMNumber, APMPhone, APMSelect, APMText, APMTextarea } from "../../forms/APMFormFields";
import PropertySelect from "../../forms/PropertySelect";
import { useForm, Controller } from "react-hook-form";

// Faker
import faker from "faker";
faker.locale = "en_US";

// Firebase
import { auth, db } from "../../firebase";

// Style Sheet
import styles from "./styles";
import AddScreenHeader from "../constants/AddScreenHeader";

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
        <AddScreenHeader title="Add Tenant" onGoBack={() => navigation.goBack()} onSubmit={onSubmit} />
        {/* Content */}
        <KeyboardAwareScrollView>
          <TouchableOpacity
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
          </TouchableOpacity>

          {/* TENANT INFORMATION */}
          <Text style={styles.inputLabel}>Tenant Information</Text>
          {/* Tenant Name */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMText value={value} onChange={onChange} placeholder="Tenant Name" />
            )}
            name="name"
            rules={{ required: true }}
          />
          {errors.name && (
            <APMError />
          )}

          {/* Email */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMEmail value={value} onChange={onChange} />
            )}
            name="email"
            rules={{ required: true }}
          />
          {errors.email && (
            <APMError />
          )}

          {/* Phone Number */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMPhone value={value} onChange={onChange} />
            )}
            name="phone"
            rules={{ required: true }}
          />
          {errors.phone && (
            <APMError />
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
          />
          {errors.property && (
            <APMError />
          )}

          {/* Lease Start Date */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMNumber value={value} onChange={onChange} placeholder="Move-In Date - MM/DD/YYYY" />
            )}
            name="leaseStartDate"
            rules={{ required: false }}
          />
          {errors.leaseStartDate && (
            <APMError />
          )}

          {/* Lease Length */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMNumber value={value} onChange={onChange} placeholder="Lease Length - Months" />
            )}
            name="leaseLength"
            rules={{ required: false }}
          />
          {errors.leaseLength && (
            <APMError />
          )}

          {/* Lease Type */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMSelect value={value} onChange={onChange} placeholder="Select Leasing Type" items={SelectOptions.leasingType} />
            )}
            name="leaseType"
            rules={{ required: false }}
          />
          {errors.leaseType && (
            <APMError />
          )}

          {/* Rent Due On */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMSelect value={value} onChange={onChange} placeholder="Select Rent Due Date" items={SelectOptions.rentDueDate} />
            )}
            name="rentDueOn"
            rules={{ required: false }}
          />
          {errors.rentDueOn && (
            <APMError />
          )}

          {/* Rent Rate */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMNumber value={value} onChange={onChange} placeholder="Rental Rate" />
            )}
            name="rentRate"
            rules={{ required: false }}
          />
          {errors.rentRate && (
            <APMError />
          )}

          {/* Security Deposit */}
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMNumber value={value} onChange={onChange} placeholder="Security Deposit" />
            )}
            name="securityDeposit"
            rules={{ required: false }}
          />
          {errors.securityDeposit && (
            <APMError />
          )}

          {/* Description */}
          <Text style={styles.inputLabel}>Description</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMTextarea value={value} onChange={onChange} placeholder="Enter Transaction Description..." />
            )}
            name="description"
            rules={{ required: false }}
          />
          {errors.description && (
            <APMError />
          )}
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default AddTenant;
