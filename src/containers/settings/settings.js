import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

// Firebase
import { loggingOut } from '../../firebase/firebase';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './sett-styles';

const Settings = () => {

    const navigation = useNavigation();

    // Sign Out
    async function handleSignOut() {
        try {
          await loggingOut();
        } catch (error) {
          console.log(error);
        }
    }
    
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

                <ScrollView style={{marginTop: 20}}>
                    {/* Profile View */}
                    <View style={{backgroundColor: '#5858FB', marginHorizontal: 20, padding: 20, marginBottom: 20, borderRadius: 20}}>
                        <Text style={{color: '#ffffff90', fontSize: 14, fontWeight: '600'}}>Current User</Text>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: '600', marginTop: 20}}>User's Name</Text>
                        <Text style={{color: '#fff', fontSize: 15, marginTop: 5}}>User's Email</Text>
                    </View>

                    {/* Edit Profile Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('EditProfile')}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='user' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                    {/* Update Payment Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdatePayment')}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='credit-card' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Update Payment Info</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>
                        
                    {/* Enable Notifications Button */}
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='bell' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Enable Notifications</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                    {/* Enable Location Button */}
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='map-pin' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Enable Location</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                    {/* Generate Reports Button */}
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='activity' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Generate Reports</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                    {/* About Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('About')}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='alert-circle' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>About</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                    {/* Logout Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleSignOut}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='log-out' color='#5858FB' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.logoutButtonText}>Logout</Text>
                        </View>
                        <Feather name='arrow-right' color='#5858FB' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </> 
    );
}

export default Settings;
