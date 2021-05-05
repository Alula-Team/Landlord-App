import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Settings from '../../containers/settings/settings';
import UpdateProfile from '../../containers/settings/updateProfile';
import UpdatePassword from '../../containers/settings/updatePassword';
import UpdatePayment from '../../containers/settings/updatePayment';
import About from '../../containers/settings/about';

const Stack = createStackNavigator();

const PropertiesNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
                <Stack.Screen name='UpdateProfile' component={UpdateProfile}  options={{ headerShown: false }} />
                <Stack.Screen name='UpdatePassword' component={UpdatePassword}  options={{ headerShown: false }} />
                <Stack.Screen name='UpdatePayment' component={UpdatePayment}  options={{ headerShown: false }} />
                <Stack.Screen name='About' component={About}  options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default PropertiesNavigation;