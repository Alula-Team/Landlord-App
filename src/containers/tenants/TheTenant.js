import React from "react";
import { View, Text } from "react-native";

const TheTenant = ({ tenant }) => {
  const { property: { address, city, unit }, name, email, phone } = tenant;
  return (
    <View>
      <Text>Tenant: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Address: {address}</Text>
      <Text>City: {city}</Text>
      <Text>Unit: {unit}</Text>
    </View>
  )
}

export default TheTenant;
