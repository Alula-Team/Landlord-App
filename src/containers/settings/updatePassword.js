import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Forms
// import { useForm, Controller } from "react-hook-form";

// Firebase
import { updateUserPassword } from '../../firebase/firebase';

// Style Sheet
import styles from './styles';

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
                            color: "#34383D",
                            fontWeight: '600', 
                            fontSize: 20,
                            paddingTop: 20,
                        }
                    }}
                    leftComponent={
                        <Icon
                        name="arrow-left"
                        type="feather"
                        color="#34383D80"
                        size={25}
                        iconStyle={{
                            paddingTop: 20,
                            paddingLeft: 10,
                            paddingBottom: 10,
                        }}
                        onPress={() => navigation.goBack()}
                        />
                    }
                    rightComponent={
                        <TouchableOpacity
                          style={{ paddingTop: 22.5, paddingRight: 10 }}
                          onPress={onSubmit}
                        >
                          <Text style={{ color: "#955C28", fontSize: 18, fontWeight: "600" }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                    }
                    containerStyle={{
                        backgroundColor: "#fff",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                {/* Edit Profile Form */}
                <ScrollView style={{marginTop: 20}}>
                    {/* Current Password */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            type="text"
                            placeholder="Current Password"
                            placeholderTextColor="#34383D80"
                            style={styles.inputField}
                            autoCapitalize='none'
                            autocomplete='off'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            keyboardAppearance='light'
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            type="text"
                            placeholder="New Password"
                            placeholderTextColor="#34383D80"
                            style={styles.inputField}
                            autoCapitalize='none'
                            autocomplete='off'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            keyboardAppearance='light'
                            secureTextEntry={true}
                            onChangeText={(newPassword) => setNewPassword(newPassword)}
                            value={newPassword}
                        />
                    </View>
                        
                    {/* Confirm Password */}
                    {/* <View style={styles.inputContainer}>
                        <TextInput 
                            type='text'
                            placeholder='Confirm Password'
                            placeholderTextColor='#34383D80'
                            style={styles.inputField}
                            autoCapitalize='none'
                            autocomplete='off'
                            keyboardAppearance='dark'
                            secureTextEntry={true}
                        />
                    </View> */}
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateProfile;