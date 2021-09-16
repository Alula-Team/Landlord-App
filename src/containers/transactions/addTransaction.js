import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import UploadReceipt from "../constants/uploadReceipt";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Forms
import { SelectOptions, FakerOptions } from "../../forms";
import { APMError, APMSelect, APMNumber, APMText, APMTextarea } from "../../forms/APMFormFields";
import PropertySelect from "../../forms/PropertySelect";
import { useForm, Controller } from "react-hook-form";

// Faker
import faker from "faker";

// Firebase
import { db } from "../../firebase";

// Style Sheet
import { styles } from "./styles";
import AddScreen from "../constants/AddScreen";

faker.locale = "en_US";

const AddTransaction = ({ navigation }) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fakeIt = () => {
    setValue(
      "transactionType",
      faker.random.arrayElement(FakerOptions.transactionTypeArray)
    );
    setValue(
      "transactionCategory",
      faker.random.arrayElement(FakerOptions.transactionCategoryArray)
    );
    // setValue("property", faker.random.arrayElement(addressArray));
    setValue(
      "paymentMethod",
      faker.random.arrayElement(FakerOptions.paymentMethodArray)
    );
    setValue(
      "amount",
      faker.datatype.number({ min: 640, max: 1650 }).toString()
    );
    setValue("description", faker.lorem.paragraph());
    setValue("date", faker.date.past());
  };

  // Date
  const onSubmit = (data) => {
    data.property = JSON.parse(data.property);
    console.log(data);
    db.collection("transactions").add(data);
    navigation.goBack();
  };

  return (
    <AddScreen title="Add Transaction" onGoBack={() => navigation.goBack()} onSubmit={onSubmit}>
      <TouchableOpacity
        style={{
          backgroundColor: "#5858FB",
          margin: 20,
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
      <View>

        {/* Transaction Type */}
        <Text style={styles.inputLabel}>Transaction Type</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMSelect value={value} onChange={onChange} placeholder="Select Transaction" items={SelectOptions.paymentTypes} />
          )}
          name="transactionType"
          rules={{ required: true }}
        />
        {
          errors.payment && (
            <APMError />
          )
        }

        {/* Category */}
        <Text style={styles.inputLabel}>Category</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMSelect value={value} onChange={onChange} placeholder="Select Category" items={SelectOptions.transactionCategories} />
          )}
          name="transactionCategory"
          rules={{ required: true }}
        />
        {errors.transactionCategory && (
          <APMError />
        )}

        {/* Property */}
        <Text style={styles.inputLabel}>Property</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <PropertySelect value={value} onChange={onChange} />
          )}
          name="property"
          rules={{ required: true }}
        />
        {errors.property && (
          <APMError />
        )}

        {/* Payment Method */}
        <Text style={styles.inputLabel}>Payment Method</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMSelect value={value} onChange={onChange} placeholder="Select Payment Method" items={SelectOptions.paymentMethods} />
          )}
          name="paymentMethod"
          rules={{ required: true }}
        />
        {errors.paymentMethod && (
          <APMError />
        )}

        {/* Amount */}
        <Text style={styles.inputLabel}>Amount</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <APMText value={value} onChange={onChange} placeholder="i.e. 1500" />
          )}
          name="amount"
          rules={{ required: true }}
        />
        {errors.amount && (
          <APMError />
        )}

        {/* Date Paid */}
        {/* <Text style={styles.inputLabel}>Date Paid</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMNumber value={value} onChange={onChange} placeholder="MM/DD/YYYY" />
            )}
            name="date"
            rules={{ required: false }}
          />
          {errors.date && (
            <APMErrorField />
          )} */}

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

        {/* Upload Recipt*/}
        <Text style={styles.inputLabel}>Upload Receipt:</Text>
        <UploadReceipt />

      </View>
    </AddScreen>
  );
};

export default AddTransaction;
