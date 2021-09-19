import React from "react";
import { View, Text } from "react-native";

const TheTenant = (item) => (
  <View>
    <Text>Tenant: {item.name}</Text>
    {/* <Text>Property Address: {address}</Text> */}
  </View>
);

export default TheTenant;
