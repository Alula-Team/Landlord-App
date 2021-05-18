import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Firebase
import { deleteAccount } from '../../firebase/firebase';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './sett-styles';

const EditProfile = ({ navigation }) => {
    
    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Edit Profile",
                        style: {
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 22,
                        paddingTop: 30,
                        },
                    }}
                    leftComponent={
                        <Icon
                        name="arrow-left"
                        type="feather"
                        color="#fff"
                        size={25}
                        iconStyle={{
                            paddingTop: 30,
                            paddingLeft: 10,
                            paddingBottom: 10,
                        }}
                        onPress={() => navigation.goBack()}
                        />
                    }
                    containerStyle={{
                        backgroundColor: "#09061C",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                <ScrollView style={{marginTop: 20}}>
                    {/* Edit Username Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdateUsername')}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='user' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Update Username</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                    {/* Edit Email Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdateEmail')}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='mail' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Update Email</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>

                    {/* Update Password Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdatePassword')}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name='lock' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                            <Text style={styles.buttonText}>Update Password</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </> 
    );
}

export default EditProfile;
