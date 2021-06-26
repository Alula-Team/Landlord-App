import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Badge, Header } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './notif-styles';


// Things I need:
    // Flatlist for Service Requests & Notifications
        // Needs a sort feature where the newest requests are at the top


const Dashboard = () => {
    
    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header placement={'left'}
                    centerComponent={{ 
                        text: 'Notifications', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 30,
                            paddingBottom: 7
                        }
                    }}
                    containerStyle={{
                        backgroundColor: '#D59166',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                <View style={styles.notificationContainer}>
                    <Text style={styles.notificationTitle}>Passed Due Balance:</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Feather name="map-pin" color="#34383D80" size={15} />
                        <Text style={styles.notificationText}>5612 Harmony Ave</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Feather name="clock" color="#34383D80" size={15} />
                        <Text style={styles.notificationText}>01/01/21</Text>
                    </View>
                </View>

                {/* Flatlist */}
                {/* <SafeAreaView>
                    <FlatList 

                    />
                </SafeAreaView> */}
            
            </View>
        </>
    );
}

export default Dashboard;