import React from 'react';

// Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Dashboard
import Dashboard from '../routes/dashboardStack';

// Properties
import Properties from '../routes/propertiesStack';

// Transactions
import Transactions from '../routes/transactionStack';

// Tenants


// Settings


// Icons
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const RootNavigation = (props) => {
    return (
        <>
            <Tab.Navigator activeColor='white' barStyle={{backgroundColor: '#09061C'}}>
                <Tab.Screen 
                    name={'Dashboard'}
                    component={Dashboard}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={'activity'}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen 
                    name={'Properties'}
                    component={Properties}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={'key'}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen 
                    name={'Transactions'}
                    component={Transactions}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={'credit-card'}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                />
                {/* <Tab.Screen 
                    name={''}
                    component={}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={''}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                /> */}
                {/* <Tab.Screen 
                    name={''}
                    component={}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={''}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                /> */}
            </Tab.Navigator>
        </>
    );
}

export default RootNavigation;