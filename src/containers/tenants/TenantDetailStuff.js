import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";


const TenantDetailStuff = ({ tenant }) => {
  return (
    <Text>{tenant.name}</Text>
  )
}

export default TenantDetailStuff;