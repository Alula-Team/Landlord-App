import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Dashboard from '../containers/dashboard/dashboard';
import Notifications from '../containers/dashboard/notifications';

const Stack = createStackNavigator();

const DashboardNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
                <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default DashboardNavigation;