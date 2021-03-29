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

                <ScrollView style={{marginTop: 30}}>
                    {/* User Information */}
                        <Text style={styles.sectionText}>User Information</Text>

                        {/* Edit Profile Button */}
                        <TouchableOpacity style={styles.buttonContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Feather name='user' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                                <Text style={styles.buttonText}>Update Profile</Text>
                            </View>
                            <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                        </TouchableOpacity>

                        {/* Update Password Button */}
                        <TouchableOpacity style={styles.buttonContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Feather name='lock' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                                <Text style={styles.buttonText}>Update Password</Text>
                            </View>
                            <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                        </TouchableOpacity>

                        {/* Edit Profile Button */}
                        <TouchableOpacity style={styles.buttonContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Feather name='credit-card' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                                <Text style={styles.buttonText}>Update Payment Info</Text>
                            </View>
                            <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                        </TouchableOpacity>
                    {/* END User Information */}

                    {/* Preferences */}
                        <Text style={styles.sectionText}>Preferences</Text>

                        {/* Enable Notifications Button */}
                        <TouchableOpacity style={styles.buttonContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Feather name='bell' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                                <Text style={styles.buttonText}>Enable Notifications</Text>
                            </View>
                        </TouchableOpacity>

                    {/* END Preferences */}

                    {/* Reporting */}
                        <Text style={styles.sectionText}>Reporting</Text>

                        {/* Generate Reports Button */}
                        <TouchableOpacity style={styles.buttonContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Feather name='activity' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                                <Text style={styles.buttonText}>Generate Reports</Text>
                            </View>
                        </TouchableOpacity>
                    {/* END Reporting */}

                    {/* Logout Button */}
                        <TouchableOpacity style={styles.logoutButton}>
                            <Text style={styles.logoutButtonText}>Log Out</Text>
                        </TouchableOpacity>
                    {/* END Logout Button */}

                </ScrollView>
            </View>
        </> 
    );
}

export default Settings;
