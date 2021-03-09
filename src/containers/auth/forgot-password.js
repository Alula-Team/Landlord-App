import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

// Navigaiton
import { useNavigation } from '@react-navigation/native';

// Icons
import Icon from 'react-native-vector-icons/EvilIcons';
import BackButton from 'react-native-vector-icons/EvilIcons';

// Styles
import globalStyles from './auth-styles';


const ForgotPasswordScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            {/* Navbar */}
            <Header
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                containerStyle={{ borderBottomWidth: 0}}
                leftComponent={
                    <BackButton 
                        name={'chevron-left'}
                        size={45}
                        style={{
                            color: 'white',
                            marginTop: 10
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={
                    <Text style={globalStyles.headerText}> ALULA </Text>
                }
            />

            {/* Greeting*/}
            <Text style={globalStyles.title}>Forgot Password</Text>
            <Text style={globalStyles.subTitle}>Enter your email to continue!</Text>

            {/* Form */}
            <View style={globalStyles.form}>
                <View style={globalStyles.emailInput}>
                    <Icon 
                        name={'envelope'}
                        size={30}
                        style={globalStyles.emailIcon}
                    />
                    <TextInput
                        style={globalStyles.email}
                        placeholder='Email'
                        placeholderTextColor='#ffffff50'
                        autoCapitalize='none'
                        autoCompleteType={'email'}
                        autoCorrect={false}
                        clearButtonMode={'while-editing'}
                        keyboardType={'email-address'}
                        keyboardAppearance='dark'
                        // value={}
                        // onChangeText={}
                    />
                </View>
                
                {/* Sign In Button */}
                <TouchableOpacity style={globalStyles.submitButton}>
                    <Text style={globalStyles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ForgotPasswordScreen;