import React from "react";
import { Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { styles } from "./styles";
import { nameify } from "./nameify";

const InputWithLabel = ({
  label = "Change this label ...",
  placeholder = "Change this placeholder ...",
  multiline = false,
  required = true,
}) => {
  const fieldname = nameify(label);
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
          <View style={multiline ? styles.textArea : styles.searchContainer}>
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
          This field is required
        </Text>
      )}
    </View>
  );
};

export default InputWithLabel;
