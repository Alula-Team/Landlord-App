import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { Transactions, TransactionDetail, AddTransaction } from "../../containers/transactions";

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
