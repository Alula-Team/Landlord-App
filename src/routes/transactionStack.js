import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Transactions from '../containers/transactions/transactions';
// import  from '../containers/transactions/';

const Stack = createStackNavigator();

const PropertiesNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Transactions' component={Transactions} options={{ headerShown: false }} />
                {/* <Stack.Screen name='' component={} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </>
    );
}

export default PropertiesNavigation;