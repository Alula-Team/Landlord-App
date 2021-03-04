import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

// Icons
import Icon from 'react-native-vector-icons/EvilIcons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import globalStyles from './auth-styles';

const RegisterScreen = (props) => {

    const navigation = useNavigation();

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
                <View style={globalStyles.nameInput}>
                    <Icon 
                        name={'user'}
                        size={30}
                        style={globalStyles.nameIcon}
                    />
                    <TextInput
                        style={globalStyles.name}
                        placeholder='Full Name'
                        placeholderTextColor='#ffffff50'
                        autoCapitalize='words'
                        autoCompleteType='name'
                        autoCorrect={false}
                        clearButtonMode={'while-editing'}
                        // value={}
                        // onChangeText={}
                    />
                </View>
                <View style={globalStyles.emailInput}>
                    <Icon 
                        name={'envelope'}
                        size={31}
                        style={globalStyles.emailIcon}
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
                        // value={}
                        // onChangeText={}
                    />
                </View>
                <View style={globalStyles.passwordInput}>
                    <Icon 
                        name={'lock'}
                        size={30}
                        style={globalStyles.passwordIcon}
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
                        // value={}
                        // onChangeText={}
                    />
                </View>

                {/* Sign In Button */}
                <TouchableOpacity 
                    style={globalStyles.submitButton}
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