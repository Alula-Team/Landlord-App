import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Settings from '../containers/settings/settings';
import UpdateProfile from '../containers/settings/updateProfile';

const Stack = createStackNavigator();

const PropertiesNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
                <Stack.Screen name='UpdateProfile' component={UpdateProfile}  options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default PropertiesNavigation;