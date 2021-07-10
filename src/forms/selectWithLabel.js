import React from "react";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";

import { styles, pickerStyles } from "./styles";
import { nameify } from "./nameify";

const SelectWithLabel = ({
  label = "",
  placeholder = "",
  items = [],
  required = true,
}) => {
  let fieldname = nameify(label);
  let fieldPlaceholder = {
    label: placeholder || `Select ${label}...`,
    value: null,
    color: "#34383D80",
  };
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <View>
      <Text style={styles.sectionText}>{fieldname}</Text>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <RNPickerSelect
            placeholder={fieldPlaceholder}
            style={pickerStyles}
            value={value}
            onValueChange={onChange}
            items={items}
          />
        )}
        name={fieldname}
        rules={{ required }}
        defaultValue=""
      />
      {errors.fieldname && (
        <Text
          style={{
            color: "red",
            paddingLeft: 35,
            marginTop: 5,
            marginBottom: -22,
          }}
        >
          This field is required {fieldname}
        </Text>
      )}
    </View>
  );
};

export default SelectWithLabel;
