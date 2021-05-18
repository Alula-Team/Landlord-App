import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Forms
// import { useForm, Controller } from "react-hook-form";

// Firebase
import { updateUserPassword } from '../../firebase/firebase';

// Style Sheet
import styles from './sett-styles';

const UpdateProfile = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    // const { control, handleSubmit } = useForm();

    const emptyState = () => {
        setNewPassword('');
    };

    const onSubmit = () => {
        updateUserPassword(password, newPassword)
            .then(() => {
                Alert.alert(
                    'Success!',
                    'Your password has been updated.',
                    [{
                        text: 'Close',
                        onPress: () => navigation.navigate('EditProfile')
                    }]
                )
            })
        setPassword('');
        emptyState();
    }

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Password",
                        style: {
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 22,
                            paddingTop: 30,
                        }
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

                {/* Edit Profile Form */}
                <ScrollView style={{marginTop: 20}}>
                    {/* Current Password */}
                    <View style={styles.buttonContainer}>
                        <TextInput
                            type="text"
                            placeholder="Current Password"
                            placeholderTextColor="#ffffff80"
                            style={styles.formInput}
                            autoCapitalize='none'
                            autocomplete='off'
                            keyboardAppearance="dark"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.buttonContainer}>
                        <TextInput
                            type="text"
                            placeholder="New Password"
                            placeholderTextColor="#ffffff80"
                            style={styles.formInput}
                            autoCapitalize='none'
                            autocomplete='off'
                            keyboardAppearance="dark"
                            secureTextEntry={true}
                            onChangeText={(newPassword) => setNewPassword(newPassword)}
                            value={newPassword}
                        />
                    </View>
                        
                    {/* Confirm Password */}
                    {/* <View style={styles.buttonContainer}>
                        <TextInput 
                            type='text'
                            placeholder='Confirm Password'
                            placeholderTextColor='#ffffff80'
                            style={styles.formInput}
                            autoCapitalize='none'
                            autocomplete='off'
                            keyboardAppearance='dark'
                            secureTextEntry={true}
                        />
                    </View> */}

                    {/* Save Button */}
                    <TouchableOpacity style={styles.continueButton} onPress={onSubmit}>
                        <Text style={styles.continueButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateProfile;