import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Firebase
import { updateUserEmail } from '../../firebase';

// Style Sheet
import styles from './styles';

const UpdateEmail = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emptyState = () => {
        setEmail('');
    };

    const onSubmit = () => {
        updateUserEmail(email, password).then(() => {
            Alert.alert(
                'Success!',
                'Your email has been updated.',
                [{
                    text: 'Close',
                    onPress: () => navigation.navigate('EditProfile')
                }]
            )
        });
        setPassword('');
        emptyState();
    }

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Email",
                        style: {
                            color: "#34383D",
                            fontWeight: '600',
                            fontSize: 20,
                            paddingTop: 20,
                        },
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
                <ScrollView style={{ marginTop: 20 }}>

                    {/* Email Address */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            type='text'
                            placeholder='New Email'
                            placeholderTextColor='#34383D80'
                            style={styles.inputField}
                            autoCapitalize='none'
                            autocomplete='off'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            keyboardAppearance='light'
                            keyboardType='email-address'
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputField}
                            placeholder='Enter Password to Save Changes'
                            placeholderTextColor='#34383D80'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            autoCompleteType='password'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            returnKeyType={'done'}
                            keyboardAppearance='light'
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateEmail;