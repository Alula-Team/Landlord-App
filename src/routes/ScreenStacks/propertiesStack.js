import React from "react";

// Navigation
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { Properties, AddProperty, PropertyDetail } from "../../containers/properties";
import Messages from "../../containers/properties/messages";
import MessageDetail from "../../containers/properties/messageDetail";
import CurrentLease from "../../containers/tenants/currentLease";

enableScreens();
const Stack = createStackNavigator();

const PropertiesNavigation = (props) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Properties"
          component={Properties}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProperty"
          component={AddProperty}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PropertyDetail"
          component={PropertyDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageDetail"
          component={MessageDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentLease"
          component={CurrentLease}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default PropertiesNavigation;
