import React from 'react';
import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './prop-styles';


// THINGS I NEED
    // Mask for the Zip Code Text Input
    // Function to add more units when button is pressed
    // Function to save content

const AddProperties = () => {

    const navigation = useNavigation();

    // For Picker Select
        // Styles
        const pickerStyles = {
            inputIOS: {
                marginHorizontal: 20,
                marginTop: 10,
                marginBottom: 20,
                borderColor: '#ffffff50',
                borderRadius: 10,
                borderWidth: 1,
                height: 45,
                flexDirection: 'row',
                color: '#fff',
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: '600'
            },
            inputAndroid: {
                marginHorizontal: 20,
                marginTop: 10,
                marginBottom: 20,
                borderColor: '#ffffff50',
                borderRadius: 10,
                borderWidth: 1,
                height: 45,
                flexDirection: 'row',
                color: '#fff',
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: '600'
            }
        }
    // Placeholder
    const StatePlaceholder = {
        label: 'Select State...',
        value: null,
        color: '#fff'
    }

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

            <KeyboardAwareScrollView>
                {/* Form */}
                <Text style={styles.sectionText}>Property Address</Text>

                {/* Street Address */}
                <View style={styles.searchContainer}>
                    <TextInput 
                        type='text'
                        placeholder='Enter Street Address...'
                        placeholderTextColor='#ffffff80'
                        style={styles.propertyInput}
                        keyboardAppearance='dark'
                    />
                </View>
                
                {/* CITY */}
                <View style={styles.searchContainer}>
                    <TextInput 
                        type='text'
                        placeholder='Enter City...'
                        placeholderTextColor='#ffffff80'
                        style={styles.propertyInput}
                        keyboardAppearance='dark'
                    />
                </View>

                {/* STATE */}
                <RNPickerSelect
                        placeholder={StatePlaceholder}
                        style={pickerStyles}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'AL', value: 'AL', color: 'white' },
                            { label: 'A. Samoa', value: 'A. Samoa', color: 'white' },
                            { label: 'AK', value: 'AK', color: 'white' },
                            { label: 'AZ', value: 'AZ', color: 'white' },
                            { label: 'AR', value: 'AR', color: 'white' },
                            { label: 'CA', value: 'CA', color: 'white' },
                            { label: 'CO', value: 'CO', color: 'white' },
                            { label: 'CT', value: 'CT', color: 'white' },
                            { label: 'DE', value: 'DE', color: 'white' },
                            { label: 'FL', value: 'FL', color: 'white' },
                            { label: 'GA', value: 'GA', color: 'white' },
                            { label: 'Guam', value: 'Guam', color: 'white' },
                            { label: 'HI', value: 'HI', color: 'white' },
                            { label: 'ID', value: 'ID', color: 'white' },
                            { label: 'IL', value: 'IL', color: 'white' },
                            { label: 'IN', value: 'IN', color: 'white' },
                            { label: 'IA', value: 'IA', color: 'white' },
                            { label: 'KS', value: 'KS', color: 'white' },
                            { label: 'KY', value: 'KY', color: 'white' },
                            { label: 'LA', value: 'LA', color: 'white' },
                            { label: 'ME', value: 'ME', color: 'white' },
                            { label: 'MD', value: 'MD', color: 'white' },
                            { label: 'MA', value: 'MA', color: 'white' },
                            { label: 'MI', value: 'MI', color: 'white' },
                            { label: 'MN', value: 'MN', color: 'white' },
                            { label: 'MS', value: 'MS', color: 'white' },
                            { label: 'MO', value: 'MO', color: 'white' },
                            { label: 'MT', value: 'MT', color: 'white' },
                            { label: 'NE', value: 'NE', color: 'white' },
                            { label: 'NV', value: 'NV', color: 'white' },
                            { label: 'NH', value: 'NH', color: 'white' },
                            { label: 'NJ', value: 'NJ', color: 'white' },
                            { label: 'NM', value: 'NM', color: 'white' },
                            { label: 'NY', value: 'NY', color: 'white' },
                            { label: 'NC', value: 'NC', color: 'white' },
                            { label: 'ND', value: 'ND', color: 'white' },
                            { label: 'OH', value: 'OH', color: 'white' },
                            { label: 'OK', value: 'OK', color: 'white' },
                            { label: 'OR', value: 'OR', color: 'white' },
                            { label: 'PA', value: 'PA', color: 'white' },
                            { label: 'Puerto Rico', value: 'Puerto Rico', color: 'white' },
                            { label: 'RI', value: 'RI', color: 'white' },
                            { label: 'SC', value: 'SC', color: 'white' },
                            { label: 'SD', value: 'SD', color: 'white' },
                            { label: 'TN', value: 'TN', color: 'white' },
                            { label: 'TX', value: 'TX', color: 'white' },
                            { label: 'UT', value: 'UT', color: 'white' },
                            { label: 'VT', value: 'VT', color: 'white' },
                            { label: 'VA', value: 'VA', color: 'white' },
                            { label: 'WA', value: 'WA', color: 'white' },
                            { label: 'WV', value: 'WV', color: 'white' },
                            { label: 'WI', value: 'WI', color: 'white' },
                            { label: 'WY', value: 'WY', color: 'white' },
                        ]}
                />

                {/* ZIP CODE */}
                <View style={styles.searchContainer}>
                    <TextInput 
                        type='text'
                        placeholder='Enter Zip Code...'
                        placeholderTextColor='#ffffff80'
                        style={styles.propertyInput}
                        keyboardAppearance='dark'
                    />
                </View>
                
                {/* Units */}
                <Text style={styles.sectionText}>Unit(s)</Text>
                <View style={styles.searchContainer}>
                    <TextInput 
                        type='text'
                        placeholder='Enter Unit Number (if applicable)...'
                        placeholderTextColor='#ffffff80'
                        style={styles.propertyInput}
                        keyboardAppearance='dark'
                    />
                </View>
                {/* Add Units Button */}
                <TouchableOpacity style={styles.addButton}>
                    <Feather name='plus' size={25} style={styles.addButtonText} />
                    <Text style={styles.addButtonText}>Add Unit</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default AddProperties;