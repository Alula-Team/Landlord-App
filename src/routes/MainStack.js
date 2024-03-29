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

// Icons
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const RootNavigation = (props) => {
  return (
    <>
      <Tab.Navigator
        activeColor="#586D81"
        inactiveColor="#34383D40"
        barStyle={{
          backgroundColor: "#fff",
          borderColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0
        }}
      >
        <Tab.Screen
          name={"Properties"}
          component={Properties}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={"key"} size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={"Transactions"}
          component={Transactions}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={"credit-card"} size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={"Tenants"}
          component={Tenants}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={"users"} size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={"Notifications"}
          component={Notifications}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={"bell"} size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={"Settings"}
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={"settings"} size={22} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default RootNavigation;
