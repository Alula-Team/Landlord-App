import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Auth Screens
import { ForgotPassword, Loading, Login, Register } from "../containers/auth";
import UpdatePayment from "../containers/settings/updatePayment";

const authStack = createStackNavigator();

const Routes = (props) => {
  return (
    <>
      {/* Authentication Routes */}
      <authStack.Navigator>
        <authStack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
        <authStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <authStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <authStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <authStack.Screen
          name="UpdatePayment"
          component={UpdatePayment}
          options={{ headerShown: false }}
        />
      </authStack.Navigator>
    </>
  );
};

export default Routes;
