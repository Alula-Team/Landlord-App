import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import UploadReceipt from "../constants/uploadReceipt";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Forms
import { SelectOptions, FakerOptions, APMInput } from "../../forms";
import PropertySelect from "../../forms/PropertySelect";
import { useForm, Controller } from "react-hook-form";


// Faker
import faker from "faker";

// Firebase
import { db } from "../../firebase";

// Style Sheet
import { styles } from "./styles";

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
    <View style={styles.container}>
      {/* Header */}
      <Header
        centerComponent={{
          text: "Add Transaction",
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
          <Text style={styles.inputLabel}>Transaction Type</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMInput.APMSelect value={value} onChange={onChange} placeholder="Select Transaction" items={SelectOptions.paymentTypes} />
            )}
            name="transactionType"
            rules={{ required: true }}
          />
          {
            errors.payment && (
              <APMInput.APMError />
            )
          }

          {/* Category */}
          <Text style={styles.inputLabel}>Category</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMInput.APMSelect value={value} onChange={onChange} placeholder="Select Category" items={SelectOptions.transactionCategories} />
            )}
            name="transactionCategory"
            rules={{ required: true }}
          />
          {errors.transactionCategory && (
            <APMInput.APMError />
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
            <APMInput.APMError />
          )}

          {/* Payment Method */}
          <Text style={styles.inputLabel}>Payment Method</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMInput.APMSelect value={value} onChange={onChange} placeholder="Select Payment Method" items={SelectOptions.paymentMethods} />
            )}
            name="paymentMethod"
            rules={{ required: true }}
          />
          {errors.paymentMethod && (
            <APMInput.APMError />
          )}

          {/* Amount */}
          <Text style={styles.inputLabel}>Amount</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMInput.APMText value={value} onChange={onChange} placeholder="i.e. 1500" />
            )}
            name="amount"
            rules={{ required: true }}
          />
          {errors.amount && (
            <APMInput.APMError />
          )}

          {/* Date Paid */}
          {/* <Text style={styles.inputLabel}>Date Paid</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <APMNumberInput value={value} onChange={onChange} placeholder="MM/DD/YYYY" />
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
              <APMInput.APMTextarea value={value} onChange={onChange} placeholder="Enter Transaction Description..." />
            )}
            name="description"
            rules={{ required: false }}
          />
          {errors.description && (
            <APMInput.APMError />
          )}

          {/* Upload Recipt*/}
          <Text style={styles.inputLabel}>Upload Receipt:</Text>
          <UploadReceipt />

        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddTransaction;
