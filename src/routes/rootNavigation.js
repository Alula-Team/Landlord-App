import React from 'react';

// Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Dashboard
import Notifications from './notificationsStack';

// Properties
import Properties from '../routes/propertiesStack';

// Transactions
import Transactions from '../routes/transactionStack';

// Tenants
import Tenants from '../routes/tenantStack';

// Settings
import Settings from '../routes/settingsStack';

// Icons
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const RootNavigation = (props) => {
    return (
        <>
            <Tab.Navigator  activeColor='white' barStyle={{backgroundColor: '#09061C'}}>
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
                <Tab.Screen 
                    name={'Tenants'}
                    component={Tenants}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={'users'}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen 
                    name={'Notifications'}
                    component={Notifications}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={'bell'}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen 
                    name={'Settings'}
                    component={Settings}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon 
                                name={'settings'}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

export default RootNavigation;