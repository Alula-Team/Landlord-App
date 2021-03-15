import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Properties from '../containers/properties/properties';
import AddProperty from '../containers/properties/addProperties';
import ServiceRequests from '../containers/properties/serviceRequests';
import PropertyDetail from '../containers/properties/propertyDetail';

const Stack = createStackNavigator();

const PropertiesNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Properties' component={Properties} options={{ headerShown: false }} />
                <Stack.Screen name='AddProperty' component={AddProperty} options={{ headerShown: false }} />
                <Stack.Screen name='ServiceRequests' component={ServiceRequests} options={{ headerShown: false }} />
                <Stack.Screen name='PropertyDetail' component={PropertyDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default PropertiesNavigation;