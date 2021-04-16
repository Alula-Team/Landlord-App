import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Icons
import Feather from 'react-native-vector-icons/Feather';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import globalStyles from './auth-styles';

const RegisterScreen = (props) => {

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
            <Text style={globalStyles.title}>Create Account</Text>
            <Text style={globalStyles.subTitle}>Sign up to get started!</Text>

            {/* Form */}
            <View style={globalStyles.form}>
                <Controller
                control={control}
                render={({ onChange, value }) => (
                    <View style={globalStyles.nameInput}>
                        <Feather 
                            name={'user'}
                            size={22.5}
                            style={{alignSelf: 'center', marginHorizontal: 15, color:'#ffffff50'}}
                        />
                        <TextInput
                            style={globalStyles.name}
                            placeholder='Full Name'
                            placeholderTextColor='#ffffff50'
                            autoCapitalize='words'
                            autoCompleteType='name'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            keyboardAppearance='dark'
                            // value={}
                            // onChangeText={}
                        />
                    </View>
                    )}
                    name="name"
                    rules={{ required: true }}
                    defaultValue=""
                />

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
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
                />

                {/* Sign In Button */}
                <TouchableOpacity 
                    style={globalStyles.continueButton}
                    onPress={() => navigation.navigate('Onboarding')}
                >
                    <Text style={globalStyles.submitText}>Next</Text>
                </TouchableOpacity>

                {/* Terms & Conditions */}
                <Text style={globalStyles.termsText}>
                    By signing up, you agree to Alula’s <Text style={globalStyles.terms}>Terms & Conditions</Text> and the <Text style={globalStyles.terms}>Privacy Policy</Text>.
                </Text>
            </View>

            {/* Register Button */}
            <TouchableOpacity 
                style={globalStyles.otherAuthButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={globalStyles.otherAuthText}>
                    Already have an account? <Text style={{fontWeight: '800'}}>Login Instead</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterScreen;