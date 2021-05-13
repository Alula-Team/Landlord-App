import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Firebase
import { updateUserEmail } from '../../firebase/firebase';

// Style Sheet
import styles from './sett-styles';

const UpdateEmail = ({ navigation }) => {

    const [newEmail, setNewEmail] = useState('');

    const emptyState = () => {
        setNewEmail('');
    };
    const onSubmit = () => {
        updateUserEmail(newEmail);
        navigation.navigate('Settings');
        emptyState();
    }

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Email",
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

                    {/* Email Address */}
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
                            onChangeText={(newEmail) => setEmail(newEmail)}
                            value={newEmail}
                        />
                    </View>

                    {/* Conintue Button */}
                    <TouchableOpacity style={styles.continueButton} onPress={onSubmit}>
                        <Text style={styles.continueButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateEmail;