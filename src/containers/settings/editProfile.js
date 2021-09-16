import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Firebase
import { deleteAccount } from '../../firebase';

import AddScreen from '../constants/AddScreen';
// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './styles';

const EditProfile = ({ navigation }) => {

    return (
        <AddScreen title="Edit Profile" onGoBack={() => navigation.goBack()}>
            <ScrollView style={{ marginTop: 20 }}>
                {/* Edit Username Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdateUsername')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather name='user' color='#34383D80' size={20} style={{ alignSelf: 'center', marginLeft: 15 }} />
                        <Text style={styles.buttonText}>Update Username</Text>
                    </View>
                    <Feather name='arrow-right' color='#34383D80' size={20} style={{ alignSelf: 'center', marginRight: 10 }} />
                </TouchableOpacity>

                {/* Edit Email Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdateEmail')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather name='mail' color='#34383D80' size={20} style={{ alignSelf: 'center', marginLeft: 15 }} />
                        <Text style={styles.buttonText}>Update Email</Text>
                    </View>
                    <Feather name='arrow-right' color='#34383D80' size={20} style={{ alignSelf: 'center', marginRight: 10 }} />
                </TouchableOpacity>

                {/* Update Password Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdatePassword')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather name='lock' color='#34383D80' size={20} style={{ alignSelf: 'center', marginLeft: 15 }} />
                        <Text style={styles.buttonText}>Update Password</Text>
                    </View>
                    <Feather name='arrow-right' color='#34383D80' size={20} style={{ alignSelf: 'center', marginRight: 10 }} />
                </TouchableOpacity>
            </ScrollView>
        </AddScreen>
    );
}

export default EditProfile;
