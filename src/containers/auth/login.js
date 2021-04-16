import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Icons
import Feather from 'react-native-vector-icons/Feather';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import globalStyles from './auth-styles';

const LoginScreen = (props) => {

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    return (
        <View style={globalStyles.container}>
            <Header
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                containerStyle={{ borderBottomWidth: 0}}
                centerComponent={
                    <Text style={globalStyles.headerText}> ALULA </Text>
                }
            />

            {/* Title of App */}
            <Text style={globalStyles.title}>Welcome</Text>
            <Text style={globalStyles.subTitle}>Sign in to get started!</Text>

            {/* Form */}
            <View style={globalStyles.form}>

                <Controller
                    control={control}
                    render={({ onChange, value }) => (
                        <View style={globalStyles.emailInput}>
                            <Feather 
                                name={'mail'}
                                size={22.5}
                                style={{alignSelf: 'center', marginHorizontal: 15, color:'#ffffff50'}}
                            />
                            <TextInput
                                style={globalStyles.email}
                                placeholder='Email'
                                placeholderTextColor='#ffffff50'
                                autoCapitalize='none'
                                autoCompleteType='email'
                                autoCorrect={false}
                                clearButtonMode={'while-editing'}
                                keyboardType={'email-address'}
                                keyboardAppearance='dark'
                                // value={}
                                // onChangeText={}
                            />
                        </View>
                    )}
                    name="email"
                    rules={{ required: true }}
                    defaultValue=""
                />

                <Controller
                    control={control}
                    render={({ onChange, value }) => (
                        <View style={globalStyles.passwordInput}>
                            <Feather 
                                name={'lock'}
                                size={22.5}
                                style={{alignSelf: 'center', marginHorizontal: 15, color:'#ffffff50'}}
                            />
                            <TextInput
                                style={globalStyles.password}
                                placeholder='Password'
                                placeholderTextColor='#ffffff50'
                                secureTextEntry={true}
                                autoCapitalize='none'
                                autoCompleteType='password'
                                autoCorrect={false}
                                clearButtonMode={'while-editing'}
                                returnKeyType={'done'}
                                keyboardAppearance='dark'
                                // value={}
                                // onChangeText={}
                            />
                        </View>
                    )}
                    name="email"
                    rules={{ required: true }}
                    defaultValue=""
                />

                {/* Forgot Password Button */}
                <TouchableOpacity 
                    style={globalStyles.forgotPasswordButton} 
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={globalStyles.forgotPasswordText}>Forgot Password</Text>
                </TouchableOpacity >

                {/* Sign In Button */}
                <TouchableOpacity 
                    style={globalStyles.continueButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={globalStyles.submitText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* Register Button */}
            <TouchableOpacity 
                style={globalStyles.otherAuthButton}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={globalStyles.otherAuthText}>
                    Need an account? <Text style={{fontWeight: '800'}}>Sign Up Instead</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;