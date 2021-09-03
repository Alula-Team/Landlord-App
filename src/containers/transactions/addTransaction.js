import React, { useState, useContext, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput, Modal } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CameraUpload from "./camera";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Forms
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectOptions, FakerOptions } from "../../forms";

import { PropertiesContext } from "../../providers/PropertiesProvider";

// Faker
import faker from "faker";

// Firebase
import firebase, { auth, db } from "../../firebase/firebase";

// Style Sheet
import { styles, pickerStyles } from "./styles";

faker.locale = "en_US";

const AddTransaction = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
  const properties = useContext(PropertiesContext);

  const addressArray = properties.map((property) => {
    return property.address;
  });

  const allProperties = properties.map((item) => {
    return {
      label: `${item.address} ${item.unit}`,
      value: {
        id: item.id,
        address: item.address,
        city: item.city,
        state: item.state,
        unit: item.unit,
        zip: item.zip,
      },
    };
  });

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
              <RNPickerSelect
                placeholder={{
                  label: "Select Transaction",
                  value: "selectTransaction",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.paymentTypes}
              />
            )}
            name="transactionType"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.payment && (
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

          {/* Category */}
          <Text style={styles.inputLabel}>Category</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={{
                  label: "Select Category",
                  value: "selectCategory",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.transactionCategories}
              />
            )}
            name="transactionCategory"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.transactionCategory && (
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

          {/* Property */}
          <Text style={styles.inputLabel}>Property</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={{
                  label: "Select Property",
                  value: "selectProperty",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={allProperties}
              />
            )}
            name="property"
            rules={{ required: true }}
          />
          {errors.property && (
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

          {/* Payment Method */}
          <Text style={styles.inputLabel}>Payment Method</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={{
                  label: "Select Payment Method",
                  value: "selectPaymentMethod",
                  color: "#34383D",
                }}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={SelectOptions.paymentMethods}
              />
            )}
            name="paymentMethod"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.paymentMethod && (
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

          {/* Amount */}
          <Text style={styles.inputLabel}>Amount</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  type="text"
                  placeholder="i.e 1500"
                  placeholderTextColor="#34383D40"
                  style={styles.inputField}
                  clearButtonMode={'while-editing'}
                  keyboardAppearance='light'
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="amount"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.amount && (
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

          {/* Description */}
          <Text style={styles.inputLabel}>Description</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.textArea}>
                <TextInput
                  type="text"
                  placeholder="Enter Transaction Description ..."
                  placeholderTextColor="#34383D40"
                  style={{
                    color: "#34383D",
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft: 12.5,
                    paddingTop: 10,
                  }}
                  multiline={true}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="description"
            rules={{ required: false }}
            defaultValue=""
          />

          {/* Date Paid */}
          <Controller
            control={control}
            render={() => (
              <View style={{ flexDirection: "row", marginVertical: 20, alignItems: "center" }}>
                <Text style={styles.inputLabel}>Date Paid:</Text>
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
            name="date"
          />

          {/* Upload Recipt*/}
          <Text style={styles.inputLabel}>Upload Receipt:</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{backgroundColor: '#00000019', height: 220, width: 180, marginVertical: 20, marginLeft: 20, borderRadius: 10, alignItems: "center", justifyContent: 'center'}}>
            <Feather name='plus' size={40} color='#34383D50' />
          </TouchableOpacity>

          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <CameraUpload />
          </Modal>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddTransaction;
