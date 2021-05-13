import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Firebase
import { auth } from '../../firebase/firebase';
import firebase from 'firebase';

// Style Sheet
import styles from './sett-styles';

const UpdateProfile = () => {

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    const onSubmit = () => {
        // Update Password
        
        // Confirm Password
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

                {/* Edit Profile Form */}
                <ScrollView style={{marginTop: 20}}>
                    {/* Current Password */}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
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
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            </View>
                        )}
                        name="password"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {/* Password */}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
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
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            </View>
                        )}
                        name="newPassword"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Confirm Password */}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.buttonContainer}>
                                <TextInput 
                                    type='text'
                                    placeholder='Confirm Password'
                                    placeholderTextColor='#ffffff80'
                                    style={styles.formInput}
                                    autoCapitalize='none'
                                    autocomplete='off'
                                    keyboardAppearance='dark'
                                    secureTextEntry={true}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            </View>
                        )}
                        name="confirm-newPassword"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Save Button */}
                    <TouchableOpacity style={styles.continueButton} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.continueButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateProfile;