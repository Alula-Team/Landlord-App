import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Properties from '../containers/properties/properties';
import AddProperty from '../containers/properties/addProperties';

const Stack = createStackNavigator();

const PropertiesNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Properties' component={Properties} options={{ headerShown: false }} />
                <Stack.Screen name='AddProperty' component={AddProperty} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default PropertiesNavigation;