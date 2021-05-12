import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Firebase
import { auth } from '../../firebase/firebase';
import firebase from 'firebase';

// Style Sheet
import styles from './sett-styles';

const UpdateProfile = () => {

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    const onSubmit = () => {
        
        // Update Display Name
        

        // Update Email
    }

    return (
        <>
            <View>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Profile",
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
                    {/* Full Name */}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.buttonContainer}>
                                <TextInput
                                    type="text"
                                    placeholder="Enter Company or Landlord Name"
                                    placeholderTextColor="#ffffff80"
                                    style={styles.formInput}
                                    autoCapitalize='words'
                                    keyboardAppearance="dark"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Email Address */}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.buttonContainer}>
                                <TextInput 
                                    type='text'
                                    placeholder='Enter Email'
                                    placeholderTextColor='#ffffff80'
                                    style={styles.formInput}
                                    autoCapitalize='none'
                                    autocomplete='off'
                                    keyboardAppearance='dark'
                                    keyboardType='email-address'
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            </View>
                        )}
                        name="newEmail"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Conintue Button */}
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateProfile;