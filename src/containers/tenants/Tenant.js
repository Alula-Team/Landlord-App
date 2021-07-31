import React from "react";
import { View, Text } from "react-native";

const Tenant = (item) => (
  <View>
    <Text>Tenant: {item.name}</Text>
    {/* <Text>Property Address: {address}</Text> */}
  </View>
);

export default Tenant;
