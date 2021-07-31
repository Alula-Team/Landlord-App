import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Transactions from "../../containers/transactions/transactions";
import AddTransaction from "../../containers/transactions/addTransaction";
import EditTransaction from "../../containers/transactions/editTransaction";
import ManageTransaction from "../../containers/transactions/manageTransaction";

const Stack = createStackNavigator();

const TransactionsNavigation = (props) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTransaction"
          component={AddTransaction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditTransaction"
          component={EditTransaction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageTransaction"
          component={ManageTransaction}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default TransactionsNavigation;
