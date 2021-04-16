import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Auth Screens
import Login from '../containers/auth/login';
import Register from '../containers/auth/register';
import ForgotPassword from '../containers/auth/forgot-password';
import OnboardingScreen from '../containers/auth/onboarding';
import UpdatePayment from '../containers/settings/updatePayment';

const authStack = createStackNavigator();

const Routes = (props) => {

    return (
        <>
            {/* Authentication Routes */}
            <authStack.Navigator>
                <authStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <authStack.Screen name='Register' component={Register} options={{ headerShown: false }} /> 
                <authStack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
                <authStack.Screen name='Onboarding' component={OnboardingScreen} options={{ headerShown: false }} />
                <authStack.Screen name='UpdatePayment' component={UpdatePayment}  options={{ headerShown: false }} />
            </authStack.Navigator>

            {/* Dashboard Stack Navigator */}
            
        </>
    );
}

export default Routes;