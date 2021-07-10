import React from "react";
import { View, Text, TextInput}

const TextAreaWithLabel = ({
  label = "Add a label...",
  placeholder = "Add a placeholder...",
}) => {
  const fieldname = label.split(" ").join("-").toLowerCase();

  return (
    <View>
      <Text style={styles.sectionText}>Description</Text>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <View style={styles.textArea}>
            <TextInput
              type="text"
              placeholder="Enter Transaction Description ..."
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
        name="amount"
        rules={{ required: false }}
        defaultValue=""
      />
    </View>
  );
};
