import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Header } from 'react-native-elements';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase from 'firebase';

// Icons
import Feather from 'react-native-vector-icons/Feather';

// Firebase
import { registration } from '../../firebase/firebase';

// Style Sheet
import styles from './auth-styles';

const RegisterScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emptyState = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const onSubmit = () => {
        registration( email, password, username );
        emptyState();
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
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subTitle}>Sign up to get started!</Text>

            {/* Register Form */}
            <View style={styles.form}>
                {/* USERNAME */}
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
                            // onBlur={onBlur}
                            onChangeText={(name) => setUsername(name)}
                            value={username}
                        />
                    </View>
                </View>
                    

                {/* EMAIL */}
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
                            // onBlur={onBlur}
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                    </View>
                </View>
                    

                {/* PASSWORD */}
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
                            // onBlur={onBlur}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                    </View>
                </View>

                {/* Sign Up Button */}
                <TouchableOpacity 
                    style={styles.continueButton}
                    onPress={onSubmit}
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