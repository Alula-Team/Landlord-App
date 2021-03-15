import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Transactions from '../containers/transactions/transactions';
import AddTransactions from '../containers/transactions/addTransactions';
import TransactionDetail from '../containers/transactions/transactionDetail';

const Stack = createStackNavigator();

const TransactionsNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Transactions' component={Transactions} options={{ headerShown: false }} />
                <Stack.Screen name='AddTransactions' component={AddTransactions} options={{ headerShown: false }} />
                <Stack.Screen name='TransactionDetail' component={TransactionDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default TransactionsNavigation;