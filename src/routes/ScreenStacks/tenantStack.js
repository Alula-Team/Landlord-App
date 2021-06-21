import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Tenants from "../../containers/tenants/tenants";
import AddTenant from "../../containers/tenants/addTenant";
import TenantDetail from "../../containers/tenants/tenantDetail";

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
      </Stack.Navigator>
    </>
  );
};

export default TenantsNavigation;
