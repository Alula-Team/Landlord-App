import React from "react";
import { View, Text } from "react-native";

const TheProperty = ({ property }) => {
  const { address, city, unit } = property;
  return (
    <View>
      <Text>Address: {address}</Text>
      <Text>City: {city}</Text>
      <Text>Unit: {unit}</Text>
    </View>
  )
}

export default TheProperty;