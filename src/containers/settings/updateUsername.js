import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Firebase
import { updateUsername } from '../../firebase/firebase';

// Style Sheet
import styles from './sett-styles';

const UpdateProfile = ({ navigation }) => {

    const [username, setUsername] = useState('');

    const emptyState = () => {
        setUsername('');
    };
    const onSubmit = () => {
        updateUsername(username);
        navigation.navigate('Settings');
        emptyState();
    }

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Username",
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
                    containerStyle={{
                        backgroundColor: "#09061C",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                {/* Edit Profile Form */}
                <ScrollView style={{marginTop: 20}}>

                    {/* Username */}
                    <View style={styles.buttonContainer}>
                        <TextInput
                            type="text"
                            placeholder="Enter Company or Landlord Name"
                            placeholderTextColor="#ffffff80"
                            style={styles.formInput}
                            autoCapitalize='words'
                            keyboardAppearance="dark"
                            onChangeText={(name) => setUsername(name)}
                            value={username}
                        />
                    </View>

                    {/* Conintue Button */}
                    <TouchableOpacity style={styles.continueButton} onPress={onSubmit}>
                        <Text style={styles.continueButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateProfile;