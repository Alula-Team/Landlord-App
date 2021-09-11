import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Firebase
import { updateUsername } from '../../firebase';

// Style Sheet
import styles from './styles';

const UpdateProfile = ({ navigation }) => {

    const [username, setUsername] = useState('');

    const emptyState = () => {
        setUsername('');
    };
    const onSubmit = () => {
        updateUsername(username)
            .then(() => {
                Alert.alert(
                    'Success!',
                    'Your username has been updated.',
                    [{
                        text: 'Close',
                        onPress: () => navigation.navigate('EditProfile')
                    }]
                )
            })
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

                    {/* Username */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            type="text"
                            placeholder="Enter Company or Landlord Name"
                            placeholderTextColor="#34383D80"
                            style={styles.inputField}
                            autoCapitalize='words'
                            autoCorrect={false}
                            clearButtonMode={'while-editing'}
                            keyboardAppearance='light'
                            onChangeText={(name) => setUsername(name)}
                            value={username}
                        />
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdateProfile;