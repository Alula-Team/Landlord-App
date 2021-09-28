import React from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import { APMError, APMText } from "../../forms/APMFormFields";

import styles from './styles';



const TheProperty = ({ property }) => {
  const { address, city, state, unit, zip } = property;
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address,
      city,
      state,
      unit,
      zip
    }
  });

  return (
    <KeyboardAwareScrollView>
      {/* Address */}
      <Text style={styles.inputLabel}>Address</Text>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <APMText value={value} onChange={onChange} placeholder="Address..." />
        )}
        name="address"
        rules={{ required: true }}
        defaultValue={address}
      />
      {errors.address && (
        <APMError />
      )}
      {/* City */}
      <Text style={styles.inputLabel}>City</Text>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <APMText value={value} onChange={onChange} placeholder="City..." />
        )}
        name="city"
        rules={{ required: true }}
      />
      {errors.city && (
        <APMError />
      )}
      {/* State */}
      <Text style={styles.inputLabel}>State</Text>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <APMText value={value} onChange={onChange} placeholder="State..." />
        )}
        name="state"
        rules={{ required: true }}
      />
      {errors.state && (
        <APMError />
      )}
      {/* Zip */}
      <Text style={styles.inputLabel}>Zip Code</Text>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <APMText value={value} onChange={onChange} placeholder="Zip..." />
        )}
        name="zip"
        rules={{ required: true }}
      />
      {errors.zip && (
        <APMError />
      )}
      {/* Unit */}
      <Text style={styles.inputLabel}>Unit</Text>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <APMText value={value} onChange={onChange} placeholder="Unit..." />
        )}
        name="unit"
        rules={{ required: false }}
      />
      {errors.unit && (
        <APMError />
      )}
    </KeyboardAwareScrollView>
  )
}

export default TheProperty;