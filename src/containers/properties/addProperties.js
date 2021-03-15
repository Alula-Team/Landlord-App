import React from 'react';

import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './prop-styles';


// THINGS I NEED
    // Function to add more units when button is pressed
    // Function to save content

const AddProperties = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            {/* Header */}
            <Header 
                centerComponent={{ 
                    text: 'Add Property', 
                    style: { 
                        color: '#fff', 
                        fontWeight: 'bold', 
                        fontSize: 22, 
                        paddingTop: 30
                    }
                }}
                leftComponent={
                    <Icon 
                        name='arrow-left'
                        type='feather'
                        color='#fff'
                        size={25}
                        iconStyle={{
                            paddingTop: 30,
                            paddingLeft: 10,
                            paddingBottom: 10
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={{
                    text: 'Save',
                    style: { 
                        color: '#fff', 
                        fontWeight: '600', 
                        fontSize: 18, 
                        marginTop: 35,
                        marginRight: 10
                    }
                }}
                containerStyle={{
                    backgroundColor: '#09061C',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0
                }}
            />

            {/* Form */}
            <Text style={styles.sectionText}>Property Address</Text>

            {/* Street Address */}
            <View style={styles.searchContainer}>
                <TextInput 
                    type='text'
                    placeholder='Enter Street Address'
                    placeholderTextColor='#ffffff75'
                    style={styles.searchInput}
                    keyboardAppearance='dark'
                />
            </View>

            {/* City, ST, Zip Code */}
            <View style={styles.searchContainer}>
                <TextInput 
                    type='text'
                    placeholder='City, State, Zip Code'
                    placeholderTextColor='#ffffff75'
                    style={styles.searchInput}
                    keyboardAppearance='dark'
                />
            </View>

            <Text style={styles.sectionText}>Unit(s)</Text>
            <View style={styles.searchContainer}>
                <TextInput 
                    type='text'
                    placeholder='Enter Unit Number'
                    placeholderTextColor='#ffffff75'
                    style={styles.searchInput}
                    keyboardAppearance='dark'
                />
            </View>

            <TouchableOpacity style={styles.addButton}>
                <Feather name='plus' size={25} style={styles.addButtonText} />
                <Text style={styles.addButtonText}>Add Unit</Text>
            </TouchableOpacity>
        </View>


    );
}

export default AddProperties;