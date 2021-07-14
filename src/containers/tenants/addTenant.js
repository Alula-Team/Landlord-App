import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import DateTimePicker from "@react-native-community/datetimepicker";

import faker from "faker";
faker.locale = "en_US";

// Forms
import { useForm, Controller } from "react-hook-form";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Firebase
import firebase, { auth, db } from "../../firebase/firebase";

// Redux
import { connect } from "react-redux";

// Style Sheet
import styles, { pickerStyles } from "./styles";

import { PropertiesContext } from "../../providers/PropertiesProvider";

const AddTenant = ({ navigation }) => {
  const [tenants, setTenants] = useState([]);

  const properties = useContext(PropertiesContext);
  const addressArray = properties.map((property) => {
    return property.address;
  });
  const allProperties = properties.map((item) => {
    return {
      label: item.address,
      value: item.id,
    };
  });

  const getPropertyInfo = (id) => properties.filter(property.id === id);

  // let unsubscribe = null;
  // useEffect(() => {
  //   let mounted = true;
  //   async function getStuffs() {
  //     unsubscribe = db.collection("tenants").onSnapshot((snapshot) => {
  //       const tenants = snapshot.docs.map((doc) => {
  //         return { id: doc.id, ...doc.data() };
  //       });
  //       if (mounted) setTenants(tenants);
  //     });
  //   }
  //   getStuffs();
  //   return function cleanup() {
  //     unsubscribe();
  //     mounted = false;
  //   };
  // }, []);

  const fakeIt = () => {
    setValue("name", faker.name.firstName() + " " + faker.name.lastName());
    setValue("email", faker.internet.email().toLowerCase());
    setValue("phone", faker.phone.phoneNumber("(###) ###-####"));
    setValue("author", auth.currentUser.uid);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    db.collection("properties")
      .get()
      .then((snapshot) =>
        sanpshot.docs.forEach((doc) => console.log(doc.data()))
      );

    // navigation.goBack();
  };

  // Placeholders
  const PropertyPlaceholder = {
    label: "Select Property...",
    value: null,
    color: "#34383D",
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          centerComponent={{
            text: "Add Tenant",
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

          {/* Property */}
          <Text style={styles.sectionText}>Property</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <RNPickerSelect
                placeholder={PropertyPlaceholder}
                style={pickerStyles}
                value={value}
                onValueChange={onChange}
                items={allProperties}
              />
            )}
            name="property"
            rules={{ required: true }}
            defaultValue=""
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
          {/* First Name */}
          <Text style={styles.sectionText}>Tenant Name</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Tenant Name"
                  placeholderTextColor="#34383D70"
                  style={styles.tenantInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="name"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: -15,
                marginBottom: -2,
              }}
            >
              This field is required
            </Text>
          )}

          <Text style={styles.sectionText}>Email</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Email"
                  placeholderTextColor="#34383D70"
                  style={styles.tenantInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: -15,
                marginBottom: -2,
              }}
            >
              This field is required
            </Text>
          )}
          <Text style={styles.sectionText}>Phone</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <View style={styles.searchContainer}>
                <TextInput
                  type="text"
                  placeholder="Phone"
                  placeholderTextColor="#34383D70"
                  style={styles.tenantInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="phone"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.phone && (
            <Text
              style={{
                color: "red",
                paddingLeft: 35,
                marginTop: -15,
                marginBottom: -2,
              }}
            >
              This field is required
            </Text>
          )}
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return { stateProperties: state.properties.properties };
};

export default connect(mapStateToProps)(AddTenant);
