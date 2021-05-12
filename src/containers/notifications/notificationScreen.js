import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Badge, Header } from 'react-native-elements';

// Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screens
import ServiceRequests from './serviceRequests';
import Notifications from './notifications';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './notif-styles';


// Things I need:
    // Flatlist for Service Requests & Notifications
        // Needs a sort feature where the newest requests are at the top


const Dashboard = () => {

    const Tab = createMaterialTopTabNavigator();
    
    return(
        <>
            <View>
                {/* Header */}
                <Header placement={'left'}
                    centerComponent={{ 
                        text: 'Notifications', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 30
                        }
                    }}
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                {/* Stepper */}
                <Tab.Navigator 
                    tabBarOptions={{
                        indicatorStyle: { backgroundColor: '#5858FB'},
                        labelStyle: { fontSize: 14, color: '#fff' },
                        style: { 
                            backgroundColor: 'transparent',
                            marginTop: 20
                        },
                    }}
                >
                    <Tab.Screen name="ServiceRequests" component={ServiceRequests} options={{ tabBarLabel: 'Service Requests' }} />
                    <Tab.Screen name="Notifications" component={Notifications} />
                </Tab.Navigator>
            </View>
        </>
    );
}

export default Dashboard;