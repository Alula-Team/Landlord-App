import React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

// const Switch = createStackNavigator();

const AppStack = () => {
    return (
        <>
            {/* <Switch.Navigator> */}
            {/* {isLoggedIn ? ( */}
            {/* <> */}
                {/* <MainStack /> */}
            {/* </> */}
            {/* ) : ( */}
                <AuthStack />
            {/* )}
        </Switch.Navigator> */}
      </>
    );
}

export default AppStack;