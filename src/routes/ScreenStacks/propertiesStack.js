import React from "react";

// Navigation
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Properties from "../../containers/properties/properties";
import AddProperty from "../../containers/properties/addProperty";
import ServiceRequests from "../../containers/properties/serviceRequests";
import PropertyDetail from "../../containers/properties/propertyDetail";
import ServiceRequestDetail from "../../containers/properties/serviceRequestDetail";
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
          name="ServiceRequests"
          component={ServiceRequests}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PropertyDetail"
          component={PropertyDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceRequestDetail"
          component={ServiceRequestDetail}
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
