import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigaiton
import { useNavigation } from '@react-navigation/native';

// Icons
import Feather from 'react-native-vector-icons/Feather';

// Styles
import globalStyles from './auth-styles';


const ForgotPasswordScreen = (props) => {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    return (
        <View style={globalStyles.container}>
            {/* Navbar */}
            <Header
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                containerStyle={{ borderBottomWidth: 0}}
                leftComponent={
                    <Feather 
                        name={'arrow-left'}
                        size={25}
                        style={{
                            color: 'white',
                            marginTop: 40,
                            marginLeft: 20
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={
                    <Image source={require('../../assets/favicon.jpg')} style={{width: 100, height: 100}} />
                }
            />

            {/* Greeting*/}
            <Text style={globalStyles.title}>Forgot Password</Text>
            <Text style={globalStyles.subTitle}>Enter your email to continue!</Text>

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
                                autoCompleteType={'email'}
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
                
                {/* Sign In Button */}
                <TouchableOpacity style={globalStyles.continueButton}>
                    <Text style={globalStyles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ForgotPasswordScreen;