import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import styles from './sett-styles';

const UpdateProfile = () => {

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Password",
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
                    rightComponent={
                        <TouchableOpacity
                        style={{ paddingTop: 32.5, paddingRight: 10 }}
                        // onPress={handleSubmit(addItem)}
                        >
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                            Save
                        </Text>
                        </TouchableOpacity>
                    }
                    containerStyle={{
                        backgroundColor: "#09061C",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                {/* Edit Profile Form */}
                <ScrollView style={{marginTop: 20}}>
                    {/* Password */}
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <View style={styles.buttonContainer}>
                                <TextInput
                                    type="text"
                                    placeholder="Password"
                                    placeholderTextColor="#ffffff80"
                                    style={styles.formInput}
                                    autoCapitalize='none'
                                    autocomplete='off'
                                    keyboardAppearance="dark"
                                    secureTextEntry={true}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        name="password"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Confirm Password */}
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <View style={styles.buttonContainer}>
                                <TextInput 
                                    type='text'
                                    placeholder='Confirm Password'
                                    placeholderTextColor='#ffffff80'
                                    style={styles.formInput}
                                    autoCapitalize='none'
                                    autocomplete='off'
                                    keyboardAppearance='dark'
                                    secureTextEntry={true}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        name="confirm-password"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateProfile;