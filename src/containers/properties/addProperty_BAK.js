import * as React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { InputWithLabel } from "../../forms";

// Google Places
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GOOGLE_PLACES_API_KEY from "../../googlePlaces";
import faker, { database } from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles, { googlePlacesStyles } from "./styles";

// Redux Stuff
import { batch, connect } from "react-redux";
import { doAddProperty } from "../../store/actions";
import { onChange } from "react-native-reanimated";

// Firebase
import firebase, { auth, db } from "../../firebase/firebase";
import ScreenHeader from "./screenHeader";
import GooglePlacesSearch from "./googlePlacesSearch";
import AddPropertyForm from "./addPropertyForm";

const AddProperty = ({ navigation }) => {
  const INITIAL_STATE = {
    address: "",
    author: "",
    city: "",
    state: "",
    tenants: "",
    unit: "",
    zip: "",
  };
  const [property, setProperty] = React.useState(INITIAL_STATE);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "units",
  });

  const breakIntoUnits = (data) => {
    let addresses = [];
    data.units.forEach((item, index) => {
      addresses.push({
        address: data.address,
        author: auth.currentUser.uid,
        city: data.city,
        state: data.state,
        tenants: [],
        unit: data.units[index].number,
        zip: data.zip,
      });
    });
    return addresses;
  };

  const fillForm = (property) => {
    const [address, city, stateZip, country] = property.split(", ");
    const [state, zip] = stateZip.split(" ");
    setValue("address", address);
    setValue("city", city);
    setValue("state", state);
    setValue("zip", zip);
  };

  const onSubmit = (data) => {
    if (data.units.length) {
      let batch = db.batch();
      const docs = breakIntoUnits(data);
      docs.forEach((doc) => {
        var docRef = db.collection("properties").doc();
        batch.set(docRef, doc);
      });
      batch.commit();
    } else {
      delete data.units;
      data.unit = "";
      db.collection("properties")
        .add(data)
        .then((doc) => console.log(doc.id))
        .catch((error) => console.error(error));
    }
    navigation.goBack();
  };

  // Placeholder
  const StatePlaceholder = {
    label: "Select State...",
    value: null,
    color: "#34383D",
  };

  return (
    <View style={styles.container}>
      <ScreenHeader onSubmit={handleSubmit(onSubmit)} />
      <GooglePlacesSearch />
      <AddPropertyForm />
    </View>
  );
};

export default AddProperty;
