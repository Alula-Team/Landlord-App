import React, { useState, useEffect } from "react";
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

import DetailScreen from "../constants/DetailScreen";

import { db } from "../../firebase";

import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

import TenantDetailStuff from "./TenantDetailStuff";

// Things I need
// Actions button pops up modal with options to:
// add lease (if no lease),
// remove lease (if there is a lease),
// renew lease (once lease term is set to expire in 60d)

const TenantDetail = ({ route, navigation }) => {
  const { itemID } = route.params;
  const tenantRef = db.collection('tenants').doc(itemID);
  const [tenant, loading, error] = useDocumentDataOnce(tenantRef, { idField: "id" });
  // const [modalVisible, setModalVisible] = useState(false);

  // Delete Alert Pop Up
  // const deleteAlert = () => {
  //   Alert.alert(
  //     "Delete Tenant?",
  //     "Are you sure you want to delete this tenant?",
  //     [
  //       {
  //         text: "Cancel",
  //         style: "cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //       },
  //       {
  //         text: "Delete",
  //         style: "destructive",
  //         onPress: () => console.log("Delete Pressed"),
  //         onPress: (id) => deleteTenant(itemID),

  //         onPress: () => {
  //           db.doc(`tenants/${itemID}`).delete();
  //           navigation.goBack();
  //         },
  //       },
  //     ]
  //   );
  // };

  if (error) {
    return <Text>Something went wrong ...</Text>;
  }

  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <TenantDetailStuff tenant={tenant} />
  )
};

export default TenantDetail;
