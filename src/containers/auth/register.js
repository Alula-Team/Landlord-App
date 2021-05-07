import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Forms
import { useForm, Controller } from "react-hook-form";

// Icons
import Feather from 'react-native-vector-icons/Feather';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Firebase
import { auth, firebase } from '../../firebase/firebase';

// Style Sheet
import styles from './auth-styles';

const RegisterScreen = (props) => {

    const navigation = useNavigation();
    
    const { control, handleSubmit, formState: { errors } } = useForm();

    const user = firebase.auth().currentUser;

    const onSubmit = (data) => {
        const { username, email, password } = data;
        auth.createUserWithEmailAndPassword(email.trim().toLowerCase(), password)
            .then(() => {
                user.updateProfile({
                    displayName: ''
                })
            })
            .catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == 'auth/email-already-in-use') {
                    alert('Email already exists');
                } else {
                    alert(errorMessage);
                }
            });
    };

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
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subTitle}>Sign up to get started!</Text>

            {/* Register Form */}
            <View style={styles.form}>
                {/* USERNAME */}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.authFieldContainer}>
                            <View style={styles.emailInput}>
                                <Feather 
                                    name={'user'}
                                    size={22.5}
                                    style={{alignSelf: 'center', marginHorizontal: 15, color:'#ffffff50'}}
                                />
                                <TextInput
                                    style={styles.email}
                                    placeholder='Company or Landlord Name'
                                    placeholderTextColor='#ffffff50'
                                    autoCapitalize='words'
                                    autoCompleteType='off'
                                    autoCorrect={false}
                                    clearButtonMode={'while-editing'}
                                    keyboardType={'default'}
                                    keyboardAppearance='dark'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </View>
                            <View style={styles.errorMsg}>
                                {errors.username && <Text style={styles.errorText}>Please enter your company name or user name</Text>}
                            </View>
                        </View>
                    )}
                    name="username"
                    rules={{ required: true }}
                    defaultValue=''
                />

                {/* EMAIL */}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
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
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </View>
                            <View style={styles.errorMsg}>
                                {errors.email && <Text style={styles.errorText}>Please enter a valid email address</Text>}
                            </View>
                        </View>
                    )}
                    name="email"
                    rules={{ required: true }}
                    defaultValue=""
                />

                {/* PASSWORD */}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (  
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
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </View>
                            <View style={styles.errorMsg}>
                                {errors.password && <Text style={styles.errorText}>Please enter a valid password.</Text>}
                            </View>
                        </View>
                    )}
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
                />

                {/* Sign Up Button */}
                <TouchableOpacity 
                    style={styles.continueButton}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.submitText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Terms & Conditions */}
                <Text style={styles.termsText}>
                    By signing up, you agree to Alula’s <Text style={styles.terms}>Terms & Conditions</Text> and the <Text style={styles.terms}>Privacy Policy</Text>.
                </Text>
            </View>

            {/* Login Button */}
            <TouchableOpacity 
                style={styles.otherAuthButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.otherAuthText}>
                    Already have an account? <Text style={{fontWeight: '800'}}>Login Instead</Text>
                </Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export default RegisterScreen;