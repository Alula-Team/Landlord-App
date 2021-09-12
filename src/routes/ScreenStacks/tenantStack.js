import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { Tenants, TenantDetail, AddTenant } from "../../containers/tenants";
import CurrentLease from '../../containers/tenants/currentLease';

const Stack = createStackNavigator();

const TenantsNavigation = (props) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Tenants"
          component={Tenants}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TenantDetail"
          component={TenantDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTenant"
          component={AddTenant}
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

export default TenantsNavigation;
