import React from 'react'
import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Badge, Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './sett-styles';
import { ScrollView } from 'react-native';

const Settings = () => {
    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    placement={'left'}
                    centerComponent={{ 
                        text: 'Settings', 
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

                <ScrollView>
                    {/* Update Profile */}
                    <Text style={styles.sectionTitle}>User Information</Text>

                    {/* Edit Profile */}
                    <TouchableOpacity style={styles.cellBackground}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='user' size={25} style={styles.icon} />
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </View>
                        <Feather name='arrow-right' size={25} style={styles.arrow} />
                    </TouchableOpacity>

                    {/* Update Password */}
                    <TouchableOpacity style={styles.cellBackground}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='lock' size={22.5} style={styles.icon} />
                            <Text style={styles.buttonText}>Update Password</Text>
                        </View>
                        <Feather name='arrow-right' size={25} style={styles.arrow} />
                    </TouchableOpacity>

                    {/* Update Payment Information */}
                    <TouchableOpacity style={styles.cellBackground}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='credit-card' size={22.5} style={styles.icon} />
                            <Text style={styles.buttonText}>Update Payment Info</Text>
                        </View>
                        <Feather name='arrow-right' size={25} style={styles.arrow} />
                    </TouchableOpacity>


                    {/* Preferences */}
                    <Text style={styles.sectionTitle}>Preferences</Text>

                    {/* Enable Notifications */}
                    <TouchableOpacity style={styles.cellBackground}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='bell' size={22.5} style={styles.icon} />
                            <Text style={styles.buttonText}>Enable Notifications</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Update Payment Information */}
                    <TouchableOpacity style={styles.cellBackground}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='map-pin' size={22.5} style={styles.icon} />
                            <Text style={styles.buttonText}>Enable Location</Text>
                        </View>
                    </TouchableOpacity>


                    {/* Reporting */}
                    <Text style={styles.sectionTitle}>Reporting</Text>

                    {/* Enable Notifications */}
                    <TouchableOpacity style={styles.cellBackground}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='trending-up' size={22.5} style={styles.icon} />
                            <Text style={styles.buttonText}>Generate Reports</Text>
                        </View>
                        <Feather name='arrow-right' size={25} style={styles.arrow} />
                    </TouchableOpacity>


                    {/* Log Out Button */}
                    <TouchableOpacity style={styles.logOutButton}>
                        <Text style={styles.logOutButtonText}>Log Out</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default Settings;
