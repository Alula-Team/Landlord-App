import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Notifications from '../containers/notifications/notifications';
// import Notifications from '../containers/notifications/notifications';

const Stack = createStackNavigator();

const DashboardNavigation = (props) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Dashboard' component={Notifications} options={{ headerShown: false }} />
                {/* <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </>
    );
}

export default DashboardNavigation;