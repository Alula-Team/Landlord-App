import React, { useState } from "react";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";

import { styles } from "./styles";
import { nameify } from "./nameify";

const DateWithLabel = ({ label = "Date" }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const {
    control,
    formState: { errors },
  } = useForm();

  const fieldname = nameify(label);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <Controller
        control={control}
        render={() => (
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={styles.sectionText}>{label}</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              textColor="#fff"
              style={{
                marginLeft: 10,
                marginTop: 20,
                width: "100%",
              }}
              onChange={handleDateChange}
            />
          </View>
        )}
        name={fieldname}
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

export default DateWithLabel;
