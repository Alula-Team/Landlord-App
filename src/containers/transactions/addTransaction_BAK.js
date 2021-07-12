import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Firebase
import { firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

// Faker
import faker from "faker";
faker.locale = "en_US";

// Form Stuffs
import {
  InputWithLabel,
  SelectWithLabel,
  DateWithLabel,
  SelectOptions,
  FakerOptions,
} from "../../forms";

// Style Sheet
import styles from "./styles";

const auth = firebase.auth();

const AddTransaction = ({ navigation, stateProperties }) => {
  const [properties, setProperties] = useState(stateProperties);
  const addressArray = properties.map((property) => {
    return property.address;
  });
  const allProperties = properties.map((item) => {
    return {
      label: item.address,
      value: item.id,
    };
  });

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
    setValue(
      "transaction-type",
      faker.random.arrayElement(FakerOptions.transactionTypeArray)
    );
    setValue(
      "transaction-category",
      faker.random.arrayElement(FakerOptions.transactionCategoryArray)
    );
    setValue("address", faker.random.arrayElement(addressArray));
    setValue(
      "payment-method",
      faker.random.arrayElement(FakerOptions.paymentMethodArray)
    );
    setValue(
      "amount",
      faker.datatype.number({ min: 640, max: 1650 }).toString()
    );
    setValue("date", faker.date.past());
    setValue("author", auth.currentUser.uid);
  };

  const allProperties = properties.map((item) => {
    return {
      label: item.address,
      value: item.address,
    };
  });

  // const makeDate = (dateObj) => {
  //   const year = dateObj.getFullYear();
  //   const day = dateObj.getDate();
  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const month = months[dateObj.getMonth()];
  //   return Date.parse(`${month} ${day}, ${year}`);
  // };

  // const addItem = (data) => {
  //   makeDate(data.date);
  //   addTransaction(data);
  //   navigation.goBack();
  // };

  // Date
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState("date");
  // const [show, setShow] = useState(false);

  // const handleDateChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === "ios");
  //   setDate(currentDate);
  //   console.log(date);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  const onSubmit = (data) => {
    console.log(data);
    // data.date = new Date(data.date).toLocaleDateString("en-us", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });
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
              paddingTop: 30,
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#fff"
              size={25}
              iconStyle={{
                paddingTop: 30,
                paddingLeft: 10,
                paddingBottom: 10,
              }}
              onPress={() => navigation.goBack()}
            />
          }
          rightComponent={
            <TouchableOpacity
              style={{ paddingTop: 32.5, paddingRight: 10 }}
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

          {/* The Form starts here */}

          <SelectWithLabel
            label="Transaction Type"
            items={SelectOptions.paymentTypes}
          />
          <SelectWithLabel
            label="Category"
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
            multiline="true"
            required="false"
          />
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

export default connect(mapStateToProps)(AddTransaction);
