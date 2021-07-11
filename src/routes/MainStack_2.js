import React from "react";
// Navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// Dashboard
import Notifications from "./ScreenStacks/notificationsStack";
// Properties
import Properties from "./ScreenStacks/propertiesStack";
// Transactions
import Transactions from "./ScreenStacks/transactionStack";
// Tenants
import Tenants from "./ScreenStacks/tenantStack";
// Settings
import Settings from "./ScreenStacks/settingsStack";
// Iconss
import Icon from "react-native-vector-icons/Feather";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
// enableScreens();

const MainStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const RootNavigation = (props) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Properties"
        component={Properties}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Transactions"
        component={Transactions}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Tenants"
        component={Tenants}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
