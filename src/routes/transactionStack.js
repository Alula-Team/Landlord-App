import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Transactions from '../containers/transactions/transactions';
import AddTransactions from '../containers/transactions/addTransactions';

const Stack = createStackNavigator();

const TransactionsNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Transactions' component={Transactions} options={{ headerShown: false }} />
                <Stack.Screen name='AddTransactions' component={AddTransactions} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default TransactionsNavigation;