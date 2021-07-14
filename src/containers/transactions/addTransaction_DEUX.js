import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import RNPickerSelect from "react-native-picker-select";

// Firebase
import { firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

import faker from "faker";
faker.locale = "en_US";

// Forms
import { useForm, Controller } from "react-hook-form";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./trans-styles";

// Redux Stuff
import { connect } from "react-redux";
import { doAddTransaction } from "../../store/actions";

import {
  InputWithLabel,
  SelectWithLabel,
  DateWithLabel,
  SelectOptions,
  FakerOptions,
} from "../../forms";

const auth = firebase.auth();

const pickerStyles = StyleSheet.create({
  inputIOS: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 45,
    flexDirection: "row",
    backgroundColor: "#fff",
    color: "#34383D",
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  inputAndroid: {
    marginHorizontal: 20,
    marginTop: 15,
    borderColor: "#ffffff50",
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
    color: "#34383D",
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
});

const AddTransaction = ({ navigation }) => {
  const [properties, setProperties] = useState([]);

  let unsubscribe = null;
  useEffect(() => {
    let mounted = true;
    async function getStuffs() {
      unsubscribe = firestore
        .collection("properties")
        .onSnapshot((snapshot) => {
          const properties = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          if (mounted) setProperties(properties);
        });
    }
    getStuffs();
    return function cleanup() {
      unsubscribe();
      mounted = false;
    };
  }, []);

  const addressArray = properties.map((property) => {
    return property.address;
  });

  const fakeIt = () => {
    console.log("Faking it");
    setValue(
      "transactionType",
      faker.random.arrayElement(FakerOptions.transactionTypeArray)
    );
    setValue(
      "transactionCategory",
      faker.random.arrayElement(FakerOptions.transactionCategoryArray)
    );
    setValue("address", faker.random.arrayElement(addressArray));
    setValue(
      "paymentMethod",
      faker.random.arrayElement(FakerOptions.paymentMethodArray)
    );
    setValue(
      "amount",
      faker.datatype.number({ min: 640, max: 1650 }).toString()
    );
    setValue("description", faker.lorem.sentence());
    setValue("date", faker.date.past());
    setValue("author", auth.currentUser.uid);
  };

  const { control, setValue, handleSubmit } = useForm();

  const allProperties = properties.map((item) => {
    return {
      label: item.address,
      value: item.address,
    };
  });

  // Date
  const onSubmit = (data) => {
    console.log(data);
    firestore.collection("transactions").add(data);
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Add Transaction",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 22,
              paddingTop: 20,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#fff"
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
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                Save
              </Text>
            </TouchableOpacity>
          }
          containerStyle={{
            backgroundColor: "#232256",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

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

          {/* Transaction Type */}
          <View>
            <Text style={styles.sectionText}>Transaction Type</Text>
            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <RNPickerSelect
                  placeholder="Select Transaction Type"
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
            {/* {errors.transactionType && (
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
            )} */}
          </View>
          {/* <SelectWithLabel
            label="Transaction Type"
            items={SelectOptions.paymentTypes}
          /> */}
          <SelectWithLabel
            label="Transaction Category"
            items={SelectOptions.transactionCategories}
          />
          <SelectWithLabel label="Property" items={allProperties} />
          <SelectWithLabel
            label="Payment Method"
            items={SelectOptions.paymentMethods}
          />
          <InputWithLabel label="Amount" placeholder="i.e. 1500" />
          <InputWithLabel
            label="Description"
            placeholder="Enter Transaction Description ..."
            multiline={true}
            required={false}
          />
          <DateWithLabel label="Date Paid" />

          {/* Upload Receipt - PDF, JPG or PNG */}
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              marginTop: 50,
              marginBottom: 30,
              height: 45,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="upload"
                size={18}
                color="#34383D80"
                style={{
                  alignSelf: "center",
                  marginLeft: 20,
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  color: "#34383D",
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                  textDecorationLine: "underline",
                }}
              >
                Upload Receipt
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  color: "#34383D90",
                  fontSize: 14,
                  fontWeight: "600",
                  marginLeft: 5,
                }}
              >
                - PDF, JPG or PNG
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return { stateProperties: state.properties.properties };
};

export default AddTransaction;
