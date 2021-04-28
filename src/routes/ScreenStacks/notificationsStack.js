import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Notifications from '../../containers/notifications/notificationScreen';

const Stack = createStackNavigator();

const DashboardNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

export default DashboardNavigation;