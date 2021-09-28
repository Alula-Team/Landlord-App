import React, { useEffect } from "react";
import { Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import { useForm, Controller } from "react-hook-form";
import { APMError, APMText } from "../../forms/APMFormFields";

import faker from "faker";
faker.locale = "en_US";


// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import styles from "./styles";
import DetailScreen from "../constants/DetailScreen";
// Firebase
import { db } from "../../firebase";
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import TheProperty from "./TheProperty";

const EditProperty = ({ navigation, route }) => {
  const { itemID } = route.params;
  const propRef = db.collection('properties').doc(itemID);
  const [property, loading, error] = useDocumentDataOnce(propRef, { idField: "id" });

  if (error) {
    console.log(`Error: ${error.message}`)
  }
  if (loading) {
    console.log('Loading...')
  }
  return (
    <DetailScreen title="Add/Edit Property">
      <TheProperty property={property} />
    </DetailScreen>
  )
};

export default EditProperty;
