import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { useForm, Controller } from "react-hook-form";

// Icons
import Feather from 'react-native-vector-icons/Feather';

// Firebase
import { signIn } from '../../firebase/firebase';

// Style Sheet
import styles from './auth-styles';

const LoginScreen = ({ navigation }) => {

    // const { control, handleSubmit, formState: { errors } } = useForm();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        signIn(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Header
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                containerStyle={{ borderBottomWidth: 0}}
                centerComponent={
                    <Image source={require('../../assets/favicon.jpg')} style={{width: 100, height: 100}} />
                }
            />

            {/* Title of App */}
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subTitle}>Sign in to get started!</Text>

            {/* Form */}
            <View style={styles.form}>

                {/* Email */}
                <View style={styles.authFieldContainer}>
                    <View style={styles.emailInput}>
                        <Feather 
                            name={'mail'}
                            size={22.5}
                            style={{alignSelf: 'center', marginHorizontal: 15, color:'#ffffff50'}}
                        />
                        <TextInput
                            style={styles.email}
                            placeholder='Email'
                            placeholderTextColor='#ffffff50'
                            autoCapitalize='none'
                            autoCompleteType='email'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            keyboardType={'email-address'}
                            keyboardAppearance='dark'
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                    </View>
                    {/* <View style={styles.errorMsg}>
                        {errors.email && <Text style={styles.errorText}>Please enter a valid email address</Text>}
                    </View> */}
                </View>
            
                {/* Password */}
                <View style={styles.authFieldContainer}>
                    <View style={styles.passwordInput}>
                        <Feather 
                            name={'lock'}
                            size={22.5}
                            style={{alignSelf: 'center', marginHorizontal: 15, color:'#ffffff50'}}
                        />
                        <TextInput
                            style={styles.password}
                            placeholder='Password'
                            placeholderTextColor='#ffffff50'
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
                    {/* <View style={styles.errorMsg}>
                        {errors.password && <Text style={styles.errorText}>Please enter a valid password.</Text>}
                    </View> */}
                </View>
                    

                {/* Forgot Password Button */}
                <TouchableOpacity 
                    style={styles.forgotPasswordButton} 
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                </TouchableOpacity >

                {/* Sign In Button */}
                <TouchableOpacity 
                    style={styles.continueButton}
                    onPress={onSubmit}
                >
                    <Text style={styles.submitText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* Register Button */}
            <TouchableOpacity 
                style={styles.otherAuthButton}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.otherAuthText}>
                    Need an account? <Text style={{fontWeight: '800'}}>Sign Up Instead</Text>
                </Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export default LoginScreen;