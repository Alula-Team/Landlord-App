import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Firebase
import { updateUserEmail } from '../../firebase/firebase';

// Style Sheet
import styles from './sett-styles';

const UpdateEmail = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emptyState = () => {
        setEmail('');
    };

    const onSubmit = () => {
        updateUserEmail(email, password).then(() => {
            Alert.alert(
                'Success!',
                'Your email has been updated.',
                [{
                    text: 'Close',
                    onPress: () => navigation.navigate('EditProfile')
                }]
            )
        });
        setPassword('');
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
                            placeholder='New Email'
                            placeholderTextColor='#ffffff80'
                            style={styles.formInput}
                            autoCapitalize='none'
                            autocomplete='off'
                            keyboardAppearance='dark'
                            keyboardType='email-address'
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.buttonContainer}>
                        <TextInput
                            style={styles.formInput}
                            placeholder='Enter Password to Save Changes'
                            placeholderTextColor='#ffffff80'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            autoCompleteType='password'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            returnKeyType={'done'}
                            keyboardAppearance='dark'
                            onChangeText={(password) => setPassword(password)}
                            value={password}
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